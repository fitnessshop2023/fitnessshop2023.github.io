import { useEffect, useState } from 'react';

import styles from './Input.module.scss';
import Image from 'next/image';

export default function Input({ disabled, placeholder, id, name, type, register, error, errorMessage, resetField }) {
  const [visible, setVisible] = useState('password');
  const [passwordValue, setPasswordValue] = useState('');
  const [value, setValue] = useState('');
  const [edit, setEdit] = useState(disabled)

  register(id, {
    onChange: (e) => {
      if (type === 'password') return setPasswordValue(e.target.value);
      setValue(e.target.value);
    },
  });

  const editHandler = () => {
    setEdit(!edit);
  }

  const clearValue = () => {
    setValue('');
    resetField();
  };



  const toggleVisibility = () => setVisible((prevState) => (prevState === 'password' ? 'text' : 'password'));

  return (
    <div>
      <label htmlFor={id} className={styles.label}>
        {name}
      </label>
      <div className="relative">
        <input
          type={type === 'password' ? visible : type}
          name={id}
          id={id}
          disabled={edit}
          className={`${styles.input} ${error ? 'border-error' : 'border-darkGray'}`}
          placeholder={placeholder}
          {...register(id)}
        />
        {value && (
          <div className={styles.show} onClick={clearValue}>
            <Image src="/icons/close.svg" width={16} height={16} alt='close ivcon'/>
          </div>
        )}
        {passwordValue && (
          <div className={styles.show} onClick={toggleVisibility}>
            {visible === 'password' ? <Image src="/icons/hide.svg" width={16} height={16} alt='hide ivcon'/> : <Image src="/icons/show.svg" width={16} height={16} alt='show ivcon'/>}
          </div>
        )}
        {error && <span className={styles.error}>{errorMessage}</span>}
        <div className={styles.edit} onClick={editHandler}>
            <Image src="/icons/pencil.svg" width={16} height={16} alt="pencil icon"/>
        </div>
      </div>
    </div>
  );
}
