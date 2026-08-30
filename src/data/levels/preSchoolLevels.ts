import { ProblemItem } from '../../types';

// ==========================================
// 6A: PENGENALAN ANGKA & MENGHITUNG (1 - 10)
// ==========================================
export const get6AProblems = (set: number): ProblemItem[] => {
  const safeSet = Math.max(1, Math.min(5, set));

  switch (safeSet) {
    case 1:
      return [
        {
          id: `6A-1-1`,
          question: 'Hitung berapa banyak titik hitam di bawah ini:',
          subtitle: 'Membilang kuantitas 1 sampai 5',
          visualDots: 2,
          type: 'choice',
          options: ['1', '2', '3', '4'],
          correctAnswer: '2',
          explanation: 'Terdapat 2 titik hitam.',
          workedExample: 'Model StepUp Math 6A: Menghitung objek fisik dan mencocokkan dengan simbol angka.',
          stepByStepGuide: [
            'Langkah 1: Tunjuk titik pertama dari kiri dan hitung "Satu".',
            'Langkah 2: Tunjuk titik kedua dan hitung "Dua".',
            'Langkah 3: Jumlah total titik adalah 2.',
          ],
        },
        {
          id: `6A-1-2`,
          question: 'Hitung berapa banyak titik hitam di bawah ini:',
          visualDots: 3,
          type: 'choice',
          options: ['2', '3', '4', '5'],
          correctAnswer: '3',
          explanation: 'Ada 3 titik hitam.',
        },
        {
          id: `6A-1-3`,
          question: 'Hitung jumlah titik berikut:',
          visualDots: 4,
          type: 'choice',
          options: ['3', '4', '5', '6'],
          correctAnswer: '4',
          explanation: 'Ada 4 titik hitam.',
        },
        {
          id: `6A-1-4`,
          question: 'Tuliskan angka untuk lima titik berikut:',
          visualDots: 5,
          type: 'number',
          correctAnswer: '5',
          explanation: 'Terdapat 5 titik. Tulis angka 5.',
        },
        {
          id: `6A-1-5`,
          question: 'Berapakah angka yang berada tepat setelah angka 1?',
          type: 'choice',
          options: ['2', '3', '4'],
          correctAnswer: '2',
          explanation: 'Urutan bilangan: 1 lalu 2.',
        },
        {
          id: `6A-1-6`,
          question: 'Berapakah angka yang berada tepat setelah angka 3?',
          type: 'choice',
          options: ['2', '4', '5'],
          correctAnswer: '4',
          explanation: 'Setelah 3 adalah 4.',
        },
        {
          id: `6A-1-7`,
          question: 'Lengkapi urutan bilangan berikut: 1, 2, [ ? ], 4',
          type: 'number',
          correctAnswer: '3',
          explanation: 'Angka di antara 2 dan 4 adalah 3.',
        },
        {
          id: `6A-1-8`,
          question: 'Hitung total titik di bawah ini:',
          visualDots: 6,
          type: 'number',
          correctAnswer: '6',
          explanation: 'Ada 6 titik.',
        },
        {
          id: `6A-1-9`,
          question: 'Manakah yang lebih banyak: 5 atau 3?',
          type: 'choice',
          options: ['5', '3'],
          correctAnswer: '5',
          explanation: '5 lebih banyak daripada 3.',
        },
        {
          id: `6A-1-10`,
          question: 'Lengkapi urutan: 2, 3, 4, [ ? ]',
          type: 'number',
          correctAnswer: '5',
          explanation: 'Setelah 4 adalah 5.',
        },
      ];

    case 2:
      return [
        {
          id: `6A-2-1`,
          question: 'Hitung jumlah titik berikut:',
          subtitle: 'Membilang kuantitas 3 sampai 7',
          visualDots: 4,
          type: 'choice',
          options: ['3', '4', '5', '6'],
          correctAnswer: '4',
          explanation: 'Terdapat 4 titik.',
          workedExample: 'Model StepUp Math 6A: Menghitung kelompok titik dan melatih konsentrasi penglihatan.',
          stepByStepGuide: [
            'Langkah 1: Hitung titik pada baris atas: 1, 2.',
            'Langkah 2: Lanjutkan ke titik berikutnya: 3, 4.',
            'Langkah 3: Jumlah total adalah 4.',
          ],
        },
        {
          id: `6A-2-2`,
          question: 'Hitung berapa banyak titik hitam:',
          visualDots: 5,
          type: 'choice',
          options: ['4', '5', '6', '7'],
          correctAnswer: '5',
          explanation: 'Ada 5 titik hitam.',
        },
        {
          id: `6A-2-3`,
          question: 'Hitung berapa banyak titik hitam:',
          visualDots: 6,
          type: 'number',
          correctAnswer: '6',
          explanation: 'Ada 6 titik hitam.',
        },
        {
          id: `6A-2-4`,
          question: 'Hitung jumlah titik berikut:',
          visualDots: 7,
          type: 'number',
          correctAnswer: '7',
          explanation: 'Ada 7 titik.',
        },
        {
          id: `6A-2-5`,
          question: 'Berapakah angka setelah 5?',
          type: 'number',
          correctAnswer: '6',
          explanation: 'Setelah angka 5 adalah 6.',
        },
        {
          id: `6A-2-6`,
          question: 'Lengkapi urutan bilangan: 3, 4, 5, [ ? ], 7',
          type: 'number',
          correctAnswer: '6',
          explanation: 'Angka di antara 5 dan 7 adalah 6.',
        },
        {
          id: `6A-2-7`,
          question: 'Berapakah angka yang berada sebelum 5?',
          type: 'choice',
          options: ['3', '4', '6'],
          correctAnswer: '4',
          explanation: 'Angka sebelum 5 adalah 4.',
        },
        {
          id: `6A-2-8`,
          question: 'Hitung total titik berikut:',
          visualDots: 8,
          type: 'number',
          correctAnswer: '8',
          explanation: 'Terdapat 8 titik.',
        },
        {
          id: `6A-2-9`,
          question: 'Manakah yang lebih sedikit: 4 atau 7?',
          type: 'choice',
          options: ['4', '7'],
          correctAnswer: '4',
          explanation: '4 lebih sedikit daripada 7.',
        },
        {
          id: `6A-2-10`,
          question: 'Lengkapi deret: 4, 5, [ ? ], 7, 8',
          type: 'number',
          correctAnswer: '6',
          explanation: 'Angka yang hilang adalah 6.',
        },
      ];

    case 3:
      return [
        {
          id: `6A-3-1`,
          question: 'Hitung berapa banyak titik hitam di bawah ini:',
          subtitle: 'Membilang kuantitas 6 sampai 10',
          visualDots: 7,
          type: 'number',
          correctAnswer: '7',
          explanation: 'Terdapat 7 titik hitam.',
          workedExample: 'Model StepUp Math 6A: Pengenalan bilangan 7 sampai 10 secara runtut.',
          stepByStepGuide: [
            'Langkah 1: Hitung kelompok 5 titik pertama.',
            'Langkah 2: Tambahkan 2 titik berikutnya: 5 + 2 = 7.',
            'Langkah 3: Tuliskan angka 7.',
          ],
        },
        {
          id: `6A-3-2`,
          question: 'Hitung jumlah titik berikut:',
          visualDots: 8,
          type: 'number',
          correctAnswer: '8',
          explanation: 'Ada 8 titik hitam.',
        },
        {
          id: `6A-3-3`,
          question: 'Hitung jumlah titik berikut:',
          visualDots: 9,
          type: 'number',
          correctAnswer: '9',
          explanation: 'Ada 9 titik hitam.',
        },
        {
          id: `6A-3-4`,
          question: 'Hitung jumlah titik berikut:',
          visualDots: 10,
          type: 'number',
          correctAnswer: '10',
          explanation: 'Ada 10 titik hitam lengkap.',
        },
        {
          id: `6A-3-5`,
          question: 'Berapakah angka setelah 7?',
          type: 'number',
          correctAnswer: '8',
          explanation: 'Setelah angka 7 adalah 8.',
        },
        {
          id: `6A-3-6`,
          question: 'Berapakah angka setelah 9?',
          type: 'number',
          correctAnswer: '10',
          explanation: 'Setelah angka 9 adalah 10.',
        },
        {
          id: `6A-3-7`,
          question: 'Lengkapi urutan bilangan: 6, 7, [ ? ], 9, 10',
          type: 'number',
          correctAnswer: '8',
          explanation: 'Angka di antara 7 dan 9 adalah 8.',
        },
        {
          id: `6A-3-8`,
          question: 'Berapakah angka sebelum 10?',
          type: 'number',
          correctAnswer: '9',
          explanation: 'Angka tepat sebelum 10 adalah 9.',
        },
        {
          id: `6A-3-9`,
          question: 'Manakah yang lebih besar: 9 atau 6?',
          type: 'choice',
          options: ['9', '6'],
          correctAnswer: '9',
          explanation: '9 lebih besar daripada 6.',
        },
        {
          id: `6A-3-10`,
          question: 'Lengkapi urutan: 7, 8, 9, [ ? ]',
          type: 'number',
          correctAnswer: '10',
          explanation: 'Setelah 9 adalah 10.',
        },
      ];

    case 4:
      return [
        {
          id: `6A-4-1`,
          question: 'Lengkapi urutan bilangan: 1, [ ? ], 3, 4',
          subtitle: 'Penguasaan urutan maju 1-10',
          type: 'number',
          correctAnswer: '2',
          explanation: 'Setelah 1 adalah 2.',
          workedExample: 'Model StepUp Math 6A: Menemukan bilangan yang hilang pada deret angka.',
          stepByStepGuide: [
            'Langkah 1: Perhatikan barisan: 1, lalu kosong, lalu 3.',
            'Langkah 2: Di antara 1 dan 3 terdapat angka 2.',
            'Langkah 3: Jawab 2.',
          ],
        },
        {
          id: `6A-4-2`,
          question: 'Lengkapi urutan bilangan: 3, 4, [ ? ], 6',
          type: 'number',
          correctAnswer: '5',
          explanation: 'Setelah 4 adalah 5.',
        },
        {
          id: `6A-4-3`,
          question: 'Lengkapi urutan bilangan: 6, [ ? ], 8, 9',
          type: 'number',
          correctAnswer: '7',
          explanation: 'Di antara 6 dan 8 adalah 7.',
        },
        {
          id: `6A-4-4`,
          question: 'Lengkapi urutan bilangan: 7, 8, [ ? ], 10',
          type: 'number',
          correctAnswer: '9',
          explanation: 'Setelah 8 adalah 9.',
        },
        {
          id: `6A-4-5`,
          question: 'Hitung berapa banyak titik hitam:',
          visualDots: 6,
          type: 'number',
          correctAnswer: '6',
          explanation: 'Ada 6 titik.',
        },
        {
          id: `6A-4-6`,
          question: 'Hitung berapa banyak titik hitam:',
          visualDots: 9,
          type: 'number',
          correctAnswer: '9',
          explanation: 'Ada 9 titik.',
        },
        {
          id: `6A-4-7`,
          question: 'Angka berapakah yang berada tepat di antara 4 dan 6?',
          type: 'number',
          correctAnswer: '5',
          explanation: 'Di antara 4 dan 6 adalah 5.',
        },
        {
          id: `6A-4-8`,
          question: 'Angka berapakah yang berada tepat di antara 8 dan 10?',
          type: 'number',
          correctAnswer: '9',
          explanation: 'Di antara 8 dan 10 adalah 9.',
        },
        {
          id: `6A-4-9`,
          question: 'Manakah kumpulan bilangan yang nilainya paling besar?',
          type: 'choice',
          options: ['4', '7', '10', '5'],
          correctAnswer: '10',
          explanation: '10 adalah nilai paling besar.',
        },
        {
          id: `6A-4-10`,
          question: 'Berapakah angka sebelum 8?',
          type: 'number',
          correctAnswer: '7',
          explanation: 'Angka sebelum 8 adalah 7.',
        },
      ];

    case 5:
    default:
      return [
        {
          id: `6A-5-1`,
          question: 'Lengkapi deret bilangan berikut: 1, 2, 3, 4, [ ? ], 6, 7, 8, 9, 10',
          subtitle: 'Evaluasi & Mastery Angka 1-10',
          type: 'number',
          correctAnswer: '5',
          explanation: 'Angka yang tepat mengisi titik-titik adalah 5.',
          workedExample: 'Model StepUp Math 6A: Penguasaan penuh membaca dan menghubungkan angka 1 s/d 10.',
          stepByStepGuide: [
            'Langkah 1: Baca barisan bilangan secara urut dari 1.',
            'Langkah 2: Setelah 4, bilangan berikutnya adalah 5.',
            'Langkah 3: Lanjutkan ke 6 untuk memverifikasi kebenaran.',
          ],
        },
        {
          id: `6A-5-2`,
          question: 'Hitung total titik di bawah ini:',
          visualDots: 8,
          type: 'number',
          correctAnswer: '8',
          explanation: 'Ada 8 titik.',
        },
        {
          id: `6A-5-3`,
          question: 'Hitung total titik di bawah ini:',
          visualDots: 10,
          type: 'number',
          correctAnswer: '10',
          explanation: 'Ada 10 titik.',
        },
        {
          id: `6A-5-4`,
          question: 'Lengkapi urutan: 5, 6, [ ? ], 8',
          type: 'number',
          correctAnswer: '7',
          explanation: 'Di antara 6 dan 8 adalah 7.',
        },
        {
          id: `6A-5-5`,
          question: 'Berapakah angka yang berada tepat SEBELUM angka 7?',
          type: 'number',
          correctAnswer: '6',
          explanation: 'Sebelum 7 adalah 6.',
        },
        {
          id: `6A-5-6`,
          question: 'Berapakah angka yang berada tepat SESUDAH angka 8?',
          type: 'number',
          correctAnswer: '9',
          explanation: 'Setelah 8 adalah 9.',
        },
        {
          id: `6A-5-7`,
          question: 'Lengkapi urutan: [ ? ], 2, 3, 4',
          type: 'number',
          correctAnswer: '1',
          explanation: 'Angka awal adalah 1.',
        },
        {
          id: `6A-5-8`,
          question: 'Lengkapi urutan: 7, 8, 9, [ ? ]',
          type: 'number',
          correctAnswer: '10',
          explanation: 'Setelah 9 adalah 10.',
        },
        {
          id: `6A-5-9`,
          question: 'Urutkan dari yang paling kecil: 6, 2, 9. Manakah yang paling kecil?',
          type: 'choice',
          options: ['6', '2', '9'],
          correctAnswer: '2',
          explanation: '2 adalah yang paling kecil.',
        },
        {
          id: `6A-5-10`,
          question: 'Berapakah jumlah titik pada dua kelompok: 4 titik dan 1 titik?',
          type: 'number',
          correctAnswer: '5',
          explanation: '4 + 1 = 5.',
        },
      ];
  }
};

