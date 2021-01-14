import React from "react";
import OrderItem from "./OrderItem";
// import s from './Orders.module.css';

// import { makeStyles } from "@material-ui/core/styles";

// import {
//   Table,
//   Button,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
// } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   table: {
//     maxWidth: 1000,
//   },
//   button: {
//     margin: theme.spacing(1),
//   },
// }));

interface IOrderProps {
  id: number,
  date: Date,
  price: number,
  address: string,
  rating: number,
}

interface IOrdersProps {
  id?: number,
  items: Array<IOrderProps>,
  onShowMoreInfo: any,
  onDelete: any,
}

const Orders: React.FC<IOrdersProps> = ({ items, onDelete, onShowMoreInfo }) => (
  <table>
    <tbody>
      {items.map(item => (

        <tr key={item.id}>
          <td>
            <OrderItem
              date={item.date}
              price={item.price}
              address={item.address}
              rating={item.rating}
              onShowMoreInfo={() => onShowMoreInfo(item.id)}
              onDelete={() => onDelete(item.id)}
            />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
export default Orders;