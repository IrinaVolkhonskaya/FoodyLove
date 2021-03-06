import React from 'react';
import s from './Delivery.module.css';


const DeliveryPage = () => (
  <div className={s.delivery}>
    <h4>Доставка осуществляется только по Киеву</h4>
    <p>
      Стоимость доставки: 90 грн (доставка в течение 3-х часов с момента заказа)
    </p>
    <p>Минимальная сумма заказа: 350 грн</p>
    <p>От 1000 грн – доставка бесплатно</p>

    <h4>Способ оплаты:</h4>
    <ul>
      <li>Наличными курьеру.</li>
      <li>Через терминал курьеру.</li>
    </ul>
    <p>Сообщите менеджеру удобный для Вас способ оплаты.</p>
  </div>
);

export default DeliveryPage;
