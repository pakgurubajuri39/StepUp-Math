export type KumonLevelId =
  | '6A'
  | '5A'
  | '4A'
  | '3A'
  | '2A'
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M';

export interface LevelInfo {
  id: KumonLevelId;
  order: number;
  name: string;
  category: 'Pra-Sekolah' | 'Dasar 1' | 'Dasar 2' | 'Menengah' | 'Lanjutan' | 'Tinggi';
  color: string;
  badgeBg: string;
  description: string;
  topics: string[];
  targetSctMinutes: number; // Standard Completion Time
  worksheetCount: number;
}

export type ProblemType = 'number' | 'text' | 'fraction' | 'choice' | 'step_by_step';

export interface ProblemItem {
  id: string;
  question: string;
  subtitle?: string;
  visualDots?: number; // for 6A/5A counting
  visualImage?: string;
  type: ProblemType;
  options?: string[]; // for choice
  correctAnswer: string;
  alternateAnswers?: string[];
  hint?: string;
  explanation?: string;
  stepByStepGuide?: string[]; // Langkah-langkah / cara pengerjaan terperinci (terutama soal No. 1)
  workedExample?: string; // Penjelasan ringkas cara pengerjaan model Kumon
  layoutStyle?: 'horizontal' | 'vertical' | 'box' | 'word_problem';
  operands?: {
    top?: string;
    operator?: string;
    bottom?: string;
    carry?: boolean;
  };
}

export interface Worksheet {
  id: string;
  levelId: KumonLevelId;
  setNumber: number; // e.g. 1 to 5
  title: string;
  description: string;
  targetMinutes: number;
  passingScore: number; // percentage, e.g., 80
  problems: ProblemItem[];
}

export interface WorksheetAttempt {
  worksheetId: string;
  levelId: KumonLevelId;
  setNumber: number;
  score: number; // 0 to 100
  totalQuestions: number;
  correctCount: number;
  timeSpentSeconds: number;
  completedAt: string; // ISO date
  passed: boolean;
  userAnswers: Record<string, string>;
}

export interface StudentProfile {
  name: string;
  role: 'student' | 'trial' | 'admin';
  assignedLevel: KumonLevelId;
  unlockedLevels: KumonLevelId[];
  lastSelectedLevel?: KumonLevelId;
  pretestTaken: boolean;
  pretestScore?: number;
  pretestResultLevel?: KumonLevelId;
  pretestDate?: string;
  isTrial: boolean;
  trialWorksheetCompleted: boolean;
  attempts: WorksheetAttempt[];
  streakDays: number;
  lastActiveDate: string;
  createdAt: string;
}

export interface PretestQuestion {
  id: string;
  levelTested: KumonLevelId;
  difficultyOrder: number;
  question: string;
  options: string[];
  correctAnswer: string;
  topic: string;
  explanation: string;
  visualDots?: number;
}

export type AppView = 
  | 'login'
  | 'pretest'
  | 'pretest_result'
  | 'levels_overview'
  | 'worksheet'
  | 'progress'
  | 'admin_panel';
