import React,{Component,PropTypes} from 'react';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';

import './index.css';

export default class Banner extends Component{
    // 开始事件
    handleTouchStart(e){

        let {updateLeft} =this.props;

        updateLeft("50px");
        console.log("TouchStart");
        // console.log(e.changedTouches);
        console.log(e.targetTouches);
    }
    // 结束时间
    handleTouchEnd(e){
        console.log("TouchEnd");
        console.log(e.targetTouches);
    }
    
    handleTouchMove(e){
        console.log("TouchMove");
        console.log(e.targetTouches);
    }
    render(){

        console.log(this.props);
        // let left=this.props.left;

        return(
            <div className="banner">
                <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                    <ul key="bannerUlKey" style={{
                        left:this.props.left
                    }} className="bannerList" onTouchStart={this.handleTouchStart.bind(this)} onTouchEnd={this.handleTouchEnd.bind(this)} onTouchMove={this.handleTouchMove.bind(this)}>
                        {
                            this.props.bannerList.filter(item=>item.index).map(item=><li className="bannerListLi" key={item.index}><a href=""><img src={item.url} alt={item.title}/></a></li>)
                        }
                    </ul>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

Banner.PropTypes={
    bannerList:PropTypes.arrayOf(PropTypes.shape({
        url:PropTypes.string,
        index:PropTypes.number,
        title:PropTypes.string,
        href:PropTypes.string
    }))
}