import React from 'react';
import { Delete, CornerDownLeft } from 'lucide-react';

interface MathKeypadProps {
  onInsert: (val: string) => void;
  onBackspace: () => void;
  onSubmit?: () => void;
  showAdvanced?: boolean;
}

export const MathKeypad: React.FC<MathKeypadProps> = ({
  onInsert,
  onBackspace,
  onSubmit,
  showAdvanced = false,
}) => {
  const numberKeys = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.', '-'];
  const advancedKeys = ['/', 'x', 'y', '²', '√', '(', ')', '+', '='];

  return (
    <div className="p-2 bg-slate-100 dark:bg-slate-800/90 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs">
      <div className="grid grid-cols-4 gap-1">
        {/* Numbers 7, 8, 9, Backspace */}
        <button
          type="button"
          onClick={() => onInsert('7')}
          className="h-8 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-white font-bold font-mono text-sm hover:bg-slate-50 dark:hover:bg-slate-600 shadow-xs border border-slate-200 dark:border-slate-600 transition-transform active:scale-95 cursor-pointer"
        >
          7
        </button>
        <button
          type="button"
          onClick={() => onInsert('8')}
          className="h-8 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-white font-bold font-mono text-sm hover:bg-slate-50 dark:hover:bg-slate-600 shadow-xs border border-slate-200 dark:border-slate-600 transition-transform active:scale-95 cursor-pointer"
        >
          8
        </button>
        <button
          type="button"
          onClick={() => onInsert('9')}
          className="h-8 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-white font-bold font-mono text-sm hover:bg-slate-50 dark:hover:bg-slate-600 shadow-xs border border-slate-200 dark:border-slate-600 transition-transform active:scale-95 cursor-pointer"
        >
          9
        </button>
        <button
          type="button"
          onClick={onBackspace}
          className="h-8 rounded-lg bg-rose-100 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300 font-bold flex items-center justify-center hover:bg-rose-200 dark:hover:bg-rose-900/80 shadow-xs border border-rose-200 dark:border-rose-800 transition-transform active:scale-95 cursor-pointer"
          title="Hapus"
        >
          <Delete className="w-4 h-4" />
        </button>

        {/* Numbers 4, 5, 6, Slash (Fraction) */}
        <button
          type="button"
          onClick={() => onInsert('4')}
          className="h-8 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-white font-bold font-mono text-sm hover:bg-slate-50 dark:hover:bg-slate-600 shadow-xs border border-slate-200 dark:border-slate-600 transition-transform active:scale-95 cursor-pointer"
        >
          4
        </button>
        <button
          type="button"
          onClick={() => onInsert('5')}
          className="h-8 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-white font-bold font-mono text-sm hover:bg-slate-50 dark:hover:bg-slate-600 shadow-xs border border-slate-200 dark:border-slate-600 transition-transform active:scale-95 cursor-pointer"
        >
          5
        </button>
        <button
          type="button"
          onClick={() => onInsert('6')}
          className="h-8 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-white font-bold font-mono text-sm hover:bg-slate-50 dark:hover:bg-slate-600 shadow-xs border border-slate-200 dark:border-slate-600 transition-transform active:scale-95 cursor-pointer"
        >
          6
        </button>
        <button
          type="button"
          onClick={() => onInsert('/')}
          className="h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 font-bold font-mono text-xs hover:bg-indigo-100 dark:hover:bg-indigo-900/60 shadow-xs border border-indigo-200 dark:border-indigo-800 transition-transform active:scale-95 cursor-pointer"
          title="Pecahan / Per"
        >
          /
        </button>

        {/* Numbers 1, 2, 3, Minus */}
        <button
          type="button"
          onClick={() => onInsert('1')}
          className="h-8 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-white font-bold font-mono text-sm hover:bg-slate-50 dark:hover:bg-slate-600 shadow-xs border border-slate-200 dark:border-slate-600 transition-transform active:scale-95 cursor-pointer"
        >
          1
        </button>
        <button
          type="button"
          onClick={() => onInsert('2')}
          className="h-8 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-white font-bold font-mono text-sm hover:bg-slate-50 dark:hover:bg-slate-600 shadow-xs border border-slate-200 dark:border-slate-600 transition-transform active:scale-95 cursor-pointer"
        >
          2
        </button>
        <button
          type="button"
          onClick={() => onInsert('3')}
          className="h-8 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-white font-bold font-mono text-sm hover:bg-slate-50 dark:hover:bg-slate-600 shadow-xs border border-slate-200 dark:border-slate-600 transition-transform active:scale-95 cursor-pointer"
        >
          3
        </button>
        <button
          type="button"
          onClick={() => onInsert('-')}
          className="h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 font-bold font-mono text-xs hover:bg-indigo-100 dark:hover:bg-indigo-900/60 shadow-xs border border-indigo-200 dark:border-indigo-800 transition-transform active:scale-95 cursor-pointer"
          title="Tanda Minus"
        >
          -
        </button>

        {/* 0, Titik / Koma, Spasi / x, Submit */}
        <button
          type="button"
          onClick={() => onInsert('0')}
          className="h-8 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-white font-bold font-mono text-sm hover:bg-slate-50 dark:hover:bg-slate-600 shadow-xs border border-slate-200 dark:border-slate-600 transition-transform active:scale-95 cursor-pointer"
        >
          0
        </button>
        <button
          type="button"
          onClick={() => onInsert('.')}
          className="h-8 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-white font-bold font-mono text-sm hover:bg-slate-50 dark:hover:bg-slate-600 shadow-xs border border-slate-200 dark:border-slate-600 transition-transform active:scale-95 cursor-pointer"
        >
          .
        </button>
        <button
          type="button"
          onClick={() => onInsert('x')}
          className="h-8 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold font-mono text-xs hover:bg-slate-300 dark:hover:bg-slate-600 shadow-xs border border-slate-300 dark:border-slate-600 transition-transform active:scale-95 cursor-pointer"
        >
          x
        </button>

        {onSubmit ? (
          <button
            type="button"
            onClick={onSubmit}
            className="h-8 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold flex items-center justify-center shadow-xs transition-transform active:scale-95 cursor-pointer"
            title="Kirim / Lanjut"
          >
            <CornerDownLeft className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => onInsert(' ')}
            className="h-8 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold font-mono text-[10px] hover:bg-slate-300 dark:hover:bg-slate-600 shadow-xs border border-slate-300 dark:border-slate-600 transition-transform active:scale-95 cursor-pointer"
          >
            Spasi
          </button>
        )}
      </div>

      {/* Optional Advanced Math Keys (for higher Kumon levels) */}
      {showAdvanced && (
        <div className="grid grid-cols-5 gap-1 mt-1.5 pt-1.5 border-t border-slate-200 dark:border-slate-700">
          {advancedKeys.map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => onInsert(k)}
              className="h-7 rounded bg-white/80 dark:bg-slate-700/80 text-slate-700 dark:text-slate-200 font-bold font-mono text-xs hover:bg-white dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600 cursor-pointer"
            >
              {k}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
