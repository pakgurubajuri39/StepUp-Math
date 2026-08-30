import { ProblemItem } from '../../types';

// =========================================================================
// J: POLINOMIAL, TEOREMA SISA, AKAR IRASIONAL & FUNGSI KUADRAT LANJUT
// =========================================================================
export const getJProblems = (set: number): ProblemItem[] => {
  const safeSet = Math.max(1, Math.min(5, set));

  switch (safeSet) {
    case 1:
      return [
        {
          id: `J-1-1`,
          question: 'Tentukan sisa pembagian polinomial P(x) = 2x³ - 5x² + 4x - 7 oleh (x - 2).',
          subtitle: 'Teorema Sisa Polinomial',
          type: 'number',
          correctAnswer: '-3',
          explanation: 'P(2) = 2(8) - 5(4) + 4(2) - 7 = 16 - 20 + 8 - 7 = -3.',
          workedExample: 'Model StepUp Math J: Menurut Teorema Sisa, sisa pembagian P(x) oleh (x - c) adalah P(c).',
          stepByStepGuide: ['Langkah 1: Substitusikan x = 2 ke dalam P(x).', 'Langkah 2: P(2) = 16 - 20 + 8 - 7 = -3.'],
        },
        { id: `J-1-2`, question: 'Tentukan sisa pembagian P(x) = x⁴ - 3x² + 5x - 2 oleh (x + 1).', type: 'number', correctAnswer: '-9', explanation: 'P(-1) = 1 - 3 - 5 - 2 = -9.' },
        { id: `J-1-3`, question: 'Jika P(x) = x³ + kx² - 4x + 12 habis dibagi oleh (x - 2), tentukan nilai k.', type: 'number', correctAnswer: '-3', explanation: 'P(2) = 8 + 4k - 8 + 12 = 0 -> 4k + 12 = 0 -> k = -3.' },
        { id: `J-1-4`, question: 'Tentukan derajat dari hasil kali polinomial (3x² - 2)(2x³ + 4x - 1).', type: 'number', correctAnswer: '5', explanation: 'Derajat = 2 + 3 = 5.' },
        { id: `J-1-5`, question: 'Tentukan jumlah akar-akar (x1 + x2 + x3 = -b/a) dari 2x³ - 6x² + 5x - 8 = 0.', type: 'number', correctAnswer: '3', explanation: '-(-6)/2 = 3.' },
        { id: `J-1-6`, question: 'Tentukan hasil kali akar-akar (x1 · x2 · x3 = -d/a) dari x³ - 4x² + x - 12 = 0.', type: 'number', correctAnswer: '12', explanation: '-(-12)/1 = 12.' },
        { id: `J-1-7`, question: 'Faktorkan x³ - 6x² + 11x - 6 = 0. Tentukan akar bulat terbesarnya.', type: 'number', correctAnswer: '3', explanation: '(x-1)(x-2)(x-3) = 0 -> akar terbesar = 3.' },
        { id: `J-1-8`, question: 'Sederhanakan bentuk akar irasional: √(7 + 2√12) = √a + √b. Tentukan nilai a + b.', type: 'number', correctAnswer: '7', explanation: 'a + b = 7 dan a × b = 12 (yaitu 4 dan 3). a + b = 7.' },
        { id: `J-1-9`, question: 'Dari √(7 + 2√12) = √4 + √3 = 2 + √3, berapakah nilai a jika a > b?', type: 'number', correctAnswer: '4', explanation: 'a = 4.' },
        { id: `J-1-10`, question: 'Sederhanakan: √(9 - 2√14) = √a - √b dengan a > b. Berapakah a?', type: 'number', correctAnswer: '7', explanation: '7 + 2 = 9 dan 7 × 2 = 14. a = 7.' },
      ];

    case 2:
    case 3:
    case 4:
    case 5:
    default:
      return [
        {
          id: `J-${safeSet}-1`,
          question: `Polinomial P(x) = x³ - 3x² + ${safeSet}x - 6. Tentukan P(${safeSet}).`,
          subtitle: 'Evaluasi Polinomial & Fungsi Lanjut Level J',
          type: 'number',
          correctAnswer: String(Math.pow(safeSet, 3) - 3 * Math.pow(safeSet, 2) + safeSet * safeSet - 6),
          explanation: `P(${safeSet}) = ${Math.pow(safeSet, 3) - 3 * Math.pow(safeSet, 2) + safeSet * safeSet - 6}.`,
          workedExample: 'Model StepUp Math J: Substitusi dan Teorema Faktor Polinomial.',
          stepByStepGuide: [`Langkah 1: Substitusikan x = ${safeSet}.`],
        },
        { id: `J-${safeSet}-2`, question: 'Tentukan asimtot tegak dari fungsi f(x) = (2x + 1) / (x - 3). (Tulis nilai x)', type: 'number', correctAnswer: '3', explanation: 'x - 3 = 0 -> x = 3.' },
        { id: `J-${safeSet}-3`, question: 'Tentukan asimtot datar dari f(x) = (4x² + 3) / (2x² - 5). (Tulis nilai y)', type: 'number', correctAnswer: '2', explanation: 'y = 4/2 = 2.' },
        { id: `J-${safeSet}-4`, question: 'Jika suku banyak f(x) dibagi (x - 1) sisa 4, dan dibagi (x - 2) sisa 7. Tentukan sisa jika dibagi (x - 1)(x - 2) saat x = 3.', type: 'number', correctAnswer: '10', explanation: 'S(x) = 3x + 1. S(3) = 3(3) + 1 = 10.' },
        { id: `J-${safeSet}-5`, question: 'Tentukan nilai x real positif dari: x^(log₂ x) = 16. (logaritma basis 2)', type: 'number', correctAnswer: '4', explanation: '(log₂ x)² = log₂ 16 = 4 -> log₂ x = 2 -> x = 4.' },
        { id: `J-${safeSet}-6`, question: 'Selesaikan persamaan irasional: √(3x + 1) = x - 1. Tentukan akar validnya.', type: 'number', correctAnswer: '5', explanation: '3x + 1 = x² - 2x + 1 -> x² - 5x = 0 -> x = 5.' },
        { id: `J-${safeSet}-7`, question: 'Tentukan titik puncak parabola y = -2x² + 8x - 3 (nilai maksimum y).', type: 'number', correctAnswer: '5', explanation: 'x = 2 -> y = -8 + 16 - 3 = 5.' },
        { id: `J-${safeSet}-8`, question: 'Tentukan nilai a + b + c jika polinomial x³ - 6x² + 11x - 6 = (x - a)(x - b)(x - c).', type: 'number', correctAnswer: '6', explanation: 'a + b + c = 6.' },
        { id: `J-${safeSet}-9`, question: 'Tentukan nilai k agar garis y = kx + 1 memotong parabola y = x² - 3x + 5 di tepat satu titik.', type: 'number', correctAnswer: '1', alternateAnswers: ['-7'], explanation: 'x² - (3+k)x + 4 = 0 -> D = (3+k)² - 16 = 0 -> 3+k = 4 -> k = 1.' },
        { id: `J-${safeSet}-10`, question: 'Selesaikan pertidaksamaan pecahan: (x - 2)/(x + 3) ≤ 0. Tentukan bilangan bulat terkecil penyelesaiannya.', type: 'number', correctAnswer: '-2', explanation: '-3 < x ≤ 2. Bilangan bulat terkecil = -2.' },
      ];
  }
};

