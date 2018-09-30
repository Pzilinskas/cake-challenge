import { connect } from 'react-redux';
import CakesHomePage from '../components/CakesHomePage';

import {userLoadsCakes, userLoadsCake, userCreatesCake} from '../actionCreators/cakeActionCreators';

function mapStateToProps(state) {
    return{
        isGettingCakes: state.cake.isGettingCakes,
        cakes: state.cake.cakes,
        isGettingCake: state.cake.isGettingCake,
        getCakeInvalid: state.cake.getCakeInvalid,
        currentCake: state.cake.currentCake,
        isCreatingCake: state.cake.isCreatingCake,
        createCakeInvalid: state.cake.createCakeInvalid,
        createCakeSuccessful: state.cake.createCakeSuccessful
    }
}
function mapDispatchToProps(dispatch) {
    return{
        userLoadsCakes(){
            dispatch(userLoadsCakes());
        },
        userLoadsCake(cakeId){
            dispatch(userLoadsCake(cakeId));
        },
        userCreatesCake(name, comment, imageUrl, yumFactor) {
            return dispatch(userCreatesCake(name, comment, imageUrl, yumFactor));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakesHomePage);