import React from "react";
import { Link } from "react-router-dom";
import routes from "../../configs/routes";

import s from "./MenuListView.module.css";
import "./MenuListView.css";
import { Button } from "@material-ui/core";
import { Card } from "semantic-ui-react";

interface IMenuList{
  menu: IMenuItem[],
  addToCart: (arg0: number) => number,
}

interface IMenuItem {
  id: number,
  image: string,
  name: string, 
  price: number
}

export default function MenuList({ menu, addToCart }: IMenuList) {
  return (
    menu && (
      <Card.Group itemsPerRow={5}>
        {menu.map(({ id, image, name, price }: IMenuItem) => (
          <Card key={id} color="blue" raised image={image}>
            <div className="menuList">
              <img className={s.image} src={image} alt="" />
              <p>
                <b className={s.name}>{name}</b>
              </p>
              <div className="menubutton">
                <p className={s.price}>Цена: {price} грн</p>

                <Link to={`${routes.MENU}/${id}`}>
                  <Button
                    className={s.button}
                    variant="contained"
                    color="primary"
                    size="small"
                  >
                    Детальнее
                  </Button>
                </Link>

                <Button
                  className={s.button}
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => addToCart(id)}
                >
                  В корзину
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </Card.Group>
    )
  );
}