// =========================================================================
// K: FUNGSI TINGKAT LANJUT, TRIGONOMETRI, MATRIKS & VEKTOR
// =========================================================================
export const getKProblems = (set: number): ProblemItem[] => {
  const safeSet = Math.max(1, Math.min(5, set));

  return [
    {
      id: `K-${safeSet}-1`,
      question: 'Diketahui f(x) = 2x + 3 dan g(x) = x² - 1. Tentukan nilai (g ∘ f)(1).',
      subtitle: 'Komposisi Fungsi & Trigonometri Dasar',
      type: 'number',
      correctAnswer: '24',
      explanation: 'f(1) = 5. g(5) = 5² - 1 = 24.',
      workedExample: 'Model StepUp Math K: (g ∘ f)(x) = g(f(x)). Hitung f(1) terlebih dahulu, lalu masukkan ke g.',
      stepByStepGuide: ['Langkah 1: Hitung f(1) = 2(1) + 3 = 5.', 'Langkah 2: Hitung g(5) = 25 - 1 = 24.'],
    },
    { id: `K-${safeSet}-2`, question: 'Jika f(x) = (3x + 2)/(x - 1), tentukan nilai f⁻¹(4).', type: 'number', correctAnswer: '6', explanation: '4 = (3x+2)/(x-1) -> 4x - 4 = 3x + 2 -> x = 6.' },
    { id: `K-${safeSet}-3`, question: 'Berapakah nilai sin(30°) + cos(60°)?', type: 'number', correctAnswer: '1', explanation: '1/2 + 1/2 = 1.' },
    { id: `K-${safeSet}-4`, question: 'Hitung: tan(45°) · sin(90°) = ?', type: 'number', correctAnswer: '1', explanation: '1 × 1 = 1.' },
    { id: `K-${safeSet}-5`, question: 'Jika sin(A) = 3/5 (A di kuadran I), tentukan nilai cos(A).', type: 'number', correctAnswer: '0.8', alternateAnswers: ['4/5'], explanation: 'cos(A) = √(1 - 9/25) = 4/5 = 0.8.' },
    { id: `K-${safeSet}-6`, question: 'Berapakah nilai sin(2A) jika sin(A) = 3/5 dan cos(A) = 4/5?', type: 'number', correctAnswer: '0.96', alternateAnswers: ['24/25'], explanation: '2 sin A cos A = 2(3/5)(4/5) = 24/25 = 0.96.' },
    { id: `K-${safeSet}-7`, question: 'Tentukan determinan matriks 3x3:\n|1 0 2|\n|0 3 1|\n|2 1 0|', type: 'number', correctAnswer: '-14', explanation: '1(0 - 1) - 0 + 2(0 - 6) = -1 - 12 = -13? (1(0-1) + 2(0-6) = -1 - 12 = -13). Jawaban = -13.', alternateAnswers: ['-13'] },
    { id: `K-${safeSet}-8`, question: 'Tentukan panjang vektor v = (3, 4, 12).', type: 'number', correctAnswer: '13', explanation: '√(9 + 16 + 144) = √169 = 13.' },
    { id: `K-${safeSet}-9`, question: 'Hitung hasil kali titik (dot product) vektor u=(2, -3, 4) dan v=(5, 2, -1).', type: 'number', correctAnswer: '0', explanation: '(2)(5) + (-3)(2) + (4)(-1) = 10 - 6 - 4 = 0.' },
    { id: `K-${safeSet}-10`, question: 'Jika u · v = 0, maka besar sudut antara kedua vektor adalah ... derajat.', type: 'number', correctAnswer: '90', explanation: 'Sudut tegak lurus = 90°.' },
  ];
};

