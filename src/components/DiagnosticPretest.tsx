import React, { useState } from 'react';
import { PRETEST_QUESTIONS, calculatePretestResult } from '../data/pretestQuestions';
import { KUMON_LEVELS } from '../data/levelsData';
import { KumonLevelId, StudentProfile } from '../types';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import {
  HelpCircle,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Award,
  BookOpen,
  RotateCcw,
  Zap,
  Target,
} from 'lucide-react';

interface DiagnosticPretestProps {
  profile: StudentProfile;
  onPretestComplete: (result: {
    recommendedLevel: KumonLevelId;
    score: number;
    profile: StudentProfile;
  }) => void;
  onCancel?: () => void;
}

export const DiagnosticPretest: React.FC<DiagnosticPretestProps> = ({
  profile,
  onPretestComplete,
  onCancel,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [resultData, setResultData] = useState<{
    recommendedLevel: KumonLevelId;
    scorePercentage: number;
    totalCorrect: number;
    totalQuestions: number;
    levelFeedback: string;
  } | null>(null);

  const currentQ = PRETEST_QUESTIONS[currentIndex];
  const progressPercent = Math.round(((currentIndex + 1) / PRETEST_QUESTIONS.length) * 100);

  const handleSelectOption = (option: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: option,
    }));
  };

  const handleNext = () => {
    if (!selectedAnswers[currentQ.id]) return;

    if (currentIndex < PRETEST_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Calculate results
      const res = calculatePretestResult(selectedAnswers);
      setResultData(res);
      setIsCompleted(true);
      sounds.playLevelUp();

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // Guarded
      }
    }
  };

  const handleFinishAndStart = () => {
    if (!resultData) return;

    // Build unlocked levels up to recommended level
    const levelOrder: KumonLevelId[] = [
      '6A', '5A', '4A', '3A', '2A', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'
    ];
    const recIndex = levelOrder.indexOf(resultData.recommendedLevel);
    const unlocked: KumonLevelId[] = levelOrder.slice(0, Math.max(1, recIndex + 1));

    const updatedProfile: StudentProfile = {
      ...profile,
      assignedLevel: resultData.recommendedLevel,
      unlockedLevels: profile.role === 'admin' ? levelOrder : unlocked,
      pretestTaken: true,
      pretestScore: resultData.scorePercentage,
      pretestResultLevel: resultData.recommendedLevel,
      pretestDate: new Date().toISOString(),
    };

    onPretestComplete({
      recommendedLevel: resultData.recommendedLevel,
      score: resultData.scorePercentage,
      profile: updatedProfile,
    });
  };

  // --- RESULT VIEW ---
  if (isCompleted && resultData) {
    const levelObj = KUMON_LEVELS.find((l) => l.id === resultData.recommendedLevel) || KUMON_LEVELS[0];

    return (
      <div className="w-full max-w-xl mx-auto my-4 p-5 sm:p-6 bg-white dark:bg-slate-900 rounded-xl shadow-xs border border-slate-200 dark:border-slate-800 text-center animate-in fade-in duration-300">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-indigo-600 text-white shadow-xs mb-3">
          <Award className="w-7 h-7" />
        </div>

        <span className="inline-block px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 text-[10px] font-bold uppercase tracking-wider mb-2 font-mono">
          HASIL DIAGNOSTIK
        </span>

        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
          Level Awal Kamu:{' '}
          <span className="text-indigo-600 dark:text-indigo-400 font-mono">
            Level {resultData.recommendedLevel}
          </span>
        </h2>

        <p className="text-slate-600 dark:text-slate-400 text-xs mt-1 max-w-md mx-auto">
          {levelObj.name}
        </p>

        {/* Score metrics */}
        <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto my-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 font-mono">
          <div className="text-center">
            <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              SKOR PRE-TEST
            </span>
            <span className="text-xl font-black text-indigo-600 dark:text-indigo-400">
              {resultData.scorePercentage}%
            </span>
          </div>
          <div className="text-center border-l border-slate-200 dark:border-slate-700">
            <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              JAWABAN BENAR
            </span>
            <span className="text-xl font-black text-emerald-600 dark:text-emerald-400">
              {resultData.totalCorrect}/{resultData.totalQuestions}
            </span>
          </div>
        </div>

        {/* Kumon starting level principle explanation */}
        <div className="p-3 rounded-lg bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 text-left text-xs text-slate-700 dark:text-slate-300 space-y-1.5 mb-4">
          <div className="flex items-center gap-1.5 font-bold text-indigo-950 dark:text-indigo-300">
            <Zap className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Prinsip Titik Awal Belajar Mandiri:</span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11px]">
            {resultData.levelFeedback}
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium text-[11px]">
            Dengan memulai dari <strong>Level {resultData.recommendedLevel}</strong>, kamu akan melatih kecepatan, ketelitian, dan fokus mandiri hingga meraih nilai 100%!
          </p>
        </div>

        {/* Action button */}
        <div className="flex items-center justify-center gap-2">
          <button
            id="btn-start-learning-level"
            onClick={handleFinishAndStart}
            className="w-full sm:w-auto px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-lg shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Masuk ke Level {resultData.recommendedLevel}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    );
  }

  // --- QUESTION VIEW ---
  return (
    <div className="w-full max-w-xl mx-auto my-4 p-5 bg-white dark:bg-slate-900 rounded-xl shadow-xs border border-slate-200 dark:border-slate-800 transition-all">
      {/* Header & Progress */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 text-[10px] font-bold font-mono">
              TES DIAGNOSTIK
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Uji: <strong className="text-slate-700 dark:text-slate-200 font-mono">Level {currentQ.levelTested}</strong>
            </span>
          </div>
        </div>

        <span className="text-xs font-bold text-slate-600 dark:text-slate-300 font-mono">
          Soal {currentIndex + 1}/{PRETEST_QUESTIONS.length}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-indigo-600 transition-all duration-300 rounded-full"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 mb-4">
        <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block mb-1 font-mono">
          Topik: {currentQ.topic}
        </span>
        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white leading-relaxed font-mono">
          {currentQ.question}
        </h3>

        {/* Visual Dots for Early Counting Questions */}
        {currentQ.visualDots && (
          <div className="mt-3 p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 inline-flex flex-wrap gap-2 items-center justify-center">
            {Array.from({ length: currentQ.visualDots }).map((_, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full bg-slate-800 dark:bg-indigo-400 shadow-xs flex items-center justify-center text-white text-[9px] font-bold font-mono"
              >
                {i + 1}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
        {currentQ.options.map((option, idx) => {
          const isSelected = selectedAnswers[currentQ.id] === option;
          const letter = String.fromCharCode(65 + idx);

          return (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelectOption(option)}
              className={`p-3 rounded-lg border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                isSelected
                  ? 'border-indigo-600 bg-indigo-50/80 dark:border-indigo-500 dark:bg-indigo-950/50 text-indigo-900 dark:text-indigo-100 ring-1 ring-indigo-500'
                  : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200'
              }`}
            >
              <span
                className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold shrink-0 font-mono ${
                  isSelected
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                }`}
              >
                {letter}
              </span>
              <span className="font-bold text-sm font-mono">{option}</span>
            </button>
          );
        })}
      </div>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
        <button
          type="button"
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
          className="px-3 py-1.5 text-xs font-semibold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          ← Sebelumnya
        </button>

        <button
          id="btn-next-pretest"
          type="button"
          disabled={!selectedAnswers[currentQ.id]}
          onClick={handleNext}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 disabled:hover:bg-indigo-600 text-white font-bold text-xs rounded-md shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
        >
          <span>{currentIndex === PRETEST_QUESTIONS.length - 1 ? 'Selesai & Lihat Hasil' : 'Lanjut →'}</span>
        </button>
      </div>
    </div>
  );
};
