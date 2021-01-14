import React from "react";
import s from "./MenuListView.module.css";

interface IMenuItemViewProps {
  id: number,
  name: string,
  image: string,
  price: number,
  description: string,
}


const MenuItemView: React.FC<IMenuItemViewProps> = ({ id, name, image, price, description }) => {
  return (
    <div className="menuItem">
      Menu Item ID: {id}
      <h3>{name}</h3>
      <div key={id}>
        <img className={s.image} src={image} alt={name} />
        <p>
          <b>{name}</b>
        </p>
        <p>Цена:{price} грн</p>
        <p>Описание: {description}</p>
      </div>
    </div>
  );
};

export default MenuItemView;
