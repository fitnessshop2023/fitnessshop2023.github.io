import React, { useEffect, useState } from 'react';
import styles from './Dropdown.module.scss';
import Image from 'next/image';
import { Controller } from 'react-hook-form';
import { useLocale } from 'next-intl';

export default function Dropdown({ list, setPlaceholder, placeholder, id, name, control, error, errorMessage }) {
  const locale = useLocale();

  return (
    <Controller
      name={id}
      control={control}
      defaultValue=""
      render={({ field }) => {
        const [isOpen, setIsOpen] = React.useState(false);

        const handleItemClick = (selectedItem, e) => {
          field.onChange(selectedItem);
          setPlaceholder(selectedItem);
          setIsOpen(false);
          if (e.target.getAttribute('data-ref'))
          if(!localStorage.getItem('ref')) {
            localStorage.setItem('ref', e.target.getAttribute('data-ref'));
          } else {
            localStorage.removeItem('ref');
            localStorage.setItem('ref', e.target.getAttribute('data-ref'));
          }
        };

        const changeHandler = (e) => {
          field.onChange(e);
          setPlaceholder(e);
        };

        return (
          <div className="relative">
            <label htmlFor={id} className={styles.label}>
              {name}
            </label>
            <div className="relative">
              <input
                type="text"
                name={id}
                id={id}
                className={`${styles.input} ${isOpen && styles.show} ${
                  error ? 'border-error' : 'border-darkGray'
                }`}
                placeholder={placeholder}
                onClick={() => setIsOpen(!isOpen)}
                onChange={(e) => changeHandler(e.target.value)}
                value={field.value}
              />
              <div className={styles.arrow} onClick={() => setIsOpen(!isOpen)}>
                <Image src="/icons/down_arrow.svg" width={16} height={16} alt="down_arrow icon" />
              </div>
              {error && <span className={styles.error}>{errorMessage}</span>}
            </div>
            {isOpen && (
              <ul className={`${styles.dropdown_list} ${error ? 'border-error' : 'border-darkGray'}`}>
                {list && list.map((item, index) => (
                  <li 
                    key={index} 
                    onClick={(e) => handleItemClick(locale === 'ua' ? item.itemUA : item.itemEN, e)}
                    data-ref={item.Ref}
                  >
                    {locale === 'ua' ? (`${item.itemUA}`) :  (`${item.itemEN}`)}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      }}
    />
  );
}
