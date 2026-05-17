import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const generatedPath = path.join(repoRoot, "src", "data", "toeicReadingTests.generated.json");

const TEST1_RAW_BASE = "C:/Users/hahie/OneDrive/Desktop/craw-data/crawl-reading/readingde1";
const TEST2_RAW_BASE = "C:/Users/hahie/OneDrive/Desktop/craw-data/crawl-reading/readingde2";

const TEST1_PART1_PATH = path.join(TEST1_RAW_BASE, "Part1", "thi-th-toeic-online-1-reading-part-1-thi-tr-c-nghi-m.json");
const TEST1_PART2_PATH = path.join(TEST1_RAW_BASE, "Part2", "thi-th-toeic-online-1-reading-part-2-thi-tr-c-nghi-m.json");
const TEST1_PART3_PATH = path.join(TEST1_RAW_BASE, "Part3", "thi-th-toeic-online-1-reading-part-3-thi-tr-c-nghi-m.json");

const TEST2_PART1_PATH = path.join(TEST2_RAW_BASE, "Part1", "thi-th-toeic-online-reading-test-2-part-1-thi-tr-c-nghi-m.json");
const TEST2_PART2_PATH = path.join(TEST2_RAW_BASE, "Part2", "thi-th-toeic-online-reading-test-2-part-2-thi-tr-c-nghi-m.json");
const TEST2_PART3_PATH = path.join(TEST2_RAW_BASE, "Part3", "thi-th-toeic-online-reading-test-2-part-3-thi-tr-c-nghi-m.json");

const PART6_GROUP_STARTS_TEST1 = [31, 35, 39, 43];
const PART7A_GROUP_STARTS_TEST1 = [1, 3, 5, 7, 9, 12, 15, 19, 23, 27];
const PART7B_GROUP_STARTS_TEST1 = [1, 5, 10, 15, 20, 25];
const PART7A_IMAGE_RULES_TEST1 = [
  { start: 3, end: 4, imageSourceNumber: 3 },
  { start: 5, end: 6, imageSourceNumber: 5 },
  { start: 7, end: 8, imageSourceNumber: 8 },
  { start: 9, end: 11, imageSourceNumber: 9 },
  { start: 12, end: 14, imageSourceNumber: 12 },
  { start: 15, end: 18, imageSourceNumber: 19 },
  { start: 19, end: 22, imageSourceNumber: 19 },
  { start: 23, end: 25, imageSourceNumber: 23 },
  { start: 26, end: 29, imageSourceNumber: 27 },
];
const PART7B_IMAGE_RULES_TEST1 = [
  { start: 1, end: 4, imageSourceNumber: 1 },
  { start: 5, end: 9, imageSourceNumber: 5 },
  { start: 10, end: 14, imageSourceNumber: 10 },
  { start: 15, end: 19, imageSourceNumber: 15 },
  { start: 20, end: 24, imageSourceNumber: 20 },
  { start: 25, end: 29, imageSourceNumber: 25 },
];

const TEST1_READING_PROMPT_OVERRIDES = {
  Part2: {
    1: "Where most likely would the information be found?",
  },
};

const TEST1_PART1_ANSWER_KEYS = {
  1: "B", 2: "D", 3: "C", 4: "B", 5: "D", 6: "D", 7: "A", 8: "D", 9: "A", 10: "B",
  11: "A", 12: "B", 13: "A", 14: "C", 15: "D", 16: "C", 17: "D", 18: "B", 19: "A", 20: "A",
  21: "D", 22: "A", 23: "B", 24: "A", 25: "D", 26: "D", 27: "C", 28: "C", 29: "C", 30: "B",
  31: "D", 32: "D", 33: "C", 34: "B", 35: "C", 36: "A", 37: "B", 38: "A", 39: "A", 40: "C",
  41: "B", 42: "C", 43: "A", 44: "A", 45: "B", 46: "A",
};
const TEST1_PART2_ANSWER_KEYS = {
  1: "C", 2: "B", 3: "B", 4: "C", 5: "B", 6: "D", 7: "A", 8: "B", 9: "A", 10: "D",
  11: "B", 12: "B", 13: "A", 14: "B", 15: "A", 16: "C", 17: "D", 18: "C", 19: "A", 20: "C",
  21: "D", 22: "C", 23: "C", 24: "D", 25: "A", 26: "D", 27: "B", 28: "C", 29: "A",
};
const TEST1_PART3_ANSWER_KEYS = {
  1: "D", 2: "B", 3: "C", 4: "C", 5: "B", 6: "C", 7: "C", 8: "A", 9: "C", 10: "A",
  11: "A", 12: "B", 13: "C", 14: "C", 15: "C", 16: "D", 17: "B", 18: "A", 19: "B", 20: "D",
  21: "C", 22: "A", 23: "B", 24: "B", 25: "A", 26: "C", 27: "C", 28: "D", 29: "B",
};

