import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions, menuOperations } from "../../redux";
import * as selectors from "../../redux/selectors";

import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";

import s from "./CategorySelector.module.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginLeft: 20,
  },
}));

export default function CategorySelectorContainer({ currentName }) {
  const classes = useStyles();

  const dispatch = useDispatch();
  const getAllCategories = () => dispatch(menuOperations.getAllCategories());

  const categoryNames = useSelector(selectors.getCategoryNames); //["soup", "dessert", "salad", "main course"]
  const onChangeCategory = (currentName) =>
    dispatch(actions.selectCategory(currentName));

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor="age-native-label-placeholder">
          Категория
        </InputLabel>
        <NativeSelect
          native
          value={currentName}
          onChange={(e) => onChangeCategory(e.target.value)}
        >
          {categoryNames.map((name) => (
            <option className={s.select} key={name} value={name}>
              {name}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
}

//========================================================================
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import CategorySelectorView from './CategorySelectorView';
// import { actions, menuOperations } from '../../redux';
// import * as selectors from '../../redux/selectors';

// class CategorySelectorContainer extends Component {
//   componentDidMount() {
//     this.props.getAllCategories();
//   }

//   render() {
//     return <CategorySelectorView {...this.props} />;
//   }
// }

// const mapState = state => ({
//   categoryNames: selectors.getCategoryNames(state), //["soup", "dessert", "salad", "main course"]
// });

// const mapDispatch = {
//   getAllCategories: menuOperations.getAllCategories,
//   onChangeCategory: actions.selectCategory,
// };

// export default connect(mapState, mapDispatch)(CategorySelectorContainer);
