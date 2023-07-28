import { useState } from 'react';
import styles from './Input.module.scss';

export default function Input({ placeholder, id, name, type, register, error, errorMessage, showPassword = false }) {
  const [visible, setVisible] = useState('password');

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
          className={`${styles.input} ${error ? 'border-red-500' : 'border-[#505050]'}`}
          placeholder={placeholder}
          {...register(id)}
        />
        {showPassword && (
          <span className={styles.show} onClick={toggleVisibility}>
            {visible === 'password' ? 'Show' : 'Hide'}
          </span>
        )}
        {error && <span className="absolute text-xs text-red-500">{errorMessage}</span>}
      </div>
    </div>
  );
}
