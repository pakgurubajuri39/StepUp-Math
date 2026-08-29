import React, { useState } from 'react';
import { KUMON_LEVELS, getWorksheetData } from '../data/levelsData';
import { KumonLevelId, StudentProfile, Worksheet } from '../types';
import {
  Lock,
  Unlock,
  CheckCircle2,
  Play,
  Award,
  Sparkles,
  Clock,
  ChevronRight,
  BookOpen,
  HelpCircle,
  BarChart2,
  ShieldCheck,
} from 'lucide-react';

interface LevelOverviewProps {
  profile: StudentProfile;
  onSelectWorksheet: (worksheet: Worksheet) => void;
  onStartPretest: () => void;
  onOpenAdminPanel?: () => void;
}

export const LevelOverview: React.FC<LevelOverviewProps> = ({
  profile,
  onSelectWorksheet,
  onStartPretest,
  onOpenAdminPanel,
}) => {
  const [selectedLevelId, setSelectedLevelId] = useState<KumonLevelId>(
    profile.lastSelectedLevel || profile.assignedLevel || '6A'
  );

  const isAdmin = profile.role === 'admin';
  const isTrial = profile.isTrial;

  const currentLevelObj =
    KUMON_LEVELS.find((l) => l.id === selectedLevelId) || KUMON_LEVELS[0];

  const isLevelUnlocked = (levelId: KumonLevelId) => {
    if (isAdmin) return true;
    return profile.unlockedLevels.includes(levelId);
  };

  const getBestScoreForSet = (levelId: KumonLevelId, setNum: number): number | null => {
    const attempts = profile.attempts.filter(
      (a) => a.levelId === levelId && a.setNumber === setNum
    );
    if (attempts.length === 0) return null;
    return Math.max(...attempts.map((a) => a.score));
  };

  const getPassedCountForLevel = (levelId: KumonLevelId): number => {
    const passedSets = new Set(
      profile.attempts.filter((a) => a.levelId === levelId && a.passed).map((a) => a.setNumber)
    );
    return passedSets.size;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 space-y-4">
      {/* Top Banner: High Density Header */}
      <div className="bg-indigo-700 dark:bg-indigo-900 rounded-xl p-5 text-white shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-white/20 text-[10px] font-bold uppercase tracking-wider">
              {isAdmin ? 'ADMIN FULL ACCESS' : isTrial ? 'TRIAL MODE' : `STUDENT: ${profile.name}`}
            </span>
            <span className="text-[11px] text-indigo-200">
              Target Aktif: Level {profile.assignedLevel}
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl font-black tracking-tight">
            Kurikulum Matematika StepUp Kumon
          </h1>

          <p className="text-indigo-100 text-xs max-w-2xl leading-relaxed">
            Sistem belajar mandiri terstruktur mulai dari <strong>Level 6A</strong> (Pra-Sekolah) hingga{' '}
            <strong>Level M</strong> (Kalkulus Lanjut & Vektor).
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          {!profile.pretestTaken && !isAdmin && (
            <button
              id="btn-banner-pretest"
              onClick={onStartPretest}
              className="px-3.5 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-lg shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Ikuti Pre-Test Level</span>
            </button>
          )}

          {isAdmin && onOpenAdminPanel && (
            <button
              id="btn-banner-admin-panel"
              onClick={onOpenAdminPanel}
              className="px-3.5 py-2 bg-white text-indigo-900 hover:bg-indigo-50 font-bold text-xs rounded-lg shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
              <span>Panel Guru & Unduh PDF</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Grid: Staircase Level List on Left, Detailed Worksheets on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Column: Kumon Staircase Navigator (6A to M) */}
        <div className="lg:col-span-5 space-y-2">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>Jenjang Kumon (18 Level)</span>
            </h2>
            <span className="text-[11px] font-mono text-slate-400">
              {profile.unlockedLevels.length}/18 Terbuka
            </span>
          </div>

          <div className="max-h-[560px] overflow-y-auto pr-1 space-y-1.5 scrollbar-thin">
            {KUMON_LEVELS.map((lvl) => {
              const unlocked = isLevelUnlocked(lvl.id);
              const isSelected = lvl.id === selectedLevelId;
              const isCurrent = lvl.id === profile.assignedLevel;
              const passedCount = getPassedCountForLevel(lvl.id);

              return (
                <div
                  key={lvl.id}
                  id={`level-item-${lvl.id}`}
                  onClick={() => {
                    if (unlocked || isAdmin) {
                      setSelectedLevelId(lvl.id);
                    }
                  }}
                  className={`p-2.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between gap-2.5 ${
                    isSelected
                      ? 'bg-indigo-50/90 dark:bg-indigo-950/60 border-indigo-500 ring-1 ring-indigo-500 shadow-xs'
                      : unlocked
                      ? 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700'
                      : 'bg-slate-100/70 dark:bg-slate-800/40 border-slate-200/50 dark:border-slate-800/50 opacity-60 cursor-not-allowed'
                  }`}
                >
                  {/* Level Pill + Title */}
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className={`w-9 h-9 rounded-md flex flex-col items-center justify-center font-black text-white shrink-0 text-xs bg-gradient-to-br ${lvl.color}`}
                    >
                      <span className="leading-none">{lvl.id}</span>
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-slate-900 dark:text-white truncate">
                          Level {lvl.id}
                        </span>
                        {isCurrent && (
                          <span className="px-1 py-0.2 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-[9px] font-bold">
                            Aktif
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate max-w-[180px] sm:max-w-xs">
                        {lvl.name}
                      </p>
                    </div>
                  </div>

                  {/* Status Badges */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    {unlocked ? (
                      passedCount >= 5 ? (
                        <span className="flex items-center gap-1 text-[9px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                          <CheckCircle2 className="w-3 h-3" />
                          Lulus
                        </span>
                      ) : (
                        <span className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-1.5 py-0.5 rounded border border-indigo-100 dark:border-indigo-900/50">
                          {passedCount}/5 Set
                        </span>
                      )
                    ) : (
                      <span className="p-1 rounded bg-slate-200 dark:bg-slate-700 text-slate-500">
                        <Lock className="w-3 h-3" />
                      </span>
                    )}

                    <ChevronRight
                      className={`w-3.5 h-3.5 ${
                        isSelected
                          ? 'text-indigo-600 dark:text-indigo-400'
                          : 'text-slate-400 dark:text-slate-600'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Active Level Detail & Worksheets Set Grid */}
        <div className="lg:col-span-7 space-y-3">
          {/* Level Header Card */}
          <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-2.5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider border ${currentLevelObj.badgeBg}`}
                >
                  {currentLevelObj.category}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  <Clock className="w-3 h-3 text-indigo-500" />
                  Target: {currentLevelObj.targetSctMinutes} Menit/Set
                </span>
              </div>

              <span className="text-[10px] font-mono font-semibold text-slate-400">
                Level {currentLevelObj.order} dari 18
              </span>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                Level {currentLevelObj.id}: {currentLevelObj.name}
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                {currentLevelObj.description}
              </p>
            </div>

            {/* Topics Tags */}
            <div className="flex flex-wrap gap-1 pt-1">
              {currentLevelObj.topics.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-medium border border-slate-200 dark:border-slate-700"
                >
                  ✓ {t}
                </span>
              ))}
            </div>
          </div>

          {/* Worksheets Sets List (5 Sets per level) */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center justify-between px-1">
              <span>Lembar Kerja Level {currentLevelObj.id}</span>
              <span className="text-[10px] font-medium text-slate-400">
                Kelulusan: ≥ 80% Nilai
              </span>
            </h3>

            <div className="space-y-2">
              {[1, 2, 3, 4, 5].map((setNum) => {
                const wsData = getWorksheetData(currentLevelObj.id, setNum);
                const bestScore = getBestScoreForSet(currentLevelObj.id, setNum);
                const isPassed = bestScore !== null && bestScore >= wsData.passingScore;

                // In Trial mode, only set 1 of assigned level is open
                const isTrialLocked =
                  isTrial && (currentLevelObj.id !== profile.assignedLevel || setNum > 1);

                return (
                  <div
                    key={setNum}
                    id={`worksheet-set-card-${currentLevelObj.id}-${setNum}`}
                    className={`p-3 rounded-lg border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                      isPassed
                        ? 'bg-emerald-50/60 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800/80 shadow-xs'
                        : isTrialLocked
                        ? 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 opacity-60'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-indigo-400 hover:shadow-xs'
                    }`}
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">
                          {setNum}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                          {wsData.title}
                        </h4>
                        {setNum === 5 && (
                          <span className="px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 text-[9px] font-bold">
                            Ujian Kenaikan
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {wsData.problems.length} Soal • Target Waktu: {wsData.targetMinutes} Menit
                      </p>
                    </div>

                    {/* Right Action & Scores */}
                    <div className="flex items-center justify-between sm:justify-end gap-2.5 shrink-0 pt-1.5 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800">
                      {bestScore !== null && (
                        <div className="text-right mr-1">
                          <span className="text-[9px] text-slate-400 block font-mono">Skor Terbaik</span>
                          <span
                            className={`text-xs font-black ${
                              isPassed
                                ? 'text-emerald-600 dark:text-emerald-400'
                                : 'text-amber-600 dark:text-amber-400'
                            }`}
                          >
                            {bestScore}%
                          </span>
                        </div>
                      )}

                      {isTrialLocked ? (
                        <div className="flex items-center gap-1 px-2.5 py-1.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-500 text-xs font-semibold">
                          <Lock className="w-3 h-3" />
                          <span>Terkunci (Trial)</span>
                        </div>
                      ) : (
                        <button
                          id={`btn-play-worksheet-${currentLevelObj.id}-${setNum}`}
                          type="button"
                          onClick={() => onSelectWorksheet(wsData)}
                          className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-md shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
                        >
                          <Play className="w-3 h-3 fill-current" />
                          <span>{bestScore !== null ? 'Ulangi Set' : 'Kerjakan'}</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
