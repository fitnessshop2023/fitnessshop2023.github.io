import styles from '@/styles/Home.module.scss'
import MainContainer from '@/components/MainContainer'

export default function Home() {
  return (
    <MainContainer keywords={"main page"}>
      <div className={styles.home_page}>
        <h1>Home page</h1>
      </div>
    </MainContainer>
  )
}
