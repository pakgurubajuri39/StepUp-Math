import React from 'react';
import { StudentProfile, AppView } from '../types';
import {
  LogOut,
  ShieldCheck,
  Award,
  BarChart3,
  BookOpen,
  HelpCircle,
  Sparkles,
  Lock,
  Sun,
  Moon,
} from 'lucide-react';

interface HeaderProps {
  profile: StudentProfile | null;
  currentView: AppView;
  setCurrentView: (view: AppView) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  profile,
  currentView,
  setCurrentView,
  theme,
  setTheme,
  onLogout,
}) => {
  const isAdmin = profile?.role === 'admin';
  const isTrial = profile?.isTrial;

  return (
    <header className="sticky top-0 z-40 h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 sm:px-6 flex items-center justify-between shrink-0 shadow-xs transition-colors">
      {/* Brand Logo & Title */}
      <div
        id="brand-logo-button"
        onClick={() => {
          if (profile) setCurrentView('levels_overview');
          else setCurrentView('login');
        }}
        className="flex items-center gap-3 cursor-pointer select-none group"
      >
        <div className="w-10 h-10 bg-indigo-600 dark:bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-xs group-hover:scale-105 transition-transform">
          <span>∑</span>
        </div>
        <div>
          <h1 className="text-lg sm:text-xl font-bold tracking-tight text-slate-800 dark:text-white leading-none">
            StepUp <span className="text-indigo-600 dark:text-indigo-400">Math</span>
          </h1>
          <p className="text-[10px] text-slate-400 dark:text-slate-400 uppercase tracking-widest font-semibold mt-1">
            Kumon-Style Learning System
          </p>
        </div>
      </div>

      {/* Center Nav Links for Logged-in User */}
      {profile && (
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-800/80 p-1 rounded-lg border border-slate-200/80 dark:border-slate-700/80">
          <button
            id="nav-levels-btn"
            onClick={() => setCurrentView('levels_overview')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
              currentView === 'levels_overview'
                ? 'bg-white dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Kurikulum</span>
          </button>

          <button
            id="nav-progress-btn"
            onClick={() => setCurrentView('progress')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
              currentView === 'progress'
                ? 'bg-white dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Progres</span>
          </button>

          <button
            id="nav-pretest-btn"
            onClick={() => setCurrentView('pretest')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
              currentView === 'pretest' || currentView === 'pretest_result'
                ? 'bg-white dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Pre-Test</span>
          </button>

          {isAdmin && (
            <button
              id="nav-admin-btn"
              onClick={() => setCurrentView('admin_panel')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                currentView === 'admin_panel'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-700'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Panel Guru</span>
            </button>
          )}
        </nav>
      )}

      {/* Right Controls: High Density Segmented Theme Toggle, User Profile & Actions */}
      <div className="flex items-center gap-3">
        {/* Segmented Light/Dark Control */}
        <div className="flex bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700 text-[10px] font-bold">
          <button
            type="button"
            onClick={() => setTheme('light')}
            className={`px-2.5 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1 ${
              theme === 'light'
                ? 'bg-white text-slate-800 shadow-xs border border-slate-200 font-extrabold'
                : 'text-slate-500 hover:text-slate-800 dark:text-slate-400'
            }`}
          >
            <Sun className="w-3 h-3" />
            <span className="hidden sm:inline">LIGHT</span>
          </button>
          <button
            type="button"
            onClick={() => setTheme('dark')}
            className={`px-2.5 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1 ${
              theme === 'dark'
                ? 'bg-slate-700 text-white shadow-xs font-extrabold'
                : 'text-slate-500 hover:text-slate-800 dark:text-slate-400'
            }`}
          >
            <Moon className="w-3 h-3" />
            <span className="hidden sm:inline">DARK</span>
          </button>
        </div>

        <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>

        {/* User Account / Access Badge */}
        {profile ? (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center text-indigo-700 dark:text-indigo-300 text-xs font-black shrink-0">
              {isAdmin ? 'A' : profile.name.charAt(0).toUpperCase()}
            </div>
            <div className="text-right hidden sm:block leading-tight">
              <p className="text-xs font-bold text-slate-900 dark:text-white truncate max-w-[120px]">
                {isAdmin ? 'Admin Account' : profile.name}
              </p>
              <p className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                {isAdmin ? 'Access: Full (bajuri39)' : `Level: ${profile.assignedLevel}`}
              </p>
            </div>
            <button
              id="logout-btn"
              onClick={onLogout}
              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors ml-1"
              title="Keluar"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <button
            id="header-login-btn"
            onClick={() => setCurrentView('login')}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-xs transition-all cursor-pointer"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Masuk</span>
          </button>
        )}
      </div>
    </header>
  );
};
