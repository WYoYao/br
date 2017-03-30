import {connect} from 'react-redux';
import Banner from '../../component/Banner/index.jsx';

function mapStateToProps(state) {
  return {
    bannerList: state.Home.bannerList,
    left:state.Home.left
  }
}

function mapDispatchToProps(dispatch) {
  return {
    insertBanner:(value)=>{dispatch({
        type:"insertBanner",
        value:value
    })},
    updateLeft:(value)=>{dispatch({
      type:"updateLeft",
      value:value
    })}
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Banner);

