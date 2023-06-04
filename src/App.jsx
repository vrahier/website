import { useEffect, useState } from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {

  const [data, setData] = useState();
  const [currentSection, setCurrentSection] = useState("home");

  const fetchData = () => {
    fetch('content.json',
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    ).then((response) => {
      return response.json();
    }).then((jsonResponse) => {
      setData(jsonResponse);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>{ data && <>
          <Header currentSection={currentSection} setCurrentSection={setCurrentSection}/>
          <Content data={data}/>
          <Footer data={data} />
        </>
      }
    </>
  )
}

export default App;
