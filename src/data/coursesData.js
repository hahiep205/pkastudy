import { TOEIC_BASIC_LESSONS_1_TO_50 } from './toeicBasicLessons';
import { TOPIK1_LESSONS_1_TO_30 } from './topik1Lessons';

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   PKA Study â€” courses-data.js
   Dá»¯ liá»‡u tá»« vá»±ng cho cĂ¡c bá»™ tĂ i liá»‡u
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

export const coursesData = {

    /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       Bá»˜ 1 â€” TOEIC CÆ  Báº¢N (Tiáº¿ng Anh)
    â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
    'toeic-basic': {
        id: 'toeic-basic',
        title: '600 Essential Words for the TOEIC',
        lang: 'en',
        topics: [

            /* â”€â”€â”€ TOPIC 1: VÄ‚N PHĂ’NG â”€â”€â”€ */
            {
                id: 'toeic-office',
                title: 'đŸ¢ VÄƒn phĂ²ng & CĂ´ng sá»Ÿ',
                description: 'Tá»« vá»±ng thÆ°á»ng gáº·p trong mĂ´i trÆ°á»ng lĂ m viá»‡c vÄƒn phĂ²ng',
                wordCount: 10,
                words: [
                    { id: 'w001', word: 'schedule', language: 'en', transcription: '/ËˆÊƒÉ›djuËl/', mean: 'lá»‹ch trĂ¬nh, thá»i gian biá»ƒu', wordtype: 'noun / verb', example: 'Please check the meeting schedule for tomorrow.', example_vi: 'Vui lĂ²ng kiá»ƒm tra lá»‹ch há»p cho ngĂ y mai.', remembered: false },
                    { id: 'w002', word: 'deadline', language: 'en', transcription: '/ËˆdÉ›dlaÉªn/', mean: 'thá»i háº¡n chĂ³t', wordtype: 'noun', example: 'We must finish the report before the deadline.', example_vi: 'ChĂºng ta pháº£i hoĂ n thĂ nh bĂ¡o cĂ¡o trÆ°á»›c thá»i háº¡n chĂ³t.', remembered: false },
                    { id: 'w003', word: 'agenda', language: 'en', transcription: '/É™ËˆdÊ’É›ndÉ™/', mean: 'chÆ°Æ¡ng trĂ¬nh nghá»‹ sá»±', wordtype: 'noun', example: 'The agenda for today\'s meeting includes budget review.', example_vi: 'ChÆ°Æ¡ng trĂ¬nh nghá»‹ sá»± cá»§a cuá»™c há»p hĂ´m nay bao gá»“m viá»‡c xem xĂ©t ngĂ¢n sĂ¡ch.', remembered: false },
                    { id: 'w004', word: 'colleague', language: 'en', transcription: '/ËˆkÉ’liËÉ¡/', mean: 'Ä‘á»“ng nghiá»‡p', wordtype: 'noun', example: 'My colleague helped me with the presentation.', example_vi: 'Äá»“ng nghiá»‡p cá»§a tĂ´i Ä‘Ă£ giĂºp tĂ´i chuáº©n bá»‹ bĂ i thuyáº¿t trĂ¬nh.', remembered: false },
                    { id: 'w005', word: 'conference', language: 'en', transcription: '/ËˆkÉ’nfÉ™rÉ™ns/', mean: 'há»™i nghá»‹, há»™i tháº£o', wordtype: 'noun', example: 'The annual conference will be held in Hanoi.', example_vi: 'Há»™i nghá»‹ thÆ°á»ng niĂªn sáº½ Ä‘Æ°á»£c tá»• chá»©c táº¡i HĂ  Ná»™i.', remembered: false },
                    { id: 'w006', word: 'document', language: 'en', transcription: '/ËˆdÉ’kjÊmÉ™nt/', mean: 'tĂ i liá»‡u, vÄƒn báº£n', wordtype: 'noun / verb', example: 'Please sign the document before submitting it.', example_vi: 'Vui lĂ²ng kĂ½ vĂ o tĂ i liá»‡u trÆ°á»›c khi ná»™p.', remembered: false },
                    { id: 'w007', word: 'supervisor', language: 'en', transcription: '/ËˆsuËpÉ™vaÉªzÉ™r/', mean: 'ngÆ°á»i giĂ¡m sĂ¡t, quáº£n lĂ½', wordtype: 'noun', example: 'I need to report to my supervisor every Monday.', example_vi: 'TĂ´i cáº§n bĂ¡o cĂ¡o cho ngÆ°á»i giĂ¡m sĂ¡t vĂ o má»—i thá»© Hai.', remembered: false },
                    { id: 'w008', word: 'efficient', language: 'en', transcription: '/ÉªËˆfÉªÊƒnt/', mean: 'hiá»‡u quáº£, nÄƒng suáº¥t', wordtype: 'adjective', example: 'She is very efficient at managing multiple tasks.', example_vi: 'CĂ´ áº¥y ráº¥t hiá»‡u quáº£ trong viá»‡c quáº£n lĂ½ nhiá»u cĂ´ng viá»‡c cĂ¹ng lĂºc.', remembered: false },
                    { id: 'w009', word: 'proposal', language: 'en', transcription: '/prÉ™ËˆpÉ™Êzl/', mean: 'Ä‘á» xuáº¥t, báº£n Ä‘á» nghá»‹', wordtype: 'noun', example: 'The team submitted a proposal for a new project.', example_vi: 'NhĂ³m Ä‘Ă£ ná»™p má»™t Ä‘á» xuáº¥t cho dá»± Ă¡n má»›i.', remembered: false },
                    { id: 'w010', word: 'negotiate', language: 'en', transcription: '/nÉªËˆÉ¡É™ÊÊƒieÉªt/', mean: 'Ä‘Ă m phĂ¡n, thÆ°Æ¡ng lÆ°á»£ng', wordtype: 'verb', example: 'We need to negotiate the contract terms with the client.', example_vi: 'ChĂºng ta cáº§n Ä‘Ă m phĂ¡n cĂ¡c Ä‘iá»u khoáº£n há»£p Ä‘á»“ng vá»›i khĂ¡ch hĂ ng.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 2: TĂ€I CHĂNH â”€â”€â”€ */
            {
                id: 'toeic-finance',

                title: 'đŸ’° TĂ i chĂ­nh & NgĂ¢n hĂ ng',
                description: 'Tá»« vá»±ng vá» tiá»n tá»‡, giao dá»‹ch vĂ  tĂ i chĂ­nh doanh nghiá»‡p',
                wordCount: 10,
                words: [
                    { id: 'w011', word: 'budget', language: 'en', transcription: '/ËˆbÊŒdÊ’Éªt/', mean: 'ngĂ¢n sĂ¡ch, ngĂ¢n quá»¹', wordtype: 'noun / verb', example: 'The company approved a larger budget for marketing.', example_vi: 'CĂ´ng ty Ä‘Ă£ phĂª duyá»‡t ngĂ¢n sĂ¡ch lá»›n hÆ¡n cho bá»™ pháº­n marketing.', remembered: false },
                    { id: 'w012', word: 'invoice', language: 'en', transcription: '/ËˆÉªnvÉ”Éªs/', mean: 'hĂ³a Ä‘Æ¡n, biĂªn lai', wordtype: 'noun / verb', example: 'Please send the invoice to the accounting department.', example_vi: 'Vui lĂ²ng gá»­i hĂ³a Ä‘Æ¡n Ä‘áº¿n bá»™ pháº­n káº¿ toĂ¡n.', remembered: false },
                    { id: 'w013', word: 'revenue', language: 'en', transcription: '/ËˆrÉ›vÉ™njuË/', mean: 'doanh thu', wordtype: 'noun', example: 'The company\'s revenue increased by 20% this year.', example_vi: 'Doanh thu cá»§a cĂ´ng ty Ä‘Ă£ tÄƒng 20% trong nÄƒm nay.', remembered: false },
                    { id: 'w014', word: 'profit', language: 'en', transcription: '/ËˆprÉ’fÉªt/', mean: 'lá»£i nhuáº­n', wordtype: 'noun / verb', example: 'They made a profit of two million dollars last quarter.', example_vi: 'Há» Ä‘Ă£ Ä‘áº¡t lá»£i nhuáº­n hai triá»‡u Ä‘Ă´ la trong quĂ½ trÆ°á»›c.', remembered: false },
                    { id: 'w015', word: 'transaction', language: 'en', transcription: '/trĂ¦nËˆzĂ¦kÊƒn/', mean: 'giao dá»‹ch', wordtype: 'noun', example: 'All transactions must be recorded in the ledger.', example_vi: 'Táº¥t cáº£ cĂ¡c giao dá»‹ch pháº£i Ä‘Æ°á»£c ghi vĂ o sá»• cĂ¡i.', remembered: false },
                    { id: 'w016', word: 'deposit', language: 'en', transcription: '/dÉªËˆpÉ’zÉªt/', mean: 'tiá»n Ä‘áº·t cá»c, gá»­i tiá»n', wordtype: 'noun / verb', example: 'You need to deposit at least $500 to open the account.', example_vi: 'Báº¡n cáº§n gá»­i Ă­t nháº¥t 500 Ä‘Ă´ Ä‘á»ƒ má»Ÿ tĂ i khoáº£n.', remembered: false },
                    { id: 'w017', word: 'loan', language: 'en', transcription: '/lÉ™Ên/', mean: 'khoản vay, cho vay', wordtype: 'noun / verb', example: 'She applied for a bank loan to start her business.', example_vi: 'Cô ấy đã nộp đơn vay ngân hàng để khởi nghiệp.', remembered: false },
                    { id: 'w018', word: 'interest rate', language: 'en', transcription: '/ËˆÉªntrÉ™st reÉªt/', mean: 'lĂ£i suáº¥t', wordtype: 'noun phrase', example: 'The interest rate on this savings account is 3% per year.', example_vi: 'LĂ£i suáº¥t cá»§a tĂ i khoáº£n tiáº¿t kiá»‡m nĂ y lĂ  3% má»—i nÄƒm.', remembered: false },
                    { id: 'w019', word: 'expenditure', language: 'en', transcription: '/ÉªkËˆspÉ›ndÉªtÊƒÉ™r/', mean: 'chi tiĂªu, chi phĂ­', wordtype: 'noun', example: 'We need to reduce our monthly expenditure.', example_vi: 'ChĂºng ta cáº§n giáº£m chi tiĂªu hĂ ng thĂ¡ng.', remembered: false },
                    { id: 'w020', word: 'shareholder', language: 'en', transcription: '/ËˆÊƒÉ›ËhÉ™ÊldÉ™r/', mean: 'cá»• Ä‘Ă´ng', wordtype: 'noun', example: 'The shareholders voted to approve the merger.', example_vi: 'CĂ¡c cá»• Ä‘Ă´ng Ä‘Ă£ bá» phiáº¿u thĂ´ng qua viá»‡c sĂ¡p nháº­p.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 3: DU Lá»CH â”€â”€â”€ */
            {
                id: 'toeic-travel',
                title: 'âœˆï¸ Du lá»‹ch & Váº­n chuyá»ƒn',
                description: 'Tá»« vá»±ng sá»­ dá»¥ng khi Ä‘i du lá»‹ch, Ä‘áº·t vĂ© vĂ  di chuyá»ƒn',
                wordCount: 10,
                words: [
                    { id: 'w021', word: 'itinerary', language: 'en', transcription: '/aÉªËˆtÉªnÉ™rÉ™ri/', mean: 'lá»‹ch trĂ¬nh chuyáº¿n Ä‘i', wordtype: 'noun', example: 'The travel agent prepared our itinerary for the trip.', example_vi: 'Äáº¡i lĂ½ du lá»‹ch Ä‘Ă£ chuáº©n bá»‹ lá»‹ch trĂ¬nh chuyáº¿n Ä‘i cho chĂºng tĂ´i.', remembered: false },
                    { id: 'w022', word: 'reservation', language: 'en', transcription: '/ËŒrÉ›zÉ™ËˆveÉªÊƒn/', mean: 'Ä‘áº·t chá»— trÆ°á»›c, Ä‘áº·t phĂ²ng', wordtype: 'noun', example: 'I made a reservation at the hotel for three nights.', example_vi: 'TĂ´i Ä‘Ă£ Ä‘áº·t phĂ²ng khĂ¡ch sáº¡n cho ba Ä‘Ăªm.', remembered: false },
                    { id: 'w023', word: 'departure', language: 'en', transcription: '/dÉªËˆpÉ‘ËtÊƒÉ™r/', mean: 'sự khởi hành, giờ khởi hành', wordtype: 'noun', example: 'The departure time is 8:30 AM from Terminal 2.', example_vi: 'Giờ khởi hành là 8 giờ 30 sáng tại Nhà ga 2.', remembered: false },
                    { id: 'w024', word: 'customs', language: 'en', transcription: '/ËˆkÊŒstÉ™mz/', mean: 'háº£i quan', wordtype: 'noun', example: 'All passengers must go through customs upon arrival.', example_vi: 'Táº¥t cáº£ hĂ nh khĂ¡ch pháº£i qua háº£i quan khi Ä‘áº¿n nÆ¡i.', remembered: false },
                    { id: 'w025', word: 'baggage', language: 'en', transcription: '/ËˆbĂ¦É¡ÉªdÊ’/', mean: 'hĂ nh lĂ½', wordtype: 'noun', example: 'You are allowed one piece of carry-on baggage.', example_vi: 'Báº¡n Ä‘Æ°á»£c phĂ©p mang má»™t kiá»‡n hĂ nh lĂ½ xĂ¡ch tay.', remembered: false },
                    { id: 'w026', word: 'boarding pass', language: 'en', transcription: '/ËˆbÉ”ËdÉªÅ‹ pÉ‘Ës/', mean: 'tháº» lĂªn mĂ¡y bay', wordtype: 'noun phrase', example: 'Please show your boarding pass at the gate.', example_vi: 'Vui lĂ²ng xuáº¥t trĂ¬nh tháº» lĂªn mĂ¡y bay táº¡i cá»•ng.', remembered: false },
                    { id: 'w027', word: 'accommodation', language: 'en', transcription: '/É™ËŒkÉ’mÉ™ËˆdeÉªÊƒn/', mean: 'chá»— á»Ÿ, nÆ¡i lÆ°u trĂº', wordtype: 'noun', example: 'The accommodation package includes breakfast.', example_vi: 'GĂ³i lÆ°u trĂº bao gá»“m bá»¯a sĂ¡ng.', remembered: false },
                    { id: 'w028', word: 'transit', language: 'en', transcription: '/ËˆtrĂ¦nsÉªt/', mean: 'quĂ¡ cáº£nh, váº­n chuyá»ƒn', wordtype: 'noun / verb', example: 'We have a 2-hour transit stop in Singapore.', example_vi: 'ChĂºng tĂ´i cĂ³ Ä‘iá»ƒm dá»«ng quĂ¡ cáº£nh 2 giá» táº¡i Singapore.', remembered: false },
                    { id: 'w029', word: 'carrier', language: 'en', transcription: '/ËˆkĂ¦rÉªÉ™r/', mean: 'hĂ£ng váº­n chuyá»ƒn, hĂ£ng hĂ ng khĂ´ng', wordtype: 'noun', example: 'Which carrier did you book your flight with?', example_vi: 'Báº¡n Ä‘Ă£ Ä‘áº·t vĂ© vá»›i hĂ£ng hĂ ng khĂ´ng nĂ o?', remembered: false },
                    { id: 'w030', word: 'refund', language: 'en', transcription: '/ËˆriËfÊŒnd/', mean: 'hoĂ n tiá»n', wordtype: 'noun / verb', example: 'You can get a full refund if you cancel 48 hours in advance.', example_vi: 'Báº¡n cĂ³ thá»ƒ Ä‘Æ°á»£c hoĂ n tiá»n Ä‘áº§y Ä‘á»§ náº¿u há»§y trÆ°á»›c 48 giá».', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 4: Sá»¨C KHá»E â”€â”€â”€ */
            {
                id: 'toeic-health',
                title: 'đŸ¥ Sá»©c khá»e & Y táº¿',
                description: 'Tá»« vá»±ng liĂªn quan Ä‘áº¿n y táº¿, báº£o hiá»ƒm vĂ  chÄƒm sĂ³c sá»©c khá»e',
                wordCount: 10,
                words: [
                    { id: 'w031', word: 'prescription', language: 'en', transcription: '/prÉªËˆskrÉªpÊƒn/', mean: 'Ä‘Æ¡n thuá»‘c', wordtype: 'noun', example: 'The doctor gave me a prescription for antibiotics.', example_vi: 'BĂ¡c sÄ© Ä‘Ă£ kĂª cho tĂ´i Ä‘Æ¡n thuá»‘c khĂ¡ng sinh.', remembered: false },
                    { id: 'w032', word: 'insurance', language: 'en', transcription: '/ÉªnËˆÊƒÊÉ™rÉ™ns/', mean: 'báº£o hiá»ƒm', wordtype: 'noun', example: 'Does your health insurance cover dental care?', example_vi: 'Báº£o hiá»ƒm y táº¿ cá»§a báº¡n cĂ³ chi tráº£ cho chÄƒm sĂ³c rÄƒng miá»‡ng khĂ´ng?', remembered: false },
                    { id: 'w033', word: 'symptom', language: 'en', transcription: '/ËˆsÉªmptÉ™m/', mean: 'triá»‡u chá»©ng', wordtype: 'noun', example: 'Fever and cough are common symptoms of the flu.', example_vi: 'Sá»‘t vĂ  ho lĂ  nhá»¯ng triá»‡u chá»©ng phá»• biáº¿n cá»§a cĂºm.', remembered: false },
                    { id: 'w034', word: 'diagnosis', language: 'en', transcription: '/ËŒdaÉªÉ™É¡ËˆnÉ™ÊsÉªs/', mean: 'cháº©n Ä‘oĂ¡n bá»‡nh', wordtype: 'noun', example: 'The diagnosis confirmed it was a minor infection.', example_vi: 'Cháº©n Ä‘oĂ¡n xĂ¡c nháº­n Ä‘Ă³ chá»‰ lĂ  má»™t nhiá»…m trĂ¹ng nháº¹.', remembered: false },
                    { id: 'w035', word: 'treatment', language: 'en', transcription: '/ËˆtriËtmÉ™nt/', mean: 'phÆ°Æ¡ng phĂ¡p Ä‘iá»u trá»‹', wordtype: 'noun', example: 'The treatment plan includes rest and medication.', example_vi: 'PhĂ¡c Ä‘á»“ Ä‘iá»u trá»‹ bao gá»“m nghá»‰ ngÆ¡i vĂ  dĂ¹ng thuá»‘c.', remembered: false },
                    { id: 'w036', word: 'pharmacy', language: 'en', transcription: '/ËˆfÉ‘ËmÉ™si/', mean: 'nhĂ  thuá»‘c', wordtype: 'noun', example: 'You can pick up your medicine at the pharmacy downstairs.', example_vi: 'Báº¡n cĂ³ thá»ƒ láº¥y thuá»‘c táº¡i nhĂ  thuá»‘c á»Ÿ táº§ng dÆ°á»›i.', remembered: false },
                    { id: 'w037', word: 'appointment', language: 'en', transcription: '/É™ËˆpÉ”ÉªntmÉ™nt/', mean: 'cuá»™c háº¹n khĂ¡m bá»‡nh', wordtype: 'noun', example: 'I scheduled an appointment with the doctor for Friday.', example_vi: 'TĂ´i Ä‘Ă£ Ä‘áº·t lá»‹ch háº¹n vá»›i bĂ¡c sÄ© vĂ o thá»© SĂ¡u.', remembered: false },
                    { id: 'w038', word: 'surgeon', language: 'en', transcription: '/ËˆsÉœËdÊ’É™n/', mean: 'bĂ¡c sÄ© pháº«u thuáº­t', wordtype: 'noun', example: 'The surgeon performed the operation successfully.', example_vi: 'BĂ¡c sÄ© pháº«u thuáº­t Ä‘Ă£ thá»±c hiá»‡n ca má»• thĂ nh cĂ´ng.', remembered: false },
                    { id: 'w039', word: 'recover', language: 'en', transcription: '/rÉªËˆkÊŒvÉ™r/', mean: 'há»“i phá»¥c, bĂ¬nh phá»¥c', wordtype: 'verb', example: 'He is expected to fully recover within two weeks.', example_vi: 'Anh áº¥y dá»± kiáº¿n sáº½ há»“i phá»¥c hoĂ n toĂ n trong vĂ²ng hai tuáº§n.', remembered: false },
                    { id: 'w040', word: 'medication', language: 'en', transcription: '/ËŒmÉ›dÉªËˆkeÉªÊƒn/', mean: 'thuốc, thuốc điều trị', wordtype: 'noun', example: 'Take your medication twice daily after meals.', example_vi: 'Hãy uống thuốc hai lần mỗi ngày sau bữa ăn.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 5: MARKETING â”€â”€â”€ */
            {
                id: 'toeic-marketing',
                title: 'đŸ“£ Marketing & Kinh doanh',
                description: 'Tá»« vá»±ng vá» quáº£ng cĂ¡o, thÆ°Æ¡ng hiá»‡u vĂ  chiáº¿n lÆ°á»£c kinh doanh',
                wordCount: 10,
                words: [
                    { id: 'w041', word: 'campaign', language: 'en', transcription: '/kĂ¦mËˆpeÉªn/', mean: 'chiáº¿n dá»‹ch quáº£ng cĂ¡o', wordtype: 'noun / verb', example: 'The marketing campaign doubled our sales.', example_vi: 'Chiáº¿n dá»‹ch marketing Ä‘Ă£ giĂºp doanh sá»‘ tÄƒng gáº¥p Ä‘Ă´i.', remembered: false },
                    { id: 'w042', word: 'target audience', language: 'en', transcription: '/ËˆtÉ‘ËÉ¡Éªt ËˆÉ”ËdiÉ™ns/', mean: 'Ä‘á»‘i tÆ°á»£ng má»¥c tiĂªu', wordtype: 'noun phrase', example: 'Our target audience is young professionals aged 25â€“35.', example_vi: 'Äá»‘i tÆ°á»£ng má»¥c tiĂªu cá»§a chĂºng tĂ´i lĂ  ngÆ°á»i tráº» chuyĂªn nghiá»‡p tá»« 25â€“35 tuá»•i.', remembered: false },
                    { id: 'w043', word: 'brand', language: 'en', transcription: '/brĂ¦nd/', mean: 'thÆ°Æ¡ng hiá»‡u', wordtype: 'noun / verb', example: 'Building a strong brand is essential for long-term success.', example_vi: 'XĂ¢y dá»±ng thÆ°Æ¡ng hiá»‡u máº¡nh lĂ  Ä‘iá»u cáº§n thiáº¿t cho sá»± thĂ nh cĂ´ng lĂ¢u dĂ i.', remembered: false },
                    { id: 'w044', word: 'strategy', language: 'en', transcription: '/ËˆstrĂ¦tÉªdÊ’i/', mean: 'chiáº¿n lÆ°á»£c', wordtype: 'noun', example: 'We need a new strategy to enter the Asian market.', example_vi: 'ChĂºng ta cáº§n má»™t chiáº¿n lÆ°á»£c má»›i Ä‘á»ƒ thĂ¢m nháº­p thá»‹ trÆ°á»ng chĂ¢u Ă.', remembered: false },
                    { id: 'w045', word: 'consumer', language: 'en', transcription: '/kÉ™nËˆsjuËmÉ™r/', mean: 'ngÆ°á»i tiĂªu dĂ¹ng', wordtype: 'noun', example: 'Consumer feedback helped improve the product design.', example_vi: 'Pháº£n há»“i cá»§a ngÆ°á»i tiĂªu dĂ¹ng Ä‘Ă£ giĂºp cáº£i thiá»‡n thiáº¿t káº¿ sáº£n pháº©m.', remembered: false },
                    { id: 'w046', word: 'launch', language: 'en', transcription: '/lÉ”ËntÊƒ/', mean: 'ra máº¯t, tung ra thá»‹ trÆ°á»ng', wordtype: 'noun / verb', example: 'The company will launch its new product next month.', example_vi: 'CĂ´ng ty sáº½ ra máº¯t sáº£n pháº©m má»›i vĂ o thĂ¡ng tá»›i.', remembered: false },
                    { id: 'w047', word: 'competitor', language: 'en', transcription: '/kÉ™mËˆpÉ›tÉªtÉ™r/', mean: 'Ä‘á»‘i thá»§ cáº¡nh tranh', wordtype: 'noun', example: 'We must analyze our competitors\' strategies carefully.', example_vi: 'ChĂºng ta cáº§n phĂ¢n tĂ­ch chiáº¿n lÆ°á»£c cá»§a Ä‘á»‘i thá»§ má»™t cĂ¡ch cáº©n tháº­n.', remembered: false },
                    { id: 'w048', word: 'promotion', language: 'en', transcription: '/prÉ™ËˆmÉ™ÊÊƒn/', mean: 'chương trình khuyến mãi; sự thăng chức', wordtype: 'noun', example: 'The summer promotion attracted thousands of customers.', example_vi: 'Chương trình khuyến mãi mùa hè đã thu hút hàng nghìn khách hàng.', remembered: false },
                    { id: 'w049', word: 'distribution', language: 'en', transcription: '/ËŒdÉªstrÉªËˆbjuËÊƒn/', mean: 'phĂ¢n phá»‘i', wordtype: 'noun', example: 'We need to improve our distribution network.', example_vi: 'ChĂºng ta cáº§n cáº£i thiá»‡n máº¡ng lÆ°á»›i phĂ¢n phá»‘i.', remembered: false },
                    { id: 'w050', word: 'survey', language: 'en', transcription: '/ËˆsÉœËveÉª/', mean: 'kháº£o sĂ¡t, Ä‘iá»u tra', wordtype: 'noun / verb', example: 'The survey results showed high customer satisfaction.', example_vi: 'Káº¿t quáº£ kháº£o sĂ¡t cho tháº¥y má»©c Ä‘á»™ hĂ i lĂ²ng cá»§a khĂ¡ch hĂ ng cao.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 6: CĂ”NG NGHá»† & IT â”€â”€â”€ */
            {
                id: 'toeic-it',
                title: 'đŸ’» CĂ´ng nghá»‡ & IT',
                description: 'Tá»« vá»±ng vá» pháº§n má»m, há»‡ thá»‘ng vĂ  an ninh máº¡ng',
                wordCount: 15,
                words: [
                    { id: 'w051', word: 'software', language: 'en', transcription: '/ËˆsÉ’ftweÉ™r/', mean: 'pháº§n má»m', wordtype: 'noun', example: 'The software update improved overall system performance.', example_vi: 'Báº£n cáº­p nháº­t pháº§n má»m Ä‘Ă£ cáº£i thiá»‡n hiá»‡u suáº¥t tá»•ng thá»ƒ cá»§a há»‡ thá»‘ng.', remembered: false },
                    { id: 'w052', word: 'database', language: 'en', transcription: '/ËˆdeÉªtÉ™beÉªs/', mean: 'cÆ¡ sá»Ÿ dá»¯ liá»‡u', wordtype: 'noun', example: 'All customer records are stored in the central database.', example_vi: 'Táº¥t cáº£ há»“ sÆ¡ khĂ¡ch hĂ ng Ä‘Æ°á»£c lÆ°u trá»¯ trong cÆ¡ sá»Ÿ dá»¯ liá»‡u trung tĂ¢m.', remembered: false },
                    { id: 'w053', word: 'cybersecurity', language: 'en', transcription: '/ËŒsaÉªbÉ™sÉªËˆkjÊÉ™rÉªti/', mean: 'an ninh máº¡ng', wordtype: 'noun', example: 'Cybersecurity is a top priority for every organization.', example_vi: 'An ninh máº¡ng lĂ  Æ°u tiĂªn hĂ ng Ä‘áº§u cá»§a má»i tá»• chá»©c.', remembered: false },
                    { id: 'w054', word: 'network', language: 'en', transcription: '/ËˆnÉ›twÉœËk/', mean: 'máº¡ng lÆ°á»›i, káº¿t ná»‘i máº¡ng', wordtype: 'noun / verb', example: 'The office network was down for two hours this morning.', example_vi: 'Máº¡ng lÆ°á»›i vÄƒn phĂ²ng bá»‹ giĂ¡n Ä‘oáº¡n hai giá» sĂ¡ng nay.', remembered: false },
                    { id: 'w055', word: 'server', language: 'en', transcription: '/ËˆsÉœËvÉ™r/', mean: 'mĂ¡y chá»§', wordtype: 'noun', example: 'The server crashed and caused a major system outage.', example_vi: 'MĂ¡y chá»§ bá»‹ sáº­p vĂ  gĂ¢y ra sá»± cá»‘ há»‡ thá»‘ng nghiĂªm trá»ng.', remembered: false },
                    { id: 'w056', word: 'bandwidth', language: 'en', transcription: '/ËˆbĂ¦ndwÉªdÎ¸/', mean: 'bÄƒng thĂ´ng', wordtype: 'noun', example: 'We need more bandwidth to support remote workers.', example_vi: 'ChĂºng ta cáº§n thĂªm bÄƒng thĂ´ng Ä‘á»ƒ há»— trá»£ nhĂ¢n viĂªn lĂ m viá»‡c tá»« xa.', remembered: false },
                    { id: 'w057', word: 'cloud computing', language: 'en', transcription: '/klaÊd kÉ™mËˆpjuËtÉªÅ‹/', mean: 'Ä‘iá»‡n toĂ¡n Ä‘Ă¡m mĂ¢y', wordtype: 'noun phrase', example: 'Cloud computing reduces the need for expensive physical servers.', example_vi: 'Äiá»‡n toĂ¡n Ä‘Ă¡m mĂ¢y giáº£m nhu cáº§u sá»­ dá»¥ng cĂ¡c mĂ¡y chá»§ váº­t lĂ½ tá»‘n kĂ©m.', remembered: false },
                    { id: 'w058', word: 'encryption', language: 'en', transcription: '/ÉªnËˆkrÉªpÊƒn/', mean: 'mĂ£ hĂ³a dá»¯ liá»‡u', wordtype: 'noun', example: 'Data encryption protects sensitive customer information.', example_vi: 'MĂ£ hĂ³a dá»¯ liá»‡u báº£o vá»‡ thĂ´ng tin nháº¡y cáº£m cá»§a khĂ¡ch hĂ ng.', remembered: false },
                    { id: 'w059', word: 'interface', language: 'en', transcription: '/ËˆÉªntÉ™feÉªs/', mean: 'giao diá»‡n', wordtype: 'noun', example: 'The new interface is much more user-friendly than before.', example_vi: 'Giao diá»‡n má»›i thĂ¢n thiá»‡n vá»›i ngÆ°á»i dĂ¹ng hÆ¡n nhiá»u so vá»›i trÆ°á»›c Ä‘Ă¢y.', remembered: false },
                    { id: 'w060', word: 'backup', language: 'en', transcription: '/ËˆbĂ¦kÊŒp/', mean: 'báº£n sao lÆ°u, sao lÆ°u', wordtype: 'noun / verb', example: 'Always create a backup before updating the operating system.', example_vi: 'LuĂ´n táº¡o báº£n sao lÆ°u trÆ°á»›c khi cáº­p nháº­t há»‡ Ä‘iá»u hĂ nh.', remembered: false },
                    { id: 'w061', word: 'algorithm', language: 'en', transcription: '/ËˆĂ¦lÉ¡É™rÉªĂ°É™m/', mean: 'thuáº­t toĂ¡n', wordtype: 'noun', example: 'The algorithm used in this program is very efficient.', example_vi: 'Thuáº­t toĂ¡n Ä‘Æ°á»£c sá»­ dá»¥ng trong chÆ°Æ¡ng trĂ¬nh nĂ y ráº¥t hiá»‡u quáº£.', remembered: false },
                    { id: 'w062', word: 'malware', language: 'en', transcription: '/ËˆmĂ¦lweÉ™r/', mean: 'pháº§n má»m Ä‘á»™c háº¡i', wordtype: 'noun', example: 'The computer was infected with malware and had to be wiped.', example_vi: 'MĂ¡y tĂ­nh bá»‹ nhiá»…m pháº§n má»m Ä‘á»™c háº¡i vĂ  pháº£i Ä‘Æ°á»£c xĂ³a sáº¡ch.', remembered: false },
                    { id: 'w063', word: 'download', language: 'en', transcription: '/ËˆdaÊnlÉ™Êd/', mean: 'táº£i xuá»‘ng', wordtype: 'noun / verb', example: 'Please download the latest version of the application.', example_vi: 'Vui lĂ²ng táº£i xuá»‘ng phiĂªn báº£n má»›i nháº¥t cá»§a á»©ng dá»¥ng.', remembered: false },
                    { id: 'w064', word: 'upgrade', language: 'en', transcription: '/ËˆÊŒpÉ¡reÉªd/', mean: 'nĂ¢ng cáº¥p', wordtype: 'noun / verb', example: 'The IT team scheduled a system upgrade for Saturday night.', example_vi: 'NhĂ³m IT Ä‘Ă£ lĂªn lá»‹ch nĂ¢ng cáº¥p há»‡ thá»‘ng vĂ o tá»‘i thá»© Báº£y.', remembered: false },
                    { id: 'w065', word: 'firewall', language: 'en', transcription: '/ËˆfaÉªÉ™wÉ”Ël/', mean: 'tÆ°á»ng lá»­a', wordtype: 'noun', example: 'The firewall successfully blocked the unauthorized access attempt.', example_vi: 'TÆ°á»ng lá»­a Ä‘Ă£ cháº·n thĂ nh cĂ´ng ná»— lá»±c truy cáº­p trĂ¡i phĂ©p.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 7: Báº¤T Äá»˜NG Sáº¢N â”€â”€â”€ */
            {
                id: 'toeic-realestate',
                title: 'đŸ—ï¸ Báº¥t Ä‘á»™ng sáº£n & XĂ¢y dá»±ng',
                description: 'Tá»« vá»±ng vá» mua bĂ¡n, thuĂª mÆ°á»›n vĂ  xĂ¢y dá»±ng báº¥t Ä‘á»™ng sáº£n',
                wordCount: 12,
                words: [
                    { id: 'w066', word: 'property', language: 'en', transcription: '/ËˆprÉ’pÉ™ti/', mean: 'báº¥t Ä‘á»™ng sáº£n, tĂ i sáº£n', wordtype: 'noun', example: 'The company purchased a commercial property downtown.', example_vi: 'CĂ´ng ty Ä‘Ă£ mua má»™t báº¥t Ä‘á»™ng sáº£n thÆ°Æ¡ng máº¡i á»Ÿ trung tĂ¢m thĂ nh phá»‘.', remembered: false },
                    { id: 'w067', word: 'lease', language: 'en', transcription: '/liËs/', mean: 'há»£p Ä‘á»“ng thuĂª, cho thuĂª', wordtype: 'noun / verb', example: 'The office lease expires at the end of the year.', example_vi: 'Há»£p Ä‘á»“ng thuĂª vÄƒn phĂ²ng háº¿t háº¡n vĂ o cuá»‘i nÄƒm nay.', remembered: false },
                    { id: 'w068', word: 'tenant', language: 'en', transcription: '/ËˆtÉ›nÉ™nt/', mean: 'ngÆ°á»i thuĂª (nhĂ , vÄƒn phĂ²ng)', wordtype: 'noun', example: 'The landlord must notify the tenant before entering the unit.', example_vi: 'Chá»§ nhĂ  pháº£i thĂ´ng bĂ¡o cho ngÆ°á»i thuĂª trÆ°á»›c khi vĂ o cÄƒn há»™.', remembered: false },
                    { id: 'w069', word: 'mortgage', language: 'en', transcription: '/ËˆmÉ”ËÉ¡ÉªdÊ’/', mean: 'tháº¿ cháº¥p, khoáº£n vay mua nhĂ ', wordtype: 'noun / verb', example: 'They took out a 20-year mortgage to buy the house.', example_vi: 'Há» Ä‘Ă£ vay tháº¿ cháº¥p 20 nÄƒm Ä‘á»ƒ mua ngĂ´i nhĂ .', remembered: false },
                    { id: 'w070', word: 'appraisal', language: 'en', transcription: '/É™ËˆpreÉªzl/', mean: 'sự thẩm định giá, định giá', wordtype: 'noun', example: 'A professional appraisal is required before the property sale.', example_vi: 'Cần có bản thẩm định giá chuyên nghiệp trước khi bán bất động sản.', remembered: false },
                    { id: 'w071', word: 'renovation', language: 'en', transcription: '/ËŒrÉ›nÉ™ËˆveÉªÊƒn/', mean: 'cáº£i táº¡o, sá»­a chá»¯a', wordtype: 'noun', example: 'The building renovation is expected to take three months.', example_vi: 'Viá»‡c cáº£i táº¡o tĂ²a nhĂ  dá»± kiáº¿n sáº½ máº¥t ba thĂ¡ng.', remembered: false },
                    { id: 'w072', word: 'amenity', language: 'en', transcription: '/É™ËˆmiËnÉªti/', mean: 'tiá»‡n nghi, tiá»‡n Ă­ch', wordtype: 'noun', example: 'The apartment complex offers many amenities including a pool.', example_vi: 'Khu chung cÆ° cung cáº¥p nhiá»u tiá»‡n nghi bao gá»“m cáº£ há»“ bÆ¡i.', remembered: false },
                    { id: 'w073', word: 'vacancy', language: 'en', transcription: '/ËˆveÉªkÉ™nsi/', mean: 'phĂ²ng trá»‘ng, chá»— trá»‘ng', wordtype: 'noun', example: 'There is currently a vacancy on the third floor of our building.', example_vi: 'Hiá»‡n cĂ³ má»™t phĂ²ng trá»‘ng á»Ÿ táº§ng ba cá»§a tĂ²a nhĂ  chĂºng tĂ´i.', remembered: false },
                    { id: 'w074', word: 'contractor', language: 'en', transcription: '/ËˆkÉ’ntrĂ¦ktÉ™r/', mean: 'nhĂ  tháº§u xĂ¢y dá»±ng', wordtype: 'noun', example: 'The contractor submitted a detailed bid for the renovation project.', example_vi: 'NhĂ  tháº§u Ä‘Ă£ ná»™p há»“ sÆ¡ dá»± tháº§u chi tiáº¿t cho dá»± Ă¡n cáº£i táº¡o.', remembered: false },
                    { id: 'w075', word: 'zoning', language: 'en', transcription: '/ËˆzÉ™ÊnÉªÅ‹/', mean: 'quy hoáº¡ch phĂ¢n vĂ¹ng', wordtype: 'noun', example: 'The area is zoned for commercial use only, not residential.', example_vi: 'Khu vá»±c nĂ y Ä‘Æ°á»£c quy hoáº¡ch chá»‰ Ä‘á»ƒ sá»­ dá»¥ng thÆ°Æ¡ng máº¡i, khĂ´ng pháº£i dĂ¢n cÆ°.', remembered: false },
                    { id: 'w076', word: 'deed', language: 'en', transcription: '/diËd/', mean: 'chá»©ng thÆ°, giáº¥y sá»Ÿ há»¯u', wordtype: 'noun', example: 'The deed to the property was transferred to the new buyer.', example_vi: 'Chá»©ng thÆ° sá»Ÿ há»¯u báº¥t Ä‘á»™ng sáº£n Ä‘Ă£ Ä‘Æ°á»£c chuyá»ƒn sang ngÆ°á»i mua má»›i.', remembered: false },
                    { id: 'w077', word: 'equity', language: 'en', transcription: '/ËˆÉ›kwÉªti/', mean: 'vá»‘n chá»§ sá»Ÿ há»¯u', wordtype: 'noun', example: 'They built up significant equity in their home over ten years.', example_vi: 'Há» Ä‘Ă£ tĂ­ch lÅ©y Ä‘Æ°á»£c vá»‘n chá»§ sá»Ÿ há»¯u Ä‘Ă¡ng ká»ƒ trong ngĂ´i nhĂ  suá»‘t mÆ°á»i nÄƒm.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 8: NHĂ€ HĂ€NG & Ä‚N Uá»NG â”€â”€â”€ */
            {
                id: 'toeic-restaurant',
                title: 'đŸ½ï¸ NhĂ  hĂ ng & Dá»‹ch vá»¥ Äƒn uá»‘ng',
                description: 'Tá»« vá»±ng liĂªn quan Ä‘áº¿n nhĂ  hĂ ng, thá»±c Ä‘Æ¡n vĂ  dá»‹ch vá»¥ áº©m thá»±c',
                wordCount: 13,
                words: [
                    { id: 'w078', word: 'catering', language: 'en', transcription: '/ËˆkeÉªtÉ™rÉªÅ‹/', mean: 'dá»‹ch vá»¥ phá»¥c vá»¥ Äƒn uá»‘ng', wordtype: 'noun', example: 'The catering team prepared food for over 200 guests.', example_vi: 'Äá»™i dá»‹ch vá»¥ Äƒn uá»‘ng Ä‘Ă£ chuáº©n bá»‹ thá»©c Äƒn cho hÆ¡n 200 khĂ¡ch.', remembered: false },
                    { id: 'w079', word: 'cuisine', language: 'en', transcription: '/kwÉªËˆziËn/', mean: 'áº©m thá»±c, phong cĂ¡ch náº¥u Äƒn', wordtype: 'noun', example: 'The restaurant specializes in authentic French cuisine.', example_vi: 'NhĂ  hĂ ng chuyĂªn phá»¥c vá»¥ áº©m thá»±c PhĂ¡p chĂ­nh thá»‘ng.', remembered: false },
                    { id: 'w080', word: 'portion', language: 'en', transcription: '/ËˆpÉ”ËÊƒn/', mean: 'kháº©u pháº§n Äƒn', wordtype: 'noun', example: 'The portion size here is very generous for the price.', example_vi: 'Kháº©u pháº§n Äƒn á»Ÿ Ä‘Ă¢y ráº¥t hĂ o phĂ³ng so vá»›i má»©c giĂ¡.', remembered: false },
                    { id: 'w081', word: 'ingredient', language: 'en', transcription: '/ÉªnËˆÉ¡riËdiÉ™nt/', mean: 'nguyĂªn liá»‡u, thĂ nh pháº§n', wordtype: 'noun', example: 'The chef insists on using only fresh, local ingredients.', example_vi: 'Äáº§u báº¿p khÄƒng khÄƒng chá»‰ sá»­ dá»¥ng nguyĂªn liá»‡u tÆ°Æ¡i vĂ  Ä‘á»‹a phÆ°Æ¡ng.', remembered: false },
                    { id: 'w082', word: 'appetizer', language: 'en', transcription: '/ËˆĂ¦pÉªtaÉªzÉ™r/', mean: 'mĂ³n khai vá»‹', wordtype: 'noun', example: 'We ordered an appetizer while waiting for the main course.', example_vi: 'ChĂºng tĂ´i gá»i mĂ³n khai vá»‹ trong khi chá» mĂ³n chĂ­nh.', remembered: false },
                    { id: 'w083', word: 'beverage', language: 'en', transcription: '/ËˆbÉ›vÉ™rÉªdÊ’/', mean: 'Ä‘á»“ uá»‘ng', wordtype: 'noun', example: 'What beverages are available at your establishment?', example_vi: 'NhĂ  hĂ ng cá»§a báº¡n cĂ³ nhá»¯ng loáº¡i Ä‘á»“ uá»‘ng nĂ o?', remembered: false },
                    { id: 'w084', word: 'gratuity', language: 'en', transcription: '/É¡rÉ™ËˆtjuËÉªti/', mean: 'tiá»n tip, tiá»n phá»¥c vá»¥', wordtype: 'noun', example: 'A 15% gratuity is automatically included in the bill.', example_vi: '15% tiá»n phá»¥c vá»¥ Ä‘Æ°á»£c tá»± Ä‘á»™ng tĂ­nh vĂ o hĂ³a Ä‘Æ¡n.', remembered: false },
                    { id: 'w085', word: 'complimentary', language: 'en', transcription: '/ËŒkÉ’mplÉªËˆmÉ›ntri/', mean: 'miá»…n phĂ­, táº·ng kĂ¨m', wordtype: 'adjective', example: 'Breakfast is complimentary for all hotel guests.', example_vi: 'Bá»¯a sĂ¡ng miá»…n phĂ­ dĂ nh cho táº¥t cáº£ khĂ¡ch lÆ°u trĂº táº¡i khĂ¡ch sáº¡n.', remembered: false },
                    { id: 'w086', word: 'entrĂ©e', language: 'en', transcription: '/ËˆÉ’ntreÉª/', mean: 'mĂ³n chĂ­nh', wordtype: 'noun', example: 'The entrĂ©e comes with a choice of soup or salad.', example_vi: 'MĂ³n chĂ­nh Ä‘i kĂ¨m vá»›i lá»±a chá»n sĂºp hoáº·c salad.', remembered: false },
                    { id: 'w087', word: 'allergy', language: 'en', transcription: '/ËˆĂ¦lÉ™dÊ’i/', mean: 'dá»‹ á»©ng thá»±c pháº©m', wordtype: 'noun', example: 'Please inform us of any food allergies before ordering.', example_vi: 'Vui lĂ²ng thĂ´ng bĂ¡o cho chĂºng tĂ´i vá» báº¥t ká»³ dá»‹ á»©ng thá»±c pháº©m nĂ o trÆ°á»›c khi gá»i mĂ³n.', remembered: false },
                    { id: 'w088', word: 'banquet', language: 'en', transcription: '/ËˆbĂ¦Å‹kwÉªt/', mean: 'tiá»‡c, bá»¯a tiá»‡c lá»›n', wordtype: 'noun', example: 'The company held a banquet for its top clients last Friday.', example_vi: 'CĂ´ng ty Ä‘Ă£ tá»• chá»©c tiá»‡c cho nhá»¯ng khĂ¡ch hĂ ng hĂ ng Ä‘áº§u vĂ o thá»© SĂ¡u tuáº§n trÆ°á»›c.', remembered: false },
                    { id: 'w089', word: 'specials', language: 'en', transcription: '/ËˆspÉ›Êƒlz/', mean: 'mĂ³n Ä‘áº·c biá»‡t hĂ´m nay', wordtype: 'noun', example: 'The waiter listed today\'s specials before taking our order.', example_vi: 'NgÆ°á»i phá»¥c vá»¥ Ä‘á»c danh sĂ¡ch mĂ³n Ä‘áº·c biá»‡t hĂ´m nay trÆ°á»›c khi ghi Ä‘Æ¡n.', remembered: false },
                    { id: 'w090', word: 'sustainable', language: 'en', transcription: '/sÉ™ËˆsteÉªnÉ™bl/', mean: 'bá»n vá»¯ng, thĂ¢n thiá»‡n mĂ´i trÆ°á»ng', wordtype: 'adjective', example: 'The restaurant sources only sustainable seafood from local fisheries.', example_vi: 'NhĂ  hĂ ng chá»‰ sá»­ dá»¥ng háº£i sáº£n bá»n vá»¯ng tá»« ngÆ° nghiá»‡p Ä‘á»‹a phÆ°Æ¡ng.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 9: GIĂO Dá»¤C & ÄĂ€O Táº O â”€â”€â”€ */
            {
                id: 'toeic-education',
                title: 'đŸ“ GiĂ¡o dá»¥c & ÄĂ o táº¡o',
                description: 'Tá»« vá»±ng vá» há»c thuáº­t, chá»©ng chá»‰ vĂ  phĂ¡t triá»ƒn nghá» nghiá»‡p',
                wordCount: 14,
                words: [
                    { id: 'w091', word: 'curriculum', language: 'en', transcription: '/kÉ™ËˆrÉªkjÊlÉ™m/', mean: 'chÆ°Æ¡ng trĂ¬nh há»c', wordtype: 'noun', example: 'The new curriculum focuses on developing practical skills.', example_vi: 'ChÆ°Æ¡ng trĂ¬nh há»c má»›i táº­p trung vĂ o viá»‡c phĂ¡t triá»ƒn ká»¹ nÄƒng thá»±c táº¿.', remembered: false },
                    { id: 'w092', word: 'enrollment', language: 'en', transcription: '/ÉªnËˆrÉ™ÊlmÉ™nt/', mean: 'Ä‘Äƒng kĂ½ há»c, ghi danh', wordtype: 'noun', example: 'Enrollment for the spring semester begins next Monday.', example_vi: 'ÄÄƒng kĂ½ há»c ká»³ mĂ¹a xuĂ¢n báº¯t Ä‘áº§u vĂ o thá»© Hai tá»›i.', remembered: false },
                    { id: 'w093', word: 'seminar', language: 'en', transcription: '/ËˆsÉ›mÉªnÉ‘Ë/', mean: 'há»™i tháº£o, buá»•i há»c nhĂ³m', wordtype: 'noun', example: 'The management seminar was attended by 50 employees.', example_vi: 'Há»™i tháº£o quáº£n lĂ½ cĂ³ 50 nhĂ¢n viĂªn tham dá»±.', remembered: false },
                    { id: 'w094', word: 'certification', language: 'en', transcription: '/ËŒsÉœËtÉªfÉªËˆkeÉªÊƒn/', mean: 'chá»©ng chá»‰, chá»©ng nháº­n', wordtype: 'noun', example: 'He completed the professional certification in digital marketing.', example_vi: 'Anh áº¥y Ä‘Ă£ hoĂ n thĂ nh chá»©ng chá»‰ chuyĂªn nghiá»‡p vá» marketing sá»‘.', remembered: false },
                    { id: 'w095', word: 'tuition', language: 'en', transcription: '/tjuËËˆÉªÊƒn/', mean: 'há»c phĂ­', wordtype: 'noun', example: 'Tuition fees increased by 5% for the upcoming academic year.', example_vi: 'Há»c phĂ­ tÄƒng 5% cho nÄƒm há»c sáº¯p tá»›i.', remembered: false },
                    { id: 'w096', word: 'scholarship', language: 'en', transcription: '/ËˆskÉ’lÉ™ÊƒÉªp/', mean: 'há»c bá»•ng', wordtype: 'noun', example: 'She received a full scholarship to study at a foreign university.', example_vi: 'CĂ´ áº¥y nháº­n Ä‘Æ°á»£c há»c bá»•ng toĂ n pháº§n Ä‘á»ƒ há»c táº¡i má»™t trÆ°á»ng Ä‘áº¡i há»c nÆ°á»›c ngoĂ i.', remembered: false },
                    { id: 'w097', word: 'internship', language: 'en', transcription: '/ËˆÉªntÉœËnÊƒÉªp/', mean: 'chÆ°Æ¡ng trĂ¬nh thá»±c táº­p', wordtype: 'noun', example: 'The summer internship program lasts for three months.', example_vi: 'ChÆ°Æ¡ng trĂ¬nh thá»±c táº­p hĂ¨ kĂ©o dĂ i ba thĂ¡ng.', remembered: false },
                    { id: 'w098', word: 'mentor', language: 'en', transcription: '/ËˆmÉ›ntÉ™r/', mean: 'ngÆ°á»i cá»‘ váº¥n, ngÆ°á»i hÆ°á»›ng dáº«n', wordtype: 'noun / verb', example: 'Each new employee is assigned a mentor to help with onboarding.', example_vi: 'Má»—i nhĂ¢n viĂªn má»›i Ä‘Æ°á»£c phĂ¢n cĂ´ng má»™t ngÆ°á»i cá»‘ váº¥n Ä‘á»ƒ há»— trá»£ há»™i nháº­p.', remembered: false },
                    { id: 'w099', word: 'workshop', language: 'en', transcription: '/ËˆwÉœËkÊƒÉ’p/', mean: 'khĂ³a há»c thá»±c hĂ nh, há»™i tháº£o thá»±c táº¿', wordtype: 'noun', example: 'The company organized a creative writing workshop for the staff.', example_vi: 'CĂ´ng ty tá»• chá»©c há»™i tháº£o viáº¿t sĂ¡ng táº¡o cho nhĂ¢n viĂªn.', remembered: false },
                    { id: 'w100', word: 'accreditation', language: 'en', transcription: '/É™ËŒkrÉ›dÉªËˆteÉªÊƒn/', mean: 'cĂ´ng nháº­n, kiá»ƒm Ä‘á»‹nh cháº¥t lÆ°á»£ng', wordtype: 'noun', example: 'The school received accreditation from the national education board.', example_vi: 'TrÆ°á»ng Ä‘Æ°á»£c cĂ´ng nháº­n tá»« há»™i Ä‘á»“ng giĂ¡o dá»¥c quá»‘c gia.', remembered: false },
                    { id: 'w101', word: 'lecture', language: 'en', transcription: '/ËˆlÉ›ktÊƒÉ™r/', mean: 'bĂ i giáº£ng, thuyáº¿t trĂ¬nh', wordtype: 'noun / verb', example: 'The professor delivered an insightful lecture on global economics.', example_vi: 'GiĂ¡o sÆ° Ä‘Ă£ cĂ³ bĂ i giáº£ng sĂ¢u sáº¯c vá» kinh táº¿ toĂ n cáº§u.', remembered: false },
                    { id: 'w102', word: 'assignment', language: 'en', transcription: '/É™ËˆsaÉªnmÉ™nt/', mean: 'bĂ i táº­p, nhiá»‡m vá»¥ Ä‘Æ°á»£c giao', wordtype: 'noun', example: 'Please submit your assignment by this Friday at noon.', example_vi: 'Vui lĂ²ng ná»™p bĂ i táº­p trÆ°á»›c trÆ°a thá»© SĂ¡u tuáº§n nĂ y.', remembered: false },
                    { id: 'w103', word: 'evaluate', language: 'en', transcription: '/ÉªËˆvĂ¦ljueÉªt/', mean: 'Ä‘Ă¡nh giĂ¡, nháº­n xĂ©t', wordtype: 'verb', example: 'The supervisor will evaluate each employee\'s performance monthly.', example_vi: 'NgÆ°á»i giĂ¡m sĂ¡t sáº½ Ä‘Ă¡nh giĂ¡ hiá»‡u suáº¥t cá»§a má»—i nhĂ¢n viĂªn hĂ ng thĂ¡ng.', remembered: false },
                    { id: 'w104', word: 'degree', language: 'en', transcription: '/dÉªËˆÉ¡riË/', mean: 'báº±ng cáº¥p há»c thuáº­t', wordtype: 'noun', example: 'She holds a master\'s degree in business administration.', example_vi: 'CĂ´ áº¥y cĂ³ báº±ng tháº¡c sÄ© quáº£n trá»‹ kinh doanh.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 10: PHĂP LĂ & Há»¢P Äá»’NG â”€â”€â”€ */
            {
                id: 'toeic-legal',
                title: 'â–ï¸ PhĂ¡p lĂ½ & Há»£p Ä‘á»“ng',
                description: 'Tá»« vá»±ng vá» luáº­t phĂ¡p, Ä‘iá»u khoáº£n há»£p Ä‘á»“ng vĂ  tuĂ¢n thá»§ quy Ä‘á»‹nh',
                wordCount: 12,
                words: [
                    { id: 'w105', word: 'clause', language: 'en', transcription: '/klÉ”Ëz/', mean: 'điều khoản', wordtype: 'noun', example: 'The contract includes a strict confidentiality clause.', example_vi: 'Hợp đồng có một điều khoản bảo mật nghiêm ngặt.', remembered: false },
                    { id: 'w106', word: 'liability', language: 'en', transcription: '/ËŒlaÉªÉ™ËˆbÉªlÉªti/', mean: 'trĂ¡ch nhiá»‡m phĂ¡p lĂ½', wordtype: 'noun', example: 'The company denied any liability for the workplace accident.', example_vi: 'CĂ´ng ty phá»§ nháº­n báº¥t ká»³ trĂ¡ch nhiá»‡m phĂ¡p lĂ½ nĂ o Ä‘á»‘i vá»›i tai náº¡n lao Ä‘á»™ng.', remembered: false },
                    { id: 'w107', word: 'compliance', language: 'en', transcription: '/kÉ™mËˆplaÉªÉ™ns/', mean: 'sá»± tuĂ¢n thá»§ quy Ä‘á»‹nh', wordtype: 'noun', example: 'All staff must ensure compliance with data protection laws.', example_vi: 'Táº¥t cáº£ nhĂ¢n viĂªn pháº£i Ä‘áº£m báº£o tuĂ¢n thá»§ cĂ¡c luáº­t báº£o vá»‡ dá»¯ liá»‡u.', remembered: false },
                    { id: 'w108', word: 'arbitration', language: 'en', transcription: '/ËŒÉ‘ËbÉªËˆtreÉªÊƒn/', mean: 'trá»ng tĂ i, phĂ¢n xá»­', wordtype: 'noun', example: 'The business dispute was resolved through binding arbitration.', example_vi: 'Tranh cháº¥p kinh doanh Ä‘Æ°á»£c giáº£i quyáº¿t thĂ´ng qua trá»ng tĂ i rĂ ng buá»™c.', remembered: false },
                    { id: 'w109', word: 'intellectual property', language: 'en', transcription: '/ËŒÉªntÉ™ËˆlÉ›ktÊƒuÉ™l ËˆprÉ’pÉ™ti/', mean: 'sá»Ÿ há»¯u trĂ­ tuá»‡', wordtype: 'noun phrase', example: 'The company aggressively protects its intellectual property rights.', example_vi: 'CĂ´ng ty tĂ­ch cá»±c báº£o vá»‡ quyá»n sá»Ÿ há»¯u trĂ­ tuá»‡ cá»§a mĂ¬nh.', remembered: false },
                    { id: 'w110', word: 'indemnify', language: 'en', transcription: '/ÉªnËˆdÉ›mnÉªfaÉª/', mean: 'bá»“i thÆ°á»ng, báº£o Ä‘áº£m khĂ´ng bá»‹ thiá»‡t háº¡i', wordtype: 'verb', example: 'The contractor agreed to indemnify the client against all losses.', example_vi: 'NhĂ  tháº§u Ä‘á»“ng Ă½ bá»“i thÆ°á»ng cho khĂ¡ch hĂ ng trÆ°á»›c má»i tá»•n tháº¥t.', remembered: false },
                    { id: 'w111', word: 'breach', language: 'en', transcription: '/briËtÊƒ/', mean: 'vi phạm, sự vi phạm', wordtype: 'noun / verb', example: 'Failing to deliver on time constitutes a breach of contract.', example_vi: 'Việc không giao hàng đúng hạn cấu thành hành vi vi phạm hợp đồng.', remembered: false },
                    { id: 'w112', word: 'jurisdiction', language: 'en', transcription: '/ËŒdÊ’ÊÉ™rÉªsËˆdÉªkÊƒn/', mean: 'tháº©m quyá»n phĂ¡p lĂ½', wordtype: 'noun', example: 'This agreement falls under the jurisdiction of Vietnamese law.', example_vi: 'Thá»a thuáº­n nĂ y thuá»™c tháº©m quyá»n cá»§a phĂ¡p luáº­t Viá»‡t Nam.', remembered: false },
                    { id: 'w113', word: 'amendment', language: 'en', transcription: '/É™ËˆmÉ›ndmÉ™nt/', mean: 'bản sửa đổi, điều khoản sửa đổi', wordtype: 'noun', example: 'An amendment was made to reflect the new payment terms.', example_vi: 'Một bản sửa đổi đã được thêm vào để phản ánh các điều khoản thanh toán mới.', remembered: false },
                    { id: 'w114', word: 'warranty', language: 'en', transcription: '/ËˆwÉ’rÉ™nti/', mean: 'báº£o hĂ nh, cam káº¿t', wordtype: 'noun', example: 'The product comes with a two-year manufacturer\'s warranty.', example_vi: 'Sáº£n pháº©m Ä‘i kĂ¨m vá»›i báº£o hĂ nh hai nÄƒm cá»§a nhĂ  sáº£n xuáº¥t.', remembered: false },
                    { id: 'w115', word: 'confidential', language: 'en', transcription: '/ËŒkÉ’nfÉªËˆdÉ›nÊƒl/', mean: 'báº£o máº­t, mang tĂ­nh riĂªng tÆ°', wordtype: 'adjective', example: 'All discussions in this meeting are strictly confidential.', example_vi: 'Táº¥t cáº£ cĂ¡c tháº£o luáº­n trong cuá»™c há»p nĂ y Ä‘á»u tuyá»‡t Ä‘á»‘i báº£o máº­t.', remembered: false },
                    { id: 'w116', word: 'litigation', language: 'en', transcription: '/ËŒlÉªtÉªËˆÉ¡eÉªÊƒn/', mean: 'kiá»‡n tá»¥ng, tranh tá»¥ng phĂ¡p lĂ½', wordtype: 'noun', example: 'The company is trying hard to avoid costly litigation.', example_vi: 'CĂ´ng ty Ä‘ang cá»‘ gáº¯ng trĂ¡nh cĂ¡c vá»¥ kiá»‡n tá»¥ng tá»‘n kĂ©m.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 11: Sáº¢N XUáº¤T & LOGISTICS â”€â”€â”€ */
            {
                id: 'toeic-manufacturing',
                title: 'đŸ“¦ Sáº£n xuáº¥t & Logistics',
                description: 'Tá»« vá»±ng vá» dĂ¢y chuyá»n sáº£n xuáº¥t, kho hĂ ng vĂ  váº­n chuyá»ƒn hĂ ng hĂ³a',
                wordCount: 15,
                words: [
                    { id: 'w117', word: 'assembly', language: 'en', transcription: '/É™ËˆsÉ›mbli/', mean: 'sự lắp ráp, dây chuyền lắp ráp', wordtype: 'noun', example: 'The assembly line produces 500 units per eight-hour shift.', example_vi: 'Dây chuyền lắp ráp sản xuất 500 sản phẩm trong mỗi ca làm việc tám giờ.', remembered: false },
                    { id: 'w118', word: 'inventory', language: 'en', transcription: '/ËˆÉªnvÉ™ntri/', mean: 'hĂ ng tá»“n kho', wordtype: 'noun', example: 'We need to reduce our inventory levels before the fiscal year ends.', example_vi: 'ChĂºng ta cáº§n giáº£m má»©c hĂ ng tá»“n kho trÆ°á»›c khi káº¿t thĂºc nÄƒm tĂ i chĂ­nh.', remembered: false },
                    { id: 'w119', word: 'shipment', language: 'en', transcription: '/ËˆÊƒÉªpmÉ™nt/', mean: 'lô hàng, chuyến hàng', wordtype: 'noun', example: 'The shipment is scheduled to arrive at the warehouse on Monday.', example_vi: 'Lô hàng dự kiến sẽ đến kho vào thứ Hai.', remembered: false },
                    { id: 'w120', word: 'warehouse', language: 'en', transcription: '/ËˆweÉ™haÊs/', mean: 'kho hĂ ng, nhĂ  kho', wordtype: 'noun', example: 'The new warehouse can store up to 10,000 pallets of goods.', example_vi: 'Kho hĂ ng má»›i cĂ³ thá»ƒ chá»©a tá»›i 10.000 pallet hĂ ng hĂ³a.', remembered: false },
                    { id: 'w121', word: 'procurement', language: 'en', transcription: '/prÉ™ËˆkjÊÉ™rmÉ™nt/', mean: 'mua sáº¯m, thu mua váº­t tÆ°', wordtype: 'noun', example: 'The procurement department handles all supplier contracts and orders.', example_vi: 'Bá»™ pháº­n thu mua xá»­ lĂ½ táº¥t cáº£ há»£p Ä‘á»“ng vĂ  Ä‘Æ¡n Ä‘áº·t hĂ ng vá»›i nhĂ  cung cáº¥p.', remembered: false },
                    { id: 'w122', word: 'defect', language: 'en', transcription: '/ËˆdiËfÉ›kt/', mean: 'lá»—i, khiáº¿m khuyáº¿t sáº£n pháº©m', wordtype: 'noun', example: 'Quality control detected a minor defect in the latest batch.', example_vi: 'Kiá»ƒm soĂ¡t cháº¥t lÆ°á»£ng phĂ¡t hiá»‡n lá»—i nhá» trong lĂ´ hĂ ng má»›i nháº¥t.', remembered: false },
                    { id: 'w123', word: 'output', language: 'en', transcription: '/ËˆaÊtpÊt/', mean: 'sáº£n lÆ°á»£ng, Ä‘áº§u ra', wordtype: 'noun', example: 'The factory increased its monthly output by 15% this quarter.', example_vi: 'NhĂ  mĂ¡y Ä‘Ă£ tÄƒng sáº£n lÆ°á»£ng hĂ ng thĂ¡ng lĂªn 15% trong quĂ½ nĂ y.', remembered: false },
                    { id: 'w124', word: 'freight', language: 'en', transcription: '/freÉªt/', mean: 'hàng vận chuyển, cước vận tải', wordtype: 'noun', example: 'The freight charges for air shipment are higher than sea freight.', example_vi: 'Cước vận chuyển bằng đường hàng không cao hơn cước vận chuyển đường biển.', remembered: false },
                    { id: 'w125', word: 'customs clearance', language: 'en', transcription: '/ËˆkÊŒstÉ™mz ËˆklÉªÉ™rÉ™ns/', mean: 'thĂ´ng quan háº£i quan', wordtype: 'noun phrase', example: 'Customs clearance took longer than expected due to missing documents.', example_vi: 'ThĂ´ng quan háº£i quan máº¥t nhiá»u thá»i gian hÆ¡n dá»± kiáº¿n do thiáº¿u giáº¥y tá».', remembered: false },
                    { id: 'w126', word: 'supplier', language: 'en', transcription: '/sÉ™ËˆplaÉªÉ™r/', mean: 'nhà cung cấp', wordtype: 'noun', example: 'We are looking for a reliable supplier of high-quality raw materials.', example_vi: 'Chúng ta đang tìm một nhà cung cấp đáng tin cậy cho nguồn nguyên liệu thô chất lượng cao.', remembered: false },
                    { id: 'w127', word: 'recall', language: 'en', transcription: '/rÉªËˆkÉ”Ël/', mean: 'thu há»“i sáº£n pháº©m', wordtype: 'noun / verb', example: 'The manufacturer issued a product recall due to safety concerns.', example_vi: 'NhĂ  sáº£n xuáº¥t Ä‘Ă£ phĂ¡t lá»‡nh thu há»“i sáº£n pháº©m do lo ngáº¡i vá» an toĂ n.', remembered: false },
                    { id: 'w128', word: 'lead time', language: 'en', transcription: '/liËd taÉªm/', mean: 'thời gian từ khi đặt hàng đến khi giao hàng', wordtype: 'noun phrase', example: 'The lead time for this custom order is approximately four weeks.', example_vi: 'Thời gian xử lý và giao đơn hàng đặt riêng này là khoảng bốn tuần.', remembered: false },
                    { id: 'w129', word: 'batch', language: 'en', transcription: '/bĂ¦tÊƒ/', mean: 'lĂ´, máº» sáº£n pháº©m', wordtype: 'noun', example: 'The first batch of products passed all quality inspection tests.', example_vi: 'LĂ´ sáº£n pháº©m Ä‘áº§u tiĂªn Ä‘Ă£ vÆ°á»£t qua táº¥t cáº£ cĂ¡c bĂ i kiá»ƒm tra cháº¥t lÆ°á»£ng.', remembered: false },
                    { id: 'w130', word: 'packaging', language: 'en', transcription: '/ËˆpĂ¦kÉªdÊ’ÉªÅ‹/', mean: 'bao bĂ¬, Ä‘Ă³ng gĂ³i', wordtype: 'noun', example: 'The redesigned packaging attracted significantly more customers.', example_vi: 'Bao bĂ¬ Ä‘Æ°á»£c thiáº¿t káº¿ láº¡i Ä‘Ă£ thu hĂºt nhiá»u khĂ¡ch hĂ ng hÆ¡n Ä‘Ă¡ng ká»ƒ.', remembered: false },
                    { id: 'w131', word: 'logistics', language: 'en', transcription: '/lÉ™ËˆdÊ’ÉªstÉªks/', mean: 'háº­u cáº§n, quáº£n lĂ½ váº­n chuyá»ƒn', wordtype: 'noun', example: 'Effective logistics management reduces delivery time significantly.', example_vi: 'Quáº£n lĂ½ háº­u cáº§n hiá»‡u quáº£ giĂºp giáº£m Ä‘Ă¡ng ká»ƒ thá»i gian giao hĂ ng.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 12: MĂ”I TRÆ¯á»œNG & NÄ‚NG LÆ¯á»¢NG â”€â”€â”€ */
            {
                id: 'toeic-environment',
                title: 'đŸŒ¿ MĂ´i trÆ°á»ng & NÄƒng lÆ°á»£ng',
                description: 'Tá»« vá»±ng vá» phĂ¡t triá»ƒn bá»n vá»¯ng, nÄƒng lÆ°á»£ng tĂ¡i táº¡o vĂ  báº£o vá»‡ mĂ´i trÆ°á»ng',
                wordCount: 11,
                words: [
                    { id: 'w132', word: 'sustainability', language: 'en', transcription: '/sÉ™ËŒsteÉªnÉ™ËˆbÉªlÉªti/', mean: 'tính bền vững, sự phát triển bền vững', wordtype: 'noun', example: 'The company committed to achieving full sustainability by 2030.', example_vi: 'Công ty cam kết đạt được các mục tiêu phát triển bền vững đầy đủ vào năm 2030.', remembered: false },
                    { id: 'w133', word: 'renewable', language: 'en', transcription: '/rÉªËˆnjuËÉ™bl/', mean: 'cĂ³ thá»ƒ tĂ¡i táº¡o', wordtype: 'adjective', example: 'Renewable energy sources include solar, wind, and hydroelectric power.', example_vi: 'Nguá»“n nÄƒng lÆ°á»£ng tĂ¡i táº¡o bao gá»“m nÄƒng lÆ°á»£ng máº·t trá»i, giĂ³ vĂ  thá»§y Ä‘iá»‡n.', remembered: false },
                    { id: 'w134', word: 'emission', language: 'en', transcription: '/ÉªËˆmÉªÊƒn/', mean: 'khĂ­ tháº£i, lÆ°á»£ng phĂ¡t tháº£i', wordtype: 'noun', example: 'The factory reduced its carbon emissions by 30% this year.', example_vi: 'NhĂ  mĂ¡y Ä‘Ă£ giáº£m lÆ°á»£ng khĂ­ tháº£i carbon xuá»‘ng 30% trong nÄƒm nay.', remembered: false },
                    { id: 'w135', word: 'recycle', language: 'en', transcription: '/riËËˆsaÉªkl/', mean: 'tĂ¡i cháº¿', wordtype: 'verb', example: 'The office recycles all paper, plastic, and electronic waste.', example_vi: 'VÄƒn phĂ²ng tĂ¡i cháº¿ táº¥t cáº£ giáº¥y, nhá»±a vĂ  rĂ¡c tháº£i Ä‘iá»‡n tá»­.', remembered: false },
                    { id: 'w136', word: 'carbon footprint', language: 'en', transcription: '/ËˆkÉ‘ËbÉ™n ËˆfÊtprÉªnt/', mean: 'dấu chân carbon, lượng khí thải carbon', wordtype: 'noun phrase', example: 'Reducing your carbon footprint is essential to fighting climate change.', example_vi: 'Giảm dấu chân carbon của bạn là điều thiết yếu để chống biến đổi khí hậu.', remembered: false },
                    { id: 'w137', word: 'conservation', language: 'en', transcription: '/ËŒkÉ’nsÉ™ËˆveÉªÊƒn/', mean: 'báº£o tá»“n, tiáº¿t kiá»‡m tĂ i nguyĂªn', wordtype: 'noun', example: 'Water conservation is critical in regions prone to drought.', example_vi: 'Báº£o tá»“n nÆ°á»›c ráº¥t quan trá»ng á»Ÿ cĂ¡c vĂ¹ng dá»… bá»‹ háº¡n hĂ¡n.', remembered: false },
                    { id: 'w138', word: 'biodegradable', language: 'en', transcription: '/ËŒbaÉªÉ™ÊdÉªËˆÉ¡reÉªdÉ™bl/', mean: 'cĂ³ thá»ƒ phĂ¢n há»§y sinh há»c', wordtype: 'adjective', example: 'The company switched to biodegradable packaging to reduce waste.', example_vi: 'CĂ´ng ty chuyá»ƒn sang sá»­ dá»¥ng bao bĂ¬ cĂ³ thá»ƒ phĂ¢n há»§y sinh há»c Ä‘á»ƒ giáº£m rĂ¡c tháº£i.', remembered: false },
                    { id: 'w139', word: 'contamination', language: 'en', transcription: '/kÉ™nËŒtĂ¦mÉªËˆneÉªÊƒn/', mean: 'Ă´ nhiá»…m, nhiá»…m báº©n', wordtype: 'noun', example: 'Soil contamination near the factory was a serious health concern.', example_vi: 'Ă” nhiá»…m Ä‘áº¥t gáº§n nhĂ  mĂ¡y lĂ  má»™t má»‘i lo ngáº¡i sá»©c khá»e nghiĂªm trá»ng.', remembered: false },
                    { id: 'w140', word: 'regulation', language: 'en', transcription: '/ËŒrÉ›É¡jÊËˆleÉªÊƒn/', mean: 'quy Ä‘á»‹nh, Ä‘iá»u lá»‡', wordtype: 'noun', example: 'Stricter environmental regulations took effect at the start of the year.', example_vi: 'CĂ¡c quy Ä‘á»‹nh mĂ´i trÆ°á»ng nghiĂªm ngáº·t hÆ¡n cĂ³ hiá»‡u lá»±c tá»« Ä‘áº§u nÄƒm.', remembered: false },
                    { id: 'w141', word: 'solar panel', language: 'en', transcription: '/ËˆsÉ™ÊlÉ™r ËˆpĂ¦nl/', mean: 'táº¥m pin nÄƒng lÆ°á»£ng máº·t trá»i', wordtype: 'noun phrase', example: 'Solar panels were installed on the factory roof to cut energy costs.', example_vi: 'Táº¥m pin nÄƒng lÆ°á»£ng máº·t trá»i Ä‘Æ°á»£c láº¯p trĂªn mĂ¡i nhĂ  mĂ¡y Ä‘á»ƒ giáº£m chi phĂ­ nÄƒng lÆ°á»£ng.', remembered: false },
                    { id: 'w142', word: 'waste management', language: 'en', transcription: '/weÉªst ËˆmĂ¦nÉªdÊ’mÉ™nt/', mean: 'quáº£n lĂ½ cháº¥t tháº£i', wordtype: 'noun phrase', example: 'The city invested in improving its waste management infrastructure.', example_vi: 'ThĂ nh phá»‘ Ä‘áº§u tÆ° vĂ o viá»‡c cáº£i thiá»‡n cÆ¡ sá»Ÿ háº¡ táº§ng quáº£n lĂ½ cháº¥t tháº£i.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 13: NHĂ‚N Sá»° & TUYá»‚N Dá»¤NG â”€â”€â”€ */
            {
                id: 'toeic-hr',
                title: 'đŸ‘¥ NhĂ¢n sá»± & Tuyá»ƒn dá»¥ng',
                description: 'Tá»« vá»±ng vá» tuyá»ƒn dá»¥ng, phĂºc lá»£i vĂ  quáº£n lĂ½ nhĂ¢n viĂªn',
                wordCount: 14,
                words: [
                    { id: 'w143', word: 'rĂ©sumĂ©', language: 'en', transcription: '/ËˆrÉ›zjÊmeÉª/', mean: 'sơ yếu lý lịch, hồ sơ xin việc', wordtype: 'noun', example: 'Please send your rĂ©sumĂ© and cover letter to hr@company.com.', example_vi: 'Vui lòng gửi sơ yếu lý lịch và thư xin việc của bạn đến hr@company.com.', remembered: false },
                    { id: 'w144', word: 'interview', language: 'en', transcription: '/ËˆÉªntÉ™vjuË/', mean: 'buá»•i phá»ng váº¥n', wordtype: 'noun / verb', example: 'She has a job interview scheduled for Tuesday afternoon.', example_vi: 'CĂ´ áº¥y cĂ³ lá»‹ch phá»ng váº¥n xin viá»‡c vĂ o chiá»u thá»© Ba.', remembered: false },
                    { id: 'w145', word: 'candidate', language: 'en', transcription: '/ËˆkĂ¦ndÉªdÉªt/', mean: 'á»©ng viĂªn, ngÆ°á»i á»©ng tuyá»ƒn', wordtype: 'noun', example: 'The hiring committee shortlisted ten candidates for the final round.', example_vi: 'Há»™i Ä‘á»“ng tuyá»ƒn dá»¥ng Ä‘Ă£ chá»n mÆ°á»i á»©ng viĂªn vĂ o vĂ²ng cuá»‘i.', remembered: false },
                    { id: 'w146', word: 'onboarding', language: 'en', transcription: '/ËˆÉ’nËŒbÉ”ËdÉªÅ‹/', mean: 'Ä‘Ă o táº¡o há»™i nháº­p nhĂ¢n viĂªn má»›i', wordtype: 'noun', example: 'The onboarding process for new hires takes approximately two weeks.', example_vi: 'QuĂ¡ trĂ¬nh Ä‘Ă o táº¡o há»™i nháº­p cho nhĂ¢n viĂªn má»›i máº¥t khoáº£ng hai tuáº§n.', remembered: false },
                    { id: 'w147', word: 'retention', language: 'en', transcription: '/rÉªËˆtÉ›nÊƒn/', mean: 'sự giữ chân nhân viên', wordtype: 'noun', example: 'Employee retention is one of the biggest challenges in the tech industry.', example_vi: 'Việc giữ chân nhân viên là một trong những thách thức lớn nhất trong ngành công nghệ.', remembered: false },
                    { id: 'w148', word: 'performance review', language: 'en', transcription: '/pÉ™ËˆfÉ”ËmÉ™ns rÉªËˆvjuË/', mean: 'buổi đánh giá hiệu suất làm việc', wordtype: 'noun phrase', example: 'Annual performance reviews are conducted every December.', example_vi: 'Các buổi đánh giá hiệu suất hằng năm được tiến hành vào mỗi tháng Mười Hai.', remembered: false },
                    { id: 'w149', word: 'compensation', language: 'en', transcription: '/ËŒkÉ’mpÉ™nËˆseÉªÊƒn/', mean: 'thĂ¹ lao, lÆ°Æ¡ng thÆ°á»Ÿng tá»•ng thá»ƒ', wordtype: 'noun', example: 'The compensation package includes salary, bonuses, and health benefits.', example_vi: 'GĂ³i thĂ¹ lao bao gá»“m lÆ°Æ¡ng, thÆ°á»Ÿng vĂ  phĂºc lá»£i y táº¿.', remembered: false },
                    { id: 'w150', word: 'benefits', language: 'en', transcription: '/ËˆbÉ›nÉªfÉªts/', mean: 'phĂºc lá»£i nhĂ¢n viĂªn', wordtype: 'noun', example: 'The company offers excellent benefits including paid vacation and health insurance.', example_vi: 'CĂ´ng ty cung cáº¥p phĂºc lá»£i xuáº¥t sáº¯c bao gá»“m nghá»‰ phĂ©p cĂ³ lÆ°Æ¡ng vĂ  báº£o hiá»ƒm y táº¿.', remembered: false },
                    { id: 'w151', word: 'advancement', language: 'en', transcription: '/É™dËˆvÉ‘ËnsmÉ™nt/', mean: 'sự thăng tiến trong công việc', wordtype: 'noun', example: 'There are many opportunities for career advancement within this organization.', example_vi: 'Có nhiều cơ hội thăng tiến nghề nghiệp trong tổ chức này.', remembered: false },
                    { id: 'w152', word: 'redundancy', language: 'en', transcription: '/rÉªËˆdÊŒndÉ™nsi/', mean: 'sự cắt giảm nhân sự, tình trạng dư thừa lao động', wordtype: 'noun', example: 'The company announced 50 redundancies due to budget constraints.', example_vi: 'Công ty thông báo cắt giảm 50 vị trí do hạn chế ngân sách.', remembered: false },
                    { id: 'w153', word: 'diversity', language: 'en', transcription: '/daÉªËˆvÉœËsÉªti/', mean: 'sá»± Ä‘a dáº¡ng (nhĂ¢n lá»±c)', wordtype: 'noun', example: 'The company actively promotes diversity and inclusion in the workplace.', example_vi: 'CĂ´ng ty tĂ­ch cá»±c thĂºc Ä‘áº©y sá»± Ä‘a dáº¡ng vĂ  hĂ²a nháº­p trong mĂ´i trÆ°á»ng lĂ m viá»‡c.', remembered: false },
                    { id: 'w154', word: 'grievance', language: 'en', transcription: '/ËˆÉ¡riËvÉ™ns/', mean: 'khiáº¿u náº¡i, phĂ n nĂ n chĂ­nh thá»©c', wordtype: 'noun', example: 'Employees can formally file a grievance through the HR department.', example_vi: 'NhĂ¢n viĂªn cĂ³ thá»ƒ chĂ­nh thá»©c ná»™p Ä‘Æ¡n khiáº¿u náº¡i qua phĂ²ng nhĂ¢n sá»±.', remembered: false },
                    { id: 'w155', word: 'probation', language: 'en', transcription: '/prÉ™ËˆbeÉªÊƒn/', mean: 'thá»i gian thá»­ viá»‡c', wordtype: 'noun', example: 'The new employee is on a three-month probation period.', example_vi: 'NhĂ¢n viĂªn má»›i Ä‘ang trong thá»i gian thá»­ viá»‡c ba thĂ¡ng.', remembered: false },
                    { id: 'w156', word: 'payroll', language: 'en', transcription: '/ËˆpeÉªrÉ™Êl/', mean: 'báº£ng lÆ°Æ¡ng, quá»¹ lÆ°Æ¡ng', wordtype: 'noun', example: 'The payroll is processed on the last business day of each month.', example_vi: 'Báº£ng lÆ°Æ¡ng Ä‘Æ°á»£c xá»­ lĂ½ vĂ o ngĂ y lĂ m viá»‡c cuá»‘i cĂ¹ng cá»§a má»—i thĂ¡ng.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 14: MUA Sáº®M & BĂN Láºº â”€â”€â”€ */
            {
                id: 'toeic-retail',
                title: 'đŸ›’ Mua sáº¯m & BĂ¡n láº»',
                description: 'Tá»« vá»±ng vá» hĂ ng hĂ³a, khuyáº¿n mĂ£i vĂ  giao dá»‹ch mua bĂ¡n láº»',
                wordCount: 13,
                words: [
                    { id: 'w157', word: 'merchandise', language: 'en', transcription: '/ËˆmÉœËtÊƒÉ™ndaÉªs/', mean: 'hàng hóa, mặt hàng bày bán', wordtype: 'noun', example: 'The store displays new merchandise in the window every week.', example_vi: 'Cửa hàng trưng bày hàng mới ở tủ kính mỗi tuần.', remembered: false },
                    { id: 'w158', word: 'retailer', language: 'en', transcription: '/ËˆriËteÉªlÉ™r/', mean: 'nhĂ  bĂ¡n láº»', wordtype: 'noun', example: 'Online retailers have grown significantly in recent years.', example_vi: 'CĂ¡c nhĂ  bĂ¡n láº» trá»±c tuyáº¿n Ä‘Ă£ phĂ¡t triá»ƒn Ä‘Ă¡ng ká»ƒ trong nhá»¯ng nÄƒm gáº§n Ä‘Ă¢y.', remembered: false },
                    { id: 'w159', word: 'discount', language: 'en', transcription: '/ËˆdÉªskaÊnt/', mean: 'giáº£m giĂ¡, chiáº¿t kháº¥u', wordtype: 'noun / verb', example: 'All items are discounted by 20% during the weekend sale.', example_vi: 'Táº¥t cáº£ máº·t hĂ ng Ä‘Æ°á»£c giáº£m giĂ¡ 20% trong Ä‘á»£t khuyáº¿n mĂ£i cuá»‘i tuáº§n.', remembered: false },
                    { id: 'w160', word: 'receipt', language: 'en', transcription: '/rÉªËˆsiËt/', mean: 'biĂªn lai, hĂ³a Ä‘Æ¡n mua hĂ ng', wordtype: 'noun', example: 'Please keep your receipt in case you need to return the item.', example_vi: 'Vui lĂ²ng giá»¯ biĂªn lai trong trÆ°á»ng há»£p báº¡n cáº§n tráº£ láº¡i máº·t hĂ ng.', remembered: false },
                    { id: 'w161', word: 'exchange', language: 'en', transcription: '/ÉªksËˆtÊƒeÉªndÊ’/', mean: 'Ä‘á»•i hĂ ng, trao Ä‘á»•i', wordtype: 'noun / verb', example: 'The customer exchanged the shirt for a larger size without any issues.', example_vi: 'KhĂ¡ch hĂ ng Ä‘á»•i chiáº¿c Ă¡o láº¥y size lá»›n hÆ¡n mĂ  khĂ´ng gáº·p váº¥n Ä‘á» gĂ¬.', remembered: false },
                    { id: 'w162', word: 'wholesale', language: 'en', transcription: '/ËˆhÉ™ÊlseÉªl/', mean: 'bĂ¡n buĂ´n, giĂ¡ sá»‰', wordtype: 'noun / adjective', example: 'We purchase all our products at wholesale prices to maximize profit.', example_vi: 'ChĂºng tĂ´i mua táº¥t cáº£ sáº£n pháº©m vá»›i giĂ¡ bĂ¡n buĂ´n Ä‘á»ƒ tá»‘i Ä‘a hĂ³a lá»£i nhuáº­n.', remembered: false },
                    { id: 'w163', word: 'markup', language: 'en', transcription: '/ËˆmÉ‘ËkÊŒp/', mean: 'má»©c cá»™ng thĂªm vĂ o giĂ¡ vá»‘n', wordtype: 'noun', example: 'The store applies a 40% markup on all imported luxury goods.', example_vi: 'Cá»­a hĂ ng Ă¡p dá»¥ng má»©c cá»™ng thĂªm 40% trĂªn táº¥t cáº£ hĂ ng hĂ³a xa xá»‰ nháº­p kháº©u.', remembered: false },
                    { id: 'w164', word: 'loyalty program', language: 'en', transcription: '/ËˆlÉ”ÉªÉ™lti ËˆprÉ™ÊÉ¡rĂ¦m/', mean: 'chÆ°Æ¡ng trĂ¬nh khĂ¡ch hĂ ng thĂ¢n thiáº¿t', wordtype: 'noun phrase', example: 'Join our loyalty program to earn points on every purchase.', example_vi: 'Tham gia chÆ°Æ¡ng trĂ¬nh khĂ¡ch hĂ ng thĂ¢n thiáº¿t Ä‘á»ƒ tĂ­ch Ä‘iá»ƒm má»—i láº§n mua hĂ ng.', remembered: false },
                    { id: 'w165', word: 'vendor', language: 'en', transcription: '/ËˆvÉ›ndÉ™r/', mean: 'ngÆ°á»i bĂ¡n hĂ ng, nhĂ  cung á»©ng', wordtype: 'noun', example: 'Several vendors were invited to submit bids for the annual contract.', example_vi: 'Nhiá»u nhĂ  cung á»©ng Ä‘Æ°á»£c má»i ná»™p Ä‘Æ¡n Ä‘áº¥u tháº§u cho há»£p Ä‘á»“ng hĂ ng nÄƒm.', remembered: false },
                    { id: 'w166', word: 'storefront', language: 'en', transcription: '/ËˆstÉ”ËfrÊŒnt/', mean: 'máº·t tiá»n cá»­a hĂ ng', wordtype: 'noun', example: 'The attractive storefront design draws customers in from the street.', example_vi: 'Thiáº¿t káº¿ máº·t tiá»n háº¥p dáº«n thu hĂºt khĂ¡ch hĂ ng tá»« phĂ­a Ä‘Æ°á»ng.', remembered: false },
                    { id: 'w167', word: 'clearance', language: 'en', transcription: '/ËˆklÉªÉ™rÉ™ns/', mean: 'đợt thanh lý hàng, hàng xả kho', wordtype: 'noun', example: 'All clearance items are final sale and cannot be returned.', example_vi: 'Tất cả mặt hàng thanh lý là hàng bán cuối cùng và không được trả lại.', remembered: false },
                    { id: 'w168', word: 'outlet', language: 'en', transcription: '/ËˆaÊtlÉ›t/', mean: 'cá»­a hĂ ng giáº£m giĂ¡, chuá»—i cá»­a hĂ ng', wordtype: 'noun', example: 'The brand opened a new outlet store at the shopping center.', example_vi: 'ThÆ°Æ¡ng hiá»‡u Ä‘Ă£ má»Ÿ má»™t cá»­a hĂ ng giáº£m giĂ¡ má»›i táº¡i trung tĂ¢m mua sáº¯m.', remembered: false },
                    { id: 'w169', word: 'catalog', language: 'en', transcription: '/ËˆkĂ¦tÉ™lÉ’É¡/', mean: 'danh má»¥c sáº£n pháº©m', wordtype: 'noun', example: 'Browse our online catalog to see all available products and prices.', example_vi: 'Duyá»‡t qua danh má»¥c trá»±c tuyáº¿n cá»§a chĂºng tĂ´i Ä‘á»ƒ xem táº¥t cáº£ sáº£n pháº©m vĂ  giĂ¡ cáº£.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 15: TRUYá»€N THĂ”NG & BĂO CHĂ â”€â”€â”€ */
            {
                id: 'toeic-media',
                title: 'đŸ“¡ Truyá»n thĂ´ng & BĂ¡o chĂ­',
                description: 'Tá»« vá»±ng vá» bĂ¡o chĂ­, phĂ¡t sĂ³ng vĂ  truyá»n thĂ´ng Ä‘áº¡i chĂºng',
                wordCount: 12,
                words: [
                    { id: 'w170', word: 'broadcast', language: 'en', transcription: '/ËˆbrÉ”ËdkÉ‘Ëst/', mean: 'phĂ¡t sĂ³ng, truyá»n phĂ¡t', wordtype: 'noun / verb', example: 'The news was broadcast live across all major television channels.', example_vi: 'Tin tá»©c Ä‘Æ°á»£c phĂ¡t sĂ³ng trá»±c tiáº¿p trĂªn táº¥t cáº£ cĂ¡c kĂªnh truyá»n hĂ¬nh lá»›n.', remembered: false },
                    { id: 'w171', word: 'press release', language: 'en', transcription: '/prÉ›s rÉªËˆliËs/', mean: 'thĂ´ng cĂ¡o bĂ¡o chĂ­', wordtype: 'noun phrase', example: 'The company issued a press release announcing the new partnership.', example_vi: 'CĂ´ng ty Ä‘Ă£ phĂ¡t hĂ nh thĂ´ng cĂ¡o bĂ¡o chĂ­ thĂ´ng bĂ¡o vá» quan há»‡ Ä‘á»‘i tĂ¡c má»›i.', remembered: false },
                    { id: 'w172', word: 'editorial', language: 'en', transcription: '/ËŒÉ›dÉªËˆtÉ”ËriÉ™l/', mean: 'bài xã luận', wordtype: 'noun / adjective', example: 'The editorial criticized the government\'s new economic policy.', example_vi: 'Bài xã luận đã chỉ trích chính sách kinh tế mới của chính phủ.', remembered: false },
                    { id: 'w173', word: 'circulation', language: 'en', transcription: '/ËŒsÉœËkjÊËˆleÉªÊƒn/', mean: 'lÆ°á»£ng phĂ¡t hĂ nh, sá»‘ lÆ°á»£ng báº£n in', wordtype: 'noun', example: 'The newspaper has a daily circulation of over one million copies.', example_vi: 'Tá» bĂ¡o cĂ³ lÆ°á»£ng phĂ¡t hĂ nh hĂ ng ngĂ y hÆ¡n má»™t triá»‡u báº£n.', remembered: false },
                    { id: 'w174', word: 'spokesperson', language: 'en', transcription: '/ËˆspÉ™ÊkspÉœËsÉ™n/', mean: 'ngÆ°á»i phĂ¡t ngĂ´n', wordtype: 'noun', example: 'The company\'s spokesperson denied the allegations at the press conference.', example_vi: 'NgÆ°á»i phĂ¡t ngĂ´n cá»§a cĂ´ng ty Ä‘Ă£ phá»§ nháº­n cĂ¡c cĂ¡o buá»™c táº¡i buá»•i há»p bĂ¡o.', remembered: false },
                    { id: 'w175', word: 'correspondent', language: 'en', transcription: '/ËŒkÉ’rÉªËˆspÉ’ndÉ™nt/', mean: 'phĂ³ng viĂªn Ä‘áº·c phĂ¡i, thĂ´ng tĂ­n viĂªn', wordtype: 'noun', example: 'Our foreign correspondent reported live from the scene.', example_vi: 'PhĂ³ng viĂªn Ä‘áº·c phĂ¡i nÆ°á»›c ngoĂ i cá»§a chĂºng tĂ´i Ä‘Ă£ Ä‘Æ°a tin trá»±c tiáº¿p tá»« hiá»‡n trÆ°á»ng.', remembered: false },
                    { id: 'w176', word: 'headline', language: 'en', transcription: '/ËˆhÉ›dlaÉªn/', mean: 'tiĂªu Ä‘á», tĂ­t bĂ¡o', wordtype: 'noun', example: 'The merger made headlines in all the major business newspapers.', example_vi: 'Vá»¥ sĂ¡p nháº­p Ä‘Ă£ lĂªn tiĂªu Ä‘á» cá»§a táº¥t cáº£ cĂ¡c tá» bĂ¡o kinh doanh lá»›n.', remembered: false },
                    { id: 'w177', word: 'subscribe', language: 'en', transcription: '/sÉ™bËˆskraÉªb/', mean: 'đăng ký thuê bao, đặt mua dài hạn', wordtype: 'verb', example: 'You can subscribe to the magazine for a discounted annual rate.', example_vi: 'Bạn có thể đặt mua dài hạn tạp chí với mức giá năm được giảm.', remembered: false },
                    { id: 'w178', word: 'coverage', language: 'en', transcription: '/ËˆkÊŒvÉ™rÉªdÊ’/', mean: 'pháº¡m vi Ä‘Æ°a tin, Ä‘á»™ phá»§ sĂ³ng', wordtype: 'noun', example: 'The event received extensive media coverage both locally and internationally.', example_vi: 'Sá»± kiá»‡n nháº­n Ä‘Æ°á»£c sá»± Ä‘Æ°a tin rá»™ng rĂ£i cá»§a truyá»n thĂ´ng cáº£ trong nÆ°á»›c vĂ  quá»‘c táº¿.', remembered: false },
                    { id: 'w179', word: 'exclusive', language: 'en', transcription: '/ÉªkËˆskluËsÉªv/', mean: 'độc quyền; bài/tin độc quyền', wordtype: 'adjective / noun', example: 'The journalist scored an exclusive interview with the CEO.', example_vi: 'Nhà báo đã thực hiện được một cuộc phỏng vấn độc quyền với CEO.', remembered: false },
                    { id: 'w180', word: 'readership', language: 'en', transcription: '/ËˆriËdÉ™ÊƒÉªp/', mean: 'sá»‘ lÆ°á»£ng Ä‘á»™c giáº£, lÆ°á»£ng ngÆ°á»i Ä‘á»c', wordtype: 'noun', example: 'The online magazine has grown its readership to 5 million monthly visitors.', example_vi: 'Táº¡p chĂ­ trá»±c tuyáº¿n Ä‘Ă£ tÄƒng lÆ°á»£ng Ä‘á»™c giáº£ lĂªn 5 triá»‡u lÆ°á»£t truy cáº­p hĂ ng thĂ¡ng.', remembered: false },
                    { id: 'w181', word: 'media outlet', language: 'en', transcription: '/ËˆmiËdiÉ™ ËˆaÊtlÉ›t/', mean: 'kĂªnh truyá»n thĂ´ng', wordtype: 'noun phrase', example: 'Several major media outlets covered the company\'s product launch event.', example_vi: 'Má»™t sá»‘ kĂªnh truyá»n thĂ´ng lá»›n Ä‘Ă£ Ä‘Æ°a tin vá» sá»± kiá»‡n ra máº¯t sáº£n pháº©m cá»§a cĂ´ng ty.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 16: ÄĂ€M PHĂN & QUAN Há»† KHĂCH HĂ€NG â”€â”€â”€ */
            {
                id: 'toeic-negotiation',
                title: 'đŸ¤ ÄĂ m phĂ¡n & Quan há»‡ khĂ¡ch hĂ ng',
                description: 'Tá»« vá»±ng trong quĂ¡ trĂ¬nh thÆ°Æ¡ng lÆ°á»£ng, kĂ½ káº¿t vĂ  duy trĂ¬ quan há»‡ Ä‘á»‘i tĂ¡c',
                wordCount: 15,
                words: [
                    { id: 'w182', word: 'leverage', language: 'en', transcription: '/ËˆliËvÉ™rÉªdÊ’/', mean: 'Ä‘Ă²n báº©y, lá»£i tháº¿ thÆ°Æ¡ng lÆ°á»£ng', wordtype: 'noun / verb', example: 'The company used its strong market position as leverage in negotiations.', example_vi: 'CĂ´ng ty sá»­ dá»¥ng vá»‹ tháº¿ thá»‹ trÆ°á»ng máº¡nh nhÆ° má»™t Ä‘Ă²n báº©y trong Ä‘Ă m phĂ¡n.', remembered: false },
                    { id: 'w183', word: 'counterpart', language: 'en', transcription: '/ËˆkaÊntÉ™pÉ‘Ët/', mean: 'Ä‘á»‘i tĂ¡c, ngÆ°á»i Ä‘á»“ng cáº¥p phĂ­a bĂªn kia', wordtype: 'noun', example: 'She met with her counterpart from the French company to discuss the deal.', example_vi: 'CĂ´ áº¥y gáº·p ngÆ°á»i Ä‘á»“ng cáº¥p tá»« cĂ´ng ty PhĂ¡p Ä‘á»ƒ tháº£o luáº­n vá» thá»a thuáº­n.', remembered: false },
                    { id: 'w184', word: 'concession', language: 'en', transcription: '/kÉ™nËˆsÉ›Êƒn/', mean: 'sự nhượng bộ', wordtype: 'noun', example: 'Both sides made concessions to reach a mutually acceptable agreement.', example_vi: 'Cả hai bên đều có nhượng bộ để đạt được một thỏa thuận mà đôi bên có thể chấp nhận.', remembered: false },
                    { id: 'w185', word: 'compromise', language: 'en', transcription: '/ËˆkÉ’mprÉ™maÉªz/', mean: 'thá»a hiá»‡p, dĂ n xáº¿p', wordtype: 'noun / verb', example: 'After three hours of talks, both parties agreed on a fair compromise.', example_vi: 'Sau ba giá» Ä‘Ă m phĂ¡n, cáº£ hai bĂªn Ä‘á»“ng Ă½ Ä‘áº¡t Ä‘Æ°á»£c má»™t sá»± thá»a hiá»‡p cĂ´ng báº±ng.', remembered: false },
                    { id: 'w186', word: 'bottom line', language: 'en', transcription: '/ËˆbÉ’tÉ™m laÉªn/', mean: 'lá»£i nhuáº­n rĂ²ng; Ä‘iá»u cá»‘t yáº¿u nháº¥t', wordtype: 'noun phrase', example: 'The bottom line is that we cannot accept a price below $50 per unit.', example_vi: 'Äiá»u cá»‘t yáº¿u lĂ  chĂºng ta khĂ´ng thá»ƒ cháº¥p nháº­n giĂ¡ tháº¥p hÆ¡n 50 Ä‘Ă´ má»—i Ä‘Æ¡n vá»‹.', remembered: false },
                    { id: 'w187', word: 'mutual', language: 'en', transcription: '/ËˆmjuËtÊƒuÉ™l/', mean: 'lẫn nhau, chung cho cả hai bên', wordtype: 'adjective', example: 'The partnership is built on mutual trust and shared goals.', example_vi: 'Quan hệ đối tác được xây dựng trên sự tin tưởng lẫn nhau và các mục tiêu chung.', remembered: false },
                    { id: 'w188', word: 'terms', language: 'en', transcription: '/tÉœËmz/', mean: 'Ä‘iá»u kiá»‡n, Ä‘iá»u khoáº£n thá»a thuáº­n', wordtype: 'noun', example: 'We need to carefully review the terms before signing the agreement.', example_vi: 'ChĂºng ta cáº§n xem xĂ©t ká»¹ lÆ°á»¡ng cĂ¡c Ä‘iá»u khoáº£n trÆ°á»›c khi kĂ½ thá»a thuáº­n.', remembered: false },
                    { id: 'w189', word: 'binding', language: 'en', transcription: '/ËˆbaÉªndÉªÅ‹/', mean: 'rĂ ng buá»™c vá» máº·t phĂ¡p lĂ½', wordtype: 'adjective', example: 'This agreement is legally binding and cannot be changed unilaterally.', example_vi: 'Thá»a thuáº­n nĂ y cĂ³ tĂ­nh rĂ ng buá»™c phĂ¡p lĂ½ vĂ  khĂ´ng thá»ƒ thay Ä‘á»•i Ä‘Æ¡n phÆ°Æ¡ng.', remembered: false },
                    { id: 'w190', word: 'intermediary', language: 'en', transcription: '/ËŒÉªntÉ™ËˆmiËdiÉ™ri/', mean: 'người trung gian, bên môi giới', wordtype: 'noun', example: 'The company hired an intermediary to facilitate the overseas deal.', example_vi: 'Công ty thuê một bên trung gian để dàn xếp thương vụ ở nước ngoài.', remembered: false },
                    { id: 'w191', word: 'consensus', language: 'en', transcription: '/kÉ™nËˆsÉ›nsÉ™s/', mean: 'sá»± Ä‘á»“ng thuáº­n, nháº¥t trĂ­', wordtype: 'noun', example: 'The board reached a consensus on the new pricing strategy.', example_vi: 'Há»™i Ä‘á»“ng quáº£n trá»‹ Ä‘Ă£ Ä‘áº¡t Ä‘Æ°á»£c sá»± Ä‘á»“ng thuáº­n vá» chiáº¿n lÆ°á»£c Ä‘á»‹nh giĂ¡ má»›i.', remembered: false },
                    { id: 'w192', word: 'stakeholder', language: 'en', transcription: '/ËˆsteÉªkhÉ™ÊldÉ™r/', mean: 'bên liên quan', wordtype: 'noun', example: 'All stakeholders were invited to attend the annual general meeting.', example_vi: 'Tất cả các bên liên quan đều được mời tham dự đại hội thường niên.', remembered: false },
                    { id: 'w193', word: 'rapport', language: 'en', transcription: '/rĂ¦ËˆpÉ”Ë/', mean: 'má»‘i quan há»‡ tin tÆ°á»Ÿng, sá»± thĂ¢n thiá»‡n', wordtype: 'noun', example: 'Building strong rapport with clients is essential for long-term business.', example_vi: 'XĂ¢y dá»±ng má»‘i quan há»‡ tin tÆ°á»Ÿng máº¡nh vá»›i khĂ¡ch hĂ ng lĂ  Ä‘iá»u cáº§n thiáº¿t cho kinh doanh lĂ¢u dĂ i.', remembered: false },
                    { id: 'w194', word: 'dispute', language: 'en', transcription: '/dÉªËˆspjuËt/', mean: 'tranh cháº¥p, báº¥t Ä‘á»“ng', wordtype: 'noun / verb', example: 'The two companies resolved their payment dispute through mediation.', example_vi: 'Hai cĂ´ng ty giáº£i quyáº¿t tranh cháº¥p thanh toĂ¡n cá»§a há» thĂ´ng qua hĂ²a giáº£i.', remembered: false },
                    { id: 'w195', word: 'resolution', language: 'en', transcription: '/ËŒrÉ›zÉ™ËˆluËÊƒn/', mean: 'sự giải quyết, nghị quyết', wordtype: 'noun', example: 'A swift resolution to the contract dispute was in everyone\'s best interest.', example_vi: 'Việc giải quyết nhanh tranh chấp hợp đồng là điều có lợi nhất cho tất cả mọi người.', remembered: false },
                    { id: 'w196', word: 'quotation', language: 'en', transcription: '/kwÉ™ÊËˆteÉªÊƒn/', mean: 'bĂ¡o giĂ¡, báº£n chĂ o hĂ ng', wordtype: 'noun', example: 'Please send us a detailed quotation for the construction work.', example_vi: 'Vui lĂ²ng gá»­i cho chĂºng tĂ´i bĂ¡o giĂ¡ chi tiáº¿t cho cĂ´ng viá»‡c xĂ¢y dá»±ng.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 17: KHĂCH Sáº N & LÆ¯U TRĂ â”€â”€â”€ */
            {
                id: 'toeic-hotel',
                title: 'đŸ¨ KhĂ¡ch sáº¡n & Dá»‹ch vá»¥ lÆ°u trĂº',
                description: 'Tá»« vá»±ng vá» dá»‹ch vá»¥ khĂ¡ch sáº¡n vĂ  ngĂ nh lÆ°u trĂº',
                wordCount: 12,
                words: [
                    { id: 'w197', word: 'check-in', language: 'en', transcription: '/ËˆtÊƒÉ›kÉªn/', mean: 'nháº­n phĂ²ng, thá»§ tá»¥c nháº­n phĂ²ng', wordtype: 'noun / verb', example: 'Check-in time at most hotels is from 2 PM onwards.', example_vi: 'Giá» nháº­n phĂ²ng á»Ÿ háº§u háº¿t cĂ¡c khĂ¡ch sáº¡n lĂ  tá»« 14 giá» trá»Ÿ Ä‘i.', remembered: false },
                    { id: 'w198', word: 'concierge', language: 'en', transcription: '/ËˆkÉ’nsÉªeÉ™rÊ’/', mean: 'nhĂ¢n viĂªn há»— trá»£ khĂ¡ch', wordtype: 'noun', example: 'The concierge helped us book restaurant reservations for the evening.', example_vi: 'NhĂ¢n viĂªn há»— trá»£ Ä‘Ă£ giĂºp chĂºng tĂ´i Ä‘áº·t bĂ n nhĂ  hĂ ng cho buá»•i tá»‘i.', remembered: false },
                    { id: 'w199', word: 'suite', language: 'en', transcription: '/swiËt/', mean: 'phĂ²ng suite, bá»™ phĂ²ng sang trá»ng', wordtype: 'noun', example: 'The presidential suite offers a stunning view of the city skyline.', example_vi: 'PhĂ²ng suite tá»•ng thá»‘ng cĂ³ táº§m nhĂ¬n tuyá»‡t Ä‘áº¹p ra Ä‘Æ°á»ng chĂ¢n trá»i thĂ nh phá»‘.', remembered: false },
                    { id: 'w200', word: 'housekeeping', language: 'en', transcription: '/ËˆhaÊskiËpÉªÅ‹/', mean: 'bá»™ pháº­n dá»n phĂ²ng, dá»‹ch vá»¥ buá»“ng', wordtype: 'noun', example: 'Please call housekeeping if you need extra towels or pillows.', example_vi: 'Vui lĂ²ng gá»i bá»™ pháº­n dá»n phĂ²ng náº¿u báº¡n cáº§n thĂªm khÄƒn táº¯m hoáº·c gá»‘i.', remembered: false },
                    { id: 'w201', word: 'occupancy', language: 'en', transcription: '/ËˆÉ’kjÊpÉ™nsi/', mean: 'tỷ lệ lấp đầy phòng', wordtype: 'noun', example: 'The hotel achieved a 95% occupancy rate during the holiday season.', example_vi: 'Khách sạn đạt tỷ lệ lấp đầy phòng 95% trong mùa du lịch lễ hội.', remembered: false },
                    { id: 'w202', word: 'room rate', language: 'en', transcription: '/ruËm reÉªt/', mean: 'giĂ¡ phĂ²ng, má»©c giĂ¡ thuĂª phĂ²ng', wordtype: 'noun phrase', example: 'The room rate includes breakfast and access to the fitness center.', example_vi: 'GiĂ¡ phĂ²ng bao gá»“m bá»¯a sĂ¡ng vĂ  quyá»n vĂ o trung tĂ¢m thá»ƒ dá»¥c.', remembered: false },
                    { id: 'w203', word: 'hospitality', language: 'en', transcription: '/ËŒhÉ’spÉªËˆtĂ¦lÉªti/', mean: 'sá»± tiáº¿p Ä‘Ă£i, ngĂ nh dá»‹ch vá»¥ khĂ¡ch sáº¡n', wordtype: 'noun', example: 'Warm hospitality is the hallmark of a five-star hotel experience.', example_vi: 'Sá»± tiáº¿p Ä‘Ă£i Ă¢n cáº§n lĂ  dáº¥u hiá»‡u Ä‘áº·c trÆ°ng cá»§a tráº£i nghiá»‡m khĂ¡ch sáº¡n nÄƒm sao.', remembered: false },
                    { id: 'w204', word: 'valet', language: 'en', transcription: '/ËˆvĂ¦leÉª/', mean: 'nhân viên nhận và đỗ xe cho khách', wordtype: 'noun', example: 'The hotel offers complimentary valet parking for all guests.', example_vi: 'Khách sạn cung cấp dịch vụ nhận và đỗ xe miễn phí cho tất cả khách lưu trú.', remembered: false },
                    { id: 'w205', word: 'checkout', language: 'en', transcription: '/ËˆtÊƒÉ›kaÊt/', mean: 'tráº£ phĂ²ng, thá»§ tá»¥c tráº£ phĂ²ng', wordtype: 'noun / verb', example: 'Checkout time is 12 PM; late checkout may incur an additional fee.', example_vi: 'Giá» tráº£ phĂ²ng lĂ  12 giá» trÆ°a; tráº£ phĂ²ng muá»™n cĂ³ thá»ƒ phĂ¡t sinh phĂ­ thĂªm.', remembered: false },
                    { id: 'w206', word: 'turndown service', language: 'en', transcription: '/ËˆtÉœËndaÊn ËˆsÉœËvÉªs/', mean: 'dá»‹ch vá»¥ dá»n phĂ²ng buá»•i tá»‘i', wordtype: 'noun phrase', example: 'The turndown service includes fresh towels and chocolates on the pillow.', example_vi: 'Dá»‹ch vá»¥ dá»n phĂ²ng buá»•i tá»‘i bao gá»“m khÄƒn táº¯m má»›i vĂ  sĂ´ cĂ´ la trĂªn gá»‘i.', remembered: false },
                    { id: 'w207', word: 'minibar', language: 'en', transcription: '/ËˆmÉªnÉªbÉ‘Ë/', mean: 'tá»§ láº¡nh mini trong phĂ²ng khĂ¡ch sáº¡n', wordtype: 'noun', example: 'Items taken from the minibar will be charged to your room bill.', example_vi: 'CĂ¡c váº­t pháº©m láº¥y tá»« tá»§ láº¡nh mini sáº½ Ä‘Æ°á»£c tĂ­nh vĂ o hĂ³a Ä‘Æ¡n phĂ²ng cá»§a báº¡n.', remembered: false },
                    { id: 'w208', word: 'lobby', language: 'en', transcription: '/ËˆlÉ’bi/', mean: 'sáº£nh chá» khĂ¡ch sáº¡n', wordtype: 'noun', example: 'Please wait for your driver in the hotel lobby at 8 AM.', example_vi: 'Vui lĂ²ng chá» tĂ i xáº¿ cá»§a báº¡n á»Ÿ sáº£nh khĂ¡ch sáº¡n lĂºc 8 giá» sĂ¡ng.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 18: NGHIĂN Cá»¨U & PHĂT TRIá»‚N â”€â”€â”€ */
            {
                id: 'toeic-rd',
                title: 'đŸ”¬ NghiĂªn cá»©u & PhĂ¡t triá»ƒn',
                description: 'Tá»« vá»±ng vá» Ä‘á»•i má»›i sĂ¡ng táº¡o, báº±ng sĂ¡ng cháº¿ vĂ  quy trĂ¬nh R&D',
                wordCount: 14,
                words: [
                    { id: 'w209', word: 'prototype', language: 'en', transcription: '/ËˆprÉ™ÊtÉ™taÉªp/', mean: 'nguyĂªn máº«u, mĂ´ hĂ¬nh thá»­ nghiá»‡m', wordtype: 'noun', example: 'The engineering team built a prototype of the new device last month.', example_vi: 'NhĂ³m ká»¹ thuáº­t Ä‘Ă£ cháº¿ táº¡o nguyĂªn máº«u cá»§a thiáº¿t bá»‹ má»›i vĂ o thĂ¡ng trÆ°á»›c.', remembered: false },
                    { id: 'w210', word: 'innovation', language: 'en', transcription: '/ËŒÉªnÉ™ËˆveÉªÊƒn/', mean: 'Ä‘á»•i má»›i, sĂ¡ng táº¡o', wordtype: 'noun', example: 'Continuous innovation is what keeps the company ahead of its competitors.', example_vi: 'Äá»•i má»›i liĂªn tá»¥c lĂ  Ä‘iá»u giĂºp cĂ´ng ty luĂ´n dáº«n Ä‘áº§u so vá»›i Ä‘á»‘i thá»§ cáº¡nh tranh.', remembered: false },
                    { id: 'w211', word: 'patent', language: 'en', transcription: '/ËˆpeÉªtÉ™nt/', mean: 'báº±ng sĂ¡ng cháº¿', wordtype: 'noun / verb', example: 'The company filed for a patent to protect its new invention.', example_vi: 'CĂ´ng ty Ä‘Ă£ ná»™p Ä‘Æ¡n Ä‘Äƒng kĂ½ báº±ng sĂ¡ng cháº¿ Ä‘á»ƒ báº£o vá»‡ phĂ¡t minh má»›i cá»§a mĂ¬nh.', remembered: false },
                    { id: 'w212', word: 'feasibility', language: 'en', transcription: '/ËŒfiËzÉ™ËˆbÉªlÉªti/', mean: 'tĂ­nh kháº£ thi', wordtype: 'noun', example: 'A feasibility study was conducted before approving the new project.', example_vi: 'Má»™t nghiĂªn cá»©u tĂ­nh kháº£ thi Ä‘Ă£ Ä‘Æ°á»£c tiáº¿n hĂ nh trÆ°á»›c khi phĂª duyá»‡t dá»± Ă¡n má»›i.', remembered: false },
                    { id: 'w213', word: 'breakthrough', language: 'en', transcription: '/ËˆbreÉªkÎ¸ruË/', mean: 'bÆ°á»›c Ä‘á»™t phĂ¡, phĂ¡t hiá»‡n quan trá»ng', wordtype: 'noun', example: 'The research team made a major breakthrough in battery technology.', example_vi: 'NhĂ³m nghiĂªn cá»©u Ä‘Ă£ Ä‘áº¡t Ä‘Æ°á»£c má»™t bÆ°á»›c Ä‘á»™t phĂ¡ lá»›n trong cĂ´ng nghá»‡ pin.', remembered: false },
                    { id: 'w214', word: 'pilot', language: 'en', transcription: '/ËˆpaÉªlÉ™t/', mean: 'thĂ­ Ä‘iá»ƒm, thá»­ nghiá»‡m ban Ä‘áº§u', wordtype: 'noun / adjective / verb', example: 'We will run a pilot program in three cities before national rollout.', example_vi: 'ChĂºng tĂ´i sáº½ thá»±c hiá»‡n chÆ°Æ¡ng trĂ¬nh thĂ­ Ä‘iá»ƒm táº¡i ba thĂ nh phá»‘ trÆ°á»›c khi triá»ƒn khai toĂ n quá»‘c.', remembered: false },
                    { id: 'w215', word: 'iteration', language: 'en', transcription: '/ËŒÉªtÉ™ËˆreÉªÊƒn/', mean: 'lần lặp, vòng cải tiến', wordtype: 'noun', example: 'After several iterations, the product design was finally approved.', example_vi: 'Sau nhiều vòng cải tiến, thiết kế sản phẩm cuối cùng đã được phê duyệt.', remembered: false },
                    { id: 'w216', word: 'benchmark', language: 'en', transcription: '/ËˆbÉ›ntÊƒmÉ‘Ëk/', mean: 'tiĂªu chuáº©n Ä‘Ă¡nh giĂ¡, má»‘c so sĂ¡nh', wordtype: 'noun / verb', example: 'We use industry benchmarks to measure the performance of our products.', example_vi: 'ChĂºng tĂ´i sá»­ dá»¥ng cĂ¡c tiĂªu chuáº©n ngĂ nh Ä‘á»ƒ Ä‘o lÆ°á»ng hiá»‡u suáº¥t sáº£n pháº©m cá»§a mĂ¬nh.', remembered: false },
                    { id: 'w217', word: 'collaborate', language: 'en', transcription: '/kÉ™ËˆlĂ¦bÉ™reÉªt/', mean: 'há»£p tĂ¡c, phá»‘i há»£p cĂ¹ng nhau', wordtype: 'verb', example: 'The two universities collaborated on a joint climate research project.', example_vi: 'Hai trÆ°á»ng Ä‘áº¡i há»c Ä‘Ă£ há»£p tĂ¡c trong má»™t dá»± Ă¡n nghiĂªn cá»©u khĂ­ háº­u chung.', remembered: false },
                    { id: 'w218', word: 'simulation', language: 'en', transcription: '/ËŒsÉªmjÊËˆleÉªÊƒn/', mean: 'mĂ´ phá»ng, giáº£ láº­p', wordtype: 'noun', example: 'Computer simulations were used to test the product before physical manufacturing.', example_vi: 'MĂ´ phá»ng mĂ¡y tĂ­nh Ä‘Æ°á»£c sá»­ dá»¥ng Ä‘á»ƒ kiá»ƒm tra sáº£n pháº©m trÆ°á»›c khi sáº£n xuáº¥t thá»±c táº¿.', remembered: false },
                    { id: 'w219', word: 'hypothesis', language: 'en', transcription: '/haÉªËˆpÉ’Î¸ÉªsÉªs/', mean: 'giáº£ thuyáº¿t nghiĂªn cá»©u', wordtype: 'noun', example: 'The researchers tested their hypothesis through a series of controlled experiments.', example_vi: 'CĂ¡c nhĂ  nghiĂªn cá»©u Ä‘Ă£ kiá»ƒm tra giáº£ thuyáº¿t cá»§a há» thĂ´ng qua má»™t loáº¡t thĂ­ nghiá»‡m cĂ³ kiá»ƒm soĂ¡t.', remembered: false },
                    { id: 'w220', word: 'findings', language: 'en', transcription: '/ËˆfaÉªndÉªÅ‹z/', mean: 'káº¿t quáº£ nghiĂªn cá»©u, phĂ¡t hiá»‡n', wordtype: 'noun', example: 'The research findings were published in an international journal.', example_vi: 'Káº¿t quáº£ nghiĂªn cá»©u Ä‘Æ°á»£c cĂ´ng bá»‘ trĂªn má»™t táº¡p chĂ­ quá»‘c táº¿.', remembered: false },
                    { id: 'w221', word: 'optimize', language: 'en', transcription: '/ËˆÉ’ptÉªmaÉªz/', mean: 'tá»‘i Æ°u hĂ³a', wordtype: 'verb', example: 'The team worked to optimize the software\'s performance under heavy load.', example_vi: 'NhĂ³m Ä‘Ă£ ná»— lá»±c tá»‘i Æ°u hĂ³a hiá»‡u suáº¥t pháº§n má»m dÆ°á»›i táº£i trá»ng náº·ng.', remembered: false },
                    { id: 'w222', word: 'scalable', language: 'en', transcription: '/ËˆskeÉªlÉ™bl/', mean: 'cĂ³ thá»ƒ má»Ÿ rá»™ng quy mĂ´', wordtype: 'adjective', example: 'The platform was designed to be scalable to support millions of users.', example_vi: 'Ná»n táº£ng Ä‘Æ°á»£c thiáº¿t káº¿ Ä‘á»ƒ cĂ³ thá»ƒ má»Ÿ rá»™ng quy mĂ´ há»— trá»£ hĂ ng triá»‡u ngÆ°á»i dĂ¹ng.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 19: THá»NG KĂ & PHĂ‚N TĂCH â”€â”€â”€ */
            {
                id: 'toeic-analytics',
                title: 'đŸ“ Thá»‘ng kĂª & PhĂ¢n tĂ­ch dá»¯ liá»‡u',
                description: 'Tá»« vá»±ng vá» sá»‘ liá»‡u, dá»± bĂ¡o vĂ  Ä‘Ă¡nh giĂ¡ hiá»‡u quáº£ kinh doanh',
                wordCount: 13,
                words: [
                    { id: 'w223', word: 'statistics', language: 'en', transcription: '/stÉ™ËˆtÉªstÉªks/', mean: 'thá»‘ng kĂª, sá»‘ liá»‡u thá»‘ng kĂª', wordtype: 'noun', example: 'The statistics show a clear upward trend in online shopping.', example_vi: 'Sá»‘ liá»‡u thá»‘ng kĂª cho tháº¥y xu hÆ°á»›ng tÄƒng rĂµ rĂ ng trong mua sáº¯m trá»±c tuyáº¿n.', remembered: false },
                    { id: 'w224', word: 'forecast', language: 'en', transcription: '/ËˆfÉ”ËkÉ‘Ëst/', mean: 'dá»± bĂ¡o, dá»± Ä‘oĂ¡n', wordtype: 'noun / verb', example: 'The sales forecast for next quarter looks very promising.', example_vi: 'Dá»± bĂ¡o doanh sá»‘ cho quĂ½ tá»›i trĂ´ng ráº¥t há»©a háº¹n.', remembered: false },
                    { id: 'w225', word: 'trend', language: 'en', transcription: '/trÉ›nd/', mean: 'xu hÆ°á»›ng, chiá»u hÆ°á»›ng', wordtype: 'noun', example: 'The latest trend shows consumers prefer eco-friendly products.', example_vi: 'Xu hÆ°á»›ng má»›i nháº¥t cho tháº¥y ngÆ°á»i tiĂªu dĂ¹ng Æ°a thĂ­ch sáº£n pháº©m thĂ¢n thiá»‡n vá»›i mĂ´i trÆ°á»ng.', remembered: false },
                    { id: 'w226', word: 'variable', language: 'en', transcription: '/ËˆveÉ™rÉªÉ™bl/', mean: 'biáº¿n sá»‘, yáº¿u tá»‘ thay Ä‘á»•i', wordtype: 'noun / adjective', example: 'The researchers identified several key variables affecting the outcome.', example_vi: 'CĂ¡c nhĂ  nghiĂªn cá»©u xĂ¡c Ä‘á»‹nh Ä‘Æ°á»£c nhiá»u biáº¿n sá»‘ quan trá»ng áº£nh hÆ°á»Ÿng Ä‘áº¿n káº¿t quáº£.', remembered: false },
                    { id: 'w227', word: 'correlation', language: 'en', transcription: '/ËŒkÉ’rÉªËˆleÉªÊƒn/', mean: 'má»‘i tÆ°Æ¡ng quan', wordtype: 'noun', example: 'There is a strong positive correlation between education level and income.', example_vi: 'CĂ³ má»‘i tÆ°Æ¡ng quan dÆ°Æ¡ng máº¡nh giá»¯a trĂ¬nh Ä‘á»™ há»c váº¥n vĂ  thu nháº­p.', remembered: false },
                    { id: 'w228', word: 'data', language: 'en', transcription: '/ËˆdeÉªtÉ™/', mean: 'dá»¯ liá»‡u, thĂ´ng tin', wordtype: 'noun', example: 'All data must be verified before it is included in the report.', example_vi: 'Táº¥t cáº£ dá»¯ liá»‡u pháº£i Ä‘Æ°á»£c xĂ¡c minh trÆ°á»›c khi Ä‘Æ°a vĂ o bĂ¡o cĂ¡o.', remembered: false },
                    { id: 'w229', word: 'insight', language: 'en', transcription: '/ËˆÉªnsaÉªt/', mean: 'nhận định sâu sắc, thông tin chuyên sâu', wordtype: 'noun', example: 'The market research provided valuable insights into customer behavior.', example_vi: 'Nghiên cứu thị trường đã cung cấp những nhận định giá trị về hành vi khách hàng.', remembered: false },
                    { id: 'w230', word: 'projection', language: 'en', transcription: '/prÉ™ËˆdÊ’É›kÊƒn/', mean: 'dá»± Ä‘oĂ¡n, con sá»‘ dá»± kiáº¿n', wordtype: 'noun', example: 'Revenue projections for next year are based on current growth rates.', example_vi: 'Dá»± Ä‘oĂ¡n doanh thu cho nÄƒm tá»›i dá»±a trĂªn tá»· lá»‡ tÄƒng trÆ°á»Ÿng hiá»‡n táº¡i.', remembered: false },
                    { id: 'w231', word: 'margin', language: 'en', transcription: '/ËˆmÉ‘ËdÊ’Éªn/', mean: 'biĂªn lá»£i nhuáº­n, tá»· suáº¥t lá»£i nhuáº­n', wordtype: 'noun', example: 'The profit margin improved after reducing production costs.', example_vi: 'BiĂªn lá»£i nhuáº­n Ä‘Æ°á»£c cáº£i thiá»‡n sau khi giáº£m chi phĂ­ sáº£n xuáº¥t.', remembered: false },
                    { id: 'w232', word: 'aggregate', language: 'en', transcription: '/ËˆĂ¦É¡rÉªÉ¡Éªt/', mean: 'tổng cộng; tổng hợp', wordtype: 'adjective / noun / verb', example: 'The aggregate sales figures exceeded our expectations by 12%.', example_vi: 'Tổng doanh số cộng gộp đã vượt kỳ vọng của chúng tôi 12%.', remembered: false },
                    { id: 'w233', word: 'quarterly', language: 'en', transcription: '/ËˆkwÉ”ËtÉ™li/', mean: 'theo quĂ½, hĂ ng quĂ½', wordtype: 'adjective / adverb', example: 'The company publishes quarterly earnings reports for its investors.', example_vi: 'CĂ´ng ty cĂ´ng bá»‘ bĂ¡o cĂ¡o thu nháº­p hĂ ng quĂ½ cho cĂ¡c nhĂ  Ä‘áº§u tÆ°.', remembered: false },
                    { id: 'w234', word: 'performance', language: 'en', transcription: '/pÉ™ËˆfÉ”ËmÉ™ns/', mean: 'hiá»‡u suáº¥t, thĂ nh tĂ­ch', wordtype: 'noun', example: 'The team\'s performance this year exceeded all previous records.', example_vi: 'Hiá»‡u suáº¥t cá»§a nhĂ³m trong nÄƒm nay vÆ°á»£t qua táº¥t cáº£ cĂ¡c ká»· lá»¥c trÆ°á»›c Ä‘Ă¢y.', remembered: false },
                    { id: 'w235', word: 'indicator', language: 'en', transcription: '/ËˆÉªndÉªkeÉªtÉ™r/', mean: 'chá»‰ sá»‘, chá»‰ bĂ¡o', wordtype: 'noun', example: 'GDP is one of the most important economic indicators.', example_vi: 'GDP lĂ  má»™t trong nhá»¯ng chá»‰ sá»‘ kinh táº¿ quan trá»ng nháº¥t.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 20: Váº¬N Táº¢I & GIAO NHáº¬N â”€â”€â”€ */
            {
                id: 'toeic-transport',
                title: 'đŸ Váº­n táº£i & Giao nháº­n',
                description: 'Tá»« vá»±ng vá» giao nháº­n hĂ ng hĂ³a, váº­n chuyá»ƒn vĂ  phĂ¢n phá»‘i',
                wordCount: 11,
                words: [
                    { id: 'w236', word: 'courier', language: 'en', transcription: '/ËˆkÊriÉ™r/', mean: 'đơn vị chuyển phát, người chuyển phát', wordtype: 'noun', example: 'We use a courier service to deliver urgent documents same-day.', example_vi: 'Chúng tôi dùng dịch vụ chuyển phát để giao tài liệu khẩn ngay trong ngày.', remembered: false },
                    { id: 'w237', word: 'dispatch', language: 'en', transcription: '/dÉªËˆspĂ¦tÊƒ/', mean: 'gửi đi, điều phối gửi hàng', wordtype: 'noun / verb', example: 'The order was dispatched from our warehouse early this morning.', example_vi: 'Đơn hàng đã được gửi đi từ kho của chúng tôi vào sáng sớm hôm nay.', remembered: false },
                    { id: 'w238', word: 'cargo', language: 'en', transcription: '/ËˆkÉ‘ËÉ¡É™Ê/', mean: 'hĂ ng hĂ³a váº­n chuyá»ƒn, chá»Ÿ hĂ ng', wordtype: 'noun', example: 'The cargo ship was carrying electronics from South Korea to Vietnam.', example_vi: 'Con tĂ u chá»Ÿ hĂ ng Ä‘ang váº­n chuyá»ƒn Ä‘á»“ Ä‘iá»‡n tá»­ tá»« HĂ n Quá»‘c Ä‘áº¿n Viá»‡t Nam.', remembered: false },
                    { id: 'w239', word: 'fleet', language: 'en', transcription: '/fliËt/', mean: 'Ä‘á»™i xe, Ä‘á»™i tĂ u váº­n táº£i', wordtype: 'noun', example: 'The company operates a fleet of 200 delivery vehicles nationwide.', example_vi: 'CĂ´ng ty váº­n hĂ nh má»™t Ä‘á»™i xe 200 phÆ°Æ¡ng tiá»‡n giao hĂ ng trĂªn toĂ n quá»‘c.', remembered: false },
                    { id: 'w240', word: 'hub', language: 'en', transcription: '/hÊŒb/', mean: 'trung tĂ¢m trung chuyá»ƒn, Ä‘áº§u má»‘i', wordtype: 'noun', example: 'Singapore serves as a major shipping hub for Southeast Asia.', example_vi: 'Singapore Ä‘Ă³ng vai trĂ² lĂ  trung tĂ¢m váº­n chuyá»ƒn lá»›n cá»§a ÄĂ´ng Nam Ă.', remembered: false },
                    { id: 'w241', word: 'route', language: 'en', transcription: '/ruËt/', mean: 'tuyáº¿n Ä‘Æ°á»ng váº­n chuyá»ƒn', wordtype: 'noun', example: 'The delivery route was optimized to reduce fuel costs and travel time.', example_vi: 'Tuyáº¿n Ä‘Æ°á»ng giao hĂ ng Ä‘Æ°á»£c tá»‘i Æ°u hĂ³a Ä‘á»ƒ giáº£m chi phĂ­ nhiĂªn liá»‡u vĂ  thá»i gian di chuyá»ƒn.', remembered: false },
                    { id: 'w242', word: 'tracking', language: 'en', transcription: '/ËˆtrĂ¦kÉªÅ‹/', mean: 'theo dĂµi (hĂ ng hĂ³a)', wordtype: 'noun', example: 'Use the tracking number to monitor the status of your package online.', example_vi: 'Sá»­ dá»¥ng mĂ£ theo dĂµi Ä‘á»ƒ kiá»ƒm tra tráº¡ng thĂ¡i gĂ³i hĂ ng cá»§a báº¡n trá»±c tuyáº¿n.', remembered: false },
                    { id: 'w243', word: 'consignment', language: 'en', transcription: '/kÉ™nËˆsaÉªnmÉ™nt/', mean: 'lĂ´ hĂ ng gá»­i, hĂ ng kĂ½ gá»­i', wordtype: 'noun', example: 'A large consignment of goods arrived at the port this morning.', example_vi: 'Má»™t lĂ´ hĂ ng lá»›n Ä‘Ă£ Ä‘áº¿n cáº£ng sĂ¡ng nay.', remembered: false },
                    { id: 'w244', word: 'delivery', language: 'en', transcription: '/dÉªËˆlÉªvÉ™ri/', mean: 'giao hĂ ng, dá»‹ch vá»¥ giao nháº­n', wordtype: 'noun', example: 'Same-day delivery is now available for orders placed before noon.', example_vi: 'Giao hĂ ng trong ngĂ y hiá»‡n cĂ³ sáºµn cho cĂ¡c Ä‘Æ¡n Ä‘áº·t trÆ°á»›c 12 giá».', remembered: false },
                    { id: 'w245', word: 'terminal', language: 'en', transcription: '/ËˆtÉœËmÉªnl/', mean: 'nhà ga, bến cảng đầu mối', wordtype: 'noun', example: 'Containers are stored at the terminal before being loaded onto ships.', example_vi: 'Các container được lưu tại bến cảng đầu mối trước khi được xếp lên tàu.', remembered: false },
                    { id: 'w246', word: 'manifest', language: 'en', transcription: '/ËˆmĂ¦nÉªfÉ›st/', mean: 'danh sĂ¡ch hĂ ng hĂ³a, váº­n Ä‘Æ¡n', wordtype: 'noun', example: 'The customs officer checked the cargo manifest at the border crossing.', example_vi: 'NhĂ¢n viĂªn háº£i quan Ä‘Ă£ kiá»ƒm tra danh sĂ¡ch hĂ ng hĂ³a táº¡i cá»­a kháº©u biĂªn giá»›i.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 21: THÆ¯Æ NG Máº I QUá»C Táº¾ â”€â”€â”€ */
            {
                id: 'toeic-trade',
                title: 'đŸŒ ThÆ°Æ¡ng máº¡i quá»‘c táº¿',
                description: 'Tá»« vá»±ng vá» xuáº¥t nháº­p kháº©u, thuáº¿ quan vĂ  hiá»‡p Ä‘á»‹nh thÆ°Æ¡ng máº¡i',
                wordCount: 16,
                words: [
                    { id: 'w247', word: 'export', language: 'en', transcription: '/ËˆÉ›kspÉ”Ët/', mean: 'xuáº¥t kháº©u', wordtype: 'noun / verb', example: 'Vietnam exports a large volume of electronics to European markets.', example_vi: 'Viá»‡t Nam xuáº¥t kháº©u má»™t lÆ°á»£ng lá»›n Ä‘á»“ Ä‘iá»‡n tá»­ sang cĂ¡c thá»‹ trÆ°á»ng chĂ¢u Ă‚u.', remembered: false },
                    { id: 'w248', word: 'import', language: 'en', transcription: '/ËˆÉªmpÉ”Ët/', mean: 'nháº­p kháº©u', wordtype: 'noun / verb', example: 'The country imports most of its oil from the Middle East.', example_vi: 'Äáº¥t nÆ°á»›c nháº­p kháº©u háº§u háº¿t dáº§u tá»« Trung ÄĂ´ng.', remembered: false },
                    { id: 'w249', word: 'tariff', language: 'en', transcription: '/ËˆtĂ¦rÉªf/', mean: 'thuáº¿ quan, biá»ƒu thuáº¿', wordtype: 'noun', example: 'High tariffs on imported goods protect domestic manufacturers.', example_vi: 'Thuáº¿ quan cao Ä‘Ă¡nh vĂ o hĂ ng nháº­p kháº©u báº£o vá»‡ cĂ¡c nhĂ  sáº£n xuáº¥t trong nÆ°á»›c.', remembered: false },
                    { id: 'w250', word: 'embargo', language: 'en', transcription: '/ÉªmËˆbÉ‘ËÉ¡É™Ê/', mean: 'lá»‡nh cáº¥m váº­n thÆ°Æ¡ng máº¡i', wordtype: 'noun', example: 'The trade embargo severely affected the country\'s economy.', example_vi: 'Lá»‡nh cáº¥m váº­n thÆ°Æ¡ng máº¡i Ä‘Ă£ áº£nh hÆ°á»Ÿng nghiĂªm trá»ng Ä‘áº¿n ná»n kinh táº¿ cá»§a Ä‘áº¥t nÆ°á»›c.', remembered: false },
                    { id: 'w251', word: 'quota', language: 'en', transcription: '/ËˆkwÉ™ÊtÉ™/', mean: 'háº¡n ngáº¡ch nháº­p kháº©u', wordtype: 'noun', example: 'The government set an import quota for foreign-made automobiles.', example_vi: 'ChĂ­nh phá»§ Ä‘áº·t háº¡n ngáº¡ch nháº­p kháº©u cho Ă´ tĂ´ sáº£n xuáº¥t nÆ°á»›c ngoĂ i.', remembered: false },
                    { id: 'w252', word: 'trade deficit', language: 'en', transcription: '/treÉªd ËˆdÉ›fÉªsÉªt/', mean: 'thĂ¢m há»¥t thÆ°Æ¡ng máº¡i', wordtype: 'noun phrase', example: 'The country recorded its largest trade deficit in over a decade.', example_vi: 'Äáº¥t nÆ°á»›c ghi nháº­n má»©c thĂ¢m há»¥t thÆ°Æ¡ng máº¡i lá»›n nháº¥t trong hÆ¡n má»™t tháº­p ká»·.', remembered: false },
                    { id: 'w253', word: 'bilateral', language: 'en', transcription: '/baÉªËˆlĂ¦tÉ™rÉ™l/', mean: 'song phÆ°Æ¡ng, hai bĂªn', wordtype: 'adjective', example: 'The two nations signed a bilateral trade agreement last month.', example_vi: 'Hai quá»‘c gia Ä‘Ă£ kĂ½ má»™t hiá»‡p Ä‘á»‹nh thÆ°Æ¡ng máº¡i song phÆ°Æ¡ng vĂ o thĂ¡ng trÆ°á»›c.', remembered: false },
                    { id: 'w254', word: 'exchange rate', language: 'en', transcription: '/ÉªksËˆtÊƒeÉªndÊ’ reÉªt/', mean: 'tá»· giĂ¡ há»‘i Ä‘oĂ¡i', wordtype: 'noun phrase', example: 'Fluctuating exchange rates make international trade more challenging.', example_vi: 'Tá»· giĂ¡ há»‘i Ä‘oĂ¡i biáº¿n Ä‘á»™ng khiáº¿n thÆ°Æ¡ng máº¡i quá»‘c táº¿ trá»Ÿ nĂªn khĂ³ khÄƒn hÆ¡n.', remembered: false },
                    { id: 'w255', word: 'sanction', language: 'en', transcription: '/ËˆsĂ¦Å‹kÊƒn/', mean: 'lá»‡nh trá»«ng pháº¡t, biá»‡n phĂ¡p cháº¿ tĂ i', wordtype: 'noun / verb', example: 'Economic sanctions were imposed after the country violated international law.', example_vi: 'CĂ¡c biá»‡n phĂ¡p trá»«ng pháº¡t kinh táº¿ Ä‘Æ°á»£c Ă¡p Ä‘áº·t sau khi Ä‘áº¥t nÆ°á»›c vi pháº¡m luáº­t quá»‘c táº¿.', remembered: false },
                    { id: 'w256', word: 'protocol', language: 'en', transcription: '/ËˆprÉ™ÊtÉ™kÉ’l/', mean: 'nghị định thư, quy thức', wordtype: 'noun', example: 'Both countries signed a trade protocol to simplify customs procedures.', example_vi: 'Hai nước đã ký một nghị định thư thương mại để đơn giản hóa thủ tục hải quan.', remembered: false },
                    { id: 'w257', word: 'certificate of origin', language: 'en', transcription: '/sÉ™ËˆtÉªfÉªkÉªt É™v ËˆÉ’rÉªdÊ’Éªn/', mean: 'giấy chứng nhận xuất xứ hàng hóa', wordtype: 'noun phrase', example: 'A certificate of origin is required to qualify for reduced tariff rates.', example_vi: 'Cần có giấy chứng nhận xuất xứ để đủ điều kiện hưởng mức thuế quan ưu đãi thấp hơn.', remembered: false },
                    { id: 'w258', word: 'negotiation', language: 'en', transcription: '/nÉªËŒÉ¡É™ÊÊƒÉªËˆeÉªÊƒn/', mean: 'Ä‘Ă m phĂ¡n, thÆ°Æ¡ng lÆ°á»£ng', wordtype: 'noun', example: 'Trade negotiations between the two blocs have been ongoing for two years.', example_vi: 'ÄĂ m phĂ¡n thÆ°Æ¡ng máº¡i giá»¯a hai khá»‘i Ä‘Ă£ diá»…n ra liĂªn tá»¥c trong hai nÄƒm.', remembered: false },
                    { id: 'w259', word: 'subsidy', language: 'en', transcription: '/ËˆsÊŒbsÉªdi/', mean: 'trá»£ cáº¥p, trá»£ giĂ¡ cá»§a chĂ­nh phá»§', wordtype: 'noun', example: 'Government subsidies help local farmers compete with cheap imports.', example_vi: 'Trá»£ cáº¥p cá»§a chĂ­nh phá»§ giĂºp nĂ´ng dĂ¢n Ä‘á»‹a phÆ°Æ¡ng cáº¡nh tranh vá»›i hĂ ng nháº­p kháº©u giĂ¡ ráº».', remembered: false },
                    { id: 'w260', word: 'free trade', language: 'en', transcription: '/friË treÉªd/', mean: 'thÆ°Æ¡ng máº¡i tá»± do', wordtype: 'noun phrase', example: 'Free trade agreements lower barriers and boost economic growth.', example_vi: 'CĂ¡c hiá»‡p Ä‘á»‹nh thÆ°Æ¡ng máº¡i tá»± do giáº£m rĂ o cáº£n vĂ  thĂºc Ä‘áº©y tÄƒng trÆ°á»Ÿng kinh táº¿.', remembered: false },
                    { id: 'w261', word: 'trade agreement', language: 'en', transcription: '/treÉªd É™ËˆÉ¡riËmÉ™nt/', mean: 'hiá»‡p Ä‘á»‹nh thÆ°Æ¡ng máº¡i', wordtype: 'noun phrase', example: 'The new trade agreement opened markets for both countries significantly.', example_vi: 'Hiá»‡p Ä‘á»‹nh thÆ°Æ¡ng máº¡i má»›i Ä‘Ă£ má»Ÿ ra thá»‹ trÆ°á»ng Ä‘Ă¡ng ká»ƒ cho cáº£ hai quá»‘c gia.', remembered: false },
                    { id: 'w262', word: 'customs duty', language: 'en', transcription: '/ËˆkÊŒstÉ™mz ËˆdjuËti/', mean: 'thuáº¿ nháº­p kháº©u, thuáº¿ háº£i quan', wordtype: 'noun phrase', example: 'You must pay customs duty on goods valued above a certain threshold.', example_vi: 'Báº¡n pháº£i ná»™p thuáº¿ nháº­p kháº©u Ä‘á»‘i vá»›i hĂ ng hĂ³a cĂ³ giĂ¡ trá»‹ vÆ°á»£t ngÆ°á»¡ng nháº¥t Ä‘á»‹nh.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 22: QUáº¢N LĂ Dá»° ĂN â”€â”€â”€ */
            {
                id: 'toeic-projectmgmt',
                title: 'đŸ’¼ Quáº£n lĂ½ dá»± Ă¡n',
                description: 'Tá»« vá»±ng vá» láº­p káº¿ hoáº¡ch, theo dĂµi tiáº¿n Ä‘á»™ vĂ  quáº£n lĂ½ nguá»“n lá»±c',
                wordCount: 14,
                words: [
                    { id: 'w263', word: 'milestone', language: 'en', transcription: '/ËˆmaÉªlstÉ™Ên/', mean: 'cá»™t má»‘c quan trá»ng cá»§a dá»± Ă¡n', wordtype: 'noun', example: 'Reaching the first milestone on time boosted the team\'s confidence.', example_vi: 'Äáº¡t cá»™t má»‘c Ä‘áº§u tiĂªn Ä‘Ăºng háº¡n Ä‘Ă£ tÄƒng thĂªm sá»± tá»± tin cho nhĂ³m.', remembered: false },
                    { id: 'w264', word: 'scope', language: 'en', transcription: '/skÉ™Êp/', mean: 'pháº¡m vi, quy mĂ´ dá»± Ă¡n', wordtype: 'noun', example: 'Any changes to the project scope must be approved by the client.', example_vi: 'Báº¥t ká»³ thay Ä‘á»•i nĂ o vá» pháº¡m vi dá»± Ă¡n Ä‘á»u pháº£i Ä‘Æ°á»£c khĂ¡ch hĂ ng phĂª duyá»‡t.', remembered: false },
                    { id: 'w265', word: 'deliverable', language: 'en', transcription: '/dÉªËˆlÉªvÉ™rÉ™bl/', mean: 'káº¿t quáº£ bĂ n giao, sáº£n pháº©m Ä‘áº§u ra', wordtype: 'noun', example: 'All deliverables must be submitted before the final project review.', example_vi: 'Táº¥t cáº£ káº¿t quáº£ bĂ n giao pháº£i Ä‘Æ°á»£c ná»™p trÆ°á»›c buá»•i Ä‘Ă¡nh giĂ¡ dá»± Ă¡n cuá»‘i cĂ¹ng.', remembered: false },
                    { id: 'w266', word: 'risk assessment', language: 'en', transcription: '/rÉªsk É™ËˆsÉ›smÉ™nt/', mean: 'Ä‘Ă¡nh giĂ¡ rá»§i ro', wordtype: 'noun phrase', example: 'A thorough risk assessment was conducted before the project kickoff.', example_vi: 'Má»™t Ä‘Ă¡nh giĂ¡ rá»§i ro toĂ n diá»‡n Ä‘Ă£ Ä‘Æ°á»£c tiáº¿n hĂ nh trÆ°á»›c khi khá»Ÿi Ä‘á»™ng dá»± Ă¡n.', remembered: false },
                    { id: 'w267', word: 'timeline', language: 'en', transcription: '/ËˆtaÉªmlaÉªn/', mean: 'lá»‹ch trĂ¬nh, má»‘c thá»i gian dá»± Ă¡n', wordtype: 'noun', example: 'The project timeline was revised after unexpected delays in procurement.', example_vi: 'Lá»‹ch trĂ¬nh dá»± Ă¡n Ä‘Æ°á»£c Ä‘iá»u chá»‰nh sau nhá»¯ng cháº­m trá»… báº¥t ngá» trong thu mua.', remembered: false },
                    { id: 'w268', word: 'resource', language: 'en', transcription: '/rÉªËˆzÉ”Ës/', mean: 'nguá»“n lá»±c, tĂ i nguyĂªn', wordtype: 'noun', example: 'Allocating resources effectively is key to successful project management.', example_vi: 'PhĂ¢n bá»• nguá»“n lá»±c hiá»‡u quáº£ lĂ  chĂ¬a khĂ³a Ä‘á»ƒ quáº£n lĂ½ dá»± Ă¡n thĂ nh cĂ´ng.', remembered: false },
                    { id: 'w269', word: 'bottleneck', language: 'en', transcription: '/ËˆbÉ’tlnÉ›k/', mean: 'Ä‘iá»ƒm ngháº½n, nĂºt tháº¯t cá»• chai', wordtype: 'noun', example: 'The approval process was identified as the main bottleneck in the workflow.', example_vi: 'Quy trĂ¬nh phĂª duyá»‡t Ä‘Æ°á»£c xĂ¡c Ä‘á»‹nh lĂ  Ä‘iá»ƒm ngháº½n chĂ­nh trong quy trĂ¬nh lĂ m viá»‡c.', remembered: false },
                    { id: 'w270', word: 'kickoff', language: 'en', transcription: '/ËˆkÉªkÉ’f/', mean: 'lá»… khá»Ÿi Ä‘á»™ng dá»± Ă¡n', wordtype: 'noun', example: 'The project kickoff meeting is scheduled for next Monday at 9 AM.', example_vi: 'Cuá»™c há»p khá»Ÿi Ä‘á»™ng dá»± Ă¡n Ä‘Æ°á»£c lĂªn lá»‹ch vĂ o thá»© Hai tá»›i lĂºc 9 giá» sĂ¡ng.', remembered: false },
                    { id: 'w271', word: 'agile', language: 'en', transcription: '/ËˆĂ¦dÊ’aÉªl/', mean: 'linh hoáº¡t, phÆ°Æ¡ng phĂ¡p Agile', wordtype: 'adjective', example: 'The development team adopted an agile approach to deliver features faster.', example_vi: 'NhĂ³m phĂ¡t triá»ƒn Ă¡p dá»¥ng phÆ°Æ¡ng phĂ¡p linh hoáº¡t Ä‘á»ƒ cung cáº¥p tĂ­nh nÄƒng nhanh hÆ¡n.', remembered: false },
                    { id: 'w272', word: 'sprint', language: 'en', transcription: '/sprÉªnt/', mean: 'giai Ä‘oáº¡n phĂ¡t triá»ƒn ngáº¯n (Agile)', wordtype: 'noun', example: 'Each sprint lasts two weeks and ends with a product demo.', example_vi: 'Má»—i giai Ä‘oáº¡n kĂ©o dĂ i hai tuáº§n vĂ  káº¿t thĂºc báº±ng má»™t buá»•i trĂ¬nh diá»…n sáº£n pháº©m.', remembered: false },
                    { id: 'w273', word: 'retrospective', language: 'en', transcription: '/ËŒrÉ›trÉ™ËˆspÉ›ktÉªv/', mean: 'tá»•ng káº¿t, nhĂ¬n láº¡i quĂ¡ trĂ¬nh', wordtype: 'noun / adjective', example: 'The team held a retrospective after each sprint to identify improvements.', example_vi: 'NhĂ³m tá»• chá»©c buá»•i tá»•ng káº¿t sau má»—i giai Ä‘oáº¡n Ä‘á»ƒ xĂ¡c Ä‘á»‹nh nhá»¯ng cáº£i tiáº¿n cáº§n thiáº¿t.', remembered: false },
                    { id: 'w274', word: 'dependency', language: 'en', transcription: '/dÉªËˆpÉ›ndÉ™nsi/', mean: 'sá»± phá»¥ thuá»™c, má»‘i liĂªn káº¿t nhiá»‡m vá»¥', wordtype: 'noun', example: 'Task B has a dependency on Task A and cannot start until A is complete.', example_vi: 'Nhiá»‡m vá»¥ B phá»¥ thuá»™c vĂ o nhiá»‡m vá»¥ A vĂ  khĂ´ng thá»ƒ báº¯t Ä‘áº§u cho Ä‘áº¿n khi A hoĂ n thĂ nh.', remembered: false },
                    { id: 'w275', word: 'status report', language: 'en', transcription: '/ËˆsteÉªtÉ™s rÉªËˆpÉ”Ët/', mean: 'bĂ¡o cĂ¡o tiáº¿n Ä‘á»™', wordtype: 'noun phrase', example: 'Please submit a weekly status report every Friday before 5 PM.', example_vi: 'Vui lĂ²ng ná»™p bĂ¡o cĂ¡o tiáº¿n Ä‘á»™ hĂ ng tuáº§n trÆ°á»›c 17 giá» má»—i thá»© SĂ¡u.', remembered: false },
                    { id: 'w276', word: 'workload', language: 'en', transcription: '/ËˆwÉœËklÉ™Êd/', mean: 'khá»‘i lÆ°á»£ng cĂ´ng viá»‡c', wordtype: 'noun', example: 'The team\'s workload increased significantly after the merger.', example_vi: 'Khá»‘i lÆ°á»£ng cĂ´ng viá»‡c cá»§a nhĂ³m tÄƒng lĂªn Ä‘Ă¡ng ká»ƒ sau vá»¥ sĂ¡p nháº­p.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 23: Äáº¦U TÆ¯ & CHá»¨NG KHOĂN â”€â”€â”€ */
            {
                id: 'toeic-investment',
                title: 'đŸ¦ Äáº§u tÆ° & Chá»©ng khoĂ¡n',
                description: 'Tá»« vá»±ng vá» thá»‹ trÆ°á»ng chá»©ng khoĂ¡n, danh má»¥c Ä‘áº§u tÆ° vĂ  tĂ i sáº£n tĂ i chĂ­nh',
                wordCount: 13,
                words: [
                    { id: 'w277', word: 'portfolio', language: 'en', transcription: '/pÉ”ËtËˆfÉ™ÊliÉ™Ê/', mean: 'danh má»¥c Ä‘áº§u tÆ°', wordtype: 'noun', example: 'She diversified her investment portfolio to reduce overall risk.', example_vi: 'CĂ´ áº¥y Ä‘a dáº¡ng hĂ³a danh má»¥c Ä‘áº§u tÆ° Ä‘á»ƒ giáº£m rá»§i ro tá»•ng thá»ƒ.', remembered: false },
                    { id: 'w278', word: 'dividend', language: 'en', transcription: '/ËˆdÉªvÉªdÉ›nd/', mean: 'cổ tức', wordtype: 'noun', example: 'The company declared a quarterly dividend of $0.50 per share.', example_vi: 'Công ty công bố mức cổ tức hằng quý là 0,50 đô la cho mỗi cổ phiếu.', remembered: false },
                    { id: 'w279', word: 'asset', language: 'en', transcription: '/ËˆĂ¦sÉ›t/', mean: 'tĂ i sáº£n, vá»‘n', wordtype: 'noun', example: 'Real estate is considered a stable long-term asset class.', example_vi: 'Báº¥t Ä‘á»™ng sáº£n Ä‘Æ°á»£c coi lĂ  loáº¡i tĂ i sáº£n á»•n Ä‘á»‹nh dĂ i háº¡n.', remembered: false },
                    { id: 'w280', word: 'volatility', language: 'en', transcription: '/ËŒvÉ’lÉ™ËˆtÉªlÉªti/', mean: 'biáº¿n Ä‘á»™ng, sá»± khĂ´ng á»•n Ä‘á»‹nh', wordtype: 'noun', example: 'High market volatility makes short-term investing risky.', example_vi: 'Biáº¿n Ä‘á»™ng thá»‹ trÆ°á»ng cao khiáº¿n Ä‘áº§u tÆ° ngáº¯n háº¡n trá»Ÿ nĂªn rá»§i ro.', remembered: false },
                    { id: 'w281', word: 'yield', language: 'en', transcription: '/jiËld/', mean: 'lá»£i suáº¥t, lá»£i tá»©c', wordtype: 'noun / verb', example: 'Government bonds yield a relatively safe and predictable return.', example_vi: 'TrĂ¡i phiáº¿u chĂ­nh phá»§ mang láº¡i lá»£i tá»©c tÆ°Æ¡ng Ä‘á»‘i an toĂ n vĂ  cĂ³ thá»ƒ dá»± Ä‘oĂ¡n Ä‘Æ°á»£c.', remembered: false },
                    { id: 'w282', word: 'hedge fund', language: 'en', transcription: '/hÉ›dÊ’ fÊŒnd/', mean: 'quá»¹ phĂ²ng há»™', wordtype: 'noun phrase', example: 'The hedge fund posted strong returns despite the market downturn.', example_vi: 'Quá»¹ phĂ²ng há»™ ghi nháº­n lá»£i nhuáº­n máº¡nh máº½ báº¥t cháº¥p thá»‹ trÆ°á»ng suy giáº£m.', remembered: false },
                    { id: 'w283', word: 'liquidity', language: 'en', transcription: '/lÉªËˆkwÉªdÉªti/', mean: 'tĂ­nh thanh khoáº£n', wordtype: 'noun', example: 'Cash and government bonds offer the highest liquidity among all assets.', example_vi: 'Tiá»n máº·t vĂ  trĂ¡i phiáº¿u chĂ­nh phá»§ cĂ³ tĂ­nh thanh khoáº£n cao nháº¥t trong sá»‘ táº¥t cáº£ cĂ¡c tĂ i sáº£n.', remembered: false },
                    { id: 'w284', word: 'capital', language: 'en', transcription: '/ËˆkĂ¦pÉªtl/', mean: 'vốn, vốn đầu tư', wordtype: 'noun', example: 'The startup raised $2 million in seed capital from angel investors.', example_vi: 'Startup đã huy động được 2 triệu đô la vốn hạt giống từ các nhà đầu tư thiên thần.', remembered: false },
                    { id: 'w285', word: 'valuation', language: 'en', transcription: '/ËŒvĂ¦ljuËˆeÉªÊƒn/', mean: 'định giá, mức định giá doanh nghiệp', wordtype: 'noun', example: 'The startup\'s valuation reached $1 billion after its latest funding round.', example_vi: 'Mức định giá của startup đã đạt 1 tỷ đô la sau vòng gọi vốn mới nhất.', remembered: false },
                    { id: 'w286', word: 'stock', language: 'en', transcription: '/stÉ’k/', mean: 'cá»• phiáº¿u', wordtype: 'noun', example: 'Investors rushed to buy stocks after the positive earnings announcement.', example_vi: 'CĂ¡c nhĂ  Ä‘áº§u tÆ° Ä‘á»• xĂ´ mua cá»• phiáº¿u sau thĂ´ng bĂ¡o lá»£i nhuáº­n tĂ­ch cá»±c.', remembered: false },
                    { id: 'w287', word: 'bond', language: 'en', transcription: '/bÉ’nd/', mean: 'trĂ¡i phiáº¿u', wordtype: 'noun', example: 'Corporate bonds typically offer higher yields than government bonds.', example_vi: 'TrĂ¡i phiáº¿u doanh nghiá»‡p thÆ°á»ng mang láº¡i lá»£i suáº¥t cao hÆ¡n trĂ¡i phiáº¿u chĂ­nh phá»§.', remembered: false },
                    { id: 'w288', word: 'IPO', language: 'en', transcription: '/ËŒaÉªpiËËˆÉ™Ê/', mean: 'phĂ¡t hĂ nh cá»• phiáº¿u láº§n Ä‘áº§u ra cĂ´ng chĂºng', wordtype: 'noun', example: 'The tech company\'s IPO was the largest in the country this year.', example_vi: 'IPO cá»§a cĂ´ng ty cĂ´ng nghá»‡ lĂ  Ä‘á»£t phĂ¡t hĂ nh lá»›n nháº¥t trong nÆ°á»›c nÄƒm nay.', remembered: false },
                    { id: 'w289', word: 'return on investment', language: 'en', transcription: '/rÉªËˆtÉœËn É’n ÉªnËˆvÉ›stmÉ™nt/', mean: 'lá»£i tá»©c Ä‘áº§u tÆ° (ROI)', wordtype: 'noun phrase', example: 'The project delivered a 200% return on investment within 18 months.', example_vi: 'Dá»± Ă¡n mang láº¡i lá»£i tá»©c Ä‘áº§u tÆ° 200% trong vĂ²ng 18 thĂ¡ng.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 24: TRUYá»€N THĂ”NG Sá» & Máº NG XĂƒ Há»˜I â”€â”€â”€ */
            {
                id: 'toeic-digital',
                title: 'đŸ–¥ï¸ Truyá»n thĂ´ng sá»‘ & Máº¡ng xĂ£ há»™i',
                description: 'Tá»« vá»±ng vá» marketing sá»‘, máº¡ng xĂ£ há»™i vĂ  phĂ¢n tĂ­ch ná»™i dung',
                wordCount: 12,
                words: [
                    { id: 'w290', word: 'engagement', language: 'en', transcription: '/ÉªnËˆÉ¡eÉªdÊ’mÉ™nt/', mean: 'mức độ tương tác', wordtype: 'noun', example: 'High engagement rates indicate that your content resonates with the audience.', example_vi: 'Tỷ lệ tương tác cao cho thấy nội dung của bạn thực sự phù hợp với khán giả.', remembered: false },
                    { id: 'w291', word: 'content', language: 'en', transcription: '/ËˆkÉ’ntÉ›nt/', mean: 'nội dung', wordtype: 'noun', example: 'Creating high-quality content consistently is the key to growing online.', example_vi: 'Việc tạo nội dung chất lượng cao một cách đều đặn là chìa khóa để phát triển trên mạng.', remembered: false },
                    { id: 'w292', word: 'influencer', language: 'en', transcription: '/ËˆÉªnflÊÉ™nsÉ™r/', mean: 'ngÆ°á»i cĂ³ táº§m áº£nh hÆ°á»Ÿng trĂªn máº¡ng', wordtype: 'noun', example: 'The brand partnered with a popular influencer to reach younger consumers.', example_vi: 'ThÆ°Æ¡ng hiá»‡u há»£p tĂ¡c vá»›i má»™t ngÆ°á»i cĂ³ áº£nh hÆ°á»Ÿng ná»•i tiáº¿ng Ä‘á»ƒ tiáº¿p cáº­n ngÆ°á»i tiĂªu dĂ¹ng tráº».', remembered: false },
                    { id: 'w293', word: 'analytics', language: 'en', transcription: '/ËŒĂ¦nÉ™ËˆlÉªtÉªks/', mean: 'phân tích dữ liệu', wordtype: 'noun', example: 'Social media analytics help track campaign performance in real time.', example_vi: 'Phân tích dữ liệu mạng xã hội giúp theo dõi hiệu quả chiến dịch theo thời gian thực.', remembered: false },
                    { id: 'w294', word: 'impression', language: 'en', transcription: '/ÉªmËˆprÉ›Êƒn/', mean: 'lÆ°á»£t hiá»ƒn thá»‹ quáº£ng cĂ¡o', wordtype: 'noun', example: 'The ad generated 5 million impressions in its first week online.', example_vi: 'Quáº£ng cĂ¡o táº¡o ra 5 triá»‡u lÆ°á»£t hiá»ƒn thá»‹ trong tuáº§n Ä‘áº§u tiĂªn trá»±c tuyáº¿n.', remembered: false },
                    { id: 'w295', word: 'conversion', language: 'en', transcription: '/kÉ™nËˆvÉœËÊƒn/', mean: 'chuyá»ƒn Ä‘á»•i (khĂ¡ch xem thĂ nh khĂ¡ch mua)', wordtype: 'noun', example: 'Improving the website\'s design increased the conversion rate by 30%.', example_vi: 'Cáº£i thiá»‡n thiáº¿t káº¿ trang web Ä‘Ă£ tÄƒng tá»· lá»‡ chuyá»ƒn Ä‘á»•i lĂªn 30%.', remembered: false },
                    { id: 'w296', word: 'hashtag', language: 'en', transcription: '/ËˆhĂ¦ÊƒtĂ¦É¡/', mean: 'tháº» hashtag, tá»« khĂ³a máº¡ng xĂ£ há»™i', wordtype: 'noun', example: 'Using the right hashtags can significantly increase your post\'s reach.', example_vi: 'Sá»­ dá»¥ng hashtag phĂ¹ há»£p cĂ³ thá»ƒ tÄƒng Ä‘Ă¡ng ká»ƒ pháº¡m vi tiáº¿p cáº­n bĂ i Ä‘Äƒng cá»§a báº¡n.', remembered: false },
                    { id: 'w297', word: 'viral', language: 'en', transcription: '/ËˆvaÉªÉ™rÉ™l/', mean: 'lan truyền mạnh trên mạng', wordtype: 'adjective', example: 'The company\'s humorous ad went viral and earned millions of views overnight.', example_vi: 'Mẫu quảng cáo hài hước của công ty đã lan truyền mạnh và thu về hàng triệu lượt xem chỉ sau một đêm.', remembered: false },
                    { id: 'w298', word: 'SEO', language: 'en', transcription: '/ËŒÉ›siËËˆÉ™Ê/', mean: 'tá»‘i Æ°u hĂ³a cĂ´ng cá»¥ tĂ¬m kiáº¿m', wordtype: 'noun', example: 'Good SEO practices help your website rank higher on search engines.', example_vi: 'CĂ¡c phÆ°Æ¡ng phĂ¡p SEO tá»‘t giĂºp trang web cá»§a báº¡n xáº¿p háº¡ng cao hÆ¡n trĂªn cĂ´ng cá»¥ tĂ¬m kiáº¿m.', remembered: false },
                    { id: 'w299', word: 'click-through rate', language: 'en', transcription: '/ËˆklÉªk Î¸ruË reÉªt/', mean: 'tỷ lệ nhấp (CTR)', wordtype: 'noun phrase', example: 'A higher click-through rate means your ad copy is more compelling.', example_vi: 'Tỷ lệ nhấp cao hơn có nghĩa là nội dung quảng cáo của bạn hấp dẫn hơn.', remembered: false },
                    { id: 'w300', word: 'brand awareness', language: 'en', transcription: '/brĂ¦nd É™ËˆweÉ™nÉªs/', mean: 'mức độ nhận biết thương hiệu', wordtype: 'noun phrase', example: 'The social media campaign successfully increased brand awareness among teens.', example_vi: 'Chiến dịch mạng xã hội đã giúp tăng mức độ nhận biết thương hiệu trong giới trẻ.', remembered: false },
                    { id: 'w301', word: 'reach', language: 'en', transcription: '/riËtÊƒ/', mean: 'pháº¡m vi tiáº¿p cáº­n', wordtype: 'noun / verb', example: 'Paid advertising significantly extended the campaign\'s organic reach.', example_vi: 'Quáº£ng cĂ¡o tráº£ phĂ­ Ä‘Ă£ má»Ÿ rá»™ng Ä‘Ă¡ng ká»ƒ pháº¡m vi tiáº¿p cáº­n tá»± nhiĂªn cá»§a chiáº¿n dá»‹ch.', remembered: false }
                ]
            }
        ]
    },

    /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       Bá»˜ 2 â€” TOPIK 1 (Tiáº¿ng HĂ n)
    â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
    'topik1-basic': {
        id: 'topik1-basic',
        title: '600 Essential Korean Words',
        lang: 'ko',
        topics: [

            /* â”€â”€â”€ TOPIC 1: Báº¢N THĂ‚N â”€â”€â”€ */
            {
                id: 'topik-self',
                title: 'đŸ‘¤ Báº£n thĂ¢n & Giá»›i thiá»‡u',
                description: 'Tá»« vá»±ng dĂ¹ng khi giá»›i thiá»‡u báº£n thĂ¢n vĂ  nĂ³i vá» cuá»™c sá»‘ng hĂ ng ngĂ y',
                wordCount: 10,
                words: [
                    { id: 'k001', word: '́´ë¦„', language: 'ko', transcription: '[i-reum]', mean: 'tĂªn, há» tĂªn', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́ œ ́´ë¦„́€ ë¯¼́¤€́´́—́”.', example_vi: 'TĂªn tĂ´i lĂ  Min-jun.', remembered: false },
                    { id: 'k002', word: 'ë‚˜́´', language: 'ko', transcription: '[na-i]', mean: 'tuá»•i', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë‚˜́´ê°€ ́–´ë–»ê²Œ ë¼́”?', example_vi: 'Báº¡n bao nhiĂªu tuá»•i?', remembered: false },
                    { id: 'k003', word: 'í•™́ƒ', language: 'ko', transcription: '[hak-saeng]', mean: 'há»c sinh, sinh viĂªn', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́ €ë” ëŒ€í•™êµ í•™́ƒ́´́—́”.', example_vi: 'TĂ´i lĂ  sinh viĂªn Ä‘áº¡i há»c.', remembered: false },
                    { id: 'k004', word: '́§́—…', language: 'ko', transcription: '[ji-geop]', mean: 'nghá» nghiá»‡p, cĂ´ng viá»‡c', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́§́—…́´ ë­́˜ˆ́”?', example_vi: 'Nghá» nghiá»‡p cá»§a báº¡n lĂ  gĂ¬?', remembered: false },
                    { id: 'k005', word: '́·¨ë¯¸', language: 'ko', transcription: '[chwi-mi]', mean: 'sá»Ÿ thĂ­ch', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́ œ ́·¨ë¯¸ë” ë…́„œ́˜ˆ́”.', example_vi: 'Sá»Ÿ thĂ­ch cá»§a tĂ´i lĂ  Ä‘á»c sĂ¡ch.', remembered: false },
                    { id: 'k006', word: '́¢‹́•„í•˜ë‹¤', language: 'ko', transcription: '[jo-a-ha-da]', mean: 'thĂ­ch, yĂªu thĂ­ch', wordtype: 'ë™́‚¬ (Ä‘á»™ng tá»«)', example: '́ €ë” ́Œ́•…́„ ́¢‹́•„í•´́”.', example_vi: 'TĂ´i thĂ­ch Ă¢m nháº¡c.', remembered: false },
                    { id: 'k007', word: '́‚´ë‹¤', language: 'ko', transcription: '[sal-da]', mean: 'sá»‘ng, sinh sá»‘ng', wordtype: 'ë™́‚¬ (Ä‘á»™ng tá»«)', example: '́„œ́¸́— ́‚´́•„́”.', example_vi: 'TĂ´i sá»‘ng á»Ÿ Seoul.', remembered: false },
                    { id: 'k008', word: '́™¸êµ­́¸', language: 'ko', transcription: '[oe-gu-gin]', mean: 'ngÆ°á»i nÆ°á»›c ngoĂ i', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́ €ë” ́™¸êµ­́¸́´́—́”.', example_vi: 'TĂ´i lĂ  ngÆ°á»i nÆ°á»›c ngoĂ i.', remembered: false },
                    { id: 'k009', word: 'í•œêµ­́–´', language: 'ko', transcription: '[han-gu-geo]', mean: 'tiáº¿ng HĂ n', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'í•œêµ­́–´ë¥¼ ê³µë¶€í•´́”.', example_vi: 'TĂ´i Ä‘ang há»c tiáº¿ng HĂ n.', remembered: false },
                    { id: 'k010', word: 'ë°°́°ë‹¤', language: 'ko', transcription: '[bae-u-da]', mean: 'há»c, há»c há»i', wordtype: 'ë™́‚¬ (Ä‘á»™ng tá»«)', example: 'í•œêµ­́–´ë¥¼ ́—´́‹¬íˆ ë°°́›Œ́”.', example_vi: 'TĂ´i chÄƒm chá»‰ há»c tiáº¿ng HĂ n.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 2: GIA ÄĂŒNH â”€â”€â”€ */
            {
                id: 'topik-family',
                title: 'đŸ‘¨â€đŸ‘©â€đŸ‘§â€đŸ‘¦ Gia Ä‘Ă¬nh & NgÆ°á»i thĂ¢n',
                description: 'Tá»« vá»±ng vá» cĂ¡c thĂ nh viĂªn trong gia Ä‘Ă¬nh vĂ  má»‘i quan há»‡ thĂ¢n thuá»™c',
                wordCount: 15,
                words: [
                    { id: 'k011', word: 'ê°€́¡±', language: 'ko', transcription: '[ga-jok]', mean: 'gia Ä‘Ă¬nh', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́°ë¦¬ ê°€́¡±́€ ë„¤ ëª…́´́—́”.', example_vi: 'Gia Ä‘Ă¬nh tĂ´i cĂ³ bá»‘n ngÆ°á»i.', remembered: false },
                    { id: 'k012', word: '́•„ë²„́§€', language: 'ko', transcription: '[a-beo-ji]', mean: 'cha, bá»‘', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́•„ë²„́§€ë” íŒ́‚¬́›́´́—́”.', example_vi: 'Bá»‘ tĂ´i lĂ  nhĂ¢n viĂªn cĂ´ng ty.', remembered: false },
                    { id: 'k013', word: '́–´ë¨¸ë‹ˆ', language: 'ko', transcription: '[eo-meo-ni]', mean: 'máº¹', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́–´ë¨¸ë‹ˆê°€ ́”ë¦¬ë¥¼ ́˜í•´́”.', example_vi: 'Máº¹ tĂ´i náº¥u Äƒn ráº¥t giá»i.', remembered: false },
                    { id: 'k014', word: 'í˜•', language: 'ko', transcription: '[hyeong]', mean: 'anh trai (ngÆ°á»i nam gá»i)', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'í˜•́´ í•œ ëª… ́ˆ́–´́”.', example_vi: 'TĂ´i cĂ³ má»™t anh trai.', remembered: false },
                    { id: 'k015', word: '́˜¤ë¹ ', language: 'ko', transcription: '[o-ppa]', mean: 'anh trai (ngÆ°á»i ná»¯ gá»i)', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́˜¤ë¹ ë” ëŒ€í•™́ƒ́´́—́”.', example_vi: 'Anh trai tĂ´i lĂ  sinh viĂªn Ä‘áº¡i há»c.', remembered: false },
                    { id: 'k016', word: '́–¸ë‹ˆ', language: 'ko', transcription: '[eon-ni]', mean: 'chá»‹ gĂ¡i (ngÆ°á»i ná»¯ gá»i)', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́–¸ë‹ˆê°€ ́”́¦˜ ë°”ë¹ ́”.', example_vi: 'Chá»‹ gĂ¡i tĂ´i dáº¡o nĂ y ráº¥t báº­n.', remembered: false },
                    { id: 'k017', word: 'ëˆ„ë‚˜', language: 'ko', transcription: '[nu-na]', mean: 'chá»‹ gĂ¡i (ngÆ°á»i nam gá»i)', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ëˆ„ë‚˜ë” ́„ ́ƒë‹˜́´́—́”.', example_vi: 'Chá»‹ gĂ¡i tĂ´i lĂ  giĂ¡o viĂªn.', remembered: false },
                    { id: 'k018', word: 'ë‚¨ë™́ƒ', language: 'ko', transcription: '[nam-dong-saeng]', mean: 'em trai', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë‚¨ë™́ƒ́´ ́´ˆë“±í•™́ƒ́´́—́”.', example_vi: 'Em trai tĂ´i há»c tiá»ƒu há»c.', remembered: false },
                    { id: 'k019', word: '́—¬ë™́ƒ', language: 'ko', transcription: '[yeo-dong-saeng]', mean: 'em gĂ¡i', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́—¬ë™́ƒ́´ ê·€́—¬́›Œ́”.', example_vi: 'Em gĂ¡i tĂ´i ráº¥t dá»… thÆ°Æ¡ng.', remembered: false },
                    { id: 'k020', word: 'í• ́•„ë²„́§€', language: 'ko', transcription: '[ha-ra-beo-ji]', mean: 'Ă´ng ná»™i/ngoáº¡i', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'í• ́•„ë²„́§€ë” ê±´ê°•í•˜́„¸́”.', example_vi: 'Ă”ng tĂ´i ráº¥t khá»e máº¡nh.', remembered: false },
                    { id: 'k021', word: 'í• ë¨¸ë‹ˆ', language: 'ko', transcription: '[hal-meo-ni]', mean: 'bĂ  ná»™i/ngoáº¡i', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'í• ë¨¸ë‹ˆ ëŒ́— ́́£¼ ê°€́”.', example_vi: 'TĂ´i thÆ°á»ng xuyĂªn Ä‘áº¿n nhĂ  bĂ .', remembered: false },
                    { id: 'k022', word: 'ë‚¨í¸', language: 'ko', transcription: '[nam-pyeon]', mean: 'chá»“ng', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë‚¨í¸́€ ́”ë¦¬́‚¬́˜ˆ́”.', example_vi: 'Chá»“ng tĂ´i lĂ  Ä‘áº§u báº¿p.', remembered: false },
                    { id: 'k023', word: '́•„ë‚´', language: 'ko', transcription: '[a-nae]', mean: 'vá»£', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́•„ë‚´ê°€ ́˜ˆë»́”.', example_vi: 'Vá»£ tĂ´i ráº¥t Ä‘áº¹p.', remembered: false },
                    { id: 'k024', word: '́•„ë“¤', language: 'ko', transcription: '[a-deul]', mean: 'con trai', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́•„ë“¤́´ ë‘ ëª… ́ˆ́–´́”.', example_vi: 'TĂ´i cĂ³ hai con trai.', remembered: false },
                    { id: 'k025', word: 'ë”¸', language: 'ko', transcription: '[ttal]', mean: 'con gĂ¡i', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë”¸́´ í”¼́•„ë…¸ë¥¼ ́³́”.', example_vi: 'Con gĂ¡i tĂ´i chÆ¡i Ä‘Ă n piano.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 3: Ä‚N Uá»NG â”€â”€â”€ */
            {
                id: 'topik-food',
                title: 'đŸ± Ä‚n uá»‘ng & Thá»±c pháº©m',
                description: 'Tá»« vá»±ng vá» Ä‘á»“ Äƒn, thá»©c uá»‘ng vĂ  cĂ¡c hoáº¡t Ä‘á»™ng Äƒn uá»‘ng',
                wordCount: 18,
                words: [
                    { id: 'k026', word: '́Œ́‹', language: 'ko', transcription: '[eum-sik]', mean: 'Ä‘á»“ Äƒn, thá»©c Äƒn', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'í•œêµ­ ́Œ́‹́„ ́¢‹́•„í•´́”.', example_vi: 'TĂ´i thĂ­ch Ä‘á»“ Äƒn HĂ n Quá»‘c.', remembered: false },
                    { id: 'k027', word: 'ë°¥', language: 'ko', transcription: '[bap]', mean: 'cÆ¡m, bá»¯a Äƒn', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë°¥́„ ë¨¹́—ˆ́–´́”.', example_vi: 'TĂ´i Ä‘Ă£ Äƒn cÆ¡m rá»“i.', remembered: false },
                    { id: 'k028', word: 'ë¬¼', language: 'ko', transcription: '[mul]', mean: 'nÆ°á»›c', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë¬¼ í•œ ́” ́£¼́„¸́”.', example_vi: 'Cho tĂ´i má»™t ly nÆ°á»›c.', remembered: false },
                    { id: 'k029', word: '́»¤í”¼', language: 'ko', transcription: '[keo-pi]', mean: 'cĂ  phĂª', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́»¤í”¼ë¥¼ ë§ˆ́…”́”.', example_vi: 'TĂ´i uá»‘ng cĂ  phĂª.', remembered: false },
                    { id: 'k030', word: 'ë¨¹ë‹¤', language: 'ko', transcription: '[meok-da]', mean: 'Äƒn', wordtype: 'ë™́‚¬ (Ä‘á»™ng tá»«)', example: '́•„́¹΅„ ë¨¹́—ˆ́–´́”?', example_vi: 'Báº¡n Ä‘Ă£ Äƒn sĂ¡ng chÆ°a?', remembered: false },
                    { id: 'k031', word: 'ë§ˆ́‹œë‹¤', language: 'ko', transcription: '[ma-si-da]', mean: 'uá»‘ng', wordtype: 'ë™́‚¬ (Ä‘á»™ng tá»«)', example: '́£¼́¤ë¥¼ ë§ˆ́…”́”.', example_vi: 'TĂ´i uá»‘ng nÆ°á»›c trĂ¡i cĂ¢y.', remembered: false },
                    { id: 'k032', word: 'ë§›́ˆë‹¤', language: 'ko', transcription: '[ma-sit-da]', mean: 'ngon', wordtype: 'í˜•́©́‚¬ (tĂ­nh tá»«)', example: '́´ ê¹€́¹˜ê°€ ë§›́ˆ́–´́”.', example_vi: 'Kimchi nĂ y ráº¥t ngon.', remembered: false },
                    { id: 'k033', word: 'ë§µë‹¤', language: 'ko', transcription: '[maep-da]', mean: 'cay', wordtype: 'í˜•́©́‚¬ (tĂ­nh tá»«)', example: '́´ ́Œ́‹́€ ë„ˆë¬´ ë§¤́›Œ́”.', example_vi: 'MĂ³n nĂ y quĂ¡ cay.', remembered: false },
                    { id: 'k034', word: 'ë‹¬ë‹¤', language: 'ko', transcription: '[dal-da]', mean: 'ngá»t', wordtype: 'í˜•́©́‚¬ (tĂ­nh tá»«)', example: '́´ ́¼€́´í¬ë” ë‹¬́•„́”.', example_vi: 'Chiáº¿c bĂ¡nh nĂ y ngá»t.', remembered: false },
                    { id: 'k035', word: '́‹ë‹¹', language: 'ko', transcription: '[sik-dang]', mean: 'nhĂ  hĂ ng, quĂ¡n Äƒn', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́‹ë‹¹́—́„œ ë°¥́„ ë¨¹́–´́”.', example_vi: 'TĂ´i Äƒn cÆ¡m á»Ÿ nhĂ  hĂ ng.', remembered: false },
                    { id: 'k036', word: 'ë©”ë‰´', language: 'ko', transcription: '[me-nyu]', mean: 'thá»±c Ä‘Æ¡n, menu', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë©”ë‰´ë¥¼ ë³´́—¬ ́£¼́„¸́”.', example_vi: 'Cho tĂ´i xem thá»±c Ä‘Æ¡n.', remembered: false },
                    { id: 'k037', word: '́£¼ë¬¸í•˜ë‹¤', language: 'ko', transcription: '[ju-mun-ha-da]', mean: 'gá»i mĂ³n, Ä‘áº·t hĂ ng', wordtype: 'ë™́‚¬ (Ä‘á»™ng tá»«)', example: 'ë­˜ ́£¼ë¬¸í•  ê±°́˜ˆ́”?', example_vi: 'Báº¡n sáº½ gá»i mĂ³n gĂ¬?', remembered: false },
                    { id: 'k038', word: 'ê³¼́¼', language: 'ko', transcription: '[gwa-il]', mean: 'trĂ¡i cĂ¢y', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ê³¼́¼́„ ë§́´ ë¨¹́–´́”.', example_vi: 'TĂ´i Äƒn nhiá»u trĂ¡i cĂ¢y.', remembered: false },
                    { id: 'k039', word: 'ê³ ê¸°', language: 'ko', transcription: '[go-gi]', mean: 'thá»‹t', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ê³ ê¸°ë¥¼ êµ¬́›Œ́”.', example_vi: 'TĂ´i nÆ°á»›ng thá»‹t.', remembered: false },
                    { id: 'k040', word: '́•¼́±„', language: 'ko', transcription: '[ya-chae]', mean: 'rau cá»§', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́•¼́±„ë¥¼ ë§́´ ë“œ́„¸́”.', example_vi: 'HĂ£y Äƒn nhiá»u rau vĂ o.', remembered: false },
                    { id: 'k041', word: '́•„́¹¨', language: 'ko', transcription: '[a-chim]', mean: 'buá»•i sĂ¡ng, bá»¯a sĂ¡ng', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́•„́¹΅„ ê¼­ ë¨¹́–´́”.', example_vi: 'TĂ´i nháº¥t Ä‘á»‹nh Äƒn sĂ¡ng.', remembered: false },
                    { id: 'k042', word: '́ ́‹¬', language: 'ko', transcription: '[jeom-sim]', mean: 'buá»•i trÆ°a, bá»¯a trÆ°a', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́ ́‹¬ ê°™́´ ë¨¹́–´́”.', example_vi: 'CĂ¹ng Äƒn trÆ°a nhĂ©.', remembered: false },
                    { id: 'k043', word: '́ €ë…', language: 'ko', transcription: '[jeo-nyeok]', mean: 'buá»•i tá»‘i, bá»¯a tá»‘i', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́ €ë…́— ë­ ë¨¹́„ê¹Œ́”?', example_vi: 'Tá»‘i nay Äƒn gĂ¬ nhá»‰?', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 4: Äá»A ÄIá»‚M & Vá» TRĂ â”€â”€â”€ */
            {
                id: 'topik-place',
                title: 'đŸ“ Äá»‹a Ä‘iá»ƒm & Vá»‹ trĂ­',
                description: 'Tá»« vá»±ng vá» cĂ¡c Ä‘á»‹a Ä‘iá»ƒm trong thĂ nh phá»‘ vĂ  cĂ¡ch diá»…n Ä‘áº¡t vá»‹ trĂ­',
                wordCount: 16,
                words: [
                    { id: 'k044', word: 'í•™êµ', language: 'ko', transcription: '[hak-gyo]', mean: 'trÆ°á»ng há»c', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'í•™êµ́— ê±¸́–´ê°€́”.', example_vi: 'TĂ´i Ä‘i bá»™ Ä‘áº¿n trÆ°á»ng.', remembered: false },
                    { id: 'k045', word: 'ë³‘́›', language: 'ko', transcription: '[byeong-won]', mean: 'bá»‡nh viá»‡n', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë³‘́›́— ê°€́•¼ í•´́”.', example_vi: 'TĂ´i pháº£i Ä‘áº¿n bá»‡nh viá»‡n.', remembered: false },
                    { id: 'k046', word: '́€í–‰', language: 'ko', transcription: '[eun-haeng]', mean: 'ngĂ¢n hĂ ng', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́€í–‰́´ ́–´ë””́— ́ˆ́–´́”?', example_vi: 'NgĂ¢n hĂ ng á»Ÿ Ä‘Ă¢u váº­y?', remembered: false },
                    { id: 'k047', word: 'í¸́˜́ ', language: 'ko', transcription: '[pyeo-ni-jeom]', mean: 'cá»­a hĂ ng tiá»‡n lá»£i', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'í¸́˜́ ́—́„œ ë¹µ́„ ́ƒ€́–´́”.', example_vi: 'TĂ´i Ä‘Ă£ mua bĂ¡nh mĂ¬ á»Ÿ cá»­a hĂ ng tiá»‡n lá»£i.', remembered: false },
                    { id: 'k048', word: 'ë§ˆí¸', language: 'ko', transcription: '[ma-teu]', mean: 'siĂªu thá»‹', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë§ˆí¸́— ́¥ ë³´ëŸ¬ ê°€́”.', example_vi: 'TĂ´i Ä‘i siĂªu thá»‹ mua Ä‘á»“.', remembered: false },
                    { id: 'k049', word: 'ê³µ́›', language: 'ko', transcription: '[gong-won]', mean: 'cĂ´ng viĂªn', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ê³µ́›́—́„œ ́‚°́±…í•´́”.', example_vi: 'TĂ´i Ä‘i dáº¡o á»Ÿ cĂ´ng viĂªn.', remembered: false },
                    { id: 'k050', word: 'ë„́„œê´€', language: 'ko', transcription: '[do-seo-gwan]', mean: 'thÆ° viá»‡n', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë„́„œê´€́—́„œ ê³µë¶€í•´́”.', example_vi: 'TĂ´i há»c á»Ÿ thÆ° viá»‡n.', remembered: false },
                    { id: 'k051', word: '́¹´í˜', language: 'ko', transcription: '[ka-pe]', mean: 'quĂ¡n cĂ  phĂª', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́¹´í˜́—́„œ ́»¤í”¼ë¥¼ ë§ˆ́…”́”.', example_vi: 'TĂ´i uá»‘ng cĂ  phĂª á»Ÿ quĂ¡n cĂ  phĂª.', remembered: false },
                    { id: 'k052', word: '́•', language: 'ko', transcription: '[ap]', mean: 'phĂ­a trÆ°á»›c, trÆ°á»›c máº·t', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'í•™êµ ́•́— ́ˆ́–´́”.', example_vi: 'TĂ´i Ä‘á»©ng trÆ°á»›c trÆ°á»ng há»c.', remembered: false },
                    { id: 'k053', word: 'ë’¤', language: 'ko', transcription: '[dwi]', mean: 'phĂ­a sau', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ê±´ë¬¼ ë’¤́— ́£¼́°΅¥́´ ́ˆ́–´́”.', example_vi: 'CĂ³ bĂ£i Ä‘á»— xe phĂ­a sau tĂ²a nhĂ .', remembered: false },
                    { id: 'k054', word: '́˜†', language: 'ko', transcription: '[yeop]', mean: 'bĂªn cáº¡nh', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́¹´í˜ ́˜†́— ́•½êµ­́´ ́ˆ́–´́”.', example_vi: 'BĂªn cáº¡nh quĂ¡n cĂ  phĂª cĂ³ nhĂ  thuá»‘c.', remembered: false },
                    { id: 'k055', word: '́œ„', language: 'ko', transcription: '[wi]', mean: 'phĂ­a trĂªn, trĂªn', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́±…́ƒ ́œ„́— ́±…́´ ́ˆ́–´́”.', example_vi: 'TrĂªn bĂ n cĂ³ sĂ¡ch.', remembered: false },
                    { id: 'k056', word: '́•„ë˜', language: 'ko', transcription: '[a-rae]', mean: 'phĂ­a dÆ°á»›i, dÆ°á»›i', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́¹¨ëŒ€ ́•„ë˜́— ́ˆ́–´́”.', example_vi: 'NĂ³ á»Ÿ dÆ°á»›i gáº§m giÆ°á»ng.', remembered: false },
                    { id: 'k057', word: '́˜¤ë¥¸́ª½', language: 'ko', transcription: '[o-reun-jjok]', mean: 'bĂªn pháº£i', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́˜¤ë¥¸́ª½́œ¼ë¡œ ê°€́„¸́”.', example_vi: 'HĂ£y Ä‘i vá» phĂ­a bĂªn pháº£i.', remembered: false },
                    { id: 'k058', word: '́™¼́ª½', language: 'ko', transcription: '[wen-jjok]', mean: 'bĂªn trĂ¡i', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́™¼́ª½ ë¬¸́œ¼ë¡œ ë“¤́–´ê°€́„¸́”.', example_vi: 'HĂ£y vĂ o cá»­a bĂªn trĂ¡i.', remembered: false },
                    { id: 'k059', word: 'ê·¼́²˜', language: 'ko', transcription: '[geun-cheo]', mean: 'gáº§n, lĂ¢n cáº­n', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́´ ê·¼́²˜́— ́§€í•˜́² ́—­́´ ́ˆ́–´́”?', example_vi: 'Gáº§n Ä‘Ă¢y cĂ³ ga tĂ u Ä‘iá»‡n ngáº§m khĂ´ng?', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 5: GIAO THĂ”NG â”€â”€â”€ */
            {
                id: 'topik-transport',
                title: 'đŸŒ Giao thĂ´ng & Di chuyá»ƒn',
                description: 'Tá»« vá»±ng vá» cĂ¡c phÆ°Æ¡ng tiá»‡n giao thĂ´ng vĂ  cĂ¡ch di chuyá»ƒn',
                wordCount: 14,
                words: [
                    { id: 'k060', word: 'ë²„́¤', language: 'ko', transcription: '[beo-seu]', mean: 'xe buĂ½t', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë²„́¤ë¥¼ íƒ€́”.', example_vi: 'TĂ´i Ä‘i xe buĂ½t.', remembered: false },
                    { id: 'k061', word: '́§€í•˜́² ', language: 'ko', transcription: '[ji-ha-cheol]', mean: 'tĂ u Ä‘iá»‡n ngáº§m, metro', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́§€í•˜́² ́´ ë¹¨ë¼́”.', example_vi: 'TĂ u Ä‘iá»‡n ngáº§m ráº¥t nhanh.', remembered: false },
                    { id: 'k062', word: 'íƒ́‹œ', language: 'ko', transcription: '[taek-si]', mean: 'taxi', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'íƒ́‹œë¥¼ ë¶ˆë €́–´́”.', example_vi: 'TĂ´i Ä‘Ă£ gá»i taxi.', remembered: false },
                    { id: 'k063', word: 'ê¸°́°¨', language: 'ko', transcription: '[gi-cha]', mean: 'tĂ u há»a', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ê¸°́°¨ë¥¼ íƒ€ê³  ë¶€́‚°́— ê°€́”.', example_vi: 'TĂ´i Ä‘i tĂ u Ä‘áº¿n Busan.', remembered: false },
                    { id: 'k064', word: 'ë¹„í–‰ê¸°', language: 'ko', transcription: '[bi-haeng-gi]', mean: 'mĂ¡y bay', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë¹„í–‰ê¸° í‘œë¥¼ ́ƒ€́–´́”.', example_vi: 'TĂ´i Ä‘Ă£ mua vĂ© mĂ¡y bay.', remembered: false },
                    { id: 'k065', word: '́ë™́°¨', language: 'ko', transcription: '[ja-dong-cha]', mean: 'Ă´ tĂ´, xe hÆ¡i', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́ë™́°¨ë¡œ ́¶œê·¼í•´́”.', example_vi: 'TĂ´i Ä‘i lĂ m báº±ng Ă´ tĂ´.', remembered: false },
                    { id: 'k066', word: 'íƒ€ë‹¤', language: 'ko', transcription: '[ta-da]', mean: 'Ä‘i (phÆ°Æ¡ng tiá»‡n), leo lĂªn', wordtype: 'ë™́‚¬ (Ä‘á»™ng tá»«)', example: 'ë²„́¤ë¥¼ íƒ€ê³  ê°€́”.', example_vi: 'TĂ´i Ä‘i xe buĂ½t Ä‘áº¿n Ä‘Ă³.', remembered: false },
                    { id: 'k067', word: 'ë‚´ë¦¬ë‹¤', language: 'ko', transcription: '[nae-ri-da]', mean: 'xuá»‘ng (phÆ°Æ¡ng tiá»‡n)', wordtype: 'ë™́‚¬ (Ä‘á»™ng tá»«)', example: 'ë‹¤́Œ ́—­́—́„œ ë‚´ë ¤́”.', example_vi: 'TĂ´i xuá»‘ng á»Ÿ ga tiáº¿p theo.', remembered: false },
                    { id: 'k068', word: '́—­', language: 'ko', transcription: '[yeok]', mean: 'ga (tĂ u Ä‘iá»‡n ngáº§m/tĂ u há»a)', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ê°•ë‚΅—­́—́„œ ë§Œë‚˜́”.', example_vi: 'Gáº·p nhau á»Ÿ ga Gangnam nhĂ©.', remembered: false },
                    { id: 'k069', word: '́ •ë¥˜́¥', language: 'ko', transcription: '[jeong-nyu-jang]', mean: 'báº¿n xe buĂ½t, Ä‘iá»ƒm dá»«ng', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́ •ë¥˜́¥́—́„œ ê¸°ë‹¤ë ¤́”.', example_vi: 'TĂ´i Ä‘á»£i á»Ÿ báº¿n xe buĂ½t.', remembered: false },
                    { id: 'k070', word: 'ê±·ë‹¤', language: 'ko', transcription: '[geot-da]', mean: 'Ä‘i bá»™', wordtype: 'ë™́‚¬ (Ä‘á»™ng tá»«)', example: '́§‘ê¹Œ́§€ ê±¸́–´ê°€́”.', example_vi: 'TĂ´i Ä‘i bá»™ vá» nhĂ .', remembered: false },
                    { id: 'k071', word: '́¶œë°œí•˜ë‹¤', language: 'ko', transcription: '[chul-bal-ha-da]', mean: 'khá»Ÿi hĂ nh, xuáº¥t phĂ¡t', wordtype: 'ë™́‚¬ (Ä‘á»™ng tá»«)', example: 'ëª‡ ́‹œ́— ́¶œë°œí•´́”?', example_vi: 'Máº¥y giá» khá»Ÿi hĂ nh?', remembered: false },
                    { id: 'k072', word: 'ë„́°©í•˜ë‹¤', language: 'ko', transcription: '[do-cha-ka-da]', mean: 'Ä‘áº¿n nÆ¡i, Ä‘áº¿n chá»—', wordtype: 'ë™́‚¬ (Ä‘á»™ng tá»«)', example: '́„œ́¸́— ë„́°©í–ˆ́–´́”.', example_vi: 'TĂ´i Ä‘Ă£ Ä‘áº¿n Seoul rá»“i.', remembered: false },
                    { id: 'k073', word: 'ê³µí•­', language: 'ko', transcription: '[gong-hang]', mean: 'sĂ¢n bay', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ê³µí•­́— ë§ˆ́¤‘ ë‚˜ê°”́–´́”.', example_vi: 'TĂ´i ra sĂ¢n bay Ä‘Ă³n.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 6: THá»œI TIáº¾T â”€â”€â”€ */
            {
                id: 'topik-weather',
                title: 'đŸŒ¤ï¸ Thá»i tiáº¿t & MĂ¹a',
                description: 'Tá»« vá»±ng vá» thá»i tiáº¿t, khĂ­ háº­u vĂ  bá»‘n mĂ¹a trong nÄƒm',
                wordCount: 15,
                words: [
                    { id: 'k074', word: 'ë‚ ́”¨', language: 'ko', transcription: '[nal-ssi]', mean: 'thá»i tiáº¿t', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́˜¤ë˜ ë‚ ́”¨ê°€ ́¢‹́•„́”.', example_vi: 'Thá»i tiáº¿t hĂ´m nay Ä‘áº¹p.', remembered: false },
                    { id: 'k075', word: 'ë´„', language: 'ko', transcription: '[bom]', mean: 'mĂ¹a xuĂ¢n', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë´„́— ê½ƒ́´ í´́”.', example_vi: 'VĂ o mĂ¹a xuĂ¢n hoa ná»Ÿ.', remembered: false },
                    { id: 'k076', word: '́—¬ë¦„', language: 'ko', transcription: '[yeo-reum]', mean: 'mĂ¹a hĂ¨', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́—¬ë¦„́— ë°”ë‹¤́— ê°€́”.', example_vi: 'MĂ¹a hĂ¨ tĂ´i Ä‘i biá»ƒn.', remembered: false },
                    { id: 'k077', word: 'ê°€́„', language: 'ko', transcription: '[ga-eul]', mean: 'mĂ¹a thu', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ê°€́„ í•˜ë˜́´ ́˜ˆë»́”.', example_vi: 'Báº§u trá»i mĂ¹a thu Ä‘áº¹p láº¯m.', remembered: false },
                    { id: 'k078', word: 'ê²΅¸', language: 'ko', transcription: '[gyeo-ul]', mean: 'mĂ¹a Ä‘Ă´ng', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ê²΅¸́— ëˆˆ́´ ́™€́”.', example_vi: 'MĂ¹a Ä‘Ă´ng cĂ³ tuyáº¿t rÆ¡i.', remembered: false },
                    { id: 'k079', word: 'ë¹„', language: 'ko', transcription: '[bi]', mean: 'mÆ°a', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë¹„ê°€ ë§́´ ́™€́”.', example_vi: 'Trá»i mÆ°a to láº¯m.', remembered: false },
                    { id: 'k080', word: 'ëˆˆ', language: 'ko', transcription: '[nun]', mean: 'tuyáº¿t', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ëˆˆ́´ ́™”́–´́”.', example_vi: 'Tuyáº¿t Ä‘Ă£ rÆ¡i rá»“i.', remembered: false },
                    { id: 'k081', word: 'ë°”ëŒ', language: 'ko', transcription: '[ba-ram]', mean: 'giĂ³', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë°”ëŒ́´ ë§́´ ë¶ˆ́–´́”.', example_vi: 'GiĂ³ thá»•i ráº¥t máº¡nh.', remembered: false },
                    { id: 'k082', word: 'ë¥ë‹¤', language: 'ko', transcription: '[deop-da]', mean: 'nĂ³ng, oi bá»©c', wordtype: 'í˜•́©́‚¬ (tĂ­nh tá»«)', example: '́˜¤ë˜ ë„ˆë¬´ ë”́›Œ́”.', example_vi: 'HĂ´m nay quĂ¡ nĂ³ng.', remembered: false },
                    { id: 'k083', word: '́¶¥ë‹¤', language: 'ko', transcription: '[chup-da]', mean: 'láº¡nh', wordtype: 'í˜•́©́‚¬ (tĂ­nh tá»«)', example: 'ê²΅¸́—ë” ë„ˆë¬´ ́¶”́›Œ́”.', example_vi: 'MĂ¹a Ä‘Ă´ng láº¡nh quĂ¡.', remembered: false },
                    { id: 'k084', word: 'ë”°ëœ»í•˜ë‹¤', language: 'ko', transcription: '[tta-tteut-ha-da]', mean: 'áº¥m Ă¡p', wordtype: 'í˜•́©́‚¬ (tĂ­nh tá»«)', example: 'ë´„́€ ë”°ëœ»í•´́”.', example_vi: 'MĂ¹a xuĂ¢n thĂ¬ áº¥m Ă¡p.', remembered: false },
                    { id: 'k085', word: '́‹œ́›í•˜ë‹¤', language: 'ko', transcription: '[si-won-ha-da]', mean: 'mĂ¡t máº», thoĂ¡ng mĂ¡t', wordtype: 'í˜•́©́‚¬ (tĂ­nh tá»«)', example: 'ë°”ëŒ́´ ́‹œ́›í•´́”.', example_vi: 'GiĂ³ mĂ¡t quĂ¡.', remembered: false },
                    { id: 'k086', word: 'íë¦¬ë‹¤', language: 'ko', transcription: '[heu-ri-da]', mean: 'Ă¢m u, nhiá»u mĂ¢y', wordtype: 'í˜•́©́‚¬ (tĂ­nh tá»«)', example: '́˜¤ë˜́€ ë‚ ́”¨ê°€ íë ¤́”.', example_vi: 'HĂ´m nay trá»i Ă¢m u.', remembered: false },
                    { id: 'k087', word: 'ë§‘ë‹¤', language: 'ko', transcription: '[mak-da]', mean: 'trong xanh, quang Ä‘Ă£ng', wordtype: 'í˜•́©́‚¬ (tĂ­nh tá»«)', example: 'í•˜ë˜́´ ë§‘́•„́”.', example_vi: 'Báº§u trá»i trong xanh.', remembered: false },
                    { id: 'k088', word: '́°́‚°', language: 'ko', transcription: '[u-san]', mean: 'Ă´, dĂ¹ (che mÆ°a)', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́°́‚°́„ ê°€́ ¸ê°€́„¸́”.', example_vi: 'HĂ£y mang theo Ă´ Ä‘i.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 7: THá»œI GIAN & NGĂ€Y THĂNG â”€â”€â”€ */
            {
                id: 'topik-time',
                title: 'đŸ• Thá»i gian & NgĂ y thĂ¡ng',
                description: 'Tá»« vá»±ng vá» thá»i gian, ngĂ y trong tuáº§n vĂ  thĂ¡ng trong nÄƒm',
                wordCount: 17,
                words: [
                    { id: 'k089', word: '́˜¤ë˜', language: 'ko', transcription: '[o-neul]', mean: 'hĂ´m nay', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́˜¤ë˜ ë‚ ́”¨ê°€ ́¢‹́•„́”.', example_vi: 'HĂ´m nay thá»i tiáº¿t Ä‘áº¹p.', remembered: false },
                    { id: 'k090', word: 'ë‚´́¼', language: 'ko', transcription: '[nae-il]', mean: 'ngĂ y mai', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë‚´́¼ ë§Œë‚˜́”.', example_vi: 'NgĂ y mai gáº·p nhĂ©.', remembered: false },
                    { id: 'k091', word: '́–´́ œ', language: 'ko', transcription: '[eo-je]', mean: 'hĂ´m qua', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́–´́ œ ́˜í™”ë¥¼ ë´¤́–´́”.', example_vi: 'HĂ´m qua tĂ´i Ä‘Ă£ xem phim.', remembered: false },
                    { id: 'k092', word: '́§€ê¸ˆ', language: 'ko', transcription: '[ji-geum]', mean: 'bĂ¢y giá», hiá»‡n táº¡i', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́§€ê¸ˆ ́–´ë””́— ́ˆ́–´́”?', example_vi: 'BĂ¢y giá» báº¡n Ä‘ang á»Ÿ Ä‘Ă¢u?', remembered: false },
                    { id: 'k093', word: '́‹œê°„', language: 'ko', transcription: '[si-gan]', mean: 'giá», thá»i gian', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́‹œê°„́´ ́—†́–´́”.', example_vi: 'TĂ´i khĂ´ng cĂ³ thá»i gian.', remembered: false },
                    { id: 'k094', word: 'ë¶„', language: 'ko', transcription: '[bun]', mean: 'phĂºt', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '10ë¶„ë§Œ ê¸°ë‹¤ë ¤́”.', example_vi: 'Chá» 10 phĂºt thĂ´i.', remembered: false },
                    { id: 'k095', word: '́›”́”́¼', language: 'ko', transcription: '[wo-ryo-il]', mean: 'thá»© Hai', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́›”́”́¼́— ́ˆ˜́—…́´ ́ˆ́–´́”.', example_vi: 'Thá»© Hai tĂ´i cĂ³ lá»›p há»c.', remembered: false },
                    { id: 'k096', word: '́ˆ˜́”́¼', language: 'ko', transcription: '[su-yo-il]', mean: 'thá»© TÆ°', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́ˆ˜́”́¼́— ́´ë™í•´́”.', example_vi: 'Thá»© TÆ° tĂ´i táº­p thá»ƒ dá»¥c.', remembered: false },
                    { id: 'k097', word: 'ê¸ˆ́”́¼', language: 'ko', transcription: '[geum-yo-il]', mean: 'thá»© SĂ¡u', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ê¸ˆ́”́¼́„ ́¢‹́•„í•´́”.', example_vi: 'TĂ´i thĂ­ch thá»© SĂ¡u.', remembered: false },
                    { id: 'k098', word: '́£¼ë§', language: 'ko', transcription: '[ju-mal]', mean: 'cuá»‘i tuáº§n', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́£¼ë§́— ë­ í•  ê±°́˜ˆ́”?', example_vi: 'Cuá»‘i tuáº§n báº¡n lĂ m gĂ¬?', remembered: false },
                    { id: 'k099', word: '́¼', language: 'ko', transcription: '[il]', mean: 'ngĂ y (trong thĂ¡ng)', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́˜¤ë˜́€ 3́›” 15́¼́´́—́”.', example_vi: 'HĂ´m nay lĂ  ngĂ y 15 thĂ¡ng 3.', remembered: false },
                    { id: 'k100', word: '́›”', language: 'ko', transcription: '[wol]', mean: 'thĂ¡ng', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́´ë²ˆ ë‹¬́€ ëª‡ ́›”́´́—́”?', example_vi: 'ThĂ¡ng nĂ y lĂ  thĂ¡ng máº¥y?', remembered: false },
                    { id: 'k101', word: 'ë…„', language: 'ko', transcription: '[nyeon]', mean: 'nÄƒm', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́˜¬í•´ë” 2025ë…„́´́—́”.', example_vi: 'NÄƒm nay lĂ  nÄƒm 2025.', remembered: false },
                    { id: 'k102', word: '́ „', language: 'ko', transcription: '[jeon]', mean: 'trÆ°á»›c, trÆ°á»›c Ä‘Ă¢y', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '30ë¶„ ́ „́— ́™”́–´́”.', example_vi: 'TĂ´i Ä‘áº¿n 30 phĂºt trÆ°á»›c.', remembered: false },
                    { id: 'k103', word: 'í›„', language: 'ko', transcription: '[hu]', mean: 'sau, sau nĂ y', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'í•œ ́‹œê°„ í›„́— ́¶œë°œí•´́”.', example_vi: 'Má»™t tiáº¿ng sau sáº½ khá»Ÿi hĂ nh.', remembered: false },
                    { id: 'k104', word: 'ë§¤́¼', language: 'ko', transcription: '[mae-il]', mean: 'má»—i ngĂ y, hĂ ng ngĂ y', wordtype: 'ë¶€́‚¬ (tráº¡ng tá»«)', example: 'ë§¤́¼ ́´ë™í•´́”.', example_vi: 'TĂ´i táº­p thá»ƒ dá»¥c má»—i ngĂ y.', remembered: false },
                    { id: 'k105', word: '́́£¼', language: 'ko', transcription: '[ja-ju]', mean: 'thÆ°á»ng xuyĂªn, hay', wordtype: 'ë¶€́‚¬ (tráº¡ng tá»«)', example: '́́£¼ ́—¬ê¸° ́™€́”?', example_vi: 'Báº¡n cĂ³ hay Ä‘áº¿n Ä‘Ă¢y khĂ´ng?', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 8: MUA Sáº®M â”€â”€â”€ */
            {
                id: 'topik-shopping',
                title: 'đŸ›ï¸ Mua sáº¯m & Tiá»n tá»‡',
                description: 'Tá»« vá»±ng vá» mua sáº¯m, giĂ¡ cáº£ vĂ  thanh toĂ¡n',
                wordCount: 13,
                words: [
                    { id: 'k106', word: 'ê°€ê²Œ', language: 'ko', transcription: '[ga-ge]', mean: 'cá»­a hĂ ng, tiá»‡m', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́‘́€ ê°€ê²Œë¥¼ ́—´́—ˆ́–´́”.', example_vi: 'TĂ´i Ä‘Ă£ má»Ÿ má»™t cá»­a hĂ ng nhá».', remembered: false },
                    { id: 'k107', word: '́‚¬ë‹¤', language: 'ko', transcription: '[sa-da]', mean: 'mua', wordtype: 'ë™́‚¬ (Ä‘á»™ng tá»«)', example: '́˜·́„ ́ƒ€́–´́”.', example_vi: 'TĂ´i Ä‘Ă£ mua quáº§n Ă¡o.', remembered: false },
                    { id: 'k108', word: 'íŒ”ë‹¤', language: 'ko', transcription: '[pal-da]', mean: 'bĂ¡n', wordtype: 'ë™́‚¬ (Ä‘á»™ng tá»«)', example: 'ë¬¼ê±´́„ íŒ”́•„́”.', example_vi: 'TĂ´i bĂ¡n hĂ ng.', remembered: false },
                    { id: 'k109', word: 'ëˆ', language: 'ko', transcription: '[don]', mean: 'tiá»n', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ëˆ́´ ́—†́–´́”.', example_vi: 'TĂ´i khĂ´ng cĂ³ tiá»n.', remembered: false },
                    { id: 'k110', word: 'ê°€ê²©', language: 'ko', transcription: '[ga-gyeok]', mean: 'giĂ¡ cáº£', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ê°€ê²©́´ ́–¼ë§ˆ́˜ˆ́”?', example_vi: 'GiĂ¡ lĂ  bao nhiĂªu?', remembered: false },
                    { id: 'k111', word: 'ë¹„́‹¸ë‹¤', language: 'ko', transcription: '[bi-ssa-da]', mean: 'Ä‘áº¯t, Ä‘áº¯t tiá»n', wordtype: 'í˜•́©́‚¬ (tĂ­nh tá»«)', example: '́´ê²Œ ë„ˆë¬´ ë¹„́‹¸́”.', example_vi: 'CĂ¡i nĂ y quĂ¡ Ä‘áº¯t.', remembered: false },
                    { id: 'k112', word: '́‹¸ë‹¤', language: 'ko', transcription: '[ssa-da]', mean: 'ráº», ráº» tiá»n', wordtype: 'í˜•́©́‚¬ (tĂ­nh tá»«)', example: '́—¬ê¸°ë” ́‹¸ê³  ë§›́ˆ́–´́”.', example_vi: 'Chá»— nĂ y ráº» mĂ  ngon.', remembered: false },
                    { id: 'k113', word: 'í• ́¸', language: 'ko', transcription: '[ha-rin]', mean: 'giáº£m giĂ¡, chiáº¿t kháº¥u', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'í• ́¸́´ ́ˆ́–´́”?', example_vi: 'CĂ³ giáº£m giĂ¡ khĂ´ng?', remembered: false },
                    { id: 'k114', word: '́˜́ˆ˜́¦', language: 'ko', transcription: '[yeong-su-jeung]', mean: 'hĂ³a Ä‘Æ¡n, biĂªn lai', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́˜́ˆ˜́¦ ́£¼́„¸́”.', example_vi: 'Cho tĂ´i xin hĂ³a Ä‘Æ¡n.', remembered: false },
                    { id: 'k115', word: '́¹´ë“œ', language: 'ko', transcription: '[ka-deu]', mean: 'tháº» (ngĂ¢n hĂ ng, tĂ­n dá»¥ng)', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́¹´ë“œë¡œ ê²°́ œí•´́”.', example_vi: 'TĂ´i thanh toĂ¡n báº±ng tháº».', remembered: false },
                    { id: 'k116', word: 'í˜„ê¸ˆ', language: 'ko', transcription: '[hyeon-geum]', mean: 'tiá»n máº·t', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'í˜„ê¸ˆ́œ¼ë¡œ ë‚¼ê²Œ́”.', example_vi: 'TĂ´i sáº½ tráº£ báº±ng tiá»n máº·t.', remembered: false },
                    { id: 'k117', word: 'í¬ë‹¤', language: 'ko', transcription: '[keu-da]', mean: 'to, lá»›n', wordtype: 'í˜•́©́‚¬ (tĂ­nh tá»«)', example: '́´ ́‚¬́´́¦ˆê°€ ë„ˆë¬´ ́»¤́”.', example_vi: 'Size nĂ y quĂ¡ to.', remembered: false },
                    { id: 'k118', word: '́‘ë‹¤', language: 'ko', transcription: '[jak-da]', mean: 'nhá», bĂ©', wordtype: 'í˜•́©́‚¬ (tĂ­nh tá»«)', example: '́¢€ ë” ́‘́€ ê±¸ ë³´́—¬ ́£¼́„¸́”.', example_vi: 'Cho tĂ´i xem cĂ¡i nhá» hÆ¡n.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 9: Sá»¨C KHá»E & CÆ  THá»‚ â”€â”€â”€ */
            {
                id: 'topik-health',
                title: 'đŸ¥ Sá»©c khá»e & CÆ¡ thá»ƒ',
                description: 'Tá»« vá»±ng vá» cĂ¡c bá»™ pháº­n cÆ¡ thá»ƒ, bá»‡nh táº­t vĂ  chÄƒm sĂ³c sá»©c khá»e',
                wordCount: 16,
                words: [
                    { id: 'k119', word: 'ëª¸', language: 'ko', transcription: '[mom]', mean: 'cÆ¡ thá»ƒ, thĂ¢n ngÆ°á»i', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ëª¸́´ ́•„íŒŒ́”.', example_vi: 'TĂ´i bá»‹ Ä‘au ngÆ°á»i.', remembered: false },
                    { id: 'k120', word: 'ë¨¸ë¦¬', language: 'ko', transcription: '[meo-ri]', mean: 'Ä‘áº§u, tĂ³c', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë¨¸ë¦¬ê°€ ́•„íŒŒ́”.', example_vi: 'TĂ´i bá»‹ Ä‘au Ä‘áº§u.', remembered: false },
                    { id: 'k121', word: 'ëˆˆ', language: 'ko', transcription: '[nun]', mean: 'máº¯t', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ëˆˆ́´ ë‚˜ë¹ ́”.', example_vi: 'Máº¯t tĂ´i kĂ©m.', remembered: false },
                    { id: 'k122', word: '́½”', language: 'ko', transcription: '[ko]', mean: 'mÅ©i', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́½”ê°€ ë§‰í˜€́”.', example_vi: 'MÅ©i tĂ´i bá»‹ ngháº¹t.', remembered: false },
                    { id: 'k123', word: '́…', language: 'ko', transcription: '[ip]', mean: 'miá»‡ng', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́…́´ ́‘́•„́”.', example_vi: 'Miá»‡ng tĂ´i nhá».', remembered: false },
                    { id: 'k124', word: '́†', language: 'ko', transcription: '[son]', mean: 'tay (bĂ n tay)', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́†́„ ́”»́œ¼́„¸́”.', example_vi: 'HĂ£y rá»­a tay Ä‘i.', remembered: false },
                    { id: 'k125', word: 'ë°œ', language: 'ko', transcription: '[bal]', mean: 'chĂ¢n (bĂ n chĂ¢n)', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë°œ́´ ́•„íŒŒ́”.', example_vi: 'ChĂ¢n tĂ´i bá»‹ Ä‘au.', remembered: false },
                    { id: 'k126', word: '́•„í”„ë‹¤', language: 'ko', transcription: '[a-peu-da]', mean: 'Ä‘au, á»‘m', wordtype: 'í˜•́©́‚¬ (tĂ­nh tá»«)', example: 'ë°°ê°€ ́•„íŒŒ́”.', example_vi: 'TĂ´i bá»‹ Ä‘au bá»¥ng.', remembered: false },
                    { id: 'k127', word: '́—´', language: 'ko', transcription: '[yeol]', mean: 'sá»‘t, nhiá»‡t', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́—´́´ ë‚˜́”.', example_vi: 'TĂ´i bá»‹ sá»‘t.', remembered: false },
                    { id: 'k128', word: 'ê¸°́¹¨', language: 'ko', transcription: '[gi-chim]', mean: 'ho', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ê¸°́¹΅´ ́‹¬í•´́”.', example_vi: 'TĂ´i ho náº·ng láº¯m.', remembered: false },
                    { id: 'k129', word: '́•½', language: 'ko', transcription: '[yak]', mean: 'thuá»‘c', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́•½́„ ë¨¹́—ˆ́–´́”.', example_vi: 'TĂ´i Ä‘Ă£ uá»‘ng thuá»‘c rá»“i.', remembered: false },
                    { id: 'k130', word: '́•½êµ­', language: 'ko', transcription: '[yak-guk]', mean: 'nhĂ  thuá»‘c', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́•½êµ­́—́„œ ́•½́„ ́ƒ€́–´́”.', example_vi: 'TĂ´i Ä‘Ă£ mua thuá»‘c á»Ÿ nhĂ  thuá»‘c.', remembered: false },
                    { id: 'k131', word: 'ê±´ê°•í•˜ë‹¤', language: 'ko', transcription: '[geon-gang-ha-da]', mean: 'khá»e máº¡nh', wordtype: 'í˜•́©́‚¬ (tĂ­nh tá»«)', example: 'í• ́•„ë²„́§€ë” ê±´ê°•í•´́”.', example_vi: 'Ă”ng tĂ´i ráº¥t khá»e máº¡nh.', remembered: false },
                    { id: 'k132', word: '́‰¬ë‹¤', language: 'ko', transcription: '[swi-da]', mean: 'nghá»‰ ngÆ¡i', wordtype: 'ë™́‚¬ (Ä‘á»™ng tá»«)', example: '́§‘́—́„œ ́‰¬́—ˆ́–´́”.', example_vi: 'TĂ´i Ä‘Ă£ nghá»‰ ngÆ¡i á»Ÿ nhĂ .', remembered: false },
                    { id: 'k133', word: '́´ë™í•˜ë‹¤', language: 'ko', transcription: '[un-dong-ha-da]', mean: 'táº­p thá»ƒ dá»¥c, váº­n Ä‘á»™ng', wordtype: 'ë™́‚¬ (Ä‘á»™ng tá»«)', example: 'ë§¤́¼ ́´ë™í•´́”.', example_vi: 'TĂ´i táº­p thá»ƒ dá»¥c má»—i ngĂ y.', remembered: false },
                    { id: 'k134', word: 'ê°ê¸°', language: 'ko', transcription: '[gam-gi]', mean: 'cáº£m cĂºm', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ê°ê¸°́— ê±¸ë ¸́–´́”.', example_vi: 'TĂ´i bá»‹ cáº£m cĂºm rá»“i.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 10: Cáº¢M XĂC & TRáº NG THĂI â”€â”€â”€ */
            {
                id: 'topik-emotion',
                title: 'đŸ˜ Cáº£m xĂºc & Tráº¡ng thĂ¡i',
                description: 'Tá»« vá»±ng diá»…n Ä‘áº¡t cáº£m xĂºc, tráº¡ng thĂ¡i tĂ¢m lĂ½ vĂ  tĂ­nh cĂ¡ch',
                wordCount: 14,
                words: [
                    { id: 'k135', word: 'ê¸°́˜ë‹¤', language: 'ko', transcription: '[gi-ppeu-da]', mean: 'vui má»«ng, sung sÆ°á»›ng', wordtype: 'í˜•́©́‚¬ (tĂ­nh tá»«)', example: '́˜¤ë˜ ́ •ë§ ê¸°ë»́”.', example_vi: 'HĂ´m nay tĂ´i tháº­t vui.', remembered: false },
                    { id: 'k136', word: '́¬í”„ë‹¤', language: 'ko', transcription: '[seul-peu-da]', mean: 'buá»“n', wordtype: 'í˜•́©́‚¬ (tĂ­nh tá»«)', example: '́˜í™”ê°€ ́¬í¼́”.', example_vi: 'Bá»™ phim tháº­t buá»“n.', remembered: false },
                    { id: 'k137', word: 'í™”ë‚˜ë‹¤', language: 'ko', transcription: '[hwa-na-da]', mean: 'tá»©c giáº­n, ná»•i giáº­n', wordtype: 'ë™́‚¬ (Ä‘á»™ng tá»«)', example: '́™œ í™”ë‚¬́–´́”?', example_vi: 'Sao báº¡n tá»©c giáº­n váº­y?', remembered: false },
                    { id: 'k138', word: 'ë¬´́„­ë‹¤', language: 'ko', transcription: '[mu-seop-da]', mean: 'sá»£ hĂ£i, Ä‘Ă¡ng sá»£', wordtype: 'í˜•́©́‚¬ (tĂ­nh tá»«)', example: 'ë°¤́— í˜¼́ ë¬´́„œ́›Œ́”.', example_vi: 'Ban Ä‘Ăªm tĂ´i sá»£ khi á»Ÿ má»™t mĂ¬nh.', remembered: false },
                    { id: 'k139', word: 'í”¼ê³¤í•˜ë‹¤', language: 'ko', transcription: '[pi-gon-ha-da]', mean: 'má»‡t má»i', wordtype: 'í˜•́©́‚¬ (tĂ­nh tá»«)', example: '́˜¤ë˜ ë„ˆë¬´ í”¼ê³¤í•´́”.', example_vi: 'HĂ´m nay tĂ´i má»‡t quĂ¡.', remembered: false },
                    { id: 'k140', word: 'ë°”́˜ë‹¤', language: 'ko', transcription: '[ba-ppeu-da]', mean: 'báº­n rá»™n', wordtype: 'í˜•́©́‚¬ (tĂ­nh tá»«)', example: '́”́¦˜ ë§́´ ë°”ë¹ ́”.', example_vi: 'Dáº¡o nĂ y tĂ´i ráº¥t báº­n.', remembered: false },
                    { id: 'k141', word: '́‹¬́‹¬í•˜ë‹¤', language: 'ko', transcription: '[sim-sim-ha-da]', mean: 'buá»“n chĂ¡n, chĂ¡n', wordtype: 'í˜•́©́‚¬ (tĂ­nh tá»«)', example: '́§‘́—́„œ ́‹¬́‹¬í•´́”.', example_vi: 'á» nhĂ  tĂ´i tháº¥y chĂ¡n.', remembered: false },
                    { id: 'k142', word: 'í–‰ë³µí•˜ë‹¤', language: 'ko', transcription: '[haeng-bo-ka-da]', mean: 'háº¡nh phĂºc', wordtype: 'í˜•́©́‚¬ (tĂ­nh tá»«)', example: '́§€ê¸ˆ í–‰ë³µí•´́”.', example_vi: 'TĂ´i Ä‘ang háº¡nh phĂºc.', remembered: false },
                    { id: 'k143', word: 'ê±±́ •í•˜ë‹¤', language: 'ko', transcription: '[geok-jeong-ha-da]', mean: 'lo láº¯ng, lo Ă¢u', wordtype: 'ë™́‚¬ (Ä‘á»™ng tá»«)', example: 'ê±±́ •í•˜́§€ ë§ˆ́„¸́”.', example_vi: 'Äá»«ng lo láº¯ng nhĂ©.', remembered: false },
                    { id: 'k144', word: '́¢‹ë‹¤', language: 'ko', transcription: '[jo-ta]', mean: 'tá»‘t, hay, thĂ­ch', wordtype: 'í˜•́©́‚¬ (tĂ­nh tá»«)', example: 'ê¸°ë¶„́´ ́¢‹́•„́”.', example_vi: 'TĂ´i cáº£m tháº¥y tá»‘t.', remembered: false },
                    { id: 'k145', word: '́‹«ë‹¤', language: 'ko', transcription: '[sil-ta]', mean: 'ghĂ©t, khĂ´ng thĂ­ch', wordtype: 'í˜•́©́‚¬ (tĂ­nh tá»«)', example: 'ê±°́§“ë§́´ ́‹«́–´́”.', example_vi: 'TĂ´i ghĂ©t nĂ³i dá»‘i.', remembered: false },
                    { id: 'k146', word: 'ë†€ë¼ë‹¤', language: 'ko', transcription: '[nol-la-da]', mean: 'ngáº¡c nhiĂªn, giáº­t mĂ¬nh', wordtype: 'ë™́‚¬ (Ä‘á»™ng tá»«)', example: 'ê¹œ́§ ë†€ë́–´́”.', example_vi: 'TĂ´i bá»‹ giáº­t mĂ¬nh quĂ¡.', remembered: false },
                    { id: 'k147', word: 'í˜ë“¤ë‹¤', language: 'ko', transcription: '[him-deul-da]', mean: 'khĂ³ khÄƒn, váº¥t váº£', wordtype: 'í˜•́©́‚¬ (tĂ­nh tá»«)', example: '́”́¦˜ ë§́´ í˜ë“¤́–´́”.', example_vi: 'Dáº¡o nĂ y tĂ´i ráº¥t váº¥t váº£.', remembered: false },
                    { id: 'k148', word: '́¬ë¯¸́ˆë‹¤', language: 'ko', transcription: '[jae-mi-it-da]', mean: 'thĂº vá»‹, vui', wordtype: 'í˜•́©́‚¬ (tĂ­nh tá»«)', example: 'í•œêµ­́–´ê°€ ́¬ë¯¸́ˆ́–´́”.', example_vi: 'Tiáº¿ng HĂ n ráº¥t thĂº vá»‹.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 11: NHĂ€ Cá»¬A & Äá»’ Váº¬T â”€â”€â”€ */
            {
                id: 'topik-home',
                title: 'đŸ  NhĂ  cá»­a & Äá»“ váº­t',
                description: 'Tá»« vá»±ng vá» cĂ¡c phĂ²ng trong nhĂ  vĂ  Ä‘á»“ váº­t thÆ°á»ng dĂ¹ng hĂ ng ngĂ y',
                wordCount: 15,
                words: [
                    { id: 'k149', word: '́§‘', language: 'ko', transcription: '[jip]', mean: 'nhĂ ', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́§‘́— ́ˆ́–´́”.', example_vi: 'TĂ´i Ä‘ang á»Ÿ nhĂ .', remembered: false },
                    { id: 'k150', word: 'ë°©', language: 'ko', transcription: '[bang]', mean: 'phĂ²ng', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë°©́´ ë„“́–´́”.', example_vi: 'PhĂ²ng rá»™ng láº¯m.', remembered: false },
                    { id: 'k151', word: 'ë¶€́—Œ', language: 'ko', transcription: '[bu-eok]', mean: 'nhĂ  báº¿p', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë¶€́—Œ́—́„œ ́”ë¦¬í•´́”.', example_vi: 'TĂ´i náº¥u Äƒn á»Ÿ nhĂ  báº¿p.', remembered: false },
                    { id: 'k152', word: 'í™”́¥́‹¤', language: 'ko', transcription: '[hwa-jang-sil]', mean: 'phĂ²ng táº¯m, nhĂ  vá»‡ sinh', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'í™”́¥́‹¤́´ ́–´ë””́˜ˆ́”?', example_vi: 'NhĂ  vá»‡ sinh á»Ÿ Ä‘Ă¢u váº­y?', remembered: false },
                    { id: 'k153', word: '́¹¨ëŒ€', language: 'ko', transcription: '[chim-dae]', mean: 'giÆ°á»ng', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́¹¨ëŒ€́—́„œ ́́”.', example_vi: 'TĂ´i ngá»§ trĂªn giÆ°á»ng.', remembered: false },
                    { id: 'k154', word: '́±…́ƒ', language: 'ko', transcription: '[chaek-sang]', mean: 'bĂ n há»c, bĂ n lĂ m viá»‡c', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́±…́ƒ ́œ„́— ́»´í“¨í„°ê°€ ́ˆ́–´́”.', example_vi: 'TrĂªn bĂ n há»c cĂ³ mĂ¡y tĂ­nh.', remembered: false },
                    { id: 'k155', word: '́˜́', language: 'ko', transcription: '[ui-ja]', mean: 'gháº¿', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́˜́́— ́•‰́œ¼́„¸́”.', example_vi: 'Má»i báº¡n ngá»“i vĂ o gháº¿.', remembered: false },
                    { id: 'k156', word: 'ëƒ‰́¥ê³ ', language: 'ko', transcription: '[naeng-jang-go]', mean: 'tá»§ láº¡nh', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ëƒ‰́¥ê³ ́— ́Œ́‹́´ ́—†́–´́”.', example_vi: 'Trong tá»§ láº¡nh khĂ´ng cĂ³ Ä‘á»“ Äƒn.', remembered: false },
                    { id: 'k157', word: 'í…”ë ˆë¹„́ „', language: 'ko', transcription: '[tel-le-bi-jeon]', mean: 'ti vi, truyá»n hĂ¬nh', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'í…”ë ˆë¹„́ „́„ ë´́”.', example_vi: 'TĂ´i xem ti vi.', remembered: false },
                    { id: 'k158', word: '́°½ë¬¸', language: 'ko', transcription: '[chang-mun]', mean: 'cá»­a sá»•', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́°½ë¬¸́„ ́—´́—ˆ́–´́”.', example_vi: 'TĂ´i Ä‘Ă£ má»Ÿ cá»­a sá»•.', remembered: false },
                    { id: 'k159', word: 'ë¬¸', language: 'ko', transcription: '[mun]', mean: 'cá»­a', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë¬¸́„ ë‹«́•„ ́£¼́„¸́”.', example_vi: 'LĂ m Æ¡n Ä‘Ă³ng cá»­a láº¡i.', remembered: false },
                    { id: 'k160', word: '́—´ë‹¤', language: 'ko', transcription: '[yeol-da]', mean: 'má»Ÿ', wordtype: 'ë™́‚¬ (Ä‘á»™ng tá»«)', example: '́°½ë¬¸́„ ́—´́–´́”.', example_vi: 'TĂ´i má»Ÿ cá»­a sá»•.', remembered: false },
                    { id: 'k161', word: 'ë‹«ë‹¤', language: 'ko', transcription: '[dat-da]', mean: 'Ä‘Ă³ng', wordtype: 'ë™́‚¬ (Ä‘á»™ng tá»«)', example: 'ë¬¸́„ ë‹«́•„́”.', example_vi: 'TĂ´i Ä‘Ă³ng cá»­a.', remembered: false },
                    { id: 'k162', word: '́²­́†Œí•˜ë‹¤', language: 'ko', transcription: '[cheong-so-ha-da]', mean: 'dá»n dáº¹p, lau chĂ¹i', wordtype: 'ë™́‚¬ (Ä‘á»™ng tá»«)', example: 'ë°©́„ ́²­́†Œí•´́”.', example_vi: 'TĂ´i dá»n dáº¹p phĂ²ng.', remembered: false },
                    { id: 'k163', word: '́‚´ë‹¤', language: 'ko', transcription: '[sal-da]', mean: 'sá»‘ng, á»Ÿ, cÆ° trĂº', wordtype: 'ë™́‚¬ (Ä‘á»™ng tá»«)', example: '́„œ́¸́—́„œ ́‚´́•„́”.', example_vi: 'TĂ´i sá»‘ng á»Ÿ Seoul.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 12: TRÆ¯á»œNG Há»ŒC & Há»ŒC Táº¬P â”€â”€â”€ */
            {
                id: 'topik-study',
                title: 'đŸ“ TrÆ°á»ng há»c & Há»c táº­p',
                description: 'Tá»« vá»±ng vá» mĂ´n há»c, hoáº¡t Ä‘á»™ng há»c táº­p vĂ  trÆ°á»ng lá»›p',
                wordCount: 16,
                words: [
                    { id: 'k164', word: 'ê³µë¶€í•˜ë‹¤', language: 'ko', transcription: '[gong-bu-ha-da]', mean: 'há»c bĂ i, há»c táº­p', wordtype: 'ë™́‚¬ (Ä‘á»™ng tá»«)', example: '́—´́‹¬íˆ ê³µë¶€í•´́”.', example_vi: 'TĂ´i há»c bĂ i chÄƒm chá»‰.', remembered: false },
                    { id: 'k165', word: '́„ ́ƒë‹˜', language: 'ko', transcription: '[seon-saeng-nim]', mean: 'giĂ¡o viĂªn, tháº§y/cĂ´ giĂ¡o', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́„ ́ƒë‹˜́´ ́¹œ́ ˆí•´́”.', example_vi: 'Tháº§y giĂ¡o ráº¥t thĂ¢n thiá»‡n.', remembered: false },
                    { id: 'k166', word: 'êµ́‹¤', language: 'ko', transcription: '[gyo-sil]', mean: 'lá»›p há»c, phĂ²ng há»c', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'êµ́‹¤́´ ë„“́–´́”.', example_vi: 'Lá»›p há»c rá»™ng rĂ£i.', remembered: false },
                    { id: 'k167', word: '́±…', language: 'ko', transcription: '[chaek]', mean: 'sĂ¡ch', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́±…́„ ́½́–´́”.', example_vi: 'TĂ´i Ä‘á»c sĂ¡ch.', remembered: false },
                    { id: 'k168', word: '́—°í•„', language: 'ko', transcription: '[yeon-pil]', mean: 'bĂºt chĂ¬', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́—°í•„ë¡œ ́΅”.', example_vi: 'TĂ´i viáº¿t báº±ng bĂºt chĂ¬.', remembered: false },
                    { id: 'k169', word: 'ë³¼íœ', language: 'ko', transcription: '[bol-pen]', mean: 'bĂºt bi', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë³¼íœ́´ ́—†́–´́”.', example_vi: 'TĂ´i khĂ´ng cĂ³ bĂºt bi.', remembered: false },
                    { id: 'k170', word: '́ˆ™́ œ', language: 'ko', transcription: '[suk-je]', mean: 'bĂ i táº­p vá» nhĂ ', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́ˆ™́ œë¥¼ í–ˆ́–´́”.', example_vi: 'TĂ´i Ä‘Ă£ lĂ m bĂ i táº­p vá» nhĂ .', remembered: false },
                    { id: 'k171', word: '́‹œí—˜', language: 'ko', transcription: '[si-heom]', mean: 'ká»³ thi, bĂ i kiá»ƒm tra', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë‚´́¼ ́‹œí—˜́´ ́ˆ́–´́”.', example_vi: 'NgĂ y mai cĂ³ bĂ i kiá»ƒm tra.', remembered: false },
                    { id: 'k172', word: '́§ˆë¬¸í•˜ë‹¤', language: 'ko', transcription: '[jil-mun-ha-da]', mean: 'Ä‘áº·t cĂ¢u há»i, há»i', wordtype: 'ë™́‚¬ (Ä‘á»™ng tá»«)', example: '́„ ́ƒë‹˜ê»˜ ́§ˆë¬¸í–ˆ́–´́”.', example_vi: 'TĂ´i Ä‘Ă£ há»i tháº§y giĂ¡o.', remembered: false },
                    { id: 'k173', word: 'ëŒ€ë‹µí•˜ë‹¤', language: 'ko', transcription: '[dae-da-pa-da]', mean: 'tráº£ lá»i', wordtype: 'ë™́‚¬ (Ä‘á»™ng tá»«)', example: '́˜ ëŒ€ë‹µí–ˆ́–´́”.', example_vi: 'TĂ´i Ä‘Ă£ tráº£ lá»i tá»‘t.', remembered: false },
                    { id: 'k174', word: '́“°ë‹¤', language: 'ko', transcription: '[sseu-da]', mean: 'viáº¿t', wordtype: 'ë™́‚¬ (ë™́‚¬)', example: 'í•œê¸€́„ ́΅”.', example_vi: 'TĂ´i viáº¿t chá»¯ Hangul.', remembered: false },
                    { id: 'k175', word: '́½ë‹¤', language: 'ko', transcription: '[ik-da]', mean: 'Ä‘á»c', wordtype: 'ë™́‚¬ (Ä‘á»™ng tá»«)', example: '́±…́„ ́½́–´́”.', example_vi: 'TĂ´i Ä‘á»c sĂ¡ch.', remembered: false },
                    { id: 'k176', word: 'ë“£ë‹¤', language: 'ko', transcription: '[deut-da]', mean: 'nghe', wordtype: 'ë™́‚¬ (Ä‘á»™ng tá»«)', example: '́Œ́•…́„ ë“¤́–´́”.', example_vi: 'TĂ´i nghe nháº¡c.', remembered: false },
                    { id: 'k177', word: 'ë§í•˜ë‹¤', language: 'ko', transcription: '[ma-ra-da]', mean: 'nĂ³i', wordtype: 'ë™́‚¬ (Ä‘á»™ng tá»«)', example: 'í•œêµ­́–´ë¡œ ë§í•´́”.', example_vi: 'TĂ´i nĂ³i báº±ng tiáº¿ng HĂ n.', remembered: false },
                    { id: 'k178', word: '́–´ë µë‹¤', language: 'ko', transcription: '[eo-ryeop-da]', mean: 'khĂ³', wordtype: 'í˜•́©́‚¬ (tĂ­nh tá»«)', example: '́´ ë¬¸́ œê°€ ́–´ë ¤́›Œ́”.', example_vi: 'BĂ i toĂ¡n nĂ y khĂ³ quĂ¡.', remembered: false },
                    { id: 'k179', word: '́‰½ë‹¤', language: 'ko', transcription: '[swip-da]', mean: 'dá»…', wordtype: 'í˜•́©́‚¬ (tĂ­nh tá»«)', example: '́´ ë‹΅–´ë” ́‰¬́›Œ́”.', example_vi: 'Tá»« nĂ y dá»… láº¯m.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 13: CĂ”NG VIá»†C & NGHá»€ NGHIá»†P â”€â”€â”€ */
            {
                id: 'topik-work',
                title: 'đŸ’¼ CĂ´ng viá»‡c & Nghá» nghiá»‡p',
                description: 'Tá»« vá»±ng vá» cĂ¡c ngĂ nh nghá» phá»• biáº¿n vĂ  hoáº¡t Ä‘á»™ng nÆ¡i lĂ m viá»‡c',
                wordCount: 14,
                words: [
                    { id: 'k180', word: 'íŒ́‚¬', language: 'ko', transcription: '[hoe-sa]', mean: 'cĂ´ng ty', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'íŒ́‚¬́— ë‹¤ë…€́”.', example_vi: 'TĂ´i Ä‘i lĂ m á»Ÿ cĂ´ng ty.', remembered: false },
                    { id: 'k181', word: 'íŒ́‚¬́›', language: 'ko', transcription: '[hoe-sa-won]', mean: 'nhĂ¢n viĂªn cĂ´ng ty', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́•„ë²„́§€ë” íŒ́‚¬́›́´́—́”.', example_vi: 'Bá»‘ tĂ´i lĂ  nhĂ¢n viĂªn cĂ´ng ty.', remembered: false },
                    { id: 'k182', word: '́˜́‚¬', language: 'ko', transcription: '[ui-sa]', mean: 'bĂ¡c sÄ©', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́˜́‚¬ê°€ ë˜ê³  ́‹¶́–´́”.', example_vi: 'TĂ´i muá»‘n trá»Ÿ thĂ nh bĂ¡c sÄ©.', remembered: false },
                    { id: 'k183', word: 'ê°„í˜¸́‚¬', language: 'ko', transcription: '[gan-ho-sa]', mean: 'y tĂ¡', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́–¸ë‹ˆë” ê°„í˜¸́‚¬́˜ˆ́”.', example_vi: 'Chá»‹ gĂ¡i tĂ´i lĂ  y tĂ¡.', remembered: false },
                    { id: 'k184', word: '́”ë¦¬́‚¬', language: 'ko', transcription: '[yo-ri-sa]', mean: 'Ä‘áº§u báº¿p, ngÆ°á»i náº¥u Äƒn', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́”ë¦¬́‚¬ê°€ ́Œ́‹́„ ë§Œë“¤́–´́”.', example_vi: 'Äáº§u báº¿p lĂ m mĂ³n Äƒn.', remembered: false },
                    { id: 'k185', word: 'ê²½́°°', language: 'ko', transcription: '[gyeong-chal]', mean: 'cáº£nh sĂ¡t', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ê²½́°°́„ ë¶ˆë €́–´́”.', example_vi: 'TĂ´i Ä‘Ă£ gá»i cáº£nh sĂ¡t.', remembered: false },
                    { id: 'k186', word: '́¼í•˜ë‹¤', language: 'ko', transcription: '[il-ha-da]', mean: 'lĂ m viá»‡c', wordtype: 'ë™́‚¬ (Ä‘á»™ng tá»«)', example: '́—´́‹¬íˆ ́¼í•´́”.', example_vi: 'TĂ´i lĂ m viá»‡c chÄƒm chá»‰.', remembered: false },
                    { id: 'k187', word: '́¶œê·¼í•˜ë‹¤', language: 'ko', transcription: '[chul-geun-ha-da]', mean: 'Ä‘i lĂ m, Ä‘áº¿n sá»Ÿ', wordtype: 'ë™́‚¬ (ë™́‚¬)', example: '́•„́¹¨ 9́‹œ́— ́¶œê·¼í•´́”.', example_vi: 'TĂ´i Ä‘i lĂ m lĂºc 9 giá» sĂ¡ng.', remembered: false },
                    { id: 'k188', word: 'í‡´ê·¼í•˜ë‹¤', language: 'ko', transcription: '[toe-geun-ha-da]', mean: 'tan lĂ m, vá» nhĂ  sau giá» lĂ m', wordtype: 'ë™́‚¬ (ë™́‚¬)', example: '6́‹œ́— í‡´ê·¼í•´́”.', example_vi: 'TĂ´i tan lĂ m lĂºc 6 giá».', remembered: false },
                    { id: 'k189', word: '́›”ê¸‰', language: 'ko', transcription: '[wol-geup]', mean: 'lÆ°Æ¡ng thĂ¡ng', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́›”ê¸‰́´ ́˜¬ë́–´́”.', example_vi: 'LÆ°Æ¡ng thĂ¡ng cá»§a tĂ´i Ä‘Ă£ tÄƒng.', remembered: false },
                    { id: 'k190', word: 'íŒ́˜', language: 'ko', transcription: '[hoe-ui]', mean: 'cuá»™c há»p', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́˜¤í›„́— íŒ́˜ê°€ ́ˆ́–´́”.', example_vi: 'Chiá»u nay cĂ³ cuá»™c há»p.', remembered: false },
                    { id: 'k191', word: '́‚¬ë¬´́‹¤', language: 'ko', transcription: '[sa-mu-sil]', mean: 'vÄƒn phĂ²ng', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́‚¬ë¬´́‹¤́´ ë„“́–´́”.', example_vi: 'VÄƒn phĂ²ng rá»™ng rĂ£i.', remembered: false },
                    { id: 'k192', word: '́ƒ́‚¬', language: 'ko', transcription: '[sang-sa]', mean: 'sáº¿p, cáº¥p trĂªn', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́ƒ́‚¬ê°€ ́—„ê²©í•´́”.', example_vi: 'Sáº¿p tĂ´i ráº¥t nghiĂªm kháº¯c.', remembered: false },
                    { id: 'k193', word: 'ë™ë£Œ', language: 'ko', transcription: '[dong-nyo]', mean: 'Ä‘á»“ng nghiá»‡p', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë™ë£Œë“¤́´ ́¹œ́ ˆí•´́”.', example_vi: 'CĂ¡c Ä‘á»“ng nghiá»‡p ráº¥t thĂ¢n thiá»‡n.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 14: DU Lá»CH â”€â”€â”€ */
            {
                id: 'topik-travel',
                title: 'âœˆï¸ Du lá»‹ch & KhĂ¡ch sáº¡n',
                description: 'Tá»« vá»±ng vá» du lá»‹ch, khĂ¡ch sáº¡n vĂ  cĂ¡c hoáº¡t Ä‘á»™ng khi Ä‘i chÆ¡i',
                wordCount: 15,
                words: [
                    { id: 'k194', word: '́—¬í–‰', language: 'ko', transcription: '[yeo-haeng]', mean: 'du lá»‹ch, chuyáº¿n Ä‘i', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́—¬í–‰́„ ́¢‹́•„í•´́”.', example_vi: 'TĂ´i thĂ­ch Ä‘i du lá»‹ch.', remembered: false },
                    { id: 'k195', word: '́—¬í–‰í•˜ë‹¤', language: 'ko', transcription: '[yeo-haeng-ha-da]', mean: 'Ä‘i du lá»‹ch', wordtype: 'ë™́‚¬ (ë™́‚¬)', example: '́œ ëŸ½́„ ́—¬í–‰í•˜ê³  ́‹¶́–´́”.', example_vi: 'TĂ´i muá»‘n du lá»‹ch chĂ¢u Ă‚u.', remembered: false },
                    { id: 'k196', word: 'í˜¸í…”', language: 'ko', transcription: '[ho-tel]', mean: 'khĂ¡ch sáº¡n', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'í˜¸í…”́„ ́˜ˆ́•½í–ˆ́–´́”.', example_vi: 'TĂ´i Ä‘Ă£ Ä‘áº·t phĂ²ng khĂ¡ch sáº¡n.', remembered: false },
                    { id: 'k197', word: '́˜ˆ́•½í•˜ë‹¤', language: 'ko', transcription: '[ye-ya-ka-da]', mean: 'Ä‘áº·t trÆ°á»›c, Ä‘áº·t chá»—', wordtype: 'ë™́‚¬ (ë™́‚¬)', example: '́‹ë‹¹́„ ́˜ˆ́•½í–ˆ́–´́”.', example_vi: 'TĂ´i Ä‘Ă£ Ä‘áº·t bĂ n á»Ÿ nhĂ  hĂ ng.', remembered: false },
                    { id: 'k198', word: '́—¬ê¶Œ', language: 'ko', transcription: '[yeo-gwon]', mean: 'há»™ chiáº¿u, passport', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́—¬ê¶Œ́„ ê°€́ ¸́™”́–´́”.', example_vi: 'TĂ´i Ä‘Ă£ mang theo há»™ chiáº¿u.', remembered: false },
                    { id: 'k199', word: '́§', language: 'ko', transcription: '[jim]', mean: 'hĂ nh lĂ½, Ä‘á»“ Ä‘áº¡c', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́§́´ ë§́•„́”.', example_vi: 'HĂ nh lĂ½ nhiá»u quĂ¡.', remembered: false },
                    { id: 'k200', word: '́‚¬́§„', language: 'ko', transcription: '[sa-jin]', mean: 'áº£nh, bá»©c áº£nh', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́‚¬́§„́„ ́°́—ˆ́–´́”.', example_vi: 'TĂ´i Ä‘Ă£ chá»¥p áº£nh.', remembered: false },
                    { id: 'k201', word: '́°ë‹¤', language: 'ko', transcription: '[jjik-da]', mean: 'chá»¥p (áº£nh)', wordtype: 'ë™́‚¬ (ë™́‚¬)', example: 'ê°™́´ ́‚¬́§„ ́°́–´́”.', example_vi: 'CĂ¹ng chá»¥p áº£nh nhĂ©.', remembered: false },
                    { id: 'k202', word: 'ê´€ê´‘́§€', language: 'ko', transcription: '[gwan-gwang-ji]', mean: 'Ä‘iá»ƒm du lá»‹ch, danh lam', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́œ ëª…í•œ ê´€ê´‘́§€́˜ˆ́”.', example_vi: 'ÄĂ¢y lĂ  Ä‘iá»ƒm du lá»‹ch ná»•i tiáº¿ng.', remembered: false },
                    { id: 'k203', word: '́§€ë„', language: 'ko', transcription: '[ji-do]', mean: 'báº£n Ä‘á»“', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́§€ë„ë¥¼ ë´́”.', example_vi: 'TĂ´i xem báº£n Ä‘á»“.', remembered: false },
                    { id: 'k204', word: 'ê¸¸́„ ́ƒë‹¤', language: 'ko', transcription: '[gi-reul il-da]', mean: 'bá»‹ láº¡c Ä‘Æ°á»ng', wordtype: 'ë™́‚¬ (ë™́‚¬)', example: 'ê¸¸́„ ́ƒ́—ˆ́–´́”.', example_vi: 'TĂ´i bá»‹ láº¡c Ä‘Æ°á»ng rá»“i.', remembered: false },
                    { id: 'k205', word: 'êµ¬ê²½í•˜ë‹¤', language: 'ko', transcription: '[gu-gyeong-ha-da]', mean: 'tham quan, ngáº¯m cáº£nh', wordtype: 'ë™́‚¬ (ë™́‚¬)', example: '́‹œ́¥́„ êµ¬ê²½í•´́”.', example_vi: 'TĂ´i tham quan chá»£.', remembered: false },
                    { id: 'k206', word: 'ê¸°ë…í’ˆ', language: 'ko', transcription: '[gi-nyeom-pum]', mean: 'Ä‘á»“ lÆ°u niá»‡m', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ê¸°ë…í’ˆ́„ ́ƒ€́–´́”.', example_vi: 'TĂ´i Ä‘Ă£ mua Ä‘á»“ lÆ°u niá»‡m.', remembered: false },
                    { id: 'k207', word: '́…́¥ë£Œ', language: 'ko', transcription: '[ip-jang-nyo]', mean: 'phĂ­ vĂ o cá»­a, vĂ© vĂ o', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́…́¥ë£Œê°€ ́–¼ë§ˆ́˜ˆ́”?', example_vi: 'VĂ© vĂ o cá»­a bao nhiĂªu?', remembered: false },
                    { id: 'k208', word: '́™¸êµ­', language: 'ko', transcription: '[oe-guk]', mean: 'nÆ°á»›c ngoĂ i', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́™¸êµ­́— ê°€ê³  ́‹¶́–´́”.', example_vi: 'TĂ´i muá»‘n Ä‘i nÆ°á»›c ngoĂ i.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 15: Sá» THĂCH & GIáº¢I TRĂ â”€â”€â”€ */
            {
                id: 'topik-hobby',
                title: 'đŸ® Sá»Ÿ thĂ­ch & Giáº£i trĂ­',
                description: 'Tá»« vá»±ng vá» cĂ¡c hoáº¡t Ä‘á»™ng giáº£i trĂ­, sá»Ÿ thĂ­ch vĂ  vui chÆ¡i',
                wordCount: 13,
                words: [
                    { id: 'k209', word: '́˜í™”', language: 'ko', transcription: '[yeong-hwa]', mean: 'phim, Ä‘iá»‡n áº£nh', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́˜í™”ë¥¼ ë´́”.', example_vi: 'TĂ´i xem phim.', remembered: false },
                    { id: 'k210', word: '́Œ́•…', language: 'ko', transcription: '[eu-mak]', mean: 'Ă¢m nháº¡c', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́Œ́•…́„ ë“¤́–´́”.', example_vi: 'TĂ´i nghe nháº¡c.', remembered: false },
                    { id: 'k211', word: 'ë…¸ë˜', language: 'ko', transcription: '[no-rae]', mean: 'bĂ i hĂ¡t, hĂ¡t', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë…¸ë˜ë¥¼ ́˜ í•´́”.', example_vi: 'TĂ´i hĂ¡t hay.', remembered: false },
                    { id: 'k212', word: '́¶¤', language: 'ko', transcription: '[chum]', mean: 'Ä‘iá»‡u nháº£y, nháº£y mĂºa', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́¶¤́„ ë°°́°ê³  ́ˆ́–´́”.', example_vi: 'TĂ´i Ä‘ang há»c nháº£y.', remembered: false },
                    { id: 'k213', word: '́´ë™', language: 'ko', transcription: '[un-dong]', mean: 'thá»ƒ dá»¥c, thá»ƒ thao', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́´ë™́„ ́¢‹́•„í•´́”.', example_vi: 'TĂ´i thĂ­ch thá»ƒ thao.', remembered: false },
                    { id: 'k214', word: 'ë“±́‚°', language: 'ko', transcription: '[deung-san]', mean: 'leo nĂºi, Ä‘i nĂºi', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́£¼ë§́— ë“±́‚°í•´́”.', example_vi: 'Cuá»‘i tuáº§n tĂ´i leo nĂºi.', remembered: false },
                    { id: 'k215', word: '́ˆ˜́˜', language: 'ko', transcription: '[su-yeong]', mean: 'bÆ¡i lá»™i', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́ˆ˜́˜́„ ë°°́› ́–´́”.', example_vi: 'TĂ´i Ä‘Ă£ há»c bÆ¡i.', remembered: false },
                    { id: 'k216', word: 'ë…́„œ', language: 'ko', transcription: '[dok-seo]', mean: 'Ä‘á»c sĂ¡ch', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë…́„œê°€ ́·¨ë¯¸́˜ˆ́”.', example_vi: 'Äá»c sĂ¡ch lĂ  sá»Ÿ thĂ­ch cá»§a tĂ´i.', remembered: false },
                    { id: 'k217', word: '́”ë¦¬', language: 'ko', transcription: '[yo-ri]', mean: 'náº¥u Äƒn, náº¥u nÆ°á»›ng', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́”ë¦¬í•˜ë” ê±¸ ́¢‹́•„í•´́”.', example_vi: 'TĂ´i thĂ­ch náº¥u Äƒn.', remembered: false },
                    { id: 'k218', word: 'ê²Œ́„', language: 'ko', transcription: '[ge-im]', mean: 'trĂ² chÆ¡i, game', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ê²Œ́„́„ ë§́´ í•´́”.', example_vi: 'TĂ´i chÆ¡i game nhiá»u láº¯m.', remembered: false },
                    { id: 'k219', word: 'ê·¸ë¦¼', language: 'ko', transcription: '[geu-rim]', mean: 'tranh váº½, váº½ tranh', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ê·¸ë¦¼́„ ê·¸ë ¤́”.', example_vi: 'TĂ´i váº½ tranh.', remembered: false },
                    { id: 'k220', word: '́‚°́±…í•˜ë‹¤', language: 'ko', transcription: '[san-chae-ka-da]', mean: 'Ä‘i dáº¡o, táº£n bá»™', wordtype: 'ë™́‚¬ (ë™́‚¬)', example: 'ê³µ́›́—́„œ ́‚°́±…í•´́”.', example_vi: 'TĂ´i Ä‘i dáº¡o á»Ÿ cĂ´ng viĂªn.', remembered: false },
                    { id: 'k221', word: '́‰¬ë‹¤', language: 'ko', transcription: '[swi-da]', mean: 'nghá»‰ ngÆ¡i, thÆ° giĂ£n', wordtype: 'ë™́‚¬ (ë™́‚¬)', example: '́£¼ë§́— ́‰¬́–´́”.', example_vi: 'Cuá»‘i tuáº§n tĂ´i nghá»‰ ngÆ¡i.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 16: Tá»° NHIĂN & MĂ”I TRÆ¯á»œNG â”€â”€â”€ */
            {
                id: 'topik-nature',
                title: 'đŸŒ¿ Tá»± nhiĂªn & ThiĂªn nhiĂªn',
                description: 'Tá»« vá»±ng vá» thiĂªn nhiĂªn, Ä‘á»™ng thá»±c váº­t vĂ  mĂ´i trÆ°á»ng xung quanh',
                wordCount: 12,
                words: [
                    { id: 'k222', word: '́‚°', language: 'ko', transcription: '[san]', mean: 'nĂºi', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́‚°́´ ë†’́•„́”.', example_vi: 'NĂºi ráº¥t cao.', remembered: false },
                    { id: 'k223', word: 'ë°”ë‹¤', language: 'ko', transcription: '[ba-da]', mean: 'biá»ƒn', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë°”ë‹¤́— ê°€ê³  ́‹¶́–´́”.', example_vi: 'TĂ´i muá»‘n Ä‘i biá»ƒn.', remembered: false },
                    { id: 'k224', word: 'ê°•', language: 'ko', transcription: '[gang]', mean: 'sĂ´ng', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ê°• ́˜†́— ê³µ́›́´ ́ˆ́–´́”.', example_vi: 'CĂ³ cĂ´ng viĂªn bĂªn cáº¡nh dĂ²ng sĂ´ng.', remembered: false },
                    { id: 'k225', word: 'ê½ƒ', language: 'ko', transcription: '[kkot]', mean: 'hoa', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë´„́— ê½ƒ́´ ́˜ˆë»́”.', example_vi: 'Hoa mĂ¹a xuĂ¢n ráº¥t Ä‘áº¹p.', remembered: false },
                    { id: 'k226', word: 'ë‚˜ë¬´', language: 'ko', transcription: '[na-mu]', mean: 'cĂ¢y (cĂ¢y cá»‘i)', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë‚˜ë¬´ê°€ ë§́•„́”.', example_vi: 'CĂ³ nhiá»u cĂ¢y cá»‘i.', remembered: false },
                    { id: 'k227', word: 'ë™ë¬¼', language: 'ko', transcription: '[dong-mul]', mean: 'Ä‘á»™ng váº­t', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë™ë¬¼́„ ́¢‹́•„í•´́”.', example_vi: 'TĂ´i thĂ­ch Ä‘á»™ng váº­t.', remembered: false },
                    { id: 'k228', word: 'ê°•́•„́§€', language: 'ko', transcription: '[gang-a-ji]', mean: 'chĂ³ con, chĂ³ cÆ°ng', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ê°•́•„́§€ë¥¼ í‚¤́›Œ́”.', example_vi: 'TĂ´i nuĂ´i chĂ³.', remembered: false },
                    { id: 'k229', word: 'ê³ ́–‘́´', language: 'ko', transcription: '[go-yang-i]', mean: 'mĂ¨o', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ê³ ́–‘́´ê°€ ê·€́—¬́›Œ́”.', example_vi: 'MĂ¨o dá»… thÆ°Æ¡ng láº¯m.', remembered: false },
                    { id: 'k230', word: 'í•˜ë˜', language: 'ko', transcription: '[ha-neul]', mean: 'báº§u trá»i', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'í•˜ë˜́´ íŒŒë˜́”.', example_vi: 'Báº§u trá»i mĂ u xanh.', remembered: false },
                    { id: 'k231', word: 'ë•…', language: 'ko', transcription: '[ttang]', mean: 'Ä‘áº¥t, máº·t Ä‘áº¥t', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë•…́— ́”΅•—́„ ́‹¬́–´́”.', example_vi: 'TĂ´i gieo háº¡t xuá»‘ng Ä‘áº¥t.', remembered: false },
                    { id: 'k232', word: '́ˆ²', language: 'ko', transcription: '[sup]', mean: 'rá»«ng', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́ˆ²́´ ́‹œ́›í•´́”.', example_vi: 'Rá»«ng mĂ¡t máº» láº¯m.', remembered: false },
                    { id: 'k233', word: 'ë³„', language: 'ko', transcription: '[byeol]', mean: 'ngĂ´i sao', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë°¤́— ë³„́´ ́˜ˆë»́”.', example_vi: 'Ban Ä‘Ăªm sao trĂ´ng ráº¥t Ä‘áº¹p.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 17: MĂ€U Sáº®C & HĂŒNH Dáº NG â”€â”€â”€ */
            {
                id: 'topik-color',
                title: 'đŸ¨ MĂ u sáº¯c & HĂ¬nh dáº¡ng',
                description: 'Tá»« vá»±ng vá» cĂ¡c mĂ u sáº¯c, hĂ¬nh dáº¡ng vĂ  cĂ¡ch mĂ´ táº£ ngoáº¡i hĂ¬nh',
                wordCount: 16,
                words: [
                    { id: 'k234', word: '́ƒ‰ê¹”', language: 'ko', transcription: '[saek-kkal]', mean: 'mĂ u sáº¯c', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë¬´́¨ ́ƒ‰ê¹”́„ ́¢‹́•„í•´́”?', example_vi: 'Báº¡n thĂ­ch mĂ u gĂ¬?', remembered: false },
                    { id: 'k235', word: 'ë¹¨ê°„́ƒ‰', language: 'ko', transcription: '[ppal-gan-saek]', mean: 'mĂ u Ä‘á»', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë¹¨ê°„́ƒ‰ ́˜·́„ ́…́—ˆ́–´́”.', example_vi: 'TĂ´i máº·c Ă¡o mĂ u Ä‘á».', remembered: false },
                    { id: 'k236', word: 'íŒŒë€́ƒ‰', language: 'ko', transcription: '[pa-ran-saek]', mean: 'mĂ u xanh dÆ°Æ¡ng', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'íŒŒë€́ƒ‰ í•˜ë˜́´ ́˜ˆë»́”.', example_vi: 'Báº§u trá»i xanh dÆ°Æ¡ng Ä‘áº¹p láº¯m.', remembered: false },
                    { id: 'k237', word: 'ë…¸ë€́ƒ‰', language: 'ko', transcription: '[no-ran-saek]', mean: 'mĂ u vĂ ng', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë…¸ë€́ƒ‰ ê½ƒ́´ í”¼́—ˆ́–´́”.', example_vi: 'Hoa mĂ u vĂ ng Ä‘Ă£ ná»Ÿ.', remembered: false },
                    { id: 'k238', word: '́´ˆë¡́ƒ‰', language: 'ko', transcription: '[cho-rok-saek]', mean: 'mĂ u xanh lĂ¡', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́´ˆë¡́ƒ‰ ë‚˜ë¬´ê°€ ë§́•„́”.', example_vi: 'CĂ³ nhiá»u cĂ¢y xanh lĂ¡.', remembered: false },
                    { id: 'k239', word: 'í°́ƒ‰', language: 'ko', transcription: '[hwin-saek]', mean: 'mĂ u tráº¯ng', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'í°́ƒ‰ ́…”́¸ ë¥¼ ́¢‹́•„í•´́”.', example_vi: 'TĂ´i thĂ­ch Ă¡o sÆ¡ mi tráº¯ng.', remembered: false },
                    { id: 'k240', word: 'ê²€́€́ƒ‰', language: 'ko', transcription: '[geo-meun-saek]', mean: 'mĂ u Ä‘en', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ê²€́€́ƒ‰ ê°€ë°©́´ ë©‹́ˆ́–´́”.', example_vi: 'Chiáº¿c tĂºi mĂ u Ä‘en trĂ´ng Ä‘áº¹p láº¯m.', remembered: false },
                    { id: 'k241', word: 'ë¶„í™́ƒ‰', language: 'ko', transcription: '[bun-hong-saek]', mean: 'mĂ u há»“ng', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë¶„í™́ƒ‰ ë“œë ˆ́¤ë¥¼ ́…́—ˆ́–´́”.', example_vi: 'TĂ´i máº·c vĂ¡y mĂ u há»“ng.', remembered: false },
                    { id: 'k242', word: 'ëª΅–‘', language: 'ko', transcription: '[mo-yang]', mean: 'hĂ¬nh dáº¡ng, dĂ¡ng váº»', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ëª΅–‘́´ ́˜ˆë»́”.', example_vi: 'HĂ¬nh dáº¡ng trĂ´ng Ä‘áº¹p láº¯m.', remembered: false },
                    { id: 'k243', word: 'ë™ê·¸ë¼ë¯¸', language: 'ko', transcription: '[dong-geu-ra-mi]', mean: 'hĂ¬nh trĂ²n', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë™ê·¸ë¼ë¯¸ë¥¼ ê·¸ë ¸́–´́”.', example_vi: 'TĂ´i Ä‘Ă£ váº½ hĂ¬nh trĂ²n.', remembered: false },
                    { id: 'k244', word: 'ë„¤ëª¨', language: 'ko', transcription: '[ne-mo]', mean: 'hĂ¬nh vuĂ´ng, hĂ¬nh chá»¯ nháº­t', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ë„¤ëª¨ ëª΅–‘ ́ƒ́́˜ˆ́”.', example_vi: 'ÄĂ¢y lĂ  há»™p hĂ¬nh vuĂ´ng.', remembered: false },
                    { id: 'k245', word: '́„¸ëª¨', language: 'ko', transcription: '[se-mo]', mean: 'hĂ¬nh tam giĂ¡c', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́„¸ëª¨ ëª΅–‘́œ¼ë¡œ ́˜ë́–´́”.', example_vi: 'TĂ´i Ä‘Ă£ cáº¯t thĂ nh hĂ¬nh tam giĂ¡c.', remembered: false },
                    { id: 'k246', word: 'ê¸¸ë‹¤', language: 'ko', transcription: '[gil-da]', mean: 'dĂ i', wordtype: 'í˜•́©́‚¬ (tĂ­nh tá»«)', example: 'ë¨¸ë¦¬́¹´ë½́´ ê¸¸́–´́”.', example_vi: 'TĂ³c tĂ´i dĂ i.', remembered: false },
                    { id: 'k247', word: '́§§ë‹¤', language: 'ko', transcription: '[jjal-da]', mean: 'ngáº¯n', wordtype: 'í˜•́©́‚¬ (tĂ­nh tá»«)', example: 'ë°”́§€ê°€ ë„ˆë¬´ ́§§́•„́”.', example_vi: 'Quáº§n nĂ y ngáº¯n quĂ¡.', remembered: false },
                    { id: 'k248', word: 'ë‘ê»ë‹¤', language: 'ko', transcription: '[du-kkeop-da]', mean: 'dĂ y', wordtype: 'í˜•́©́‚¬ (tĂ­nh tá»«)', example: '́´ ́±…́€ ë‘êº¼́›Œ́”.', example_vi: 'Cuá»‘n sĂ¡ch nĂ y dĂ y láº¯m.', remembered: false },
                    { id: 'k249', word: '́–‡ë‹¤', language: 'ko', transcription: '[yal-da]', mean: 'má»ng', wordtype: 'í˜•́©́‚¬ (tĂ­nh tá»«)', example: '́¢…́´ê°€ ́–‡́•„́”.', example_vi: 'Tá» giáº¥y má»ng.', remembered: false }
                ]
            },

            /* â”€â”€â”€ TOPIC 18: Sá» Äáº¾M & ÄÆ N Vá» â”€â”€â”€ */
            {
                id: 'topik-number',
                title: 'đŸ”¢ Sá»‘ Ä‘áº¿m & ÄÆ¡n vá»‹',
                description: 'Tá»« vá»±ng vá» há»‡ thá»‘ng sá»‘ Ä‘áº¿m thuáº§n HĂ n, HĂ¡n HĂ n vĂ  cĂ¡c Ä‘Æ¡n vá»‹ Ä‘o lÆ°á»ng',
                wordCount: 18,
                words: [
                    { id: 'k250', word: 'í•˜ë‚˜', language: 'ko', transcription: '[ha-na]', mean: 'má»™t (sá»‘ Ä‘áº¿m thuáº§n HĂ n)', wordtype: '́ˆ˜́‚¬ (sá»‘ tá»«)', example: '́‚¬ê³¼ í•˜ë‚˜ ́£¼́„¸́”.', example_vi: 'Cho tĂ´i má»™t quáº£ tĂ¡o.', remembered: false },
                    { id: 'k251', word: 'ë‘˜', language: 'ko', transcription: '[dul]', mean: 'hai (sá»‘ Ä‘áº¿m thuáº§n HĂ n)', wordtype: '́ˆ˜́‚¬ (sá»‘ tá»«)', example: '́»¤í”¼ ë‘˜ ́£¼́„¸́”.', example_vi: 'Cho tĂ´i hai ly cĂ  phĂª.', remembered: false },
                    { id: 'k252', word: '́…‹', language: 'ko', transcription: '[set]', mean: 'ba (sá»‘ Ä‘áº¿m thuáº§n HĂ n)', wordtype: '́ˆ˜́‚¬ (sá»‘ tá»«)', example: '́¹œêµ¬ê°€ ́…‹ ́ˆ́–´́”.', example_vi: 'TĂ´i cĂ³ ba ngÆ°á»i báº¡n.', remembered: false },
                    { id: 'k253', word: 'ë„·', language: 'ko', transcription: '[net]', mean: 'bá»‘n (sá»‘ Ä‘áº¿m thuáº§n HĂ n)', wordtype: '́ˆ˜́‚¬ (sá»‘ tá»«)', example: '́˜́ê°€ ë„· ́ˆ́–´́”.', example_vi: 'CĂ³ bá»‘n cĂ¡i gháº¿.', remembered: false },
                    { id: 'k254', word: 'ë‹¤́„¯', language: 'ko', transcription: '[da-seot]', mean: 'nÄƒm (sá»‘ Ä‘áº¿m thuáº§n HĂ n)', wordtype: '́ˆ˜́‚¬ (sá»‘ tá»«)', example: '́‚¬íƒ• ë‹¤́„¯ ê°œ ́£¼́„¸́”.', example_vi: 'Cho tĂ´i nÄƒm viĂªn káº¹o.', remembered: false },
                    { id: 'k255', word: '́¼', language: 'ko', transcription: '[il]', mean: 'má»™t (sá»‘ HĂ¡n HĂ n)', wordtype: '́ˆ˜́‚¬ (sá»‘ tá»«)', example: '́¼ ́¸µ́— ́‚´́•„́”.', example_vi: 'TĂ´i sá»‘ng á»Ÿ táº§ng má»™t.', remembered: false },
                    { id: 'k256', word: '́‹­', language: 'ko', transcription: '[sip]', mean: 'mÆ°á»i (sá»‘ HĂ¡n HĂ n)', wordtype: '́ˆ˜́‚¬ (sá»‘ tá»«)', example: '́‹­ ë¶„ í›„́— ́™€́”.', example_vi: 'MÆ°á»i phĂºt ná»¯a sáº½ Ä‘áº¿n.', remembered: false },
                    { id: 'k257', word: 'ë°±', language: 'ko', transcription: '[baek]', mean: 'má»™t trÄƒm', wordtype: '́ˆ˜́‚¬ (sá»‘ tá»«)', example: 'ë°± ́›́§œë¦¬ ë™́ „́´́—́”.', example_vi: 'ÄĂ¢y lĂ  Ä‘á»“ng xu 100 won.', remembered: false },
                    { id: 'k258', word: '́²œ', language: 'ko', transcription: '[cheon]', mean: 'má»™t nghĂ¬n', wordtype: '́ˆ˜́‚¬ (sá»‘ tá»«)', example: '́²œ ́›́´́—́”.', example_vi: 'GiĂ¡ má»™t nghĂ¬n won.', remembered: false },
                    { id: 'k259', word: 'ë§Œ', language: 'ko', transcription: '[man]', mean: 'mÆ°á»i nghĂ¬n', wordtype: '́ˆ˜́‚¬ (sá»‘ tá»«)', example: 'ë§Œ ́› ́ˆ́–´́”.', example_vi: 'TĂ´i cĂ³ mÆ°á»i nghĂ¬n won.', remembered: false },
                    { id: 'k260', word: 'ê°œ', language: 'ko', transcription: '[gae]', mean: 'cĂ¡i, chiáº¿c (Ä‘Æ¡n vá»‹ Ä‘áº¿m Ä‘á»“ váº­t)', wordtype: '́˜́¡´ëª…́‚¬ (danh tá»« phá»¥)', example: '́‚¬ê³¼ ́„¸ ê°œ ́£¼́„¸́”.', example_vi: 'Cho tĂ´i ba quáº£ tĂ¡o.', remembered: false },
                    { id: 'k261', word: 'ëª…', language: 'ko', transcription: '[myeong]', mean: 'ngÆ°á»i (Ä‘Æ¡n vá»‹ Ä‘áº¿m ngÆ°á»i)', wordtype: '́˜́¡´ëª…́‚¬ (danh tá»« phá»¥)', example: 'í•™́ƒ́´ ́—´ ëª…́´́—́”.', example_vi: 'CĂ³ mÆ°á»i há»c sinh.', remembered: false },
                    { id: 'k262', word: 'ê¶Œ', language: 'ko', transcription: '[gwon]', mean: 'quyá»ƒn, cuá»‘n (sĂ¡ch)', wordtype: '́˜́¡´ëª…́‚¬ (danh tá»« phá»¥)', example: '́±… ë‘ ê¶Œ́„ ́½́—ˆ́–´́”.', example_vi: 'TĂ´i Ä‘Ă£ Ä‘á»c hai cuá»‘n sĂ¡ch.', remembered: false },
                    { id: 'k263', word: '́¥', language: 'ko', transcription: '[jang]', mean: 'tá» (giáº¥y, vĂ©)', wordtype: '́˜́¡´ëª…́‚¬ (danh tá»« phá»¥)', example: '́¢…́´ í•œ ́¥ ́£¼́„¸́”.', example_vi: 'Cho tĂ´i má»™t tá» giáº¥y.', remembered: false },
                    { id: 'k264', word: '́”', language: 'ko', transcription: '[jan]', mean: 'ly, cá»‘c (Ä‘á»“ uá»‘ng)', wordtype: '́˜́¡´ëª…́‚¬ (danh tá»« phá»¥)', example: '́»¤í”¼ í•œ ́” ë§ˆ́…”́”.', example_vi: 'TĂ´i uá»‘ng má»™t ly cĂ  phĂª.', remembered: false },
                    { id: 'k265', word: 'ë³‘', language: 'ko', transcription: '[byeong]', mean: 'chai (Ä‘á»“ uá»‘ng)', wordtype: '́˜́¡´ëª…́‚¬ (danh tá»« phá»¥)', example: 'ë¬¼ í•œ ë³‘ ́‚¬́”.', example_vi: 'TĂ´i mua má»™t chai nÆ°á»›c.', remembered: false },
                    { id: 'k266', word: 'í‚¬ë¡œê·¸ë¨', language: 'ko', transcription: '[kil-lo-geu-raem]', mean: 'kilĂ´gam (kg)', wordtype: 'ëª…́‚¬ (danh tá»«)', example: 'ê³ ê¸° ́¼ í‚¬ë¡œê·¸ë¨ ́£¼́„¸́”.', example_vi: 'Cho tĂ´i má»™t kilĂ´gam thá»‹t.', remembered: false },
                    { id: 'k267', word: 'í‚¬ë¡œë¯¸í„°', language: 'ko', transcription: '[kil-lo-mi-teo]', mean: 'kilĂ´mĂ©t (km)', wordtype: 'ëª…́‚¬ (danh tá»«)', example: '́—¬ê¸°́„œ ́˜¤ í‚¬ë¡œë¯¸í„°́˜ˆ́”.', example_vi: 'Tá»« Ä‘Ă¢y lĂ  nÄƒm kilĂ´mĂ©t.', remembered: false }
                ]
            }

        ]
    }
};

coursesData['toeic-basic'].topics.splice(0, coursesData['toeic-basic'].topics.length, ...TOEIC_BASIC_LESSONS_1_TO_50);

coursesData['topik1-basic'].topics.splice(0, 30, ...TOPIK1_LESSONS_1_TO_30);

