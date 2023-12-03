'use client';

import Link from 'next/link';

import { useGetArticlesQuery } from '@/redux/articlesApi';
import { setArticles, setArticle } from '@/redux/articlesSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MainContainer from '@/components/MainContainer/MainContainer';
import Spinner from '@/components/UI/Spinner/Spinner';

import styles from './page.module.scss';

export default function Articles() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.articles);
  const { data, isLoading, isSuccess } = useGetArticlesQuery();

  useEffect(() => {
    if (!articles.length && isSuccess) {
      dispatch(setArticles(data));
    }
  }, [articles, isSuccess, data, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <MainContainer>
      <div className={styles.container}>
        {articles.map(({ blogId, title, urlMainImage }, index) => (
          <Link
            href={`/articles/${blogId}`}
            key={blogId}
            onClick={() => dispatch(setArticle(blogId))}
            className={index % 3 === 2 ? styles.full : ''}>
            <div>
              <img src={urlMainImage} alt="" className="rounded-md" />
              <h3 className={styles.text}>{title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </MainContainer>
  );
}
