import { ProblemItem } from '../../types';

// ==========================================================
// C: TABEL PERKALIAN & PEMBAGIAN SEDERHANA BERSISA
// ==========================================================
export const getCProblems = (set: number): ProblemItem[] => {
  const safeSet = Math.max(1, Math.min(5, set));

  switch (safeSet) {
    case 1:
      return [
        {
          id: `C-1-1`,
          question: '3 × 4 = ?',
          subtitle: 'Perkalian Tabel 2, 3, 4, 5',
          type: 'number',
          correctAnswer: '12',
          explanation: '3 × 4 = 12.',
          workedExample: 'Model StepUp Math C: Perkalian sebagai penjumlahan berulang (3 + 3 + 3 + 3 = 12).',
          stepByStepGuide: [
            'Langkah 1: 3 dijumlahkan sebanyak 4 kali.',
            'Langkah 2: 3 + 3 + 3 + 3 = 12.',
          ],
        },
        { id: `C-1-2`, question: '5 × 3 = ?', type: 'number', correctAnswer: '15', explanation: '5 × 3 = 15.' },
        { id: `C-1-3`, question: '4 × 6 = ?', type: 'number', correctAnswer: '24', explanation: '4 × 6 = 24.' },
        { id: `C-1-4`, question: '7 × 4 = ?', type: 'number', correctAnswer: '28', explanation: '7 × 4 = 28.' },
        { id: `C-1-5`, question: '8 × 5 = ?', type: 'number', correctAnswer: '40', explanation: '8 × 5 = 40.' },
        { id: `C-1-6`, question: '9 × 3 = ?', type: 'number', correctAnswer: '27', explanation: '9 × 3 = 27.' },
        { id: `C-1-7`, question: '6 × 4 = ?', type: 'number', correctAnswer: '24', explanation: '6 × 4 = 24.' },
        { id: `C-1-8`, question: '7 × 5 = ?', type: 'number', correctAnswer: '35', explanation: '7 × 5 = 35.' },
        { id: `C-1-9`, question: '8 × 4 = ?', type: 'number', correctAnswer: '32', explanation: '8 × 4 = 32.' },
        { id: `C-1-10`, question: '9 × 5 = ?', type: 'number', correctAnswer: '45', explanation: '9 × 5 = 45.' },
      ];

    case 2:
      return [
        {
          id: `C-2-1`,
          question: '6 × 7 = ?',
          subtitle: 'Perkalian Tabel 6, 7, 8, 9',
          type: 'number',
          correctAnswer: '42',
          explanation: '6 × 7 = 42.',
          workedExample: 'Model StepUp Math C: Penguasaan perkalian tabel tinggi secara otomatis.',
          stepByStepGuide: [
            'Langkah 1: 6 × 7 = 42.',
          ],
        },
        { id: `C-2-2`, question: '8 × 6 = ?', type: 'number', correctAnswer: '48', explanation: '8 × 6 = 48.' },
        { id: `C-2-3`, question: '7 × 8 = ?', type: 'number', correctAnswer: '56', explanation: '7 × 8 = 56.' },
        { id: `C-2-4`, question: '9 × 6 = ?', type: 'number', correctAnswer: '54', explanation: '9 × 6 = 54.' },
        { id: `C-2-5`, question: '8 × 8 = ?', type: 'number', correctAnswer: '64', explanation: '8 × 8 = 64.' },
        { id: `C-2-6`, question: '7 × 9 = ?', type: 'number', correctAnswer: '63', explanation: '7 × 9 = 63.' },
        { id: `C-2-7`, question: '9 × 8 = ?', type: 'number', correctAnswer: '72', explanation: '9 × 8 = 72.' },
        { id: `C-2-8`, question: '9 × 9 = ?', type: 'number', correctAnswer: '81', explanation: '9 × 9 = 81.' },
        { id: `C-2-9`, question: '12 × 6 = ?', type: 'number', correctAnswer: '72', explanation: '12 × 6 = 72.' },
        { id: `C-2-10`, question: '15 × 8 = ?', type: 'number', correctAnswer: '120', explanation: '15 × 8 = 120.' },
      ];

    case 3:
      return [
        {
          id: `C-3-1`,
          question: '18 ÷ 3 = ?',
          subtitle: 'Pembagian Dasar Tanpa Sisa',
          type: 'number',
          correctAnswer: '6',
          explanation: '18 ÷ 3 = 6 karena 6 × 3 = 18.',
          workedExample: 'Model StepUp Math C: Pembagian sebagai kebalikan perkalian.',
          stepByStepGuide: [
            'Langkah 1: Cari angka pengali: ? × 3 = 18.',
            'Langkah 2: 6 × 3 = 18, sehingga 18 ÷ 3 = 6.',
          ],
        },
        { id: `C-3-2`, question: '24 ÷ 4 = ?', type: 'number', correctAnswer: '6', explanation: '24 ÷ 4 = 6.' },
        { id: `C-3-3`, question: '35 ÷ 5 = ?', type: 'number', correctAnswer: '7', explanation: '35 ÷ 5 = 7.' },
        { id: `C-3-4`, question: '42 ÷ 6 = ?', type: 'number', correctAnswer: '7', explanation: '42 ÷ 6 = 7.' },
        { id: `C-3-5`, question: '56 ÷ 7 = ?', type: 'number', correctAnswer: '8', explanation: '56 ÷ 7 = 8.' },
        { id: `C-3-6`, question: '64 ÷ 8 = ?', type: 'number', correctAnswer: '8', explanation: '64 ÷ 8 = 8.' },
        { id: `C-3-7`, question: '72 ÷ 9 = ?', type: 'number', correctAnswer: '8', explanation: '72 ÷ 9 = 8.' },
        { id: `C-3-8`, question: '81 ÷ 9 = ?', type: 'number', correctAnswer: '9', explanation: '81 ÷ 9 = 9.' },
        { id: `C-3-9`, question: '90 ÷ 10 = ?', type: 'number', correctAnswer: '9', explanation: '90 ÷ 10 = 9.' },
        { id: `C-3-10`, question: '96 ÷ 8 = ?', type: 'number', correctAnswer: '12', explanation: '96 ÷ 8 = 12.' },
      ];

    case 4:
      return [
        {
          id: `C-4-1`,
          question: 'Hitung pembagian bersisa: 17 ÷ 3 = ? (Tulis format: hasil sisa s)',
          subtitle: 'Pembagian Sederhana dengan Sisa',
          type: 'text',
          correctAnswer: '5 sisa 2',
          alternateAnswers: ['5sisa2', '5 r 2', '5 s 2'],
          explanation: '3 × 5 = 15. Sisa = 17 - 15 = 2. Jawaban = 5 sisa 2.',
          workedExample: 'Model StepUp Math C: Pembagian bersisa dengan mencari kelipatan terdekat di bawah bilangan.',
          stepByStepGuide: [
            'Langkah 1: Kelipatan 3 terdekat di bawah 17 adalah 15 (3 × 5 = 15).',
            'Langkah 2: Sisa = 17 - 15 = 2.',
            'Langkah 3: Tuliskan: 5 sisa 2.',
          ],
        },
        {
          id: `C-4-2`,
          question: '23 ÷ 4 = ?',
          type: 'text',
          correctAnswer: '5 sisa 3',
          alternateAnswers: ['5sisa3', '5 r 3'],
          explanation: '4 × 5 = 20, 23 - 20 = 3. Jawaban = 5 sisa 3.',
        },
        {
          id: `C-4-3`,
          question: '29 ÷ 5 = ?',
          type: 'text',
          correctAnswer: '5 sisa 4',
          alternateAnswers: ['5sisa4', '5 r 4'],
          explanation: '5 × 5 = 25, 29 - 25 = 4. Jawaban = 5 sisa 4.',
        },
        {
          id: `C-4-4`,
          question: '38 ÷ 6 = ?',
          type: 'text',
          correctAnswer: '6 sisa 2',
          alternateAnswers: ['6sisa2', '6 r 2'],
          explanation: '6 × 6 = 36, 38 - 36 = 2. Jawaban = 6 sisa 2.',
        },
        {
          id: `C-4-5`,
          question: '45 ÷ 7 = ?',
          type: 'text',
          correctAnswer: '6 sisa 3',
          alternateAnswers: ['6sisa3', '6 r 3'],
          explanation: '7 × 6 = 42, 45 - 42 = 3. Jawaban = 6 sisa 3.',
        },
        {
          id: `C-4-6`,
          question: '53 ÷ 8 = ?',
          type: 'text',
          correctAnswer: '6 sisa 5',
          alternateAnswers: ['6sisa5', '6 r 5'],
          explanation: '8 × 6 = 48, 53 - 48 = 5. Jawaban = 6 sisa 5.',
        },
        {
          id: `C-4-7`,
          question: '67 ÷ 9 = ?',
          type: 'text',
          correctAnswer: '7 sisa 4',
          alternateAnswers: ['7sisa4', '7 r 4'],
          explanation: '9 × 7 = 63, 67 - 63 = 4. Jawaban = 7 sisa 4.',
        },
        {
          id: `C-4-8`,
          question: '75 ÷ 8 = ?',
          type: 'text',
          correctAnswer: '9 sisa 3',
          alternateAnswers: ['9sisa3', '9 r 3'],
          explanation: '8 × 9 = 72, 75 - 72 = 3. Jawaban = 9 sisa 3.',
        },
        {
          id: `C-4-9`,
          question: '83 ÷ 9 = ?',
          type: 'text',
          correctAnswer: '9 sisa 2',
          alternateAnswers: ['9sisa2', '9 r 2'],
          explanation: '9 × 9 = 81, 83 - 81 = 2. Jawaban = 9 sisa 2.',
        },
        {
          id: `C-4-10`,
          question: '95 ÷ 10 = ?',
          type: 'text',
          correctAnswer: '9 sisa 5',
          alternateAnswers: ['9sisa5', '9 r 5'],
          explanation: '10 × 9 = 90, 95 - 90 = 5. Jawaban = 9 sisa 5.',
        },
      ];

    case 5:
    default:
      return [
        {
          id: `C-5-1`,
          question: '8 × 7 = ?',
          subtitle: 'Penguasaan Penuh Perkalian & Pembagian Level C',
          type: 'number',
          correctAnswer: '56',
          explanation: '8 × 7 = 56.',
          workedExample: 'Model StepUp Math C: Evaluasi perkalian dan pembagian cepat.',
          stepByStepGuide: ['Langkah 1: 8 × 7 = 56.'],
        },
        { id: `C-5-2`, question: '9 × 8 = ?', type: 'number', correctAnswer: '72', explanation: '9 × 8 = 72.' },
        { id: `C-5-3`, question: '63 ÷ 7 = ?', type: 'number', correctAnswer: '9', explanation: '63 ÷ 7 = 9.' },
        { id: `C-5-4`, question: '56 ÷ 8 = ?', type: 'number', correctAnswer: '7', explanation: '56 ÷ 8 = 7.' },
        { id: `C-5-5`, question: '47 ÷ 6 = ?', type: 'text', correctAnswer: '7 sisa 5', alternateAnswers: ['7sisa5'], explanation: '6 × 7 = 42, sisa 5.' },
        { id: `C-5-6`, question: '59 ÷ 8 = ?', type: 'text', correctAnswer: '7 sisa 3', alternateAnswers: ['7sisa3'], explanation: '8 × 7 = 56, sisa 3.' },
        { id: `C-5-7`, question: '14 × 5 = ?', type: 'number', correctAnswer: '70', explanation: '14 × 5 = 70.' },
        { id: `C-5-8`, question: '16 × 4 = ?', type: 'number', correctAnswer: '64', explanation: '16 × 4 = 64.' },
        { id: `C-5-9`, question: '84 ÷ 7 = ?', type: 'number', correctAnswer: '12', explanation: '84 ÷ 7 = 12.' },
        { id: `C-5-10`, question: '98 ÷ 9 = ?', type: 'text', correctAnswer: '10 sisa 8', alternateAnswers: ['10sisa8'], explanation: '9 × 10 = 90, sisa 8.' },
      ];
  }
};