// ==========================================
// 5A: MEMBACA & MENULIS ANGKA (1 - 50)
// ==========================================
export const get5AProblems = (set: number): ProblemItem[] => {
  const safeSet = Math.max(1, Math.min(5, set));

  switch (safeSet) {
    case 1:
      return [
        {
          id: `5A-1-1`,
          question: 'Lengkapi urutan bilangan berikut: 11, 12, 13, [ ? ], 15',
          subtitle: 'Bilangan 11 sampai 20',
          type: 'number',
          correctAnswer: '14',
          explanation: 'Setelah 13 adalah 14.',
          workedExample: 'Model StepUp Math 5A: Membaca deret bilangan bertambah 1 (+1).',
          stepByStepGuide: [
            'Langkah 1: Perhatikan pola 11, 12, 13 yang selalu bertambah 1.',
            'Langkah 2: 13 + 1 = 14.',
            'Langkah 3: Periksa 14 + 1 = 15. Jawab 14.',
          ],
        },
        {
          id: `5A-1-2`,
          question: 'Berapakah angka yang berada tepat SEBELUM angka 17?',
          type: 'number',
          correctAnswer: '16',
          explanation: 'Sebelum 17 adalah 16.',
        },
        {
          id: `5A-1-3`,
          question: 'Berapakah angka yang berada tepat SESUDAH angka 18?',
          type: 'number',
          correctAnswer: '19',
          explanation: 'Setelah 18 adalah 19.',
        },
        {
          id: `5A-1-4`,
          question: 'Lengkapi urutan bilangan: 15, 16, [ ? ], 18, 19',
          type: 'number',
          correctAnswer: '17',
          explanation: 'Di antara 16 dan 18 adalah 17.',
        },
        {
          id: `5A-1-5`,
          question: 'Berapakah angka sebelum 20?',
          type: 'number',
          correctAnswer: '19',
          explanation: 'Sebelum 20 adalah 19.',
        },
        {
          id: `5A-1-6`,
          question: 'Lengkapi urutan: 17, 18, 19, [ ? ]',
          type: 'number',
          correctAnswer: '20',
          explanation: 'Setelah 19 adalah 20.',
        },
        {
          id: `5A-1-7`,
          question: 'Pilihlah bilangan yang lebih besar: 16 atau 19?',
          type: 'choice',
          options: ['16', '19'],
          correctAnswer: '19',
          explanation: '19 lebih besar dari 16.',
        },
        {
          id: `5A-1-8`,
          question: 'Lengkapi angka yang hilang: [ ? ], 12, 13, 14',
          type: 'number',
          correctAnswer: '11',
          explanation: 'Angka sebelum 12 adalah 11.',
        },
        {
          id: `5A-1-9`,
          question: 'Angka di antara 13 dan 15 adalah:',
          type: 'number',
          correctAnswer: '14',
          explanation: 'Di antara 13 dan 15 adalah 14.',
        },
        {
          id: `5A-1-10`,
          question: 'Lengkapi deret: 10, 12, 14, [ ? ]',
          type: 'number',
          correctAnswer: '16',
          explanation: 'Pola lompat 2: 14 + 2 = 16.',
        },
      ];

    case 2:
      return [
        {
          id: `5A-2-1`,
          question: 'Lengkapi urutan bilangan berikut: 21, 22, 23, [ ? ], 25',
          subtitle: 'Bilangan 21 sampai 30',
          type: 'number',
          correctAnswer: '24',
          explanation: 'Setelah 23 adalah 24.',
          workedExample: 'Model StepUp Math 5A: Membaca dan melengkapi deret angka kepala dua puluh.',
          stepByStepGuide: [
            'Langkah 1: Perhatikan barisan 21, 22, 23.',
            'Langkah 2: Tambahkan 1 ke 23: 23 + 1 = 24.',
            'Langkah 3: Tuliskan jawaban 24.',
          ],
        },
        {
          id: `5A-2-2`,
          question: 'Berapakah angka yang berada tepat SEBELUM angka 28?',
          type: 'number',
          correctAnswer: '27',
          explanation: 'Sebelum 28 adalah 27.',
        },
        {
          id: `5A-2-3`,
          question: 'Berapakah angka yang berada tepat SESUDAH angka 29?',
          type: 'number',
          correctAnswer: '30',
          explanation: 'Setelah 29 adalah 30.',
        },
        {
          id: `5A-2-4`,
          question: 'Lengkapi deret bilangan: 24, 25, [ ? ], 27, 28',
          type: 'number',
          correctAnswer: '26',
          explanation: 'Di antara 25 dan 27 adalah 26.',
        },
        {
          id: `5A-2-5`,
          question: 'Lengkapi urutan: 26, 27, 28, [ ? ], 30',
          type: 'number',
          correctAnswer: '29',
          explanation: 'Setelah 28 adalah 29.',
        },
        {
          id: `5A-2-6`,
          question: 'Berapakah angka sebelum 25?',
          type: 'number',
          correctAnswer: '24',
          explanation: 'Sebelum 25 adalah 24.',
        },
        {
          id: `5A-2-7`,
          question: 'Pilihlah bilangan yang paling besar:',
          type: 'choice',
          options: ['23', '29', '26', '21'],
          correctAnswer: '29',
          explanation: '29 adalah yang terbesar.',
        },
        {
          id: `5A-2-8`,
          question: 'Lengkapi deret puluhan: 10, 20, [ ? ], 40, 50',
          type: 'number',
          correctAnswer: '30',
          explanation: 'Kelipatan 10: setelah 20 adalah 30.',
        },
        {
          id: `5A-2-9`,
          question: 'Angka di antara 22 dan 24 adalah:',
          type: 'number',
          correctAnswer: '23',
          explanation: 'Di antara 22 dan 24 adalah 23.',
        },
        {
          id: `5A-2-10`,
          question: 'Lengkapi urutan: 27, 28, [ ? ], 30',
          type: 'number',
          correctAnswer: '29',
          explanation: 'Setelah 28 adalah 29.',
        },
      ];

    case 3:
      return [
        {
          id: `5A-3-1`,
          question: 'Lengkapi urutan bilangan berikut: 31, 32, 33, [ ? ], 35',
          subtitle: 'Bilangan 31 sampai 40',
          type: 'number',
          correctAnswer: '34',
          explanation: 'Setelah 33 adalah 34.',
          workedExample: 'Model StepUp Math 5A: Membaca deret bilangan kepala tiga puluh.',
          stepByStepGuide: [
            'Langkah 1: Perhatikan urutan 31, 32, 33.',
            'Langkah 2: Bilangan berikutnya adalah 34.',
            'Langkah 3: 34 dilanjutkan oleh 35.',
          ],
        },
        {
          id: `5A-3-2`,
          question: 'Berapakah angka yang berada tepat SEBELUM angka 39?',
          type: 'number',
          correctAnswer: '38',
          explanation: 'Sebelum 39 adalah 38.',
        },
        {
          id: `5A-3-3`,
          question: 'Berapakah angka tepat SESUDAH angka 39?',
          type: 'number',
          correctAnswer: '40',
          explanation: 'Setelah 39 adalah 40.',
        },
        {
          id: `5A-3-4`,
          question: 'Lengkapi deret: 33, 34, [ ? ], 36, 37',
          type: 'number',
          correctAnswer: '35',
          explanation: 'Di antara 34 dan 36 adalah 35.',
        },
        {
          id: `5A-3-5`,
          question: 'Berapakah angka sebelum 33?',
          type: 'number',
          correctAnswer: '32',
          explanation: 'Sebelum 33 adalah 32.',
        },
        {
          id: `5A-3-6`,
          question: 'Lengkapi urutan: 36, 37, 38, [ ? ], 40',
          type: 'number',
          correctAnswer: '39',
          explanation: 'Setelah 38 adalah 39.',
        },
        {
          id: `5A-3-7`,
          question: 'Pilihlah bilangan terkecil di antara pilihan berikut:',
          type: 'choice',
          options: ['35', '31', '38', '33'],
          correctAnswer: '31',
          explanation: '31 adalah yang terkecil.',
        },
        {
          id: `5A-3-8`,
          question: 'Lengkapi deret: 30, 32, 34, [ ? ]',
          type: 'number',
          correctAnswer: '36',
          explanation: 'Pola lompat 2: 34 + 2 = 36.',
        },
        {
          id: `5A-3-9`,
          question: 'Angka di antara 37 dan 39 adalah:',
          type: 'number',
          correctAnswer: '38',
          explanation: 'Di antara 37 dan 39 adalah 38.',
        },
        {
          id: `5A-3-10`,
          question: 'Hitung mundur 1 langkah dari 40:',
          type: 'number',
          correctAnswer: '39',
          explanation: '40 - 1 = 39.',
        },
      ];

    case 4:
      return [
        {
          id: `5A-4-1`,
          question: 'Lengkapi urutan bilangan berikut: 41, 42, [ ? ], 44, 45',
          subtitle: 'Bilangan 41 sampai 50',
          type: 'number',
          correctAnswer: '43',
          explanation: 'Di antara 42 dan 44 adalah 43.',
          workedExample: 'Model StepUp Math 5A: Membaca deret bilangan kepala empat puluh hingga lima puluh.',
          stepByStepGuide: [
            'Langkah 1: Perhatikan pola 41, 42, lompat 1 menjadi 43.',
            'Langkah 2: Dari 43 lanjut ke 44 dan 45.',
            'Langkah 3: Jawab 43.',
          ],
        },
        {
          id: `5A-4-2`,
          question: 'Berapakah angka yang berada tepat SEBELUM angka 47?',
          type: 'number',
          correctAnswer: '46',
          explanation: 'Sebelum 47 adalah 46.',
        },
        {
          id: `5A-4-3`,
          question: 'Berapakah angka tepat SESUDAH angka 49?',
          type: 'number',
          correctAnswer: '50',
          explanation: 'Setelah 49 adalah 50.',
        },
        {
          id: `5A-4-4`,
          question: 'Lengkapi urutan: 45, 46, 47, [ ? ], 49',
          type: 'number',
          correctAnswer: '48',
          explanation: 'Di antara 47 dan 49 adalah 48.',
        },
        {
          id: `5A-4-5`,
          question: 'Berapakah angka sebelum 50?',
          type: 'number',
          correctAnswer: '49',
          explanation: 'Sebelum 50 adalah 49.',
        },
        {
          id: `5A-4-6`,
          question: 'Lengkapi deret: 42, 44, 46, [ ? ], 50',
          type: 'number',
          correctAnswer: '48',
          explanation: 'Pola lompat 2: 46 + 2 = 48.',
        },
        {
          id: `5A-4-7`,
          question: 'Pilihlah bilangan terbesar:',
          type: 'choice',
          options: ['48', '43', '50', '47'],
          correctAnswer: '50',
          explanation: '50 adalah bilangan terbesar.',
        },
        {
          id: `5A-4-8`,
          question: 'Angka di antara 44 dan 46 adalah:',
          type: 'number',
          correctAnswer: '45',
          explanation: 'Di antara 44 dan 46 adalah 45.',
        },
        {
          id: `5A-4-9`,
          question: 'Lengkapi urutan: [ ? ], 48, 49, 50',
          type: 'number',
          correctAnswer: '47',
          explanation: 'Sebelum 48 adalah 47.',
        },
        {
          id: `5A-4-10`,
          question: 'Hitung mundur 2 langkah dari 50:',
          type: 'number',
          correctAnswer: '48',
          explanation: '50 - 2 = 48.',
        },
      ];

    case 5:
    default:
      return [
        {
          id: `5A-5-1`,
          question: 'Lengkapi urutan bilangan: 10, 20, 30, [ ? ], 50',
          subtitle: 'Penguasaan Penuh Bilangan 1-50',
          type: 'number',
          correctAnswer: '40',
          explanation: 'Kelipatan 10: setelah 30 adalah 40.',
          workedExample: 'Model StepUp Math 5A: Penguasaan barisan kelipatan puluhan.',
          stepByStepGuide: [
            'Langkah 1: Perhatikan pola pertambahan sepuluh (+10).',
            'Langkah 2: 30 + 10 = 40.',
            'Langkah 3: Verifikasi 40 + 10 = 50.',
          ],
        },
        {
          id: `5A-5-2`,
          question: 'Lengkapi urutan bilangan: 27, 28, [ ? ], 30, 31',
          type: 'number',
          correctAnswer: '29',
          explanation: 'Setelah 28 adalah 29.',
        },
        {
          id: `5A-5-3`,
          question: 'Berapakah angka sebelum 31?',
          type: 'number',
          correctAnswer: '30',
          explanation: 'Sebelum 31 adalah 30.',
        },
        {
          id: `5A-5-4`,
          question: 'Lengkapi urutan bilangan: 38, 39, [ ? ], 41, 42',
          type: 'number',
          correctAnswer: '40',
          explanation: 'Setelah 39 adalah 40.',
        },
        {
          id: `5A-5-5`,
          question: 'Berapakah angka tepat SESUDAH angka 44?',
          type: 'number',
          correctAnswer: '45',
          explanation: 'Setelah 44 adalah 45.',
        },
        {
          id: `5A-5-6`,
          question: 'Lengkapi deret: 46, 47, 48, 49, [ ? ]',
          type: 'number',
          correctAnswer: '50',
          explanation: 'Setelah 49 adalah 50.',
        },
        {
          id: `5A-5-7`,
          question: 'Di antara 19 dan 21 adalah angka:',
          type: 'number',
          correctAnswer: '20',
          explanation: 'Di antara 19 dan 21 adalah 20.',
        },
        {
          id: `5A-5-8`,
          question: 'Lengkapi deret lompat 5: 5, 10, 15, 20, [ ? ]',
          type: 'number',
          correctAnswer: '25',
          explanation: '20 + 5 = 25.',
        },
        {
          id: `5A-5-9`,
          question: 'Pilihlah bilangan yang bernilai paling besar:',
          type: 'choice',
          options: ['39', '49', '29', '41'],
          correctAnswer: '49',
          explanation: '49 adalah yang terbesar.',
        },
        {
          id: `5A-5-10`,
          question: 'Lengkapi deret mundur: 50, 49, 48, [ ? ]',
          type: 'number',
          correctAnswer: '47',
          explanation: '48 - 1 = 47.',
        },
      ];
  }
};

