import { jsPDF } from 'jspdf';
import { Worksheet, LevelInfo } from '../types';

export function generateWorksheetPDF(
  worksheet: Worksheet,
  levelInfo: LevelInfo,
  options: { includeAnswerKey?: boolean } = { includeAnswerKey: true }
): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 14;

  // Helper to add standard Kumon Worksheet Header
  const renderHeader = (isAnswerKeyPage = false) => {
    // Top bar decoration
    doc.setFillColor(30, 41, 59); // Slate-800
    doc.rect(margin, margin, pageWidth - margin * 2, 17, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.text('StepUp Math', margin + 4, margin + 7.5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.text('Aplikasi Belajar Mandiri Matematika Berjenjang', margin + 4, margin + 13.5);

    // Level Badge right
    doc.setFillColor(79, 70, 229); // Indigo-600
    doc.roundedRect(pageWidth - margin - 42, margin + 2.5, 38, 12, 2, 2, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(255, 255, 255);
    doc.text(`LEVEL ${worksheet.levelId}`, pageWidth - margin - 23, margin + 10, { align: 'center' });

    // Sub-header title
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    const sheetTitle = isAnswerKeyPage
      ? `[KUNCI JAWABAN & CARA PENGERJAAN LENGKAP] ${worksheet.title}`
      : `${worksheet.title} - ${levelInfo.name}`;
    doc.text(sheetTitle, margin, margin + 23);

    if (!isAnswerKeyPage) {
      // Student Info Box (Kumon standard header: Nama, Tanggal, Waktu Mulai, Selesai, Nilai)
      doc.setDrawColor(203, 213, 225); // slate-300
      doc.setFillColor(248, 250, 252); // slate-50
      doc.roundedRect(margin, margin + 26, pageWidth - margin * 2, 18, 2, 2, 'FD');

      doc.setFontSize(8.5);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(51, 65, 85);

      // Row 1
      doc.text('Nama Siswa :', margin + 4, margin + 32);
      doc.line(margin + 25, margin + 32, margin + 75, margin + 32);

      doc.text('Tanggal :', margin + 82, margin + 32);
      doc.line(margin + 97, margin + 32, margin + 130, margin + 32);

      doc.text('Target SCT :', margin + 135, margin + 32);
      doc.setFont('helvetica', 'normal');
      doc.text(`${worksheet.targetMinutes} Menit`, margin + 154, margin + 32);

      // Row 2
      doc.setFont('helvetica', 'bold');
      doc.text('Waktu Mulai :', margin + 4, margin + 39);
      doc.line(margin + 25, margin + 39, margin + 48, margin + 39);

      doc.text('Selesai :', margin + 52, margin + 39);
      doc.line(margin + 66, margin + 39, margin + 88, margin + 39);

      doc.text('Lama Waktu :', margin + 92, margin + 39);
      doc.line(margin + 112, margin + 39, margin + 130, margin + 39);

      doc.setFillColor(238, 242, 255); // Indigo-50
      doc.roundedRect(margin + 135, margin + 35, pageWidth - margin * 2 - 138, 7.5, 1, 1, 'FD');
      doc.setTextColor(67, 56, 202); // Indigo-700
      doc.text('Nilai : ______ / 100', margin + 140, margin + 40);
    }
  };

  const renderFooter = (pageNo: number, totalPages: number) => {
    doc.setDrawColor(226, 232, 240);
    doc.line(margin, pageHeight - margin - 7, pageWidth - margin, pageHeight - margin - 7);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105);
    // User requirement: @copyright by Pak GuruAI
    doc.text('@copyright by Pak GuruAI', margin, pageHeight - margin - 2);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184);
    doc.text('StepUp Math - Lembar Kerja Mandiri Berjenjang', pageWidth / 2, pageHeight - margin - 2, {
      align: 'center',
    });
    doc.text(`Halaman ${pageNo} dari ${totalPages}`, pageWidth - margin, pageHeight - margin - 2, { align: 'right' });
  };

  // --- PAGE 1: STUDENT WORKSHEET ---
  renderHeader(false);

  let currentY = margin + 48;
  const colWidth = (pageWidth - margin * 2 - 8) / 2;
  const boxHeight = 38;

  worksheet.problems.forEach((problem, index) => {
    const isLeftCol = index % 2 === 0;
    const xPos = isLeftCol ? margin : margin + colWidth + 8;

    // Box for problem
    doc.setDrawColor(226, 232, 240);
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(xPos, currentY, colWidth, boxHeight, 1.5, 1.5, 'FD');

    // Number badge
    doc.setFillColor(241, 245, 249);
    doc.roundedRect(xPos + 2.5, currentY + 2.5, 7, 5.5, 1, 1, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text(`${index + 1}`, xPos + 6, currentY + 6.5, { align: 'center' });

    // Question text
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);

    const lines = doc.splitTextToSize(problem.question, colWidth - 14);
    doc.text(lines, xPos + 12, currentY + 6.8);

    // Visual dots if any (e.g. 6A/5A)
    if (problem.visualDots) {
      doc.setFillColor(30, 41, 59);
      for (let d = 0; d < problem.visualDots; d++) {
        const dotX = xPos + 13 + (d % 5) * 5.5;
        const dotY = currentY + 16 + Math.floor(d / 5) * 5.5;
        doc.circle(dotX, dotY, 1.6, 'F');
      }
    }

    // Options if multiple choice
    if (problem.type === 'choice' && problem.options) {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(71, 85, 105);
      const optText = problem.options.map((opt, i) => `${String.fromCharCode(65 + i)}. ${opt}`).join('   ');
      doc.text(optText, xPos + 12, currentY + 18);
    }

    // Answer writing space (Kotak Jawaban)
    doc.setDrawColor(148, 163, 184);
    doc.setFillColor(248, 250, 252);
    doc.roundedRect(xPos + colWidth - 28, currentY + boxHeight - 8.5, 25, 6.5, 1, 1, 'FD');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.setTextColor(148, 163, 184);
    doc.text('Jawaban:', xPos + colWidth - 26, currentY + boxHeight - 4.2);

    if (!isLeftCol || index === worksheet.problems.length - 1) {
      currentY += boxHeight + 4;
    }
  });

  renderFooter(1, options.includeAnswerKey ? 2 : 1);

  // --- PAGE 2: ADMIN ANSWER KEY & CONTOH MODEL (SOAL NO. 1) ---
  if (options.includeAnswerKey) {
    doc.addPage();
    renderHeader(true);

    let keyY = margin + 30;

    // Header bar for Key page
    doc.setDrawColor(199, 210, 254);
    doc.setFillColor(238, 242, 255);
    doc.roundedRect(margin, keyY, pageWidth - margin * 2, 7.5, 1.5, 1.5, 'FD');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(67, 56, 202);
    doc.text('LEMBAR KUNCI JAWABAN & CONTOH MODEL (GURU & ADMIN)', margin + 4, keyY + 5.2);

    keyY += 10.5;

    worksheet.problems.forEach((p, idx) => {
      const cardHeight = p.explanation ? 20 : 14;

      // Check page boundary
      if (keyY + cardHeight > pageHeight - margin - 10) {
        renderFooter(2, 2);
        doc.addPage();
        renderHeader(true);
        keyY = margin + 30;
      }

      doc.setFillColor(255, 255, 255);
      doc.setDrawColor(226, 232, 240);
      doc.roundedRect(margin, keyY, pageWidth - margin * 2, cardHeight, 1.5, 1.5, 'FD');

      // Index badge
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(15, 23, 42);
      doc.text(`No. ${idx + 1}`, margin + 4, keyY + 5.5);

      // Kunci badge
      doc.setFillColor(220, 252, 231); // green-100
      doc.roundedRect(margin + 18, keyY + 1.8, 32, 5.2, 1, 1, 'F');
      doc.setTextColor(22, 101, 52); // green-800
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.5);
      doc.text(`Kunci: ${p.correctAnswer}`, margin + 20, keyY + 5.3);

      // Question preview
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(71, 85, 105);
      const qClean = p.question.replace(/\n/g, ' ');
      doc.text(`Soal: ${qClean.substring(0, 70)}${qClean.length > 70 ? '...' : ''}`, margin + 54, keyY + 5.3);

      if (p.explanation) {
        doc.setFont('helvetica', 'italic');
        doc.setFontSize(7);
        doc.setTextColor(100, 116, 139);
        const expClean = p.explanation.replace(/\n/g, ' ');
        doc.text(`Pembahasan: ${expClean.substring(0, 95)}`, margin + 4, keyY + 11.5);
      }

      keyY += cardHeight + 2.5;
    });

    renderFooter(2, 2);
  }

  // Save the PDF file
  const fileName = `StepUpMath_${worksheet.levelId}_Set${worksheet.setNumber}_LembarKerja.pdf`;
  doc.save(fileName);
}