// =========================================================================
// D: PERKALIAN & PEMBAGIAN BERSUSUN BANYAK DIGIT & REDUKSI PECAHAN
// =========================================================================
export const getDProblems = (set: number): ProblemItem[] => {
  const safeSet = Math.max(1, Math.min(5, set));

  switch (safeSet) {
    case 1:
      return [
        {
          id: `D-1-1`,
          question: 'Hitung perkalian bersusun:\n  34 × 6 = ?',
          subtitle: 'Perkalian 2 Digit × 1 Digit & 2 Digit',
          type: 'number',
          correctAnswer: '204',
          explanation: '34 × 6 = (30 × 6) + (4 × 6) = 180 + 24 = 204.',
          workedExample: 'Model StepUp Math D: Perkalian bersusun 2 digit.',
          stepByStepGuide: [
            'Langkah 1: 4 × 6 = 24 (tulis 4, simpan 2).',
            'Langkah 2: 3 × 6 = 18, lalu 18 + 2 = 20.',
            'Langkah 3: Hasil = 204.',
          ],
        },
        { id: `D-1-2`, question: '48 × 7 = ?', type: 'number', correctAnswer: '336', explanation: '48 × 7 = 336.' },
        { id: `D-1-3`, question: '65 × 8 = ?', type: 'number', correctAnswer: '520', explanation: '65 × 8 = 520.' },
        { id: `D-1-4`, question: '89 × 9 = ?', type: 'number', correctAnswer: '801', explanation: '89 × 9 = 801.' },
        { id: `D-1-5`, question: '23 × 14 = ?', type: 'number', correctAnswer: '322', explanation: '23 × 14 = 322.' },
        { id: `D-1-6`, question: '35 × 24 = ?', type: 'number', correctAnswer: '840', explanation: '35 × 24 = 840.' },
        { id: `D-1-7`, question: '48 × 32 = ?', type: 'number', correctAnswer: '1536', explanation: '48 × 32 = 1536.' },
        { id: `D-1-8`, question: '56 × 45 = ?', type: 'number', correctAnswer: '2520', explanation: '56 × 45 = 2520.' },
        { id: `D-1-9`, question: '74 × 38 = ?', type: 'number', correctAnswer: '2812', explanation: '74 × 38 = 2812.' },
        { id: `D-1-10`, question: '86 × 67 = ?', type: 'number', correctAnswer: '5762', explanation: '86 × 67 = 5762.' },
      ];

    case 2:
      return [
        {
          id: `D-2-1`,
          question: 'Hitung pembagian bersusun (porogapit):\n  84 ÷ 3 = ?',
          subtitle: 'Pembagian Porogapit 2-3 Digit ÷ 1 Digit',
          type: 'number',
          correctAnswer: '28',
          explanation: '8 ÷ 3 = 2 sisa 2, lalu 24 ÷ 3 = 8. Hasil = 28.',
          workedExample: 'Model StepUp Math D: Algoritma pembagian bersusun (porogapit).',
          stepByStepGuide: [
            'Langkah 1: Bagi angka depan: 8 ÷ 3 = 2 (tulis 2), 2 × 3 = 6, 8 - 6 = 2.',
            'Langkah 2: Turunkan 4 menjadi 24: 24 ÷ 3 = 8.',
            'Langkah 3: Hasil = 28.',
          ],
        },
        { id: `D-2-2`, question: '156 ÷ 4 = ?', type: 'number', correctAnswer: '39', explanation: '156 ÷ 4 = 39.' },
        { id: `D-2-3`, question: '275 ÷ 5 = ?', type: 'number', correctAnswer: '55', explanation: '275 ÷ 5 = 55.' },
        { id: `D-2-4`, question: '348 ÷ 6 = ?', type: 'number', correctAnswer: '58', explanation: '348 ÷ 6 = 58.' },
        { id: `D-2-5`, question: '518 ÷ 7 = ?', type: 'number', correctAnswer: '74', explanation: '518 ÷ 7 = 74.' },
        { id: `D-2-6`, question: '672 ÷ 8 = ?', type: 'number', correctAnswer: '84', explanation: '672 ÷ 8 = 84.' },
        { id: `D-2-7`, question: '801 ÷ 9 = ?', type: 'number', correctAnswer: '89', explanation: '801 ÷ 9 = 89.' },
        { id: `D-2-8`, question: '945 ÷ 7 = ?', type: 'number', correctAnswer: '135', explanation: '945 ÷ 7 = 135.' },
        { id: `D-2-9`, question: '1024 ÷ 8 = ?', type: 'number', correctAnswer: '128', explanation: '1024 ÷ 8 = 128.' },
        { id: `D-2-10`, question: '1458 ÷ 6 = ?', type: 'number', correctAnswer: '243', explanation: '1458 ÷ 6 = 243.' },
      ];

    case 3:
      return [
        {
          id: `D-3-1`,
          question: 'Hitung pembagian 3 digit oleh 2 digit:\n  288 ÷ 12 = ?',
          subtitle: 'Pembagian 3-4 Digit ÷ 2 Digit',
          type: 'number',
          correctAnswer: '24',
          explanation: '288 ÷ 12 = 24.',
          workedExample: 'Model StepUp Math D: Pembagian pembagi 2 digit.',
          stepByStepGuide: [
            'Langkah 1: 28 ÷ 12 = 2 sisa 4.',
            'Langkah 2: 48 ÷ 12 = 4.',
            'Langkah 3: Hasil = 24.',
          ],
        },
        { id: `D-3-2`, question: '375 ÷ 15 = ?', type: 'number', correctAnswer: '25', explanation: '375 ÷ 15 = 25.' },
        { id: `D-3-3`, question: '504 ÷ 24 = ?', type: 'number', correctAnswer: '21', explanation: '504 ÷ 24 = 21.' },
        { id: `D-3-4`, question: '672 ÷ 28 = ?', type: 'number', correctAnswer: '24', explanation: '672 ÷ 28 = 24.' },
        { id: `D-3-5`, question: '816 ÷ 34 = ?', type: 'number', correctAnswer: '24', explanation: '816 ÷ 34 = 24.' },
        { id: `D-3-6`, question: '1125 ÷ 45 = ?', type: 'number', correctAnswer: '25', explanation: '1125 ÷ 45 = 25.' },
        { id: `D-3-7`, question: '1440 ÷ 48 = ?', type: 'number', correctAnswer: '30', explanation: '1440 ÷ 48 = 30.' },
        { id: `D-3-8`, question: '1920 ÷ 60 = ?', type: 'number', correctAnswer: '32', explanation: '1920 ÷ 60 = 32.' },
        { id: `D-3-9`, question: '2475 ÷ 75 = ?', type: 'number', correctAnswer: '33', explanation: '2475 ÷ 75 = 33.' },
        { id: `D-3-10`, question: '3528 ÷ 84 = ?', type: 'number', correctAnswer: '42', explanation: '3528 ÷ 84 = 42.' },
      ];

    case 4:
      return [
        {
          id: `D-4-1`,
          question: 'Sederhanakan pecahan berikut ke bentuk paling sederhana:\n  8/12 = ?',
          subtitle: 'Penyederhanaan Pecahan (FPB)',
          type: 'text',
          correctAnswer: '2/3',
          explanation: 'Bagi pembilang dan penyebut dengan FPB(8, 12) = 4. 8÷4 / 12÷4 = 2/3.',
          workedExample: 'Model StepUp Math D: Menyederhanakan pecahan dengan membagi pembilang dan penyebut dengan FPB.',
          stepByStepGuide: [
            'Langkah 1: Temukan FPB dari 8 dan 12, yaitu 4.',
            'Langkah 2: Bagi atas dan bawah dengan 4: 8 ÷ 4 = 2, 12 ÷ 4 = 3.',
            'Langkah 3: Tuliskan: 2/3.',
          ],
        },
        { id: `D-4-2`, question: 'Sederhanakan pecahan: 15/25 = ?', type: 'text', correctAnswer: '3/5', explanation: '15/25 = 3/5.' },
        { id: `D-4-3`, question: 'Sederhanakan pecahan: 18/24 = ?', type: 'text', correctAnswer: '3/4', explanation: '18/24 = 3/4.' },
        { id: `D-4-4`, question: 'Sederhanakan pecahan: 24/36 = ?', type: 'text', correctAnswer: '2/3', explanation: '24/36 = 2/3.' },
        { id: `D-4-5`, question: 'Sederhanakan pecahan: 30/45 = ?', type: 'text', correctAnswer: '2/3', explanation: '30/45 = 2/3.' },
        { id: `D-4-6`, question: 'Sederhanakan pecahan: 36/48 = ?', type: 'text', correctAnswer: '3/4', explanation: '36/48 = 3/4.' },
        { id: `D-4-7`, question: 'Sederhanakan pecahan: 42/56 = ?', type: 'text', correctAnswer: '3/4', explanation: '42/56 = 3/4.' },
        { id: `D-4-8`, question: 'Sederhanakan pecahan: 45/60 = ?', type: 'text', correctAnswer: '3/4', explanation: '45/60 = 3/4.' },
        { id: `D-4-9`, question: 'Sederhanakan pecahan: 64/80 = ?', type: 'text', correctAnswer: '4/5', explanation: '64/80 = 4/5.' },
        { id: `D-4-10`, question: 'Sederhanakan pecahan: 75/100 = ?', type: 'text', correctAnswer: '3/4', explanation: '75/100 = 3/4.' },
      ];

    case 5:
    default:
      return [
        {
          id: `D-5-1`,
          question: 'Hitung: 64 × 38 = ?',
          subtitle: 'Penguasaan Total Operasi Bersusun Level D',
          type: 'number',
          correctAnswer: '2432',
          explanation: '64 × 38 = 2432.',
          workedExample: 'Model StepUp Math D: Perkalian dan pembagian multi-digit.',
          stepByStepGuide: ['Langkah 1: 64 × 38 = 2432.'],
        },
        { id: `D-5-2`, question: 'Hitung: 87 × 45 = ?', type: 'number', correctAnswer: '3915', explanation: '87 × 45 = 3915.' },
        { id: `D-5-3`, question: 'Hitung: 1536 ÷ 16 = ?', type: 'number', correctAnswer: '96', explanation: '1536 ÷ 16 = 96.' },
        { id: `D-5-4`, question: 'Hitung: 2250 ÷ 25 = ?', type: 'number', correctAnswer: '90', explanation: '2250 ÷ 25 = 90.' },
        { id: `D-5-5`, question: 'Sederhanakan pecahan: 48/64 = ?', type: 'text', correctAnswer: '3/4', explanation: '48/64 = 3/4.' },
        { id: `D-5-6`, question: 'Sederhanakan pecahan: 54/90 = ?', type: 'text', correctAnswer: '3/5', explanation: '54/90 = 3/5.' },
        { id: `D-5-7`, question: 'Hitung: 125 × 36 = ?', type: 'number', correctAnswer: '4500', explanation: '125 × 36 = 4500.' },
        { id: `D-5-8`, question: 'Hitung: 3456 ÷ 36 = ?', type: 'number', correctAnswer: '96', explanation: '3456 ÷ 36 = 96.' },
        { id: `D-5-9`, question: 'Sederhanakan: 84/108 = ?', type: 'text', correctAnswer: '7/9', explanation: '84/108 = 7/9.' },
        { id: `D-5-10`, question: 'Sederhanakan: 120/150 = ?', type: 'text', correctAnswer: '4/5', explanation: '120/150 = 4/5.' },
      ];
  }
};

