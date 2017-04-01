import {connect} from 'react-redux';
import Banner from '../../component/Banner/index.jsx';

function mapStateToProps(state) {
  return {
    bannerList: state.Home.bannerList,
    style:state.Home.bannerStyle
  }
}

function mapDispatchToProps(dispatch) {
  return {
    insertBanner:(value)=>{dispatch({
        type:"insertBanner",
        value:value
    })},
    updateStyle:(value)=>{dispatch({
      type:"updateStyle",
      value:value
    })}
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Banner);

