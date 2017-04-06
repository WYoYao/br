import React, { Component, PropTypes } from 'react';

import './index.css';

let TouchData={
    start:{},
    moveLast:{},
    end:{}
}

let WidthArray;
let CompleteWidth;

export default class Banner extends Component {
    // 开始事件
    handleTouchStart(e) {

        let {clientX,clientY}=e.targetTouches[0];
        
        TouchData.start={clientX,clientY};

    }
    // 移动
    handleTouchMove(e) {

        let {clientX,clientY}=e.targetTouches[0];

        let {updateLeft} =this.props;

        let left =this.props.left;
     
        left=left+clientX-(TouchData.moveLast.clientX || TouchData.start.clientX);
     
        TouchData.moveLast={clientX,clientY};

        let remainder=left>0?left:-this.getCompleteWidth()-left;
        if(left>0){
            left=-(this.getCompleteWidth()+remainder);
        }else if(left<-(this.getCompleteWidth())){
            left=-(remainder);
        }

        updateLeft(left);

    }
    // 结束时间
    handleTouchEnd(e) {

        let {updateLeft} =this.props;

        let {clientX,clientY}=e.changedTouches[0];

        TouchData.moveLast={
            clientX:0,
            clientY:0,
        }

        let left=-this.props.left%this.getCompleteWidth();
        let index=0;

        TouchData.end={clientX,clientY};
        this.getWidthArray().reduce((a,b,i)=>{
            let c=a;
            a+=b;
            if(c<left && left <a){
                index=i;
            }
            return a;
        },0);

        console.log(this.getWidthArray().slice(0,index));

        // left = -this.getWidthArray().slice(0,index).reduce((a,b)=>{ return a+b},0);

        // updateLeft(left);

    }
    // 获取各个图片的宽度
    getWidthArray(){
        if(!Array.isArray(WidthArray)){
            WidthArray = Object.values(this.refs).map(item=>item.offsetWidth);
        };
        return WidthArray;
    }
    // 获取完整的宽度值
    getCompleteWidth(){
        if(!CompleteWidth){
            CompleteWidth=this.getWidthArray().slice(0,-1).reduce((a,b)=>a+b)
        };
        return CompleteWidth;
    }
    //实例已经加载
    componentDidMount(){
        let {updateWidth} =this.props;
        updateWidth(this.getWidthArray().reduce((a,b)=>a+b))
    }
    render() {


        let bannerList =this.props.bannerList;
        
        let ulStyle={
            width:this.props.width+"px",
            left:this.props.left+"px"
        }


        return (
            <div className="banner">
                    <ul className="bannerList" style={ulStyle} onTouchStart={this.handleTouchStart.bind(this)} onTouchEnd={this.handleTouchEnd.bind(this)} onTouchMove={this.handleTouchMove.bind(this)}>
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