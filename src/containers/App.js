/**
 * Created by lucas lee on 2017/7/23.
 */
import { connect } from 'react-redux'
import * as ActionCreators from '../actions'
import Counter from '../components/Counter'

export default connect(
    state => ({ counter: state.counter }),
    ActionCreators
)(Counter)
