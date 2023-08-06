import { useState } from 'react';

import styles from './Input.module.scss';

export default function Input({ placeholder, id, name, type, register, error, errorMessage, resetField }) {
  const [visible, setVisible] = useState('password');
  const [passwordValue, setPasswordValue] = useState('');
  const [value, setValue] = useState('');

  register(id, {
    onChange: (e) => {
      if (id === 'password') return setPasswordValue(e.target.value);
      setValue(e.target.value);
    },
  });

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
          className={`${styles.input} ${error ? 'border-error' : 'border-darkGray'}`}
          placeholder={placeholder}
          {...register(id)}
        />
        {value && (
          <div className={styles.show} onClick={clearValue}>
            <img src="/icons/close.svg" />
          </div>
        )}
        {passwordValue && (
          <div className={styles.show} onClick={toggleVisibility}>
            {visible === 'password' ? <img src="/icons/hide.svg" /> : <img src="/icons/show.svg" />}
          </div>
        )}
        {error && <span className={styles.error}>{errorMessage}</span>}
      </div>
    </div>
  );
}
