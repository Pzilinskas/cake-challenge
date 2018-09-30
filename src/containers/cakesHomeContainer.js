import { connect } from 'react-redux';
import CakesHomePage from '../components/CakesHomePage';

import {userLoadsCakes, userLoadsCake} from '../actionCreators/cakeActionCreators';

function mapStateToProps(state) {
    return{
        isGettingCakes: state.cake.isGettingCakes,
        cakes: state.cake.cakes,
        isGettingCake: state.cake.isGettingCake,
        getCakeInvalid: state.cake.getCakeInvalid,
        currentCake: state.cake.currentCake
    }
}
function mapDispatchToProps(dispatch) {
    return{
        userLoadsCakes(){
            dispatch(userLoadsCakes());
        },
        userLoadsCake(cakeId){
            dispatch(userLoadsCake(cakeId));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakesHomePage);