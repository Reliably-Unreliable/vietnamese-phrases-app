export interface VietnamesePhrase {
  id: number;
  vietnamese: string;
  phonetic: string;
  english: string;
  category: string;
}

export const vietnamesePhrases: VietnamesePhrase[] = [
  {
    id: 1,
    vietnamese: "Xin chào!",
    phonetic: "Sin chow!",
    english: "Hello!",
    category: "greeting"
  },
  {
    id: 2,
    vietnamese: "Cảm ơn bạn",
    phonetic: "Gahm uhn bahn",
    english: "Thank you",
    category: "courtesy"
  },
  {
    id: 3,
    vietnamese: "Xin lỗi",
    phonetic: "Sin loy",
    english: "Sorry / Excuse me",
    category: "courtesy"
  },
  {
    id: 4,
    vietnamese: "Bạn có khỏe không?",
    phonetic: "Bahn goh kweh khohng?",
    english: "How are you?",
    category: "greeting"
  },
  {
    id: 5,
    vietnamese: "Tôi khỏe, cảm ơn",
    phonetic: "Toy kweh, gahm uhn",
    english: "I'm fine, thank you",
    category: "greeting"
  },
  {
    id: 6,
    vietnamese: "Tạm biệt!",
    phonetic: "Tahm biet!",
    english: "Goodbye!",
    category: "greeting"
  },
  {
    id: 7,
    vietnamese: "Tôi không hiểu",
    phonetic: "Toy khohng hieu",
    english: "I don't understand",
    category: "communication"
  },
  {
    id: 8,
    vietnamese: "Bạn có nói tiếng Anh không?",
    phonetic: "Bahn goh noy tieng Anh khohng?",
    english: "Do you speak English?",
    category: "communication"
  },
  {
    id: 9,
    vietnamese: "Cái này bao nhiêu tiền?",
    phonetic: "Gai nay bow nhieu tien?",
    english: "How much does this cost?",
    category: "shopping"
  },
  {
    id: 10,
    vietnamese: "Tôi muốn ăn phở",
    phonetic: "Toy muon an fuh",
    english: "I want to eat pho",
    category: "food"
  },
  {
    id: 11,
    vietnamese: "Nhà vệ sinh ở đâu?",
    phonetic: "Nya veh sinh uh dow?",
    english: "Where is the bathroom?",
    category: "directions"
  },
  {
    id: 12,
    vietnamese: "Tôi đi lạc rồi",
    phonetic: "Toy dee lahk roy",
    english: "I am lost",
    category: "directions"
  },
  {
    id: 13,
    vietnamese: "Làm ơn giúp tôi",
    phonetic: "Lahm uhn yoop toy",
    english: "Please help me",
    category: "help"
  },
  {
    id: 14,
    vietnamese: "Tôi không thích cay",
    phonetic: "Toy khohng thik gahy",
    english: "I don't like spicy food",
    category: "food"
  },
  {
    id: 15,
    vietnamese: "Mấy giờ rồi?",
    phonetic: "May yuh roy?",
    english: "What time is it?",
    category: "time"
  },
  {
    id: 16,
    vietnamese: "Chúc mừng năm mới!",
    phonetic: "Chook mung nam moy!",
    english: "Happy New Year!",
    category: "celebration"
  },
  {
    id: 17,
    vietnamese: "Tôi yêu Việt Nam",
    phonetic: "Toy yeu Viet Nam",
    english: "I love Vietnam",
    category: "feelings"
  },
  {
    id: 18,
    vietnamese: "Thời tiết hôm nay đẹp quá!",
    phonetic: "Thoy tiet hom nay dep qua!",
    english: "The weather is beautiful today!",
    category: "weather"
  },
  {
    id: 19,
    vietnamese: "Tôi đói rồi",
    phonetic: "Toy doy roy",
    english: "I'm hungry",
    category: "food"
  },
  {
    id: 20,
    vietnamese: "Rất vui được gặp bạn",
    phonetic: "Raht vui duok gap bahn",
    english: "Nice to meet you",
    category: "greeting"
  }
];