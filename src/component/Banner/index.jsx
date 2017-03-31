import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './index.css';

export default class Banner extends Component {
    // 开始事件
    handleTouchStart(e) {
        debugger;
        let { insertBanner } = this.props;

        insertBanner({
            title: "title3",
            url: "http://h.jsj.com.cn/m/Topic/201612/yinchuan/images/banner750_20170122.png",
            index: +new Date(),
            href: "www.baidu.com"
        })

        console.log(this.props);
        // updateLeft("-500px");
        console.log("TouchStart");
        // console.log(e.changedTouches);
        console.log(e.targetTouches);
    }
    // 添加图片
    addBanner(e) {
        let { insertBanner } = this.props;
        insertBanner({
            title: "title3",
            url: "http://h.jsj.com.cn/m/Topic/201612/yinchuan/images/banner750_20170122.png",
            index: +new Date(),
            href: "www.baidu.com"
        })
    }
    // 结束时间
    handleTouchEnd(e) {
        console.log("TouchEnd");
        console.log(e.targetTouches);
    }

    handleTouchMove(e) {
        console.log("TouchMove");
        console.log(e.targetTouches);
    }
    render() {

        console.log(this.props);
        // let left=this.props.left;

        return (
            <div className="banner" onClick={this.addBanner.bind(this)}>
                <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                    <ul key="bannerUlKey" className="bannerList" onTouchStart={this.handleTouchStart.bind(this)} onTouchEnd={this.handleTouchEnd.bind(this)} onTouchMove={this.handleTouchMove.bind(this)}>
                        {
                            this.props.bannerList.filter(item => item.index).map(item => <li className="bannerListLi" key={item.index}><a href=""><img src={item.url} alt={item.title} /></a></li>)
                        }
                    </ul>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

Banner.PropTypes = {
    bannerList: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string,
        index: PropTypes.number,
        title: PropTypes.string,
        href: PropTypes.string
    }))
}