// ==========================================================
// E: PECAHAN BIASA, CAMPURAN, DESIMAL & PERSEN
// ==========================================================
export const getEProblems = (set: number): ProblemItem[] => {
  const safeSet = Math.max(1, Math.min(5, set));

  switch (safeSet) {
    case 1:
      return [
        {
          id: `E-1-1`,
          question: 'Hitung penjumlahan pecahan:\n  1/3 + 1/2 = ?',
          subtitle: 'Penjumlahan Pecahan Biasa & Campuran',
          type: 'text',
          correctAnswer: '5/6',
          explanation: 'Samakan penyebut ke KPK(3, 2) = 6. 2/6 + 3/6 = 5/6.',
          workedExample: 'Model StepUp Math E: Menyamakan penyebut dengan KPK sebelum menjumlahkan pembilang.',
          stepByStepGuide: [
            'Langkah 1: KPK dari 3 dan 2 adalah 6.',
            'Langkah 2: 1/3 = 2/6 dan 1/2 = 3/6.',
            'Langkah 3: 2/6 + 3/6 = 5/6.',
          ],
        },
        { id: `E-1-2`, question: '2/5 + 1/3 = ?', type: 'text', correctAnswer: '11/15', explanation: '6/15 + 5/15 = 11/15.' },
        { id: `E-1-3`, question: '3/4 + 1/6 = ?', type: 'text', correctAnswer: '11/12', explanation: '9/12 + 2/12 = 11/12.' },
        { id: `E-1-4`, question: '5/8 + 1/4 = ?', type: 'text', correctAnswer: '7/8', explanation: '5/8 + 2/8 = 7/8.' },
        { id: `E-1-5`, question: '2/3 + 3/5 = ?', type: 'text', correctAnswer: '19/15', alternateAnswers: ['1 4/15'], explanation: '10/15 + 9/15 = 19/15.' },
        { id: `E-1-6`, question: '5/6 + 3/4 = ?', type: 'text', correctAnswer: '19/12', alternateAnswers: ['1 7/12'], explanation: '10/12 + 9/12 = 19/12.' },
        { id: `E-1-7`, question: '1 1/2 + 2 1/3 = ? (Tulis dalam pecahan campuran atau biasa)', type: 'text', correctAnswer: '3 5/6', alternateAnswers: ['23/6'], explanation: '1 + 2 + (1/2 + 1/3) = 3 5/6.' },
        { id: `E-1-8`, question: '2 3/4 + 1 2/5 = ?', type: 'text', correctAnswer: '4 3/20', alternateAnswers: ['83/20'], explanation: '2 + 1 + 15/20 + 8/20 = 4 3/20.' },
        { id: `E-1-9`, question: '3 5/6 + 2 2/3 = ?', type: 'text', correctAnswer: '6 1/2', alternateAnswers: ['13/2', '6 3/6'], explanation: '3 + 2 + 5/6 + 4/6 = 5 9/6 = 6 1/2.' },
        { id: `E-1-10`, question: '4 3/8 + 2 3/4 = ?', type: 'text', correctAnswer: '7 1/8', alternateAnswers: ['57/8'], explanation: '4 + 2 + 3/8 + 6/8 = 6 9/8 = 7 1/8.' },
      ];

    case 2:
      return [
        {
          id: `E-2-1`,
          question: 'Hitung pengurangan pecahan:\n  3/4 - 1/2 = ?',
          subtitle: 'Pengurangan Pecahan Biasa & Campuran',
          type: 'text',
          correctAnswer: '1/4',
          explanation: '3/4 - 2/4 = 1/4.',
          workedExample: 'Model StepUp Math E: Pengurangan pecahan dengan menyamakan penyebut.',
          stepByStepGuide: [
            'Langkah 1: 1/2 = 2/4.',
            'Langkah 2: 3/4 - 2/4 = 1/4.',
          ],
        },
        { id: `E-2-2`, question: '5/6 - 1/3 = ?', type: 'text', correctAnswer: '1/2', alternateAnswers: ['3/6'], explanation: '5/6 - 2/6 = 3/6 = 1/2.' },
        { id: `E-2-3`, question: '7/8 - 3/4 = ?', type: 'text', correctAnswer: '1/8', explanation: '7/8 - 6/8 = 1/8.' },
        { id: `E-2-4`, question: '4/5 - 2/3 = ?', type: 'text', correctAnswer: '2/15', explanation: '12/15 - 10/15 = 2/15.' },
        { id: `E-2-5`, question: '5/6 - 2/5 = ?', type: 'text', correctAnswer: '13/30', explanation: '25/30 - 12/30 = 13/30.' },
        { id: `E-2-6`, question: '3 1/2 - 1 1/4 = ?', type: 'text', correctAnswer: '2 1/4', alternateAnswers: ['9/4'], explanation: '3 2/4 - 1 1/4 = 2 1/4.' },
        { id: `E-2-7`, question: '4 2/3 - 2 1/2 = ?', type: 'text', correctAnswer: '2 1/6', alternateAnswers: ['13/6'], explanation: '4 4/6 - 2 3/6 = 2 1/6.' },
        { id: `E-2-8`, question: '5 1/4 - 2 2/3 = ?', type: 'text', correctAnswer: '2 7/12', alternateAnswers: ['31/12'], explanation: '5 3/12 - 2 8/12 = 4 15/12 - 2 8/12 = 2 7/12.' },
        { id: `E-2-9`, question: '6 1/6 - 3 4/5 = ?', type: 'text', correctAnswer: '2 11/30', alternateAnswers: ['71/30'], explanation: '6 5/30 - 3 24/30 = 5 35/30 - 3 24/30 = 2 11/30.' },
        { id: `E-2-10`, question: '7 - 3 5/8 = ?', type: 'text', correctAnswer: '3 3/8', alternateAnswers: ['27/8'], explanation: '6 8/8 - 3 5/8 = 3 3/8.' },
      ];

    case 3:
      return [
        {
          id: `E-3-1`,
          question: 'Hitung perkalian pecahan:\n  2/3 × 3/4 = ?',
          subtitle: 'Perkalian & Pembagian Pecahan',
          type: 'text',
          correctAnswer: '1/2',
          alternateAnswers: ['6/12', '2/4'],
          explanation: '(2 × 3) / (3 × 4) = 6/12 = 1/2.',
          workedExample: 'Model StepUp Math E: Perkalian pecahan (pembilang × pembilang, penyebut × penyebut) lalu sederhanakan.',
          stepByStepGuide: [
            'Langkah 1: Kalikan pembilang: 2 × 3 = 6.',
            'Langkah 2: Kalikan penyebut: 3 × 4 = 12.',
            'Langkah 3: Sederhanakan: 6/12 = 1/2.',
          ],
        },
        { id: `E-3-2`, question: '4/5 × 15/16 = ?', type: 'text', correctAnswer: '3/4', explanation: '(4×15)/(5×16) = 60/80 = 3/4.' },
        { id: `E-3-3`, question: '3/7 × 14/9 = ?', type: 'text', correctAnswer: '2/3', explanation: '(3×14)/(7×9) = 42/63 = 2/3.' },
        { id: `E-3-4`, question: '5/8 × 16/25 = ?', type: 'text', correctAnswer: '2/5', explanation: '(5×16)/(8×25) = 80/200 = 2/5.' },
        { id: `E-3-5`, question: '2/3 ÷ 4/9 = ?', type: 'text', correctAnswer: '3/2', alternateAnswers: ['1 1/2', '1.5'], explanation: '2/3 × 9/4 = 18/12 = 3/2.' },
        { id: `E-3-6`, question: '5/6 ÷ 10/3 = ?', type: 'text', correctAnswer: '1/4', explanation: '5/6 × 3/10 = 15/60 = 1/4.' },
        { id: `E-3-7`, question: '3 1/2 × 4/7 = ?', type: 'number', correctAnswer: '2', explanation: '7/2 × 4/7 = 28/14 = 2.' },
        { id: `E-3-8`, question: '2 2/3 ÷ 4/9 = ?', type: 'number', correctAnswer: '6', explanation: '8/3 × 9/4 = 72/12 = 6.' },
        { id: `E-3-9`, question: '4 1/2 ÷ 1 1/2 = ?', type: 'number', correctAnswer: '3', explanation: '9/2 ÷ 3/2 = 9/2 × 2/3 = 3.' },
        { id: `E-3-10`, question: '5 1/3 × 3 3/4 = ?', type: 'number', correctAnswer: '20', explanation: '16/3 × 15/4 = 240/12 = 20.' },
      ];

    case 4:
      return [
        {
          id: `E-4-1`,
          question: 'Hitung desimal:\n  0.35 + 0.45 = ?',
          subtitle: 'Operasi Desimal & Persentase',
          type: 'number',
          correctAnswer: '0.8',
          alternateAnswers: ['0.80'],
          explanation: '0.35 + 0.45 = 0.80 = 0.8.',
          workedExample: 'Model StepUp Math E: Menjaga kelurusan koma desimal saat berhitung.',
          stepByStepGuide: [
            'Langkah 1: Luruskan tanda koma desimal.',
            'Langkah 2: Jumlahkan 35 + 45 = 80.',
            'Langkah 3: Tuliskan 0.8.',
          ],
        },
        { id: `E-4-2`, question: '1.25 + 2.75 = ?', type: 'number', correctAnswer: '4', alternateAnswers: ['4.0', '4.00'], explanation: '1.25 + 2.75 = 4.' },
        { id: `E-4-3`, question: '4.8 - 1.95 = ?', type: 'number', correctAnswer: '2.85', explanation: '4.80 - 1.95 = 2.85.' },
        { id: `E-4-4`, question: '0.6 × 0.4 = ?', type: 'number', correctAnswer: '0.24', explanation: '0.6 × 0.4 = 0.24.' },
        { id: `E-4-5`, question: '1.2 × 0.8 = ?', type: 'number', correctAnswer: '0.96', explanation: '1.2 × 0.8 = 0.96.' },
        { id: `E-4-6`, question: '4.5 ÷ 0.9 = ?', type: 'number', correctAnswer: '5', explanation: '4.5 ÷ 0.9 = 45 ÷ 9 = 5.' },
        { id: `E-4-7`, question: 'Berapakah 25% dari 80?',
          type: 'number', correctAnswer: '20', explanation: '25/100 × 80 = 1/4 × 80 = 20.' },
        { id: `E-4-8`, question: 'Berapakah 15% dari 200?',
          type: 'number', correctAnswer: '30', explanation: '15/100 × 200 = 30.' },
        { id: `E-4-9`, question: 'Berapakah 30% dari 150?',
          type: 'number', correctAnswer: '45', explanation: '30/100 × 150 = 45.' },
        { id: `E-4-10`, question: 'Berapakah 75% dari 240?',
          type: 'number', correctAnswer: '180', explanation: '3/4 × 240 = 180.' },
      ];

    case 5:
    default:
      return [
        {
          id: `E-5-1`,
          question: 'Hitung: 3/4 + 0.5 = ? (Tulis dalam desimal atau pecahan)',
          subtitle: 'Penguasaan Total Pecahan & Desimal Level E',
          type: 'text',
          correctAnswer: '1.25',
          alternateAnswers: ['5/4', '1 1/4'],
          explanation: '3/4 = 0.75. 0.75 + 0.5 = 1.25.',
          workedExample: 'Model StepUp Math E: Konversi pecahan ke desimal untuk menyelesaikan operasi campuran.',
          stepByStepGuide: ['Langkah 1: Ubah 3/4 menjadi 0.75. 0.75 + 0.5 = 1.25.'],
        },
        { id: `E-5-2`, question: 'Hitung: 2.4 × 3/4 = ?', type: 'number', correctAnswer: '1.8', alternateAnswers: ['9/5', '1 4/5'], explanation: '2.4 × 0.75 = 1.8.' },
        { id: `E-5-3`, question: 'Hitung: 3 1/3 × 1.2 = ?', type: 'number', correctAnswer: '4', explanation: '10/3 × 6/5 = 60/15 = 4.' },
        { id: `E-5-4`, question: 'Hitung: 5/6 ÷ 2.5 = ?', type: 'text', correctAnswer: '1/3', alternateAnswers: ['0.33'], explanation: '5/6 ÷ 5/2 = 5/6 × 2/5 = 2/6 = 1/3.' },
        { id: `E-5-5`, question: 'Berapakah 40% dari 2 1/2?',
          type: 'number', correctAnswer: '1', explanation: '0.4 × 2.5 = 1.' },
        { id: `E-5-6`, question: 'Hitung: 4.8 ÷ 1.6 + 2 1/4 = ?', type: 'text', correctAnswer: '5.25', alternateAnswers: ['5 1/4', '21/4'], explanation: '3 + 2.25 = 5.25.' },
        { id: `E-5-7`, question: 'Hitung: 3/8 × 16 - 2.5 = ?', type: 'number', correctAnswer: '3.5', alternateAnswers: ['7/2', '3 1/2'], explanation: '6 - 2.5 = 3.5.' },
        { id: `E-5-8`, question: 'Hitung: (1.5 + 2.5) × 3/8 = ?', type: 'number', correctAnswer: '1.5', alternateAnswers: ['3/2', '1 1/2'], explanation: '4 × 3/8 = 12/8 = 1.5.' },
        { id: `E-5-9`, question: 'Berapakah 20% dari Rp250.000?',
          type: 'number', correctAnswer: '50000', alternateAnswers: ['50.000', 'Rp50.000'], explanation: '0.2 × 250.000 = 50.000.' },
        { id: `E-5-10`, question: 'Hitung: 6 2/3 - 4.5 + 1/6 = ?', type: 'text', correctAnswer: '2 1/3', alternateAnswers: ['7/3', '2.33'], explanation: '20/3 - 9/2 + 1/6 = 40/6 - 27/6 + 1/6 = 14/6 = 7/3 = 2 1/3.' },
      ];
  }
};

