import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const generatedPath = path.join(repoRoot, "src", "data", "toeicListeningTests.generated.json");
const rawBase = "C:/Users/hahie/OneDrive/Desktop/craw-data/output/ListeningTOEIC–2";
const transcriptBase = "C:/Users/hahie/OneDrive/Desktop/craw-data/transcripts-local/ListeningTOEIC–2";

const rawCombinedPath = path.join(rawBase, "toeic-de-2-listening-combined.json");
const part2TranscriptPath = path.join(
  transcriptBase,
  "thi-th-toeic-online-listening-test-2-part-1-thi-tr-c-nghi-m",
  "assets",
  "audio-2-8a4905308d35.txt",
);
const part3TranscriptPath = path.join(
  transcriptBase,
  "thi-th-toeic-online-listening-test-2-part-2-thi-tr-c-nghi-m",
  "assets",
  "audio-4fe85d3075e1.txt",
);
const part4TranscriptPath = path.join(
  transcriptBase,
  "thi-th-toeic-online-listening-test-2-part-3-thi-tr-c-nghi-m",
  "assets",
  "audio-f0bd0885291b.txt",
);

const PART2_AUDIO_URL = "https://dethitracnghiem.vn/wp-content/uploads/2025/08/LC-TOIEC-de-2-P.2.mp3?_=2";

const ANSWER_KEY = {
  1: "B",
  2: "B",
  3: "C",
  4: "D",
  5: "C",
  6: "D",
  7: "A",
  8: "A",
  9: "B",
  10: "B",
  11: "C",
  12: "C",
  13: "B",
  14: "A",
  15: "B",
  16: "B",
  17: "C",
  18: "C",
  19: "B",
  20: "C",
  21: "B",
  22: "A",
  23: "B",
  24: "A",
  25: "B",
  26: "C",
  27: "B",
  28: "A",
  29: "C",
  30: "A",
  31: "A",
  32: "B",
  33: "D",
  34: "C",
  35: "B",
  36: "A",
  37: "C",
  38: "A",
  39: "D",
  40: "C",
  41: "A",
  42: "D",
  43: "D",
  44: "C",
  45: "B",
  46: "D",
  47: "B",
  48: "C",
  49: "A",
  50: "A",
  51: "D",
  52: "A",
  53: "C",
  54: "C",
  55: "A",
  56: "C",
  57: "A",
  58: "B",
  59: "B",
  60: "C",
  61: "A",
  62: "B",
  63: "C",
  64: "B",
  65: "B",
  66: "C",
  67: "A",
  68: "A",
  69: "D",
  70: "A",
  71: "D",
  72: "C",
  73: "A",
  74: "D",
  75: "B",
  76: "D",
  77: "B",
  78: "A",
  79: "D",
  80: "D",
  81: "C",
  82: "D",
  83: "B",
  84: "A",
  85: "A",
  86: "B",
  87: "C",
  88: "B",
  89: "D",
  90: "B",
  91: "A",
  92: "D",
  93: "A",
  94: "C",
  95: "A",
  96: "B",
  97: "B",
  98: "C",
  99: "A",
  100: "B",
};

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function normalizeText(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .replace(/\u2019/g, "'")
    .trim();
}

