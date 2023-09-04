import Link from 'next/link';
import React from 'react';
import styles from '@/styles/Users.module.scss';
import MainContainer from '@/components/MainContainer/MainContainer';

export const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};

export default async function Users() {
  const users = await getData();
  return (
    <MainContainer keywords={'users page'}>
      <div className={styles.users_page}>
        <h1>Users list</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </MainContainer>
  );
}
