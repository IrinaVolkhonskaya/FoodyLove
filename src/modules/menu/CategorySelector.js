import React from 'react';
import s from './CategorySelector.module.css';

const handleChangeCategory = e => e.target.value;
console.log(handleChangeCategory);

const CategorySelector = ({ options, value, handleChangeCategory }) => (
  <select className={s.select} value={value} onChange={handleChangeCategory}>
    {options.map(o => (
      <option key={o} value={o}>
        {o}
      </option>
    ))}
  </select>
);

export default CategorySelector;
