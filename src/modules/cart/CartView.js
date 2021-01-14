import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  Table,
  Button,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
// import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';

import "./Cart.css";

const useStyles = makeStyles((theme) => ({
  table: {
    maxWidth: 1000,
  },
  button: {
    margin: theme.spacing(1),
  },
}));



const CartView = ({
  menuCart = [],
  removeFromCart,
  addToCart,
  decreaseFromCart,
}) => {
  const classes = useStyles();
  // console.log(`menuCart:`, menuCart);
  return menuCart.length > 0 ? (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Название</TableCell>
            <TableCell align="right">Количество</TableCell>
            <TableCell align="right">Цена</TableCell>
            <TableCell align="right">Сумма</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {menuCart.map(({ id, name, amount, price }) => (
            <TableRow key={id}>
              <TableCell component="th" scope="row">
                {name}
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => addToCart(id)}
                >
                  +
                </Button>
                {amount}
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => decreaseFromCart(id)}
                >
                  -
                </Button>
              </TableCell>
              <TableCell align="right">{price} грн</TableCell>
              <TableCell align="right">{amount * price} грн</TableCell>
              <TableCell align="right">
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => removeFromCart(id)}
                >
                  x
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <h5>В корзине нет товаров!</h5>
  );
};


export default CartView;