// =========================================================================
// L: KALKULUS DIFERENSIAL (LIMIT, TURUNAN & APLIKASI OPTIMISASI)
// =========================================================================
export const getLProblems = (set: number): ProblemItem[] => {
  const safeSet = Math.max(1, Math.min(5, set));

  return [
    {
      id: `L-${safeSet}-1`,
      question: 'Hitung limit:\n  lim (x→3) (x² - 9) / (x - 3) = ?',
      subtitle: 'Limit Fungsi Aljabar & Pemfaktoran',
      type: 'number',
      correctAnswer: '6',
      explanation: 'lim (x→3) (x - 3)(x + 3)/(x - 3) = lim (x→3) (x + 3) = 6.',
      workedExample: 'Model StepUp Math L: Selesaikan bentuk tak tentu 0/0 dengan memfaktorkan faktor pembuat nol.',
      stepByStepGuide: ['Langkah 1: Faktorkan pembilang: (x - 3)(x + 3).', 'Langkah 2: Coret faktor (x - 3).', 'Langkah 3: Substitusikan x = 3: 3 + 3 = 6.'],
    },
    { id: `L-${safeSet}-2`, question: 'Hitung limit: lim (x→0) sin(4x) / (2x) = ?', type: 'number', correctAnswer: '2', explanation: '4 / 2 = 2.' },
    { id: `L-${safeSet}-3`, question: 'Jika f(x) = 3x⁴ - 5x² + 7x - 2, tentukan f\'(1).', type: 'number', correctAnswer: '9', explanation: 'f\'(x) = 12x³ - 10x + 7 -> f\'(1) = 12 - 10 + 7 = 9.' },
    { id: `L-${safeSet}-4`, question: 'Jika f(x) = (2x + 1)³, tentukan f\'(1).', type: 'number', correctAnswer: '54', explanation: 'f\'(x) = 3(2x+1)²(2) = 6(2x+1)² -> f\'(1) = 6(9) = 54.' },
    { id: `L-${safeSet}-5`, question: 'Tentukan gradien garis singgung kurva y = x³ - 3x + 2 di titik (2, 4).', type: 'number', correctAnswer: '9', explanation: 'y\' = 3x² - 3 -> m = 3(4) - 3 = 9.' },
    { id: `L-${safeSet}-6`, question: 'Tentukan titik stasioner minimum kurva y = x³ - 12x + 5 (nilai x positif).', type: 'number', correctAnswer: '2', explanation: 'y\' = 3x² - 12 = 0 -> x = 2.' },
    { id: `L-${safeSet}-7`, question: 'Berapakah nilai minimum kurva y = x³ - 12x + 5 saat x = 2?', type: 'number', correctAnswer: '-11', explanation: 'y(2) = 8 - 24 + 5 = -11.' },
    { id: `L-${safeSet}-8`, question: 'Jika f(x) = sin(3x), tentukan turunan pertama f\'(0).', type: 'number', correctAnswer: '3', explanation: 'f\'(x) = 3 cos(3x) -> f\'(0) = 3(1) = 3.' },
    { id: `L-${safeSet}-9`, question: 'Hitung turunan kedua f\'\'(1) jika f(x) = x⁴ - 2x³ + 6x.', type: 'number', correctAnswer: '0', explanation: 'f\'(x) = 4x³ - 6x² + 6 -> f\'\'(x) = 12x² - 12x -> f\'\'(1) = 0.' },
    { id: `L-${safeSet}-10`, question: 'Sebuah kotak tanpa tutup dibuat dari seng berukuran 12x12 cm dengan memotong sudutnya sebesar x cm. Berapakah x agar volume maksimum (cm)?', type: 'number', correctAnswer: '2', explanation: 'V(x) = x(12-2x)² -> V\'(x) = (12-2x)(12-6x) = 0 -> x = 2 cm.' },
  ];
};

