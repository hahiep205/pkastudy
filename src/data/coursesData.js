/* ════════════════════════════════════════════════
   PKA Study — courses-data.js
   Dữ liệu từ vựng cho các bộ tài liệu
════════════════════════════════════════════════ */

export const coursesData = {

    /* ══════════════════════════════════════
       BỘ 1 — TOEIC CƠ BẢN (Tiếng Anh)
    ══════════════════════════════════════ */
    'toeic-basic': {
        id: 'toeic-basic',
        title: '600 Essential Words for the TOEIC',
        lang: 'en',
        topics: [

            /* ─── TOPIC 1: VĂN PHÒNG ─── */
            {
                id: 'toeic-office',
                title: '🏢 Văn phòng & Công sở',
                description: 'Từ vựng thường gặp trong môi trường làm việc văn phòng',
                wordCount: 10,
                words: [
                    { id: 'w001', word: 'schedule', language: 'en', transcription: '/ˈʃɛdjuːl/', mean: 'lịch trình, thời gian biểu', wordtype: 'noun / verb', example: 'Please check the meeting schedule for tomorrow.', example_vi: 'Vui lòng kiểm tra lịch họp cho ngày mai.', remembered: false },
                    { id: 'w002', word: 'deadline', language: 'en', transcription: '/ˈdɛdlaɪn/', mean: 'thời hạn chót', wordtype: 'noun', example: 'We must finish the report before the deadline.', example_vi: 'Chúng ta phải hoàn thành báo cáo trước thời hạn chót.', remembered: false },
                    { id: 'w003', word: 'agenda', language: 'en', transcription: '/əˈdʒɛndə/', mean: 'chương trình nghị sự', wordtype: 'noun', example: 'The agenda for today\'s meeting includes budget review.', example_vi: 'Chương trình nghị sự của cuộc họp hôm nay bao gồm việc xem xét ngân sách.', remembered: false },
                    { id: 'w004', word: 'colleague', language: 'en', transcription: '/ˈkɒliːɡ/', mean: 'đồng nghiệp', wordtype: 'noun', example: 'My colleague helped me with the presentation.', example_vi: 'Đồng nghiệp của tôi đã giúp tôi chuẩn bị bài thuyết trình.', remembered: false },
                    { id: 'w005', word: 'conference', language: 'en', transcription: '/ˈkɒnfərəns/', mean: 'hội nghị, hội thảo', wordtype: 'noun', example: 'The annual conference will be held in Hanoi.', example_vi: 'Hội nghị thường niên sẽ được tổ chức tại Hà Nội.', remembered: false },
                    { id: 'w006', word: 'document', language: 'en', transcription: '/ˈdɒkjʊmənt/', mean: 'tài liệu, văn bản', wordtype: 'noun / verb', example: 'Please sign the document before submitting it.', example_vi: 'Vui lòng ký vào tài liệu trước khi nộp.', remembered: false },
                    { id: 'w007', word: 'supervisor', language: 'en', transcription: '/ˈsuːpəvaɪzər/', mean: 'người giám sát, quản lý', wordtype: 'noun', example: 'I need to report to my supervisor every Monday.', example_vi: 'Tôi cần báo cáo cho người giám sát vào mỗi thứ Hai.', remembered: false },
                    { id: 'w008', word: 'efficient', language: 'en', transcription: '/ɪˈfɪʃnt/', mean: 'hiệu quả, năng suất', wordtype: 'adjective', example: 'She is very efficient at managing multiple tasks.', example_vi: 'Cô ấy rất hiệu quả trong việc quản lý nhiều công việc cùng lúc.', remembered: false },
                    { id: 'w009', word: 'proposal', language: 'en', transcription: '/prəˈpəʊzl/', mean: 'đề xuất, bản đề nghị', wordtype: 'noun', example: 'The team submitted a proposal for a new project.', example_vi: 'Nhóm đã nộp một đề xuất cho dự án mới.', remembered: false },
                    { id: 'w010', word: 'negotiate', language: 'en', transcription: '/nɪˈɡəʊʃieɪt/', mean: 'đàm phán, thương lượng', wordtype: 'verb', example: 'We need to negotiate the contract terms with the client.', example_vi: 'Chúng ta cần đàm phán các điều khoản hợp đồng với khách hàng.', remembered: false }
                ]
            },

            /* ─── TOPIC 2: TÀI CHÍNH ─── */
            {
                id: 'toeic-finance',

                title: '💰 Tài chính & Ngân hàng',
                description: 'Từ vựng về tiền tệ, giao dịch và tài chính doanh nghiệp',
                wordCount: 10,
                words: [
                    { id: 'w011', word: 'budget', language: 'en', transcription: '/ˈbʌdʒɪt/', mean: 'ngân sách, ngân quỹ', wordtype: 'noun / verb', example: 'The company approved a larger budget for marketing.', example_vi: 'Công ty đã phê duyệt ngân sách lớn hơn cho bộ phận marketing.', remembered: false },
                    { id: 'w012', word: 'invoice', language: 'en', transcription: '/ˈɪnvɔɪs/', mean: 'hóa đơn, biên lai', wordtype: 'noun / verb', example: 'Please send the invoice to the accounting department.', example_vi: 'Vui lòng gửi hóa đơn đến bộ phận kế toán.', remembered: false },
                    { id: 'w013', word: 'revenue', language: 'en', transcription: '/ˈrɛvənjuː/', mean: 'doanh thu', wordtype: 'noun', example: 'The company\'s revenue increased by 20% this year.', example_vi: 'Doanh thu của công ty đã tăng 20% trong năm nay.', remembered: false },
                    { id: 'w014', word: 'profit', language: 'en', transcription: '/ˈprɒfɪt/', mean: 'lợi nhuận', wordtype: 'noun / verb', example: 'They made a profit of two million dollars last quarter.', example_vi: 'Họ đã đạt lợi nhuận hai triệu đô la trong quý trước.', remembered: false },
                    { id: 'w015', word: 'transaction', language: 'en', transcription: '/trænˈzækʃn/', mean: 'giao dịch', wordtype: 'noun', example: 'All transactions must be recorded in the ledger.', example_vi: 'Tất cả các giao dịch phải được ghi vào sổ cái.', remembered: false },
                    { id: 'w016', word: 'deposit', language: 'en', transcription: '/dɪˈpɒzɪt/', mean: 'tiền đặt cọc, gửi tiền', wordtype: 'noun / verb', example: 'You need to deposit at least $500 to open the account.', example_vi: 'Bạn cần gửi ít nhất 500 đô để mở tài khoản.', remembered: false },
                    { id: 'w017', word: 'loan', language: 'en', transcription: '/ləʊn/', mean: 'khoản vay, cho vay', wordtype: 'noun / verb', example: 'She applied for a bank loan to start her business.', example_vi: 'Cô ấy đã vay vốn ngân hàng để khởi nghiệp.', remembered: false },
                    { id: 'w018', word: 'interest rate', language: 'en', transcription: '/ˈɪntrəst reɪt/', mean: 'lãi suất', wordtype: 'noun phrase', example: 'The interest rate on this savings account is 3% per year.', example_vi: 'Lãi suất của tài khoản tiết kiệm này là 3% mỗi năm.', remembered: false },
                    { id: 'w019', word: 'expenditure', language: 'en', transcription: '/ɪkˈspɛndɪtʃər/', mean: 'chi tiêu, chi phí', wordtype: 'noun', example: 'We need to reduce our monthly expenditure.', example_vi: 'Chúng ta cần giảm chi tiêu hàng tháng.', remembered: false },
                    { id: 'w020', word: 'shareholder', language: 'en', transcription: '/ˈʃɛːhəʊldər/', mean: 'cổ đông', wordtype: 'noun', example: 'The shareholders voted to approve the merger.', example_vi: 'Các cổ đông đã bỏ phiếu thông qua việc sáp nhập.', remembered: false }
                ]
            },

            /* ─── TOPIC 3: DU LỊCH ─── */
            {
                id: 'toeic-travel',
                title: '✈️ Du lịch & Vận chuyển',
                description: 'Từ vựng sử dụng khi đi du lịch, đặt vé và di chuyển',
                wordCount: 10,
                words: [
                    { id: 'w021', word: 'itinerary', language: 'en', transcription: '/aɪˈtɪnərəri/', mean: 'lịch trình chuyến đi', wordtype: 'noun', example: 'The travel agent prepared our itinerary for the trip.', example_vi: 'Đại lý du lịch đã chuẩn bị lịch trình chuyến đi cho chúng tôi.', remembered: false },
                    { id: 'w022', word: 'reservation', language: 'en', transcription: '/ˌrɛzəˈveɪʃn/', mean: 'đặt chỗ trước, đặt phòng', wordtype: 'noun', example: 'I made a reservation at the hotel for three nights.', example_vi: 'Tôi đã đặt phòng khách sạn cho ba đêm.', remembered: false },
                    { id: 'w023', word: 'departure', language: 'en', transcription: '/dɪˈpɑːtʃər/', mean: 'sự khởi hành, lúc bay đi', wordtype: 'noun', example: 'The departure time is 8:30 AM from Terminal 2.', example_vi: 'Giờ khởi hành là 8:30 sáng từ Nhà ga số 2.', remembered: false },
                    { id: 'w024', word: 'customs', language: 'en', transcription: '/ˈkʌstəmz/', mean: 'hải quan', wordtype: 'noun', example: 'All passengers must go through customs upon arrival.', example_vi: 'Tất cả hành khách phải qua hải quan khi đến nơi.', remembered: false },
                    { id: 'w025', word: 'baggage', language: 'en', transcription: '/ˈbæɡɪdʒ/', mean: 'hành lý', wordtype: 'noun', example: 'You are allowed one piece of carry-on baggage.', example_vi: 'Bạn được phép mang một kiện hành lý xách tay.', remembered: false },
                    { id: 'w026', word: 'boarding pass', language: 'en', transcription: '/ˈbɔːdɪŋ pɑːs/', mean: 'thẻ lên máy bay', wordtype: 'noun phrase', example: 'Please show your boarding pass at the gate.', example_vi: 'Vui lòng xuất trình thẻ lên máy bay tại cổng.', remembered: false },
                    { id: 'w027', word: 'accommodation', language: 'en', transcription: '/əˌkɒməˈdeɪʃn/', mean: 'chỗ ở, nơi lưu trú', wordtype: 'noun', example: 'The accommodation package includes breakfast.', example_vi: 'Gói lưu trú bao gồm bữa sáng.', remembered: false },
                    { id: 'w028', word: 'transit', language: 'en', transcription: '/ˈtrænsɪt/', mean: 'quá cảnh, vận chuyển', wordtype: 'noun / verb', example: 'We have a 2-hour transit stop in Singapore.', example_vi: 'Chúng tôi có điểm dừng quá cảnh 2 giờ tại Singapore.', remembered: false },
                    { id: 'w029', word: 'carrier', language: 'en', transcription: '/ˈkærɪər/', mean: 'hãng vận chuyển, hãng hàng không', wordtype: 'noun', example: 'Which carrier did you book your flight with?', example_vi: 'Bạn đã đặt vé với hãng hàng không nào?', remembered: false },
                    { id: 'w030', word: 'refund', language: 'en', transcription: '/ˈriːfʌnd/', mean: 'hoàn tiền', wordtype: 'noun / verb', example: 'You can get a full refund if you cancel 48 hours in advance.', example_vi: 'Bạn có thể được hoàn tiền đầy đủ nếu hủy trước 48 giờ.', remembered: false }
                ]
            },

            /* ─── TOPIC 4: SỨC KHỎE ─── */
            {
                id: 'toeic-health',
                title: '🏥 Sức khỏe & Y tế',
                description: 'Từ vựng liên quan đến y tế, bảo hiểm và chăm sóc sức khỏe',
                wordCount: 10,
                words: [
                    { id: 'w031', word: 'prescription', language: 'en', transcription: '/prɪˈskrɪpʃn/', mean: 'đơn thuốc', wordtype: 'noun', example: 'The doctor gave me a prescription for antibiotics.', example_vi: 'Bác sĩ đã kê cho tôi đơn thuốc kháng sinh.', remembered: false },
                    { id: 'w032', word: 'insurance', language: 'en', transcription: '/ɪnˈʃʊərəns/', mean: 'bảo hiểm', wordtype: 'noun', example: 'Does your health insurance cover dental care?', example_vi: 'Bảo hiểm y tế của bạn có chi trả cho chăm sóc răng miệng không?', remembered: false },
                    { id: 'w033', word: 'symptom', language: 'en', transcription: '/ˈsɪmptəm/', mean: 'triệu chứng', wordtype: 'noun', example: 'Fever and cough are common symptoms of the flu.', example_vi: 'Sốt và ho là những triệu chứng phổ biến của cúm.', remembered: false },
                    { id: 'w034', word: 'diagnosis', language: 'en', transcription: '/ˌdaɪəɡˈnəʊsɪs/', mean: 'chẩn đoán bệnh', wordtype: 'noun', example: 'The diagnosis confirmed it was a minor infection.', example_vi: 'Chẩn đoán xác nhận đó chỉ là một nhiễm trùng nhẹ.', remembered: false },
                    { id: 'w035', word: 'treatment', language: 'en', transcription: '/ˈtriːtmənt/', mean: 'phương pháp điều trị', wordtype: 'noun', example: 'The treatment plan includes rest and medication.', example_vi: 'Phác đồ điều trị bao gồm nghỉ ngơi và dùng thuốc.', remembered: false },
                    { id: 'w036', word: 'pharmacy', language: 'en', transcription: '/ˈfɑːməsi/', mean: 'nhà thuốc', wordtype: 'noun', example: 'You can pick up your medicine at the pharmacy downstairs.', example_vi: 'Bạn có thể lấy thuốc tại nhà thuốc ở tầng dưới.', remembered: false },
                    { id: 'w037', word: 'appointment', language: 'en', transcription: '/əˈpɔɪntmənt/', mean: 'cuộc hẹn khám bệnh', wordtype: 'noun', example: 'I scheduled an appointment with the doctor for Friday.', example_vi: 'Tôi đã đặt lịch hẹn với bác sĩ vào thứ Sáu.', remembered: false },
                    { id: 'w038', word: 'surgeon', language: 'en', transcription: '/ˈsɜːdʒən/', mean: 'bác sĩ phẫu thuật', wordtype: 'noun', example: 'The surgeon performed the operation successfully.', example_vi: 'Bác sĩ phẫu thuật đã thực hiện ca mổ thành công.', remembered: false },
                    { id: 'w039', word: 'recover', language: 'en', transcription: '/rɪˈkʌvər/', mean: 'hồi phục, bình phục', wordtype: 'verb', example: 'He is expected to fully recover within two weeks.', example_vi: 'Anh ấy dự kiến sẽ hồi phục hoàn toàn trong vòng hai tuần.', remembered: false },
                    { id: 'w040', word: 'medication', language: 'en', transcription: '/ˌmɛdɪˈkeɪʃn/', mean: 'thuốc, dùng thuốc', wordtype: 'noun', example: 'Take your medication twice daily after meals.', example_vi: 'Uống thuốc hai lần mỗi ngày sau bữa ăn.', remembered: false }
                ]
            },

            /* ─── TOPIC 5: MARKETING ─── */
            {
                id: 'toeic-marketing',
                title: '📣 Marketing & Kinh doanh',
                description: 'Từ vựng về quảng cáo, thương hiệu và chiến lược kinh doanh',
                wordCount: 10,
                words: [
                    { id: 'w041', word: 'campaign', language: 'en', transcription: '/kæmˈpeɪn/', mean: 'chiến dịch quảng cáo', wordtype: 'noun / verb', example: 'The marketing campaign doubled our sales.', example_vi: 'Chiến dịch marketing đã giúp doanh số tăng gấp đôi.', remembered: false },
                    { id: 'w042', word: 'target audience', language: 'en', transcription: '/ˈtɑːɡɪt ˈɔːdiəns/', mean: 'đối tượng mục tiêu', wordtype: 'noun phrase', example: 'Our target audience is young professionals aged 25–35.', example_vi: 'Đối tượng mục tiêu của chúng tôi là người trẻ chuyên nghiệp từ 25–35 tuổi.', remembered: false },
                    { id: 'w043', word: 'brand', language: 'en', transcription: '/brænd/', mean: 'thương hiệu', wordtype: 'noun / verb', example: 'Building a strong brand is essential for long-term success.', example_vi: 'Xây dựng thương hiệu mạnh là điều cần thiết cho sự thành công lâu dài.', remembered: false },
                    { id: 'w044', word: 'strategy', language: 'en', transcription: '/ˈstrætɪdʒi/', mean: 'chiến lược', wordtype: 'noun', example: 'We need a new strategy to enter the Asian market.', example_vi: 'Chúng ta cần một chiến lược mới để thâm nhập thị trường châu Á.', remembered: false },
                    { id: 'w045', word: 'consumer', language: 'en', transcription: '/kənˈsjuːmər/', mean: 'người tiêu dùng', wordtype: 'noun', example: 'Consumer feedback helped improve the product design.', example_vi: 'Phản hồi của người tiêu dùng đã giúp cải thiện thiết kế sản phẩm.', remembered: false },
                    { id: 'w046', word: 'launch', language: 'en', transcription: '/lɔːntʃ/', mean: 'ra mắt, tung ra thị trường', wordtype: 'noun / verb', example: 'The company will launch its new product next month.', example_vi: 'Công ty sẽ ra mắt sản phẩm mới vào tháng tới.', remembered: false },
                    { id: 'w047', word: 'competitor', language: 'en', transcription: '/kəmˈpɛtɪtər/', mean: 'đối thủ cạnh tranh', wordtype: 'noun', example: 'We must analyze our competitors\' strategies carefully.', example_vi: 'Chúng ta cần phân tích chiến lược của đối thủ một cách cẩn thận.', remembered: false },
                    { id: 'w048', word: 'promotion', language: 'en', transcription: '/prəˈməʊʃn/', mean: 'khuyến mãi; thăng chức', wordtype: 'noun', example: 'The summer promotion attracted thousands of customers.', example_vi: 'Chương trình khuyến mãi hè đã thu hút hàng nghìn khách hàng.', remembered: false },
                    { id: 'w049', word: 'distribution', language: 'en', transcription: '/ˌdɪstrɪˈbjuːʃn/', mean: 'phân phối', wordtype: 'noun', example: 'We need to improve our distribution network.', example_vi: 'Chúng ta cần cải thiện mạng lưới phân phối.', remembered: false },
                    { id: 'w050', word: 'survey', language: 'en', transcription: '/ˈsɜːveɪ/', mean: 'khảo sát, điều tra', wordtype: 'noun / verb', example: 'The survey results showed high customer satisfaction.', example_vi: 'Kết quả khảo sát cho thấy mức độ hài lòng của khách hàng cao.', remembered: false }
                ]
            },

            /* ─── TOPIC 6: CÔNG NGHỆ & IT ─── */
            {
                id: 'toeic-it',
                title: '💻 Công nghệ & IT',
                description: 'Từ vựng về phần mềm, hệ thống và an ninh mạng',
                wordCount: 15,
                words: [
                    { id: 'w051', word: 'software', language: 'en', transcription: '/ˈsɒftweər/', mean: 'phần mềm', wordtype: 'noun', example: 'The software update improved overall system performance.', example_vi: 'Bản cập nhật phần mềm đã cải thiện hiệu suất tổng thể của hệ thống.', remembered: false },
                    { id: 'w052', word: 'database', language: 'en', transcription: '/ˈdeɪtəbeɪs/', mean: 'cơ sở dữ liệu', wordtype: 'noun', example: 'All customer records are stored in the central database.', example_vi: 'Tất cả hồ sơ khách hàng được lưu trữ trong cơ sở dữ liệu trung tâm.', remembered: false },
                    { id: 'w053', word: 'cybersecurity', language: 'en', transcription: '/ˌsaɪbəsɪˈkjʊərɪti/', mean: 'an ninh mạng', wordtype: 'noun', example: 'Cybersecurity is a top priority for every organization.', example_vi: 'An ninh mạng là ưu tiên hàng đầu của mọi tổ chức.', remembered: false },
                    { id: 'w054', word: 'network', language: 'en', transcription: '/ˈnɛtwɜːk/', mean: 'mạng lưới, kết nối mạng', wordtype: 'noun / verb', example: 'The office network was down for two hours this morning.', example_vi: 'Mạng lưới văn phòng bị gián đoạn hai giờ sáng nay.', remembered: false },
                    { id: 'w055', word: 'server', language: 'en', transcription: '/ˈsɜːvər/', mean: 'máy chủ', wordtype: 'noun', example: 'The server crashed and caused a major system outage.', example_vi: 'Máy chủ bị sập và gây ra sự cố hệ thống nghiêm trọng.', remembered: false },
                    { id: 'w056', word: 'bandwidth', language: 'en', transcription: '/ˈbændwɪdθ/', mean: 'băng thông', wordtype: 'noun', example: 'We need more bandwidth to support remote workers.', example_vi: 'Chúng ta cần thêm băng thông để hỗ trợ nhân viên làm việc từ xa.', remembered: false },
                    { id: 'w057', word: 'cloud computing', language: 'en', transcription: '/klaʊd kəmˈpjuːtɪŋ/', mean: 'điện toán đám mây', wordtype: 'noun phrase', example: 'Cloud computing reduces the need for expensive physical servers.', example_vi: 'Điện toán đám mây giảm nhu cầu sử dụng các máy chủ vật lý tốn kém.', remembered: false },
                    { id: 'w058', word: 'encryption', language: 'en', transcription: '/ɪnˈkrɪpʃn/', mean: 'mã hóa dữ liệu', wordtype: 'noun', example: 'Data encryption protects sensitive customer information.', example_vi: 'Mã hóa dữ liệu bảo vệ thông tin nhạy cảm của khách hàng.', remembered: false },
                    { id: 'w059', word: 'interface', language: 'en', transcription: '/ˈɪntəfeɪs/', mean: 'giao diện', wordtype: 'noun', example: 'The new interface is much more user-friendly than before.', example_vi: 'Giao diện mới thân thiện với người dùng hơn nhiều so với trước đây.', remembered: false },
                    { id: 'w060', word: 'backup', language: 'en', transcription: '/ˈbækʌp/', mean: 'bản sao lưu, sao lưu', wordtype: 'noun / verb', example: 'Always create a backup before updating the operating system.', example_vi: 'Luôn tạo bản sao lưu trước khi cập nhật hệ điều hành.', remembered: false },
                    { id: 'w061', word: 'algorithm', language: 'en', transcription: '/ˈælɡərɪðəm/', mean: 'thuật toán', wordtype: 'noun', example: 'The algorithm used in this program is very efficient.', example_vi: 'Thuật toán được sử dụng trong chương trình này rất hiệu quả.', remembered: false },
                    { id: 'w062', word: 'malware', language: 'en', transcription: '/ˈmælweər/', mean: 'phần mềm độc hại', wordtype: 'noun', example: 'The computer was infected with malware and had to be wiped.', example_vi: 'Máy tính bị nhiễm phần mềm độc hại và phải được xóa sạch.', remembered: false },
                    { id: 'w063', word: 'download', language: 'en', transcription: '/ˈdaʊnləʊd/', mean: 'tải xuống', wordtype: 'noun / verb', example: 'Please download the latest version of the application.', example_vi: 'Vui lòng tải xuống phiên bản mới nhất của ứng dụng.', remembered: false },
                    { id: 'w064', word: 'upgrade', language: 'en', transcription: '/ˈʌpɡreɪd/', mean: 'nâng cấp', wordtype: 'noun / verb', example: 'The IT team scheduled a system upgrade for Saturday night.', example_vi: 'Nhóm IT đã lên lịch nâng cấp hệ thống vào tối thứ Bảy.', remembered: false },
                    { id: 'w065', word: 'firewall', language: 'en', transcription: '/ˈfaɪəwɔːl/', mean: 'tường lửa', wordtype: 'noun', example: 'The firewall successfully blocked the unauthorized access attempt.', example_vi: 'Tường lửa đã chặn thành công nỗ lực truy cập trái phép.', remembered: false }
                ]
            },

            /* ─── TOPIC 7: BẤT ĐỘNG SẢN ─── */
            {
                id: 'toeic-realestate',
                title: '🏗️ Bất động sản & Xây dựng',
                description: 'Từ vựng về mua bán, thuê mướn và xây dựng bất động sản',
                wordCount: 12,
                words: [
                    { id: 'w066', word: 'property', language: 'en', transcription: '/ˈprɒpəti/', mean: 'bất động sản, tài sản', wordtype: 'noun', example: 'The company purchased a commercial property downtown.', example_vi: 'Công ty đã mua một bất động sản thương mại ở trung tâm thành phố.', remembered: false },
                    { id: 'w067', word: 'lease', language: 'en', transcription: '/liːs/', mean: 'hợp đồng thuê, cho thuê', wordtype: 'noun / verb', example: 'The office lease expires at the end of the year.', example_vi: 'Hợp đồng thuê văn phòng hết hạn vào cuối năm nay.', remembered: false },
                    { id: 'w068', word: 'tenant', language: 'en', transcription: '/ˈtɛnənt/', mean: 'người thuê (nhà, văn phòng)', wordtype: 'noun', example: 'The landlord must notify the tenant before entering the unit.', example_vi: 'Chủ nhà phải thông báo cho người thuê trước khi vào căn hộ.', remembered: false },
                    { id: 'w069', word: 'mortgage', language: 'en', transcription: '/ˈmɔːɡɪdʒ/', mean: 'thế chấp, khoản vay mua nhà', wordtype: 'noun / verb', example: 'They took out a 20-year mortgage to buy the house.', example_vi: 'Họ đã vay thế chấp 20 năm để mua ngôi nhà.', remembered: false },
                    { id: 'w070', word: 'appraisal', language: 'en', transcription: '/əˈpreɪzl/', mean: 'thẩm định giá trị', wordtype: 'noun', example: 'A professional appraisal is required before the property sale.', example_vi: 'Cần thẩm định chuyên nghiệp trước khi bán bất động sản.', remembered: false },
                    { id: 'w071', word: 'renovation', language: 'en', transcription: '/ˌrɛnəˈveɪʃn/', mean: 'cải tạo, sửa chữa', wordtype: 'noun', example: 'The building renovation is expected to take three months.', example_vi: 'Việc cải tạo tòa nhà dự kiến sẽ mất ba tháng.', remembered: false },
                    { id: 'w072', word: 'amenity', language: 'en', transcription: '/əˈmiːnɪti/', mean: 'tiện nghi, tiện ích', wordtype: 'noun', example: 'The apartment complex offers many amenities including a pool.', example_vi: 'Khu chung cư cung cấp nhiều tiện nghi bao gồm cả hồ bơi.', remembered: false },
                    { id: 'w073', word: 'vacancy', language: 'en', transcription: '/ˈveɪkənsi/', mean: 'phòng trống, chỗ trống', wordtype: 'noun', example: 'There is currently a vacancy on the third floor of our building.', example_vi: 'Hiện có một phòng trống ở tầng ba của tòa nhà chúng tôi.', remembered: false },
                    { id: 'w074', word: 'contractor', language: 'en', transcription: '/ˈkɒntræktər/', mean: 'nhà thầu xây dựng', wordtype: 'noun', example: 'The contractor submitted a detailed bid for the renovation project.', example_vi: 'Nhà thầu đã nộp hồ sơ dự thầu chi tiết cho dự án cải tạo.', remembered: false },
                    { id: 'w075', word: 'zoning', language: 'en', transcription: '/ˈzəʊnɪŋ/', mean: 'quy hoạch phân vùng', wordtype: 'noun', example: 'The area is zoned for commercial use only, not residential.', example_vi: 'Khu vực này được quy hoạch chỉ để sử dụng thương mại, không phải dân cư.', remembered: false },
                    { id: 'w076', word: 'deed', language: 'en', transcription: '/diːd/', mean: 'chứng thư, giấy sở hữu', wordtype: 'noun', example: 'The deed to the property was transferred to the new buyer.', example_vi: 'Chứng thư sở hữu bất động sản đã được chuyển sang người mua mới.', remembered: false },
                    { id: 'w077', word: 'equity', language: 'en', transcription: '/ˈɛkwɪti/', mean: 'vốn chủ sở hữu', wordtype: 'noun', example: 'They built up significant equity in their home over ten years.', example_vi: 'Họ đã tích lũy được vốn chủ sở hữu đáng kể trong ngôi nhà suốt mười năm.', remembered: false }
                ]
            },

            /* ─── TOPIC 8: NHÀ HÀNG & ĂN UỐNG ─── */
            {
                id: 'toeic-restaurant',
                title: '🍽️ Nhà hàng & Dịch vụ ăn uống',
                description: 'Từ vựng liên quan đến nhà hàng, thực đơn và dịch vụ ẩm thực',
                wordCount: 13,
                words: [
                    { id: 'w078', word: 'catering', language: 'en', transcription: '/ˈkeɪtərɪŋ/', mean: 'dịch vụ phục vụ ăn uống', wordtype: 'noun', example: 'The catering team prepared food for over 200 guests.', example_vi: 'Đội dịch vụ ăn uống đã chuẩn bị thức ăn cho hơn 200 khách.', remembered: false },
                    { id: 'w079', word: 'cuisine', language: 'en', transcription: '/kwɪˈziːn/', mean: 'ẩm thực, phong cách nấu ăn', wordtype: 'noun', example: 'The restaurant specializes in authentic French cuisine.', example_vi: 'Nhà hàng chuyên phục vụ ẩm thực Pháp chính thống.', remembered: false },
                    { id: 'w080', word: 'portion', language: 'en', transcription: '/ˈpɔːʃn/', mean: 'khẩu phần ăn', wordtype: 'noun', example: 'The portion size here is very generous for the price.', example_vi: 'Khẩu phần ăn ở đây rất hào phóng so với mức giá.', remembered: false },
                    { id: 'w081', word: 'ingredient', language: 'en', transcription: '/ɪnˈɡriːdiənt/', mean: 'nguyên liệu, thành phần', wordtype: 'noun', example: 'The chef insists on using only fresh, local ingredients.', example_vi: 'Đầu bếp khăng khăng chỉ sử dụng nguyên liệu tươi và địa phương.', remembered: false },
                    { id: 'w082', word: 'appetizer', language: 'en', transcription: '/ˈæpɪtaɪzər/', mean: 'món khai vị', wordtype: 'noun', example: 'We ordered an appetizer while waiting for the main course.', example_vi: 'Chúng tôi gọi món khai vị trong khi chờ món chính.', remembered: false },
                    { id: 'w083', word: 'beverage', language: 'en', transcription: '/ˈbɛvərɪdʒ/', mean: 'đồ uống', wordtype: 'noun', example: 'What beverages are available at your establishment?', example_vi: 'Nhà hàng của bạn có những loại đồ uống nào?', remembered: false },
                    { id: 'w084', word: 'gratuity', language: 'en', transcription: '/ɡrəˈtjuːɪti/', mean: 'tiền tip, tiền phục vụ', wordtype: 'noun', example: 'A 15% gratuity is automatically included in the bill.', example_vi: '15% tiền phục vụ được tự động tính vào hóa đơn.', remembered: false },
                    { id: 'w085', word: 'complimentary', language: 'en', transcription: '/ˌkɒmplɪˈmɛntri/', mean: 'miễn phí, tặng kèm', wordtype: 'adjective', example: 'Breakfast is complimentary for all hotel guests.', example_vi: 'Bữa sáng miễn phí dành cho tất cả khách lưu trú tại khách sạn.', remembered: false },
                    { id: 'w086', word: 'entrée', language: 'en', transcription: '/ˈɒntreɪ/', mean: 'món chính', wordtype: 'noun', example: 'The entrée comes with a choice of soup or salad.', example_vi: 'Món chính đi kèm với lựa chọn súp hoặc salad.', remembered: false },
                    { id: 'w087', word: 'allergy', language: 'en', transcription: '/ˈælədʒi/', mean: 'dị ứng thực phẩm', wordtype: 'noun', example: 'Please inform us of any food allergies before ordering.', example_vi: 'Vui lòng thông báo cho chúng tôi về bất kỳ dị ứng thực phẩm nào trước khi gọi món.', remembered: false },
                    { id: 'w088', word: 'banquet', language: 'en', transcription: '/ˈbæŋkwɪt/', mean: 'tiệc, bữa tiệc lớn', wordtype: 'noun', example: 'The company held a banquet for its top clients last Friday.', example_vi: 'Công ty đã tổ chức tiệc cho những khách hàng hàng đầu vào thứ Sáu tuần trước.', remembered: false },
                    { id: 'w089', word: 'specials', language: 'en', transcription: '/ˈspɛʃlz/', mean: 'món đặc biệt hôm nay', wordtype: 'noun', example: 'The waiter listed today\'s specials before taking our order.', example_vi: 'Người phục vụ đọc danh sách món đặc biệt hôm nay trước khi ghi đơn.', remembered: false },
                    { id: 'w090', word: 'sustainable', language: 'en', transcription: '/səˈsteɪnəbl/', mean: 'bền vững, thân thiện môi trường', wordtype: 'adjective', example: 'The restaurant sources only sustainable seafood from local fisheries.', example_vi: 'Nhà hàng chỉ sử dụng hải sản bền vững từ ngư nghiệp địa phương.', remembered: false }
                ]
            },

            /* ─── TOPIC 9: GIÁO DỤC & ĐÀO TẠO ─── */
            {
                id: 'toeic-education',
                title: '🎓 Giáo dục & Đào tạo',
                description: 'Từ vựng về học thuật, chứng chỉ và phát triển nghề nghiệp',
                wordCount: 14,
                words: [
                    { id: 'w091', word: 'curriculum', language: 'en', transcription: '/kəˈrɪkjʊləm/', mean: 'chương trình học', wordtype: 'noun', example: 'The new curriculum focuses on developing practical skills.', example_vi: 'Chương trình học mới tập trung vào việc phát triển kỹ năng thực tế.', remembered: false },
                    { id: 'w092', word: 'enrollment', language: 'en', transcription: '/ɪnˈrəʊlmənt/', mean: 'đăng ký học, ghi danh', wordtype: 'noun', example: 'Enrollment for the spring semester begins next Monday.', example_vi: 'Đăng ký học kỳ mùa xuân bắt đầu vào thứ Hai tới.', remembered: false },
                    { id: 'w093', word: 'seminar', language: 'en', transcription: '/ˈsɛmɪnɑː/', mean: 'hội thảo, buổi học nhóm', wordtype: 'noun', example: 'The management seminar was attended by 50 employees.', example_vi: 'Hội thảo quản lý có 50 nhân viên tham dự.', remembered: false },
                    { id: 'w094', word: 'certification', language: 'en', transcription: '/ˌsɜːtɪfɪˈkeɪʃn/', mean: 'chứng chỉ, chứng nhận', wordtype: 'noun', example: 'He completed the professional certification in digital marketing.', example_vi: 'Anh ấy đã hoàn thành chứng chỉ chuyên nghiệp về marketing số.', remembered: false },
                    { id: 'w095', word: 'tuition', language: 'en', transcription: '/tjuːˈɪʃn/', mean: 'học phí', wordtype: 'noun', example: 'Tuition fees increased by 5% for the upcoming academic year.', example_vi: 'Học phí tăng 5% cho năm học sắp tới.', remembered: false },
                    { id: 'w096', word: 'scholarship', language: 'en', transcription: '/ˈskɒləʃɪp/', mean: 'học bổng', wordtype: 'noun', example: 'She received a full scholarship to study at a foreign university.', example_vi: 'Cô ấy nhận được học bổng toàn phần để học tại một trường đại học nước ngoài.', remembered: false },
                    { id: 'w097', word: 'internship', language: 'en', transcription: '/ˈɪntɜːnʃɪp/', mean: 'chương trình thực tập', wordtype: 'noun', example: 'The summer internship program lasts for three months.', example_vi: 'Chương trình thực tập hè kéo dài ba tháng.', remembered: false },
                    { id: 'w098', word: 'mentor', language: 'en', transcription: '/ˈmɛntər/', mean: 'người cố vấn, người hướng dẫn', wordtype: 'noun / verb', example: 'Each new employee is assigned a mentor to help with onboarding.', example_vi: 'Mỗi nhân viên mới được phân công một người cố vấn để hỗ trợ hội nhập.', remembered: false },
                    { id: 'w099', word: 'workshop', language: 'en', transcription: '/ˈwɜːkʃɒp/', mean: 'khóa học thực hành, hội thảo thực tế', wordtype: 'noun', example: 'The company organized a creative writing workshop for the staff.', example_vi: 'Công ty tổ chức hội thảo viết sáng tạo cho nhân viên.', remembered: false },
                    { id: 'w100', word: 'accreditation', language: 'en', transcription: '/əˌkrɛdɪˈteɪʃn/', mean: 'công nhận, kiểm định chất lượng', wordtype: 'noun', example: 'The school received accreditation from the national education board.', example_vi: 'Trường được công nhận từ hội đồng giáo dục quốc gia.', remembered: false },
                    { id: 'w101', word: 'lecture', language: 'en', transcription: '/ˈlɛktʃər/', mean: 'bài giảng, thuyết trình', wordtype: 'noun / verb', example: 'The professor delivered an insightful lecture on global economics.', example_vi: 'Giáo sư đã có bài giảng sâu sắc về kinh tế toàn cầu.', remembered: false },
                    { id: 'w102', word: 'assignment', language: 'en', transcription: '/əˈsaɪnmənt/', mean: 'bài tập, nhiệm vụ được giao', wordtype: 'noun', example: 'Please submit your assignment by this Friday at noon.', example_vi: 'Vui lòng nộp bài tập trước trưa thứ Sáu tuần này.', remembered: false },
                    { id: 'w103', word: 'evaluate', language: 'en', transcription: '/ɪˈvæljueɪt/', mean: 'đánh giá, nhận xét', wordtype: 'verb', example: 'The supervisor will evaluate each employee\'s performance monthly.', example_vi: 'Người giám sát sẽ đánh giá hiệu suất của mỗi nhân viên hàng tháng.', remembered: false },
                    { id: 'w104', word: 'degree', language: 'en', transcription: '/dɪˈɡriː/', mean: 'bằng cấp học thuật', wordtype: 'noun', example: 'She holds a master\'s degree in business administration.', example_vi: 'Cô ấy có bằng thạc sĩ quản trị kinh doanh.', remembered: false }
                ]
            },

            /* ─── TOPIC 10: PHÁP LÝ & HỢP ĐỒNG ─── */
            {
                id: 'toeic-legal',
                title: '⚖️ Pháp lý & Hợp đồng',
                description: 'Từ vựng về luật pháp, điều khoản hợp đồng và tuân thủ quy định',
                wordCount: 12,
                words: [
                    { id: 'w105', word: 'clause', language: 'en', transcription: '/klɔːz/', mean: 'điều khoản (hợp đồng)', wordtype: 'noun', example: 'The contract includes a strict confidentiality clause.', example_vi: 'Hợp đồng bao gồm một điều khoản bảo mật nghiêm ngặt.', remembered: false },
                    { id: 'w106', word: 'liability', language: 'en', transcription: '/ˌlaɪəˈbɪlɪti/', mean: 'trách nhiệm pháp lý', wordtype: 'noun', example: 'The company denied any liability for the workplace accident.', example_vi: 'Công ty phủ nhận bất kỳ trách nhiệm pháp lý nào đối với tai nạn lao động.', remembered: false },
                    { id: 'w107', word: 'compliance', language: 'en', transcription: '/kəmˈplaɪəns/', mean: 'sự tuân thủ quy định', wordtype: 'noun', example: 'All staff must ensure compliance with data protection laws.', example_vi: 'Tất cả nhân viên phải đảm bảo tuân thủ các luật bảo vệ dữ liệu.', remembered: false },
                    { id: 'w108', word: 'arbitration', language: 'en', transcription: '/ˌɑːbɪˈtreɪʃn/', mean: 'trọng tài, phân xử', wordtype: 'noun', example: 'The business dispute was resolved through binding arbitration.', example_vi: 'Tranh chấp kinh doanh được giải quyết thông qua trọng tài ràng buộc.', remembered: false },
                    { id: 'w109', word: 'intellectual property', language: 'en', transcription: '/ˌɪntəˈlɛktʃuəl ˈprɒpəti/', mean: 'sở hữu trí tuệ', wordtype: 'noun phrase', example: 'The company aggressively protects its intellectual property rights.', example_vi: 'Công ty tích cực bảo vệ quyền sở hữu trí tuệ của mình.', remembered: false },
                    { id: 'w110', word: 'indemnify', language: 'en', transcription: '/ɪnˈdɛmnɪfaɪ/', mean: 'bồi thường, bảo đảm không bị thiệt hại', wordtype: 'verb', example: 'The contractor agreed to indemnify the client against all losses.', example_vi: 'Nhà thầu đồng ý bồi thường cho khách hàng trước mọi tổn thất.', remembered: false },
                    { id: 'w111', word: 'breach', language: 'en', transcription: '/briːtʃ/', mean: 'vi phạm (hợp đồng)', wordtype: 'noun / verb', example: 'Failing to deliver on time constitutes a breach of contract.', example_vi: 'Không giao hàng đúng hạn cấu thành vi phạm hợp đồng.', remembered: false },
                    { id: 'w112', word: 'jurisdiction', language: 'en', transcription: '/ˌdʒʊərɪsˈdɪkʃn/', mean: 'thẩm quyền pháp lý', wordtype: 'noun', example: 'This agreement falls under the jurisdiction of Vietnamese law.', example_vi: 'Thỏa thuận này thuộc thẩm quyền của pháp luật Việt Nam.', remembered: false },
                    { id: 'w113', word: 'amendment', language: 'en', transcription: '/əˈmɛndmənt/', mean: 'điều chỉnh, sửa đổi', wordtype: 'noun', example: 'An amendment was made to reflect the new payment terms.', example_vi: 'Một điều chỉnh đã được thực hiện để phản ánh các điều khoản thanh toán mới.', remembered: false },
                    { id: 'w114', word: 'warranty', language: 'en', transcription: '/ˈwɒrənti/', mean: 'bảo hành, cam kết', wordtype: 'noun', example: 'The product comes with a two-year manufacturer\'s warranty.', example_vi: 'Sản phẩm đi kèm với bảo hành hai năm của nhà sản xuất.', remembered: false },
                    { id: 'w115', word: 'confidential', language: 'en', transcription: '/ˌkɒnfɪˈdɛnʃl/', mean: 'bảo mật, mang tính riêng tư', wordtype: 'adjective', example: 'All discussions in this meeting are strictly confidential.', example_vi: 'Tất cả các thảo luận trong cuộc họp này đều tuyệt đối bảo mật.', remembered: false },
                    { id: 'w116', word: 'litigation', language: 'en', transcription: '/ˌlɪtɪˈɡeɪʃn/', mean: 'kiện tụng, tranh tụng pháp lý', wordtype: 'noun', example: 'The company is trying hard to avoid costly litigation.', example_vi: 'Công ty đang cố gắng tránh các vụ kiện tụng tốn kém.', remembered: false }
                ]
            },

            /* ─── TOPIC 11: SẢN XUẤT & LOGISTICS ─── */
            {
                id: 'toeic-manufacturing',
                title: '📦 Sản xuất & Logistics',
                description: 'Từ vựng về dây chuyền sản xuất, kho hàng và vận chuyển hàng hóa',
                wordCount: 15,
                words: [
                    { id: 'w117', word: 'assembly', language: 'en', transcription: '/əˈsɛmbli/', mean: 'lắp ráp, dây chuyền lắp ráp', wordtype: 'noun', example: 'The assembly line produces 500 units per eight-hour shift.', example_vi: 'Dây chuyền lắp ráp sản xuất 500 đơn vị mỗi ca làm việc tám giờ.', remembered: false },
                    { id: 'w118', word: 'inventory', language: 'en', transcription: '/ˈɪnvəntri/', mean: 'hàng tồn kho', wordtype: 'noun', example: 'We need to reduce our inventory levels before the fiscal year ends.', example_vi: 'Chúng ta cần giảm mức hàng tồn kho trước khi kết thúc năm tài chính.', remembered: false },
                    { id: 'w119', word: 'shipment', language: 'en', transcription: '/ˈʃɪpmənt/', mean: 'lô hàng, chuyến hàng giao', wordtype: 'noun', example: 'The shipment is scheduled to arrive at the warehouse on Monday.', example_vi: 'Lô hàng được lên lịch đến kho vào thứ Hai.', remembered: false },
                    { id: 'w120', word: 'warehouse', language: 'en', transcription: '/ˈweəhaʊs/', mean: 'kho hàng, nhà kho', wordtype: 'noun', example: 'The new warehouse can store up to 10,000 pallets of goods.', example_vi: 'Kho hàng mới có thể chứa tới 10.000 pallet hàng hóa.', remembered: false },
                    { id: 'w121', word: 'procurement', language: 'en', transcription: '/prəˈkjʊərmənt/', mean: 'mua sắm, thu mua vật tư', wordtype: 'noun', example: 'The procurement department handles all supplier contracts and orders.', example_vi: 'Bộ phận thu mua xử lý tất cả hợp đồng và đơn đặt hàng với nhà cung cấp.', remembered: false },
                    { id: 'w122', word: 'defect', language: 'en', transcription: '/ˈdiːfɛkt/', mean: 'lỗi, khiếm khuyết sản phẩm', wordtype: 'noun', example: 'Quality control detected a minor defect in the latest batch.', example_vi: 'Kiểm soát chất lượng phát hiện lỗi nhỏ trong lô hàng mới nhất.', remembered: false },
                    { id: 'w123', word: 'output', language: 'en', transcription: '/ˈaʊtpʊt/', mean: 'sản lượng, đầu ra', wordtype: 'noun', example: 'The factory increased its monthly output by 15% this quarter.', example_vi: 'Nhà máy đã tăng sản lượng hàng tháng lên 15% trong quý này.', remembered: false },
                    { id: 'w124', word: 'freight', language: 'en', transcription: '/freɪt/', mean: 'hàng vận chuyển, cước phí vận tải', wordtype: 'noun', example: 'The freight charges for air shipment are higher than sea freight.', example_vi: 'Cước phí vận chuyển hàng không cao hơn vận chuyển đường biển.', remembered: false },
                    { id: 'w125', word: 'customs clearance', language: 'en', transcription: '/ˈkʌstəmz ˈklɪərəns/', mean: 'thông quan hải quan', wordtype: 'noun phrase', example: 'Customs clearance took longer than expected due to missing documents.', example_vi: 'Thông quan hải quan mất nhiều thời gian hơn dự kiến do thiếu giấy tờ.', remembered: false },
                    { id: 'w126', word: 'supplier', language: 'en', transcription: '/səˈplaɪər/', mean: 'nhà cung cấp nguyên liệu', wordtype: 'noun', example: 'We are looking for a reliable supplier of high-quality raw materials.', example_vi: 'Chúng ta đang tìm kiếm nhà cung cấp nguyên liệu thô chất lượng cao đáng tin cậy.', remembered: false },
                    { id: 'w127', word: 'recall', language: 'en', transcription: '/rɪˈkɔːl/', mean: 'thu hồi sản phẩm', wordtype: 'noun / verb', example: 'The manufacturer issued a product recall due to safety concerns.', example_vi: 'Nhà sản xuất đã phát lệnh thu hồi sản phẩm do lo ngại về an toàn.', remembered: false },
                    { id: 'w128', word: 'lead time', language: 'en', transcription: '/liːd taɪm/', mean: 'thời gian chuẩn bị và sản xuất', wordtype: 'noun phrase', example: 'The lead time for this custom order is approximately four weeks.', example_vi: 'Thời gian chuẩn bị cho đơn đặt hàng tùy chỉnh này là khoảng bốn tuần.', remembered: false },
                    { id: 'w129', word: 'batch', language: 'en', transcription: '/bætʃ/', mean: 'lô, mẻ sản phẩm', wordtype: 'noun', example: 'The first batch of products passed all quality inspection tests.', example_vi: 'Lô sản phẩm đầu tiên đã vượt qua tất cả các bài kiểm tra chất lượng.', remembered: false },
                    { id: 'w130', word: 'packaging', language: 'en', transcription: '/ˈpækɪdʒɪŋ/', mean: 'bao bì, đóng gói', wordtype: 'noun', example: 'The redesigned packaging attracted significantly more customers.', example_vi: 'Bao bì được thiết kế lại đã thu hút nhiều khách hàng hơn đáng kể.', remembered: false },
                    { id: 'w131', word: 'logistics', language: 'en', transcription: '/ləˈdʒɪstɪks/', mean: 'hậu cần, quản lý vận chuyển', wordtype: 'noun', example: 'Effective logistics management reduces delivery time significantly.', example_vi: 'Quản lý hậu cần hiệu quả giúp giảm đáng kể thời gian giao hàng.', remembered: false }
                ]
            },

            /* ─── TOPIC 12: MÔI TRƯỜNG & NĂNG LƯỢNG ─── */
            {
                id: 'toeic-environment',
                title: '🌿 Môi trường & Năng lượng',
                description: 'Từ vựng về phát triển bền vững, năng lượng tái tạo và bảo vệ môi trường',
                wordCount: 11,
                words: [
                    { id: 'w132', word: 'sustainability', language: 'en', transcription: '/səˌsteɪnəˈbɪlɪti/', mean: 'tính bền vững, phát triển bền vững', wordtype: 'noun', example: 'The company committed to achieving full sustainability by 2030.', example_vi: 'Công ty cam kết đạt được sự phát triển bền vững hoàn toàn vào năm 2030.', remembered: false },
                    { id: 'w133', word: 'renewable', language: 'en', transcription: '/rɪˈnjuːəbl/', mean: 'có thể tái tạo', wordtype: 'adjective', example: 'Renewable energy sources include solar, wind, and hydroelectric power.', example_vi: 'Nguồn năng lượng tái tạo bao gồm năng lượng mặt trời, gió và thủy điện.', remembered: false },
                    { id: 'w134', word: 'emission', language: 'en', transcription: '/ɪˈmɪʃn/', mean: 'khí thải, lượng phát thải', wordtype: 'noun', example: 'The factory reduced its carbon emissions by 30% this year.', example_vi: 'Nhà máy đã giảm lượng khí thải carbon xuống 30% trong năm nay.', remembered: false },
                    { id: 'w135', word: 'recycle', language: 'en', transcription: '/riːˈsaɪkl/', mean: 'tái chế', wordtype: 'verb', example: 'The office recycles all paper, plastic, and electronic waste.', example_vi: 'Văn phòng tái chế tất cả giấy, nhựa và rác thải điện tử.', remembered: false },
                    { id: 'w136', word: 'carbon footprint', language: 'en', transcription: '/ˈkɑːbən ˈfʊtprɪnt/', mean: 'lượng khí thải carbon cá nhân/tổ chức', wordtype: 'noun phrase', example: 'Reducing your carbon footprint is essential to fighting climate change.', example_vi: 'Giảm lượng khí thải carbon của bạn là điều thiết yếu để chống biến đổi khí hậu.', remembered: false },
                    { id: 'w137', word: 'conservation', language: 'en', transcription: '/ˌkɒnsəˈveɪʃn/', mean: 'bảo tồn, tiết kiệm tài nguyên', wordtype: 'noun', example: 'Water conservation is critical in regions prone to drought.', example_vi: 'Bảo tồn nước rất quan trọng ở các vùng dễ bị hạn hán.', remembered: false },
                    { id: 'w138', word: 'biodegradable', language: 'en', transcription: '/ˌbaɪəʊdɪˈɡreɪdəbl/', mean: 'có thể phân hủy sinh học', wordtype: 'adjective', example: 'The company switched to biodegradable packaging to reduce waste.', example_vi: 'Công ty chuyển sang sử dụng bao bì có thể phân hủy sinh học để giảm rác thải.', remembered: false },
                    { id: 'w139', word: 'contamination', language: 'en', transcription: '/kənˌtæmɪˈneɪʃn/', mean: 'ô nhiễm, nhiễm bẩn', wordtype: 'noun', example: 'Soil contamination near the factory was a serious health concern.', example_vi: 'Ô nhiễm đất gần nhà máy là một mối lo ngại sức khỏe nghiêm trọng.', remembered: false },
                    { id: 'w140', word: 'regulation', language: 'en', transcription: '/ˌrɛɡjʊˈleɪʃn/', mean: 'quy định, điều lệ', wordtype: 'noun', example: 'Stricter environmental regulations took effect at the start of the year.', example_vi: 'Các quy định môi trường nghiêm ngặt hơn có hiệu lực từ đầu năm.', remembered: false },
                    { id: 'w141', word: 'solar panel', language: 'en', transcription: '/ˈsəʊlər ˈpænl/', mean: 'tấm pin năng lượng mặt trời', wordtype: 'noun phrase', example: 'Solar panels were installed on the factory roof to cut energy costs.', example_vi: 'Tấm pin năng lượng mặt trời được lắp trên mái nhà máy để giảm chi phí năng lượng.', remembered: false },
                    { id: 'w142', word: 'waste management', language: 'en', transcription: '/weɪst ˈmænɪdʒmənt/', mean: 'quản lý chất thải', wordtype: 'noun phrase', example: 'The city invested in improving its waste management infrastructure.', example_vi: 'Thành phố đầu tư vào việc cải thiện cơ sở hạ tầng quản lý chất thải.', remembered: false }
                ]
            },

            /* ─── TOPIC 13: NHÂN SỰ & TUYỂN DỤNG ─── */
            {
                id: 'toeic-hr',
                title: '👥 Nhân sự & Tuyển dụng',
                description: 'Từ vựng về tuyển dụng, phúc lợi và quản lý nhân viên',
                wordCount: 14,
                words: [
                    { id: 'w143', word: 'résumé', language: 'en', transcription: '/ˈrɛzjʊmeɪ/', mean: 'sơ yếu lý lịch, CV', wordtype: 'noun', example: 'Please send your résumé and cover letter to hr@company.com.', example_vi: 'Vui lòng gửi CV và thư xin việc đến hr@company.com.', remembered: false },
                    { id: 'w144', word: 'interview', language: 'en', transcription: '/ˈɪntəvjuː/', mean: 'buổi phỏng vấn', wordtype: 'noun / verb', example: 'She has a job interview scheduled for Tuesday afternoon.', example_vi: 'Cô ấy có lịch phỏng vấn xin việc vào chiều thứ Ba.', remembered: false },
                    { id: 'w145', word: 'candidate', language: 'en', transcription: '/ˈkændɪdɪt/', mean: 'ứng viên, người ứng tuyển', wordtype: 'noun', example: 'The hiring committee shortlisted ten candidates for the final round.', example_vi: 'Hội đồng tuyển dụng đã chọn mười ứng viên vào vòng cuối.', remembered: false },
                    { id: 'w146', word: 'onboarding', language: 'en', transcription: '/ˈɒnˌbɔːdɪŋ/', mean: 'đào tạo hội nhập nhân viên mới', wordtype: 'noun', example: 'The onboarding process for new hires takes approximately two weeks.', example_vi: 'Quá trình đào tạo hội nhập cho nhân viên mới mất khoảng hai tuần.', remembered: false },
                    { id: 'w147', word: 'retention', language: 'en', transcription: '/rɪˈtɛnʃn/', mean: 'giữ chân nhân viên', wordtype: 'noun', example: 'Employee retention is one of the biggest challenges in the tech industry.', example_vi: 'Giữ chân nhân viên là một trong những thách thức lớn nhất trong ngành công nghệ.', remembered: false },
                    { id: 'w148', word: 'performance review', language: 'en', transcription: '/pəˈfɔːməns rɪˈvjuː/', mean: 'đánh giá hiệu suất làm việc', wordtype: 'noun phrase', example: 'Annual performance reviews are conducted every December.', example_vi: 'Đánh giá hiệu suất hàng năm được tiến hành vào mỗi tháng Mười Hai.', remembered: false },
                    { id: 'w149', word: 'compensation', language: 'en', transcription: '/ˌkɒmpənˈseɪʃn/', mean: 'thù lao, lương thưởng tổng thể', wordtype: 'noun', example: 'The compensation package includes salary, bonuses, and health benefits.', example_vi: 'Gói thù lao bao gồm lương, thưởng và phúc lợi y tế.', remembered: false },
                    { id: 'w150', word: 'benefits', language: 'en', transcription: '/ˈbɛnɪfɪts/', mean: 'phúc lợi nhân viên', wordtype: 'noun', example: 'The company offers excellent benefits including paid vacation and health insurance.', example_vi: 'Công ty cung cấp phúc lợi xuất sắc bao gồm nghỉ phép có lương và bảo hiểm y tế.', remembered: false },
                    { id: 'w151', word: 'advancement', language: 'en', transcription: '/ədˈvɑːnsmənt/', mean: 'thăng tiến trong công việc', wordtype: 'noun', example: 'There are many opportunities for career advancement within this organization.', example_vi: 'Có nhiều cơ hội thăng tiến trong sự nghiệp trong tổ chức này.', remembered: false },
                    { id: 'w152', word: 'redundancy', language: 'en', transcription: '/rɪˈdʌndənsi/', mean: 'cắt giảm nhân sự, dư thừa lao động', wordtype: 'noun', example: 'The company announced 50 redundancies due to budget constraints.', example_vi: 'Công ty thông báo cắt giảm 50 nhân sự do hạn chế ngân sách.', remembered: false },
                    { id: 'w153', word: 'diversity', language: 'en', transcription: '/daɪˈvɜːsɪti/', mean: 'sự đa dạng (nhân lực)', wordtype: 'noun', example: 'The company actively promotes diversity and inclusion in the workplace.', example_vi: 'Công ty tích cực thúc đẩy sự đa dạng và hòa nhập trong môi trường làm việc.', remembered: false },
                    { id: 'w154', word: 'grievance', language: 'en', transcription: '/ˈɡriːvəns/', mean: 'khiếu nại, phàn nàn chính thức', wordtype: 'noun', example: 'Employees can formally file a grievance through the HR department.', example_vi: 'Nhân viên có thể chính thức nộp đơn khiếu nại qua phòng nhân sự.', remembered: false },
                    { id: 'w155', word: 'probation', language: 'en', transcription: '/prəˈbeɪʃn/', mean: 'thời gian thử việc', wordtype: 'noun', example: 'The new employee is on a three-month probation period.', example_vi: 'Nhân viên mới đang trong thời gian thử việc ba tháng.', remembered: false },
                    { id: 'w156', word: 'payroll', language: 'en', transcription: '/ˈpeɪrəʊl/', mean: 'bảng lương, quỹ lương', wordtype: 'noun', example: 'The payroll is processed on the last business day of each month.', example_vi: 'Bảng lương được xử lý vào ngày làm việc cuối cùng của mỗi tháng.', remembered: false }
                ]
            },

            /* ─── TOPIC 14: MUA SẮM & BÁN LẺ ─── */
            {
                id: 'toeic-retail',
                title: '🛒 Mua sắm & Bán lẻ',
                description: 'Từ vựng về hàng hóa, khuyến mãi và giao dịch mua bán lẻ',
                wordCount: 13,
                words: [
                    { id: 'w157', word: 'merchandise', language: 'en', transcription: '/ˈmɜːtʃəndaɪs/', mean: 'hàng hóa, mặt hàng bày bán', wordtype: 'noun', example: 'The store displays new merchandise in the window every week.', example_vi: 'Cửa hàng trưng bày hàng hóa mới ở cửa sổ mỗi tuần.', remembered: false },
                    { id: 'w158', word: 'retailer', language: 'en', transcription: '/ˈriːteɪlər/', mean: 'nhà bán lẻ', wordtype: 'noun', example: 'Online retailers have grown significantly in recent years.', example_vi: 'Các nhà bán lẻ trực tuyến đã phát triển đáng kể trong những năm gần đây.', remembered: false },
                    { id: 'w159', word: 'discount', language: 'en', transcription: '/ˈdɪskaʊnt/', mean: 'giảm giá, chiết khấu', wordtype: 'noun / verb', example: 'All items are discounted by 20% during the weekend sale.', example_vi: 'Tất cả mặt hàng được giảm giá 20% trong đợt khuyến mãi cuối tuần.', remembered: false },
                    { id: 'w160', word: 'receipt', language: 'en', transcription: '/rɪˈsiːt/', mean: 'biên lai, hóa đơn mua hàng', wordtype: 'noun', example: 'Please keep your receipt in case you need to return the item.', example_vi: 'Vui lòng giữ biên lai trong trường hợp bạn cần trả lại mặt hàng.', remembered: false },
                    { id: 'w161', word: 'exchange', language: 'en', transcription: '/ɪksˈtʃeɪndʒ/', mean: 'đổi hàng, trao đổi', wordtype: 'noun / verb', example: 'The customer exchanged the shirt for a larger size without any issues.', example_vi: 'Khách hàng đổi chiếc áo lấy size lớn hơn mà không gặp vấn đề gì.', remembered: false },
                    { id: 'w162', word: 'wholesale', language: 'en', transcription: '/ˈhəʊlseɪl/', mean: 'bán buôn, giá sỉ', wordtype: 'noun / adjective', example: 'We purchase all our products at wholesale prices to maximize profit.', example_vi: 'Chúng tôi mua tất cả sản phẩm với giá bán buôn để tối đa hóa lợi nhuận.', remembered: false },
                    { id: 'w163', word: 'markup', language: 'en', transcription: '/ˈmɑːkʌp/', mean: 'mức cộng thêm vào giá vốn', wordtype: 'noun', example: 'The store applies a 40% markup on all imported luxury goods.', example_vi: 'Cửa hàng áp dụng mức cộng thêm 40% trên tất cả hàng hóa xa xỉ nhập khẩu.', remembered: false },
                    { id: 'w164', word: 'loyalty program', language: 'en', transcription: '/ˈlɔɪəlti ˈprəʊɡræm/', mean: 'chương trình khách hàng thân thiết', wordtype: 'noun phrase', example: 'Join our loyalty program to earn points on every purchase.', example_vi: 'Tham gia chương trình khách hàng thân thiết để tích điểm mỗi lần mua hàng.', remembered: false },
                    { id: 'w165', word: 'vendor', language: 'en', transcription: '/ˈvɛndər/', mean: 'người bán hàng, nhà cung ứng', wordtype: 'noun', example: 'Several vendors were invited to submit bids for the annual contract.', example_vi: 'Nhiều nhà cung ứng được mời nộp đơn đấu thầu cho hợp đồng hàng năm.', remembered: false },
                    { id: 'w166', word: 'storefront', language: 'en', transcription: '/ˈstɔːfrʌnt/', mean: 'mặt tiền cửa hàng', wordtype: 'noun', example: 'The attractive storefront design draws customers in from the street.', example_vi: 'Thiết kế mặt tiền hấp dẫn thu hút khách hàng từ phía đường.', remembered: false },
                    { id: 'w167', word: 'clearance', language: 'en', transcription: '/ˈklɪərəns/', mean: 'thanh lý hàng, giải phóng hàng tồn', wordtype: 'noun', example: 'All clearance items are final sale and cannot be returned.', example_vi: 'Tất cả hàng thanh lý là mua bán cuối cùng và không được hoàn trả.', remembered: false },
                    { id: 'w168', word: 'outlet', language: 'en', transcription: '/ˈaʊtlɛt/', mean: 'cửa hàng giảm giá, chuỗi cửa hàng', wordtype: 'noun', example: 'The brand opened a new outlet store at the shopping center.', example_vi: 'Thương hiệu đã mở một cửa hàng giảm giá mới tại trung tâm mua sắm.', remembered: false },
                    { id: 'w169', word: 'catalog', language: 'en', transcription: '/ˈkætəlɒɡ/', mean: 'danh mục sản phẩm', wordtype: 'noun', example: 'Browse our online catalog to see all available products and prices.', example_vi: 'Duyệt qua danh mục trực tuyến của chúng tôi để xem tất cả sản phẩm và giá cả.', remembered: false }
                ]
            },

            /* ─── TOPIC 15: TRUYỀN THÔNG & BÁO CHÍ ─── */
            {
                id: 'toeic-media',
                title: '📡 Truyền thông & Báo chí',
                description: 'Từ vựng về báo chí, phát sóng và truyền thông đại chúng',
                wordCount: 12,
                words: [
                    { id: 'w170', word: 'broadcast', language: 'en', transcription: '/ˈbrɔːdkɑːst/', mean: 'phát sóng, truyền phát', wordtype: 'noun / verb', example: 'The news was broadcast live across all major television channels.', example_vi: 'Tin tức được phát sóng trực tiếp trên tất cả các kênh truyền hình lớn.', remembered: false },
                    { id: 'w171', word: 'press release', language: 'en', transcription: '/prɛs rɪˈliːs/', mean: 'thông cáo báo chí', wordtype: 'noun phrase', example: 'The company issued a press release announcing the new partnership.', example_vi: 'Công ty đã phát hành thông cáo báo chí thông báo về quan hệ đối tác mới.', remembered: false },
                    { id: 'w172', word: 'editorial', language: 'en', transcription: '/ˌɛdɪˈtɔːriəl/', mean: 'bài xã luận, tòa soạn', wordtype: 'noun / adjective', example: 'The editorial criticized the government\'s new economic policy.', example_vi: 'Bài xã luận chỉ trích chính sách kinh tế mới của chính phủ.', remembered: false },
                    { id: 'w173', word: 'circulation', language: 'en', transcription: '/ˌsɜːkjʊˈleɪʃn/', mean: 'lượng phát hành, số lượng bản in', wordtype: 'noun', example: 'The newspaper has a daily circulation of over one million copies.', example_vi: 'Tờ báo có lượng phát hành hàng ngày hơn một triệu bản.', remembered: false },
                    { id: 'w174', word: 'spokesperson', language: 'en', transcription: '/ˈspəʊkspɜːsən/', mean: 'người phát ngôn', wordtype: 'noun', example: 'The company\'s spokesperson denied the allegations at the press conference.', example_vi: 'Người phát ngôn của công ty đã phủ nhận các cáo buộc tại buổi họp báo.', remembered: false },
                    { id: 'w175', word: 'correspondent', language: 'en', transcription: '/ˌkɒrɪˈspɒndənt/', mean: 'phóng viên đặc phái, thông tín viên', wordtype: 'noun', example: 'Our foreign correspondent reported live from the scene.', example_vi: 'Phóng viên đặc phái nước ngoài của chúng tôi đã đưa tin trực tiếp từ hiện trường.', remembered: false },
                    { id: 'w176', word: 'headline', language: 'en', transcription: '/ˈhɛdlaɪn/', mean: 'tiêu đề, tít báo', wordtype: 'noun', example: 'The merger made headlines in all the major business newspapers.', example_vi: 'Vụ sáp nhập đã lên tiêu đề của tất cả các tờ báo kinh doanh lớn.', remembered: false },
                    { id: 'w177', word: 'subscribe', language: 'en', transcription: '/səbˈskraɪb/', mean: 'đăng ký, đặt mua', wordtype: 'verb', example: 'You can subscribe to the magazine for a discounted annual rate.', example_vi: 'Bạn có thể đăng ký tạp chí với mức giá hàng năm được giảm.', remembered: false },
                    { id: 'w178', word: 'coverage', language: 'en', transcription: '/ˈkʌvərɪdʒ/', mean: 'phạm vi đưa tin, độ phủ sóng', wordtype: 'noun', example: 'The event received extensive media coverage both locally and internationally.', example_vi: 'Sự kiện nhận được sự đưa tin rộng rãi của truyền thông cả trong nước và quốc tế.', remembered: false },
                    { id: 'w179', word: 'exclusive', language: 'en', transcription: '/ɪkˈskluːsɪv/', mean: 'độc quyền, tin đặc biệt', wordtype: 'adjective / noun', example: 'The journalist scored an exclusive interview with the CEO.', example_vi: 'Nhà báo đã có được một cuộc phỏng vấn độc quyền với CEO.', remembered: false },
                    { id: 'w180', word: 'readership', language: 'en', transcription: '/ˈriːdəʃɪp/', mean: 'số lượng độc giả, lượng người đọc', wordtype: 'noun', example: 'The online magazine has grown its readership to 5 million monthly visitors.', example_vi: 'Tạp chí trực tuyến đã tăng lượng độc giả lên 5 triệu lượt truy cập hàng tháng.', remembered: false },
                    { id: 'w181', word: 'media outlet', language: 'en', transcription: '/ˈmiːdiə ˈaʊtlɛt/', mean: 'kênh truyền thông', wordtype: 'noun phrase', example: 'Several major media outlets covered the company\'s product launch event.', example_vi: 'Một số kênh truyền thông lớn đã đưa tin về sự kiện ra mắt sản phẩm của công ty.', remembered: false }
                ]
            },

            /* ─── TOPIC 16: ĐÀM PHÁN & QUAN HỆ KHÁCH HÀNG ─── */
            {
                id: 'toeic-negotiation',
                title: '🤝 Đàm phán & Quan hệ khách hàng',
                description: 'Từ vựng trong quá trình thương lượng, ký kết và duy trì quan hệ đối tác',
                wordCount: 15,
                words: [
                    { id: 'w182', word: 'leverage', language: 'en', transcription: '/ˈliːvərɪdʒ/', mean: 'đòn bẩy, lợi thế thương lượng', wordtype: 'noun / verb', example: 'The company used its strong market position as leverage in negotiations.', example_vi: 'Công ty sử dụng vị thế thị trường mạnh như một đòn bẩy trong đàm phán.', remembered: false },
                    { id: 'w183', word: 'counterpart', language: 'en', transcription: '/ˈkaʊntəpɑːt/', mean: 'đối tác, người đồng cấp phía bên kia', wordtype: 'noun', example: 'She met with her counterpart from the French company to discuss the deal.', example_vi: 'Cô ấy gặp người đồng cấp từ công ty Pháp để thảo luận về thỏa thuận.', remembered: false },
                    { id: 'w184', word: 'concession', language: 'en', transcription: '/kənˈsɛʃn/', mean: 'sự nhượng bộ', wordtype: 'noun', example: 'Both sides made concessions to reach a mutually acceptable agreement.', example_vi: 'Cả hai bên đã nhượng bộ để đạt được thỏa thuận chấp nhận được cho đôi bên.', remembered: false },
                    { id: 'w185', word: 'compromise', language: 'en', transcription: '/ˈkɒmprəmaɪz/', mean: 'thỏa hiệp, dàn xếp', wordtype: 'noun / verb', example: 'After three hours of talks, both parties agreed on a fair compromise.', example_vi: 'Sau ba giờ đàm phán, cả hai bên đồng ý đạt được một sự thỏa hiệp công bằng.', remembered: false },
                    { id: 'w186', word: 'bottom line', language: 'en', transcription: '/ˈbɒtəm laɪn/', mean: 'lợi nhuận ròng; điều cốt yếu nhất', wordtype: 'noun phrase', example: 'The bottom line is that we cannot accept a price below $50 per unit.', example_vi: 'Điều cốt yếu là chúng ta không thể chấp nhận giá thấp hơn 50 đô mỗi đơn vị.', remembered: false },
                    { id: 'w187', word: 'mutual', language: 'en', transcription: '/ˈmjuːtʃuəl/', mean: 'tương hỗ, cùng nhau', wordtype: 'adjective', example: 'The partnership is built on mutual trust and shared goals.', example_vi: 'Quan hệ đối tác được xây dựng trên sự tin tưởng lẫn nhau và các mục tiêu chung.', remembered: false },
                    { id: 'w188', word: 'terms', language: 'en', transcription: '/tɜːmz/', mean: 'điều kiện, điều khoản thỏa thuận', wordtype: 'noun', example: 'We need to carefully review the terms before signing the agreement.', example_vi: 'Chúng ta cần xem xét kỹ lưỡng các điều khoản trước khi ký thỏa thuận.', remembered: false },
                    { id: 'w189', word: 'binding', language: 'en', transcription: '/ˈbaɪndɪŋ/', mean: 'ràng buộc về mặt pháp lý', wordtype: 'adjective', example: 'This agreement is legally binding and cannot be changed unilaterally.', example_vi: 'Thỏa thuận này có tính ràng buộc pháp lý và không thể thay đổi đơn phương.', remembered: false },
                    { id: 'w190', word: 'intermediary', language: 'en', transcription: '/ˌɪntəˈmiːdiəri/', mean: 'người trung gian, bên môi giới', wordtype: 'noun', example: 'The company hired an intermediary to facilitate the overseas deal.', example_vi: 'Công ty thuê một người trung gian để hỗ trợ thỏa thuận với đối tác nước ngoài.', remembered: false },
                    { id: 'w191', word: 'consensus', language: 'en', transcription: '/kənˈsɛnsəs/', mean: 'sự đồng thuận, nhất trí', wordtype: 'noun', example: 'The board reached a consensus on the new pricing strategy.', example_vi: 'Hội đồng quản trị đã đạt được sự đồng thuận về chiến lược định giá mới.', remembered: false },
                    { id: 'w192', word: 'stakeholder', language: 'en', transcription: '/ˈsteɪkhəʊldər/', mean: 'các bên liên quan, cổ đông lợi ích', wordtype: 'noun', example: 'All stakeholders were invited to attend the annual general meeting.', example_vi: 'Tất cả các bên liên quan được mời tham dự đại hội đồng thường niên.', remembered: false },
                    { id: 'w193', word: 'rapport', language: 'en', transcription: '/ræˈpɔː/', mean: 'mối quan hệ tin tưởng, sự thân thiện', wordtype: 'noun', example: 'Building strong rapport with clients is essential for long-term business.', example_vi: 'Xây dựng mối quan hệ tin tưởng mạnh với khách hàng là điều cần thiết cho kinh doanh lâu dài.', remembered: false },
                    { id: 'w194', word: 'dispute', language: 'en', transcription: '/dɪˈspjuːt/', mean: 'tranh chấp, bất đồng', wordtype: 'noun / verb', example: 'The two companies resolved their payment dispute through mediation.', example_vi: 'Hai công ty giải quyết tranh chấp thanh toán của họ thông qua hòa giải.', remembered: false },
                    { id: 'w195', word: 'resolution', language: 'en', transcription: '/ˌrɛzəˈluːʃn/', mean: 'sự giải quyết, nghị quyết', wordtype: 'noun', example: 'A swift resolution to the contract dispute was in everyone\'s best interest.', example_vi: 'Giải quyết nhanh chóng tranh chấp hợp đồng là lợi ích tốt nhất của tất cả mọi người.', remembered: false },
                    { id: 'w196', word: 'quotation', language: 'en', transcription: '/kwəʊˈteɪʃn/', mean: 'báo giá, bản chào hàng', wordtype: 'noun', example: 'Please send us a detailed quotation for the construction work.', example_vi: 'Vui lòng gửi cho chúng tôi báo giá chi tiết cho công việc xây dựng.', remembered: false }
                ]
            },

            /* ─── TOPIC 17: KHÁCH SẠN & LƯU TRÚ ─── */
            {
                id: 'toeic-hotel',
                title: '🏨 Khách sạn & Dịch vụ lưu trú',
                description: 'Từ vựng về dịch vụ khách sạn và ngành lưu trú',
                wordCount: 12,
                words: [
                    { id: 'w197', word: 'check-in', language: 'en', transcription: '/ˈtʃɛkɪn/', mean: 'nhận phòng, thủ tục nhận phòng', wordtype: 'noun / verb', example: 'Check-in time at most hotels is from 2 PM onwards.', example_vi: 'Giờ nhận phòng ở hầu hết các khách sạn là từ 14 giờ trở đi.', remembered: false },
                    { id: 'w198', word: 'concierge', language: 'en', transcription: '/ˈkɒnsɪeərʒ/', mean: 'nhân viên hỗ trợ khách', wordtype: 'noun', example: 'The concierge helped us book restaurant reservations for the evening.', example_vi: 'Nhân viên hỗ trợ đã giúp chúng tôi đặt bàn nhà hàng cho buổi tối.', remembered: false },
                    { id: 'w199', word: 'suite', language: 'en', transcription: '/swiːt/', mean: 'phòng suite, bộ phòng sang trọng', wordtype: 'noun', example: 'The presidential suite offers a stunning view of the city skyline.', example_vi: 'Phòng suite tổng thống có tầm nhìn tuyệt đẹp ra đường chân trời thành phố.', remembered: false },
                    { id: 'w200', word: 'housekeeping', language: 'en', transcription: '/ˈhaʊskiːpɪŋ/', mean: 'bộ phận dọn phòng, dịch vụ buồng', wordtype: 'noun', example: 'Please call housekeeping if you need extra towels or pillows.', example_vi: 'Vui lòng gọi bộ phận dọn phòng nếu bạn cần thêm khăn tắm hoặc gối.', remembered: false },
                    { id: 'w201', word: 'occupancy', language: 'en', transcription: '/ˈɒkjʊpənsi/', mean: 'tỷ lệ lấp đầy phòng', wordtype: 'noun', example: 'The hotel achieved a 95% occupancy rate during the holiday season.', example_vi: 'Khách sạn đạt tỷ lệ lấp đầy phòng 95% trong mùa lễ.', remembered: false },
                    { id: 'w202', word: 'room rate', language: 'en', transcription: '/ruːm reɪt/', mean: 'giá phòng, mức giá thuê phòng', wordtype: 'noun phrase', example: 'The room rate includes breakfast and access to the fitness center.', example_vi: 'Giá phòng bao gồm bữa sáng và quyền vào trung tâm thể dục.', remembered: false },
                    { id: 'w203', word: 'hospitality', language: 'en', transcription: '/ˌhɒspɪˈtælɪti/', mean: 'sự tiếp đãi, ngành dịch vụ khách sạn', wordtype: 'noun', example: 'Warm hospitality is the hallmark of a five-star hotel experience.', example_vi: 'Sự tiếp đãi ân cần là dấu hiệu đặc trưng của trải nghiệm khách sạn năm sao.', remembered: false },
                    { id: 'w204', word: 'valet', language: 'en', transcription: '/ˈvæleɪ/', mean: 'dịch vụ đỗ xe, người giữ xe', wordtype: 'noun', example: 'The hotel offers complimentary valet parking for all guests.', example_vi: 'Khách sạn cung cấp dịch vụ đỗ xe miễn phí cho tất cả khách.', remembered: false },
                    { id: 'w205', word: 'checkout', language: 'en', transcription: '/ˈtʃɛkaʊt/', mean: 'trả phòng, thủ tục trả phòng', wordtype: 'noun / verb', example: 'Checkout time is 12 PM; late checkout may incur an additional fee.', example_vi: 'Giờ trả phòng là 12 giờ trưa; trả phòng muộn có thể phát sinh phí thêm.', remembered: false },
                    { id: 'w206', word: 'turndown service', language: 'en', transcription: '/ˈtɜːndaʊn ˈsɜːvɪs/', mean: 'dịch vụ dọn phòng buổi tối', wordtype: 'noun phrase', example: 'The turndown service includes fresh towels and chocolates on the pillow.', example_vi: 'Dịch vụ dọn phòng buổi tối bao gồm khăn tắm mới và sô cô la trên gối.', remembered: false },
                    { id: 'w207', word: 'minibar', language: 'en', transcription: '/ˈmɪnɪbɑː/', mean: 'tủ lạnh mini trong phòng khách sạn', wordtype: 'noun', example: 'Items taken from the minibar will be charged to your room bill.', example_vi: 'Các vật phẩm lấy từ tủ lạnh mini sẽ được tính vào hóa đơn phòng của bạn.', remembered: false },
                    { id: 'w208', word: 'lobby', language: 'en', transcription: '/ˈlɒbi/', mean: 'sảnh chờ khách sạn', wordtype: 'noun', example: 'Please wait for your driver in the hotel lobby at 8 AM.', example_vi: 'Vui lòng chờ tài xế của bạn ở sảnh khách sạn lúc 8 giờ sáng.', remembered: false }
                ]
            },

            /* ─── TOPIC 18: NGHIÊN CỨU & PHÁT TRIỂN ─── */
            {
                id: 'toeic-rd',
                title: '🔬 Nghiên cứu & Phát triển',
                description: 'Từ vựng về đổi mới sáng tạo, bằng sáng chế và quy trình R&D',
                wordCount: 14,
                words: [
                    { id: 'w209', word: 'prototype', language: 'en', transcription: '/ˈprəʊtətaɪp/', mean: 'nguyên mẫu, mô hình thử nghiệm', wordtype: 'noun', example: 'The engineering team built a prototype of the new device last month.', example_vi: 'Nhóm kỹ thuật đã chế tạo nguyên mẫu của thiết bị mới vào tháng trước.', remembered: false },
                    { id: 'w210', word: 'innovation', language: 'en', transcription: '/ˌɪnəˈveɪʃn/', mean: 'đổi mới, sáng tạo', wordtype: 'noun', example: 'Continuous innovation is what keeps the company ahead of its competitors.', example_vi: 'Đổi mới liên tục là điều giúp công ty luôn dẫn đầu so với đối thủ cạnh tranh.', remembered: false },
                    { id: 'w211', word: 'patent', language: 'en', transcription: '/ˈpeɪtənt/', mean: 'bằng sáng chế', wordtype: 'noun / verb', example: 'The company filed for a patent to protect its new invention.', example_vi: 'Công ty đã nộp đơn đăng ký bằng sáng chế để bảo vệ phát minh mới của mình.', remembered: false },
                    { id: 'w212', word: 'feasibility', language: 'en', transcription: '/ˌfiːzəˈbɪlɪti/', mean: 'tính khả thi', wordtype: 'noun', example: 'A feasibility study was conducted before approving the new project.', example_vi: 'Một nghiên cứu tính khả thi đã được tiến hành trước khi phê duyệt dự án mới.', remembered: false },
                    { id: 'w213', word: 'breakthrough', language: 'en', transcription: '/ˈbreɪkθruː/', mean: 'bước đột phá, phát hiện quan trọng', wordtype: 'noun', example: 'The research team made a major breakthrough in battery technology.', example_vi: 'Nhóm nghiên cứu đã đạt được một bước đột phá lớn trong công nghệ pin.', remembered: false },
                    { id: 'w214', word: 'pilot', language: 'en', transcription: '/ˈpaɪlət/', mean: 'thí điểm, thử nghiệm ban đầu', wordtype: 'noun / adjective / verb', example: 'We will run a pilot program in three cities before national rollout.', example_vi: 'Chúng tôi sẽ thực hiện chương trình thí điểm tại ba thành phố trước khi triển khai toàn quốc.', remembered: false },
                    { id: 'w215', word: 'iteration', language: 'en', transcription: '/ˌɪtəˈreɪʃn/', mean: 'phiên bản lặp lại, vòng cải tiến', wordtype: 'noun', example: 'After several iterations, the product design was finally approved.', example_vi: 'Sau nhiều lần cải tiến, thiết kế sản phẩm cuối cùng đã được phê duyệt.', remembered: false },
                    { id: 'w216', word: 'benchmark', language: 'en', transcription: '/ˈbɛntʃmɑːk/', mean: 'tiêu chuẩn đánh giá, mốc so sánh', wordtype: 'noun / verb', example: 'We use industry benchmarks to measure the performance of our products.', example_vi: 'Chúng tôi sử dụng các tiêu chuẩn ngành để đo lường hiệu suất sản phẩm của mình.', remembered: false },
                    { id: 'w217', word: 'collaborate', language: 'en', transcription: '/kəˈlæbəreɪt/', mean: 'hợp tác, phối hợp cùng nhau', wordtype: 'verb', example: 'The two universities collaborated on a joint climate research project.', example_vi: 'Hai trường đại học đã hợp tác trong một dự án nghiên cứu khí hậu chung.', remembered: false },
                    { id: 'w218', word: 'simulation', language: 'en', transcription: '/ˌsɪmjʊˈleɪʃn/', mean: 'mô phỏng, giả lập', wordtype: 'noun', example: 'Computer simulations were used to test the product before physical manufacturing.', example_vi: 'Mô phỏng máy tính được sử dụng để kiểm tra sản phẩm trước khi sản xuất thực tế.', remembered: false },
                    { id: 'w219', word: 'hypothesis', language: 'en', transcription: '/haɪˈpɒθɪsɪs/', mean: 'giả thuyết nghiên cứu', wordtype: 'noun', example: 'The researchers tested their hypothesis through a series of controlled experiments.', example_vi: 'Các nhà nghiên cứu đã kiểm tra giả thuyết của họ thông qua một loạt thí nghiệm có kiểm soát.', remembered: false },
                    { id: 'w220', word: 'findings', language: 'en', transcription: '/ˈfaɪndɪŋz/', mean: 'kết quả nghiên cứu, phát hiện', wordtype: 'noun', example: 'The research findings were published in an international journal.', example_vi: 'Kết quả nghiên cứu được công bố trên một tạp chí quốc tế.', remembered: false },
                    { id: 'w221', word: 'optimize', language: 'en', transcription: '/ˈɒptɪmaɪz/', mean: 'tối ưu hóa', wordtype: 'verb', example: 'The team worked to optimize the software\'s performance under heavy load.', example_vi: 'Nhóm đã nỗ lực tối ưu hóa hiệu suất phần mềm dưới tải trọng nặng.', remembered: false },
                    { id: 'w222', word: 'scalable', language: 'en', transcription: '/ˈskeɪləbl/', mean: 'có thể mở rộng quy mô', wordtype: 'adjective', example: 'The platform was designed to be scalable to support millions of users.', example_vi: 'Nền tảng được thiết kế để có thể mở rộng quy mô hỗ trợ hàng triệu người dùng.', remembered: false }
                ]
            },

            /* ─── TOPIC 19: THỐNG KÊ & PHÂN TÍCH ─── */
            {
                id: 'toeic-analytics',
                title: '📊 Thống kê & Phân tích dữ liệu',
                description: 'Từ vựng về số liệu, dự báo và đánh giá hiệu quả kinh doanh',
                wordCount: 13,
                words: [
                    { id: 'w223', word: 'statistics', language: 'en', transcription: '/stəˈtɪstɪks/', mean: 'thống kê, số liệu thống kê', wordtype: 'noun', example: 'The statistics show a clear upward trend in online shopping.', example_vi: 'Số liệu thống kê cho thấy xu hướng tăng rõ ràng trong mua sắm trực tuyến.', remembered: false },
                    { id: 'w224', word: 'forecast', language: 'en', transcription: '/ˈfɔːkɑːst/', mean: 'dự báo, dự đoán', wordtype: 'noun / verb', example: 'The sales forecast for next quarter looks very promising.', example_vi: 'Dự báo doanh số cho quý tới trông rất hứa hẹn.', remembered: false },
                    { id: 'w225', word: 'trend', language: 'en', transcription: '/trɛnd/', mean: 'xu hướng, chiều hướng', wordtype: 'noun', example: 'The latest trend shows consumers prefer eco-friendly products.', example_vi: 'Xu hướng mới nhất cho thấy người tiêu dùng ưa thích sản phẩm thân thiện với môi trường.', remembered: false },
                    { id: 'w226', word: 'variable', language: 'en', transcription: '/ˈveərɪəbl/', mean: 'biến số, yếu tố thay đổi', wordtype: 'noun / adjective', example: 'The researchers identified several key variables affecting the outcome.', example_vi: 'Các nhà nghiên cứu xác định được nhiều biến số quan trọng ảnh hưởng đến kết quả.', remembered: false },
                    { id: 'w227', word: 'correlation', language: 'en', transcription: '/ˌkɒrɪˈleɪʃn/', mean: 'mối tương quan', wordtype: 'noun', example: 'There is a strong positive correlation between education level and income.', example_vi: 'Có mối tương quan dương mạnh giữa trình độ học vấn và thu nhập.', remembered: false },
                    { id: 'w228', word: 'data', language: 'en', transcription: '/ˈdeɪtə/', mean: 'dữ liệu, thông tin', wordtype: 'noun', example: 'All data must be verified before it is included in the report.', example_vi: 'Tất cả dữ liệu phải được xác minh trước khi đưa vào báo cáo.', remembered: false },
                    { id: 'w229', word: 'insight', language: 'en', transcription: '/ˈɪnsaɪt/', mean: 'thông tin chi tiết, nhận thức sâu sắc', wordtype: 'noun', example: 'The market research provided valuable insights into customer behavior.', example_vi: 'Nghiên cứu thị trường cung cấp những thông tin chi tiết quý giá về hành vi khách hàng.', remembered: false },
                    { id: 'w230', word: 'projection', language: 'en', transcription: '/prəˈdʒɛkʃn/', mean: 'dự đoán, con số dự kiến', wordtype: 'noun', example: 'Revenue projections for next year are based on current growth rates.', example_vi: 'Dự đoán doanh thu cho năm tới dựa trên tỷ lệ tăng trưởng hiện tại.', remembered: false },
                    { id: 'w231', word: 'margin', language: 'en', transcription: '/ˈmɑːdʒɪn/', mean: 'biên lợi nhuận, tỷ suất lợi nhuận', wordtype: 'noun', example: 'The profit margin improved after reducing production costs.', example_vi: 'Biên lợi nhuận được cải thiện sau khi giảm chi phí sản xuất.', remembered: false },
                    { id: 'w232', word: 'aggregate', language: 'en', transcription: '/ˈæɡrɪɡɪt/', mean: 'tổng hợp, gộp lại', wordtype: 'adjective / noun / verb', example: 'The aggregate sales figures exceeded our expectations by 12%.', example_vi: 'Tổng doanh số vượt kỳ vọng của chúng tôi 12%.', remembered: false },
                    { id: 'w233', word: 'quarterly', language: 'en', transcription: '/ˈkwɔːtəli/', mean: 'theo quý, hàng quý', wordtype: 'adjective / adverb', example: 'The company publishes quarterly earnings reports for its investors.', example_vi: 'Công ty công bố báo cáo thu nhập hàng quý cho các nhà đầu tư.', remembered: false },
                    { id: 'w234', word: 'performance', language: 'en', transcription: '/pəˈfɔːməns/', mean: 'hiệu suất, thành tích', wordtype: 'noun', example: 'The team\'s performance this year exceeded all previous records.', example_vi: 'Hiệu suất của nhóm trong năm nay vượt qua tất cả các kỷ lục trước đây.', remembered: false },
                    { id: 'w235', word: 'indicator', language: 'en', transcription: '/ˈɪndɪkeɪtər/', mean: 'chỉ số, chỉ báo', wordtype: 'noun', example: 'GDP is one of the most important economic indicators.', example_vi: 'GDP là một trong những chỉ số kinh tế quan trọng nhất.', remembered: false }
                ]
            },

            /* ─── TOPIC 20: VẬN TẢI & GIAO NHẬN ─── */
            {
                id: 'toeic-transport',
                title: '🚚 Vận tải & Giao nhận',
                description: 'Từ vựng về giao nhận hàng hóa, vận chuyển và phân phối',
                wordCount: 11,
                words: [
                    { id: 'w236', word: 'courier', language: 'en', transcription: '/ˈkʊriər/', mean: 'dịch vụ chuyển phát, người đưa thư', wordtype: 'noun', example: 'We use a courier service to deliver urgent documents same-day.', example_vi: 'Chúng tôi sử dụng dịch vụ chuyển phát để giao tài liệu khẩn cấp trong ngày.', remembered: false },
                    { id: 'w237', word: 'dispatch', language: 'en', transcription: '/dɪˈspætʃ/', mean: 'điều phối, gửi hàng đi', wordtype: 'noun / verb', example: 'The order was dispatched from our warehouse early this morning.', example_vi: 'Đơn hàng đã được gửi đi từ kho của chúng tôi từ sáng sớm hôm nay.', remembered: false },
                    { id: 'w238', word: 'cargo', language: 'en', transcription: '/ˈkɑːɡəʊ/', mean: 'hàng hóa vận chuyển, chở hàng', wordtype: 'noun', example: 'The cargo ship was carrying electronics from South Korea to Vietnam.', example_vi: 'Con tàu chở hàng đang vận chuyển đồ điện tử từ Hàn Quốc đến Việt Nam.', remembered: false },
                    { id: 'w239', word: 'fleet', language: 'en', transcription: '/fliːt/', mean: 'đội xe, đội tàu vận tải', wordtype: 'noun', example: 'The company operates a fleet of 200 delivery vehicles nationwide.', example_vi: 'Công ty vận hành một đội xe 200 phương tiện giao hàng trên toàn quốc.', remembered: false },
                    { id: 'w240', word: 'hub', language: 'en', transcription: '/hʌb/', mean: 'trung tâm trung chuyển, đầu mối', wordtype: 'noun', example: 'Singapore serves as a major shipping hub for Southeast Asia.', example_vi: 'Singapore đóng vai trò là trung tâm vận chuyển lớn của Đông Nam Á.', remembered: false },
                    { id: 'w241', word: 'route', language: 'en', transcription: '/ruːt/', mean: 'tuyến đường vận chuyển', wordtype: 'noun', example: 'The delivery route was optimized to reduce fuel costs and travel time.', example_vi: 'Tuyến đường giao hàng được tối ưu hóa để giảm chi phí nhiên liệu và thời gian di chuyển.', remembered: false },
                    { id: 'w242', word: 'tracking', language: 'en', transcription: '/ˈtrækɪŋ/', mean: 'theo dõi (hàng hóa)', wordtype: 'noun', example: 'Use the tracking number to monitor the status of your package online.', example_vi: 'Sử dụng mã theo dõi để kiểm tra trạng thái gói hàng của bạn trực tuyến.', remembered: false },
                    { id: 'w243', word: 'consignment', language: 'en', transcription: '/kənˈsaɪnmənt/', mean: 'lô hàng gửi, hàng ký gửi', wordtype: 'noun', example: 'A large consignment of goods arrived at the port this morning.', example_vi: 'Một lô hàng lớn đã đến cảng sáng nay.', remembered: false },
                    { id: 'w244', word: 'delivery', language: 'en', transcription: '/dɪˈlɪvəri/', mean: 'giao hàng, dịch vụ giao nhận', wordtype: 'noun', example: 'Same-day delivery is now available for orders placed before noon.', example_vi: 'Giao hàng trong ngày hiện có sẵn cho các đơn đặt trước 12 giờ.', remembered: false },
                    { id: 'w245', word: 'terminal', language: 'en', transcription: '/ˈtɜːmɪnl/', mean: 'nhà ga, bến cảng, kho đầu mối', wordtype: 'noun', example: 'Containers are stored at the terminal before being loaded onto ships.', example_vi: 'Container được lưu trữ tại bến cảng trước khi được xếp lên tàu.', remembered: false },
                    { id: 'w246', word: 'manifest', language: 'en', transcription: '/ˈmænɪfɛst/', mean: 'danh sách hàng hóa, vận đơn', wordtype: 'noun', example: 'The customs officer checked the cargo manifest at the border crossing.', example_vi: 'Nhân viên hải quan đã kiểm tra danh sách hàng hóa tại cửa khẩu biên giới.', remembered: false }
                ]
            },

            /* ─── TOPIC 21: THƯƠNG MẠI QUỐC TẾ ─── */
            {
                id: 'toeic-trade',
                title: '🌐 Thương mại quốc tế',
                description: 'Từ vựng về xuất nhập khẩu, thuế quan và hiệp định thương mại',
                wordCount: 16,
                words: [
                    { id: 'w247', word: 'export', language: 'en', transcription: '/ˈɛkspɔːt/', mean: 'xuất khẩu', wordtype: 'noun / verb', example: 'Vietnam exports a large volume of electronics to European markets.', example_vi: 'Việt Nam xuất khẩu một lượng lớn đồ điện tử sang các thị trường châu Âu.', remembered: false },
                    { id: 'w248', word: 'import', language: 'en', transcription: '/ˈɪmpɔːt/', mean: 'nhập khẩu', wordtype: 'noun / verb', example: 'The country imports most of its oil from the Middle East.', example_vi: 'Đất nước nhập khẩu hầu hết dầu từ Trung Đông.', remembered: false },
                    { id: 'w249', word: 'tariff', language: 'en', transcription: '/ˈtærɪf/', mean: 'thuế quan, biểu thuế', wordtype: 'noun', example: 'High tariffs on imported goods protect domestic manufacturers.', example_vi: 'Thuế quan cao đánh vào hàng nhập khẩu bảo vệ các nhà sản xuất trong nước.', remembered: false },
                    { id: 'w250', word: 'embargo', language: 'en', transcription: '/ɪmˈbɑːɡəʊ/', mean: 'lệnh cấm vận thương mại', wordtype: 'noun', example: 'The trade embargo severely affected the country\'s economy.', example_vi: 'Lệnh cấm vận thương mại đã ảnh hưởng nghiêm trọng đến nền kinh tế của đất nước.', remembered: false },
                    { id: 'w251', word: 'quota', language: 'en', transcription: '/ˈkwəʊtə/', mean: 'hạn ngạch nhập khẩu', wordtype: 'noun', example: 'The government set an import quota for foreign-made automobiles.', example_vi: 'Chính phủ đặt hạn ngạch nhập khẩu cho ô tô sản xuất nước ngoài.', remembered: false },
                    { id: 'w252', word: 'trade deficit', language: 'en', transcription: '/treɪd ˈdɛfɪsɪt/', mean: 'thâm hụt thương mại', wordtype: 'noun phrase', example: 'The country recorded its largest trade deficit in over a decade.', example_vi: 'Đất nước ghi nhận mức thâm hụt thương mại lớn nhất trong hơn một thập kỷ.', remembered: false },
                    { id: 'w253', word: 'bilateral', language: 'en', transcription: '/baɪˈlætərəl/', mean: 'song phương, hai bên', wordtype: 'adjective', example: 'The two nations signed a bilateral trade agreement last month.', example_vi: 'Hai quốc gia đã ký một hiệp định thương mại song phương vào tháng trước.', remembered: false },
                    { id: 'w254', word: 'exchange rate', language: 'en', transcription: '/ɪksˈtʃeɪndʒ reɪt/', mean: 'tỷ giá hối đoái', wordtype: 'noun phrase', example: 'Fluctuating exchange rates make international trade more challenging.', example_vi: 'Tỷ giá hối đoái biến động khiến thương mại quốc tế trở nên khó khăn hơn.', remembered: false },
                    { id: 'w255', word: 'sanction', language: 'en', transcription: '/ˈsæŋkʃn/', mean: 'lệnh trừng phạt, biện pháp chế tài', wordtype: 'noun / verb', example: 'Economic sanctions were imposed after the country violated international law.', example_vi: 'Các biện pháp trừng phạt kinh tế được áp đặt sau khi đất nước vi phạm luật quốc tế.', remembered: false },
                    { id: 'w256', word: 'protocol', language: 'en', transcription: '/ˈprəʊtəkɒl/', mean: 'nghị định thư, giao thức', wordtype: 'noun', example: 'Both countries signed a trade protocol to simplify customs procedures.', example_vi: 'Cả hai quốc gia đã ký một nghị định thư thương mại để đơn giản hóa thủ tục hải quan.', remembered: false },
                    { id: 'w257', word: 'certificate of origin', language: 'en', transcription: '/səˈtɪfɪkɪt əv ˈɒrɪdʒɪn/', mean: 'giấy chứng nhận xuất xứ hàng hóa', wordtype: 'noun phrase', example: 'A certificate of origin is required to qualify for reduced tariff rates.', example_vi: 'Giấy chứng nhận xuất xứ là cần thiết để đủ điều kiện hưởng mức thuế quan giảm.', remembered: false },
                    { id: 'w258', word: 'negotiation', language: 'en', transcription: '/nɪˌɡəʊʃɪˈeɪʃn/', mean: 'đàm phán, thương lượng', wordtype: 'noun', example: 'Trade negotiations between the two blocs have been ongoing for two years.', example_vi: 'Đàm phán thương mại giữa hai khối đã diễn ra liên tục trong hai năm.', remembered: false },
                    { id: 'w259', word: 'subsidy', language: 'en', transcription: '/ˈsʌbsɪdi/', mean: 'trợ cấp, trợ giá của chính phủ', wordtype: 'noun', example: 'Government subsidies help local farmers compete with cheap imports.', example_vi: 'Trợ cấp của chính phủ giúp nông dân địa phương cạnh tranh với hàng nhập khẩu giá rẻ.', remembered: false },
                    { id: 'w260', word: 'free trade', language: 'en', transcription: '/friː treɪd/', mean: 'thương mại tự do', wordtype: 'noun phrase', example: 'Free trade agreements lower barriers and boost economic growth.', example_vi: 'Các hiệp định thương mại tự do giảm rào cản và thúc đẩy tăng trưởng kinh tế.', remembered: false },
                    { id: 'w261', word: 'trade agreement', language: 'en', transcription: '/treɪd əˈɡriːmənt/', mean: 'hiệp định thương mại', wordtype: 'noun phrase', example: 'The new trade agreement opened markets for both countries significantly.', example_vi: 'Hiệp định thương mại mới đã mở ra thị trường đáng kể cho cả hai quốc gia.', remembered: false },
                    { id: 'w262', word: 'customs duty', language: 'en', transcription: '/ˈkʌstəmz ˈdjuːti/', mean: 'thuế nhập khẩu, thuế hải quan', wordtype: 'noun phrase', example: 'You must pay customs duty on goods valued above a certain threshold.', example_vi: 'Bạn phải nộp thuế nhập khẩu đối với hàng hóa có giá trị vượt ngưỡng nhất định.', remembered: false }
                ]
            },

            /* ─── TOPIC 22: QUẢN LÝ DỰ ÁN ─── */
            {
                id: 'toeic-projectmgmt',
                title: '💼 Quản lý dự án',
                description: 'Từ vựng về lập kế hoạch, theo dõi tiến độ và quản lý nguồn lực',
                wordCount: 14,
                words: [
                    { id: 'w263', word: 'milestone', language: 'en', transcription: '/ˈmaɪlstəʊn/', mean: 'cột mốc quan trọng của dự án', wordtype: 'noun', example: 'Reaching the first milestone on time boosted the team\'s confidence.', example_vi: 'Đạt cột mốc đầu tiên đúng hạn đã tăng thêm sự tự tin cho nhóm.', remembered: false },
                    { id: 'w264', word: 'scope', language: 'en', transcription: '/skəʊp/', mean: 'phạm vi, quy mô dự án', wordtype: 'noun', example: 'Any changes to the project scope must be approved by the client.', example_vi: 'Bất kỳ thay đổi nào về phạm vi dự án đều phải được khách hàng phê duyệt.', remembered: false },
                    { id: 'w265', word: 'deliverable', language: 'en', transcription: '/dɪˈlɪvərəbl/', mean: 'kết quả bàn giao, sản phẩm đầu ra', wordtype: 'noun', example: 'All deliverables must be submitted before the final project review.', example_vi: 'Tất cả kết quả bàn giao phải được nộp trước buổi đánh giá dự án cuối cùng.', remembered: false },
                    { id: 'w266', word: 'risk assessment', language: 'en', transcription: '/rɪsk əˈsɛsmənt/', mean: 'đánh giá rủi ro', wordtype: 'noun phrase', example: 'A thorough risk assessment was conducted before the project kickoff.', example_vi: 'Một đánh giá rủi ro toàn diện đã được tiến hành trước khi khởi động dự án.', remembered: false },
                    { id: 'w267', word: 'timeline', language: 'en', transcription: '/ˈtaɪmlaɪn/', mean: 'lịch trình, mốc thời gian dự án', wordtype: 'noun', example: 'The project timeline was revised after unexpected delays in procurement.', example_vi: 'Lịch trình dự án được điều chỉnh sau những chậm trễ bất ngờ trong thu mua.', remembered: false },
                    { id: 'w268', word: 'resource', language: 'en', transcription: '/rɪˈzɔːs/', mean: 'nguồn lực, tài nguyên', wordtype: 'noun', example: 'Allocating resources effectively is key to successful project management.', example_vi: 'Phân bổ nguồn lực hiệu quả là chìa khóa để quản lý dự án thành công.', remembered: false },
                    { id: 'w269', word: 'bottleneck', language: 'en', transcription: '/ˈbɒtlnɛk/', mean: 'điểm nghẽn, nút thắt cổ chai', wordtype: 'noun', example: 'The approval process was identified as the main bottleneck in the workflow.', example_vi: 'Quy trình phê duyệt được xác định là điểm nghẽn chính trong quy trình làm việc.', remembered: false },
                    { id: 'w270', word: 'kickoff', language: 'en', transcription: '/ˈkɪkɒf/', mean: 'lễ khởi động dự án', wordtype: 'noun', example: 'The project kickoff meeting is scheduled for next Monday at 9 AM.', example_vi: 'Cuộc họp khởi động dự án được lên lịch vào thứ Hai tới lúc 9 giờ sáng.', remembered: false },
                    { id: 'w271', word: 'agile', language: 'en', transcription: '/ˈædʒaɪl/', mean: 'linh hoạt, phương pháp Agile', wordtype: 'adjective', example: 'The development team adopted an agile approach to deliver features faster.', example_vi: 'Nhóm phát triển áp dụng phương pháp linh hoạt để cung cấp tính năng nhanh hơn.', remembered: false },
                    { id: 'w272', word: 'sprint', language: 'en', transcription: '/sprɪnt/', mean: 'giai đoạn phát triển ngắn (Agile)', wordtype: 'noun', example: 'Each sprint lasts two weeks and ends with a product demo.', example_vi: 'Mỗi giai đoạn kéo dài hai tuần và kết thúc bằng một buổi trình diễn sản phẩm.', remembered: false },
                    { id: 'w273', word: 'retrospective', language: 'en', transcription: '/ˌrɛtrəˈspɛktɪv/', mean: 'tổng kết, nhìn lại quá trình', wordtype: 'noun / adjective', example: 'The team held a retrospective after each sprint to identify improvements.', example_vi: 'Nhóm tổ chức buổi tổng kết sau mỗi giai đoạn để xác định những cải tiến cần thiết.', remembered: false },
                    { id: 'w274', word: 'dependency', language: 'en', transcription: '/dɪˈpɛndənsi/', mean: 'sự phụ thuộc, mối liên kết nhiệm vụ', wordtype: 'noun', example: 'Task B has a dependency on Task A and cannot start until A is complete.', example_vi: 'Nhiệm vụ B phụ thuộc vào nhiệm vụ A và không thể bắt đầu cho đến khi A hoàn thành.', remembered: false },
                    { id: 'w275', word: 'status report', language: 'en', transcription: '/ˈsteɪtəs rɪˈpɔːt/', mean: 'báo cáo tiến độ', wordtype: 'noun phrase', example: 'Please submit a weekly status report every Friday before 5 PM.', example_vi: 'Vui lòng nộp báo cáo tiến độ hàng tuần trước 17 giờ mỗi thứ Sáu.', remembered: false },
                    { id: 'w276', word: 'workload', language: 'en', transcription: '/ˈwɜːkləʊd/', mean: 'khối lượng công việc', wordtype: 'noun', example: 'The team\'s workload increased significantly after the merger.', example_vi: 'Khối lượng công việc của nhóm tăng lên đáng kể sau vụ sáp nhập.', remembered: false }
                ]
            },

            /* ─── TOPIC 23: ĐẦU TƯ & CHỨNG KHOÁN ─── */
            {
                id: 'toeic-investment',
                title: '🏦 Đầu tư & Chứng khoán',
                description: 'Từ vựng về thị trường chứng khoán, danh mục đầu tư và tài sản tài chính',
                wordCount: 13,
                words: [
                    { id: 'w277', word: 'portfolio', language: 'en', transcription: '/pɔːtˈfəʊliəʊ/', mean: 'danh mục đầu tư', wordtype: 'noun', example: 'She diversified her investment portfolio to reduce overall risk.', example_vi: 'Cô ấy đa dạng hóa danh mục đầu tư để giảm rủi ro tổng thể.', remembered: false },
                    { id: 'w278', word: 'dividend', language: 'en', transcription: '/ˈdɪvɪdɛnd/', mean: 'cổ tức', wordtype: 'noun', example: 'The company declared a quarterly dividend of $0.50 per share.', example_vi: 'Công ty tuyên bố cổ tức hàng quý là 0,50 đô mỗi cổ phiếu.', remembered: false },
                    { id: 'w279', word: 'asset', language: 'en', transcription: '/ˈæsɛt/', mean: 'tài sản, vốn', wordtype: 'noun', example: 'Real estate is considered a stable long-term asset class.', example_vi: 'Bất động sản được coi là loại tài sản ổn định dài hạn.', remembered: false },
                    { id: 'w280', word: 'volatility', language: 'en', transcription: '/ˌvɒləˈtɪlɪti/', mean: 'biến động, sự không ổn định', wordtype: 'noun', example: 'High market volatility makes short-term investing risky.', example_vi: 'Biến động thị trường cao khiến đầu tư ngắn hạn trở nên rủi ro.', remembered: false },
                    { id: 'w281', word: 'yield', language: 'en', transcription: '/jiːld/', mean: 'lợi suất, lợi tức', wordtype: 'noun / verb', example: 'Government bonds yield a relatively safe and predictable return.', example_vi: 'Trái phiếu chính phủ mang lại lợi tức tương đối an toàn và có thể dự đoán được.', remembered: false },
                    { id: 'w282', word: 'hedge fund', language: 'en', transcription: '/hɛdʒ fʌnd/', mean: 'quỹ phòng hộ', wordtype: 'noun phrase', example: 'The hedge fund posted strong returns despite the market downturn.', example_vi: 'Quỹ phòng hộ ghi nhận lợi nhuận mạnh mẽ bất chấp thị trường suy giảm.', remembered: false },
                    { id: 'w283', word: 'liquidity', language: 'en', transcription: '/lɪˈkwɪdɪti/', mean: 'tính thanh khoản', wordtype: 'noun', example: 'Cash and government bonds offer the highest liquidity among all assets.', example_vi: 'Tiền mặt và trái phiếu chính phủ có tính thanh khoản cao nhất trong số tất cả các tài sản.', remembered: false },
                    { id: 'w284', word: 'capital', language: 'en', transcription: '/ˈkæpɪtl/', mean: 'vốn, vốn đầu tư', wordtype: 'noun', example: 'The startup raised $2 million in seed capital from angel investors.', example_vi: 'Startup đã huy động được 2 triệu đô vốn hạt giống từ các nhà đầu tư thiên thần.', remembered: false },
                    { id: 'w285', word: 'valuation', language: 'en', transcription: '/ˌvæljuˈeɪʃn/', mean: 'định giá doanh nghiệp', wordtype: 'noun', example: 'The startup\'s valuation reached $1 billion after its latest funding round.', example_vi: 'Định giá của startup đạt 1 tỷ đô sau vòng gọi vốn mới nhất.', remembered: false },
                    { id: 'w286', word: 'stock', language: 'en', transcription: '/stɒk/', mean: 'cổ phiếu', wordtype: 'noun', example: 'Investors rushed to buy stocks after the positive earnings announcement.', example_vi: 'Các nhà đầu tư đổ xô mua cổ phiếu sau thông báo lợi nhuận tích cực.', remembered: false },
                    { id: 'w287', word: 'bond', language: 'en', transcription: '/bɒnd/', mean: 'trái phiếu', wordtype: 'noun', example: 'Corporate bonds typically offer higher yields than government bonds.', example_vi: 'Trái phiếu doanh nghiệp thường mang lại lợi suất cao hơn trái phiếu chính phủ.', remembered: false },
                    { id: 'w288', word: 'IPO', language: 'en', transcription: '/ˌaɪpiːˈəʊ/', mean: 'phát hành cổ phiếu lần đầu ra công chúng', wordtype: 'noun', example: 'The tech company\'s IPO was the largest in the country this year.', example_vi: 'IPO của công ty công nghệ là đợt phát hành lớn nhất trong nước năm nay.', remembered: false },
                    { id: 'w289', word: 'return on investment', language: 'en', transcription: '/rɪˈtɜːn ɒn ɪnˈvɛstmənt/', mean: 'lợi tức đầu tư (ROI)', wordtype: 'noun phrase', example: 'The project delivered a 200% return on investment within 18 months.', example_vi: 'Dự án mang lại lợi tức đầu tư 200% trong vòng 18 tháng.', remembered: false }
                ]
            },

            /* ─── TOPIC 24: TRUYỀN THÔNG SỐ & MẠNG XÃ HỘI ─── */
            {
                id: 'toeic-digital',
                title: '🖥️ Truyền thông số & Mạng xã hội',
                description: 'Từ vựng về marketing số, mạng xã hội và phân tích nội dung',
                wordCount: 12,
                words: [
                    { id: 'w290', word: 'engagement', language: 'en', transcription: '/ɪnˈɡeɪdʒmənt/', mean: 'mức độ tương tác, gắn kết', wordtype: 'noun', example: 'High engagement rates indicate that your content resonates with the audience.', example_vi: 'Tỷ lệ tương tác cao cho thấy nội dung của bạn được khán giả đón nhận.', remembered: false },
                    { id: 'w291', word: 'content', language: 'en', transcription: '/ˈkɒntɛnt/', mean: 'nội dung số, bài đăng', wordtype: 'noun', example: 'Creating high-quality content consistently is the key to growing online.', example_vi: 'Tạo nội dung chất lượng cao một cách nhất quán là chìa khóa để phát triển trực tuyến.', remembered: false },
                    { id: 'w292', word: 'influencer', language: 'en', transcription: '/ˈɪnflʊənsər/', mean: 'người có tầm ảnh hưởng trên mạng', wordtype: 'noun', example: 'The brand partnered with a popular influencer to reach younger consumers.', example_vi: 'Thương hiệu hợp tác với một người có ảnh hưởng nổi tiếng để tiếp cận người tiêu dùng trẻ.', remembered: false },
                    { id: 'w293', word: 'analytics', language: 'en', transcription: '/ˌænəˈlɪtɪks/', mean: 'phân tích dữ liệu, số liệu phân tích', wordtype: 'noun', example: 'Social media analytics help track campaign performance in real time.', example_vi: 'Phân tích mạng xã hội giúp theo dõi hiệu suất chiến dịch theo thời gian thực.', remembered: false },
                    { id: 'w294', word: 'impression', language: 'en', transcription: '/ɪmˈprɛʃn/', mean: 'lượt hiển thị quảng cáo', wordtype: 'noun', example: 'The ad generated 5 million impressions in its first week online.', example_vi: 'Quảng cáo tạo ra 5 triệu lượt hiển thị trong tuần đầu tiên trực tuyến.', remembered: false },
                    { id: 'w295', word: 'conversion', language: 'en', transcription: '/kənˈvɜːʃn/', mean: 'chuyển đổi (khách xem thành khách mua)', wordtype: 'noun', example: 'Improving the website\'s design increased the conversion rate by 30%.', example_vi: 'Cải thiện thiết kế trang web đã tăng tỷ lệ chuyển đổi lên 30%.', remembered: false },
                    { id: 'w296', word: 'hashtag', language: 'en', transcription: '/ˈhæʃtæɡ/', mean: 'thẻ hashtag, từ khóa mạng xã hội', wordtype: 'noun', example: 'Using the right hashtags can significantly increase your post\'s reach.', example_vi: 'Sử dụng hashtag phù hợp có thể tăng đáng kể phạm vi tiếp cận bài đăng của bạn.', remembered: false },
                    { id: 'w297', word: 'viral', language: 'en', transcription: '/ˈvaɪərəl/', mean: 'lan truyền nhanh, bùng phát mạng', wordtype: 'adjective', example: 'The company\'s humorous ad went viral and earned millions of views overnight.', example_vi: 'Quảng cáo hài hước của công ty đã lan truyền và thu hàng triệu lượt xem chỉ sau một đêm.', remembered: false },
                    { id: 'w298', word: 'SEO', language: 'en', transcription: '/ˌɛsiːˈəʊ/', mean: 'tối ưu hóa công cụ tìm kiếm', wordtype: 'noun', example: 'Good SEO practices help your website rank higher on search engines.', example_vi: 'Các phương pháp SEO tốt giúp trang web của bạn xếp hạng cao hơn trên công cụ tìm kiếm.', remembered: false },
                    { id: 'w299', word: 'click-through rate', language: 'en', transcription: '/ˈklɪk θruː reɪt/', mean: 'tỷ lệ nhấp vào quảng cáo (CTR)', wordtype: 'noun phrase', example: 'A higher click-through rate means your ad copy is more compelling.', example_vi: 'Tỷ lệ nhấp cao hơn có nghĩa là nội dung quảng cáo của bạn hấp dẫn hơn.', remembered: false },
                    { id: 'w300', word: 'brand awareness', language: 'en', transcription: '/brænd əˈweənɪs/', mean: 'nhận thức về thương hiệu', wordtype: 'noun phrase', example: 'The social media campaign successfully increased brand awareness among teens.', example_vi: 'Chiến dịch mạng xã hội đã tăng thành công nhận thức về thương hiệu trong giới trẻ.', remembered: false },
                    { id: 'w301', word: 'reach', language: 'en', transcription: '/riːtʃ/', mean: 'phạm vi tiếp cận', wordtype: 'noun / verb', example: 'Paid advertising significantly extended the campaign\'s organic reach.', example_vi: 'Quảng cáo trả phí đã mở rộng đáng kể phạm vi tiếp cận tự nhiên của chiến dịch.', remembered: false }
                ]
            }
        ]
    },

};
