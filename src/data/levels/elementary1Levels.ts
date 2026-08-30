import { ProblemItem } from '../../types';

// ==========================================
// 3A: PENJUMLAHAN DASAR (+1 SAMPAI +5)
// ==========================================
export const get3AProblems = (set: number): ProblemItem[] => {
  const safeSet = Math.max(1, Math.min(5, set));

  switch (safeSet) {
    case 1:
      return [
        {
          id: `3A-1-1`,
          question: '4 + 2 = ?',
          subtitle: 'Fokus Penjumlahan +2 dan +3',
          type: 'number',
          correctAnswer: '6',
          explanation: '4 + 2 = 6.',
          workedExample: 'Model StepUp Math 3A: Penjumlahan mental bertambah 2 atau 3.',
          stepByStepGuide: [
            'Langkah 1: Mulai dari angka 4.',
            'Langkah 2: Hitung maju 2 langkah: 5, 6.',
            'Langkah 3: Tuliskan jawaban 6.',
          ],
        },
        { id: `3A-1-2`, question: '6 + 2 = ?', type: 'number', correctAnswer: '8', explanation: '6 + 2 = 8.' },
        { id: `3A-1-3`, question: '9 + 2 = ?', type: 'number', correctAnswer: '11', explanation: '9 + 2 = 11.' },
        { id: `3A-1-4`, question: '3 + 3 = ?', type: 'number', correctAnswer: '6', explanation: '3 + 3 = 6.' },
        { id: `3A-1-5`, question: '5 + 3 = ?', type: 'number', correctAnswer: '8', explanation: '5 + 3 = 8.' },
        { id: `3A-1-6`, question: '8 + 3 = ?', type: 'number', correctAnswer: '11', explanation: '8 + 3 = 11.' },
        { id: `3A-1-7`, question: '14 + 2 = ?', type: 'number', correctAnswer: '16', explanation: '14 + 2 = 16.' },
        { id: `3A-1-8`, question: '17 + 3 = ?', type: 'number', correctAnswer: '20', explanation: '17 + 3 = 20.' },
        { id: `3A-1-9`, question: '25 + 3 = ?', type: 'number', correctAnswer: '28', explanation: '25 + 3 = 28.' },
        { id: `3A-1-10`, question: '38 + 2 = ?', type: 'number', correctAnswer: '40', explanation: '38 + 2 = 40.' },
      ];

    case 2:
      return [
        {
          id: `3A-2-1`,
          question: '3 + 4 = ?',
          subtitle: 'Fokus Penjumlahan +4',
          type: 'number',
          correctAnswer: '7',
          explanation: '3 + 4 = 7.',
          workedExample: 'Model StepUp Math 3A: Penjumlahan +4 secara mental cepat.',
          stepByStepGuide: [
            'Langkah 1: Dari 3, tambahkan 4.',
            'Langkah 2: 3 + 4 = 7.',
          ],
        },
        { id: `3A-2-2`, question: '5 + 4 = ?', type: 'number', correctAnswer: '9', explanation: '5 + 4 = 9.' },
        { id: `3A-2-3`, question: '6 + 4 = ?', type: 'number', correctAnswer: '10', explanation: '6 + 4 = 10.' },
        { id: `3A-2-4`, question: '7 + 4 = ?', type: 'number', correctAnswer: '11', explanation: '7 + 4 = 11.' },
        { id: `3A-2-5`, question: '8 + 4 = ?', type: 'number', correctAnswer: '12', explanation: '8 + 4 = 12.' },
        { id: `3A-2-6`, question: '9 + 4 = ?', type: 'number', correctAnswer: '13', explanation: '9 + 4 = 13.' },
        { id: `3A-2-7`, question: '15 + 4 = ?', type: 'number', correctAnswer: '19', explanation: '15 + 4 = 19.' },
        { id: `3A-2-8`, question: '18 + 4 = ?', type: 'number', correctAnswer: '22', explanation: '18 + 4 = 22.' },
        { id: `3A-2-9`, question: '26 + 4 = ?', type: 'number', correctAnswer: '30', explanation: '26 + 4 = 30.' },
        { id: `3A-2-10`, question: '47 + 4 = ?', type: 'number', correctAnswer: '51', explanation: '47 + 4 = 51.' },
      ];

    case 3:
      return [
        {
          id: `3A-3-1`,
          question: '2 + 5 = ?',
          subtitle: 'Fokus Penjumlahan +5',
          type: 'number',
          correctAnswer: '7',
          explanation: '2 + 5 = 7.',
          workedExample: 'Model StepUp Math 3A: Menguasai kombinasi penambahan lima (+5).',
          stepByStepGuide: [
            'Langkah 1: Mulai dari angka terbesar (5).',
            'Langkah 2: Tambahkan 2: 5 + 2 = 7.',
          ],
        },
        { id: `3A-3-2`, question: '4 + 5 = ?', type: 'number', correctAnswer: '9', explanation: '4 + 5 = 9.' },
        { id: `3A-3-3`, question: '5 + 5 = ?', type: 'number', correctAnswer: '10', explanation: '5 + 5 = 10.' },
        { id: `3A-3-4`, question: '6 + 5 = ?', type: 'number', correctAnswer: '11', explanation: '6 + 5 = 11.' },
        { id: `3A-3-5`, question: '7 + 5 = ?', type: 'number', correctAnswer: '12', explanation: '7 + 5 = 12.' },
        { id: `3A-3-6`, question: '8 + 5 = ?', type: 'number', correctAnswer: '13', explanation: '8 + 5 = 13.' },
        { id: `3A-3-7`, question: '9 + 5 = ?', type: 'number', correctAnswer: '14', explanation: '9 + 5 = 14.' },
        { id: `3A-3-8`, question: '16 + 5 = ?', type: 'number', correctAnswer: '21', explanation: '16 + 5 = 21.' },
        { id: `3A-3-9`, question: '28 + 5 = ?', type: 'number', correctAnswer: '33', explanation: '28 + 5 = 33.' },
        { id: `3A-3-10`, question: '55 + 5 = ?', type: 'number', correctAnswer: '60', explanation: '55 + 5 = 60.' },
      ];

    case 4:
      return [
        {
          id: `3A-4-1`,
          question: '9 + 3 = ?',
          subtitle: 'Transisi Puluhan dengan Penambah 1 s/d 5',
          type: 'number',
          correctAnswer: '12',
          explanation: '9 + 3 = 12.',
          workedExample: 'Model StepUp Math 3A: Penjumlahan melewati batas puluhan.',
          stepByStepGuide: [
            'Langkah 1: 9 + 1 = 10.',
            'Langkah 2: Sisa 2 ditambahkan ke 10: 12.',
          ],
        },
        { id: `3A-4-2`, question: '8 + 4 = ?', type: 'number', correctAnswer: '12', explanation: '8 + 4 = 12.' },
        { id: `3A-4-3`, question: '7 + 5 = ?', type: 'number', correctAnswer: '12', explanation: '7 + 5 = 12.' },
        { id: `3A-4-4`, question: '19 + 4 = ?', type: 'number', correctAnswer: '23', explanation: '19 + 4 = 23.' },
        { id: `3A-4-5`, question: '28 + 3 = ?', type: 'number', correctAnswer: '31', explanation: '28 + 3 = 31.' },
        { id: `3A-4-6`, question: '37 + 5 = ?', type: 'number', correctAnswer: '42', explanation: '37 + 5 = 42.' },
        { id: `3A-4-7`, question: '46 + 5 = ?', type: 'number', correctAnswer: '51', explanation: '46 + 5 = 51.' },
        { id: `3A-4-8`, question: '59 + 3 = ?', type: 'number', correctAnswer: '62', explanation: '59 + 3 = 62.' },
        { id: `3A-4-9`, question: '68 + 4 = ?', type: 'number', correctAnswer: '72', explanation: '68 + 4 = 72.' },
        { id: `3A-4-10`, question: '89 + 5 = ?', type: 'number', correctAnswer: '94', explanation: '89 + 5 = 94.' },
      ];

    case 5:
    default:
      return [
        {
          id: `3A-5-1`,
          question: '8 + 3 = ?',
          subtitle: 'Evaluasi Mental Math +1 s/d +5',
          type: 'number',
          correctAnswer: '11',
          explanation: '8 + 3 = 11.',
          workedExample: 'Model StepUp Math 3A: Penguasaan otomatis tanpa menghitung jari.',
          stepByStepGuide: [
            'Langkah 1: 8 + 2 = 10, lalu + 1 = 11.',
          ],
        },
        { id: `3A-5-2`, question: '9 + 4 = ?', type: 'number', correctAnswer: '13', explanation: '9 + 4 = 13.' },
        { id: `3A-5-3`, question: '8 + 5 = ?', type: 'number', correctAnswer: '13', explanation: '8 + 5 = 13.' },
        { id: `3A-5-4`, question: '17 + 4 = ?', type: 'number', correctAnswer: '21', explanation: '17 + 4 = 21.' },
        { id: `3A-5-5`, question: '26 + 5 = ?', type: 'number', correctAnswer: '31', explanation: '26 + 5 = 31.' },
        { id: `3A-5-6`, question: '38 + 4 = ?', type: 'number', correctAnswer: '42', explanation: '38 + 4 = 42.' },
        { id: `3A-5-7`, question: '49 + 2 = ?', type: 'number', correctAnswer: '51', explanation: '49 + 2 = 51.' },
        { id: `3A-5-8`, question: '57 + 5 = ?', type: 'number', correctAnswer: '62', explanation: '57 + 5 = 62.' },
        { id: `3A-5-9`, question: '78 + 3 = ?', type: 'number', correctAnswer: '81', explanation: '78 + 3 = 81.' },
        { id: `3A-5-10`, question: '95 + 5 = ?', type: 'number', correctAnswer: '100', explanation: '95 + 5 = 100.' },
      ];
  }
};

