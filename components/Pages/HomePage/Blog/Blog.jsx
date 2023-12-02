'use client';

import { useGetArticlesQuery } from '@/redux/articlesApi';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Spinner from '@/components/UI/Spinner/Spinner';
import Link from 'next/link';

import { setArticle, setArticles } from '@/redux/articlesSlice';

import styles from './Blog.module.scss';

export default function Blog() {
  const t = useTranslations('blogHomePage');
  const dispatch = useDispatch();
  const { data, isLoading, isSuccess } = useGetArticlesQuery();
  const blogsForHomepage = useSelector((state) => state.articles.articles);
  const firstAndSecondBlogs = blogsForHomepage.slice(0, 2);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setArticles(data));
    }
  }, [isSuccess, data]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section>
      <h2>{t('blog')}</h2>
      <div className={styles.blogContainer}>
        {data &&
          firstAndSecondBlogs.map(({ blogId, title, urlMainImage, subTitle }) => (
            <Link key={blogId} href={`/articles/${blogId}`} onClick={() => dispatch(setArticle(blogId))}>
              <div className={styles.blog} key={blogId}>
                <img src={urlMainImage} alt="" className="w-full" />
                <div className="p-3">
                  <h3 className={styles.title}>{title}</h3>
                  <p className={styles.description}>{subTitle}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <button className={styles.buttonLink}>
        <Link href="/articles">{t('showMore')}</Link>
      </button>
    </section>
  );
}
