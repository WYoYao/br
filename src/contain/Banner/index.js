import {connect} from 'react-redux';
import Banner from '../../component/Banner/index.jsx';

function mapStateToProps(state) {
  return {
    BannerList: state.Home.BannerList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    insertBanner:(value)=>{dispatch({
        type:"insertBanner",
        value:value
    })}
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Banner);