// ===================================================
// 2A: PENJUMLAHAN (+6 s/d +10) & PENGURANGAN DASAR
// ===================================================
export const get2AProblems = (set: number): ProblemItem[] => {
  const safeSet = Math.max(1, Math.min(5, set));

  switch (safeSet) {
    case 1:
      return [
        {
          id: `2A-1-1`,
          question: '5 + 6 = ?',
          subtitle: 'Fokus Penjumlahan +6 dan +7',
          type: 'number',
          correctAnswer: '11',
          explanation: '5 + 6 = 11.',
          workedExample: 'Model StepUp Math 2A: Strategi membentuk 10 (Make Ten Strategy).',
          stepByStepGuide: [
            'Langkah 1: 6 membutuhkan 4 untuk menjadi 10.',
            'Langkah 2: 5 dipecah menjadi 4 + 1.',
            'Langkah 3: (6 + 4) + 1 = 10 + 1 = 11.',
          ],
        },
        { id: `2A-1-2`, question: '7 + 6 = ?', type: 'number', correctAnswer: '13', explanation: '7 + 6 = 13.' },
        { id: `2A-1-3`, question: '8 + 6 = ?', type: 'number', correctAnswer: '14', explanation: '8 + 6 = 14.' },
        { id: `2A-1-4`, question: '9 + 6 = ?', type: 'number', correctAnswer: '15', explanation: '9 + 6 = 15.' },
        { id: `2A-1-5`, question: '4 + 7 = ?', type: 'number', correctAnswer: '11', explanation: '4 + 7 = 11.' },
        { id: `2A-1-6`, question: '6 + 7 = ?', type: 'number', correctAnswer: '13', explanation: '6 + 7 = 13.' },
        { id: `2A-1-7`, question: '8 + 7 = ?', type: 'number', correctAnswer: '15', explanation: '8 + 7 = 15.' },
        { id: `2A-1-8`, question: '9 + 7 = ?', type: 'number', correctAnswer: '16', explanation: '9 + 7 = 16.' },
        { id: `2A-1-9`, question: '15 + 6 = ?', type: 'number', correctAnswer: '21', explanation: '15 + 6 = 21.' },
        { id: `2A-1-10`, question: '28 + 7 = ?', type: 'number', correctAnswer: '35', explanation: '28 + 7 = 35.' },
      ];

    case 2:
      return [
        {
          id: `2A-2-1`,
          question: '4 + 8 = ?',
          subtitle: 'Fokus Penjumlahan +8, +9, +10',
          type: 'number',
          correctAnswer: '12',
          explanation: '4 + 8 = 12.',
          workedExample: 'Model StepUp Math 2A: Penambahan 8 dengan meminjam 2.',
          stepByStepGuide: [
            'Langkah 1: 8 + 2 = 10.',
            'Langkah 2: 4 - 2 = 2.',
            'Langkah 3: 10 + 2 = 12.',
          ],
        },
        { id: `2A-2-2`, question: '6 + 8 = ?', type: 'number', correctAnswer: '14', explanation: '6 + 8 = 14.' },
        { id: `2A-2-3`, question: '7 + 8 = ?', type: 'number', correctAnswer: '15', explanation: '7 + 8 = 15.' },
        { id: `2A-2-4`, question: '9 + 8 = ?', type: 'number', correctAnswer: '17', explanation: '9 + 8 = 17.' },
        { id: `2A-2-5`, question: '3 + 9 = ?', type: 'number', correctAnswer: '12', explanation: '3 + 9 = 12.' },
        { id: `2A-2-6`, question: '5 + 9 = ?', type: 'number', correctAnswer: '14', explanation: '5 + 9 = 14.' },
        { id: `2A-2-7`, question: '8 + 9 = ?', type: 'number', correctAnswer: '17', explanation: '8 + 9 = 17.' },
        { id: `2A-2-8`, question: '14 + 10 = ?', type: 'number', correctAnswer: '24', explanation: '14 + 10 = 24.' },
        { id: `2A-2-9`, question: '27 + 9 = ?', type: 'number', correctAnswer: '36', explanation: '27 + 9 = 36.' },
        { id: `2A-2-10`, question: '46 + 8 = ?', type: 'number', correctAnswer: '54', explanation: '46 + 8 = 54.' },
      ];

    case 3:
      return [
        {
          id: `2A-3-1`,
          question: '5 - 1 = ?',
          subtitle: 'Pengurangan Dasar -1, -2, -3',
          type: 'number',
          correctAnswer: '4',
          explanation: '5 - 1 = 4.',
          workedExample: 'Model StepUp Math 2A: Konsep pengurangan sebagai hitung mundur.',
          stepByStepGuide: [
            'Langkah 1: Dari angka 5, mundur 1 langkah.',
            'Langkah 2: 5 - 1 = 4.',
          ],
        },
        { id: `2A-3-2`, question: '7 - 2 = ?', type: 'number', correctAnswer: '5', explanation: '7 - 2 = 5.' },
        { id: `2A-3-3`, question: '9 - 3 = ?', type: 'number', correctAnswer: '6', explanation: '9 - 3 = 6.' },
        { id: `2A-3-4`, question: '10 - 2 = ?', type: 'number', correctAnswer: '8', explanation: '10 - 2 = 8.' },
        { id: `2A-3-5`, question: '11 - 3 = ?', type: 'number', correctAnswer: '8', explanation: '11 - 3 = 8.' },
        { id: `2A-3-6`, question: '12 - 2 = ?', type: 'number', correctAnswer: '10', explanation: '12 - 2 = 10.' },
        { id: `2A-3-7`, question: '13 - 3 = ?', type: 'number', correctAnswer: '10', explanation: '13 - 3 = 10.' },
        { id: `2A-3-8`, question: '15 - 2 = ?', type: 'number', correctAnswer: '13', explanation: '15 - 2 = 13.' },
        { id: `2A-3-9`, question: '18 - 3 = ?', type: 'number', correctAnswer: '15', explanation: '18 - 3 = 15.' },
        { id: `2A-3-10`, question: '20 - 3 = ?', type: 'number', correctAnswer: '17', explanation: '20 - 3 = 17.' },
      ];

    case 4:
      return [
        {
          id: `2A-4-1`,
          question: '7 - 4 = ?',
          subtitle: 'Pengurangan -4 dan -5',
          type: 'number',
          correctAnswer: '3',
          explanation: '7 - 4 = 3.',
          workedExample: 'Model StepUp Math 2A: Pengurangan cepat dengan melihat pasangan bilangan.',
          stepByStepGuide: [
            'Langkah 1: 3 + 4 = 7, maka 7 - 4 = 3.',
          ],
        },
        { id: `2A-4-2`, question: '9 - 4 = ?', type: 'number', correctAnswer: '5', explanation: '9 - 4 = 5.' },
        { id: `2A-4-3`, question: '8 - 5 = ?', type: 'number', correctAnswer: '3', explanation: '8 - 5 = 3.' },
        { id: `2A-4-4`, question: '10 - 4 = ?', type: 'number', correctAnswer: '6', explanation: '10 - 4 = 6.' },
        { id: `2A-4-5`, question: '11 - 4 = ?', type: 'number', correctAnswer: '7', explanation: '11 - 4 = 7.' },
        { id: `2A-4-6`, question: '12 - 5 = ?', type: 'number', correctAnswer: '7', explanation: '12 - 5 = 7.' },
        { id: `2A-4-7`, question: '13 - 4 = ?', type: 'number', correctAnswer: '9', explanation: '13 - 4 = 9.' },
        { id: `2A-4-8`, question: '14 - 5 = ?', type: 'number', correctAnswer: '9', explanation: '14 - 5 = 9.' },
        { id: `2A-4-9`, question: '17 - 5 = ?', type: 'number', correctAnswer: '12', explanation: '17 - 5 = 12.' },
        { id: `2A-4-10`, question: '20 - 5 = ?', type: 'number', correctAnswer: '15', explanation: '20 - 5 = 15.' },
      ];

    case 5:
    default:
      return [
        {
          id: `2A-5-1`,
          question: '8 + 7 = ?',
          subtitle: 'Review & Integrasi Tambah/Kurang 2A',
          type: 'number',
          correctAnswer: '15',
          explanation: '8 + 7 = 15.',
          workedExample: 'Model StepUp Math 2A: Kelancaran mental penjumlahan dan pengurangan dasar.',
          stepByStepGuide: [
            'Langkah 1: 8 + 7 = 15.',
          ],
        },
        { id: `2A-5-2`, question: '9 + 8 = ?', type: 'number', correctAnswer: '17', explanation: '9 + 8 = 17.' },
        { id: `2A-5-3`, question: '14 - 5 = ?', type: 'number', correctAnswer: '9', explanation: '14 - 5 = 9.' },
        { id: `2A-5-4`, question: '13 - 4 = ?', type: 'number', correctAnswer: '9', explanation: '13 - 4 = 9.' },
        { id: `2A-5-5`, question: '18 + 6 = ?', type: 'number', correctAnswer: '24', explanation: '18 + 6 = 24.' },
        { id: `2A-5-6`, question: '25 + 9 = ?', type: 'number', correctAnswer: '34', explanation: '25 + 9 = 34.' },
        { id: `2A-5-7`, question: '16 - 3 = ?', type: 'number', correctAnswer: '13', explanation: '16 - 3 = 13.' },
        { id: `2A-5-8`, question: '21 - 4 = ?', type: 'number', correctAnswer: '17', explanation: '21 - 4 = 17.' },
        { id: `2A-5-9`, question: '37 + 8 = ?', type: 'number', correctAnswer: '45', explanation: '37 + 8 = 45.' },
        { id: `2A-5-10`, question: '50 - 5 = ?', type: 'number', correctAnswer: '45', explanation: '50 - 5 = 45.' },
      ];
  }
};

