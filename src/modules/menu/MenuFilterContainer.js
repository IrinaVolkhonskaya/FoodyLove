import MenuFilterView from './MenuFilterView.tsx';
import { connect } from 'react-redux';
import * as selectors from '../../redux/selectors';
import actions from '../../redux/actionsMenu.js';

const mapState = state => ({
  value: selectors.getFilter(state),
});

const mapDispatch = { onChange: actions.changeFilter };

export default connect(mapState, mapDispatch,)(MenuFilterView);
