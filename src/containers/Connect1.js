/**
 * Created by lucas lee on 2017/7/23.
 */
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import * as ActionCreators from '../actions'

export default connect(
    state => ({ counter: state.counter }),
    ActionCreators
)(Counter)
