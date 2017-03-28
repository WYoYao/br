import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Banner from './component/Banner/index.jsx';

let BannerList=[{
  title:"title1",
  url:"http://h.jsj.com.cn/m/Topic/201703/Voucher/images/banner750.png",
  index:1,
  href:"www.baidu.com"
},{
  title:"title2",
  url:"http://h.jsj.com.cn/m/Topic/201702/yunnan/images/banner750.png",
  index:2,
  href:"www.baidu.com"
},{
  title:"title3",
  url:"http://h.jsj.com.cn/m/Topic/201612/yinchuan/images/banner750_20170122.png",
  index:3,
  href:"www.baidu.com"
}]

class App extends Component {
  render() {
    return (
      <Banner {...{BannerList}}/>
    );
  }
}


export default App;
