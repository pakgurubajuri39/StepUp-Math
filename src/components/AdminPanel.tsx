import React, { useState } from 'react';
import { KUMON_LEVELS, getWorksheetData } from '../data/levelsData';
import { generateWorksheetPDF } from '../utils/pdfGenerator';
import { KumonLevelId, StudentProfile } from '../types';
import {
  ShieldCheck,
  Download,
  FileText,
  Eye,
  CheckCircle2,
  BookOpen,
  Users,
  Settings,
  Sparkles,
  Printer,
  Trash2,
  RotateCcw,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';

interface AdminPanelProps {
  profile: StudentProfile;
  onResetStudentData: () => void;
  onCloseAdmin: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  profile,
  onResetStudentData,
  onCloseAdmin,
}) => {
  const [selectedLevelId, setSelectedLevelId] = useState<KumonLevelId>('A');
  const [selectedSetNumber, setSelectedSetNumber] = useState<number>(1);
  const [downloading, setDownloading] = useState(false);
  const [includeKey, setIncludeKey] = useState(true);
  const [activeTab, setActiveTab] = useState<'worksheets' | 'students' | 'codes'>('worksheets');
  const [notification, setNotification] = useState<string | null>(null);

  const currentLevelObj =
    KUMON_LEVELS.find((l) => l.id === selectedLevelId) || KUMON_LEVELS[0];
  const activeWorksheet = getWorksheetData(selectedLevelId, selectedSetNumber);

  const handleDownloadPDF = () => {
    setDownloading(true);
    try {
      generateWorksheetPDF(activeWorksheet, currentLevelObj, {
        includeAnswerKey: includeKey,
      });
      setNotification(
        `Berhasil mengunduh PDF Lembar Kerja Level ${selectedLevelId} Set ${selectedSetNumber}!`
      );
      setTimeout(() => setNotification(null), 4000);
    } catch (e) {
      console.error('Error generating PDF:', e);
      alert('Terjadi kesalahan saat membuat file PDF.');
    } finally {
      setDownloading(false);
    }
  };

  const handleBatchDownloadAllSets = () => {
    setDownloading(true);
    try {
      // Download sets 1 through 5 for current level
      for (let s = 1; s <= 5; s++) {
        const ws = getWorksheetData(selectedLevelId, s);
        generateWorksheetPDF(ws, currentLevelObj, { includeAnswerKey: includeKey });
      }
      setNotification(`Mengunduh 5 Set Lembar Kerja PDF untuk Level ${selectedLevelId}...`);
      setTimeout(() => setNotification(null), 4000);
    } catch (e) {
      console.error(e);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 space-y-4">
      {/* Top Banner: Admin Header */}
      <div className="p-4 bg-slate-900 text-white rounded-xl shadow-xs border border-slate-800 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-[10px] font-bold border border-indigo-400/30 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
            <span>KONTROL GURU & ADMIN</span>
          </div>
          <h1 className="text-lg sm:text-xl font-black tracking-tight">
            Manajemen Kurikulum & Unduh PDF
          </h1>
          <p className="text-slate-300 text-xs max-w-2xl">
            Akses tak terbatas untuk semua 18 Level StepUp Math (6A s/d M), cetak lembar kerja mandiri
            (LKS) format PDF dengan kunci jawaban & footer <strong>@copyright by Pak GuruAI</strong>.
          </p>
        </div>

        <button
          onClick={onCloseAdmin}
          className="self-start md:self-auto px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors cursor-pointer"
        >
          Kembali ke Tampilan Utama
        </button>
      </div>

      {/* Notification Toast */}
      {notification && (
        <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 rounded-lg text-xs font-semibold text-emerald-800 dark:text-emerald-200 flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
          <span>{notification}</span>
        </div>
      )}

      {/* Navigation Sub-Tabs */}
      <div className="flex p-0.5 bg-slate-100 dark:bg-slate-800 rounded-lg w-fit text-xs font-bold border border-slate-200 dark:border-slate-700">
        <button
          onClick={() => setActiveTab('worksheets')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
            activeTab === 'worksheets'
              ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Generator Lembar Kerja & PDF</span>
        </button>

        <button
          onClick={() => setActiveTab('codes')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
            activeTab === 'codes'
              ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <Settings className="w-3.5 h-3.5" />
          <span>Pengaturan & Kode Akses</span>
        </button>
      </div>

      {/* --- TAB 1: WORKSHEETS & PDF GENERATOR --- */}
      {activeTab === 'worksheets' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
          {/* Left Controls: Level & Set Selection */}
          <div className="lg:col-span-5 space-y-3">
            <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
              <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-mono">
                <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                <span>1. Pilih Jenjang StepUp Math</span>
              </h3>

              {/* 18 Levels Grid */}
              <div className="grid grid-cols-6 gap-1.5">
                {KUMON_LEVELS.map((lvl) => (
                  <button
                    key={lvl.id}
                    onClick={() => setSelectedLevelId(lvl.id)}
                    className={`h-8 rounded-lg font-bold text-xs font-mono flex flex-col items-center justify-center transition-all cursor-pointer ${
                      selectedLevelId === lvl.id
                        ? 'bg-indigo-600 text-white shadow-xs ring-1 ring-indigo-400'
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <span>{lvl.id}</span>
                  </button>
                ))}
              </div>

              {/* Selected Level Summary Card */}
              <div className="p-2.5 rounded-lg bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 text-xs space-y-0.5">
                <div className="flex items-center justify-between font-bold text-indigo-950 dark:text-indigo-300">
                  <span className="font-mono">Level {currentLevelObj.id}</span>
                  <span className="text-[9px] uppercase font-mono">{currentLevelObj.category}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 font-medium text-xs">
                  {currentLevelObj.name}
                </p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                  Target Waktu (SCT): {currentLevelObj.targetSctMinutes} Menit
                </p>
              </div>

              {/* Set Selection */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                  2. Pilih Nomor Set
                </h3>
                <div className="grid grid-cols-5 gap-1.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSetNumber(s)}
                      className={`h-8 rounded-lg font-bold text-xs font-mono transition-all cursor-pointer ${
                        selectedSetNumber === s
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                      }`}
                    >
                      Set {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* PDF Options */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
                <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeKey}
                    onChange={(e) => setIncludeKey(e.target.checked)}
                    className="w-3.5 h-3.5 text-indigo-600 rounded border-slate-300"
                  />
                  <span>Sertakan Lembar Kunci Jawaban & Pembahasan</span>
                </label>

                {/* PDF Download Buttons */}
                <div className="space-y-1.5">
                  <button
                    id="btn-download-single-pdf"
                    onClick={handleDownloadPDF}
                    disabled={downloading}
                    className="w-full py-2.5 px-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-lg shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>
                      {downloading
                        ? 'Memproses PDF...'
                        : `Unduh PDF Level ${selectedLevelId} Set ${selectedSetNumber}`}
                    </span>
                  </button>

                  <button
                    onClick={handleBatchDownloadAllSets}
                    disabled={downloading}
                    className="w-full py-2 px-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-xs rounded-lg border border-slate-200 dark:border-slate-700 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Printer className="w-3 h-3 text-indigo-500" />
                    <span>Unduh Sekaligus Semua Set (1 s/d 5)</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Preview: Live Worksheet Content & Answer Key Sheet */}
          <div className="lg:col-span-7 space-y-3">
            <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                    Preview Lembar Kerja: {activeWorksheet.title}
                  </h3>
                  <p className="text-[10px] text-slate-400 font-mono">
                    Standar Cetak A4 StepUp Math • {activeWorksheet.problems.length} Soal • Target {activeWorksheet.targetMinutes} Menit
                  </p>
                </div>

                <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 text-[10px] font-bold font-mono">
                  Level {activeWorksheet.levelId}
                </span>
              </div>

              {/* Printable Header Box Preview */}
              <div className="p-2.5 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 text-[10px] grid grid-cols-2 sm:grid-cols-4 gap-2 text-slate-600 dark:text-slate-300 font-mono">
                <div>Nama: _________________</div>
                <div>Tanggal: ______________</div>
                <div>Mulai: ___:___</div>
                <div className="font-bold text-indigo-600">Nilai: _____ / 100</div>
              </div>

              {/* Questions List preview with Answer Keys */}
              <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
                {activeWorksheet.problems.map((p, idx) => (
                  <div
                    key={p.id}
                    className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 text-xs space-y-1"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold text-[9px] flex items-center justify-center shrink-0 font-mono">
                          {idx + 1}
                        </span>
                        <span className="font-bold text-slate-900 dark:text-white font-mono text-xs">
                          {p.question}
                        </span>
                      </div>

                      <span className="px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-bold text-[10px] shrink-0 font-mono">
                        Kunci: {p.correctAnswer}
                      </span>
                    </div>

                    {p.options && (
                      <p className="text-[10px] text-slate-500 pl-6 font-mono">
                        Pilihan: {p.options.join(' | ')}
                      </p>
                    )}

                    {p.explanation && (
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 italic pl-6">
                        Pembahasan: {p.explanation}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Footer Preview Requirement */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-center text-[10px] font-bold text-slate-400 font-mono">
                @copyright by Pak GuruAI (Dicetak pada setiap lembar PDF)
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- TAB 2: CODES & SETTINGS --- */}
      {activeTab === 'codes' && (
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Settings className="w-4 h-4 text-indigo-600" />
              <span>Daftar Kode Akses Resmi StepUp Math</span>
            </h3>

            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-lg bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60 flex items-center justify-between">
                <div>
                  <span className="font-bold text-indigo-950 dark:text-indigo-300 block">
                    Kode Akses Siswa:
                  </span>
                  <span className="text-slate-500 text-[11px]">
                    Siswa memasukkan kode ini + nama lengkap untuk masuk dan pre-test.
                  </span>
                </div>
                <code className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-indigo-300 dark:border-indigo-700 rounded-md font-mono font-bold text-xs text-indigo-600">
                  stepup
                </code>
              </div>

              <div className="p-3 rounded-lg bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60 flex items-center justify-between">
                <div>
                  <span className="font-bold text-indigo-950 dark:text-indigo-300 block">
                    Password Guru / Admin:
                  </span>
                  <span className="text-slate-500 text-[11px]">
                    Akses penuh 18 Level dan unduh PDF untuk guru/admin.
                  </span>
                </div>
                <code className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-indigo-300 dark:border-indigo-700 rounded-md font-mono font-bold text-xs text-indigo-600">
                  bajuri39
                </code>
              </div>
            </div>
          </div>

          <div className="p-4 bg-rose-50/60 dark:bg-rose-950/30 rounded-xl border border-rose-200 dark:border-rose-900/50 space-y-2">
            <h3 className="text-xs font-bold text-rose-800 dark:text-rose-300 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-rose-600" />
              <span>Reset Data Siswa di Perangkat Ini</span>
            </h3>
            <p className="text-[11px] text-rose-700/80 dark:text-rose-400">
              Gunakan opsi ini jika ingin menghapus seluruh riwayat pengerjaan, skor, dan pre-test
              pada perangkat siswa untuk memulai dari awal.
            </p>
            <button
              onClick={() => {
                if (confirm('Apakah Anda yakin ingin mereset seluruh data siswa pada perangkat ini?')) {
                  onResetStudentData();
                  setNotification('Seluruh data profil siswa berhasil di-reset.');
                }
              }}
              className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-md shadow-xs transition-colors cursor-pointer"
            >
              Reset Data Perangkat Siswa
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
