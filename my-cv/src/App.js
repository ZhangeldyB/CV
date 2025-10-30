import Header from './components/Header';
import ContentGroup from './components/ContentGroup';
import PDFDownloadButton from './components/PDFDownloadButton';
import LanguageToggle from './components/LanguageToggle';
import { useLanguage } from './contexts/LanguageContext';
import allData from './data/cvData.json';
import './App.css';

function App() {
  const { language } = useLanguage();
  const cvData = allData[language];

  return (
    <div className="app-background">
      <div className="app-container">
        <LanguageToggle />

        <div className="cv-paper">
          <Header head={cvData.head} />

          <div className="content-container">
            {cvData.content.map((group, index) => (
              <ContentGroup key={index} group={group} />
            ))}
          </div>
        </div>

        <div className="controls">
          <PDFDownloadButton cvData={cvData} language={language} />
        </div>
      </div>
    </div>
  );
}

export default App;