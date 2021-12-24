import styles from './keyword.module.css'

const Keyword = ({word}) => {
  return (  
    <div className={styles.container}>
      <div className={styles.title}>실시간 검색어</div>
      <div className={styles.order}>
        <div className={styles.left}>
        {
          word.slice(0, 5).map((item, i)=>{
            const url = `https://m.search.naver.com/search.naver?where=m_news&query=${item}`
            return (
              <div className={styles.keyword}>
                <a href={url} target="_blank" rel="noreferrer" key={i}>
                  <div className={styles.list}>
                    <span className={styles.number}>{i+1}</span>
                    <span className={styles.word}>{item}</span>
                  </div>
                </a>
              </div>
            )
          })
        }
        </div>
        <div className={styles.right}>
        {
          word.slice(5, 10).map((item, i)=>{
            const url = `https://m.search.naver.com/search.naver?where=m_news&query=${item}`
            return (
              <div className={styles.keyword}>
                <a href={url} target="_blank" rel="noreferrer" key={i}>
                  <div className={styles.list}>
                    <span className={styles.number}>{i+6}</span>
                    <span className={styles.word}>{item}</span>
                  </div>
                </a>
              </div>
            )
          })
        }
        </div>
      </div>
    </div>
  );
}
 
export default Keyword;