const TEST2_PART5_ANSWER_KEYS = {
  1: "C", 2: "C", 3: "A", 4: "B", 5: "D", 6: "A", 7: "C", 8: "D", 9: "C", 10: "D",
  11: "A", 12: "D", 13: "C", 14: "A", 15: "C", 16: "A", 17: "A", 18: "B", 19: "B", 20: "D",
  21: "C", 22: "A", 23: "A", 24: "C", 25: "B", 26: "B", 27: "D", 28: "D", 29: "B", 30: "B",
};
const TEST2_PART6_ANSWER_KEYS = {
  1: "C", 2: "A", 3: "D", 4: "A", 5: "D", 6: "C", 7: "C", 8: "A",
  9: "B", 10: "C", 11: "A", 12: "C", 13: "C", 14: "D", 15: "B", 16: "A",
};
const TEST2_PART7_ANSWER_KEYS = {
  1: "A", 2: "B", 3: "A", 4: "D", 5: "A", 6: "C", 7: "A", 8: "B", 9: "D", 10: "C",
  11: "B", 12: "D", 13: "D", 14: "B", 15: "C", 16: "D", 17: "B", 18: "D", 19: "B", 20: "A",
  21: "C", 22: "B", 23: "D", 24: "B", 25: "D", 26: "A", 27: "C", 28: "A", 29: "D", 30: "B",
  31: "B", 32: "C", 33: "D", 34: "B", 35: "A", 36: "D", 37: "C", 38: "C", 39: "B", 40: "C",
  41: "D", 42: "A", 43: "B", 44: "D", 45: "B", 46: "C", 47: "A", 48: "D", 49: "B", 50: "D",
  51: "A", 52: "B", 53: "C", 54: "B",
};

const TEST2_PART7_OPTION_OVERRIDES = {
  11: [
    { key: "A", text: "[1]" },
    { key: "B", text: "[2]" },
    { key: "C", text: "[3]" },
    { key: "D", text: "[4]" },
  ],
  25: [
    { key: "A", text: "[1]" },
    { key: "B", text: "[2]" },
    { key: "C", text: "[3]" },
    { key: "D", text: "[4]" },
  ],
};

