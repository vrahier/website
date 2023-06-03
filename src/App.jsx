import { useEffect, useState } from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {

  const [data, setData] = useState();

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
          <Header/>
          <Menu/>
          <Content/>
          <Footer/>
        </>
      }
    </>
  )
}

export default App;