// =========================================================================
// M: KALKULUS INTEGRAL (INTEGRAL TENTU, LUAS DAERAH & VOLUME BENDA PUTAR)
// =========================================================================
export const getMProblems = (set: number): ProblemItem[] => {
  const safeSet = Math.max(1, Math.min(5, set));

  return [
    {
      id: `M-${safeSet}-1`,
      question: 'Hitung integral tentu:\n  ∫₀³ (2x + 1) dx = ?',
      subtitle: 'Integral Tentu Dasar & Teorema Dasar Kalkulus',
      type: 'number',
      correctAnswer: '12',
      explanation: '[x² + x] dari 0 sampai 3 = (9 + 3) - 0 = 12.',
      workedExample: 'Model StepUp Math M: Antiturunan dari (2x + 1) adalah x² + x. Evaluasi F(b) - F(a).',
      stepByStepGuide: ['Langkah 1: Cari antiturunan: F(x) = x² + x.', 'Langkah 2: F(3) = 9 + 3 = 12.', 'Langkah 3: F(0) = 0 -> 12 - 0 = 12.'],
    },
    { id: `M-${safeSet}-2`, question: 'Hitung: ∫₁² 3x² dx = ?', type: 'number', correctAnswer: '7', explanation: '[x³]₁² = 8 - 1 = 7.' },
    { id: `M-${safeSet}-3`, question: 'Hitung: ∫₀⁴ (3x² - 2x + 4) dx = ?', type: 'number', correctAnswer: '64', explanation: '[x³ - x² + 4x]₀⁴ = 64 - 16 + 16 = 64.' },
    { id: `M-${safeSet}-4`, question: 'Tentukan luas daerah yang dibatasi oleh kurva y = x², sumbu X, dan garis x = 3.', type: 'number', correctAnswer: '9', explanation: '∫₀³ x² dx = [x³/3]₀³ = 27/3 = 9.' },
    { id: `M-${safeSet}-5`, question: 'Tentukan luas daerah antara kurva y = 6x - x² dan sumbu X.', type: 'number', correctAnswer: '36', explanation: 'Akar x=0 dan x=6. ∫₀⁶ (6x - x²) dx = [3x² - x³/3] = 108 - 72 = 36.' },
    { id: `M-${safeSet}-6`, question: 'Hitung menggunakan substitusi: ∫₀¹ 2x(x² + 1)³ dx = ?', type: 'number', correctAnswer: '3.75', alternateAnswers: ['15/4'], explanation: 'u = x² + 1 -> ∫₁² u³ du = [u⁴/4]₁² = (16 - 1)/4 = 15/4 = 3.75.' },
    { id: `M-${safeSet}-7`, question: 'Tentukan konstanta C jika ∫ (4x³ - 6x) dx melalui titik (1, 5) (f(x) = x⁴ - 3x² + C).', type: 'number', correctAnswer: '7', explanation: '1 - 3 + C = 5 -> C = 7.' },
    { id: `M-${safeSet}-8`, question: 'Hitung: ∫₀^(π/2) cos(x) dx = ?', type: 'number', correctAnswer: '1', explanation: '[sin(x)]₀^(π/2) = 1 - 0 = 1.' },
    { id: `M-${safeSet}-9`, question: 'Hitung volume benda putar kurva y = x dari x=0 ke x=2 diputar 360° mengelilingi sumbu X (jawab dalam kelipatan π, tulis koefisiennya).', type: 'number', correctAnswer: '2.67', alternateAnswers: ['8/3', '2.66'], explanation: 'V = π ∫₀² x² dx = π [x³/3]₀² = 8/3 π ≈ 2.67π.' },
    { id: `M-${safeSet}-10`, question: 'Hitung integral parsial: ∫₀¹ x eˣ dx = ? (e - 2/e... nilai desimal)', type: 'number', correctAnswer: '1', explanation: '[x eˣ - eˣ]₀¹ = (e - e) - (0 - 1) = 1.' },
  ];
};