const TEST2_PART7_GROUP_SUPPLEMENTS = {
  1: {
    sharedPassageOverride: [
      "Questions 147-148 refer to the following invitation.",
      "",
      "Focus Your Social Media Presence",
      "",
      "For small-business owners, it can be a challenge to stand out in a competitive social media environment.",
      "Successfully reaching your target market involves knowing how and where to promote your products in a way that is effective and memorable.",
      "The Savan Business Center offers support for business owners who need a boost in doing just that.",
      "For over 50 years, we've been helping entrepreneurs grow their sales through insight of current industry trends and understanding of our clients' unique needs.",
      "Let us help you get more organized in creating effective and far-reaching social media content.",
      "Our latest webinar, Focus Your Social Media Presence, will cover topics related to making your business stand out.",
      "You can sign up on our event Web page.",
      "",
      "Date: February 5",
      "Time: 10:00 A.M. to 11:00 A.M.",
      "Event Web page: https://www.savanbusinesscenter.com/socialmedia",
    ].join("\n"),
  },
  7: {
    sharedPassageOverride: [
      "Questions 153-154 refer to the following text-message chain.",
      "",
      "Michael Liu (9:43 A.M.)",
      "Hi, Jana. I'm at Biz Plus. The paper you need is out of stock until next week. Will another color work?",
      "",
      "Jana Bhat (9:45 A.M.)",
      "What are the options?",
      "",
      "Michael Liu (9:46 A.M.)",
      "They have yellow, green, and pink in the brand that you prefer.",
      "",
      "Jana Bhat (9:47 A.M.)",
      "I really need blue. Are there other brands of blue printer paper?",
      "",
      "Michael Liu (9:48 A.M.)",
      "Yes, but they're all a darker blue. They also cost more.",
      "",
      "Jana Bhat (9:49 A.M.)",
      "OK, forget it. I'll place an order online.",
    ].join("\n"),
  },
  9: {
    sharedPassageOverride: [
      "Questions 155-157 refer to the following letter.",
      "",
      "20 May",
      "Neil Croft, Director",
      "Queensland Libraries",
      "13 Hummocky Road",
      "Brisbane QLD 4003",
      "",
      "Dear Mr. Croft,",
      "",
      "[1]",
      "I have read your inquiry about offering financial management courses at libraries across Queensland.",
      "The Society for Financial Management Advisors (SFMA) welcomes the opportunity to partner with the libraries to make basic financial management information more widely available.",
      "You proposed that SFMA members could lead introductory courses at several library branches.",
      "[2]",
      "SFMA members have offered similar courses to recent graduates, people changing careers, and first-time investors in the past.",
      "[3]",
      "If you have a list of library branches that would host the first series of events, I can suggest facilitators who work near those libraries or would be willing to travel to them.",
      "Do you have a general profile of the expected attendees?",
      "[4]",
      "That information would help us tailor the courses to audience needs and interests.",
      "I look forward to meeting with you to develop a plan.",
      "Please contact me by telephone at 07 5550 1344 to set up a time to discuss the courses.",
      "",
      "Sincerely,",
      "Roberta Otney",
      "Chairperson, Society for Financial Management Advisors",
    ].join("\n"),
  },
  18: {
    sharedPassageOverride: [
      "Questions 164-167 refer to the following e-mail.",
      "",
      "To: lkhoury@britelyauto.co.uk",
      "From: khagel@qualiview.co.uk",
      "Date: 14 April",
      "Subject: Your proposed changes",
      "",
      "Dear Ms. Khoury,",
      "",
      "Thank you for forwarding your proposed revisions to the contract for Qualiview Ltd. to be your wholesale supplier of automotive window glass.",
      "First, we will gladly agree to an extension of the contract term from one to three years.",
      "Secondly, I am not sure what more we can do to address your concerns about packaging materials.",
      "We use custom-built crates and innovative packaging to reduce the risk of breakage during shipping.",
      "While we will replace any goods that may be damaged in transit, we do not agree to pay an additional penalty fee in the event of such damage.",
      "I would like to discuss this further with you next week; however, I will be out of the office through Tuesday afternoon.",
      "Would you be available to meet before 11:00 A.M. on either Wednesday or Thursday?",
      "Friday is also possible.",
      "Please let me know a convenient date and time for you.",
      "",
      "Best regards,",
      "Karl Hagel",
      "Qualiview Ltd.",
    ].join("\n"),
  },
  22: {
    sharedPassageOverride: [
      "Questions 168-171 refer to the following article.",
      "",
      "Shipping Disruptions",
      "SINGAPORE (6 June)-Recently, the demand for international freight space has been outpacing the availability of shipping containers.",
      "This container shortage has led to higher costs for goods being shipped out of Asian ports.",
      "A drop in the production of rolls of steel, the raw material that containers are made from, has further complicated the situation.",
      "[1]",
      "Some exporters have considered the more expensive option of air freight, but companies are still faced with a difficult choice.",
      "[2]",
      "They must either ask their customers to accept shipment delays, or substantially raise customer prices to cover the costs of expedited shipping.",
      "Either way, suppliers risk triggering customer dissatisfaction.",
      "\"We are working with business partners, investors, and government officials to discuss solutions to this problem,\" said Henry Lam, a spokesperson for the household goods producer QET Group.",
      "[3]",
      "\"It's going to take total cooperation of all stakeholders to find a solution.\"",
      "Not all companies are suffering, though.",
      "For example, Fezker, the producer of athletic apparel and footwear, has implemented strategies to better overcome this situation.",
      "Fezker has successfully refocused its efforts away from exports to western countries and toward expanding its domestic and regional markets.",
      "[4]",
      "\"We moved quickly, so the shipping container shortage has not caused a significant impact on our profits,\" said Fezker CEO Nuwa Lee.",
    ].join("\n"),
  },
  26: {
    sharedPassageOverride: [
      "Questions 172-175 refer to the following online chat discussion.",
      "",
      "Gary Wendel (7:40 A.M.)",
      "Good morning, team. Can you share the current status of your projects, please?",
      "",
      "Jing Yu (7:42 A.M.)",
      "I met with the client last week to confirm the start date for Phase B of the Palisade project.",
      "",
      "Robbie Zuniga (7:43 A.M.)",
      "I am headed to the job site now for the Riverview project. The rain last week delayed pouring the concrete for the sidewalks. I will check the conditions this morning to see if the situation has improved.",
      "",
      "Gary Wendel (7:44 A.M.)",
      "When will Phase B of the Palisade project begin?",
      "",
      "Jing Yu (7:46 A.M.)",
      "We will break ground in March and plan to have the building completed by November.",
      "",
      "Gary Wendel (7:47 A.M.)",
      "That's good news about the March start date. I am sure the client is happy about that.",
      "",
      "Gary Wendel (7:50 A.M.)",
      "Robbie, let me know what you find out about the site conditions. Perhaps Nathan Burry can help at the site. He's our most knowledgeable concrete finisher.",
      "",
      "Robbie Zuniga (7:55 A.M.)",
      "Actually, I'm meeting Nathan at the site this morning, so I'll get his opinion on when we can pour the concrete. The rest of the project is on hold until we can do this.",
      "",
      "Gary Wendel (7:57 A.M.)",
      "Keep me posted. I don't want to rush it if it's still too wet. At the same time, the Riverview project is already behind schedule because of equipment problems and late delivery of building materials.",
      "",
      "Robbie Zuniga (7:58 A.M.)",
      "Will do.",
    ].join("\n"),
  },
  30: {
    sharedPassageOverride: [
      "Questions 176-180 refer to the following e-mail and survey form.",
      "",
      "E-mail",
      "From: Madalyn Kerluke <mkerluke@karabel.ca>",
      "To: Omar Niklaus <oniklaus@karabel.ca>, Jay Toncic <jtoncic@karabel.ca>",
      "Date: Friday, 3 February 2:16 P.M.",
      "Subject: Taste-test results",
      "Attachment: Fatior Labs survey results",
      "",
      "Hi, Team.",
      "I just received the 24-26 January survey results from Fatior Labs for our new ice-cream taste test.",
      "As you can see from the attached document, the results are very disappointing.",
      "We sent the four flavours that we considered to be the best, but none of them received high enough ratings to advance to the next stage of development.",
      "Most of the reviews were consistent among the 92 taste-test participants in our target market of consumers ages 25 through 40.",
      "It's not a big problem if a product gets low scores in colour in the testing phase, since we can easily adjust that in the laboratory.",
      "But we should never be sending out samples that are getting scores lower than 3 in the taste category.",
      "I would like to meet at 9 A.M. on Monday (6 February) to figure out how to proceed.",
      "There is one flavour we may be able to work with if we make a few adjustments, as suggested by most of our taste testers.",
      "We will also need to get some new flavours to Fatior Labs no later than 1 March if we are going to get a new ice cream on the Preston Grocers freezer shelves by the beginning of June.",
      "",
      "Madalyn Kerluke",
      "",
      "Survey Form",
      "Fatior Labs Consumer Taste-Testing Survey",
      "Date: 24 January",
      "Company: Karabel Industries",
      "Participant number: 54",
      "Directions: You will be given a 45 g sample of 4 different ice creams. Please rate the taste, texture, sweetness, and colour of each ice cream on a scale of 1 (very unpleasant) to 5 (very pleasant). Please write any additional comments below.",
      "",
      "Flavour | Taste | Texture | Sweetness | Colour",
      "Lemon | 2 | 3 | 2 | 4",
      "Mango | 3 | 3 | 2 | 1",
      "Salted Caramel | 2 | 1 | 1 | 5",
      "Peanut Brittle | 3 | 4 | 2 | 2",
      "",
      "Comments:",
      "The fruit-flavoured ice creams were surprisingly sour. I did not care for them at all.",
      "I think the Peanut Brittle has the most potential, but it's missing something.",
      "I bet that adding chocolate swirls or brownie bits would make it a winner.",
    ].join("\n"),
  },
  35: {
    sharedPassageOverride: [
      "Questions 181-185 refer to the following Web page and letter.",
      "",
      "Web Page",
      "https://www.creategreat.ca/openings",
      "",
      "Create Great, an Ontario-based creative agency with a diverse range of global clients in the fashion industry, is seeking a copywriter who is passionate about fashion, understands market trends, and handles digital tools with ease.",
      "The ideal candidate will be someone who works well in a fast-paced environment with team members from international backgrounds.",
      "The copywriter will collaborate with the creative team to develop brand strategies that suit customer needs and with the marketing team to ensure the success of brand-based publicity campaigns for current and prospective clients.",
      "As remote work is permitted for copywriters, residence in Canada is not required.",
      "To apply, send your cover letter and résumé to the director of our creative team, Fran Benjamin, Create Great, 838 Colbert Street, London, ON N6B 3P5.",
      "Application deadline: August 5.",
      "",
      "Letter",
      "Annie Smith",
      "4810 South Bryant Street",
      "Portland, OR 97206",
      "August 6",
      "",
      "Fran Benjamin",
      "Create Great",
      "838 Colbert Street",
      "London, ON N6B 3P5",
      "",
      "Dear Ms. Benjamin,",
      "",
      "I am writing to apply for the copywriter position at Create Great.",
      "As an expert fashion designer who also has writing experience, I believe I would be a valuable addition to your team.",
      "Enclosed please find my résumé.",
      "I have a decade of experience as the lead designer for women's collections at MODA, a clothing line in Portland.",
      "I oversee the design production process from initial market research to finished product.",
      "In my role, I work in close partnership with the marketing and production teams.",
      "In addition, for the last five years, I have been maintaining my own blog.",
      "My posts focus on trends in women's fashion and how to make clothing and cosmetics more sustainable.",
      "What started as a hobby has now attracted paying advertisers and over 15,000 followers.",
      "Visit www.medesheen.com for examples of my writing.",
      "",
      "Thank you for considering my application.",
      "",
      "Sincerely,",
      "Annie Smith",
    ].join("\n"),
  },
  40: {
    imageUrl: "",
    sharedPassageOverride: [
      "Questions 186-190 refer to the following e-mails and receipt.",
      "",
      "E-mail 1",
      "From: Akihito Nakashima <a.nakashima@gilchristshipping.com>",
      "To: Fowler Office Supplies <support@fowlerofficesupplies.com>",
      "Subject: Order B19849",
      "Date: August 19",
      "",
      "To Whom It May Concern,",
      "Yesterday, I purchased some office supplies on your Web site. I received an e-mail receipt, but the costs are not itemized on it. To satisfy a new company policy, I must give my supervisor a receipt with the charges for each item listed separately.",
      "Could you e-mail me such a receipt? If not, is it possible for me to get this information myself from your Web site?",
      "Finally, can confirmations for future orders possibly be sent to more than one e-mail address? It would be ideal for my supervisor to automatically receive one.",
      "",
      "Thank you,",
      "Akihito Nakashima, Executive Assistant",
      "",
      "E-mail 2",
      "From: Fowler Office Supplies <support@fowlerofficesupplies.com>",
      "To: Akihito Nakashima <a.nakashima@gilchristshipping.com>",
      "Subject: RE: Order B19849",
      "Date: August 19",
      "Attachment: B19849",
      "",
      "Dear Mr. Nakashima,",
      "Attached is the receipt you requested. In apology for the inconvenience, we will provide you with 10 percent off the total price of your next order.",
      "To view a full description of any previous order, first log in to your account on our Web site, go to the \"My Orders\" tab, and then click on any order number.",
      "I noticed that included in each of your last few orders was an identical order for ten of a particular item. You should know that we will reduce the price for that item by 5 percent if you mark this as a recurring order. To do this, simply check the \"Recurring Order\" box on the online order form.",
      "As for your final query, this is not possible right now. However, I will share the idea with our technical team.",
      "",
      "All the best,",
      "Cameron Higgins, Customer Relations",
      "Fowler Office Supplies",
      "",
      "Receipt for Order: B19849",
      "Order Date: August 18",
      "Item | Price | Quantity | Total",
      "Printer paper | $8.00/500 sheets | 10 | $80.00",
      "Toner (black) | $50.00/cartridge | 1 | $50.00",
      "Gel pens (blue) | $5.00/8-pack | 3 | $15.00",
      "Staples | $3.50/box | 2 | $7.00",
      "GRAND TOTAL | | | $152.00",
      "",
      "Return Policy:",
      "Unopened merchandise may be returned by mail or in one of our stores within 60 days of purchase.",
      "For returns by mail, log in to your account to print a shipping label.",
      "For in-store returns, bring the item and the order number to any Fowler Office Supplies location.",
    ].join("\n"),
  },
  45: {
    sharedPassageOverride: [
      "Questions 191-195 refer to the following article, Web site, and receipt.",
      "",
      "Article",
      "Crawford and Duval Opens Brick-and-Mortar Stores",
      "HONG KONG (18 February)-Crawford and Duval, the online retailer known for its handcrafted blankets, decorative pillows, and other household goods, has established four brick-and-mortar stores in Hong Kong.",
      "Last Monday, the company celebrated the grand opening of boutique stores in Causeway Bay, Discovery Bay, and Sheung Wan in addition to a large department store in Central District.",
      "While the boutique stores carry the most popular of the small household goods for which Crawford and Duval is famous, the Central District location also boasts an indoor plant department and an on-site cafe that features specialty coffees, teas, and light snacks.",
      "Moreover, it has a much more extensive selection of the merchandise than what is available through the company's Web site.",
      "",
      "Web Site",
      "https://www.crawfordandduval.com.hk",
      "Crawford and Duval comes to our loyal shoppers in Hong Kong!",
      "Crawford and Duval is pleased to announce the opening of its first brick-and-mortar stores in the following locations: Causeway Bay, Discovery Bay, Sheung Wan, and Central District.",
      "Members of our online Frequent Purchase Club will receive the same benefits in our stores, including a 10 percent discount on purchases of HK$500 or more.",
      "Each location has an interior designer on staff, so you can consult with an expert in person while you browse our popular items.",
      "",
      "Receipt",
      "Crawford and Duval Customer Receipt",
      "Date: 23 February",
      "Item | Price",
      "Bamboo table lamp | HK$1,450.00",
      "Decorative cushions, set of two | HK$750.00",
      "Aloe plant in a 7.5-litre planter | HK$300.00",
      "Machine-washable wool blanket | HK$2,000.00",
      "Sub Total | HK$4,500.00",
      "Less 10% | HK$450.00",
      "TOTAL | HK$4,050.00",
      "",
      "Cash",
      "Gift card number:",
      "Credit card number: ************5598",
      "Name on the credit card: Mei-Lin Fong",
      "",
      "Stop at our in-store cafe for a treat!",
    ].join("\n"),
  },
  50: {
    sharedPassageOverride: [
      "Questions 196-200 refer to the following Web pages.",
      "",
      "Web Page 1",
      "https://www.osawacorporateteambuilding.com/home",
      "Osawa Corporate Team Building",
      "Bring your team together to promote cooperation while having fun! Our activities increase job satisfaction and engagement. We do all the planning so you can relax. Simply choose the event that is right for your team.",
      "",
      "Scavenger Hunt-An outdoor game in which teams are given a list of objects to find and photograph with their phone or camera.",
      "Group size: 10-50 people.",
      "Time: 3 hours.",
      "",
      "Game Day-This is a high-energy game day with fun team activities. This event builds team strength, communication, and problem-solving skills.",
      "Group size: 20-500 people.",
      "Time: 2 hours.",
      "",
      "Team Painting-Each team member creates a painting outdoors based on a predetermined theme. The paintings are linked together at the end.",
      "Group size: 6-30 people.",
      "Time: 1-2 hours.",
      "",
      "Robot Building-Your group will be broken into teams. Each team builds a robot to be used in challenges against the others.",
      "Group size: 10-30 people.",
      "Time: 2-3 hours.",
      "",
      "All Chocolate-Your group will have the chance to use engineering skills to build a tower of chocolate. Then you learn how to make chocolate from a local chocolatier.",
      "Group size: 8-150 people.",
      "Time: 2 hours.",
      "",
      "Book an event in October and receive 15 percent off.",
      "",
      "Web Page 2",
      "https://www.osawacorporateteambuilding.com/requests",
      "Name: Alexandra Peterson",
      "Company name: Whitten Tech",
      "E-mail address: apeterson@whittentech.com",
      "Phone: 617-555-0123",
      "Location and date of event: Downtown Boston, October 15",
      "What events are you interested in? Choose your top three.",
      "1. Game Day",
      "2. Scavenger Hunt",
      "3. Team Painting",
      "Number of participants: 28 people",
      "Additional information: We are interested in a fun activity for our sales team before the busy selling season begins. We spend a lot of time in the office, so we want an outdoor event.",
      "We will contact you within three business days with a quote and confirmation.",
      "",
      "Web Page 3",
      "https://www.osawacorporateteambuilding.com/reviews",
      "What Our Customers Are Saying",
      "Posted by Whitten Tech on October 20",
      "Our team hired Osawa Corporate Team Building to lead an activity for the sales staff at Whitten Tech.",
      "The facilitator of the Scavenger Hunt, Lorenzo Benford, was excellent.",
      "The 28 members of our sales team all had positive feedback.",
      "They reported that they loved exploring the city, learning about its history, and finding new local attractions, even on a cold and cloudy day.",
      "I highly recommend this activity.",
      "The only downside was that we did not realize how far we would be walking.",
      "It would have been helpful to have an idea of the walking distances so we could have been fully prepared.",
    ].join("\n"),
  },
};

