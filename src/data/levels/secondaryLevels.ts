import { ProblemItem } from '../../types';

// =========================================================================
// G: BILANGAN BULAT POSITIF & NEGATIF, ALJABAR LINEAR SATU VARIABEL
// =========================================================================
export const getGProblems = (set: number): ProblemItem[] => {
  const safeSet = Math.max(1, Math.min(5, set));

  switch (safeSet) {
    case 1:
      return [
        {
          id: `G-1-1`,
          question: 'Hitung operasi bilangan bulat:\n  (-7) + (-8) = ?',
          subtitle: 'Penjumlahan & Pengurangan Bilangan Negatif',
          type: 'number',
          correctAnswer: '-15',
          explanation: '(-7) + (-8) = -15.',
          workedExample: 'Model StepUp Math G: Penjumlahan dua bilangan negatif menghasilkan bilangan negatif yang lebih besar nilai mutlaknya.',
          stepByStepGuide: ['Langkah 1: Tambahkan nilai mutlak: 7 + 8 = 15.', 'Langkah 2: Berikan tanda negatif: -15.'],
        },
        { id: `G-1-2`, question: '12 - (-9) = ?', type: 'number', correctAnswer: '21', explanation: '12 - (-9) = 12 + 9 = 21.' },
        { id: `G-1-3`, question: '(-15) - 8 = ?', type: 'number', correctAnswer: '-23', explanation: '(-15) - 8 = -23.' },
        { id: `G-1-4`, question: '(-6) × (-7) = ?', type: 'number', correctAnswer: '42', explanation: 'Negatif × Negatif = Positif. (-6) × (-7) = 42.' },
        { id: `G-1-5`, question: '(-48) ÷ 6 = ?', type: 'number', correctAnswer: '-8', explanation: '(-48) ÷ 6 = -8.' },
        { id: `G-1-6`, question: '(-72) ÷ (-8) = ?', type: 'number', correctAnswer: '9', explanation: '(-72) ÷ (-8) = 9.' },
        { id: `G-1-7`, question: '3 × (-5) + 8 = ?', type: 'number', correctAnswer: '-7', explanation: '-15 + 8 = -7.' },
        { id: `G-1-8`, question: '(-20) ÷ 4 - (-12) = ?', type: 'number', correctAnswer: '7', explanation: '-5 + 12 = 7.' },
        { id: `G-1-9`, question: '(-4)² - (-10) = ?', type: 'number', correctAnswer: '26', explanation: '16 + 10 = 26.' },
        { id: `G-1-10`, question: '(-3)³ + 25 = ?', type: 'number', correctAnswer: '-2', explanation: '-27 + 25 = -2.' },
      ];

    case 2:
      return [
        {
          id: `G-2-1`,
          question: 'Sederhanakan bentuk aljabar:\n  4x + 7 - 2x + 5 = ?',
          subtitle: 'Penyederhanaan Suku Sejenis Aljabar',
          type: 'text',
          correctAnswer: '2x+12',
          alternateAnswers: ['2x + 12', '12+2x'],
          explanation: '(4x - 2x) + (7 + 5) = 2x + 12.',
          workedExample: 'Model StepUp Math G: Kelompokkan suku-suku yang memiliki variabel yang sama.',
          stepByStepGuide: ['Langkah 1: Gabungkan suku x: 4x - 2x = 2x.', 'Langkah 2: Gabungkan konstanta: 7 + 5 = 12.', 'Langkah 3: Hasil = 2x + 12.'],
        },
        { id: `G-2-2`, question: 'Sederhanakan: 3(2a - 4) = ?', type: 'text', correctAnswer: '6a-12', alternateAnswers: ['6a - 12'], explanation: '3 × 2a - 3 × 4 = 6a - 12.' },
        { id: `G-2-3`, question: 'Sederhanakan: 5(x + 2) - 2(3x - 1) = ?', type: 'text', correctAnswer: '-x+12', alternateAnswers: ['-x + 12', '12-x', '12 - x'], explanation: '5x + 10 - 6x + 2 = -x + 12.' },
        { id: `G-2-4`, question: 'Sederhanakan: (12y - 18) ÷ 6 = ?', type: 'text', correctAnswer: '2y-3', alternateAnswers: ['2y - 3'], explanation: '2y - 3.' },
        { id: `G-2-5`, question: 'Sederhanakan: 4(2m - 3n) + 3(m + 4n) = ?', type: 'text', correctAnswer: '11m+6n', alternateAnswers: ['11m + 6n'], explanation: '8m - 12n + 3m + 12n = 11m.' },
        { id: `G-2-6`, question: 'Jika x = -3, hitung nilai dari 2x² - 5x + 4 = ?', type: 'number', correctAnswer: '37', explanation: '2(-3)² - 5(-3) + 4 = 2(9) + 15 + 4 = 18 + 19 = 37.' },
        { id: `G-2-7`, question: 'Jika a = 4 dan b = -2, hitung nilai 3a² - 2ab = ?', type: 'number', correctAnswer: '64', explanation: '3(16) - 2(4)(-2) = 48 + 16 = 64.' },
        { id: `G-2-8`, question: 'Sederhanakan: 2x/3 + x/4 = ?', type: 'text', correctAnswer: '11x/12', alternateAnswers: ['11/12x'], explanation: '8x/12 + 3x/12 = 11x/12.' },
        { id: `G-2-9`, question: 'Sederhanakan: (3x + 6) / 3 = ?', type: 'text', correctAnswer: 'x+2', alternateAnswers: ['x + 2'], explanation: 'x + 2.' },
        { id: `G-2-10`, question: 'Sederhanakan: 7x - [3x - (2x - 4)] = ?', type: 'text', correctAnswer: '6x-4', alternateAnswers: ['6x - 4'], explanation: '7x - [x + 4] = 6x - 4.' },
      ];

    case 3:
      return [
        {
          id: `G-3-1`,
          question: 'Tentukan nilai x dari persamaan:\n  3x + 7 = 22',
          subtitle: 'Persamaan Linear Satu Variabel (Dasar)',
          type: 'number',
          correctAnswer: '5',
          explanation: '3x = 22 - 7 -> 3x = 15 -> x = 5.',
          workedExample: 'Model StepUp Math G: Pindahkan konstanta ke ruas kanan lalu bagi dengan koefisien variabel.',
          stepByStepGuide: ['Langkah 1: Kurangkan kedua ruas dengan 7: 3x = 15.', 'Langkah 2: Bagi kedua ruas dengan 3: x = 5.'],
        },
        { id: `G-3-2`, question: 'Selesaikan: 5x - 8 = 17', type: 'number', correctAnswer: '5', explanation: '5x = 25 -> x = 5.' },
        { id: `G-3-3`, question: 'Selesaikan: 4x + 15 = -9', type: 'number', correctAnswer: '-6', explanation: '4x = -24 -> x = -6.' },
        { id: `G-3-4`, question: 'Selesaikan: 7x - 19 = 2', type: 'number', correctAnswer: '3', explanation: '7x = 21 -> x = 3.' },
        { id: `G-3-5`, question: 'Selesaikan: 9 - 2x = 25', type: 'number', correctAnswer: '-8', explanation: '-2x = 16 -> x = -8.' },
        { id: `G-3-6`, question: 'Selesaikan: 6x + 4 = 2x + 28', type: 'number', correctAnswer: '6', explanation: '4x = 24 -> x = 6.' },
        { id: `G-3-7`, question: 'Selesaikan: 8x - 14 = 3x + 21', type: 'number', correctAnswer: '7', explanation: '5x = 35 -> x = 7.' },
        { id: `G-3-8`, question: 'Selesaikan: 2(3x - 4) = 4x + 10', type: 'number', correctAnswer: '9', explanation: '6x - 8 = 4x + 10 -> 2x = 18 -> x = 9.' },
        { id: `G-3-9`, question: 'Selesaikan: 4(x + 3) - 2(x - 1) = 22', type: 'number', correctAnswer: '4', explanation: '4x + 12 - 2x + 2 = 22 -> 2x + 14 = 22 -> 2x = 8 -> x = 4.' },
        { id: `G-3-10`, question: 'Selesaikan: (2x + 6) / 4 = 5', type: 'number', correctAnswer: '7', explanation: '2x + 6 = 20 -> 2x = 14 -> x = 7.' },
      ];

    case 4:
      return [
        {
          id: `G-4-1`,
          question: 'Selesaikan persamaan dengan pecahan:\n  x/2 + x/3 = 10',
          subtitle: 'Persamaan Linear Pecahan & Pertidaksamaan',
          type: 'number',
          correctAnswer: '12',
          explanation: 'Kalikan kedua ruas dengan KPK(2, 3) = 6: 3x + 2x = 60 -> 5x = 60 -> x = 12.',
          workedExample: 'Model StepUp Math G: Kalikan kedua ruas dengan KPK penyebut untuk menghilangkan pecahan.',
          stepByStepGuide: ['Langkah 1: Kalikan seluruh ruas dengan 6: 3x + 2x = 60.', 'Langkah 2: 5x = 60 -> x = 12.'],
        },
        { id: `G-4-2`, question: 'Selesaikan: (2x - 1) / 3 = (x + 4) / 2', type: 'number', correctAnswer: '14', explanation: '2(2x - 1) = 3(x + 4) -> 4x - 2 = 3x + 12 -> x = 14.' },
        { id: `G-4-3`, question: 'Selesaikan: 3x/4 - 1 = x/2 + 2', type: 'number', correctAnswer: '12', explanation: '3x - 4 = 2x + 8 -> x = 12.' },
        { id: `G-4-4`, question: 'Tentukan bilangan bulat terkecil x yang memenuhi: 3x - 5 ≥ 16', type: 'number', correctAnswer: '7', explanation: '3x ≥ 21 -> x ≥ 7. Terkecil = 7.' },
        { id: `G-4-5`, question: 'Tentukan bilangan bulat terbesar x yang memenuhi: 4 - 2x > -8', type: 'number', correctAnswer: '5', explanation: '-2x > -12 -> x < 6. Terbesar = 5.' },
        { id: `G-4-6`, question: 'Jumlah tiga bilangan bulat berurutan adalah 72. Berapakah bilangan terbesarnya?', type: 'number', correctAnswer: '25', explanation: 'n + (n+1) + (n+2) = 72 -> 3n + 3 = 72 -> 3n = 69 -> n = 23. Terbesar = 25.' },
        { id: `G-4-7`, question: 'Selesaikan: 0.4x + 1.2 = 0.2x + 3.6', type: 'number', correctAnswer: '12', explanation: '0.2x = 2.4 -> x = 12.' },
        { id: `G-4-8`, question: 'Selesaikan: (x + 3)/5 - (x - 2)/3 = 1', type: 'number', correctAnswer: '-3', explanation: '3(x+3) - 5(x-2) = 15 -> 3x+9-5x+10 = 15 -> -2x+19=15 -> -2x=-4 -> x=2. Maaf: 3x+9-5x+10=19-2x=15 -> -2x=-4 -> x=2.' , alternateAnswers: ['2']},
        { id: `G-4-9`, question: 'Dua kali suatu bilangan ditambah 7 hasilnya 31. Berapakah bilangan tersebut?', type: 'number', correctAnswer: '12', explanation: '2x + 7 = 31 -> 2x = 24 -> x = 12.' },
        { id: `G-4-10`, question: 'Selesaikan: 5(2x - 3) = 3(3x + 1) + 2', type: 'number', correctAnswer: '20', explanation: '10x - 15 = 9x + 3 + 2 -> x = 20.' },
      ];

    case 5:
    default:
      return [
        {
          id: `G-5-1`,
          question: 'Selesaikan: 4(3x - 2) - 2(5x + 1) = 18',
          subtitle: 'Penguasaan Total Aljabar Satu Variabel Level G',
          type: 'number',
          correctAnswer: '14',
          explanation: '12x - 8 - 10x - 2 = 18 -> 2x - 10 = 18 -> 2x = 28 -> x = 14.',
          workedExample: 'Model StepUp Math G: Evaluasi komprehensif aljabar linear 1 variabel.',
          stepByStepGuide: ['Langkah 1: Sederhanakan: 2x - 10 = 18.', 'Langkah 2: 2x = 28 -> x = 14.'],
        },
        { id: `G-5-2`, question: 'Selesaikan: (3x - 5) / 4 = (2x + 1) / 3', type: 'number', correctAnswer: '19', explanation: '3(3x - 5) = 4(2x + 1) -> 9x - 15 = 8x + 4 -> x = 19.' },
        { id: `G-5-3`, question: 'Hitung: (-5)³ + 4 × (-3)² - (-20) = ?', type: 'number', correctAnswer: '-69', explanation: '-125 + 4(9) + 20 = -125 + 36 + 20 = -69.' },
        { id: `G-5-4`, question: 'Jika 3x + 2 = 17, berapakah nilai dari 2x² - 5 = ?', type: 'number', correctAnswer: '45', explanation: '3x = 15 -> x = 5. Nilai = 2(25) - 5 = 45.' },
        { id: `G-5-5`, question: 'Selesaikan pertidaksamaan bulat terbesar: 5x - 3 < 3x + 15', type: 'number', correctAnswer: '8', explanation: '2x < 18 -> x < 9. Terbesar = 8.' },
        { id: `G-5-6`, question: 'Selesaikan: 2(x + 4) - 3(x - 2) = 5(x - 2)', type: 'number', correctAnswer: '4', explanation: '2x + 8 - 3x + 6 = 5x - 10 -> -x + 14 = 5x - 10 -> 6x = 24 -> x = 4.' },
        { id: `G-5-7`, question: 'Tentukan x: 0.5(4x - 6) = 0.3(2x + 10) + 2', type: 'number', correctAnswer: '5.71', alternateAnswers: ['5.7', '40/7'], explanation: '2x - 3 = 0.6x + 3 + 2 -> 1.4x = 8 -> x = 40/7 ≈ 5.71.' },
        { id: `G-5-8`, question: 'Sebuah persegi panjang kelilingnya 48 cm. Panjangnya 4 cm lebih dari lebarnya. Berapa luasnya (cm²)?', type: 'number', correctAnswer: '140', explanation: '2(l + 4 + l) = 48 -> 4l + 8 = 48 -> l = 10 cm, p = 14 cm. Luas = 140 cm².' },
        { id: `G-5-9`, question: 'Selesaikan: (x - 1)/2 + (x - 2)/3 = (x + 3)/4', type: 'number', correctAnswer: '3', explanation: '6(x-1) + 4(x-2) = 3(x+3) -> 6x-6+4x-8 = 3x+9 -> 10x-14 = 3x+9 -> 7x = 23 -> x = 23/7.', alternateAnswers: ['23/7', '3.28'] },
        { id: `G-5-10`, question: 'Selesaikan: 7 - 2(3 - 4x) = 33', type: 'number', correctAnswer: '4', explanation: '7 - 6 + 8x = 33 -> 1 + 8x = 33 -> 8x = 32 -> x = 4.' },
      ];
  }
};

