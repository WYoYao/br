import React,{Component,PropTypes} from 'react';
import './index.css';

export default class Banner extends Component{
    render(){
        return(
            <div className="banner">
                <ul className="bannerList">
                    {
                        this.props.BannerList.filter(item=>item.index).map(item=><li className="bannerListLi" key={item.index}><a href=""><img src={item.url} alt={item.title}/></a></li>)
                    }
                </ul>
            </div>
        )
    }
}

Banner.PropTypes={
    BannerList:PropTypes.arrayOf(PropTypes.shape({
        url:PropTypes.string,
        index:PropTypes.number,
        title:PropTypes.string,
        href:PropTypes.string
    }))
}

// Banner.propTypes ={
//     BannerList:PropTypes.shape({
//         url:PropTypes.string,
//         index:PropTypes.number,
//         title:PropTypes.string
//     })
// }