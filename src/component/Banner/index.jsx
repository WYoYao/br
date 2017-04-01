import React, { Component, PropTypes } from 'react';

import './index.css';

let TouchData={
    start:{},
    moveLast:{},
    end:{}
}

export default class Banner extends Component {
    //根据当前left值计算应该显示的图片
    getLeft(){
        console.log(Object.values(this.refs));
        
    }
    // 开始事件
    handleTouchStart(e) {

        let {clientX,clientY}=e.targetTouches[0];
        
        TouchData.start={clientX,clientY};

        // updateStyle({left:"-50px"});
    }
    // 移动
    handleTouchMove(e) {

        let {clientX,clientY}=e.targetTouches[0];

        let {updateStyle} =this.props;
        let {left=0} =this.props.style;
        console.log(left);
        left=left+clientX-(TouchData.moveLast.clientX || TouchData.start.clientX);
        console.log(left);
        TouchData.moveLast={clientX,clientY};

        updateStyle({
            left
        });
    }
    // 结束时间
    handleTouchEnd(e) {

        let {clientX,clientY}=e.changedTouches[0];

        TouchData.moveLast={
            clientX:0,
            clientY:0,
        }

        TouchData.end={clientX,clientY};

        // this.getImgWidth();

        
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
    render() {

        let bannerList =this.props.bannerList;


        return (
            <div className="banner" onClick={this.addBanner.bind(this)}>
                    <ul className="bannerList" style={this.props.style} onTouchStart={this.handleTouchStart.bind(this)} onTouchEnd={this.handleTouchEnd.bind(this)} onTouchMove={this.handleTouchMove.bind(this)}>
                        {
                            bannerList.map((item) => <li className="bannerListLi" ref={item.index} key={item.index}><a href=""><img src={item.url} alt={item.title} /></a></li>)
                        }
                    </ul>
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