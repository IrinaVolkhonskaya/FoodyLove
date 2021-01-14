import React from 'react';
import s from './About.module.css';

const AboutPage = () => (
  <div className={s.about}>
    <h4>Что такое FOODY LOVE?</h4>
    <br />
    <p>
      <b>Классическая кухня в современной подаче. </b>
    </p>
    <p>
      <b>Вкусно, как дома!</b>
    </p>
    <img
      src="https://moe-tambov.ru/media_new/6/3/2/8/0/5/material_1007277/original_photo-thumb_650.jpg"
      alt="Наша Команда"
      width="600"
    />
  </div>
);

export default AboutPage;