// ==========================================
// 4A: ANGKA 1 - 100 & PENJUMLAHAN +1, +2
// ==========================================
export const get4AProblems = (set: number): ProblemItem[] => {
  const safeSet = Math.max(1, Math.min(5, set));

  switch (safeSet) {
    case 1:
      return [
        {
          id: `4A-1-1`,
          question: '1 + 1 = ?',
          subtitle: 'Konsep Dasar Penjumlahan +1 (Bilangan 1-10)',
          type: 'number',
          correctAnswer: '2',
          explanation: '1 + 1 = 2.',
          workedExample: 'Model StepUp Math 4A: Penjumlahan satu (+1) sama dengan melangkah satu kali ke angka berikutnya.',
          stepByStepGuide: [
            'Langkah 1: Mulai dari angka 1.',
            'Langkah 2: Melangkah 1 angka ke depan: 2.',
            'Langkah 3: Jawaban adalah 2.',
          ],
        },
        {
          id: `4A-1-2`,
          question: '2 + 1 = ?',
          type: 'number',
          correctAnswer: '3',
          explanation: '2 + 1 = 3.',
        },
        {
          id: `4A-1-3`,
          question: '3 + 1 = ?',
          type: 'number',
          correctAnswer: '4',
          explanation: '3 + 1 = 4.',
        },
        {
          id: `4A-1-4`,
          question: '4 + 1 = ?',
          type: 'number',
          correctAnswer: '5',
          explanation: '4 + 1 = 5.',
        },
        {
          id: `4A-1-5`,
          question: '5 + 1 = ?',
          type: 'number',
          correctAnswer: '6',
          explanation: '5 + 1 = 6.',
        },
        {
          id: `4A-1-6`,
          question: '6 + 1 = ?',
          type: 'number',
          correctAnswer: '7',
          explanation: '6 + 1 = 7.',
        },
        {
          id: `4A-1-7`,
          question: '7 + 1 = ?',
          type: 'number',
          correctAnswer: '8',
          explanation: '7 + 1 = 8.',
        },
        {
          id: `4A-1-8`,
          question: '8 + 1 = ?',
          type: 'number',
          correctAnswer: '9',
          explanation: '8 + 1 = 9.',
        },
        {
          id: `4A-1-9`,
          question: '9 + 1 = ?',
          type: 'number',
          correctAnswer: '10',
          explanation: '9 + 1 = 10.',
        },
        {
          id: `4A-1-10`,
          question: '10 + 1 = ?',
          type: 'number',
          correctAnswer: '11',
          explanation: '10 + 1 = 11.',
        },
      ];

    case 2:
      return [
        {
          id: `4A-2-1`,
          question: '12 + 1 = ?',
          subtitle: 'Penjumlahan +1 pada Belasan & Puluhan',
          type: 'number',
          correctAnswer: '13',
          explanation: '12 + 1 = 13.',
          workedExample: 'Model StepUp Math 4A: Menghitung cepat n + 1 pada bilangan belasan.',
          stepByStepGuide: [
            'Langkah 1: Angka setelah 12 adalah 13.',
            'Langkah 2: 12 + 1 = 13.',
          ],
        },
        {
          id: `4A-2-2`,
          question: '15 + 1 = ?',
          type: 'number',
          correctAnswer: '16',
          explanation: '15 + 1 = 16.',
        },
        {
          id: `4A-2-3`,
          question: '19 + 1 = ?',
          type: 'number',
          correctAnswer: '20',
          explanation: '19 + 1 = 20.',
        },
        {
          id: `4A-2-4`,
          question: '24 + 1 = ?',
          type: 'number',
          correctAnswer: '25',
          explanation: '24 + 1 = 25.',
        },
        {
          id: `4A-2-5`,
          question: '29 + 1 = ?',
          type: 'number',
          correctAnswer: '30',
          explanation: '29 + 1 = 30.',
        },
        {
          id: `4A-2-6`,
          question: '35 + 1 = ?',
          type: 'number',
          correctAnswer: '36',
          explanation: '35 + 1 = 36.',
        },
        {
          id: `4A-2-7`,
          question: '49 + 1 = ?',
          type: 'number',
          correctAnswer: '50',
          explanation: '49 + 1 = 50.',
        },
        {
          id: `4A-2-8`,
          question: '68 + 1 = ?',
          type: 'number',
          correctAnswer: '69',
          explanation: '68 + 1 = 69.',
        },
        {
          id: `4A-2-9`,
          question: '79 + 1 = ?',
          type: 'number',
          correctAnswer: '80',
          explanation: '79 + 1 = 80.',
        },
        {
          id: `4A-2-10`,
          question: '99 + 1 = ?',
          type: 'number',
          correctAnswer: '100',
          explanation: '99 + 1 = 100.',
        },
      ];

    case 3:
      return [
        {
          id: `4A-3-1`,
          question: '1 + 2 = ?',
          subtitle: 'Pengenalan Penjumlahan +2 (Lompat Dua)',
          type: 'number',
          correctAnswer: '3',
          explanation: '1 + 2 = 3.',
          workedExample: 'Model StepUp Math 4A: Operasi +2 berarti melangkah 2 angka ke depan.',
          stepByStepGuide: [
            'Langkah 1: Mulai dari angka 1.',
            'Langkah 2: Hitung maju 2 langkah: 2, 3.',
            'Langkah 3: Hasil akhirnya adalah 3.',
          ],
        },
        {
          id: `4A-3-2`,
          question: '2 + 2 = ?',
          type: 'number',
          correctAnswer: '4',
          explanation: '2 + 2 = 4.',
        },
        {
          id: `4A-3-3`,
          question: '3 + 2 = ?',
          type: 'number',
          correctAnswer: '5',
          explanation: '3 + 2 = 5.',
        },
        {
          id: `4A-3-4`,
          question: '4 + 2 = ?',
          type: 'number',
          correctAnswer: '6',
          explanation: '4 + 2 = 6.',
        },
        {
          id: `4A-3-5`,
          question: '5 + 2 = ?',
          type: 'number',
          correctAnswer: '7',
          explanation: '5 + 2 = 7.',
        },
        {
          id: `4A-3-6`,
          question: '6 + 2 = ?',
          type: 'number',
          correctAnswer: '8',
          explanation: '6 + 2 = 8.',
        },
        {
          id: `4A-3-7`,
          question: '7 + 2 = ?',
          type: 'number',
          correctAnswer: '9',
          explanation: '7 + 2 = 9.',
        },
        {
          id: `4A-3-8`,
          question: '8 + 2 = ?',
          type: 'number',
          correctAnswer: '10',
          explanation: '8 + 2 = 10.',
        },
        {
          id: `4A-3-9`,
          question: '9 + 2 = ?',
          type: 'number',
          correctAnswer: '11',
          explanation: '9 + 2 = 11.',
        },
        {
          id: `4A-3-10`,
          question: '10 + 2 = ?',
          type: 'number',
          correctAnswer: '12',
          explanation: '10 + 2 = 12.',
        },
      ];

    case 4:
      return [
        {
          id: `4A-4-1`,
          question: '12 + 2 = ?',
          subtitle: 'Penjumlahan +2 pada Belasan & Puluhan',
          type: 'number',
          correctAnswer: '14',
          explanation: '12 + 2 = 14.',
          workedExample: 'Model StepUp Math 4A: Melangkah 2 hitungan dari bilangan belasan.',
          stepByStepGuide: [
            'Langkah 1: Dari 12, hitung maju 2 angka: 13, 14.',
            'Langkah 2: Hasilnya adalah 14.',
          ],
        },
        {
          id: `4A-4-2`,
          question: '14 + 2 = ?',
          type: 'number',
          correctAnswer: '16',
          explanation: '14 + 2 = 16.',
        },
        {
          id: `4A-4-3`,
          question: '17 + 2 = ?',
          type: 'number',
          correctAnswer: '19',
          explanation: '17 + 2 = 19.',
        },
        {
          id: `4A-4-4`,
          question: '18 + 2 = ?',
          type: 'number',
          correctAnswer: '20',
          explanation: '18 + 2 = 20.',
        },
        {
          id: `4A-4-5`,
          question: '25 + 2 = ?',
          type: 'number',
          correctAnswer: '27',
          explanation: '25 + 2 = 27.',
        },
        {
          id: `4A-4-6`,
          question: '28 + 2 = ?',
          type: 'number',
          correctAnswer: '30',
          explanation: '28 + 2 = 30.',
        },
        {
          id: `4A-4-7`,
          question: '39 + 2 = ?',
          type: 'number',
          correctAnswer: '41',
          explanation: '39 + 2 = 41.',
        },
        {
          id: `4A-4-8`,
          question: '48 + 2 = ?',
          type: 'number',
          correctAnswer: '50',
          explanation: '48 + 2 = 50.',
        },
        {
          id: `4A-4-9`,
          question: '67 + 2 = ?',
          type: 'number',
          correctAnswer: '69',
          explanation: '67 + 2 = 69.',
        },
        {
          id: `4A-4-10`,
          question: '88 + 2 = ?',
          type: 'number',
          correctAnswer: '90',
          explanation: '88 + 2 = 90.',
        },
      ];

    case 5:
    default:
      return [
        {
          id: `4A-5-1`,
          question: '15 + 1 = ?',
          subtitle: 'Campuran Kecepatan +1 dan +2',
          type: 'number',
          correctAnswer: '16',
          explanation: '15 + 1 = 16.',
          workedExample: 'Model StepUp Math 4A: Penguasaan otomatis penjumlahan dasar +1 dan +2.',
          stepByStepGuide: [
            'Langkah 1: Perhatikan tanda operasi (+1).',
            'Langkah 2: Tambahkan 1 ke 15: 16.',
          ],
        },
        {
          id: `4A-5-2`,
          question: '15 + 2 = ?',
          type: 'number',
          correctAnswer: '17',
          explanation: '15 + 2 = 17.',
        },
        {
          id: `4A-5-3`,
          question: '23 + 1 = ?',
          type: 'number',
          correctAnswer: '24',
          explanation: '23 + 1 = 24.',
        },
        {
          id: `4A-5-4`,
          question: '23 + 2 = ?',
          type: 'number',
          correctAnswer: '25',
          explanation: '23 + 2 = 25.',
        },
        {
          id: `4A-5-5`,
          question: '39 + 1 = ?',
          type: 'number',
          correctAnswer: '40',
          explanation: '39 + 1 = 40.',
        },
        {
          id: `4A-5-6`,
          question: '39 + 2 = ?',
          type: 'number',
          correctAnswer: '41',
          explanation: '39 + 2 = 41.',
        },
        {
          id: `4A-5-7`,
          question: '58 + 2 = ?',
          type: 'number',
          correctAnswer: '60',
          explanation: '58 + 2 = 60.',
        },
        {
          id: `4A-5-8`,
          question: '79 + 1 = ?',
          type: 'number',
          correctAnswer: '80',
          explanation: '79 + 1 = 80.',
        },
        {
          id: `4A-5-9`,
          question: '89 + 2 = ?',
          type: 'number',
          correctAnswer: '91',
          explanation: '89 + 2 = 91.',
        },
        {
          id: `4A-5-10`,
          question: '98 + 2 = ?',
          type: 'number',
          correctAnswer: '100',
          explanation: '98 + 2 = 100.',
        },
      ];
  }
};