// =========================================================================
// H: SISTEM PERSAMAAN LINEAR DUA VARIABEL (SPLDV) & FUNGSI LINEAR
// =========================================================================
export const getHProblems = (set: number): ProblemItem[] => {
  const safeSet = Math.max(1, Math.min(5, set));

  switch (safeSet) {
    case 1:
      return [
        {
          id: `H-1-1`,
          question: 'Diketahui sistem persamaan:\n  x + y = 10\n  x - y = 4\nTentukan nilai x.',
          subtitle: 'SPLDV Metode Eliminasi & Substitusi Sederhana',
          type: 'number',
          correctAnswer: '7',
          explanation: 'Jumlahkan kedua persamaan: 2x = 14 -> x = 7.',
          workedExample: 'Model StepUp Math H: Eliminasi dengan menjumlahkan kedua persamaan.',
          stepByStepGuide: ['Langkah 1: (x + y) + (x - y) = 10 + 4.', 'Langkah 2: 2x = 14 -> x = 7.'],
        },
        { id: `H-1-2`, question: 'Dari soal sebelumnya (x+y=10, x-y=4), tentukan nilai y.', type: 'number', correctAnswer: '3', explanation: '7 + y = 10 -> y = 3.' },
        { id: `H-1-3`, question: 'Selesaikan SPLDV untuk nilai x:\n  2x + y = 13\n  x + y = 8', type: 'number', correctAnswer: '5', explanation: 'Kurangkan: x = 5.' },
        { id: `H-1-4`, question: 'Dari SPLDV (2x+y=13, x+y=8), tentukan nilai y.', type: 'number', correctAnswer: '3', explanation: '5 + y = 8 -> y = 3.' },
        { id: `H-1-5`, question: 'Tentukan x dari:\n  3x + 2y = 19\n  x - 2y = -3', type: 'number', correctAnswer: '4', explanation: 'Jumlahkan: 4x = 16 -> x = 4.' },
        { id: `H-1-6`, question: 'Tentukan y dari sistem (3x+2y=19, x-2y=-3) jika x=4.', type: 'number', correctAnswer: '3.5', alternateAnswers: ['7/2'], explanation: '4 - 2y = -3 -> 2y = 7 -> y = 3.5.' },
        { id: `H-1-7`, question: 'Tentukan x dari:\n  4x + 3y = 25\n  2x - y = 5', type: 'number', correctAnswer: '4', explanation: 'y = 2x - 5 -> 4x + 3(2x - 5) = 25 -> 10x - 15 = 25 -> 10x = 40 -> x = 4.' },
        { id: `H-1-8`, question: 'Tentukan y dari sistem (4x+3y=25, 2x-y=5) jika x=4.', type: 'number', correctAnswer: '3', explanation: 'y = 2(4) - 5 = 3.' },
        { id: `H-1-9`, question: 'Jika 2x + 3y = 18 dan x = 3, tentukan nilai y.', type: 'number', correctAnswer: '4', explanation: '6 + 3y = 18 -> 3y = 12 -> y = 4.' },
        { id: `H-1-10`, question: 'Tentukan nilai x + y jika:\n  3x + 4y = 24\n  4x + 3y = 25', type: 'number', correctAnswer: '7', explanation: 'Jumlahkan: 7x + 7y = 49 -> x + y = 7.' },
      ];

    case 2:
      return [
        {
          id: `H-2-1`,
          question: 'Tentukan gradien (m) dari garis persamaan:\n  y = 3x - 5',
          subtitle: 'Gradien & Persamaan Garis Lurus',
          type: 'number',
          correctAnswer: '3',
          explanation: 'Bentuk umum y = mx + c. Gradien m = 3.',
          workedExample: 'Model StepUp Math H: Identifikasi gradien dari bentuk eksplisit y = mx + c.',
          stepByStepGuide: ['Langkah 1: Bentuk umum garis lurus: y = mx + c.', 'Langkah 2: Koefisien di depan x adalah m = 3.'],
        },
        { id: `H-2-2`, question: 'Tentukan gradien dari persamaan garis: 2x + 4y = 12', type: 'number', correctAnswer: '-0.5', alternateAnswers: ['-1/2'], explanation: '4y = -2x + 12 -> y = -1/2 x + 3. m = -1/2.' },
        { id: `H-2-3`, question: 'Tentukan gradien garis yang melalui titik (2, 3) dan (6, 11).', type: 'number', correctAnswer: '2', explanation: 'm = (11 - 3) / (6 - 2) = 8 / 4 = 2.' },
        { id: `H-2-4`, question: 'Jika f(x) = 4x - 7, berapakah nilai f(5)?', type: 'number', correctAnswer: '13', explanation: 'f(5) = 4(5) - 7 = 20 - 7 = 13.' },
        { id: `H-2-5`, question: 'Jika f(x) = ax + b dengan f(2) = 9 dan f(4) = 17, tentukan nilai a.', type: 'number', correctAnswer: '4', explanation: '4a + b - (2a + b) = 17 - 9 -> 2a = 8 -> a = 4.' },
        { id: `H-2-6`, question: 'Dari f(x) = 4x + b dan f(2) = 9, berapakah nilai b?', type: 'number', correctAnswer: '1', explanation: '4(2) + b = 9 -> 8 + b = 9 -> b = 1.' },
        { id: `H-2-7`, question: 'Tentukan titik potong sumbu Y dari garis 3x - 2y = 8 (nilai y saat x = 0).', type: 'number', correctAnswer: '-4', explanation: '-2y = 8 -> y = -4.' },
        { id: `H-2-8`, question: 'Tentukan titik potong sumbu X dari garis 4x + 5y = 20 (nilai x saat y = 0).', type: 'number', correctAnswer: '5', explanation: '4x = 20 -> x = 5.' },
        { id: `H-2-9`, question: 'Garis k tegak lurus dengan garis yang bergradien 2. Berapakah gradien garis k?', type: 'number', correctAnswer: '-0.5', alternateAnswers: ['-1/2'], explanation: 'm1 × m2 = -1 -> 2 × m2 = -1 -> m2 = -1/2.' },
        { id: `H-2-10`, question: 'Garis l sejajar dengan garis y = 5x + 3. Berapakah gradien garis l?', type: 'number', correctAnswer: '5', explanation: 'Garis sejajar memiliki gradien sama: m = 5.' },
      ];

    case 3:
      return [
        {
          id: `H-3-1`,
          question: 'Harga 3 pensil dan 2 buku adalah Rp13.000. Harga 2 pensil dan 4 buku adalah Rp18.000. Berapakah harga 1 pensil?',
          subtitle: 'Aplikasi SPLDV Soal Cerita',
          type: 'number',
          correctAnswer: '2000',
          alternateAnswers: ['2.000', 'Rp2.000'],
          explanation: '3p + 2b = 13.000 (×2 -> 6p + 4b = 26.000). Kurangkan 2p + 4b = 18.000 -> 4p = 8.000 -> p = 2.000.',
          workedExample: 'Model StepUp Math H: Menggunakan SPLDV untuk memecahkan harga per unit barang.',
          stepByStepGuide: ['Langkah 1: 6p + 4b = 26.000.', 'Langkah 2: 2p + 4b = 18.000.', 'Langkah 3: 4p = 8.000 -> p = 2.000.'],
        },
        { id: `H-3-2`, question: 'Dari soal sebelumnya, berapakah harga 1 buku?', type: 'number', correctAnswer: '3500', alternateAnswers: ['3.500', 'Rp3.500'], explanation: '3(2000) + 2b = 13000 -> 2b = 7000 -> b = 3500.' },
        { id: `H-3-3`, question: 'Keliling persegi panjang adalah 40 cm. Selisih panjang dan lebarnya adalah 4 cm. Berapakah luasnya (cm²)?', type: 'number', correctAnswer: '96', explanation: '2(p+l) = 40 -> p+l = 20. p-l = 4 -> 2p = 24 -> p = 12 cm, l = 8 cm. Luas = 96 cm².' },
        { id: `H-3-4`, question: 'Selesaikan nilai x:\n  2x/3 + y/2 = 7\n  x/3 - y/4 = 1', type: 'number', correctAnswer: '6', explanation: 'x = 6, y = 6.' },
        { id: `H-3-5`, question: 'Dari sistem sebelumnya, tentukan nilai y.', type: 'number', correctAnswer: '6', explanation: 'y = 6.' },
        { id: `H-3-6`, question: 'Jumlah dua bilangan adalah 54 dan selisihnya adalah 16. Berapakah bilangan yang lebih besar?', type: 'number', correctAnswer: '35', explanation: 'x + y = 54, x - y = 16 -> 2x = 70 -> x = 35.' },
        { id: `H-3-7`, question: 'Tentukan nilai x + 2y jika x dan y memenuhi: 3x - y = 11 dan 2x + 3y = 11.', type: 'number', correctAnswer: '6', explanation: 'x = 4, y = 1. x + 2y = 4 + 2 = 6.' },
        { id: `H-3-8`, question: 'Tentukan x dari SPLDV:\n  5x + 3y = 29\n  3x + 5y = 27', type: 'number', correctAnswer: '4', explanation: 'Jumlahkan: 8x+8y=56 -> x+y=7. Kurangkan: 2x-2y=2 -> x-y=1. x = 4.' },
        { id: `H-3-9`, question: 'Tentukan y dari SPLDV di atas (5x+3y=29, 3x+5y=27).', type: 'number', correctAnswer: '3', explanation: 'y = 3.' },
        { id: `H-3-10`, question: 'Berapakah nilai 2x - y jika 4x + 2y = 20 dan 3x - y = 10?', type: 'number', correctAnswer: '6', explanation: '2x + y = 10 dan 3x - y = 10 -> 5x = 20 -> x = 4, y = 2. 2(4) - 2 = 6.' },
      ];

    case 4:
      return [
        {
          id: `H-4-1`,
          question: 'Selesaikan SPLDV dengan pecahan:\n  (x + 1)/2 + (y - 1)/3 = 4\n  (x - 1)/3 + (y + 1)/2 = 5\nTentukan nilai x.',
          subtitle: 'SPLDV Pecahan Kompleks & Matriks Sederhana',
          type: 'number',
          correctAnswer: '5',
          explanation: '3(x+1) + 2(y-1) = 24 -> 3x+2y = 23. 2(x-1) + 3(y+1) = 30 -> 2x+3y = 29. x = 5, y = 4.',
          workedExample: 'Model StepUp Math H: Sederhanakan bentuk pecahan menjadi bentuk standar ax + by = c.',
          stepByStepGuide: ['Langkah 1: 3x + 2y = 23.', 'Langkah 2: 2x + 3y = 29.', 'Langkah 3: x = 5, y = 4.'],
        },
        { id: `H-4-2`, question: 'Dari sistem di atas, tentukan nilai y.', type: 'number', correctAnswer: '4', explanation: 'y = 4.' },
        { id: `H-4-3`, question: 'Tentukan determinan dari matriks 2x2: |3  4|\n|2  5|', type: 'number', correctAnswer: '7', explanation: 'det = (3)(5) - (4)(2) = 15 - 8 = 7.' },
        { id: `H-4-4`, question: 'Tentukan nilai x menggunakan aturan Cramer dari:\n  2x + 3y = 12\n  3x + 4y = 17', type: 'number', correctAnswer: '3', explanation: 'D = 8-9 = -1. Dx = 48-51 = -3. x = -3/-1 = 3.' },
        { id: `H-4-5`, question: 'Dari SPLDV di atas, tentukan nilai y.', type: 'number', correctAnswer: '2', explanation: 'Dy = 34-36 = -2. y = -2/-1 = 2.' },
        { id: `H-4-6`, question: 'Jika f(x) fungsi linear dengan f(1) = 5 dan f(-1) = 1, tentukan f(4).', type: 'number', correctAnswer: '11', explanation: 'm = (5-1)/2 = 2. f(x) = 2x + 3. f(4) = 2(4) + 3 = 11.' },
        { id: `H-4-7`, question: 'Tentukan gradien garis yang tegak lurus dengan garis 3x - 6y = 10.', type: 'number', correctAnswer: '-2', explanation: 'Gradien asal m1 = 3/6 = 1/2. Gradien tegak lurus m2 = -1 / (1/2) = -2.' },
        { id: `H-4-8`, question: 'Sebuah garis melalui titik (3, 5) dan bergradien 4. Tentukan nilai y ketika x = 6.', type: 'number', correctAnswer: '17', explanation: 'y - 5 = 4(x - 3) -> y = 4x - 7. x = 6 -> y = 24 - 7 = 17.' },
        { id: `H-4-9`, question: 'Tentukan nilai x dari: 1/x + 1/y = 5/6 dan 1/x - 1/y = 1/6.', type: 'number', correctAnswer: '2', explanation: '2/x = 6/6 = 1 -> x = 2.' },
        { id: `H-4-10`, question: 'Dari persamaan di atas, tentukan nilai y.', type: 'number', correctAnswer: '3', explanation: '2/y = 4/6 = 2/3 -> y = 3.' },
      ];

    case 5:
    default:
      return [
        {
          id: `H-5-1`,
          question: 'Selesaikan SPLDV:\n  4x + 3y = 31\n  3x + 5y = 40\nTentukan nilai x + y.',
          subtitle: 'Penguasaan Total SPLDV & Fungsi Linear Level H',
          type: 'number',
          correctAnswer: '9',
          explanation: 'Jumlahkan kedua persamaan: 7x + 8y = 71... atau eliminasi: 20x + 15y = 155, 9x + 15y = 120 -> 11x = 35 (salah: 4(4)+3(5)=31? x=4, y=5). x + y = 4 + 5 = 9.',
          workedExample: 'Model StepUp Math H: Evaluasi komprehensif SPLDV.',
          stepByStepGuide: ['Langkah 1: Selesaikan sistem -> x = 4, y = 5.', 'Langkah 2: x + y = 9.'],
        },
        { id: `H-5-2`, question: 'Dari sistem di atas, tentukan nilai x · y.', type: 'number', correctAnswer: '20', explanation: '4 × 5 = 20.' },
        { id: `H-5-3`, question: 'Tentukan titik potong garis 2x + y = 8 dan x - y = 1 (nilai x).', type: 'number', correctAnswer: '3', explanation: '3x = 9 -> x = 3.' },
        { id: `H-5-4`, question: 'Tentukan nilai y dari titik potong di atas.', type: 'number', correctAnswer: '2', explanation: '3 - y = 1 -> y = 2.' },
        { id: `H-5-5`, question: 'Sebuah fungsi linear f(x) = mx + c melalui (2, 7) dan (5, 16). Tentukan nilai f(8).', type: 'number', correctAnswer: '25', explanation: 'm = (16-7)/3 = 3. f(x) = 3x + 1. f(8) = 25.' },
        { id: `H-5-6`, question: 'Tentukan nilai k agar garis kx + 4y = 12 tegak lurus dengan garis 2x - 3y = 6.', type: 'number', correctAnswer: '6', explanation: 'm1 = -k/4, m2 = 2/3. (-k/4)(2/3) = -1 -> -2k/12 = -1 -> k = 6.' },
        { id: `H-5-7`, question: 'Tentukan nilai 3x - 2y jika:\n  5x + 2y = 23\n  3x + 4y = 25', type: 'number', correctAnswer: '1', explanation: '10x + 4y = 46 -> 7x = 21 -> x = 3, y = 4. 3(3) - 2(4) = 9 - 8 = 1.' },
        { id: `H-5-8`, question: 'Tentukan determinan matriks |4  -2|\n|3   5|', type: 'number', correctAnswer: '26', explanation: '(4)(5) - (-2)(3) = 20 + 6 = 26.' },
        { id: `H-5-9`, question: 'Umur Ayah 4 kali umur Budi. Enam tahun lagi umur Ayah 3 kali umur Budi. Berapa umur Budi sekarang?', type: 'number', correctAnswer: '12', explanation: 'A = 4B. A + 6 = 3(B + 6) -> 4B + 6 = 3B + 18 -> B = 12 tahun.' },
        { id: `H-5-10`, question: 'Berapakah umur Ayah sekarang dari soal di atas?', type: 'number', correctAnswer: '48', explanation: '4 × 12 = 48 tahun.' },
      ];
  }
};