// ==================================================
// A: PENJUMLAHAN & PENGURANGAN MENDATAR
// ==================================================
export const getAProblems = (set: number): ProblemItem[] => {
  const safeSet = Math.max(1, Math.min(5, set));

  switch (safeSet) {
    case 1:
      return [
        {
          id: `A-1-1`,
          question: '8 + 5 = ?',
          subtitle: 'Penjumlahan Mendatar Melampaui 10',
          type: 'number',
          correctAnswer: '13',
          explanation: '8 + 5 = 13.',
          workedExample: 'Model StepUp Math A: Penjumlahan mendatar otomatis.',
          stepByStepGuide: [
            'Langkah 1: 8 + 2 = 10, lalu 10 + 3 = 13.',
          ],
        },
        { id: `A-1-2`, question: '9 + 6 = ?', type: 'number', correctAnswer: '15', explanation: '9 + 6 = 15.' },
        { id: `A-1-3`, question: '7 + 8 = ?', type: 'number', correctAnswer: '15', explanation: '7 + 8 = 15.' },
        { id: `A-1-4`, question: '16 + 7 = ?', type: 'number', correctAnswer: '23', explanation: '16 + 7 = 23.' },
        { id: `A-1-5`, question: '25 + 8 = ?', type: 'number', correctAnswer: '33', explanation: '25 + 8 = 33.' },
        { id: `A-1-6`, question: '34 + 9 = ?', type: 'number', correctAnswer: '43', explanation: '34 + 9 = 43.' },
        { id: `A-1-7`, question: '48 + 6 = ?', type: 'number', correctAnswer: '54', explanation: '48 + 6 = 54.' },
        { id: `A-1-8`, question: '57 + 8 = ?', type: 'number', correctAnswer: '65', explanation: '57 + 8 = 65.' },
        { id: `A-1-9`, question: '69 + 7 = ?', type: 'number', correctAnswer: '76', explanation: '69 + 7 = 76.' },
        { id: `A-1-10`, question: '78 + 9 = ?', type: 'number', correctAnswer: '87', explanation: '78 + 9 = 87.' },
      ];

    case 2:
      return [
        {
          id: `A-2-1`,
          question: '11 - 4 = ?',
          subtitle: 'Pengurangan Mendatar dari Bilangan Belasan',
          type: 'number',
          correctAnswer: '7',
          explanation: '11 - 4 = 7.',
          workedExample: 'Model StepUp Math A: Pengurangan dari belasan secara spontan.',
          stepByStepGuide: [
            'Langkah 1: 4 + 7 = 11, sehingga 11 - 4 = 7.',
          ],
        },
        { id: `A-2-2`, question: '12 - 5 = ?', type: 'number', correctAnswer: '7', explanation: '12 - 5 = 7.' },
        { id: `A-2-3`, question: '13 - 7 = ?', type: 'number', correctAnswer: '6', explanation: '13 - 7 = 6.' },
        { id: `A-2-4`, question: '14 - 6 = ?', type: 'number', correctAnswer: '8', explanation: '14 - 6 = 8.' },
        { id: `A-2-5`, question: '15 - 8 = ?', type: 'number', correctAnswer: '7', explanation: '15 - 8 = 7.' },
        { id: `A-2-6`, question: '16 - 9 = ?', type: 'number', correctAnswer: '7', explanation: '16 - 9 = 7.' },
        { id: `A-2-7`, question: '17 - 8 = ?', type: 'number', correctAnswer: '9', explanation: '17 - 8 = 9.' },
        { id: `A-2-8`, question: '18 - 9 = ?', type: 'number', correctAnswer: '9', explanation: '18 - 9 = 9.' },
        { id: `A-2-9`, question: '21 - 5 = ?', type: 'number', correctAnswer: '16', explanation: '21 - 5 = 16.' },
        { id: `A-2-10`, question: '23 - 8 = ?', type: 'number', correctAnswer: '15', explanation: '23 - 8 = 15.' },
      ];

    case 3:
      return [
        {
          id: `A-3-1`,
          question: '23 + 14 = ?',
          subtitle: 'Penjumlahan 2 Digit Mendatar',
          type: 'number',
          correctAnswer: '37',
          explanation: '23 + 14 = (20+10) + (3+4) = 30 + 7 = 37.',
          workedExample: 'Model StepUp Math A: Menjumlahkan puluhan dan satuan secara mental.',
          stepByStepGuide: [
            'Langkah 1: Jumlahkan puluhan: 20 + 10 = 30.',
            'Langkah 2: Jumlahkan satuan: 3 + 4 = 7.',
            'Langkah 3: Gabungkan: 30 + 7 = 37.',
          ],
        },
        { id: `A-3-2`, question: '32 + 25 = ?', type: 'number', correctAnswer: '57', explanation: '32 + 25 = 57.' },
        { id: `A-3-3`, question: '45 + 23 = ?', type: 'number', correctAnswer: '68', explanation: '45 + 23 = 68.' },
        { id: `A-3-4`, question: '54 + 32 = ?', type: 'number', correctAnswer: '86', explanation: '54 + 32 = 86.' },
        { id: `A-3-5`, question: '61 + 28 = ?', type: 'number', correctAnswer: '89', explanation: '61 + 28 = 89.' },
        { id: `A-3-6`, question: '38 + 15 = ?', type: 'number', correctAnswer: '53', explanation: '38 + 15 = 53.' },
        { id: `A-3-7`, question: '47 + 26 = ?', type: 'number', correctAnswer: '73', explanation: '47 + 26 = 73.' },
        { id: `A-3-8`, question: '56 + 27 = ?', type: 'number', correctAnswer: '83', explanation: '56 + 27 = 83.' },
        { id: `A-3-9`, question: '68 + 25 = ?', type: 'number', correctAnswer: '93', explanation: '68 + 25 = 93.' },
        { id: `A-3-10`, question: '75 + 18 = ?', type: 'number', correctAnswer: '93', explanation: '75 + 18 = 93.' },
      ];

    case 4:
      return [
        {
          id: `A-4-1`,
          question: '38 - 15 = ?',
          subtitle: 'Pengurangan 2 Digit Mendatar',
          type: 'number',
          correctAnswer: '23',
          explanation: '38 - 15 = (30-10) + (8-5) = 20 + 3 = 23.',
          workedExample: 'Model StepUp Math A: Pengurangan puluhan dan satuan secara terstruktur.',
          stepByStepGuide: [
            'Langkah 1: Kurangkan puluhan: 30 - 10 = 20.',
            'Langkah 2: Kurangkan satuan: 8 - 5 = 3.',
            'Langkah 3: Hasil akhir: 20 + 3 = 23.',
          ],
        },
        { id: `A-4-2`, question: '49 - 23 = ?', type: 'number', correctAnswer: '26', explanation: '49 - 23 = 26.' },
        { id: `A-4-3`, question: '57 - 24 = ?', type: 'number', correctAnswer: '33', explanation: '57 - 24 = 33.' },
        { id: `A-4-4`, question: '68 - 35 = ?', type: 'number', correctAnswer: '33', explanation: '68 - 35 = 33.' },
        { id: `A-4-5`, question: '76 - 42 = ?', type: 'number', correctAnswer: '34', explanation: '76 - 42 = 34.' },
        { id: `A-4-6`, question: '42 - 15 = ?', type: 'number', correctAnswer: '27', explanation: '42 - 15 = 27.' },
        { id: `A-4-7`, question: '53 - 27 = ?', type: 'number', correctAnswer: '26', explanation: '53 - 27 = 26.' },
        { id: `A-4-8`, question: '61 - 34 = ?', type: 'number', correctAnswer: '27', explanation: '61 - 34 = 27.' },
        { id: `A-4-9`, question: '75 - 48 = ?', type: 'number', correctAnswer: '27', explanation: '75 - 48 = 27.' },
        { id: `A-4-10`, question: '80 - 36 = ?', type: 'number', correctAnswer: '44', explanation: '80 - 36 = 44.' },
      ];

    case 5:
    default:
      return [
        {
          id: `A-5-1`,
          question: '47 + 38 = ?',
          subtitle: 'Penguasaan Penuh Operasi Mendatar Level A',
          type: 'number',
          correctAnswer: '85',
          explanation: '47 + 38 = 85.',
          workedExample: 'Model StepUp Math A: Penjumlahan mental 2 digit cepat.',
          stepByStepGuide: [
            'Langkah 1: 47 + 30 = 77.',
            'Langkah 2: 77 + 8 = 85.',
          ],
        },
        { id: `A-5-2`, question: '58 + 26 = ?', type: 'number', correctAnswer: '84', explanation: '58 + 26 = 84.' },
        { id: `A-5-3`, question: '64 - 28 = ?', type: 'number', correctAnswer: '36', explanation: '64 - 28 = 36.' },
        { id: `A-5-4`, question: '71 - 35 = ?', type: 'number', correctAnswer: '36', explanation: '71 - 35 = 36.' },
        { id: `A-5-5`, question: '69 + 25 = ?', type: 'number', correctAnswer: '94', explanation: '69 + 25 = 94.' },
        { id: `A-5-6`, question: '82 - 47 = ?', type: 'number', correctAnswer: '35', explanation: '82 - 47 = 35.' },
        { id: `A-5-7`, question: '56 + 39 = ?', type: 'number', correctAnswer: '95', explanation: '56 + 39 = 95.' },
        { id: `A-5-8`, question: '93 - 58 = ?', type: 'number', correctAnswer: '35', explanation: '93 - 58 = 35.' },
        { id: `A-5-9`, question: '88 + 17 = ?', type: 'number', correctAnswer: '105', explanation: '88 + 17 = 105.' },
        { id: `A-5-10`, question: '100 - 43 = ?', type: 'number', correctAnswer: '57', explanation: '100 - 43 = 57.' },
      ];
  }
};

