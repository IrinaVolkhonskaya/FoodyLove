import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  Button,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    maxWidth: 1000,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const OrderItem = ({
  id,
  date,
  price,
  address,
  rating,
  onShowMoreInfo,
  onDelete,
}) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableBody>
          <TableRow key={id}>
            <TableCell align="right">{date}</TableCell>
            <TableCell align="right">{price}</TableCell>
            <TableCell align="right">{address}</TableCell>
            <TableCell align="right">{rating}</TableCell>
            <TableCell align="right">
              <Button variant="outlined" size="small" onClick={onShowMoreInfo}>
                Детальнее
              </Button>
            </TableCell>
            <TableCell align="right">
              <Button variant="outlined" size="small" onClick={onDelete}>
                Удалить
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
  //   </div>
};

export default OrderItem;
