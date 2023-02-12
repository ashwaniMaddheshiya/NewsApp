import styles from "@/styles/News.module.css";
import NewsCard from "@/components/NewsCard";
import { useState, useEffect } from "react";
import Button from "@/components/Button";
import Router from 'next/router'
import Head from "next/head";

const NewsCategory = ({ newsData, page, totalPages, category }) => {
  const [currentPage, setCurrentPage] = useState(page);

  useEffect(() => {
    Router.push(`/${category}/?page=${currentPage}`);
  }, [currentPage,category]);

  useEffect(()=>{
    setCurrentPage(1);
  },[category])

  const handleNextPage = () => {
    setCurrentPage(page + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(page - 1);
  };

  return (
    <>
    <Head>
        <title>Newsapp | {category} - Get the {category} News</title>
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
};

export default NewsCategory;

export async function getServerSideProps({query}) {
  const category = query.category
  const apiKey = process.env.NEXT_APP_NEWS_API;

  const page = query.page ? Number(query.page) : 1;
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}&page=${page}`
  );
  const data = await response.json();
  const newsData = data.articles;

  const totalPages = Math.ceil(data.totalResults / 20);

  return {
    props: {
      newsData,
      page,
      totalPages,
      category
    },
  };
}