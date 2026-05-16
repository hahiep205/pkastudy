import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const generatedPath = path.join(repoRoot, "src", "data", "toeicListeningTests.generated.json");
const rawBase = "C:/Users/hahie/OneDrive/Desktop/craw-data/output/ListeningTOEIC\u20131";
const transcriptBase = "C:/Users/hahie/OneDrive/Desktop/craw-data/transcripts-local/ListeningTOEIC\u20131";

const rawCombinedPath = path.join(rawBase, "toeic-de-1-listening-combined.json");
const part12TranscriptPath = path.join(
  transcriptBase,
  "thi-th-toeic-online-1-listening-part-1-thi-tr-c-nghi-m",
  "assets",
  "audio-f2c3b68ff554.txt",
);
const part3TranscriptPath = path.join(
  transcriptBase,
  "thi-th-toeic-online-1-listening-part-2-thi-tr-c-nghi-m",
  "assets",
  "audio-670243295310.txt",
);
const part4TranscriptPath = path.join(
  transcriptBase,
  "thi-th-toeic-online-1-listening-part-3-thi-tr-c-nghi-m",
  "assets",
  "audio-74594a957fed.txt",
);

const ANSWER_KEY = {
  1: "A",
  2: "B",
  3: "B",
  4: "D",
  5: "C",
  6: "C",
  7: "B",
  8: "C",
  9: "C",
  10: "A",
  11: "C",
  12: "C",
  13: "C",
  14: "B",
  15: "A",
  16: "A",
  17: "A",
  18: "C",
  19: "B",
  20: "C",
  21: "A",
  22: "B",
  23: "C",
  24: "A",
  25: "C",
  26: "A",
  27: "B",
  28: "A",
  29: "C",
  30: "C",
  31: "B",
  32: "D",
  33: "B",
  34: "B",
  35: "A",
  36: "D",
  37: "B",
  38: "A",
  39: "C",
  40: "D",
  41: "C",
  42: "D",
  43: "A",
  44: "C",
  45: "D",
  46: "B",
  47: "B",
  48: "C",
  49: "A",
  50: "C",
  51: "D",
  52: "A",
  53: "A",
  54: "B",
  55: "C",
  56: "C",
  57: "A",
  58: "D",
  59: "B",
  60: "A",
  61: "D",
  62: "C",
  63: "C",
  64: "A",
  65: "D",
  66: "C",
  67: "B",
  68: "B",
  69: "D",
  70: "A",
  71: "D",
  72: "A",
  73: "C",
  74: "C",
  75: "B",
  76: "C",
  77: "B",
  78: "A",
  79: "C",
  80: "A",
  81: "B",
  82: "C",
  83: "A",
  84: "B",
  85: "C",
  86: "D",
  87: "A",
  88: "C",
  89: "A",
  90: "B",
  91: "C",
  92: "A",
  93: "B",
  94: "D",
  95: "B",
  96: "A",
  97: "D",
  98: "C",
  99: "A",
  100: "D",
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

function parsePart2Audio(text) {
  const lines = text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const map = new Map();
  let currentNumber = null;
  let currentPrompt = "";
  let currentOptions = [];
  let collecting = false;

  const commit = () => {
    if (!currentNumber || currentNumber < 7 || currentNumber > 31) return;
    map.set(currentNumber, {
      prompt: normalizeText(currentPrompt),
      options: currentOptions.map((option) => ({
        key: option.key,
        text: normalizeText(option.text),
      })),
      transcript: normalizeText([
        currentPrompt,
        ...currentOptions.map((option) => `${option.key}. ${option.text}`),
      ].join(" ")),
    });
  };

  for (const line of lines) {
    const numberMatch = line.match(/^Number\s+(\d+)\.\s*(.*)$/);
    if (numberMatch) {
      commit();
      currentNumber = Number(numberMatch[1]);
      currentPrompt = numberMatch[2] || "";
      currentOptions = [];
      collecting = currentNumber >= 7 && currentNumber <= 31;
      continue;
    }

    if (!collecting || currentNumber === null) continue;

    const optionMatch = line.match(/^([ABC])\.\s*(.*)$/);
    if (optionMatch) {
      currentOptions.push({ key: optionMatch[1], text: optionMatch[2] });
      continue;
    }

    if (currentOptions.length === 0) {
      currentPrompt = normalizeText(`${currentPrompt} ${line}`);
    }
  }

  commit();
  return map;
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

function buildQuestion(rawQuestion, displayNumber, sectionId, pageIndex, overrides = {}) {
  const toeicPart = rawQuestion.part;
  const options = overrides.options
    ? overrides.options
    : Object.entries(rawQuestion.options || {}).map(([key, text]) => ({
        key,
        text: normalizeText(text),
      }));
  const correctKey = ANSWER_KEY[displayNumber] || null;
  const transcript = overrides.transcript ?? null;

  return {
    id: `${sectionId}-q${displayNumber}`,
    displayNumber,
    sourceNumber: rawQuestion.number,
    toeicPart,
    prompt: overrides.prompt ?? (rawQuestion.prompt ? normalizeText(rawQuestion.prompt) : null),
    imageUrl: rawQuestion.image_url || null,
    options,
    correctKey,
    explanation: correctKey ? explanationForPart(toeicPart, correctKey) : null,
    transcript,
    instruction: instructionForPart(toeicPart),
    groupIndex: overrides.groupIndex ?? null,
    sourceRef: {
      pageIndex,
      originalNumber: rawQuestion.number,
    },
  };
}

function buildTest1() {
  const raw = readJson(rawCombinedPath);
  const part2Audio = parsePart2Audio(readText(part12TranscriptPath));
  const part3Data = parseGroupedTranscript(readText(part3TranscriptPath));
  const part4Data = parseGroupedTranscript(readText(part4TranscriptPath));

  const page1 = raw.pages[0];
  const page2 = raw.pages[1];
  const page3 = raw.pages[2];

  const part1Questions = page1.questions.map((question, index) => {
    const displayNumber = index + 1;
    const overrides = displayNumber >= 7
      ? part2Audio.get(displayNumber)
      : {};

    return buildQuestion(question, displayNumber, "lt1-part1", 0, {
      prompt: overrides?.prompt ?? null,
      options: overrides?.options,
      transcript: overrides?.transcript ?? null,
    });
  });

  const part3Questions = page2.questions.map((question, index) => {
    const displayNumber = index + 32;
    return buildQuestion(question, displayNumber, "lt1-part2", 1, {
      prompt: part3Data.prompts.get(displayNumber) ?? normalizeText(question.prompt),
      transcript: part3Data.transcriptByQuestion.get(displayNumber) ?? null,
      groupIndex: Math.floor((displayNumber - 32) / 3) + 1,
    });
  });

  const part4Questions = page3.questions.map((question, index) => {
    const displayNumber = index + 71;
    return buildQuestion(question, displayNumber, "lt1-part3", 2, {
      prompt: part4Data.prompts.get(displayNumber) ?? normalizeText(question.prompt),
      transcript: part4Data.transcriptByQuestion.get(displayNumber) ?? null,
      groupIndex: Math.floor((displayNumber - 71) / 3) + 1,
    });
  });

  return {
    id: "listening-test-1",
    name: "Đề Listening 1",
    desc: "Đề nghe được chuẩn hóa từ bộ crawl Listening TOEIC 1.",
    status: "ready",
    hasAnswerKey: true,
    sections: [
      {
        id: "lt1-part1",
        label: "Part 1",
        title: "Listening Part 1 + Part 2",
        desc: "31 câu đầu tiên, gồm TOEIC Part 1 và Part 2.",
        audioUrl: page1.audio_url,
        questionCount: part1Questions.length,
        toeicParts: ["PART 1", "PART 2"],
        questions: part1Questions,
      },
      {
        id: "lt1-part2",
        label: "Part 2",
        title: "Listening Part 3",
        desc: "39 câu hỏi hội thoại, từ câu 32 đến 70.",
        audioUrl: page2.audio_url,
        questionCount: part3Questions.length,
        toeicParts: ["PART 3"],
        questions: part3Questions,
      },
      {
        id: "lt1-part3",
        label: "Part 3",
        title: "Listening Part 4",
        desc: "30 câu hỏi bài nói, từ câu 71 đến 100.",
        audioUrl: page3.audio_url,
        questionCount: part4Questions.length,
        toeicParts: ["PART 4"],
        questions: part4Questions,
      },
    ],
  };
}

function main() {
  const generated = readJson(generatedPath);
  const test1 = buildTest1();
  generated.tests = generated.tests.map((test) => (test.id === "listening-test-1" ? test1 : test));
  fs.writeFileSync(generatedPath, `${JSON.stringify(generated, null, 2)}\n`, "utf8");
  console.log("Updated listening-test-1 with answer key and transcript mapping.");
}

main();