const TEST2_PART7_PROMPT_OVERRIDES = {
  1: "What is true about the Savan Business Center?",
  7: "What is suggested about the paper Mr. Liu is shopping for?",
  9: "Why did Ms. Otney write the letter?",
  11: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? \"This is something I would be happy to arrange.\"",
  18: "Why did Mr. Hagel write the e-mail?",
  25: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? \"These markets are supplied using more readily available truck and train transportation.\"",
  26: "In what industry do the writers most likely work?",
  30: "What does the e-mail indicate about Karabel Industries ice cream?",
  35: "According to the Web page, what will the job recipient be able to do?",
  45: "What is the purpose of the article?",
  50: "What does the first Web page indicate about the Scavenger Hunt?",
};

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function normalizeText(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .replace(/\u2019/g, "'")
    .replace(/\u2013|\u2014/g, "-")
    .trim();
}

function normalizeMultilineText(value) {
  return String(value ?? "")
    .replace(/\r\n/g, "\n")
    .replace(/\u2019/g, "'")
    .replace(/\u2013|\u2014/g, "-")
    .split("\n")
    .map((line) => line.replace(/\s+/g, " ").trimEnd())
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
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

function normalizeQuestionText(value) {
  return normalizeText(value).replace(/\s*Câu\s+\d+$/i, "").trim();
}

function appendText(baseText, appendedText) {
  const left = normalizeText(baseText);
  const right = normalizeText(appendedText);
  if (!left) return right;
  if (!right) return left;
  return `${left} ${right}`;
}

function isPassageLike(text) {
  const value = normalizeText(text);
  if (!value) return false;
  return /^Directions:/i.test(value) || /^Questions\s+\d+-\d+\s+refer to the following/i.test(value);
}

function findQuestionByNumber(rawQuestions, number) {
  return rawQuestions.find((question) => question.number === number) || null;
}

function buildGroups(questionCount, startNumbers) {
  return startNumbers.map((start, index) => ({
    start,
    end: index < startNumbers.length - 1 ? startNumbers[index + 1] - 1 : questionCount,
    groupIndex: index + 1,
  }));
}

function findGroup(number, groups) {
  return groups.find((group) => number >= group.start && number <= group.end) || null;
}

function findImageRule(number, rules = []) {
  return rules.find((rule) => number >= rule.start && number <= rule.end) || null;
}

function deriveLeadStartNumbers(rawQuestions) {
  return rawQuestions
    .filter((question) => /^Questions\s+\d+-\d+\s+refer to the following/i.test(normalizeText(question.question_text)))
    .map((question) => question.number);
}

function splitLeadPassageAndPrompt(rawText) {
  const text = normalizeQuestionText(rawText);
  const promptMatch = text.match(/((?:What|Why|Who|Where|When|How|According to|At\s+\d|In which|Based on)\b[\s\S]*\?)$/i);
  if (!promptMatch) {
    return { sharedPassage: text, prompt: null };
  }

  const prompt = normalizeText(promptMatch[1]);
  const sharedPassage = normalizeText(text.slice(0, promptMatch.index));
  return {
    sharedPassage: sharedPassage || null,
    prompt: prompt || null,
  };
}

function buildOptions(rawQuestion, optionOverrides = null) {
  if (optionOverrides) return optionOverrides;
  return Object.entries(rawQuestion.options || {}).map(([key, text]) => ({
    key,
    text: normalizeText(text),
  }));
}

function shouldKeepImage(url) {
  const normalized = normalizeAssetUrl(url);
  if (!normalized) return false;
  return !/cropped-logo-itracnghiem/i.test(normalized);
}

function buildPart5Questions(rawQuestions, sectionId, baseNumber, answerKeys) {
  return rawQuestions.map((question) => ({
    id: `${sectionId}-q${baseNumber + question.number}`,
    displayNumber: baseNumber + question.number,
    sourceNumber: question.number,
    toeicPart: "PART 5",
    prompt: normalizeQuestionText(question.question_text),
    sharedPassage: null,
    imageUrl: "",
    options: buildOptions(question),
    correctKey: answerKeys[question.number] || null,
    explanation: null,
    groupIndex: null,
    groupLead: false,
    sourceRef: {
      partFolder: "Part1",
      originalNumber: question.number,
    },
  }));
}

function buildPart6Questions(rawQuestions, sectionId, baseNumber, answerKeys, sourceFolder) {
  const groupStarts = deriveLeadStartNumbers(rawQuestions);
  const groups = buildGroups(rawQuestions.length, groupStarts);
  const passages = new Map();

  rawQuestions.forEach((question) => {
    const group = findGroup(question.number, groups);
    if (group && question.number === group.start) {
      passages.set(group.groupIndex, normalizeQuestionText(question.question_text));
    }
  });

  return rawQuestions.map((question) => {
    const displayNumber = baseNumber + question.number;
    const group = findGroup(question.number, groups);
    const imageUrl = shouldKeepImage(question.image_url) ? normalizeAssetUrl(question.image_url) : "";

    return {
      id: `${sectionId}-q${displayNumber}`,
      displayNumber,
      sourceNumber: question.number,
      toeicPart: "PART 6",
      prompt: null,
      sharedPassage: group ? passages.get(group.groupIndex) || null : null,
      imageUrl,
      options: buildOptions(question),
      correctKey: answerKeys[question.number] || null,
      explanation: null,
      groupIndex: group?.groupIndex ?? null,
      groupLead: Boolean(group && question.number === group.start),
      sourceRef: {
        partFolder: sourceFolder,
        originalNumber: question.number,
      },
    };
  });
}

function buildPart7Questions(rawQuestions, {
  sectionId,
  sourceFolder,
  baseNumber,
  answerKeys,
  groupStarts,
  imageRules = [],
  promptOverrides = {},
  optionOverrides = {},
  groupSupplements = {},
}) {
  const groups = buildGroups(rawQuestions.length, groupStarts || deriveLeadStartNumbers(rawQuestions));
  const groupMeta = new Map();

  rawQuestions.forEach((question) => {
    const group = findGroup(question.number, groups);
    if (!group) return;

    const current = groupMeta.get(group.groupIndex) || { imageUrl: "", sharedPassage: null, leadPrompt: null };
    const imageRule = findImageRule(question.number, imageRules);
    const mappedImageQuestion = imageRule ? findQuestionByNumber(rawQuestions, imageRule.imageSourceNumber) : null;
    const mappedImageUrl = shouldKeepImage(mappedImageQuestion?.image_url) ? normalizeAssetUrl(mappedImageQuestion?.image_url) : "";
    const directImageUrl = shouldKeepImage(question.image_url) ? normalizeAssetUrl(question.image_url) : "";

    if (!current.imageUrl && mappedImageUrl) current.imageUrl = mappedImageUrl;
    if (!current.imageUrl && directImageUrl) current.imageUrl = directImageUrl;

    if (question.number === group.start && isPassageLike(question.question_text)) {
      const split = splitLeadPassageAndPrompt(question.question_text);
      current.sharedPassage = split.sharedPassage || current.sharedPassage;
      current.leadPrompt = split.prompt || current.leadPrompt;
    }

    groupMeta.set(group.groupIndex, current);
  });

  return rawQuestions.map((question) => {
    const displayNumber = baseNumber + question.number - 1;
    const group = findGroup(question.number, groups);
    const meta = group ? groupMeta.get(group.groupIndex) : null;
    const supplement = group ? groupSupplements[group.start] || {} : {};
    const sharedPassage = supplement.sharedPassageOverride
      ? normalizeMultilineText(supplement.sharedPassageOverride)
      : appendText(meta?.sharedPassage, supplement.appendPassage) || null;
    const imageUrl = typeof supplement.imageUrl === "string" ? supplement.imageUrl : (meta?.imageUrl || "");
    const promptOverride = promptOverrides[question.number];
    const isLead = Boolean(group && question.number === group.start);
    const leadPrompt = promptOverride || meta?.leadPrompt || null;
    const questionPrompt = promptOverride || (isLead ? leadPrompt : normalizeQuestionText(question.question_text));

    return {
      id: `${sectionId}-q${displayNumber}`,
      displayNumber,
      sourceNumber: question.number,
      toeicPart: "PART 7",
      prompt: questionPrompt,
      sharedPassage,
      imageUrl,
      options: buildOptions(question, optionOverrides[question.number]),
      correctKey: answerKeys[question.number] || null,
      explanation: null,
      groupIndex: group?.groupIndex ?? null,
      groupLead: isLead,
      sourceRef: {
        partFolder: sourceFolder,
        originalNumber: question.number,
      },
    };
  });
}

function buildReadingTest1() {
  const part1 = readJson(TEST1_PART1_PATH);
  const part2 = readJson(TEST1_PART2_PATH);
  const part3 = readJson(TEST1_PART3_PATH);

  const section1Questions = (() => {
    const groups = buildGroups(part1.questions.length, PART6_GROUP_STARTS_TEST1);
    const passages = new Map();

    part1.questions.forEach((question) => {
      const group = findGroup(question.number, groups);
      if (group && question.number === group.start && question.question_text) {
        passages.set(group.groupIndex, normalizeText(question.question_text));
      }
    });

    return part1.questions.map((question) => {
      const displayNumber = 100 + question.number;
      const group = question.part === "PART 6" ? findGroup(question.number, groups) : null;

      return {
        id: `rt1-part1-q${displayNumber}`,
        displayNumber,
        sourceNumber: question.number,
        toeicPart: question.part,
        prompt: question.part === "PART 5" ? normalizeText(question.question_text) : null,
        sharedPassage: group ? passages.get(group.groupIndex) || null : null,
        imageUrl: normalizeAssetUrl(question.image_url),
        options: buildOptions(question),
        correctKey: TEST1_PART1_ANSWER_KEYS[question.number] || null,
        explanation: null,
        groupIndex: group?.groupIndex ?? null,
        groupLead: Boolean(group && question.number === group.start),
        sourceRef: {
          partFolder: "Part1",
          originalNumber: question.number,
        },
      };
    });
  })();

  const section2Questions = buildPart7Questions(part2.questions, {
    sectionId: "rt1-part2",
    sourceFolder: "Part2",
    baseNumber: 147,
    answerKeys: TEST1_PART2_ANSWER_KEYS,
    groupStarts: PART7A_GROUP_STARTS_TEST1,
    imageRules: PART7A_IMAGE_RULES_TEST1,
    promptOverrides: TEST1_READING_PROMPT_OVERRIDES.Part2,
  });

  const section3Questions = buildPart7Questions(part3.questions, {
    sectionId: "rt1-part3",
    sourceFolder: "Part3",
    baseNumber: 176,
    answerKeys: TEST1_PART3_ANSWER_KEYS,
    groupStarts: PART7B_GROUP_STARTS_TEST1,
    imageRules: PART7B_IMAGE_RULES_TEST1,
  }).filter((question) => question.displayNumber <= 200);

  return {
    id: "reading-test-1",
    name: "Đề Reading 1",
    desc: "Đề đọc được chuẩn hóa từ bộ crawl Reading TOEIC 1.",
    status: "ready",
    hasAnswerKey: true,
    sections: [
      {
        id: "rt1-part1",
        label: "Part 1",
        title: "Reading Part 5 + Part 6",
        desc: "46 câu đầu tiên, gồm TOEIC Part 5 và Part 6.",
        questionCount: section1Questions.length,
        toeicParts: ["PART 5", "PART 6"],
        questions: section1Questions,
      },
      {
        id: "rt1-part2",
        label: "Part 2",
        title: "Reading Part 7A",
        desc: "29 câu đọc hiểu đầu của Part 7, từ câu 147 đến 175.",
        questionCount: section2Questions.length,
        toeicParts: ["PART 7"],
        questions: section2Questions,
      },
      {
        id: "rt1-part3",
        label: "Part 3",
        title: "Reading Part 7B",
        desc: "25 câu đọc hiểu tiếp theo của Part 7, từ câu 176 đến 200.",
        questionCount: section3Questions.length,
        toeicParts: ["PART 7"],
        questions: section3Questions,
      },
    ],
  };
}

function buildReadingTest2() {
  const part5 = readJson(TEST2_PART1_PATH);
  const part6 = readJson(TEST2_PART2_PATH);
  const part7 = readJson(TEST2_PART3_PATH);

  const section1Questions = [
    ...buildPart5Questions(part5.questions, "rt2-part1", 100, TEST2_PART5_ANSWER_KEYS),
    ...buildPart6Questions(part6.questions, "rt2-part1", 130, TEST2_PART6_ANSWER_KEYS, "Part2"),
  ];

  const allPart7Questions = buildPart7Questions(part7.questions, {
    sectionId: "rt2-part7",
    sourceFolder: "Part3",
    baseNumber: 147,
    answerKeys: TEST2_PART7_ANSWER_KEYS,
    promptOverrides: TEST2_PART7_PROMPT_OVERRIDES,
    optionOverrides: TEST2_PART7_OPTION_OVERRIDES,
    groupSupplements: TEST2_PART7_GROUP_SUPPLEMENTS,
  });

  const section2Questions = allPart7Questions.filter((question) => question.displayNumber <= 175);
  const section3Questions = allPart7Questions.filter((question) => question.displayNumber >= 176 && question.displayNumber <= 200);

  return {
    id: "reading-test-2",
    name: "Đề Reading 2",
    desc: "Đề đọc được chuẩn hóa từ bộ crawl Reading TOEIC 2, bổ sung đầy đủ passage, ảnh, và answer key.",
    status: "ready",
    hasAnswerKey: true,
    sections: [
      {
        id: "rt2-part1",
        label: "Part 1",
        title: "Reading Part 5 + Part 6",
        desc: "46 câu đầu tiên, gồm TOEIC Part 5 và Part 6 của Đề 2.",
        questionCount: section1Questions.length,
        toeicParts: ["PART 5", "PART 6"],
        questions: section1Questions,
      },
      {
        id: "rt2-part2",
        label: "Part 2",
        title: "Reading Part 7A",
        desc: "29 câu đọc hiểu đầu của Part 7, từ câu 147 đến 175 của Đề 2.",
        questionCount: section2Questions.length,
        toeicParts: ["PART 7"],
        questions: section2Questions,
      },
      {
        id: "rt2-part3",
        label: "Part 3",
        title: "Reading Part 7B",
        desc: "25 câu đọc hiểu tiếp theo của Part 7, từ câu 176 đến 200 của Đề 2.",
        questionCount: section3Questions.length,
        toeicParts: ["PART 7"],
        questions: section3Questions,
      },
    ],
  };
}

function main() {
  const payload = {
    schemaVersion: "1.0.0",
    tests: [buildReadingTest1(), buildReadingTest2()],
  };

  fs.writeFileSync(generatedPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  console.log("Generated Reading Test data for tests 1 and 2.");
}

main();