function normalizeAssetUrl(url) {
  if (!url) return "";
  const rawValue = String(url).trim();
  if (!/^https?:\/\//i.test(rawValue)) return rawValue;
  try {
    return encodeURI(decodeURI(rawValue));
  } catch {
    return encodeURI(rawValue);
  }
}

function instructionForPart(toeicPart) {
  if (toeicPart === "PART 1") return "For each question, look at the picture and choose the best answer.";
  if (toeicPart === "PART 2") return "Listen to the question or statement and choose the best response.";
  if (toeicPart === "PART 3") return "Listen to the conversation and answer the questions.";
  return "Listen to the talk and answer the questions.";
}

function explanationForPart(toeicPart, correctKey) {
  if (toeicPart === "PART 1") return `Bức ảnh phù hợp nhất với lựa chọn ${correctKey}.`;
  if (toeicPart === "PART 2") return `Phản hồi ${correctKey} là câu trả lời phù hợp nhất cho câu hỏi hoặc câu nói vừa nghe.`;
  if (toeicPart === "PART 3") return `Nội dung hội thoại cho thấy đáp án đúng là ${correctKey}.`;
  return `Nội dung bài nói cho thấy đáp án đúng là ${correctKey}.`;
}

function parseGroupedTranscript(text) {
  const lines = text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const groups = new Map();
  const prompts = new Map();

  let currentGroup = null;
  let currentQuestionNumber = null;
  let currentPrompt = "";
  let collectingPassage = false;

  const commitPrompt = () => {
    if (currentQuestionNumber !== null) {
      prompts.set(currentQuestionNumber, normalizeText(currentPrompt));
    }
  };

  for (const line of lines) {
    const groupMatch = line.match(/^Questions\s+(\d+)\s+through\s+(\d+)\s+refer to the following/i);
    if (groupMatch) {
      commitPrompt();
      currentQuestionNumber = null;
      currentPrompt = "";
      currentGroup = {
        start: Number(groupMatch[1]),
        end: Number(groupMatch[2]),
        passageLines: [],
      };
      groups.set(currentGroup.start, currentGroup);
      collectingPassage = true;
      continue;
    }

    const numberMatch = line.match(/^Number\s+(\d+)\.\s*(.*)$/);
    if (numberMatch) {
      commitPrompt();
      currentQuestionNumber = Number(numberMatch[1]);
      currentPrompt = numberMatch[2] || "";
      collectingPassage = false;
      continue;
    }

    if (/^Part\s+\d+\./i.test(line)) continue;
    if (/^Go on to the next page\./i.test(line)) continue;

    if (collectingPassage && currentGroup) {
      currentGroup.passageLines.push(line);
      continue;
    }

    if (currentQuestionNumber !== null) {
      currentPrompt = normalizeText(`${currentPrompt} ${line}`);
    }
  }

  commitPrompt();

  const transcriptByQuestion = new Map();
  for (const group of groups.values()) {
    const passage = normalizeText(group.passageLines.join(" "));
    for (let number = group.start; number <= group.end; number += 1) {
      transcriptByQuestion.set(number, passage);
    }
  }

  return { prompts, transcriptByQuestion };
}

function parsePart2Transcript(text) {
  const lines = text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const prompts = new Map();
  const optionsByQuestion = new Map();
  const transcriptByQuestion = new Map();
  const wordToNumber = new Map([
    ["seven", 7],
    ["eight", 8],
    ["nine", 9],
    ["ten", 10],
    ["eleven", 11],
    ["twelve", 12],
    ["thirteen", 13],
    ["fourteen", 14],
    ["fifteen", 15],
    ["sixteen", 16],
    ["seventeen", 17],
    ["eighteen", 18],
    ["nineteen", 19],
    ["twenty", 20],
    ["twenty one", 21],
    ["twenty-two", 22],
    ["twenty two", 22],
    ["twenty-three", 23],
    ["twenty three", 23],
    ["twenty-four", 24],
    ["twenty four", 24],
    ["twenty-five", 25],
    ["twenty five", 25],
    ["twenty-six", 26],
    ["twenty six", 26],
    ["twenty-seven", 27],
    ["twenty seven", 27],
    ["twenty-eight", 28],
    ["twenty eight", 28],
    ["twenty-nine", 29],
    ["twenty nine", 29],
    ["thirty", 30],
    ["thirty-one", 31],
    ["thirty one", 31],
  ]);
  let currentNumber = null;
  let currentPrompt = "";
  let currentOptions = [];

  const commit = () => {
    if (currentNumber === null) return;
    prompts.set(currentNumber, normalizeText(currentPrompt));
    optionsByQuestion.set(
      currentNumber,
      currentOptions.map((option) => ({
        key: option.key,
        text: normalizeText(option.text),
      })),
    );
    transcriptByQuestion.set(
      currentNumber,
      normalizeText([currentPrompt, ...currentOptions.map((option) => `${option.key}. ${option.text}`)].join(" ")),
    );
  };

  for (const line of lines) {
    const normalizedLine = line.replace(/[–—]/g, "-");
    let numberMatch = normalizedLine.match(/^Number\s+(\d+)\.\s*(.*)$/i);

    if (!numberMatch) {
      const wordMatch = normalizedLine.match(/^Number\s+([A-Za-z -]+)\.?\s*(.*)$/i);
      if (wordMatch) {
        const normalizedWord = wordMatch[1].toLowerCase().replace(/\s+/g, " ").trim();
        const mappedNumber = wordToNumber.get(normalizedWord);
        if (mappedNumber) {
          numberMatch = [wordMatch[0], String(mappedNumber), wordMatch[2] || ""];
        }
      }
    }

    if (numberMatch) {
      commit();
      currentNumber = Number(numberMatch[1]);
      currentPrompt = numberMatch[2] || "";
      currentOptions = [];
      continue;
    }

    if (currentNumber === null) continue;

    const optionMatch = normalizedLine.match(/^([ABC])\.\s*(.*)$/);
    if (optionMatch) {
      currentOptions.push({ key: optionMatch[1], text: optionMatch[2] || "" });
      continue;
    }

    if (currentOptions.length === 0) {
      currentPrompt = normalizeText(`${currentPrompt} ${normalizedLine}`);
      continue;
    }

    const lastOption = currentOptions[currentOptions.length - 1];
    lastOption.text = normalizeText(`${lastOption.text} ${normalizedLine}`);
  }

  commit();
  return { prompts, optionsByQuestion, transcriptByQuestion };
}

function buildQuestion(rawQuestion, displayNumber, sectionId, pageIndex, overrides = {}) {
  const toeicPart = rawQuestion.part;
  const options = overrides.options
    ? overrides.options
    : Object.entries(rawQuestion.options || {})
        .slice(0, toeicPart === "PART 2" ? 3 : 4)
        .map(([key, text]) => ({
          key,
          text: normalizeText(text),
        }));
  const correctKey = Object.prototype.hasOwnProperty.call(ANSWER_KEY, displayNumber)
    ? ANSWER_KEY[displayNumber]
    : null;

  return {
    id: `${sectionId}-q${displayNumber}`,
    displayNumber,
    sourceNumber: rawQuestion.number,
    toeicPart,
    prompt: overrides.prompt ?? (rawQuestion.prompt ? normalizeText(rawQuestion.prompt) : null),
    imageUrl: normalizeAssetUrl(overrides.imageUrl ?? rawQuestion.image_url ?? ""),
    audioUrl: normalizeAssetUrl(overrides.audioUrl ?? ""),
    options,
    correctKey,
    explanation: correctKey ? explanationForPart(toeicPart, correctKey) : null,
    transcript: overrides.transcript ?? null,
    instruction: instructionForPart(toeicPart),
    groupIndex: overrides.groupIndex ?? null,
    sourceRef: {
      pageIndex,
      originalNumber: rawQuestion.number,
    },
  };
}

function buildTest2() {
  const raw = readJson(rawCombinedPath);
  const part2Data = parsePart2Transcript(readText(part2TranscriptPath));
  const part3Data = parseGroupedTranscript(readText(part3TranscriptPath));
  const part4Data = parseGroupedTranscript(readText(part4TranscriptPath));

  const page1 = raw.pages[0];
  const page2 = raw.pages[1];
  const page3 = raw.pages[2];
  const part1AudioUrl = normalizeAssetUrl(page1.audio_url);
  const part2AudioUrl = normalizeAssetUrl(PART2_AUDIO_URL);

  const part1Questions = page1.questions.map((question, index) => {
    const displayNumber = index + 1;
    if (displayNumber <= 6) {
      return buildQuestion(question, displayNumber, "lt2-part1", 0, {
        transcript: null,
        audioUrl: part1AudioUrl,
      });
    }

    return buildQuestion({ ...question, part: "PART 2" }, displayNumber, "lt2-part1", 0, {
      prompt: part2Data.prompts.get(displayNumber) ?? (question.prompt ? normalizeText(question.prompt) : `Câu ${displayNumber}`),
      options: part2Data.optionsByQuestion.get(displayNumber) ?? [
        { key: "A", text: "Đáp án A" },
        { key: "B", text: "Đáp án B" },
        { key: "C", text: "Đáp án C" },
      ],
      transcript: part2Data.transcriptByQuestion.get(displayNumber) ?? null,
      imageUrl: "",
      audioUrl: part2AudioUrl,
    });
  });

  const imageByGroupStartPart3 = new Map();
  page2.questions.forEach((question, index) => {
    if (question.image_url) {
      imageByGroupStartPart3.set(index + 32, normalizeAssetUrl(question.image_url));
    }
  });

  const imageByGroupStartPart4 = new Map();
  page3.questions.forEach((question, index) => {
    if (question.image_url) {
      imageByGroupStartPart4.set(index + 71, normalizeAssetUrl(question.image_url));
    }
  });

  const part3Questions = page2.questions.map((question, index) => {
    const displayNumber = index + 32;
    const groupStart = 32 + Math.floor((displayNumber - 32) / 3) * 3;
    return buildQuestion(question, displayNumber, "lt2-part2", 1, {
      prompt: part3Data.prompts.get(displayNumber) ?? normalizeText(question.prompt),
      transcript: part3Data.transcriptByQuestion.get(displayNumber) ?? null,
      groupIndex: Math.floor((displayNumber - 32) / 3) + 1,
      imageUrl: imageByGroupStartPart3.get(groupStart) ?? question.image_url ?? "",
    });
  });

  const part4Questions = page3.questions.map((question, index) => {
    const displayNumber = index + 71;
    const groupStart = 71 + Math.floor((displayNumber - 71) / 3) * 3;
    return buildQuestion(question, displayNumber, "lt2-part3", 2, {
      prompt: part4Data.prompts.get(displayNumber) ?? normalizeText(question.prompt),
      transcript: part4Data.transcriptByQuestion.get(displayNumber) ?? null,
      groupIndex: Math.floor((displayNumber - 71) / 3) + 1,
      imageUrl: imageByGroupStartPart4.get(groupStart) ?? question.image_url ?? "",
    });
  });

  return {
    id: "listening-test-2",
    name: "Đề Listening 2",
    desc: "Đề nghe được chuẩn hóa từ bộ crawl Listening TOEIC 2.",
    status: "ready",
    hasAnswerKey: true,
    sections: [
      {
        id: "lt2-part1",
        label: "Part 1",
        title: "Listening Part 1 + Part 2",
        desc: "31 câu đầu tiên, gồm TOEIC Part 1 và Part 2.",
        audioUrl: part1AudioUrl,
        questionCount: part1Questions.length,
        toeicParts: ["PART 1", "PART 2"],
        questions: part1Questions,
      },
      {
        id: "lt2-part2",
        label: "Part 2",
        title: "Listening Part 3",
        desc: "39 câu hỏi hội thoại, từ câu 32 đến 70.",
        audioUrl: normalizeAssetUrl(page2.audio_url),
        questionCount: part3Questions.length,
        toeicParts: ["PART 3"],
        questions: part3Questions,
      },
      {
        id: "lt2-part3",
        label: "Part 3",
        title: "Listening Part 4",
        desc: "30 câu hỏi bài nói, từ câu 71 đến 100.",
        audioUrl: normalizeAssetUrl(page3.audio_url),
        questionCount: part4Questions.length,
        toeicParts: ["PART 4"],
        questions: part4Questions,
      },
    ],
  };
}

function main() {
  const generated = readJson(generatedPath);
  const test2 = buildTest2();
  generated.tests = generated.tests.map((test) => (test.id === "listening-test-2" ? test2 : test));
  fs.writeFileSync(generatedPath, `${JSON.stringify(generated, null, 2)}\n`, "utf8");
  console.log("Updated listening-test-2 to use direct crawl image/audio URLs.");
}

main();
