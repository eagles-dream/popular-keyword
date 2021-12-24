import styles from './app.module.css';
import axios from 'axios';
import XMLParser from "react-xml-parser";
import { useEffect, useState } from 'react';
import Keyword from './components/keyword';
import Banner from './components/banner';
import Footer from './components/footer';

function App() {
  const [keyword, setKeyword] = useState([]);

  const word = keyword.slice(4, 23).map((item)=>{return item.children[0].value})
  console.log(word)

  const parseStr = (data) => {
    const dataArr = new XMLParser().parseFromString(data).children[0].children;
    console.log(dataArr);
    setKeyword(dataArr);
  }

  const getAPI = async() => {
    await axios.get('trends/trendingsearches/daily/rss?geo=KR')
      .then((res)=>{
        const dataSet = res.data;
        parseStr(dataSet);
      })
      .catch((Error)=>{console.log(Error)})
  }

  useEffect(()=>{
    getAPI();
  }, [])

  return (
    <div className={styles.container}>
      <Banner />
      <Keyword word={word} />
      <Footer />
    </div>
  );
}

export default App;