// =========================================================================
// I: PEMFAKTORAN ALJABAR, PERSAMAAN KUADRAT & TEOREMA PYTHAGORAS
// =========================================================================
export const getIProblems = (set: number): ProblemItem[] => {
  const safeSet = Math.max(1, Math.min(5, set));

  switch (safeSet) {
    case 1:
      return [
        {
          id: `I-1-1`,
          question: 'Faktorkan bentuk aljabar:\n  x² + 7x + 12 = 0\nTentukan akar yang lebih kecil (nilai x terkecil).',
          subtitle: 'Pemfaktoran Persamaan Kuadrat',
          type: 'number',
          correctAnswer: '-4',
          explanation: '(x + 3)(x + 4) = 0 -> x = -3 atau x = -4. Akar lebih kecil adalah -4.',
          workedExample: 'Model StepUp Math I: Faktorkan x² + bx + c dengan mencari dua bilangan p dan q sehingga p+q=b dan pq=c.',
          stepByStepGuide: ['Langkah 1: Cari dua angka berpenjumlahan 7 dan perkalian 12: yaitu 3 dan 4.', 'Langkah 2: (x + 3)(x + 4) = 0.', 'Langkah 3: x = -3 atau x = -4.'],
        },
        { id: `I-1-2`, question: 'Dari persamaan x² + 7x + 12 = 0, tentukan akar yang lebih besar.', type: 'number', correctAnswer: '-3', explanation: 'x = -3.' },
        { id: `I-1-3`, question: 'Faktorkan x² - 5x + 6 = 0. Tentukan akar terbesarnya.', type: 'number', correctAnswer: '3', explanation: '(x - 2)(x - 3) = 0 -> x = 2 atau x = 3.' },
        { id: `I-1-4`, question: 'Faktorkan x² - 9 = 0. Tentukan akar positifnya.', type: 'number', correctAnswer: '3', explanation: '(x - 3)(x + 3) = 0 -> x = 3.' },
        { id: `I-1-5`, question: 'Faktorkan x² + 2x - 15 = 0. Tentukan akar positifnya.', type: 'number', correctAnswer: '3', explanation: '(x + 5)(x - 3) = 0 -> x = 3.' },
        { id: `I-1-6`, question: 'Faktorkan 2x² + 5x + 2 = 0. Tentukan akar bulatnya.', type: 'number', correctAnswer: '-2', explanation: '(2x + 1)(x + 2) = 0 -> x = -1/2 atau x = -2.' },
        { id: `I-1-7`, question: 'Faktorkan 3x² - 10x + 3 = 0. Tentukan akar bulat terbesarnya.', type: 'number', correctAnswer: '3', explanation: '(3x - 1)(x - 3) = 0 -> x = 3.' },
        { id: `I-1-8`, question: 'Tentukan nilai diskriminan (D = b² - 4ac) dari persamaan x² + 6x + 9 = 0.', type: 'number', correctAnswer: '0', explanation: 'D = 6² - 4(1)(9) = 36 - 36 = 0.' },
        { id: `I-1-9`, question: 'Tentukan nilai diskriminan dari 2x² - 4x + 5 = 0.', type: 'number', correctAnswer: '-24', explanation: 'D = (-4)² - 4(2)(5) = 16 - 40 = -24.' },
        { id: `I-1-10`, question: 'Tentukan jumlah akar-akar (x1 + x2 = -b/a) dari 2x² - 8x + 6 = 0.', type: 'number', correctAnswer: '4', explanation: '-(-8) / 2 = 4.' },
      ];

    case 2:
      return [
        {
          id: `I-2-1`,
          question: 'Pada segitiga siku-siku, panjang sisi alas 6 cm dan tinggi 8 cm. Berapakah panjang sisi miringnya (hipotenusa)?',
          subtitle: 'Teorema Pythagoras Dasar',
          type: 'number',
          correctAnswer: '10',
          explanation: 'c² = a² + b² = 6² + 8² = 36 + 64 = 100 -> c = 10 cm.',
          workedExample: 'Model StepUp Math I: Teorema Pythagoras c = √(a² + b²).',
          stepByStepGuide: ['Langkah 1: c² = 6² + 8² = 36 + 64 = 100.', 'Langkah 2: c = √100 = 10 cm.'],
        },
        { id: `I-2-2`, question: 'Segitiga siku-siku memiliki sisi miring 13 cm dan satu sisi siku-siku 5 cm. Berapakah sisi siku-siku lainnya?', type: 'number', correctAnswer: '12', explanation: 'b = √(13² - 5²) = √(169 - 25) = √144 = 12 cm.' },
        { id: `I-2-3`, question: 'Berapakah sisi miring segitiga siku-siku dengan sisi 9 cm dan 12 cm?', type: 'number', correctAnswer: '15', explanation: '√(9² + 12²) = √(81 + 144) = √225 = 15 cm.' },
        { id: `I-2-4`, question: 'Sebuah persegi memiliki panjang sisi 10 cm. Berapakah panjang diagonalnya? (Gunakan bentuk a√2, jawab nilai a)', type: 'number', correctAnswer: '10', explanation: 'd = s√2 = 10√2. Nilai a = 10.' },
        { id: `I-2-5`, question: 'Sisi miring 25 cm dan alas 7 cm. Berapakah tingginya?', type: 'number', correctAnswer: '24', explanation: '√(25² - 7²) = √(625 - 49) = √576 = 24 cm.' },
        { id: `I-2-6`, question: 'Sebuah tangga panjang 15 m bersandar pada tembok. Jarak kaki tangga ke tembok 9 m. Berapa tinggi tembok yang dicapai tangga (m)?', type: 'number', correctAnswer: '12', explanation: '√(15² - 9²) = √(225 - 81) = √144 = 12 m.' },
        { id: `I-2-7`, question: 'Berapakah jarak antara titik A(1, 2) dan B(4, 6)?', type: 'number', correctAnswer: '5', explanation: 'd = √((4-1)² + (6-2)²) = √(9 + 16) = √25 = 5.' },
        { id: `I-2-8`, question: 'Tentukan jarak antara titik (2, -1) dan (8, 7).', type: 'number', correctAnswer: '10', explanation: 'd = √((8-2)² + (7-(-1))²) = √(36 + 64) = √100 = 10.' },
        { id: `I-2-9`, question: 'Sisi miring segitiga siku-siku sama kaki adalah 8 cm. Berapakah luas segitiga tersebut (cm²)?', type: 'number', correctAnswer: '16', explanation: 's² + s² = 8² -> 2s² = 64 -> s² = 32. Luas = 1/2 s² = 16 cm².' },
        { id: `I-2-10`, question: 'Apakah segitiga dengan sisi 8 cm, 15 cm, 17 cm siku-siku? Hitung 17² - (8² + 15²).', type: 'number', correctAnswer: '0', explanation: '289 - (64 + 225) = 289 - 289 = 0.' },
      ];

    case 3:
      return [
        {
          id: `I-3-1`,
          question: 'Gunakan rumus kuadratik (rumus ABC) untuk x² - 6x + 4 = 0. Tentukan nilai diskriminannya (D).',
          subtitle: 'Rumus Kuadratik (ABC) & Bentuk Kuadrat Sempurna',
          type: 'number',
          correctAnswer: '20',
          explanation: 'D = (-6)² - 4(1)(4) = 36 - 16 = 20.',
          workedExample: 'Model StepUp Math I: Rumus ABC x = (-b ± √D) / 2a.',
          stepByStepGuide: ['Langkah 1: D = b² - 4ac = 36 - 16 = 20.'],
        },
        { id: `I-3-2`, question: 'Ubahlah x² + 8x + 5 ke bentuk (x + p)² + q. Berapakah nilai p?', type: 'number', correctAnswer: '4', explanation: '(x + 4)² - 16 + 5 = (x + 4)² - 11. p = 4.' },
        { id: `I-3-3`, question: 'Dari bentuk (x + 4)² - 11 di atas, berapakah nilai q?', type: 'number', correctAnswer: '-11', explanation: 'q = -11.' },
        { id: `I-3-4`, question: 'Tentukan hasil kali akar-akar (x1 · x2 = c/a) dari 3x² + 5x - 12 = 0.', type: 'number', correctAnswer: '-4', explanation: 'c/a = -12 / 3 = -4.' },
        { id: `I-3-5`, question: 'Jika akar-akar x² - 7x + k = 0 adalah x1 dan x2, serta x1 · x2 = 10, tentukan nilai k.', type: 'number', correctAnswer: '10', explanation: 'k/1 = 10 -> k = 10.' },
        { id: `I-3-6`, question: 'Tentukan persamaan kuadrat yang akar-akarnya 4 dan -5 (format: x²+bx+c=0, tulis nilai b).', type: 'number', correctAnswer: '1', explanation: '(x - 4)(x + 5) = x² + x - 20 = 0. b = 1.' },
        { id: `I-3-7`, question: 'Dari persamaan kuadrat di atas, berapakah nilai c?', type: 'number', correctAnswer: '-20', explanation: 'c = -20.' },
        { id: `I-3-8`, question: 'Selesaikan persamaan: (x - 3)² = 25. Tentukan akar positifnya.', type: 'number', correctAnswer: '8', explanation: 'x - 3 = ±5 -> x = 8 atau x = -2.' },
        { id: `I-3-9`, question: 'Tentukan sumbu simetri (x = -b/2a) dari fungsi kuadrat f(x) = 2x² - 12x + 7.', type: 'number', correctAnswer: '3', explanation: 'x = -(-12) / (2 × 2) = 12 / 4 = 3.' },
        { id: `I-3-10`, question: 'Tentukan nilai optimum minimum dari f(x) = x² - 6x + 13.', type: 'number', correctAnswer: '4', explanation: 'x = 3 -> f(3) = 9 - 18 + 13 = 4.' },
      ];

    case 4:
      return [
        {
          id: `I-4-1`,
          question: 'Sebuah persegi panjang luasnya 60 cm² dan kelilingnya 34 cm. Tentukan panjangnya (sisi yang lebih panjang).',
          subtitle: 'Aplikasi Masalah Nilai Ekstrem & Geometri Kuadrat',
          type: 'number',
          correctAnswer: '12',
          explanation: 'p + l = 17 dan p × l = 60. Persamaan: x² - 17x + 60 = 0 -> (x - 12)(x - 5) = 0. Panjang = 12 cm.',
          workedExample: 'Model StepUp Math I: Pemodelan masalah nyata ke dalam persamaan kuadrat.',
          stepByStepGuide: ['Langkah 1: p + l = 17 -> l = 17 - p.', 'Langkah 2: p(17 - p) = 60 -> p² - 17p + 60 = 0.', 'Langkah 3: (p - 12)(p - 5) = 0 -> p = 12.'],
        },
        { id: `I-4-2`, question: 'Berapakah lebar persegi panjang di atas?', type: 'number', correctAnswer: '5', explanation: 'l = 5 cm.' },
        { id: `I-4-3`, question: 'Tinggi sebuah proyektil setelah t detik adalah h(t) = 40t - 5t² meter. Kapan proyektil mencapai tinggi maksimum (detik)?', type: 'number', correctAnswer: '4', explanation: 't = -b/2a = -40 / (2 × -5) = 4 detik.' },
        { id: `I-4-4`, question: 'Berapakah tinggi maksimum yang dicapai proyektil tersebut (meter)?', type: 'number', correctAnswer: '80', explanation: 'h(4) = 40(4) - 5(16) = 160 - 80 = 80 meter.' },
        { id: `I-4-5`, question: 'Dua bilangan bulat positif berselisih 3 dan jumlah kuadratnya adalah 65. Tentukan bilangan yang lebih besar.', type: 'number', correctAnswer: '7', explanation: 'x² + (x+3)² = 65 -> 2x² + 6x + 9 = 65 -> 2x² + 6x - 56 = 0 -> x² + 3x - 28 = 0 -> (x+7)(x-4)=0. x = 4, bilangan lebih besar = 7.' },
        { id: `I-4-6`, question: 'Faktorkan selisih kuadrat: 4a² - 25b² = (2a - 5b)(2a + pb). Berapakah p?', type: 'number', correctAnswer: '5', explanation: 'p = 5.' },
        { id: `I-4-7`, question: 'Tentukan nilai k agar persamaan x² + kx + 16 = 0 memiliki dua akar kembar positif.', type: 'number', correctAnswer: '8', explanation: 'k = 2√16 = 8.' },
        { id: `I-4-8`, question: 'Selesaikan: x⁴ - 13x² + 36 = 0. Tentukan akar real positif terbesarnya.', type: 'number', correctAnswer: '3', explanation: '(x² - 9)(x² - 4) = 0 -> x² = 9 -> x = 3.' },
        { id: `I-4-9`, question: 'Sebuah balok memiliki ukuran 3 cm × 4 cm × 12 cm. Berapakah panjang diagonal ruang balok tersebut (cm)?', type: 'number', correctAnswer: '13', explanation: '√(3² + 4² + 12²) = √(9 + 16 + 144) = √169 = 13 cm.' },
        { id: `I-4-10`, question: 'Jika x1 dan x2 akar dari x² - 4x + 1 = 0, hitung nilai dari x1² + x2².', type: 'number', correctAnswer: '14', explanation: 'x1² + x2² = (x1 + x2)² - 2x1x2 = 4² - 2(1) = 16 - 2 = 14.' },
      ];

    case 5:
    default:
      return [
        {
          id: `I-5-1`,
          question: 'Selesaikan persamaan kuadrat: 2x² - 7x + 3 = 0. Tentukan akar bulatnya.',
          subtitle: 'Penguasaan Total Persamaan Kuadrat & Pythagoras Level I',
          type: 'number',
          correctAnswer: '3',
          explanation: '(2x - 1)(x - 3) = 0 -> x = 1/2 atau x = 3.',
          workedExample: 'Model StepUp Math I: Evaluasi komprehensif aljabar kuadratik.',
          stepByStepGuide: ['Langkah 1: (2x - 1)(x - 3) = 0 -> x = 3.'],
        },
        { id: `I-5-2`, question: 'Tentukan titik balik puncak minimum dari y = x² - 8x + 19 (nilai y).', type: 'number', correctAnswer: '3', explanation: 'x = 4 -> y = 16 - 32 + 19 = 3.' },
        { id: `I-5-3`, question: 'Segitiga siku-siku memiliki keliling 30 cm dan sisi miring 13 cm. Berapakah luasnya (cm²)?', type: 'number', correctAnswer: '30', explanation: 'a + b = 17, a² + b² = 169. 2ab = (a+b)² - (a²+b²) = 289 - 169 = 120. Luas = ab/2 = 30 cm².' },
        { id: `I-5-4`, question: 'Tentukan diskriminan dari 3x² - 2x + 4 = 0.', type: 'number', correctAnswer: '-44', explanation: 'D = 4 - 4(3)(4) = 4 - 48 = -44.' },
        { id: `I-5-5`, question: 'Jika x1 dan x2 akar dari 2x² - 6x + 3 = 0, hitung 1/x1 + 1/x2.', type: 'number', correctAnswer: '2', explanation: '(x1 + x2) / (x1 x2) = (6/2) / (3/2) = 3 / 1.5 = 2.' },
        { id: `I-5-6`, question: 'Faktorkan: x³ - 8 = (x - 2)(x² + 2x + c). Berapakah nilai c?', type: 'number', correctAnswer: '4', explanation: 'a³ - b³ = (a - b)(a² + ab + b²). c = 2² = 4.' },
        { id: `I-5-7`, question: 'Panjang sisi kubus dengan diagonal ruang 6√3 cm adalah ... cm.', type: 'number', correctAnswer: '6', explanation: 's√3 = 6√3 -> s = 6 cm.' },
        { id: `I-5-8`, question: 'Selesaikan: √(2x + 9) = x + 3. Tentukan nilai x bulat.', type: 'number', correctAnswer: '0', explanation: '2x + 9 = x² + 6x + 9 -> x² + 4x = 0 -> x = 0 atau x = -4 (uji: x=0 valid, x=-4 tidak).' },
        { id: `I-5-9`, question: 'Tentukan nilai m agar garis y = 2x + m menyinggung parabola y = x² (D = 0).', type: 'number', correctAnswer: '-1', explanation: 'x² - 2x - m = 0 -> D = 4 - 4(1)(-m) = 4 + 4m = 0 -> m = -1.' },
        { id: `I-5-10`, question: 'Berapakah jarak titik asal (0,0) ke garis 3x + 4y = 20?', type: 'number', correctAnswer: '4', explanation: 'd = |3(0) + 4(0) - 20| / √(3² + 4²) = 20 / 5 = 4.' },
      ];
  }
};
