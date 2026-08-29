import React, { useState, useEffect } from 'react';
import { StudentProfile } from '../types';
import { loadStudentProfile, findStudentProfileByName } from '../utils/storage';
import {
  KeyRound,
  ShieldCheck,
  User,
  Sparkles,
  ArrowRight,
  Eye,
  EyeOff,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
} from 'lucide-react';

interface LoginModalProps {
  onLoginSuccess: (profile: StudentProfile, isNewUser: boolean) => void;
  onTrialLogin: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ onLoginSuccess, onTrialLogin }) => {
  const [activeTab, setActiveTab] = useState<'student' | 'admin' | 'trial'>('student');

  // Stored device student profile
  const [savedDeviceProfile, setSavedDeviceProfile] = useState<StudentProfile | null>(null);

  // Student Form State
  const [studentName, setStudentName] = useState('');
  const [studentCode, setStudentCode] = useState('');
  const [showStudentPass, setShowStudentPass] = useState(false);

  // Admin Form State
  const [adminPassword, setAdminPassword] = useState('');
  const [showAdminPass, setShowAdminPass] = useState(false);

  // Error & Feedback State
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const existing = loadStudentProfile();
    if (existing && existing.role === 'student') {
      setSavedDeviceProfile(existing);
      setStudentName(existing.name);
    }
  }, []);

  const handleStudentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const trimmedName = studentName.trim();
    const trimmedCode = studentCode.trim().toLowerCase();

    if (!trimmedName) {
      setErrorMessage('Silakan masukkan nama siswa terlebih dahulu.');
      return;
    }

    // Required access code: stepup (case-insensitive)
    if (trimmedCode !== 'stepup') {
      setErrorMessage('Kode akses salah! Hubungi Admin / Guru untuk mendapatkan kode akses.');
      return;
    }

    // Check existing stored profile for this student name
    const existingNamed = findStudentProfileByName(trimmedName);
    if (existingNamed) {
      onLoginSuccess(existingNamed, !existingNamed.pretestTaken);
      return;
    }

    const currentSaved = loadStudentProfile();
    if (currentSaved && currentSaved.name.toLowerCase() === trimmedName.toLowerCase() && currentSaved.role === 'student') {
      onLoginSuccess(currentSaved, !currentSaved.pretestTaken);
      return;
    }

    const profile: StudentProfile = {
      name: trimmedName,
      role: 'student',
      assignedLevel: '6A',
      unlockedLevels: ['6A'],
      lastSelectedLevel: '6A',
      pretestTaken: false,
      isTrial: false,
      trialWorksheetCompleted: false,
      attempts: [],
      streakDays: 1,
      lastActiveDate: new Date().toISOString().split('T')[0],
      createdAt: new Date().toISOString(),
    };

    onLoginSuccess(profile, true);
  };

  const handleAdminSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Required admin password: bajuri39
    if (adminPassword !== 'bajuri39') {
      setErrorMessage('Password Admin salah! Silakan coba lagi.');
      return;
    }

    const adminProfile: StudentProfile = {
      name: 'Pak Guru / Admin',
      role: 'admin',
      assignedLevel: 'M',
      unlockedLevels: [
        '6A', '5A', '4A', '3A', '2A', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'
      ],
      pretestTaken: true,
      isTrial: false,
      trialWorksheetCompleted: false,
      attempts: [],
      streakDays: 99,
      lastActiveDate: new Date().toISOString().split('T')[0],
      createdAt: new Date().toISOString(),
    };

    onLoginSuccess(adminProfile, false);
  };

  return (
    <div className="w-full max-w-sm mx-auto my-4 p-5 bg-white dark:bg-slate-900 rounded-xl shadow-xs border border-slate-200 dark:border-slate-800 transition-all">
      {/* Brand Header */}
      <div className="text-center mb-4">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-600 text-white shadow-xs mb-2">
          <span className="font-mono font-black text-lg">∑</span>
        </div>
        <h1 className="text-lg font-black tracking-tight text-slate-900 dark:text-white">
          StepUp <span className="text-indigo-600 dark:text-indigo-400">Math</span>
        </h1>
        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
          Belajar Mandiri Matematika Model Kumon (6A - M)
        </p>
      </div>

      {/* Access Mode Tabs */}
      <div className="grid grid-cols-3 p-0.5 mb-4 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
        <button
          id="tab-student-login"
          type="button"
          onClick={() => {
            setActiveTab('student');
            setErrorMessage('');
          }}
          className={`py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer ${
            activeTab === 'student'
              ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          Siswa
        </button>

        <button
          id="tab-trial-login"
          type="button"
          onClick={() => {
            setActiveTab('trial');
            setErrorMessage('');
          }}
          className={`py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer ${
            activeTab === 'trial'
              ? 'bg-white dark:bg-slate-700 text-amber-600 dark:text-amber-400 shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          Trial
        </button>

        <button
          id="tab-admin-login"
          type="button"
          onClick={() => {
            setActiveTab('admin');
            setErrorMessage('');
          }}
          className={`py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer ${
            activeTab === 'admin'
              ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          Admin / Guru
        </button>
      </div>

      {/* Error Banner */}
      {errorMessage && (
        <div className="mb-3 p-2.5 rounded-lg bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800/80 flex items-start gap-2 text-xs text-rose-700 dark:text-rose-300">
          <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* --- STUDENT LOGIN FORM --- */}
      {activeTab === 'student' && (
        <form onSubmit={handleStudentSubmit} className="space-y-3">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1 font-mono uppercase">
              Nama Siswa
            </label>
            <div className="relative">
              <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                id="input-student-name"
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Nama Lengkap Siswa"
                required
                className="w-full pl-8 pr-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-1 focus:ring-indigo-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 font-mono uppercase">
                Kode Akses Siswa
              </label>
              <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                (Guru/Admin)
              </span>
            </div>
            <div className="relative">
              <KeyRound className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                id="input-student-code"
                type={showStudentPass ? 'text' : 'password'}
                value={studentCode}
                onChange={(e) => setStudentCode(e.target.value)}
                placeholder="Kode akses tersembunyi"
                required
                className="w-full pl-8 pr-8 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-1 focus:ring-indigo-500 transition-colors font-mono"
              />
              <button
                type="button"
                onClick={() => setShowStudentPass(!showStudentPass)}
                className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 absolute right-2.5 top-1/2 -translate-y-1/2 cursor-pointer"
                tabIndex={-1}
              >
                {showStudentPass ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 text-[10px] text-indigo-900 dark:text-indigo-300 space-y-0.5">
            <div className="flex items-center gap-1 font-bold">
              <CheckCircle2 className="w-3 h-3 text-indigo-600 dark:text-indigo-400 shrink-0" />
              <span>Alur Belajar Mandiri:</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 pl-4">
              1. Masuk & ikuti <strong>Pre-Test Diagnostik</strong>.
            </p>
            <p className="text-slate-600 dark:text-slate-400 pl-4">
              2. Kerjakan lembar kerja interaktif level mandiri.
            </p>
          </div>

          {savedDeviceProfile && (
            <div className="p-2.5 rounded-lg bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 flex items-center justify-between gap-2">
              <div className="min-w-0">
                <span className="text-[10px] font-bold text-emerald-800 dark:text-emerald-300 block truncate">
                  Progres Tersimpan: {savedDeviceProfile.name}
                </span>
                <span className="text-[9px] text-slate-500 dark:text-slate-400 font-mono">
                  Level {savedDeviceProfile.assignedLevel} ({savedDeviceProfile.unlockedLevels.length} Level Terbuka)
                </span>
              </div>
              <button
                type="button"
                onClick={() => onLoginSuccess(savedDeviceProfile, !savedDeviceProfile.pretestTaken)}
                className="px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-[10px] font-bold shrink-0 flex items-center gap-1 cursor-pointer"
              >
                <span>Lanjutkan</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          )}

          <button
            id="btn-submit-student"
            type="submit"
            className="w-full py-2 px-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-lg shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Masuk ke Belajar Siswa</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>
      )}

      {/* --- TRIAL ACCESS FORM --- */}
      {activeTab === 'trial' && (
        <div className="space-y-3">
          <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 text-xs text-amber-900 dark:text-amber-200">
            <div className="flex items-center gap-1.5 font-bold mb-1 text-amber-800 dark:text-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Akses Uji Coba (Trial Mode)</span>
            </div>
            <p className="leading-relaxed text-slate-600 dark:text-slate-400 text-[11px]">
              Tes Diagnostik Level gratis & coba{' '}
              <strong>1 lembar kerja</strong> interaktif sesuai hasil level matematika kamu.
            </p>
          </div>

          <div className="space-y-1.5 text-[11px] text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Rekomendasi level Kumon (6A s/d M)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>1 set lembar kerja interaktif dengan timer</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Papan coret digital gratis</span>
            </div>
          </div>

          <button
            id="btn-start-trial"
            type="button"
            onClick={onTrialLogin}
            className="w-full py-2 px-3 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-lg shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Mulai Uji Coba Gratis</span>
            <Sparkles className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* --- ADMIN LOGIN FORM --- */}
      {activeTab === 'admin' && (
        <form onSubmit={handleAdminSubmit} className="space-y-3">
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 font-mono uppercase">
                Password Guru / Admin
              </label>
              <span className="text-[10px] text-slate-400 font-mono">Hak Akses Lengkap</span>
            </div>
            <div className="relative">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                id="input-admin-password"
                type={showAdminPass ? 'text' : 'password'}
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                placeholder="Password admin tersembunyi"
                required
                className="w-full pl-8 pr-8 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-1 focus:ring-indigo-500 transition-colors font-mono"
              />
              <button
                type="button"
                onClick={() => setShowAdminPass(!showAdminPass)}
                className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 absolute right-2.5 top-1/2 -translate-y-1/2 cursor-pointer"
                tabIndex={-1}
              >
                {showAdminPass ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 text-[10px] text-indigo-900 dark:text-indigo-300 space-y-0.5">
            <p className="font-bold flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-indigo-600 dark:text-indigo-400 shrink-0" />
              Fitur Khusus Guru / Admin:
            </p>
            <p className="text-slate-600 dark:text-slate-400 pl-4">
              • Akses lengkap semua level (6A s/d M).
            </p>
          </div>

          <button
            id="btn-submit-admin"
            type="submit"
            className="w-full py-2 px-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-lg shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Masuk sebagai Guru / Admin</span>
            <ShieldCheck className="w-3.5 h-3.5" />
          </button>
        </form>
      )}
    </div>
  );
};
