let list=[{
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
},{
  title:"title4",
  url:"http://h.jsj.com.cn/m/Topic/201703/Voucher/images/banner750.png",
  index:4,
  href:"www.baidu.com"
}];

export let bannerList = (state=list,action)=>{
    let bannerList=state.map(item=>item);
    if(action.type==="insertBanner"){
        bannerList.push(action.value);
        return bannerList;
    }else{
        return state;
    }
};

export let width=(state=375,action)=>{
    if(action.type==="width"){
        return action.value;
    }else{
        return state;
    }
}

export let left=(state=0,action)=>{
    if(action.type==="left"){
        return action.value;
    }else{
        return state;
    }
}

