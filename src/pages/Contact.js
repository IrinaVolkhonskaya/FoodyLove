import React from 'react';
import s from './Contact.module.css';

const ContactPage = () => (
  <div className={s.contact}>
    <h4>Наша команда</h4>

    <img
      src="https://www.firestock.ru/download/s/0ts5b93vxd71awt/6.jpg"
      alt=""
      width="300"
      height="200"
    />

    <p>
      <b>Наш телефон: </b>
      <a href="tel:+380500000000">+38(050)123-45-67</a>
    </p>

    <p>
      <b>Вопросы по заказам:</b><a href="mailto:bestservice@foodylove.com">bestservice@foodylove.com</a>
    </p>

    <p>
      <b>По сотрудничеству: </b><a href="mailto:support@foodylove.com">support@foodylove.com</a>
    </p>

    <p>
      <b>Foody Love:</b> Киев, бульвар Леси Украинки, 26
    </p>
  </div>
);

export default ContactPage;