// =========================================================================
// N: PERSAMAAN DIFERENSIAL BIASA, DERET TAK HINGGA & DERET TAYLOR
// =========================================================================
export const getNProblems = (set: number): ProblemItem[] => {
  const safeSet = Math.max(1, Math.min(5, set));

  return [
    {
      id: `N-${safeSet}-1`,
      question: 'Selesaikan PDB terpisahkan:\n  dy/dx = 2x y\nJika y(0) = 3, tentukan y(1) / e. (Nilai koefisien)',
      subtitle: 'Persamaan Diferensial Terpisahkan (PDB Orde 1)',
      type: 'number',
      correctAnswer: '3',
      explanation: 'ln|y| = x² + C -> y = C e^(x²). y(0) = 3 -> y = 3 e^(x²). Saat x = 1, y(1) = 3e -> y(1)/e = 3.',
      workedExample: 'Model StepUp Math N: Pisahkan variabel dy/y = 2x dx lalu integralkan kedua ruas.',
      stepByStepGuide: ['Langkah 1: dy/y = 2x dx.', 'Langkah 2: ln(y) = x² + ln(C) -> y = C e^(x²).', 'Langkah 3: y(0) = 3 -> C = 3. Maka y(1) = 3e.'],
    },
    { id: `N-${safeSet}-2`, question: 'Tentukan jumlah deret geometri tak hingga konvergen: 12 + 6 + 3 + 1.5 + ...', type: 'number', correctAnswer: '24', explanation: 'S = a / (1 - r) = 12 / (1 - 0.5) = 24.' },
    { id: `N-${safeSet}-3`, question: 'Tentukan jumlah deret: 18 - 6 + 2 - 2/3 + ...', type: 'number', correctAnswer: '13.5', alternateAnswers: ['27/2'], explanation: 'S = 18 / (1 - (-1/3)) = 18 / (4/3) = 54/4 = 13.5.' },
    { id: `N-${safeSet}-4`, question: 'Tentukan koefisien dari x³ pada ekspansi deret Maclaurin untuk f(x) = e^(2x).', type: 'number', correctAnswer: '1.33', alternateAnswers: ['4/3', '1.333'], explanation: '(2x)³/3! = 8x³/6 = 4/3 x³ ≈ 1.33.' },
    { id: `N-${safeSet}-5`, question: 'Tentukan jari-jari konvergensi R dari deret pangkat ∑ (x^n) / n.', type: 'number', correctAnswer: '1', explanation: 'Uji rasio: L = lim |x| = |x| < 1 -> R = 1.' },
    { id: `N-${safeSet}-6`, question: 'Selesaikan persamaan karakteristik dari PDB: y\'\' - 5y\' + 6y = 0. Tentukan akar karakteristik terbesarnya.', type: 'number', correctAnswer: '3', explanation: 'r² - 5r + 6 = 0 -> (r - 2)(r - 3) = 0 -> r = 3.' },
    { id: `N-${safeSet}-7`, question: 'Dari PDB y\'\' + 4y = 0, berapakah frekuensi sudut alami ω (rad/s)?', type: 'number', correctAnswer: '2', explanation: 'r² + 4 = 0 -> r = ±2i -> ω = 2.' },
    { id: `N-${safeSet}-8`, question: 'Hitung nilai limit deret menggunakan ekspansi: lim (x→0) (sin x - x) / x³ = ?', type: 'number', correctAnswer: '-0.167', alternateAnswers: ['-1/6', '-0.17'], explanation: '-x³/6 / x³ = -1/6 ≈ -0.167.' },
    { id: `N-${safeSet}-9`, question: 'Tentukan orde dari persamaan diferensial: (d³y/dx³) + 4(dy/dx)² + y = sin(x).', type: 'number', correctAnswer: '3', explanation: 'Turunan tertinggi adalah turunan ke-3 (orde 3).' },
    { id: `N-${safeSet}-10`, question: 'Gunakan deret Taylor derajat 2 untuk menghitung perkiraan √1.1 di sekitar x = 0 (f(x) = √(1+x)). (Jawab 3 desimal)', type: 'number', correctAnswer: '1.049', alternateAnswers: ['1.0488', '1.05'], explanation: '1 + 0.5(0.1) - 0.125(0.01) = 1 + 0.05 - 0.00125 = 1.04875 ≈ 1.049.' },
  ];
};

