import React, { useRef } from 'react';
import { StudentProfile, KumonLevelId } from '../types';
import { KUMON_LEVELS } from '../data/levelsData';
import { LoginModal } from './LoginModal';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
  TrendingUp,
  Clock,
  BookOpen,
  Layers,
  Zap,
  FileText,
  Star,
  GraduationCap,
  Target,
  PenTool,
  MessageSquareQuote,
  Flame,
  Check,
} from 'lucide-react';

interface HomeLandingProps {
  onLoginSuccess: (profile: StudentProfile, isNewUser: boolean) => void;
  onTrialLogin: () => void;
}

export const HomeLanding: React.FC<HomeLandingProps> = ({
  onLoginSuccess,
  onTrialLogin,
}) => {
  const loginSectionRef = useRef<HTMLDivElement>(null);

  const scrollToLogin = () => {
    loginSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const curriculumCategories = [
    {
      title: 'Pra-Sekolah (Pre-School)',
      levels: 'Level 6A s/d 4A',
      color: 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800/60',
      badge: 'Level 6A - 4A',
      desc: 'Mengenal angka 1-100, mencocokkan jumlah titik visual, menulis pola bilangan, dan persiapan awal berhitung.',
    },
    {
      title: 'Dasar Aritmatika 1',
      levels: 'Level 3A s/d A',
      color: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/60',
      badge: 'Level 3A - A',
      desc: 'Penguasaan penjumlahan bertahap (+1 hingga +10), pengurangan dasar, dan fondasi fakta angka cepat.',
    },
    {
      title: 'Dasar Aritmatika 2',
      levels: 'Level B s/d D',
      color: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60',
      badge: 'Level B - D',
      desc: 'Penjumlahan bersusun, perkalian dasar hingga bersusun, pembagian dengan sisa, dan operasi pecahan dasar.',
    },
    {
      title: 'Matematika Menengah',
      levels: 'Level E s/d G',
      color: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800/60',
      badge: 'Level E - G',
      desc: 'Pecahan lanjut 4 operasi, desimal, operasi bilangan bulat positif-negatif, dan aljabar linear pengantar.',
    },
    {
      title: 'Aljabar & Fungsi Lanjutan',
      levels: 'Level H s/d J',
      color: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800/60',
      badge: 'Level H - J',
      desc: 'Sistem persamaan linear (SPLDV), persamaan kuadrat, pemfaktoran aljabar, fungsi kuadrat, dan teorema sisa.',
    },
    {
      title: 'Matematika Tinggi (SMA/Kalkulus)',
      levels: 'Level K s/d M',
      color: 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800/60',
      badge: 'Level K - M',
      desc: 'Fungsi trigonometri, eksponen, logaritma, limit, turunan (diferensial), integral tentu/tak tentu, dan matriks.',
    },
  ];

  return (
    <div className="w-full space-y-12 pb-12">
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden pt-6 sm:pt-10 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Compelling Marketing Copy */}
          <div className="lg:col-span-7 space-y-5 text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
              <span>Platform Belajar Mandiri Matematika Berjenjang #1</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
              Kuasai Matematika Secara Mandiri, Cepat, dan Percaya Diri dengan{' '}
              <span className="text-indigo-600 dark:text-indigo-400">StepUp Math</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              Metode kurikulum berjenjang 18 level (<strong>Level 6A s/d M</strong>) dirancang untuk membangun kemandirian berpikir matematis dari tingkat usia dini hingga kalkulus SMA. Mulai dari titik kemampuan awal anak tanpa beban.
            </p>

            {/* Core Value Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Pre-Test Diagnostik Level Otomatis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>10 Soal Berjenjang Penguasaan Mandiri</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Target Standar Waktu Pengerjaan (SCT)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Catatan Refleksi Belajar Harian</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="btn-hero-trial"
                type="button"
                onClick={onTrialLogin}
                className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Coba Diagnostik Gratis (Trial)</span>
              </button>

              <button
                id="btn-hero-login"
                type="button"
                onClick={scrollToLogin}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Masuk Siswa / Guru</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Trust Counters */}
            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-200 dark:border-slate-800 text-center font-mono">
              <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="block text-base sm:text-lg font-black text-indigo-600 dark:text-indigo-400">18 Level</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">6A s/d Level M</span>
              </div>
              <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="block text-base sm:text-lg font-black text-emerald-600 dark:text-emerald-400">90+ LKS</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">Lembar Kerja Interaktif</span>
              </div>
              <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="block text-base sm:text-lg font-black text-purple-600 dark:text-purple-400">100%</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">Belajar Mandiri</span>
              </div>
            </div>
          </div>

          {/* Right Column: Portal Login Card Box */}
          <div ref={loginSectionRef} className="lg:col-span-5 flex justify-center">
            <LoginModal
              onLoginSuccess={onLoginSuccess}
              onTrialLogin={onTrialLogin}
            />
          </div>
        </div>
      </section>

      {/* --- VALUE PILLARS & FEATURES SECTION --- */}
      <section className="px-4 max-w-6xl mx-auto">
        <div className="text-center space-y-2 mb-8">
          <span className="text-[11px] font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 font-mono">
            KEUNGGULAN UTAMA
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            Mengapa StepUp Math Menjadi Solusi Terbaik?
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Dirancang dengan metodologi penguasaan tuntas (*mastery learning*) yang membuat anak tidak hanya hafal rumus, melainkan paham logika matematika secara alami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1: Diagnostic */}
          <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-2.5 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center border border-indigo-100 dark:border-indigo-900">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Tes Diagnostik Penempatan Level
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Mendiagnosis titik mulai belajar (*just-right level*) secara otomatis. Siswa memulai dari level yang nyaman untuk membangun rasa percaya diri dan antusiasme belajar.
            </p>
          </div>

          {/* Card 2: 10 Soal Berjenjang */}
          <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-2.5 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-100 dark:border-emerald-900">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              10 Soal Berjenjang Penguasaan Mandiri
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Tiap lembar kerja terdiri dari 10 soal dengan tingkat kesulitan bertahap, melatih kemandirian dan daya analisis berpikir siswa tanpa distraksi.
            </p>
          </div>

          {/* Card 3: Standar Waktu SCT */}
          <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-2.5 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center border border-amber-100 dark:border-amber-900">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Standard Completion Time (SCT)
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Melatih konsentrasi dan kecepatan berhitung mental dengan target waktu standar, menciptakan kelancaran komputasi otomatis tanpa ragu-ragu.
            </p>
          </div>

          {/* Card 4: Scratchpad Digital */}
          <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-2.5 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center border border-purple-100 dark:border-purple-900">
              <PenTool className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Papan Coret Interaktif (Scratchpad)
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Dilengkapi kanvas corat-coret digital langsung di layar untuk menghitung operasi bersusun, aljabar, dan turunan secara fleksibel tanpa kertas buram.
            </p>
          </div>

          {/* Card 5: Refleksi Belajar */}
          <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-2.5 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-pink-50 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 flex items-center justify-center border border-pink-100 dark:border-pink-900">
              <MessageSquareQuote className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Catatan Refleksi Belajar Mandiri
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Membiasakan anak menulis 1 kalimat refleksi setelah pengerjaan soal untuk menumbuhkan kesadaran diri (*metacognition*) dan pola pikir berkembang.
            </p>
          </div>

          {/* Card 6: PDF Cetak & Kunci Jawaban */}
          <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-2.5 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-100 dark:border-blue-900">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Cetak LKS Fisik A4 & Kunci Jawaban
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Guru dan orang tua dapat mengunduh serta mencetak lembar kerja standar A4 lengkap dengan lembar kunci jawaban dan langkah pengerjaan resmi.
            </p>
          </div>
        </div>
      </section>

      {/* --- 18-LEVEL CURRICULUM ROADMAP --- */}
      <section className="px-4 max-w-6xl mx-auto">
        <div className="p-5 sm:p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider font-mono">
                PETA KURIKULUM LENGKAP
              </span>
              <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                Tahapan 18 Level Belajar StepUp Math (6A - M)
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-mono">
              Dari Pra-TK hingga SMA Kelas 12
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {curriculumCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono border ${cat.color}`}>
                    {cat.badge}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">Tahap {idx + 1}</span>
                </div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                  {cat.title}
                </h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS (4 LANGKAH BELAJAR) --- */}
      <section className="px-4 max-w-6xl mx-auto">
        <div className="text-center space-y-2 mb-6">
          <span className="text-[11px] font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 font-mono">
            METODE BELAJAR
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            4 Langkah Mudah Memulai Belajar Mandiri
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-2 text-center">
            <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-black text-xs flex items-center justify-center mx-auto shadow-xs">
              1
            </div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">
              Ikuti Pre-Test
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
              Jawab beberapa pertanyaan diagnostik untuk mengidentifikasi tingkat penguasaan materi saat ini.
            </p>
          </div>

          <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-2 text-center">
            <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-black text-xs flex items-center justify-center mx-auto shadow-xs">
              2
            </div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">
              Pelajari Contoh Soal
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
              Amati panduan langkah pengerjaan pada Soal No. 1 sebelum menyelesaikan soal tantangan berikutnya.
            </p>
          </div>

          <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-2 text-center">
            <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-black text-xs flex items-center justify-center mx-auto shadow-xs">
              3
            </div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">
              Latihan 10 Soal Berwaktu
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
              Gunakan papan coret dan selesaikan lembar kerja sesuai target waktu standar SCT (skor target ≥ 80%).
            </p>
          </div>

          <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-2 text-center">
            <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-black text-xs flex items-center justify-center mx-auto shadow-xs">
              4
            </div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">
              Refleksi & Buka Level
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
              Tulis 1 kalimat catatan refleksi, evaluasi jawaban salah, dan otomatis naik ke level berikutnya.
            </p>
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION BOTTOM BANNER --- */}
      <section className="px-4 max-w-6xl mx-auto">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-950 text-white text-center space-y-4 shadow-lg border border-indigo-700/50">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-indigo-200 text-xs font-semibold backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Mulai Perjalanan Belajar Mandiri Sekarang
          </span>

          <h2 className="text-xl sm:text-3xl font-black tracking-tight max-w-xl mx-auto leading-snug">
            Bantu Anak Mencintai Matematika dengan Tingkat Kemampuan yang Tepat
          </h2>

          <p className="text-xs sm:text-sm text-indigo-200 max-w-lg mx-auto">
            Dapatkan pengalaman belajar mandiri tanpa tekanan, lengkap dengan analisis akurasi dan penghargaan sertifikat resmi.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              id="btn-cta-trial-bottom"
              type="button"
              onClick={onTrialLogin}
              className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Coba Pre-Test Gratis</span>
            </button>

            <button
              id="btn-cta-scroll-login"
              type="button"
              onClick={scrollToLogin}
              className="px-6 py-2.5 bg-white text-indigo-900 hover:bg-indigo-50 font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Masuk Akun Siswa</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
