import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

import styles from './ModalWindow.module.scss';

export default function ModalWindow({ isOpen, setIsOpen, children, title }) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.modalContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}>
          <motion.div
            className={styles.modal}
            initial={{ translateY: '100%' }}
            animate={{ translateY: '0%' }}
            exit={{ translateY: '100%' }}
            transition={{ duration: 0.5 }}
            onAnimationComplete={() => {
              if (!isOpen) setIsOpen(false);
            }}>
            <div className={styles.modalHeader}>
              <p className={styles.title}>{title}</p>
              <img src="/icons/close.svg" className="cursor-pointer" onClick={closeModal} />
            </div>
            <div className={styles.modalContent}>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