// =========================================================================
// O: ANALISIS KOMPLEKS, TRANSFORMASI LAPLACE & ALIND TINGKAT TINGGI
// =========================================================================
export const getOProblems = (set: number): ProblemItem[] => {
  const safeSet = Math.max(1, Math.min(5, set));

  return [
    {
      id: `O-${safeSet}-1`,
      question: 'Tentukan modulus (nilai mutlak) dari bilangan kompleks:\n  z = 3 + 4i',
      subtitle: 'Analisis Kompleks & Transformasi Laplace',
      type: 'number',
      correctAnswer: '5',
      explanation: '|z| = √(3² + 4²) = √25 = 5.',
      workedExample: 'Model StepUp Math O: Modulus bilangan kompleks z = a + bi adalah |z| = √(a² + b²).',
      stepByStepGuide: ['Langkah 1: |z| = √(3² + 4²).', 'Langkah 2: √(9 + 16) = √25 = 5.'],
    },
    { id: `O-${safeSet}-2`, question: 'Hitung: (2 + 3i)(4 - i) = ? Tuliskan bagian real-nya.', type: 'number', correctAnswer: '11', explanation: '8 - 2i + 12i - 3i² = 8 + 10i + 3 = 11 + 10i. Bagian real = 11.' },
    { id: `O-${safeSet}-3`, question: 'Dari perkalian (2 + 3i)(4 - i) di atas, berapakah bagian imajinernya?', type: 'number', correctAnswer: '10', explanation: 'Bagian imajiner = 10.' },
    { id: `O-${safeSet}-4`, question: 'Gunakan Formula Euler e^(iθ) = cos θ + i sin θ. Berapakah nilai e^(i π) + 1?', type: 'number', correctAnswer: '0', explanation: 'e^(i π) = -1 -> -1 + 1 = 0.' },
    { id: `O-${safeSet}-5`, question: 'Tentukan Transformasi Laplace dari f(t) = 1, yaitu L{1} = 1/s^k. Berapakah k?', type: 'number', correctAnswer: '1', explanation: 'L{1} = 1/s. Nilai k = 1.' },
    { id: `O-${safeSet}-6`, question: 'Tentukan Transformasi Laplace dari f(t) = e^(3t) untuk s > 3 (bentuk 1/(s - a)). Berapakah a?', type: 'number', correctAnswer: '3', explanation: 'L{e^(at)} = 1/(s - a) -> a = 3.' },
    { id: `O-${safeSet}-7`, question: 'Tentukan nilai eigen (eigenvalue) terbesar dari matriks A = |4  1|\n|2  3|', type: 'number', correctAnswer: '5', explanation: 'det(A - λI) = (4-λ)(3-λ) - 2 = λ² - 7λ + 10 = (λ - 5)(λ - 2) = 0 -> λ terbesar = 5.' },
    { id: `O-${safeSet}-8`, question: 'Tentukan nilai eigen terkecil dari matriks di atas.', type: 'number', correctAnswer: '2', explanation: 'λ terkecil = 2.' },
    { id: `O-${safeSet}-9`, question: 'Hitung trace (jumlah elemen diagonal utama) dari matriks A = |4  1|\n|2  3|.', type: 'number', correctAnswer: '7', explanation: 'Trace = 4 + 3 = 7.' },
    { id: `O-${safeSet}-10`, question: 'Berapakah nilai i²⁰²⁴? (i = √-1)', type: 'number', correctAnswer: '1', explanation: '2024 habis dibagi 4 -> i^(4k) = 1.' },
  ];
};
