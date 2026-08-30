import { PretestQuestion, KumonLevelId } from '../types';

export const PRETEST_QUESTIONS: PretestQuestion[] = [
  {
    id: 'pt-1',
    levelTested: '6A',
    difficultyOrder: 1,
    question: 'Berapa banyak titik hitam pada kotak di bawah ini?',
    visualDots: 4,
    options: ['3', '4', '5', '6'],
    correctAnswer: '4',
    topic: 'Membilang Angka 1-10',
    explanation: 'Terdapat 4 titik pada gambar.',
  },
  {
    id: 'pt-2',
    levelTested: '5A',
    difficultyOrder: 2,
    question: 'Lengkapi deret bilangan berikut: 17, 18, 19, [ ? ], 21',
    options: ['20', '22', '23', '16'],
    correctAnswer: '20',
    topic: 'Urutan Bilangan sampai 50',
    explanation: 'Setelah 19 adalah 20.',
  },
  {
    id: 'pt-3',
    levelTested: '4A',
    difficultyOrder: 3,
    question: 'Berapakah hasil dari 19 + 1?',
    options: ['18', '20', '21', '22'],
    correctAnswer: '20',
    topic: 'Konsep Tambah 1 (+1)',
    explanation: '19 + 1 = 20.',
  },
  {
    id: 'pt-4',
    levelTested: '3A',
    difficultyOrder: 4,
    question: 'Berapakah hasil dari 7 + 5?',
    options: ['11', '12', '13', '14'],
    correctAnswer: '12',
    topic: 'Penjumlahan Dasar (+5)',
    explanation: '7 + 5 = 12.',
  },
  {
    id: 'pt-5',
    levelTested: '2A',
    difficultyOrder: 5,
    question: 'Berapakah hasil dari 14 - 6?',
    options: ['7', '8', '9', '6'],
    correctAnswer: '8',
    topic: 'Pengurangan Dasar',
    explanation: '14 - 6 = 8.',
  },
  {
    id: 'pt-6',
    levelTested: 'A',
    difficultyOrder: 6,
    question: 'Berapakah hasil dari 38 + 27?',
    options: ['55', '64', '65', '75'],
    correctAnswer: '65',
    topic: 'Penjumlahan Mendatar 2 Digit',
    explanation: '38 + 27 = 65.',
  },
  {
    id: 'pt-7',
    levelTested: 'B',
    difficultyOrder: 7,
    question: '82 - 37 = ?',
    options: ['45', '55', '47', '35'],
    correctAnswer: '45',
    topic: 'Pengurangan Bersusun dengan Pinjam',
    explanation: '82 - 37 = 45.',
  },
  {
    id: 'pt-8',
    levelTested: 'C',
    difficultyOrder: 8,
    question: 'Berapakah 7 × 8 dan 45 ÷ 9 berturut-turut?',
    options: ['54 dan 5', '56 dan 5', '56 dan 6', '48 dan 5'],
    correctAnswer: '56 dan 5',
    topic: 'Tabel Perkalian & Pembagian',
    explanation: '7 × 8 = 56 dan 45 ÷ 9 = 5.',
  },
  {
    id: 'pt-9',
    levelTested: 'D',
    difficultyOrder: 9,
    question: 'Bentuk paling sederhana dari pecahan 24/36 adalah:',
    options: ['2/3', '3/4', '4/6', '6/9'],
    correctAnswer: '2/3',
    topic: 'Menyederhanakan Pecahan (FPB)',
    explanation: '24 ÷ 12 = 2 dan 36 ÷ 12 = 3. Hasilnya 2/3.',
  },
  {
    id: 'pt-10',
    levelTested: 'E',
    difficultyOrder: 10,
    question: 'Hitung: 1/3 + 3/4 = ?',
    options: ['4/7', '13/12', '11/12', '7/12'],
    correctAnswer: '13/12',
    topic: 'Penjumlahan Pecahan Beda Penyebut',
    explanation: '4/12 + 9/12 = 13/12 (atau 1 1/12).',
  },
  {
    id: 'pt-11',
    levelTested: 'F',
    difficultyOrder: 11,
    question: 'Hitung: (2/5 × 15/4) + 1/2 = ?',
    options: ['2', '3/2', '5/2', '1'],
    correctAnswer: '2',
    topic: 'Operasi Campuran Pecahan',
    explanation: '2/5 × 15/4 = 30/20 = 3/2. Lalu 3/2 + 1/2 = 4/2 = 2.',
  },
  {
    id: 'pt-12',
    levelTested: 'G',
    difficultyOrder: 12,
    question: 'Tentukan nilai x dari persamaan: 4x - 9 = 15',
    options: ['4', '5', '6', '7'],
    correctAnswer: '6',
    topic: 'Persamaan Linear Satu Variabel & Bilangan Negatif',
    explanation: '4x = 15 + 9 = 24 => x = 6.',
  },
  {
    id: 'pt-13',
    levelTested: 'H',
    difficultyOrder: 13,
    question: 'Jika x + y = 12 dan x - y = 2, berapakah nilai x dan y?',
    options: ['x=7, y=5', 'x=8, y=4', 'x=6, y=6', 'x=9, y=3'],
    correctAnswer: 'x=7, y=5',
    topic: 'Sistem Persamaan Linear (SPLDV)',
    explanation: '2x = 14 => x = 7, y = 12 - 7 = 5.',
  },
  {
    id: 'pt-14',
    levelTested: 'I',
    difficultyOrder: 14,
    question: 'Akar-akar dari persamaan kuadrat x² - 7x + 12 = 0 adalah:',
    options: ['x = 3 atau x = 4', 'x = -3 atau x = -4', 'x = 2 atau x = 6', 'x = -2 atau x = -6'],
    correctAnswer: 'x = 3 atau x = 4',
    topic: 'Faktorisasi & Persamaan Kuadrat',
    explanation: '(x - 3)(x - 4) = 0 => x = 3 atau x = 4.',
  },
  {
    id: 'pt-15',
    levelTested: 'K',
    difficultyOrder: 15,
    question: 'Nilai dari ²log 32 adalah:',
    options: ['4', '5', '6', '8'],
    correctAnswer: '5',
    topic: 'Fungsi Eksponen & Logaritma',
    explanation: '2⁵ = 32, sehingga ²log 32 = 5.',
  },
  {
    id: 'pt-16',
    levelTested: 'L',
    difficultyOrder: 16,
    question: 'Turunan pertama dari f(x) = 3x² - 5x + 4 pada x = 2 adalah:',
    options: ['7', '8', '9', '11'],
    correctAnswer: '7',
    topic: 'Kalkulus Dasar (Turunan)',
    explanation: 'f’(x) = 6x - 5. Pada x = 2: f’(2) = 6(2) - 5 = 7.',
  },
];

