import { React } from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {

  const { t } = useTranslation();

  return (
    <>
      <Content data={t('data', { returnObjects: true })}/>
      <Footer data={t('data', { returnObjects: true })} />
    </>
  );
}

export default App;
