import { connect } from 'react-redux';
import {
  compose,
  pure,
} from 'recompose';
import HelpComponent from '../components/HelpComponent';


export default compose(
  connect(null, null),
  pure,
)(HelpComponent);