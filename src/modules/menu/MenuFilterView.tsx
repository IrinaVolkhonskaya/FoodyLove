import React from 'react';
import { Input } from 'semantic-ui-react'
import './MenuFilter.css';

interface IMenuFilterViewProps {
  value: string,
  onChange: Function
}

const MenuFilterView: React.FC<IMenuFilterViewProps> = ({ value = '', onChange = () => null }) => (
  <Input
    value={value}
    onChange={e => {
      // console.log(value);
      // console.log(e.target.value);
      return onChange(e.target.value);
    }}
    type="text"
    placeholder="Поиск..."
  />
);

export default MenuFilterView;
