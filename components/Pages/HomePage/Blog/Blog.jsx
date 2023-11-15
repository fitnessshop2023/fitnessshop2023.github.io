import { useTranslations } from 'next-intl';
import Link from 'next/link';

import styles from './Blog.module.scss';

export default function Blog() {
  const t = useTranslations('blogHomePage');

  return (
    <section>
      <h2>{t('blog')}</h2>
      <div className={styles.container}>
        <div className={styles.blogContainer}>
          <img src="/img/blog_background.jpg" alt="" className="w-full" />
          <div className="p-3">
            <h3 className={styles.title}>Вітамін D взимку: де його шукати і чому це важливо</h3>
            <p className={styles.description}>
              Зимовий сезон завжди був випробуванням для багатьох з нас. Під час літа ми насолоджуємося сонцем,
              засмагаємо та споживаємо багато свіжих овочів та фруктів, але...
            </p>
          </div>
        </div>
        <div className={styles.blogContainer}>
          <img src="/img/blog_background.jpg" alt="" />
          <div className="p-3">
            <h3 className={styles.title}>Ефективні вправи для накачування сідниць вдома</h3>
            <p className={styles.description}>
              Безумовно, одним з проявів любові до власного тіла є дбайливе ставлення до його фізичної форми, сили та
              витривалості. Це стосується не лише естетичного аспекту, але...
            </p>
          </div>
        </div>
      </div>
      <button className={styles.buttonLink}>
        <Link href="/blogs">{t('showMore')}</Link>
      </button>
    </section>
  );
}