// =================================================================================
// F: OPERASI HITUNG CAMPURAN, URUTAN OPERASI (PEMDAS) & SOAL CERITA ARITMETIKA
// =================================================================================
export const getFProblems = (set: number): ProblemItem[] => {
  const safeSet = Math.max(1, Math.min(5, set));

  switch (safeSet) {
    case 1:
      return [
        {
          id: `F-1-1`,
          question: 'Hitung urutan operasi:\n  12 + 4 × 3 = ?',
          subtitle: 'Urutan Operasi Dasar (PEMDAS / KABATAKU)',
          type: 'number',
          correctAnswer: '24',
          explanation: 'Kerjakan perkalian terlebih dahulu: 4 × 3 = 12. Lalu 12 + 12 = 24.',
          workedExample: 'Model StepUp Math F: Operasi kali dan bagi memiliki hierarki lebih tinggi daripada tambah dan kurang.',
          stepByStepGuide: [
            'Langkah 1: Selesaikan operasi perkalian: 4 × 3 = 12.',
            'Langkah 2: Selesaikan operasi penjumlahan: 12 + 12 = 24.',
          ],
        },
        { id: `F-1-2`, question: '25 - 15 ÷ 3 = ?', type: 'number', correctAnswer: '20', explanation: '15 ÷ 3 = 5, 25 - 5 = 20.' },
        { id: `F-1-3`, question: '8 × 4 - 6 × 3 = ?', type: 'number', correctAnswer: '14', explanation: '32 - 18 = 14.' },
        { id: `F-1-4`, question: '50 - 6 × 7 + 8 = ?', type: 'number', correctAnswer: '16', explanation: '50 - 42 + 8 = 16.' },
        { id: `F-1-5`, question: '36 ÷ 4 + 5 × 3 = ?', type: 'number', correctAnswer: '24', explanation: '9 + 15 = 24.' },
        { id: `F-1-6`, question: '100 - 8 × 9 = ?', type: 'number', correctAnswer: '28', explanation: '100 - 72 = 28.' },
        { id: `F-1-7`, question: '72 ÷ 8 + 63 ÷ 7 = ?', type: 'number', correctAnswer: '18', explanation: '9 + 9 = 18.' },
        { id: `F-1-8`, question: '45 - 5 × 6 + 12 = ?', type: 'number', correctAnswer: '27', explanation: '45 - 30 + 12 = 27.' },
        { id: `F-1-9`, question: '18 + 24 ÷ 6 - 7 = ?', type: 'number', correctAnswer: '15', explanation: '18 + 4 - 7 = 15.' },
        { id: `F-1-10`, question: '60 ÷ 5 × 2 + 10 = ?', type: 'number', correctAnswer: '34', explanation: '12 × 2 + 10 = 24 + 10 = 34.' },
      ];

    case 2:
      return [
        {
          id: `F-2-1`,
          question: 'Hitung operasi dengan tanda kurung:\n  (15 + 9) ÷ 3 = ?',
          subtitle: 'Operasi Kurung & Pangkat (PEMDAS)',
          type: 'number',
          correctAnswer: '8',
          explanation: 'Kerjakan dalam kurung dahulu: 15 + 9 = 24. Lalu 24 ÷ 3 = 8.',
          workedExample: 'Model StepUp Math F: Operasi di dalam tanda kurung diselesaikan paling pertama.',
          stepByStepGuide: [
            'Langkah 1: Selesaikan dalam tanda kurung: 15 + 9 = 24.',
            'Langkah 2: Bagi dengan 3: 24 ÷ 3 = 8.',
          ],
        },
        { id: `F-2-2`, question: '5 × (12 - 4) + 6 = ?', type: 'number', correctAnswer: '46', explanation: '5 × 8 + 6 = 40 + 6 = 46.' },
        { id: `F-2-3`, question: '(28 - 12) × (14 - 9) = ?', type: 'number', correctAnswer: '80', explanation: '16 × 5 = 80.' },
        { id: `F-2-4`, question: '2³ + 4 × (10 - 7) = ?', type: 'number', correctAnswer: '20', explanation: '8 + 4 × 3 = 8 + 12 = 20.' },
        { id: `F-2-5`, question: '3² + 4² - 5² = ?', type: 'number', correctAnswer: '0', explanation: '9 + 16 - 25 = 25 - 25 = 0.' },
        { id: `F-2-6`, question: '(45 - 15) ÷ (3 + 2) = ?', type: 'number', correctAnswer: '6', explanation: '30 ÷ 5 = 6.' },
        { id: `F-2-7`, question: '6 × (8 - 3)² ÷ 15 = ?', type: 'number', correctAnswer: '10', explanation: '6 × 25 ÷ 15 = 150 ÷ 15 = 10.' },
        { id: `F-2-8`, question: '100 - (4 + 6 × 2) = ?', type: 'number', correctAnswer: '84', explanation: '100 - (4 + 12) = 100 - 16 = 84.' },
        { id: `F-2-9`, question: '(2⁴ - 6) × 3 = ?', type: 'number', correctAnswer: '30', explanation: '(16 - 6) × 3 = 10 × 3 = 30.' },
        { id: `F-2-10`, question: '(5² - 4²) ÷ 3 = ?', type: 'number', correctAnswer: '3', explanation: '(25 - 16) ÷ 3 = 9 ÷ 3 = 3.' },
      ];

    case 3:
      return [
        {
          id: `F-3-1`,
          question: 'Hitung:\n  (1/2 + 1/4) × 8 = ?',
          subtitle: 'Operasi Campuran Pecahan & Desimal Bertingkat',
          type: 'number',
          correctAnswer: '6',
          explanation: '(2/4 + 1/4) × 8 = 3/4 × 8 = 6.',
          workedExample: 'Model StepUp Math F: Operasi campuran tanda kurung dengan pecahan.',
          stepByStepGuide: [
            'Langkah 1: Selesaikan dalam kurung: 1/2 + 1/4 = 3/4.',
            'Langkah 2: Kalikan: 3/4 × 8 = 6.',
          ],
        },
        { id: `F-3-2`, question: '(3/4 - 1/2) ÷ 1/8 = ?', type: 'number', correctAnswer: '2', explanation: '1/4 ÷ 1/8 = 1/4 × 8 = 2.' },
        { id: `F-3-3`, question: '2/3 × (3/4 + 1/2) = ?', type: 'text', correctAnswer: '5/6', explanation: '2/3 × 5/4 = 10/12 = 5/6.' },
        { id: `F-3-4`, question: '0.5 × (12 - 4) + 1.5 = ?', type: 'number', correctAnswer: '5.5', alternateAnswers: ['11/2'], explanation: '0.5 × 8 + 1.5 = 4 + 1.5 = 5.5.' },
        { id: `F-3-5`, question: '(1.8 + 2.2) × 3.5 = ?', type: 'number', correctAnswer: '14', explanation: '4.0 × 3.5 = 14.' },
        { id: `F-3-6`, question: '3/5 ÷ (1/2 - 1/5) = ?', type: 'number', correctAnswer: '2', explanation: '3/5 ÷ 3/10 = 3/5 × 10/3 = 2.' },
        { id: `F-3-7`, question: '4.5 ÷ (1.2 + 0.3) = ?', type: 'number', correctAnswer: '3', explanation: '4.5 ÷ 1.5 = 3.' },
        { id: `F-3-8`, question: '(2 1/2 + 1 1/2) × 0.75 = ?', type: 'number', correctAnswer: '3', explanation: '4 × 0.75 = 3.' },
        { id: `F-3-9`, question: '(5/8 - 1/4) × 16 + 3 = ?', type: 'number', correctAnswer: '9', explanation: '3/8 × 16 + 3 = 6 + 3 = 9.' },
        { id: `F-3-10`, question: '(0.8 × 25) - (1/3 × 18) = ?', type: 'number', correctAnswer: '14', explanation: '20 - 6 = 14.' },
      ];

    case 4:
      return [
        {
          id: `F-4-1`,
          question: 'Sebuah toko memiliki 120 buku. Sebanyak 3/4 bagian telah terjual. Berapa sisa buku yang belum terjual?',
          subtitle: 'Soal Cerita Aritmetika Praktis',
          type: 'number',
          correctAnswer: '30',
          explanation: 'Terjual = 3/4 × 120 = 90 buku. Sisa = 120 - 90 = 30 buku.',
          workedExample: 'Model StepUp Math F: Menerjemahkan kalimat soal cerita ke dalam model matematika.',
          stepByStepGuide: [
            'Langkah 1: Hitung buku yang terjual: 3/4 × 120 = 90.',
            'Langkah 2: Hitung sisa buku: 120 - 90 = 30 buku.',
          ],
        },
        {
          id: `F-4-2`,
          question: 'Jarak kota A ke B adalah 180 km. Sebuah mobil menempuh jarak tersebut dalam waktu 3 jam. Berapakah kecepatan rata-rata mobil tersebut (km/jam)?',
          type: 'number',
          correctAnswer: '60',
          explanation: 'Kecepatan = Jarak / Waktu = 180 / 3 = 60 km/jam.',
        },
        {
          id: `F-4-3`,
          question: 'Pak Budi membeli 5 kg beras seharga Rp14.000 per kg dan 2 kg telur seharga Rp28.000 per kg. Jika ia membayar dengan uang Rp150.000, berapakah uang kembaliannya?',
          type: 'number',
          correctAnswer: '24000',
          alternateAnswers: ['24.000', 'Rp24.000'],
          explanation: 'Total = (5 × 14.000) + (2 × 28.000) = 70.000 + 56.000 = 126.000. Kembalian = 150.000 - 126.000 = 24.000.',
        },
        {
          id: `F-4-4`,
          question: 'Perbandingan umur Ani dan Budi adalah 3 : 5. Jika jumlah umur mereka adalah 40 tahun, berapakah umur Budi?',
          type: 'number',
          correctAnswer: '25',
          explanation: 'Umur Budi = 5/(3+5) × 40 = 5/8 × 40 = 25 tahun.',
        },
        {
          id: `F-4-5`,
          question: 'Sebuah kolam renang diisi air melalui pipa dengan debit 40 liter/menit. Berapa liter air yang mengalir dalam waktu 15 menit?',
          type: 'number',
          correctAnswer: '600',
          explanation: 'Volume = 40 × 15 = 600 liter.',
        },
        {
          id: `F-4-6`,
          question: 'Harga baju setelah didiskon 20% adalah Rp160.000. Berapakah harga asli baju sebelum diskon?',
          type: 'number',
          correctAnswer: '200000',
          alternateAnswers: ['200.000', 'Rp200.000'],
          explanation: 'Harga asli = 160.000 / 0.8 = 200.000.',
        },
        {
          id: `F-4-7`,
          question: 'Nilai rata-rata dari 4 ujian adalah 75. Jika pada ujian kelima ia mendapat nilai 90, berapakah nilai rata-rata barunya sekarang?',
          type: 'number',
          correctAnswer: '78',
          explanation: 'Total = (4 × 75) + 90 = 300 + 90 = 390. Rata-rata = 390 / 5 = 78.',
        },
        {
          id: `F-4-8`,
          question: 'Sebuah persegi panjang memiliki panjang 15 cm dan keliling 50 cm. Berapakah luas persegi panjang tersebut (cm²)?',
          type: 'number',
          correctAnswer: '150',
          explanation: 'Keliling = 2(p + l) -> 50 = 2(15 + l) -> 25 = 15 + l -> l = 10 cm. Luas = 15 × 10 = 150 cm².',
        },
        {
          id: `F-4-9`,
          question: '3 orang pekerja dapat menyelesaikan sebuah pekerjaan dalam 6 hari. Berapa hari yang dibutuhkan jika dikerjakan oleh 9 orang pekerja?',
          type: 'number',
          correctAnswer: '2',
          explanation: 'Perbandingan berbalik nilai: (3 × 6) / 9 = 18 / 9 = 2 hari.',
        },
        {
          id: `F-4-10`,
          question: 'Sebuah tabungan awal Rp1.000.000 mendapat bunga tunggal 6% per tahun. Berapakah total tabungan setelah 2 tahun?',
          type: 'number',
          correctAnswer: '1120000',
          alternateAnswers: ['1.120.000', 'Rp1.120.000'],
          explanation: 'Bunga = 1.000.000 × 6% × 2 = 120.000. Total = 1.120.000.',
        },
      ];

    case 5:
    default:
      return [
        {
          id: `F-5-1`,
          question: 'Hitung: 15 + 3 × (8 - 2)² ÷ 6 = ?',
          subtitle: 'Penguasaan Total Operasi Hitung Campuran Level F',
          type: 'number',
          correctAnswer: '33',
          explanation: '15 + 3 × 6² ÷ 6 = 15 + 3 × 36 ÷ 6 = 15 + 108 ÷ 6 = 15 + 18 = 33.',
          workedExample: 'Model StepUp Math F: Evaluasi komprehensif urutan operasi.',
          stepByStepGuide: ['Langkah 1: Dalam kurung: 8 - 2 = 6, 6² = 36. 3 × 36 ÷ 6 = 18. 15 + 18 = 33.'],
        },
        { id: `F-5-2`, question: 'Hitung: (4² + 3²) × 2 - 50 = ?', type: 'number', correctAnswer: '0', explanation: '(16 + 9) × 2 - 50 = 25 × 2 - 50 = 0.' },
        { id: `F-5-3`, question: 'Hitung: 3/4 × (16 + 8 ÷ 2) = ?', type: 'number', correctAnswer: '15', explanation: '3/4 × (16 + 4) = 3/4 × 20 = 15.' },
        { id: `F-5-4`, question: 'Hitung: 100 - 4 × (15 - 3 × 2) = ?', type: 'number', correctAnswer: '64', explanation: '100 - 4 × (15 - 6) = 100 - 4 × 9 = 100 - 36 = 64.' },
        { id: `F-5-5`, question: 'Hitung: (2.4 + 1.6)² ÷ 4 = ?', type: 'number', correctAnswer: '4', explanation: '4.0² ÷ 4 = 16 ÷ 4 = 4.' },
        { id: `F-5-6`, question: 'Hitung: 5/8 ÷ (3/4 - 1/8) × 12 = ?', type: 'number', correctAnswer: '12', explanation: '5/8 ÷ 5/8 × 12 = 1 × 12 = 12.' },
        { id: `F-5-7`, question: 'Sebuah tangki air berisi 500 liter. Dipakai 35% lalu ditambah 75 liter. Berapa liter isi tangki sekarang?', type: 'number', correctAnswer: '400', explanation: '500 - (35% × 500) + 75 = 500 - 175 + 75 = 400 liter.' },
        { id: `F-5-8`, question: 'Hitung: (3³ - 7) ÷ (2 × 5) + 4 = ?', type: 'number', correctAnswer: '6', explanation: '(27 - 7) ÷ 10 + 4 = 20 ÷ 10 + 4 = 2 + 4 = 6.' },
        { id: `F-5-9`, question: 'Rata-rata dari 5 bilangan adalah 12. Jika ditambah bilangan x rata-ratanya menjadi 14. Berapakah nilai x?', type: 'number', correctAnswer: '24', explanation: '(5 × 12) + x = 6 × 14 -> 60 + x = 84 -> x = 24.' },
        { id: `F-5-10`, question: 'Hitung: 250 - 5 × [12 + (8 - 3) × 4] = ?', type: 'number', correctAnswer: '90', explanation: '250 - 5 × [12 + 20] = 250 - 5 × 32 = 250 - 160 = 90.' },
      ];
  }
};
