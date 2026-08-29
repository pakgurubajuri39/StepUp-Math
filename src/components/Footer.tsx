import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto h-10 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-4 sm:px-6 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-medium shrink-0 transition-colors">
      {/* Copyright Requirement */}
      <div className="flex items-center gap-2 font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
        <span className="font-semibold text-slate-700 dark:text-slate-200">
          @copyright by Pak GuruAI
        </span>
        <span className="hidden md:inline text-slate-300 dark:text-slate-700">•</span>
        <span className="hidden md:inline text-slate-500 dark:text-slate-400">
          Aplikasi Belajar Mandiri Matematika Berjenjang (Level 6A - M)
        </span>
      </div>

      {/* Features note & Status */}
      <div className="flex items-center gap-2 text-[10px]">
        <span className="px-2 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-mono">
          STATUS: ONLINE
        </span>
        <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 dark:bg-indigo-950/70 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 font-bold">
          StepUp Math v2.0
        </span>
      </div>
    </footer>
  );
};
