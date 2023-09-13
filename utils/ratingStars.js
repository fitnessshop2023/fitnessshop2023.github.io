export const ratingStars = (rating) => {
  const stars = [];
  const currentRating = Math.round(rating * 2) / 2;

  for (let i = 1; i <= 5; i++) {
    if (currentRating >= i) {
      stars.push(
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M7.5262 3.40548C7.67915 2.95178 8.32086 2.95178 8.4738 3.40548L9.3017 5.86135C9.37025 6.0647 9.56091 6.20163 9.7755 6.20163H12.4143C12.9031 6.20163 13.1015 6.8308 12.7011 7.11119L10.5983 8.58371C10.4166 8.71097 10.3405 8.94276 10.4113 9.153L11.2219 11.5576C11.3762 12.015 10.8568 12.4038 10.4613 12.1269L8.28681 10.6041C8.11461 10.4835 7.88539 10.4835 7.71319 10.6041L5.53866 12.1269C5.14324 12.4038 4.62385 12.015 4.77805 11.5576L5.58866 9.153C5.65953 8.94276 5.58339 8.71097 5.40166 8.58371L3.29887 7.11119C2.89848 6.8308 3.09687 6.20163 3.58568 6.20163H6.2245C6.43909 6.20163 6.62975 6.0647 6.6983 5.86135L7.5262 3.40548Z"
            fill="#FFCC00"
          />
        </svg>,
      );
    } else if (currentRating % 1 !== 0 && i === Math.ceil(currentRating)) {
      stars.push(
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <mask id="path-1-inside-1_499_3883" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 3.00694C7.77582 2.96992 7.52885 3.08104 7.44146 3.34028L6.61357 5.79614C6.54502 5.99949 6.35435 6.13642 6.13976 6.13642H3.50094C3.01213 6.13642 2.81374 6.7656 3.21414 7.04598L5.31693 8.5185C5.49865 8.64576 5.57479 8.87756 5.50392 9.08779L4.69332 11.4924C4.53911 11.9498 5.05851 12.3385 5.45392 12.0617L7.62846 10.5389C7.73888 10.4616 7.87275 10.4338 8 10.4557V3.00694Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 3.00694C7.77582 2.96992 7.52885 3.08104 7.44146 3.34028L6.61357 5.79614C6.54502 5.99949 6.35435 6.13642 6.13976 6.13642H3.50094C3.01213 6.13642 2.81374 6.7656 3.21414 7.04598L5.31693 8.5185C5.49865 8.64576 5.57479 8.87756 5.50392 9.08779L4.69332 11.4924C4.53911 11.9498 5.05851 12.3385 5.45392 12.0617L7.62846 10.5389C7.73888 10.4616 7.87275 10.4338 8 10.4557V3.00694Z"
            fill="#FFCC00"
          />
          <path
            d="M7.44146 3.34028L8.38907 3.65972L8.38907 3.65972L7.44146 3.34028ZM8 3.00694H9V2.1585L8.16289 2.02029L8 3.00694ZM6.61357 5.79614L7.56117 6.11559V6.11559L6.61357 5.79614ZM3.21414 7.04598L2.64053 7.86511H2.64053L3.21414 7.04598ZM5.31693 8.5185L5.89054 7.69938H5.89054L5.31693 8.5185ZM5.50392 9.08779L6.45153 9.40724L5.50392 9.08779ZM4.69332 11.4924L3.74571 11.1729H3.74571L4.69332 11.4924ZM5.45392 12.0617L6.02754 12.8808H6.02754L5.45392 12.0617ZM7.62846 10.5389L7.05485 9.71976L7.05485 9.71976L7.62846 10.5389ZM8 10.4557L7.8308 11.4412L9 11.642V10.4557H8ZM8.38907 3.65972C8.35129 3.77178 8.26633 3.87529 8.15255 3.93807C8.04854 3.99546 7.93759 4.01017 7.83711 3.99358L8.16289 2.02029C7.51997 1.91415 6.75798 2.23735 6.49386 3.02083L8.38907 3.65972ZM7.56117 6.11559L8.38907 3.65972L6.49386 3.02083L5.66596 5.4767L7.56117 6.11559ZM6.13976 7.13642C6.78353 7.13642 7.35552 6.72563 7.56117 6.11559L5.66596 5.47669C5.73451 5.27335 5.92517 5.13642 6.13976 5.13642V7.13642ZM3.50094 7.13642H6.13976V5.13642H3.50094V7.13642ZM3.78775 6.22685C4.18815 6.50724 3.98975 7.13642 3.50094 7.13642V5.13642C2.03452 5.13642 1.43933 7.02395 2.64053 7.86511L3.78775 6.22685ZM5.89054 7.69938L3.78775 6.22685L2.64053 7.86511L4.74331 9.33763L5.89054 7.69938ZM6.45153 9.40724C6.66414 8.77654 6.43573 8.08116 5.89054 7.69938L4.74331 9.33763C4.56158 9.21037 4.48545 8.97858 4.55632 8.76834L6.45153 9.40724ZM5.64092 11.8118L6.45153 9.40724L4.55632 8.76834L3.74571 11.1729L5.64092 11.8118ZM4.88031 11.2425C5.27573 10.9656 5.79513 11.3544 5.64092 11.8118L3.74571 11.1729C3.2831 12.5452 4.84129 13.7115 6.02754 12.8808L4.88031 11.2425ZM7.05485 9.71976L4.88031 11.2425L6.02754 12.8808L8.20207 11.358L7.05485 9.71976ZM8.16921 9.47009C7.78828 9.40469 7.38634 9.48763 7.05485 9.71976L8.20207 11.358C8.09142 11.4355 7.95723 11.463 7.8308 11.4412L8.16921 9.47009ZM9 10.4557V3.00694H7V10.4557H9Z"
            fill="#FFCC00"
            mask="url(#path-1-inside-1_499_3883)"
          />
          <mask id="path-3-inside-2_499_3883" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 3C8.19867 2.99999 8.39734 3.11342 8.47382 3.34028L9.30172 5.79614C9.37027 5.99949 9.56093 6.13642 9.77552 6.13642H12.4143C12.9031 6.13642 13.1015 6.7656 12.7011 7.04598L10.5984 8.5185C10.4166 8.64576 10.3405 8.87756 10.4114 9.08779L11.222 11.4924C11.3762 11.9498 10.8568 12.3385 10.4614 12.0617L8.28682 10.5389C8.20072 10.4786 8.10036 10.4484 8 10.4485V3Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 3C8.19867 2.99999 8.39734 3.11342 8.47382 3.34028L9.30172 5.79614C9.37027 5.99949 9.56093 6.13642 9.77552 6.13642H12.4143C12.9031 6.13642 13.1015 6.7656 12.7011 7.04598L10.5984 8.5185C10.4166 8.64576 10.3405 8.87756 10.4114 9.08779L11.222 11.4924C11.3762 11.9498 10.8568 12.3385 10.4614 12.0617L8.28682 10.5389C8.20072 10.4786 8.10036 10.4484 8 10.4485V3Z"
            fill="#7C7C7C"
          />
          <path
            d="M8.47382 3.34028L7.52622 3.65972V3.65972L8.47382 3.34028ZM8 3H7V2.00004L7.99996 2L8 3ZM9.30172 5.79614L10.2493 5.4767V5.4767L9.30172 5.79614ZM12.7011 7.04598L12.1275 6.22685L12.1275 6.22685L12.7011 7.04598ZM10.5984 8.5185L10.0247 7.69938H10.0247L10.5984 8.5185ZM10.4114 9.08779L9.46376 9.40724L10.4114 9.08779ZM11.222 11.4924L12.1696 11.1729H12.1696L11.222 11.4924ZM10.4614 12.0617L9.88775 12.8808H9.88775L10.4614 12.0617ZM8.28682 10.5389L7.71321 11.358L7.71321 11.358L8.28682 10.5389ZM8 10.4485L8.00004 11.4485L7 11.4485V10.4485H8ZM7.52622 3.65972C7.55849 3.75546 7.62687 3.84888 7.72346 3.91405C7.81394 3.97509 7.9116 4 8.00004 4L7.99996 2C8.57877 1.99998 9.1928 2.34263 9.42143 3.02083L7.52622 3.65972ZM8.35411 6.11559L7.52622 3.65972L9.42143 3.02083L10.2493 5.4767L8.35411 6.11559ZM9.77552 7.13642C9.13175 7.13642 8.55976 6.72563 8.35411 6.11559L10.2493 5.4767C10.1808 5.27335 9.99011 5.13642 9.77552 5.13642V7.13642ZM12.4143 7.13642H9.77552V5.13642H12.4143V7.13642ZM12.1275 6.22685C11.7271 6.50724 11.9255 7.13642 12.4143 7.13642V5.13642C13.8808 5.13642 14.476 7.02395 13.2748 7.86511L12.1275 6.22685ZM10.0247 7.69938L12.1275 6.22685L13.2748 7.86511L11.172 9.33763L10.0247 7.69938ZM9.46376 9.40724C9.25114 8.77654 9.47956 8.08116 10.0247 7.69938L11.172 9.33763C11.3537 9.21037 11.4298 8.97858 11.359 8.76834L9.46376 9.40724ZM10.2744 11.8118L9.46376 9.40724L11.359 8.76834L12.1696 11.1729L10.2744 11.8118ZM11.035 11.2425C10.6396 10.9656 10.1202 11.3544 10.2744 11.8118L12.1696 11.1729C12.6322 12.5452 11.074 13.7115 9.88775 12.8808L11.035 11.2425ZM8.86044 9.71976L11.035 11.2425L9.88775 12.8808L7.71321 11.358L8.86044 9.71976ZM7.99996 9.44845C8.30061 9.44844 8.6022 9.53892 8.86044 9.71976L7.71321 11.358C7.79925 11.4183 7.90011 11.4485 8.00004 11.4485L7.99996 9.44845ZM7 10.4485V3H9V10.4485H7Z"
            fill="#7C7C7C"
            mask="url(#path-3-inside-2_499_3883)"
          />
        </svg>,
      );
    } else {
      stars.push(
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M7.5262 3.40548C7.67915 2.95178 8.32086 2.95178 8.4738 3.40548L9.3017 5.86135C9.37025 6.0647 9.56091 6.20163 9.7755 6.20163H12.4143C12.9031 6.20163 13.1015 6.8308 12.7011 7.11119L10.5983 8.58371C10.4166 8.71097 10.3405 8.94276 10.4113 9.153L11.2219 11.5576C11.3762 12.015 10.8568 12.4038 10.4613 12.1269L8.28681 10.6041C8.11461 10.4835 7.88539 10.4835 7.71319 10.6041L5.53866 12.1269C5.14324 12.4038 4.62385 12.015 4.77805 11.5576L5.58866 9.153C5.65953 8.94276 5.58339 8.71097 5.40166 8.58371L3.29887 7.11119C2.89848 6.8308 3.09687 6.20163 3.58568 6.20163H6.2245C6.43909 6.20163 6.62975 6.0647 6.6983 5.86135L7.5262 3.40548Z"
            fill="#7C7C7C"
          />
        </svg>,
      );
    }
  }

  return stars;
};