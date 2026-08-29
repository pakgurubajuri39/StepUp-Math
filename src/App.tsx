/**
 * StepUp Math - Aplikasi Belajar Mandiri Matematika Model Kumon (6A - M)
 * Copyright (c) Pak GuruAI
 */
import React, { useState, useEffect } from 'react';
import {
  StudentProfile,
  AppView,
  Worksheet,
  WorksheetAttempt,
  KumonLevelId,
} from './types';
import {
  loadStudentProfile,
  saveStudentProfile,
  clearStudentProfile,
  recordWorksheetAttempt,
  loadTheme,
  saveTheme,
} from './utils/storage';
import { getWorksheetData } from './data/levelsData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LoginModal } from './components/LoginModal';
import { DiagnosticPretest } from './components/DiagnosticPretest';
import { LevelOverview } from './components/LevelOverview';
import { WorksheetPlayer } from './components/WorksheetPlayer';
import { ProgressDashboard } from './components/ProgressDashboard';
import { AdminPanel } from './components/AdminPanel';

export default function App() {
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [currentView, setCurrentView] = useState<AppView>('login');
  const [activeWorksheet, setActiveWorksheet] = useState<Worksheet | null>(null);
  const [theme, setThemeState] = useState<'light' | 'dark'>('light');

  // Initialize theme and saved profile from device storage on mount
  useEffect(() => {
    const initialTheme = loadTheme();
    setThemeState(initialTheme);
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    const saved = loadStudentProfile();
    if (saved) {
      setProfile(saved);
      if (!saved.pretestTaken && saved.role !== 'admin') {
        setCurrentView('pretest');
      } else {
        setCurrentView('levels_overview');
      }
    } else {
      setCurrentView('login');
    }
  }, []);

  const setTheme = (newTheme: 'light' | 'dark') => {
    setThemeState(newTheme);
    saveTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleLoginSuccess = (userProfile: StudentProfile, isNewUser: boolean) => {
    setProfile(userProfile);
    saveStudentProfile(userProfile);

    if (userProfile.role === 'admin') {
      setCurrentView('admin_panel');
    } else if (isNewUser || !userProfile.pretestTaken) {
      // Direct first-time students straight to the Pre-Test
      setCurrentView('pretest');
    } else {
      setCurrentView('levels_overview');
    }
  };

  const handleTrialLogin = () => {
    const trialProfile: StudentProfile = {
      name: 'Peserta Uji Coba (Trial)',
      role: 'trial',
      assignedLevel: '6A',
      unlockedLevels: ['6A'],
      pretestTaken: false,
      isTrial: true,
      trialWorksheetCompleted: false,
      attempts: [],
      streakDays: 1,
      lastActiveDate: new Date().toISOString().split('T')[0],
      createdAt: new Date().toISOString(),
    };

    setProfile(trialProfile);
    saveStudentProfile(trialProfile);
    setCurrentView('pretest');
  };

  const handlePretestComplete = (result: {
    recommendedLevel: KumonLevelId;
    score: number;
    profile: StudentProfile;
  }) => {
    setProfile(result.profile);
    saveStudentProfile(result.profile);
    setCurrentView('levels_overview');
  };

  const handleSelectWorksheet = (worksheet: Worksheet) => {
    setActiveWorksheet(worksheet);
    setCurrentView('worksheet');
  };

  const handleFinishWorksheet = (attempt: WorksheetAttempt) => {
    if (!profile) return;
    const updatedProfile = recordWorksheetAttempt(profile, attempt);
    setProfile(updatedProfile);
    setCurrentView('levels_overview');
  };

  const handleLogout = () => {
    setProfile(null);
    setCurrentView('login');
  };

  const handleResetStudentData = () => {
    clearStudentProfile();
    setProfile(null);
    setCurrentView('login');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200">
      {/* Navigation Header */}
      <Header
        profile={profile}
        currentView={currentView}
        setCurrentView={setCurrentView}
        theme={theme}
        setTheme={setTheme}
        onLogout={handleLogout}
      />

      {/* Main App Content View Switcher */}
      <main className="flex-1 flex flex-col">
        {/* LOGIN VIEW */}
        {currentView === 'login' && (
          <div className="flex-1 flex items-center justify-center p-4">
            <LoginModal
              onLoginSuccess={handleLoginSuccess}
              onTrialLogin={handleTrialLogin}
            />
          </div>
        )}

        {/* PRE-TEST / DIAGNOSTIC VIEW */}
        {currentView === 'pretest' && profile && (
          <div className="p-4 sm:p-6">
            <DiagnosticPretest
              profile={profile}
              onPretestComplete={handlePretestComplete}
              onCancel={() => setCurrentView('levels_overview')}
            />
          </div>
        )}

        {/* LEVEL OVERVIEW & WORKSHEET MAP */}
        {currentView === 'levels_overview' && profile && (
          <LevelOverview
            profile={profile}
            onSelectWorksheet={handleSelectWorksheet}
            onStartPretest={() => setCurrentView('pretest')}
            onOpenAdminPanel={() => setCurrentView('admin_panel')}
          />
        )}

        {/* ACTIVE WORKSHEET PLAYER */}
        {currentView === 'worksheet' && profile && activeWorksheet && (
          <WorksheetPlayer
            worksheet={activeWorksheet}
            profile={profile}
            onFinishWorksheet={handleFinishWorksheet}
            onBackToLevels={() => setCurrentView('levels_overview')}
          />
        )}

        {/* STUDENT PROGRESS DASHBOARD */}
        {currentView === 'progress' && profile && (
          <ProgressDashboard
            profile={profile}
            onNavigateToLevel={(lvl) => {
              if (profile.unlockedLevels.includes(lvl) || profile.role === 'admin') {
                setCurrentView('levels_overview');
              }
            }}
          />
        )}

        {/* ADMIN & TEACHER CONTROL PANEL (Full access & PDF downloads) */}
        {currentView === 'admin_panel' && profile && profile.role === 'admin' && (
          <AdminPanel
            profile={profile}
            onResetStudentData={handleResetStudentData}
            onCloseAdmin={() => setCurrentView('levels_overview')}
          />
        )}
      </main>

      {/* Persistent Footer with required @copyright by Pak GuruAI */}
      <Footer />
    </div>
  );
}