// Evaluate diagnostic test and determine the starting Kumon level
export function calculatePretestResult(answers: Record<string, string>): {
  recommendedLevel: KumonLevelId;
  scorePercentage: number;
  totalCorrect: number;
  totalQuestions: number;
  levelFeedback: string;
} {
  let correctCount = 0;
  const total = PRETEST_QUESTIONS.length;

  let highestMasteredLevel: KumonLevelId = '6A';
  const levelProgression: KumonLevelId[] = [
    '6A', '5A', '4A', '3A', '2A', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'
  ];

  PRETEST_QUESTIONS.forEach((q) => {
    if (answers[q.id] === q.correctAnswer) {
      correctCount++;
      highestMasteredLevel = q.levelTested;
    }
  });

  const percentage = Math.round((correctCount / total) * 100);

  // Kumon philosophy: Start at an easy, comfortable point to ensure high confidence and speed
  let recommendedLevel: KumonLevelId = '6A';

  if (correctCount === 0) recommendedLevel = '6A';
  else if (correctCount <= 2) recommendedLevel = '5A';
  else if (correctCount <= 4) recommendedLevel = '4A';
  else if (correctCount <= 5) recommendedLevel = '3A';
  else if (correctCount <= 6) recommendedLevel = '2A';
  else if (correctCount <= 7) recommendedLevel = 'A';
  else if (correctCount <= 8) recommendedLevel = 'B';
  else if (correctCount <= 9) recommendedLevel = 'C';
  else if (correctCount <= 10) recommendedLevel = 'D';
  else if (correctCount <= 11) recommendedLevel = 'E';
  else if (correctCount <= 12) recommendedLevel = 'F';
  else if (correctCount <= 13) recommendedLevel = 'G';
  else if (correctCount <= 14) recommendedLevel = 'H';
  else if (correctCount <= 15) recommendedLevel = 'I';
  else recommendedLevel = 'K';

  let levelFeedback = '';
  if (percentage >= 85) {
    levelFeedback = 'Luar biasa! Kemampuan fondasi matematika kamu sangat kuat dan siap belajar di level lanjut.';
  } else if (percentage >= 60) {
    levelFeedback = 'Bagus sekali! Kamu memiliki pemahaman konsep yang baik dan akan cepat berkembang di StepUp Math.';
  } else {
    levelFeedback = 'Hebat! Level awal ini dipilih agar kamu dapat membangun kepercayaan diri, kecepatan berhitung, dan ketelitian maksimal.';
  }

  return {
    recommendedLevel,
    scorePercentage: percentage,
    totalCorrect: correctCount,
    totalQuestions: total,
    levelFeedback,
  };
}
