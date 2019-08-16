import React from 'react';

// styles
import s from './styles/preloader.module.css';

// images
import Spinner from './images/Spinner.svg';

export const Preloader = () => (
  <div className={s.wrap}>
    <div className={s.inner}>
      <img src={Spinner} alt="Spinner" />
    </div>
  </div>
);

export default Preloader;
