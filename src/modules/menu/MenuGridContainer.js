import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import MenuGrid from './MenuGridView';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import CategorySelector from './CategorySelector';
import CurrentFilter from '../menu/CurrentFilter';
import menuJson from '../../menu.json';
import MenuFilter from '../menu/MenuFilter';
import FilterList from './FilterList';

import categories from '../../services/categories';
import * as API from '../../services/api';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

const filterMenu = (filter, menuJson) => {
  return menuJson.filter(menuItem =>
    menuItem.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

class MenuGridContainer extends Component {
  state = {
    filter: '',
    menu: [],
    loading: false,
    error: null,
  };

  async componentDidMount() {
    const category = getCategoryFromProps(this.props);
    if (!category) {
      return this.props.history.replace({
        pathname: this.props.location.pathname,
        search: 'category=all',
      });
    }

    if (!category) {
      return API.getAllMenuItems().then(menu => this.setState({ menu }));
    }

    API.getMenuItemsWithCategory(category).then(menu =>
      this.setState({ menu }),
    );

    // this.setState({ loading: true });
    // try {
    //   const menu = await API.getAllMenuItems();

    //   this.setState({ menu, loading: false });
    // } catch (error) {
    //   this.setState({ error, loading: false });
    // }
  }

  handleFilterChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  handleCategoryChange = category => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `category=${category}`,
    });
  };

  render() {
    const { menu, loading, error, filter } = this.state;
    const filteredMenu = filterMenu(filter, menuJson);

    const currentCategory = getCategoryFromProps(this.props);

    return (
      <div>
        <CategorySelector
          options={categories}
          value={currentCategory}
          onChange={this.handleCategoryChange}
        />

        {loading && <Loader />}
        {error && <Error />}
        {menu.length > 0 && <MenuGrid items={menu} />}

        <MenuFilter filter={filter} onFilterChange={this.handleFilterChange} />
        <FilterList menuJson={filteredMenu} />
        <CurrentFilter value={currentCategory} />
      </div>
    );
  }
}

export default withRouter(MenuGridContainer);
