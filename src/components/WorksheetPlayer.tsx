import React, { useState, useEffect, useRef } from 'react';
import { Worksheet, StudentProfile, WorksheetAttempt, ProblemItem } from '../types';
import { checkAnswer, KUMON_LEVELS } from '../data/levelsData';
import { sounds } from '../utils/audio';
import { MathKeypad } from './MathKeypad';
import { ScratchpadModal } from './ScratchpadModal';
import confetti from 'canvas-confetti';
import {
  Clock,
  CheckCircle2,
  XCircle,
  PenTool,
  RotateCcw,
  ArrowRight,
  Award,
  AlertTriangle,
  Flame,
  HelpCircle,
  Maximize2,
  Sparkles,
} from 'lucide-react';

interface WorksheetPlayerProps {
  worksheet: Worksheet;
  profile: StudentProfile;
  onFinishWorksheet: (attempt: WorksheetAttempt) => void;
  onBackToLevels: () => void;
}

export const WorksheetPlayer: React.FC<WorksheetPlayerProps> = ({
  worksheet,
  profile,
  onFinishWorksheet,
  onBackToLevels,
}) => {
  const [currentProblemIdx, setCurrentProblemIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [isScratchpadOpen, setIsScratchpadOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Timer State
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Active input ref
  const inputRef = useRef<HTMLInputElement | null>(null);

  const currentProblem: ProblemItem = worksheet.problems[currentProblemIdx];
  const totalProblems = worksheet.problems.length;
  const levelObj = KUMON_LEVELS.find((l) => l.id === worksheet.levelId) || KUMON_LEVELS[0];

  // Start timer on mount
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Auto focus input when switching questions
  useEffect(() => {
    if (!isSubmitted && inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentProblemIdx, isSubmitted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleInputChange = (val: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentProblem.id]: val,
    }));
  };

  const handleKeypadInsert = (char: string) => {
    const currentVal = userAnswers[currentProblem.id] || '';
    handleInputChange(currentVal + char);
  };

  const handleKeypadBackspace = () => {
    const currentVal = userAnswers[currentProblem.id] || '';
    handleInputChange(currentVal.slice(0, -1));
  };

  const handleNextProblem = () => {
    if (currentProblemIdx < totalProblems - 1) {
      setCurrentProblemIdx((prev) => prev + 1);
    } else {
      handleSubmitWorksheet();
    }
  };

  const handlePrevProblem = () => {
    if (currentProblemIdx > 0) {
      setCurrentProblemIdx((prev) => prev - 1);
    }
  };

  const handleSubmitWorksheet = () => {
    if (timerRef.current) clearInterval(timerRef.current);

    let correctCount = 0;
    worksheet.problems.forEach((p) => {
      const userAns = userAnswers[p.id] || '';
      if (checkAnswer(userAns, p.correctAnswer, p.alternateAnswers)) {
        correctCount++;
      }
    });

    const score = Math.round((correctCount / totalProblems) * 100);
    const passed = score >= worksheet.passingScore;

    setIsSubmitted(true);

    if (passed) {
      sounds.playLevelUp();
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
        });
      } catch {
        // Guarded
      }
    } else {
      sounds.playWrong();
    }
  };

  const handleCompleteAndSave = () => {
    let correctCount = 0;
    worksheet.problems.forEach((p) => {
      const userAns = userAnswers[p.id] || '';
      if (checkAnswer(userAns, p.correctAnswer, p.alternateAnswers)) {
        correctCount++;
      }
    });

    const score = Math.round((correctCount / totalProblems) * 100);
    const passed = score >= worksheet.passingScore;

    const attempt: WorksheetAttempt = {
      worksheetId: worksheet.id,
      levelId: worksheet.levelId,
      setNumber: worksheet.setNumber,
      score,
      totalQuestions: totalProblems,
      correctCount,
      timeSpentSeconds: elapsedSeconds,
      completedAt: new Date().toISOString(),
      passed,
      userAnswers,
    };

    onFinishWorksheet(attempt);
  };

  const targetSeconds = worksheet.targetMinutes * 60;
  const isWithinSct = elapsedSeconds <= targetSeconds;

  // --- RESULT VIEW AFTER SUBMISSION ---
  if (isSubmitted) {
    let correctCount = 0;
    worksheet.problems.forEach((p) => {
      const userAns = userAnswers[p.id] || '';
      if (checkAnswer(userAns, p.correctAnswer, p.alternateAnswers)) {
        correctCount++;
      }
    });
    const score = Math.round((correctCount / totalProblems) * 100);
    const passed = score >= worksheet.passingScore;

    return (
      <div className="max-w-2xl mx-auto my-4 p-5 bg-white dark:bg-slate-900 rounded-xl shadow-xs border border-slate-200 dark:border-slate-800 space-y-4">
        {/* Result Header */}
        <div className="text-center space-y-1.5">
          <div
            className={`inline-flex items-center justify-center w-14 h-14 rounded-xl shadow-xs mb-1 ${
              passed
                ? 'bg-emerald-600 text-white'
                : 'bg-amber-600 text-white'
            }`}
          >
            {passed ? <Award className="w-8 h-8" /> : <RotateCcw className="w-8 h-8" />}
          </div>

          <div>
            <span
              className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                passed
                  ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                  : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
              }`}
            >
              {passed ? 'Lulus Standar StepUp Math' : 'Perlu Pengulangan Repetisi'}
            </span>
          </div>

          <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
            {worksheet.title}
          </h2>

          <p className="text-xs text-slate-500 dark:text-slate-400">
            {passed
              ? 'Selamat! Ketepatan dan kecepatan kamu telah memenuhi target level.'
              : 'StepUp Math menekankan repetisi hingga mencapai penguasaan mandiri 100%.'}
          </p>
        </div>

        {/* Score & Time Badges */}
        <div className="grid grid-cols-3 gap-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-center font-mono">
          <div>
            <span className="text-[10px] font-semibold text-slate-500 block">
              NILAI SKOR
            </span>
            <span
              className={`text-xl sm:text-2xl font-black ${
                passed
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : 'text-amber-600 dark:text-amber-400'
              }`}
            >
              {score}%
            </span>
          </div>

          <div className="border-x border-slate-200 dark:border-slate-700">
            <span className="text-[10px] font-semibold text-slate-500 block">
              BENAR / TOTAL
            </span>
            <span className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white">
              {correctCount}/{totalProblems}
            </span>
          </div>

          <div>
            <span className="text-[10px] font-semibold text-slate-500 block">
              WAKTU TEMPUH
            </span>
            <span
              className={`text-xl sm:text-2xl font-black ${
                isWithinSct
                  ? 'text-indigo-600 dark:text-indigo-400'
                  : 'text-amber-600 dark:text-amber-400'
              }`}
            >
              {formatTime(elapsedSeconds)}
            </span>
          </div>
        </div>

        {/* Detailed Review Table */}
        <div className="space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 px-1">
            Evaluasi Soal
          </h3>

          <div className="space-y-1.5 max-h-[280px] overflow-y-auto pr-1">
            {worksheet.problems.map((p, idx) => {
              const uAns = userAnswers[p.id] || '(Kosong)';
              const isCorrect = checkAnswer(uAns, p.correctAnswer, p.alternateAnswers);

              return (
                <div
                  key={p.id}
                  className={`p-2.5 rounded-lg border text-xs flex items-start gap-2.5 ${
                    isCorrect
                      ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/40'
                      : 'bg-rose-50/40 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/40'
                  }`}
                >
                  <div className="shrink-0 mt-0.5">
                    {isCorrect ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <XCircle className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
                    )}
                  </div>

                  <div className="flex-1 space-y-0.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 dark:text-white">
                        No. {idx + 1}: {p.question.replace(/\n/g, ' ')}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5 text-[11px]">
                      <span className="text-slate-600 dark:text-slate-400">
                        Jawaban:{' '}
                        <strong
                          className={
                            isCorrect ? 'text-emerald-700 dark:text-emerald-300' : 'text-rose-700 dark:text-rose-300'
                          }
                        >
                          {uAns}
                        </strong>
                      </span>

                      {!isCorrect && (
                        <span className="text-emerald-700 dark:text-emerald-400">
                          Kunci: <strong>{p.correctAnswer}</strong>
                        </span>
                      )}
                    </div>

                    {p.explanation && (
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 italic pt-0.5">
                        {p.explanation}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action button */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-2 pt-3 border-t border-slate-200 dark:border-slate-800">
          <button
            id="btn-finish-and-save"
            onClick={handleCompleteAndSave}
            className="w-full sm:w-auto px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-lg shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Simpan Progres & Selesai</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    );
  }

  // --- ACTIVE WORKSHEET SOLVER VIEW ---
  return (
    <div className="max-w-4xl mx-auto my-3 px-3 space-y-3">
      {/* Top Header Bar: Level, Set, Timer, Scratchpad Trigger */}
      <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex items-center gap-2.5">
          <button
            id="btn-back-to-level-list"
            onClick={onBackToLevels}
            className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold"
          >
            ← Kembali
          </button>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                {worksheet.title}
              </span>
              <span className="px-1.5 py-0.2 rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 text-[10px] font-bold">
                Level {worksheet.levelId}
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono">
              Soal {currentProblemIdx + 1}/{totalProblems}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* SCT Timer */}
          <div
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-xs font-mono font-bold ${
              isWithinSct
                ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800'
                : 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800'
            }`}
          >
            <Clock className="w-3 h-3" />
            <span>{formatTime(elapsedSeconds)}</span>
            <span className="text-[9px] font-normal opacity-70">
              (SCT {worksheet.targetMinutes}m)
            </span>
          </div>

          {/* Digital Scratchpad Trigger */}
          <button
            id="btn-open-scratchpad"
            type="button"
            onClick={() => setIsScratchpadOpen(true)}
            className="flex items-center gap-1 px-2.5 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-md text-xs font-bold transition-colors cursor-pointer"
          >
            <PenTool className="w-3 h-3 text-indigo-600" />
            <span>Coretan</span>
          </button>
        </div>
      </div>

      {/* Main Solver Card */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {/* Left Column: Problem Display & Direct Input */}
        <div className="md:col-span-7 space-y-3">
          <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs relative min-h-[280px] flex flex-col justify-between">
            {/* Top Question Indicator */}
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider text-[11px]">
                Nomor {currentProblemIdx + 1}
              </span>
              {currentProblem.subtitle && (
                <span className="italic text-[10px]">{currentProblem.subtitle}</span>
              )}
            </div>

            {/* Question Body */}
            <div className="my-3 space-y-3">
              {/* Step-by-Step Guide for Problem #1 / Example Guidance */}
              {(currentProblem.stepByStepGuide || currentProblem.workedExample) && (
                <div className="p-3.5 rounded-xl bg-indigo-50/90 dark:bg-indigo-950/60 border-2 border-indigo-200 dark:border-indigo-800 shadow-xs space-y-2">
                  <div className="flex items-center gap-1.5 text-indigo-900 dark:text-indigo-200">
                    <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                    <span className="font-extrabold text-xs uppercase tracking-wide">
                      {currentProblemIdx === 0 ? 'Contoh Model & Langkah Pengerjaan (Soal No. 1)' : 'Panduan Cara Pengerjaan'}
                    </span>
                  </div>

                  {currentProblem.workedExample && (
                    <p className="text-xs text-indigo-800 dark:text-indigo-300 font-medium">
                      {currentProblem.workedExample}
                    </p>
                  )}

                  {currentProblem.stepByStepGuide && currentProblem.stepByStepGuide.length > 0 && (
                    <div className="space-y-1.5 pt-1 border-t border-indigo-200/60 dark:border-indigo-800/60">
                      {currentProblem.stepByStepGuide.map((step, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-indigo-600 text-white text-[10px] font-bold shrink-0 mt-0.5">
                            {sIdx + 1}
                          </span>
                          <span className="leading-snug">{step}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <div className="text-xl font-extrabold text-slate-900 dark:text-white leading-relaxed font-mono whitespace-pre-line">
                {currentProblem.question}
              </div>

              {/* Visual Counting Dots for Levels 6A / 5A */}
              {currentProblem.visualDots && (
                <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-lg border border-slate-200 dark:border-slate-700/80 inline-flex flex-wrap gap-2 items-center justify-center">
                  {Array.from({ length: currentProblem.visualDots }).map((_, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full bg-slate-800 dark:bg-indigo-400 shadow-xs flex items-center justify-center text-white text-[10px] font-bold"
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              )}

              {/* Multiple Choice Options if type is choice */}
              {currentProblem.type === 'choice' && currentProblem.options && (
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {currentProblem.options.map((opt, i) => {
                    const isSelected = userAnswers[currentProblem.id] === opt;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleInputChange(opt)}
                        className={`p-2.5 rounded-lg border text-left font-bold text-xs transition-all cursor-pointer ${
                          isSelected
                            ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 ring-1 ring-indigo-500'
                            : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <span className="inline-block w-4 text-slate-400 font-mono">
                          {String.fromCharCode(65 + i)}.
                        </span>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Direct Input Field for numbers / text */}
              {currentProblem.type !== 'choice' && (
                <div className="pt-1">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 font-mono">
                    Jawaban:
                  </label>
                  <div className="relative max-w-xs">
                    <input
                      ref={inputRef}
                      id="input-worksheet-answer"
                      type="text"
                      value={userAnswers[currentProblem.id] || ''}
                      onChange={(e) => handleInputChange(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleNextProblem();
                      }}
                      placeholder="Ketik jawaban..."
                      className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-indigo-500 rounded-lg text-lg font-bold font-mono text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>
              )}

              {currentProblem.hint && (
                <p className="text-[11px] text-amber-600 dark:text-amber-400 font-medium">
                  Petunjuk: {currentProblem.hint}
                </p>
              )}
            </div>

            {/* Bottom Nav inside card */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                disabled={currentProblemIdx === 0}
                onClick={handlePrevProblem}
                className="px-3 py-1.5 text-xs font-semibold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                ← Sebelumnya
              </button>

              <button
                id="btn-next-worksheet-problem"
                type="button"
                onClick={handleNextProblem}
                className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-md shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>
                  {currentProblemIdx === totalProblems - 1 ? 'Selesai & Nilai' : 'Lanjut →'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Virtual Math Keypad & Problem Grid Map */}
        <div className="md:col-span-5 space-y-3">
          {/* Keypad */}
          <MathKeypad
            onInsert={handleKeypadInsert}
            onBackspace={handleKeypadBackspace}
            onSubmit={handleNextProblem}
            showAdvanced={['E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'].includes(worksheet.levelId)}
          />

          {/* Quick Problem Grid Navigator */}
          <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-1.5">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-mono">
              DAFTAR SOAL ({totalProblems})
            </span>
            <div className="grid grid-cols-5 gap-1.5">
              {worksheet.problems.map((p, idx) => {
                const isAnswered = !!userAnswers[p.id]?.trim();
                const isCurrent = idx === currentProblemIdx;

                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setCurrentProblemIdx(idx)}
                    className={`h-7 rounded font-bold text-xs flex items-center justify-center transition-all ${
                      isCurrent
                        ? 'bg-indigo-600 text-white shadow-xs ring-1 ring-indigo-400'
                        : isAnswered
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Digital Scratchpad Modal */}
      <ScratchpadModal
        isOpen={isScratchpadOpen}
        onClose={() => setIsScratchpadOpen(false)}
        title={`Papan Coretan - Soal No. ${currentProblemIdx + 1}`}
      />
    </div>
  );
};
