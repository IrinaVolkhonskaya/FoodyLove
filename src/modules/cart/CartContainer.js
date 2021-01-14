import { connect } from 'react-redux';
import CartView from './CartView';
import * as selectors from '../../redux/selectors';
import actions from '../../redux/actionsCart';

const mapState = (state) => ({
  menuCart: selectors.getCartMenuItems(state),
});


const mapDispatch = {
  addToCart: actions.addToCart,
  removeFromCart: actions.removeFromCart,
  decreaseFromCart: actions.decreaseFromCart,
};

export default connect<(mapState, mapDispatch)(CartView);
