import { KumonLevelId, LevelInfo, ProblemItem, Worksheet } from '../types';
import { get6AProblems, get5AProblems, get4AProblems } from './levels/preSchoolLevels';
import { get3AProblems, get2AProblems, getAProblems, getBProblems } from './levels/elementary1Levels';
import { getCProblems, getDProblems, getEProblems, getFProblems } from './levels/elementary2Levels';
import { getGProblems, getHProblems, getIProblems } from './levels/secondaryLevels';
import { getJProblems, getKProblems, getLProblems, getMProblems } from './levels/advancedLevels';

export const KUMON_LEVELS: LevelInfo[] = [
  {
    id: '6A',
    order: 1,
    name: 'Pengenalan Angka & Menghitung Benda (1 - 10)',
    category: 'Pra-Sekolah',
    color: 'from-pink-500 to-rose-500',
    badgeBg: 'bg-pink-100 text-pink-700 dark:bg-pink-950/60 dark:text-pink-300 border-pink-300 dark:border-pink-800',
    description: 'Membaca angka 1 sampai 10 dan menghitung kumpulan objek/titik dengan tepat.',
    topics: ['Menghitung Titik 1-5', 'Menghitung Benda 1-10', 'Menghubungkan Jumlah & Lambang Angka', 'Urutan Angka 1-10'],
    targetSctMinutes: 3,
    worksheetCount: 5,
  },
  {
    id: '5A',
    order: 2,
    name: 'Membaca & Menulis Angka (1 - 50)',
    category: 'Pra-Sekolah',
    color: 'from-rose-500 to-orange-500',
    badgeBg: 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border-rose-300 dark:border-rose-800',
    description: 'Mengenal urutan angka sampai 50, membaca garis bilangan, dan menghubungkan titik angka.',
    topics: ['Urutan Angka 1-20', 'Urutan Angka 20-50', 'Garis Bilangan Sederhana', 'Angka Sebelum & Sesudah'],
    targetSctMinutes: 3,
    worksheetCount: 5,
  },
  {
    id: '4A',
    order: 3,
    name: 'Angka 1 - 100 & Penjumlahan +1',
    category: 'Pra-Sekolah',
    color: 'from-orange-500 to-amber-500',
    badgeBg: 'bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-300 border-orange-300 dark:border-orange-800',
    description: 'Melatih kelancaran menulis urutan bilangan sampai 100 dan konsep dasar penjumlahan tambah 1 (+1).',
    topics: ['Papan Bilangan 1-100', 'Konsep Tambah 1 (+1)', 'Latihan Kecepatan +1', 'Pengenalan Tambah 2 (+2)'],
    targetSctMinutes: 4,
    worksheetCount: 5,
  },
  {
    id: '3A',
    order: 4,
    name: 'Penjumlahan Dasar (+1 sampai +5)',
    category: 'Dasar 1',
    color: 'from-amber-500 to-yellow-500',
    badgeBg: 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border-amber-300 dark:border-amber-800',
    description: 'Menguasai keterampilan berhitung cepat penjumlahan dengan penambah 1, 2, 3, 4, dan 5 secara mental.',
    topics: ['Penjumlahan +2 & +3', 'Penjumlahan +4 & +5', 'Latihan Kecepatan Mental Math', 'Campuran Penjumlahan +1 s/d +5'],
    targetSctMinutes: 4,
    worksheetCount: 5,
  },
  {
    id: '2A',
    order: 5,
    name: 'Penjumlahan (+6 s/d +10) & Pengurangan Dasar',
    category: 'Dasar 1',
    color: 'from-yellow-500 to-emerald-500',
    badgeBg: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-950/60 dark:text-yellow-300 border-yellow-300 dark:border-yellow-800',
    description: 'Menyelesaikan penjumlahan hingga penambah 10 dan memulai konsep dasar pengurangan (-1 sampai -5).',
    topics: ['Penjumlahan +6 sampai +10', 'Pengurangan Dasar -1 & -2', 'Pengurangan Dasar -3 sampai -5', 'Latihan Kelancaran Mental'],
    targetSctMinutes: 5,
    worksheetCount: 5,
  },
  {
    id: 'A',
    order: 6,
    name: 'Penjumlahan & Pengurangan Mendatar',
    category: 'Dasar 1',
    color: 'from-emerald-500 to-teal-500',
    badgeBg: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800',
    description: 'Mengasah kemampuan mental math penjumlahan dua digit sederhana dan pengurangan hingga hasil 20.',
    topics: ['Penjumlahan Mendatar 2 Digit', 'Pengurangan Mendatar hingga 20', 'Pengurangan 2 Digit Tanpa Pinjam', 'Tantangan Ketepatan & Kecepatan'],
    targetSctMinutes: 5,
    worksheetCount: 5,
  },
  {
    id: 'B',
    order: 7,
    name: 'Penjumlahan & Pengurangan Bersusun',
    category: 'Dasar 1',
    color: 'from-teal-500 to-cyan-500',
    badgeBg: 'bg-teal-100 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300 border-teal-300 dark:border-teal-800',
    description: 'Menguasai algoritma penjumlahan dan pengurangan bersusun dengan teknik menyimpan dan meminjam.',
    topics: ['Penjumlahan Bersusun 2 Digit (Simpan)', 'Pengurangan Bersusun 2 Digit (Pinjam)', 'Penjumlahan & Pengurangan 3 Digit', 'Aplikasi Soal Hitung Bersusun'],
    targetSctMinutes: 6,
    worksheetCount: 5,
  },
  {
    id: 'C',
    order: 8,
    name: 'Tabel Perkalian & Pembagian Sederhana',
    category: 'Dasar 2',
    color: 'from-cyan-500 to-blue-500',
    badgeBg: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-950/60 dark:text-cyan-300 border-cyan-300 dark:border-cyan-800',
    description: 'Menguasai perkalian tabel 1-9 secara otomatis tanpa ragu serta konsep pembagian bersisa.',
    topics: ['Perkalian Tabel 1 s/d 5', 'Perkalian Tabel 6 s/d 9', 'Pembagian Dasar Tanpa Sisa', 'Pembagian Sederhana dengan Sisa (Contoh: 17 ÷ 3 = 5 sisa 2)'],
    targetSctMinutes: 6,
    worksheetCount: 5,
  },
  {
    id: 'D',
    order: 9,
    name: 'Perkalian & Pembagian Bersusun, Pengenalan Pecahan',
    category: 'Dasar 2',
    color: 'from-blue-500 to-indigo-500',
    badgeBg: 'bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border-blue-300 dark:border-blue-800',
    description: 'Melakukan perkalian 2-3 digit bersusun, pembagian porogapit panjang, dan menyederhanakan pecahan.',
    topics: ['Perkalian 2 Digit × 2 Digit', 'Pembagian Porogapit 2-3 Digit', 'Menyederhanakan Pecahan (FPB)', 'Pecahan Senilai'],
    targetSctMinutes: 7,
    worksheetCount: 5,
  },
  {
    id: 'E',
    order: 10,
    name: 'Operasi Pecahan Biasa & Campuran',
    category: 'Dasar 2',
    color: 'from-indigo-500 to-violet-500',
    badgeBg: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border-indigo-300 dark:border-indigo-800',
    description: 'Menguasai penjumlahan, pengurangan, perkalian, dan pembagian pecahan biasa maupun pecahan campuran.',
    topics: ['Penjumlahan Pecahan Beda Penyebut (KPK)', 'Pengurangan Pecahan Campuran', 'Perkalian Pecahan', 'Pembagian Pecahan & Desimal Dasar'],
    targetSctMinutes: 8,
    worksheetCount: 5,
  },
  {
    id: 'F',
    order: 11,
    name: 'Operasi Pecahan Lanjutan & Soal Cerita',
    category: 'Menengah',
    color: 'from-violet-500 to-purple-500',
    badgeBg: 'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-300 border-violet-300 dark:border-violet-800',
    description: 'Operasi hitung campuran 4 tanda (+, -, ×, ÷) pada pecahan, desimal, dan aplikasi penalaran soal cerita.',
    topics: ['Hitung Campuran 3 Pecahan', 'Pecahan Bertingkat & Desimal', 'Urutan Operasi (KABATAKU)', 'Soal Cerita StepUp Math Level F'],
    targetSctMinutes: 8,
    worksheetCount: 5,
  },
  {
    id: 'G',
    order: 12,
    name: 'Bilangan Positif & Negatif, Aljabar Linear Dasar',
    category: 'Menengah',
    color: 'from-purple-500 to-fuchsia-500',
    badgeBg: 'bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border-purple-300 dark:border-purple-800',
    description: 'Operasi aritmetika bilangan bulat negatif dan pengenalan persamaan linear satu variabel (x + a = b, ax + b = c).',
    topics: ['Penjumlahan & Pengurangan Bilangan Negatif', 'Perkalian & Pembagian Negatif', 'Menyederhanakan Bentuk Aljabar', 'Menyelesaikan Persamaan Linear Satu Variabel'],
    targetSctMinutes: 8,
    worksheetCount: 5,
  },
  {
    id: 'H',
    order: 13,
    name: 'Sistem Persamaan Linear (SPLDV) & Fungsi',
    category: 'Menengah',
    color: 'from-fuchsia-500 to-pink-600',
    badgeBg: 'bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-950/60 dark:text-fuchsia-300 border-fuchsia-300 dark:border-fuchsia-800',
    description: 'Menyelesaikan sistem persamaan linear dua variabel (eliminasi & substitusi), pertidaksamaan, dan grafik fungsi linear.',
    topics: ['SPLDV Metode Eliminasi', 'SPLDV Metode Substitusi', 'Pertidaksamaan Linear', 'Gradien & Persamaan Garis Lurus'],
    targetSctMinutes: 9,
    worksheetCount: 5,
  },
  {
    id: 'I',
    order: 14,
    name: 'Pemfaktoran Aljabar, Persamaan Kuadrat & Pythagoras',
    category: 'Lanjutan',
    color: 'from-pink-600 to-rose-600',
    badgeBg: 'bg-pink-100 text-pink-800 dark:bg-pink-950/60 dark:text-pink-300 border-pink-300 dark:border-pink-800',
    description: 'Menguasai ekspansi polinomial, faktorisasi kuadrat (x² + bx + c), rumus kuadratik, dan dalil Pythagoras.',
    topics: ['Ekspansi Bentuk Aljabar', 'Faktorisasi Kuadrat Sempurna & Selisih Kuadrat', 'Akar-akar Persamaan Kuadrat', 'Teorema Pythagoras & Bentuk Akar'],
    targetSctMinutes: 10,
    worksheetCount: 5,
  },
  {
    id: 'J',
    order: 15,
    name: 'Aljabar Lanjutan & Polinomial Tingkat Tinggi',
    category: 'Lanjutan',
    color: 'from-sky-600 to-blue-700',
    badgeBg: 'bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 border-sky-300 dark:border-sky-800',
    description: 'Faktorisasi tingkat lanjut, teorema sisa, teorema faktor, persamaan pecahan rasional, dan bilangan kompleks.',
    topics: ['Faktorisasi Derajat 3 dan 4', 'Teorema Sisa & Pembagian Horner', 'Persamaan Irasional & Pecahan Aljabar', 'Sistem Persamaan Tiga Variabel (SPLTV)'],
    targetSctMinutes: 10,
    worksheetCount: 5,
  },
  {
    id: 'K',
    order: 16,
    name: 'Fungsi Kuadrat, Eksponensial & Logaritma',
    category: 'Tinggi',
    color: 'from-indigo-600 to-violet-700',
    badgeBg: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300 border-indigo-300 dark:border-indigo-800',
    description: 'Grafik fungsi kuadrat, nilai ekstrem maksimum/minimum, sifat eksponen, dan persamaan/pertidaksamaan logaritma.',
    topics: ['Diskriminan & Titik Puncak Parabola', 'Persamaan Eksponensial', 'Sifat-sifat Logaritma', 'Persamaan Logaritma'],
    targetSctMinutes: 12,
    worksheetCount: 5,
  },
  {
    id: 'L',
    order: 17,
    name: 'Trigonometri & Kalkulus Dasar (Limit & Turunan)',
    category: 'Tinggi',
    color: 'from-violet-600 to-purple-800',
    badgeBg: 'bg-violet-100 text-violet-800 dark:bg-violet-950/60 dark:text-violet-300 border-violet-300 dark:border-violet-800',
    description: 'Fungsi trigonometri (sin, cos, tan), identitas trigonometri, konsep limit fungsi aljabar, dan turunan pertama f’(x).',
    topics: ['Nilai Trigonometri Sudut Istimewa', 'Identitas & Persamaan Trigonometri', 'Limit Fungsi Aljabar', 'Aturan Rantai & Turunan Fungsi Polinomial'],
    targetSctMinutes: 12,
    worksheetCount: 5,
  },
  {
    id: 'M',
    order: 18,
    name: 'Kalkulus Lanjut (Integral Tentu, Vektor & Matriks)',
    category: 'Tinggi',
    color: 'from-purple-700 to-rose-700',
    badgeBg: 'bg-purple-100 text-purple-900 dark:bg-purple-950/60 dark:text-purple-200 border-purple-300 dark:border-purple-800',
    description: 'Integral tak tentu & integral tentu, menghitung luas daerah kurva, operasi vektor, determinan, dan invers matriks.',
    topics: ['Integral Tak Tentu & Teknik Substitusi', 'Integral Tentu & Luas Daerah', 'Operasi Vektor 2D & 3D (Dot Product)', 'Determinan & Invers Matriks 2×2 & 3×3'],
    targetSctMinutes: 15,
    worksheetCount: 5,
  },
];

// Helper to generate curated 10-problem progressive worksheets for any level and set
export function getWorksheetData(levelId: KumonLevelId, setNumber: number = 1): Worksheet {
  const level = KUMON_LEVELS.find((l) => l.id === levelId) || KUMON_LEVELS[0];

  const worksheetsBank: Record<KumonLevelId, (set: number) => ProblemItem[]> = {
    '6A': get6AProblems,
    '5A': get5AProblems,
    '4A': get4AProblems,
    '3A': get3AProblems,
    '2A': get2AProblems,
    'A': getAProblems,
    'B': getBProblems,
    'C': getCProblems,
    'D': getDProblems,
    'E': getEProblems,
    'F': getFProblems,
    'G': getGProblems,
    'H': getHProblems,
    'I': getIProblems,
    'J': getJProblems,
    'K': getKProblems,
    'L': getLProblems,
    'M': getMProblems,
  };

  const getProblems = worksheetsBank[levelId] || worksheetsBank['A'];
  const problems = getProblems(setNumber);

  return {
    id: `ws-${levelId}-set-${setNumber}`,
    levelId,
    setNumber,
    title: `Lembar Kerja ${levelId} - Set ${setNumber}`,
    description: `Lembar latihan mandiri StepUp Math untuk Level ${levelId}. Kerjakan dengan cepat dan teliti!`,
    targetMinutes: level.targetSctMinutes,
    passingScore: 80,
    problems,
  };
}

// Clean and normalize answers for flexible grading
export function checkAnswer(userAns: string, correctAns: string, alternateAnswers?: string[]): boolean {
  if (!userAns || !userAns.trim()) return false;

  const normalize = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '')
      .replace(/,/g, '.')
      .replace(/x=/g, '')
      .replace(/y=/g, '')
      .replace(/k=/g, '');

  const normUser = normalize(userAns);
  const normCorrect = normalize(correctAns);

  if (normUser === normCorrect) return true;

  if (alternateAnswers && alternateAnswers.length > 0) {
    for (const alt of alternateAnswers) {
      if (normUser === normalize(alt)) return true;
    }
  }

  // Check fraction vs decimal equivalence if possible (e.g. 1/2 vs 0.5)
  if (correctAns.includes('/') && !isNaN(Number(normUser))) {
    const [num, den] = correctAns.split('/').map(Number);
    if (den && Math.abs(Number(normUser) - num / den) < 0.0001) {
      return true;
    }
  }

  return false;
}
