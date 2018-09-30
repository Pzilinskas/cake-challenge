import { connect } from 'react-redux';
import Cakes from '../components/Cakes';

import {userLoadsCakes} from '../actionCreators/cakeActionCreators';

function mapStateToProps(state) {
    return{
        isGettingCakes: state.cake.isGettingCakes,
        cakes: state.cake.cakes
    }
}
function mapDispatchToProps(dispatch) {
    return{
        userLoadsCakes(){
            dispatch(userLoadsCakes());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cakes);