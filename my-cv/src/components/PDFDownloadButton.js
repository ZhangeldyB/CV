import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFDocument from './PDFDocument';

const PDFDownloadButton = ({ cvData, language }) => {
  const fileName = language === 'en' ? 'ZhangeldyB_CV_EN.pdf' : 'ZhangeldyB_CV_RU.pdf';
  const buttonText = language === 'en' ? 'Export PDF' : 'Экспорт PDF';
  const loadingText = language === 'en' ? 'Generating PDF...' : 'Генерация PDF...';

  return (
    <PDFDownloadLink
      document={<PDFDocument cvData={cvData} />}
      fileName={fileName}
      className="export-button"
    >
      {({ loading }) => (
        <button className="download-button">
          {loading ? loadingText : buttonText}
        </button>
      )}
    </PDFDownloadLink>
  );
};

export default PDFDownloadButton;