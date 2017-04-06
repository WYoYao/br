// import {connect} from 'react-redux';
let {connect} =require('react-redux');
import Banner from '../../component/Banner/index.jsx';

function mapStateToProps(state) {
  return {
    bannerList: state.Home.bannerList,
    left:state.Home.left,
    width:state.Home.width
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateWidth:(value)=>{dispatch({
      type:"width",
      value:value
    })},
    updateLeft:(value)=>{
      dispatch({
      type:"left",
      value:value
    });
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Banner);

