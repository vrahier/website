import { React, useState } from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import { useTranslation } from 'react-i18next';

function App() {

  const [currentSection, setCurrentSection] = useState('#home');
  const { t } = useTranslation();

  return (
    <>
      <Header currentSection={currentSection}/>
      <Content data={t('data', { returnObjects: true })} currentSection={currentSection} setCurrentSection={setCurrentSection}/>
      <Footer data={t('data', { returnObjects: true })} />
    </>
  );
}

export default App;
