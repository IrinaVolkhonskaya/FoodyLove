import { createSelector } from 'reselect';

//Menu
export const getMenuIds = state => state.menu.menuIds; //ids блюд
export const getMenuEntities = state => state.entities.menu;

export const getAllMenu = createSelector(
  [getMenuIds, getMenuEntities],
  (ids, entities) => ids.map(id => entities[id]),
);
//переход к рендеру одного артикула меню

export const getMenuItemById = createSelector(
  [getAllMenu, (_, menuItem) => menuItem],
  (items, menuItem) => items.find(item => item.id === menuItem),
);


//Category
export const getCategories = state => state.categories.items; // объекты категорий
export const getSelectedCategory = state => state.categories.selectedCategory;

export const getCategoryNames = createSelector([getCategories], categories =>
  categories.map(({ name }) => name),
);

//Filter
export const getFilter = state => state.menu.filter;

// составной селектор для поиска по имени и выбора по категории одовременно
export const getItemsAndCategory = createSelector(
  [getAllMenu, getFilter, getSelectedCategory],
  (menu, filter, selectedCategory) =>
    menu.filter(
      ({ name, category }) =>
        name.toLowerCase().includes(filter) &&
        category.toLowerCase().includes(selectedCategory),
    ),
);

//Cart
function getCartMenuItemsIds(state) {
  return state.cart.ids;
}
const getCartMenuItemsAmounts = state => state.cart.amount;

export const getCartProductsAmount = createSelector(
  getCartMenuItemsIds,
  ids => ids.length,
);

export const getCartMenuItems = createSelector(
  [getCartMenuItemsIds, getCartMenuItemsAmounts, getMenuEntities],
  (ids, amounts, entities) =>
    ids.map(id => ({
      ...entities[id],
      amount: amounts[id],
    })),
);

export default {
  getMenuIds,
  getMenuEntities,
  getCartMenuItemsIds,
  getCartMenuItemsAmounts,
  getMenuItemById,
};
