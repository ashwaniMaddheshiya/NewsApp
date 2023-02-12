/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/NewsCard.module.css";
import Link from "next/link";


const NewsCard = ({ newsItem }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__header}>
          <img
            src={newsItem.urlToImage === null ? "/newsImg.avif" : newsItem.urlToImage}
            alt="card__image"
            className="card__image"
            width="600"
            height="300"
          />
        </div>
        <div className={styles.card__body}>
          <span className={styles.tag}>{newsItem.source.name}</span>
          <h4>{newsItem.title ? newsItem.title.slice(0, 70) : ""}...</h4>
          <p>{newsItem.description ? newsItem.description.slice(0, 100) : ""}...</p>
        </div>
        <div className={styles.card__footer}>
          <Link href={newsItem.url}>
            <span className={styles.read}>Read More</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