// ==================================================
// B: PENJUMLAHAN & PENGURANGAN BERSUSUN
// ==================================================
export const getBProblems = (set: number): ProblemItem[] => {
  const safeSet = Math.max(1, Math.min(5, set));

  switch (safeSet) {
    case 1:
      return [
        {
          id: `B-1-1`,
          question: 'Hitung penjumlahan bersusun berikut:\n  37\n  28\n----+',
          subtitle: 'Penjumlahan Bersusun 2 Digit (Menyimpan)',
          type: 'number',
          correctAnswer: '65',
          explanation: '7 + 8 = 15 (tulis 5 simpan 1). 1 + 3 + 2 = 6. Hasil = 65.',
          workedExample: 'Model StepUp Math B: Penjumlahan bersusun dengan teknik menyimpan satuan.',
          stepByStepGuide: [
            'Langkah 1: Jumlahkan satuan: 7 + 8 = 15. Tulis 5 di kolom satuan, simpan 1 di atas puluhan.',
            'Langkah 2: Jumlahkan puluhan: 1 (simpanan) + 3 + 2 = 6.',
            'Langkah 3: Hasil akhirnya adalah 65.',
          ],
        },
        { id: `B-1-2`, question: 'Hitung penjumlahan bersusun:\n  45\n  39\n----+', type: 'number', correctAnswer: '84', explanation: '5+9=14, 1+4+3=8. Hasil = 84.' },
        { id: `B-1-3`, question: 'Hitung penjumlahan bersusun:\n  58\n  27\n----+', type: 'number', correctAnswer: '85', explanation: '8+7=15, 1+5+2=8. Hasil = 85.' },
        { id: `B-1-4`, question: 'Hitung penjumlahan bersusun:\n  64\n  29\n----+', type: 'number', correctAnswer: '93', explanation: '4+9=13, 1+6+2=9. Hasil = 93.' },
        { id: `B-1-5`, question: 'Hitung penjumlahan bersusun:\n  76\n  18\n----+', type: 'number', correctAnswer: '94', explanation: '6+8=14, 1+7+1=9. Hasil = 94.' },
        { id: `B-1-6`, question: 'Hitung penjumlahan bersusun:\n  83\n  49\n----+', type: 'number', correctAnswer: '132', explanation: '3+9=12, 1+8+4=13. Hasil = 132.' },
        { id: `B-1-7`, question: 'Hitung penjumlahan bersusun:\n  94\n  37\n----+', type: 'number', correctAnswer: '131', explanation: '4+7=11, 1+9+3=13. Hasil = 131.' },
        { id: `B-1-8`, question: 'Hitung penjumlahan bersusun:\n  128\n   45\n----+', type: 'number', correctAnswer: '173', explanation: '8+5=13, 1+2+4=7, 1. Hasil = 173.' },
        { id: `B-1-9`, question: 'Hitung penjumlahan bersusun:\n  156\n   67\n----+', type: 'number', correctAnswer: '223', explanation: '6+7=13, 1+5+6=12, 1+1=2. Hasil = 223.' },
        { id: `B-1-10`, question: 'Hitung penjumlahan bersusun:\n  248\n   76\n----+', type: 'number', correctAnswer: '324', explanation: '8+6=14, 1+4+7=12, 1+2=3. Hasil = 324.' },
      ];

    case 2:
      return [
        {
          id: `B-2-1`,
          question: 'Hitung pengurangan bersusun berikut:\n  52\n  27\n---- -',
          subtitle: 'Pengurangan Bersusun 2 Digit (Meminjam)',
          type: 'number',
          correctAnswer: '25',
          explanation: 'Pinjam 1 dari 5 menjadi 12. 12 - 7 = 5. Sisa puluhan 4 - 2 = 2. Hasil = 25.',
          workedExample: 'Model StepUp Math B: Pengurangan bersusun dengan teknik meminjam 1 puluhan.',
          stepByStepGuide: [
            'Langkah 1: Karena 2 < 7, pinjam 1 dari puluhan (5 menjadi 4), satuan menjadi 12.',
            'Langkah 2: Kurangkan satuan: 12 - 7 = 5.',
            'Langkah 3: Kurangkan puluhan: 4 - 2 = 2. Hasil = 25.',
          ],
        },
        { id: `B-2-2`, question: 'Hitung pengurangan bersusun:\n  61\n  38\n---- -', type: 'number', correctAnswer: '23', explanation: '11 - 8 = 3, 5 - 3 = 2. Hasil = 23.' },
        { id: `B-2-3`, question: 'Hitung pengurangan bersusun:\n  70\n  43\n---- -', type: 'number', correctAnswer: '27', explanation: '10 - 3 = 7, 6 - 4 = 2. Hasil = 27.' },
        { id: `B-2-4`, question: 'Hitung pengurangan bersusun:\n  83\n  56\n---- -', type: 'number', correctAnswer: '27', explanation: '13 - 6 = 7, 7 - 5 = 2. Hasil = 27.' },
        { id: `B-2-5`, question: 'Hitung pengurangan bersusun:\n  94\n  67\n---- -', type: 'number', correctAnswer: '27', explanation: '14 - 7 = 7, 8 - 6 = 2. Hasil = 27.' },
        { id: `B-2-6`, question: 'Hitung pengurangan bersusun:\n  125\n   48\n---- -', type: 'number', correctAnswer: '77', explanation: '15 - 8 = 7, 11 - 4 = 7. Hasil = 77.' },
        { id: `B-2-7`, question: 'Hitung pengurangan bersusun:\n  142\n   65\n---- -', type: 'number', correctAnswer: '77', explanation: '12 - 5 = 7, 13 - 6 = 7. Hasil = 77.' },
        { id: `B-2-8`, question: 'Hitung pengurangan bersusun:\n  160\n   84\n---- -', type: 'number', correctAnswer: '76', explanation: '10 - 4 = 6, 15 - 8 = 7. Hasil = 76.' },
        { id: `B-2-9`, question: 'Hitung pengurangan bersusun:\n  173\n   95\n---- -', type: 'number', correctAnswer: '78', explanation: '13 - 5 = 8, 16 - 9 = 7. Hasil = 78.' },
        { id: `B-2-10`, question: 'Hitung pengurangan bersusun:\n  200\n   74\n---- -', type: 'number', correctAnswer: '126', explanation: '200 - 74 = 126.' },
      ];

    case 3:
      return [
        {
          id: `B-3-1`,
          question: 'Hitung penjumlahan bersusun 3 digit:\n  145\n  238\n----+',
          subtitle: 'Penjumlahan Bersusun 3 Digit',
          type: 'number',
          correctAnswer: '383',
          explanation: '5+8=13 (simpan 1), 1+4+3=8, 1+2=3. Hasil = 383.',
          workedExample: 'Model StepUp Math B: Penjumlahan bersusun 3 digit berurutan dari kanan.',
          stepByStepGuide: [
            'Langkah 1: Satuan: 5 + 8 = 13 (tulis 3, simpan 1).',
            'Langkah 2: Puluhan: 1 + 4 + 3 = 8.',
            'Langkah 3: Ratusan: 1 + 2 = 3. Hasil = 383.',
          ],
        },
        { id: `B-3-2`, question: 'Hitung penjumlahan bersusun:\n  267\n  185\n----+', type: 'number', correctAnswer: '452', explanation: '7+5=12, 1+6+8=15, 1+2+1=4. Hasil = 452.' },
        { id: `B-3-3`, question: 'Hitung penjumlahan bersusun:\n  349\n  276\n----+', type: 'number', correctAnswer: '625', explanation: '9+6=15, 1+4+7=12, 1+3+2=6. Hasil = 625.' },
        { id: `B-3-4`, question: 'Hitung penjumlahan bersusun:\n  482\n  359\n----+', type: 'number', correctAnswer: '841', explanation: '2+9=11, 1+8+5=14, 1+4+3=8. Hasil = 841.' },
        { id: `B-3-5`, question: 'Hitung penjumlahan bersusun:\n  564\n  278\n----+', type: 'number', correctAnswer: '842', explanation: '4+8=12, 1+6+7=14, 1+5+2=8. Hasil = 842.' },
        { id: `B-3-6`, question: 'Hitung penjumlahan bersusun:\n  638\n  295\n----+', type: 'number', correctAnswer: '933', explanation: '8+5=13, 1+3+9=13, 1+6+2=9. Hasil = 933.' },
        { id: `B-3-7`, question: 'Hitung penjumlahan bersusun:\n  746\n  187\n----+', type: 'number', correctAnswer: '933', explanation: '6+7=13, 1+4+8=13, 1+7+1=9. Hasil = 933.' },
        { id: `B-3-8`, question: 'Hitung penjumlahan bersusun:\n  829\n  174\n----+', type: 'number', correctAnswer: '1003', explanation: '9+4=13, 1+2+7=10, 1+8+1=10. Hasil = 1003.' },
        { id: `B-3-9`, question: 'Hitung penjumlahan bersusun:\n  915\n  288\n----+', type: 'number', correctAnswer: '1203', explanation: '5+8=13, 1+1+8=10, 1+9+2=12. Hasil = 1203.' },
        { id: `B-3-10`, question: 'Hitung penjumlahan bersusun:\n  1245\n   378\n----+', type: 'number', correctAnswer: '1623', explanation: '1245 + 378 = 1623.' },
      ];

    case 4:
      return [
        {
          id: `B-4-1`,
          question: 'Hitung pengurangan bersusun 3 digit:\n  432\n  158\n---- -',
          subtitle: 'Pengurangan Bersusun 3 Digit (Multi-Pinjam)',
          type: 'number',
          correctAnswer: '274',
          explanation: '12-8=4, 12-5=7, 3-1=2. Hasil = 274.',
          workedExample: 'Model StepUp Math B: Pengurangan bersusun 3 digit dengan peminjaman beruntun.',
          stepByStepGuide: [
            'Langkah 1: Satuan: 12 - 8 = 4 (pinjam dari puluhan 3 menjadi 2).',
            'Langkah 2: Puluhan: 12 - 5 = 7 (pinjam dari ratusan 4 menjadi 3).',
            'Langkah 3: Ratusan: 3 - 1 = 2. Hasil = 274.',
          ],
        },
        { id: `B-4-2`, question: 'Hitung pengurangan bersusun:\n  521\n  274\n---- -', type: 'number', correctAnswer: '247', explanation: '11-4=7, 11-7=4, 4-2=2. Hasil = 247.' },
        { id: `B-4-3`, question: 'Hitung pengurangan bersusun:\n  605\n  348\n---- -', type: 'number', correctAnswer: '257', explanation: '15-8=7, 9-4=5, 5-3=2. Hasil = 257.' },
        { id: `B-4-4`, question: 'Hitung pengurangan bersusun:\n  714\n  469\n---- -', type: 'number', correctAnswer: '245', explanation: '14-9=5, 10-6=4, 6-4=2. Hasil = 245.' },
        { id: `B-4-5`, question: 'Hitung pengurangan bersusun:\n  830\n  547\n---- -', type: 'number', correctAnswer: '283', explanation: '10-7=3, 12-4=8, 7-5=2. Hasil = 283.' },
        { id: `B-4-6`, question: 'Hitung pengurangan bersusun:\n  902\n  635\n---- -', type: 'number', correctAnswer: '267', explanation: '12-5=7, 9-3=6, 8-6=2. Hasil = 267.' },
        { id: `B-4-7`, question: 'Hitung pengurangan bersusun:\n  1000\n   468\n---- -', type: 'number', correctAnswer: '532', explanation: '1000 - 468 = 532.' },
        { id: `B-4-8`, question: 'Hitung pengurangan bersusun:\n  1240\n   675\n---- -', type: 'number', correctAnswer: '565', explanation: '1240 - 675 = 565.' },
        { id: `B-4-9`, question: 'Hitung pengurangan bersusun:\n  1503\n   786\n---- -', type: 'number', correctAnswer: '717', explanation: '1503 - 786 = 717.' },
        { id: `B-4-10`, question: 'Hitung pengurangan bersusun:\n  2000\n   845\n---- -', type: 'number', correctAnswer: '1155', explanation: '2000 - 845 = 1155.' },
      ];

    case 5:
    default:
      return [
        {
          id: `B-5-1`,
          question: 'Hitung operasi bersusun:\n  485\n  376\n----+',
          subtitle: 'Penguasaan Total Operasi Bersusun Level B',
          type: 'number',
          correctAnswer: '861',
          explanation: '5+6=11, 1+8+7=16, 1+4+3=8. Hasil = 861.',
          workedExample: 'Model StepUp Math B: Evaluasi ketepatan algoritma bersusun.',
          stepByStepGuide: [
            'Langkah 1: Satuan: 5 + 6 = 11.',
            'Langkah 2: Puluhan: 1 + 8 + 7 = 16.',
            'Langkah 3: Ratusan: 1 + 4 + 3 = 8. Hasil = 861.',
          ],
        },
        { id: `B-5-2`, question: 'Hitung operasi bersusun:\n  814\n  458\n---- -', type: 'number', correctAnswer: '356', explanation: '814 - 458 = 356.' },
        { id: `B-5-3`, question: 'Hitung operasi bersusun:\n  679\n  284\n----+', type: 'number', correctAnswer: '963', explanation: '679 + 284 = 963.' },
        { id: `B-5-4`, question: 'Hitung operasi bersusun:\n  903\n  547\n---- -', type: 'number', correctAnswer: '356', explanation: '903 - 547 = 356.' },
        { id: `B-5-5`, question: 'Hitung operasi bersusun:\n  758\n  486\n----+', type: 'number', correctAnswer: '1244', explanation: '758 + 486 = 1244.' },
        { id: `B-5-6`, question: 'Hitung operasi bersusun:\n  1420\n   685\n---- -', type: 'number', correctAnswer: '735', explanation: '1420 - 685 = 735.' },
        { id: `B-5-7`, question: 'Hitung operasi bersusun:\n  1856\n   978\n----+', type: 'number', correctAnswer: '2834', explanation: '1856 + 978 = 2834.' },
        { id: `B-5-8`, question: 'Hitung operasi bersusun:\n  3000\n  1465\n---- -', type: 'number', correctAnswer: '1535', explanation: '3000 - 1465 = 1535.' },
        { id: `B-5-9`, question: 'Hitung operasi bersusun:\n  2458\n  1764\n----+', type: 'number', correctAnswer: '4222', explanation: '2458 + 1764 = 4222.' },
        { id: `B-5-10`, question: 'Hitung operasi bersusun:\n  5002\n  2378\n---- -', type: 'number', correctAnswer: '2624', explanation: '5002 - 2378 = 2624.' },
      ];
  }
};
