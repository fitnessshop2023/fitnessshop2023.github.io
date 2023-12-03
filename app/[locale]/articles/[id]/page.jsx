'use client';

import { useGetArticlesQuery } from '@/redux/articlesApi';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setArticle, setArticles } from '@/redux/articlesSlice';
import parseHTML from '@/utils/parseHTML';

import MainContainer from '@/components/MainContainer/MainContainer';
import Spinner from '@/components/UI/Spinner/Spinner';

import styles from './page.module.scss';

export default function Article({ params: { id } }) {
  const article = useSelector((state) => state.articles.article);
  const dispatch = useDispatch();
  const { data, isLoading, isSuccess } = useGetArticlesQuery();

  useEffect(() => {
    if (!Object.keys(article).length && isSuccess) {
      dispatch(setArticles(data));
      dispatch(setArticle(+id));
    }
  }, [isSuccess]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <MainContainer>
      <h1 className={styles.title}>{article.title}</h1>
      <img src={article.urlMainImage} alt="" className="rounded-[10px] mb-7" />
      <div dangerouslySetInnerHTML={{ __html: parseHTML(article.text) }} className={styles.text} />
    </MainContainer>
  );
}
