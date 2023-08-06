import UserRegistrationForm from '@/components/forms/UserRegistrationForm/UserRegistrationForm';
import MainContainer from '@/components/MainContainer';
import styles from '@/styles/Home.module.scss';

export default function Home() {
  return (
    <MainContainer keywords={'main page'}>
      <div className={styles.home_page}>
        <h1>Home page</h1>
        {/* <UserLoginForm /> */}
      </div>
    </MainContainer>
  );
}
