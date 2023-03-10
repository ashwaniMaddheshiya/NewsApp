import Head from "next/head";
import NewsCard from "@/components/NewsCard";
import styles from "@/styles/News.module.css";
import { useState,useEffect } from "react";
import Button from "@/components/Button";
import  Router  from "next/router";

const Home = ({ newsData, page, totalPages })  => {
  const [currentPage, setCurrentPage] = useState(page);
  
  useEffect(() => {
    Router.push(`/?page=${currentPage}`);
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    console.log({totalPages,currentPage})
    if(currentPage === totalPages){
      console.log(true);
    }
    else{
      console.log(false)
    }
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <Head>
        <title>Newsapp - Get the Latest News</title>
        <meta
          name="description"
          content="Get the Latest news on the tip of your click"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        {newsData.map((news) => {
          return (
            <div className={styles.cardContainer} key={news.url}>
              <NewsCard newsItem={news} />
            </div>
          );
        })}
      </div>

      <div className={styles.button}>
        <div>
          <Button disabled={currentPage === 1} onClick={handlePrevPage}>Prev</Button>
        </div>
        <div>
          <Button disabled={currentPage === totalPages} onClick={handleNextPage}>Next</Button>
        </div>
      </div>
    </>
  );
}

export default Home;

export async function getServerSideProps({ query }) {
  const apiKey = process.env.NEXT_APP_NEWS_API;

  const page = Number(query.page) || 1;
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${apiKey}&page=${page}`
  );
  const data = await response.json();
  const newsData = data.articles;

  const totalPages = Math.ceil(data.totalResults / 20);

  return {
    props: {
      newsData,
      page,
      totalPages,
    },
  };
}