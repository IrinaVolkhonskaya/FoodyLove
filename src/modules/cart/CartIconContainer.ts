import { connect } from 'react-redux';
import CartIconView from './CartIconView';
import * as selectors from '../../redux/selectors';

type StateCartIcon = {
    ids: number[], 
  }

const mapState = (state: StateCartIcon) => ({
    amount: selectors.getCartProductsAmount(state),
});

export default connect(mapState)(CartIconView);
