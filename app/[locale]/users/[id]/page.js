import styles from '@/styles/Users.module.scss';
import MainContainer from '@/components/MainContainer/MainContainer';

export async function generateStaticParams() {
  const users = await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());

  return users.map((user) => ({
    id: user.username,
  }));
}

export const getData = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return res.json();
};

export default async function Page({ params }) {
  const { id } = params;

  // Виклик функції getData з об'єктом params
  const user = await getData({ params });
  return (
    <MainContainer>
      <div className={styles.user_page}>
        <h1>User ID: {id}</h1>
        <h1>Name: {user.name}</h1>
      </div>
    </MainContainer>
  );
}
