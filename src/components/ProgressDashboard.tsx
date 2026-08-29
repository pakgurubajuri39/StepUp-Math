import React, { useState } from 'react';
import { StudentProfile, KumonLevelId } from '../types';
import { KUMON_LEVELS } from '../data/levelsData';
import {
  BarChart3,
  TrendingUp,
  Award,
  Clock,
  Flame,
  CheckCircle2,
  Calendar,
  Sparkles,
  ChevronRight,
  Printer,
} from 'lucide-react';

interface ProgressDashboardProps {
  profile: StudentProfile;
  onNavigateToLevel: (levelId: KumonLevelId) => void;
}

export const ProgressDashboard: React.FC<ProgressDashboardProps> = ({
  profile,
  onNavigateToLevel,
}) => {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'charts' | 'certificate'>('overview');

  const totalAttempts = profile.attempts.length;
  const passedAttempts = profile.attempts.filter((a) => a.passed).length;
  const totalMinutes = Math.round(
    profile.attempts.reduce((acc, a) => acc + a.timeSpentSeconds, 0) / 60
  );
  const averageScore =
    totalAttempts > 0
      ? Math.round(profile.attempts.reduce((acc, a) => acc + a.score, 0) / totalAttempts)
      : 0;

  // Level Progression list (6A to M)
  const allLevelsOrder: KumonLevelId[] = [
    '6A', '5A', '4A', '3A', '2A', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'
  ];

  // Calculate mastery per level
  const levelMastery = allLevelsOrder.map((lvl) => {
    const attempts = profile.attempts.filter((a) => a.levelId === lvl);
    const passedSets = new Set(attempts.filter((a) => a.passed).map((a) => a.setNumber)).size;
    const isUnlocked = profile.unlockedLevels.includes(lvl) || profile.role === 'admin';
    const isCurrent = profile.assignedLevel === lvl;
    const bestScore = attempts.length > 0 ? Math.max(...attempts.map((a) => a.score)) : 0;

    return {
      levelId: lvl,
      isUnlocked,
      isCurrent,
      passedSets,
      bestScore,
      isMastered: passedSets >= 5,
    };
  });

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 space-y-4">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span>Grafik & Analisis Progres Belajar</span>
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Pantau perkembangan materi matematika Kumon, akurasi, dan kecepatan berhitung SCT.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex p-0.5 bg-slate-100 dark:bg-slate-800 rounded-lg self-start sm:self-auto text-xs font-bold border border-slate-200 dark:border-slate-700">
          <button
            onClick={() => setSelectedTab('overview')}
            className={`px-3 py-1.5 rounded-md transition-all ${
              selectedTab === 'overview'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            Ringkasan
          </button>
          <button
            onClick={() => setSelectedTab('charts')}
            className={`px-3 py-1.5 rounded-md transition-all ${
              selectedTab === 'charts'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            Grafik Visual
          </button>
          <button
            onClick={() => setSelectedTab('certificate')}
            className={`px-3 py-1.5 rounded-md transition-all ${
              selectedTab === 'certificate'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            Sertifikat
          </button>
        </div>
      </div>

      {/* Metrics 4-Card Summary Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
        <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-100 dark:border-indigo-900">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-mono">
              LEVEL AKTIF
            </span>
            <span className="text-base sm:text-lg font-black text-slate-900 dark:text-white font-mono">
              Level {profile.assignedLevel}
            </span>
          </div>
        </div>

        <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-100 dark:border-emerald-900">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-mono">
              AKURASI RATA-RATA
            </span>
            <span className="text-base sm:text-lg font-black text-emerald-600 dark:text-emerald-400 font-mono">
              {averageScore}%
            </span>
          </div>
        </div>

        <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400 flex items-center justify-center shrink-0 border border-amber-100 dark:border-amber-900">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-mono">
              STREAK BELAJAR
            </span>
            <span className="text-base sm:text-lg font-black text-amber-600 dark:text-amber-400 font-mono">
              {profile.streakDays} Hari
            </span>
          </div>
        </div>

        <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-100 dark:border-indigo-900">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-mono">
              TOTAL WAKTU
            </span>
            <span className="text-base sm:text-lg font-black text-indigo-600 dark:text-indigo-400 font-mono">
              {totalMinutes} Menit
            </span>
          </div>
        </div>
      </div>

      {/* --- OVERVIEW TAB: KUMON LEVEL STAIRCASE PROGRESS --- */}
      {selectedTab === 'overview' && (
        <div className="space-y-4">
          {/* Kumon Staircase visual board */}
          <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>Peta Jenjang Kumon (Staircase Model 6A s/d M)</span>
              </h2>
              <span className="text-[11px] text-slate-500 font-mono">
                {levelMastery.filter((l) => l.isMastered).length}/18 Level Selesai
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
              {levelMastery.map((item) => {
                const lvlInfo = KUMON_LEVELS.find((l) => l.id === item.levelId);
                return (
                  <div
                    key={item.levelId}
                    onClick={() => {
                      if (item.isUnlocked) onNavigateToLevel(item.levelId);
                    }}
                    className={`p-2.5 rounded-lg border transition-all cursor-pointer flex flex-col justify-between min-h-[90px] ${
                      item.isCurrent
                        ? 'bg-indigo-50/70 dark:bg-indigo-950/60 border-indigo-500 ring-1 ring-indigo-400 shadow-xs'
                        : item.isMastered
                        ? 'bg-emerald-50/50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800'
                        : item.isUnlocked
                        ? 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-indigo-400'
                        : 'bg-slate-100/60 dark:bg-slate-800/30 border-slate-200/50 dark:border-slate-800/50 opacity-40 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-black text-slate-900 dark:text-white font-mono">
                        {item.levelId}
                      </span>
                      {item.isMastered ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      ) : item.isCurrent ? (
                        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
                      ) : null}
                    </div>

                    <span className="text-[9px] text-slate-500 dark:text-slate-400 line-clamp-1">
                      {lvlInfo?.category}
                    </span>

                    <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden mt-1.5">
                      <div
                        className="bg-emerald-500 h-full rounded-full transition-all"
                        style={{ width: `${(item.passedSets / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recent Worksheet Attempts List */}
          <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            <h2 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
              Riwayat Pengerjaan Terakhir
            </h2>

            {profile.attempts.length === 0 ? (
              <p className="text-xs text-slate-400 py-4 text-center">
                Belum ada riwayat pengerjaan lembar kerja. Mulai kerjakan sekarang!
              </p>
            ) : (
              <div className="space-y-1.5 max-h-[260px] overflow-y-auto pr-1">
                {[...profile.attempts].reverse().map((att, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-md bg-indigo-600 text-white font-bold flex items-center justify-center text-[10px] font-mono">
                        {att.levelId}
                      </span>
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white block text-xs">
                          Level {att.levelId} - Set {att.setNumber}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {new Date(att.completedAt).toLocaleDateString('id-ID', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-slate-500 font-mono text-[11px]">
                        {Math.floor(att.timeSpentSeconds / 60)}m {att.timeSpentSeconds % 60}s
                      </span>
                      <span
                        className={`font-black px-2 py-0.5 rounded text-[11px] font-mono ${
                          att.passed
                            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                            : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                        }`}
                      >
                        {att.score}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- CHARTS TAB: ACCURACY & SPEED PROGRESSION GRAPHS --- */}
      {selectedTab === 'charts' && (
        <div className="space-y-4">
          {/* Chart 1: Score & Accuracy Trend Line */}
          <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h2 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  Grafik Tren Skor & Ketepatan (%)
                </h2>
                <p className="text-[11px] text-slate-400">
                  Pergerakan nilai dari setiap sesi lembar kerja yang diselesaikan
                </p>
              </div>
              <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 rounded text-[10px] font-bold font-mono">
                Target: ≥ 80%
              </span>
            </div>

            {profile.attempts.length === 0 ? (
              <div className="h-36 flex items-center justify-center text-xs text-slate-400">
                Selesaikan minimal 1 lembar kerja untuk melihat grafik tren nilai.
              </div>
            ) : (
              <div className="h-56 w-full pt-2">
                {/* Visual SVG Line and Bar Chart */}
                <svg className="w-full h-full overflow-visible" viewBox="0 0 500 200">
                  {/* Grid Lines */}
                  <line x1="40" y1="20" x2="480" y2="20" stroke="#94a3b8" strokeDasharray="3 3" opacity="0.3" />
                  <text x="15" y="24" fill="#94a3b8" fontSize="10">100%</text>

                  <line x1="40" y1="60" x2="480" y2="60" stroke="#10b981" strokeDasharray="4 2" opacity="0.5" />
                  <text x="15" y="64" fill="#10b981" fontSize="10" fontWeight="bold">80%</text>

                  <line x1="40" y1="110" x2="480" y2="110" stroke="#94a3b8" strokeDasharray="3 3" opacity="0.3" />
                  <text x="15" y="114" fill="#94a3b8" fontSize="10">50%</text>

                  <line x1="40" y1="180" x2="480" y2="180" stroke="#64748b" opacity="0.5" />
                  <text x="25" y="184" fill="#94a3b8" fontSize="10">0%</text>

                  {/* Render Attempt Bars / Points */}
                  {profile.attempts.map((att, i) => {
                    const total = profile.attempts.length;
                    const step = total > 1 ? (440 - 40) / (total - 1) : 220;
                    const x = 50 + i * step;
                    const y = 180 - (att.score / 100) * 160;

                    return (
                      <g key={i}>
                        <rect
                          x={x - 8}
                          y={y}
                          width="16"
                          height={180 - y}
                          fill={att.passed ? '#4f46e5' : '#f59e0b'}
                          rx="3"
                          opacity="0.85"
                        />
                        <circle cx={x} cy={y} r="3" fill="#ffffff" stroke="#4338ca" strokeWidth="2" />
                        <text x={x} y={y - 5} fill="#4f46e5" fontSize="9" fontWeight="bold" textAnchor="middle">
                          {att.score}%
                        </text>
                        <text x={x} y="195" fill="#64748b" fontSize="8" textAnchor="middle">
                          {att.levelId}-{att.setNumber}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            )}
          </div>

          {/* Chart 2: Speed vs Standard Completion Time (SCT) */}
          <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            <h2 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
              Grafik Kecepatan Waktu Tempuh vs Standar SCT
            </h2>
            <p className="text-xs text-slate-400">
              SCT (Standard Completion Time) adalah tolok ukur ketangkasan mental matematika Kumon.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-500 font-semibold block font-mono">TOTAL LEMBAR</span>
                <span className="text-xl font-black text-slate-900 dark:text-white font-mono">{totalAttempts} Set</span>
              </div>
              <div className="p-3 rounded-lg bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                <span className="text-[10px] text-emerald-700 dark:text-emerald-300 font-semibold block font-mono">LULUS SCT</span>
                <span className="text-xl font-black text-emerald-600 dark:text-emerald-400 font-mono">{passedAttempts} Set</span>
              </div>
              <div className="p-3 rounded-lg bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
                <span className="text-[10px] text-indigo-700 dark:text-indigo-300 font-semibold block font-mono">RATA-RATA WAKTU</span>
                <span className="text-xl font-black text-indigo-600 dark:text-indigo-400 font-mono">
                  {totalAttempts > 0 ? Math.round(totalMinutes / totalAttempts) : 0} Menit
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- CERTIFICATE TAB --- */}
      {selectedTab === 'certificate' && (
        <div className="p-6 bg-gradient-to-b from-amber-50/60 to-white dark:from-slate-900 dark:to-slate-950 rounded-xl border border-amber-300 dark:border-amber-700/60 shadow-xs max-w-lg mx-auto text-center space-y-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500 text-white shadow-xs">
            <Award className="w-6 h-6" />
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase font-extrabold tracking-widest text-amber-600 dark:text-amber-400 font-mono">
              SERTIFIKAT KELULUSAN JENJANG KUMON
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {profile.name}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              Telah berhasil menguasai materi berhitung mandiri matematika StepUp Math hingga{' '}
              <strong>Level {profile.assignedLevel}</strong> dengan dedikasi dan ketepatan tinggi.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-amber-200 dark:border-amber-800 text-left text-xs space-y-1 max-w-sm mx-auto font-mono">
            <div className="flex justify-between">
              <span className="text-slate-500">Jenjang:</span>
              <span className="font-bold text-slate-900 dark:text-white">Level {profile.assignedLevel}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Akurasi:</span>
              <span className="font-bold text-emerald-600">{averageScore}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Pembimbing:</span>
              <span className="font-bold text-indigo-600">Pak GuruAI</span>
            </div>
          </div>

          <p className="text-[10px] font-semibold text-slate-400 font-mono">
            @copyright by StepUp Math - Pak GuruAI
          </p>
        </div>
      )}
    </div>
  );
};
