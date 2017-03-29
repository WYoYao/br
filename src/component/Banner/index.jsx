import React,{Component,PropTypes} from 'react';
import './index.css';

export default class Banner extends Component{
    constructor(props){
        super(props);
        this.state={
            moveStart:{},
            moveEnd:{},
            left:0,
            top:0,
        }
    }
    // 开始事件
    handleTouchStart(e){
        console.log("TouchStart");
        // console.log(e.changedTouches);
        console.log(e.targetTouches);
    }
    // 结束时间
    handleTouchEnd(e){
        console.log("TouchEnd");
        console.log(e.targetTouches);

        // setInterval(()=>{
        //     let left=this.state.left-10;

        //     this.setState({
        //         left
        //     })
        // },100);
    }
    
    handleTouchMove(e){
        console.log("TouchMove");
        console.log(e.targetTouches);
    }
    render(){
        return(
            <div className="banner">
                <ul style={{
                    left:this.state.left
                }} className="bannerList" onTouchStart={this.handleTouchStart.bind(this)} onTouchEnd={this.handleTouchEnd.bind(this)} onTouchMove={this.handleTouchMove.bind(this)}>
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