var app = getApp();
Page({
  data:{
    longitude:0,
    latitude:0,
    markers:[],
    controls: [{
      id: 1,
      iconPath: '/resources/pin.png',
      position: {
        left: (app.store.winWidth-30)/2,
        top:  (app.store.winHeight-40-30)/2-15,
        width: 30,
        height: 30
      }
    }, {
        id: 2,
        iconPath: '/resources/center.png',
        position: {
          left: 20,
          top: app.store.winHeight-150,
          width: 30,
          height: 30
        },
        clickable:true  //可以响应单击事件
      }]
  },
  onShow(){
    this.getLocation();  //获取定位
    this.getData();
  },
  getData(){
      app.store.data.get().then((res)=>{
        var markers = res.data.map((item)=>{
           return {
             iconPath: "/resources/"+item.type+".png",
             id: item._id,
             latitude: item.latitude,
             longitude:item.longitude,
             width: 30,
             height: 30
            //  callout:{
            //    content:item.desc,
            //    display:"BYCLICK",
            //    color:'#f00',
            //    bgColor:'#ccc',
            //    padding:10,
            //    borderWidth:3,
            //    borderRadius:10
            //  }
           }
        })
        this.setData({
          markers
        })
      })
  },
  markertap(e){  //响应marker的单击
     wx.navigateTo({
       url: '/pages/detail/detail?id='+e.markerId
      
     })
  },
  onReady(){  //创建地图的上下文对象  参数是地图组件的id
      this.ctx=wx.createMapContext("map");
  },
  controltap(e){ //地图控件的点击事件
    
     this.ctx.moveToLocation(); //移到当前的定位点
  },
  getLocation(){
    wx.getLocation({  
      type: 'gcj02',  // 用于openLation的经纬度
      altitude: true,
      success: (res)=> {
         this.setData({
           longitude:res.longitude,
           latitude:res.latitude
         })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  onShareAppMessage(){  //分享功能
    return {
      title:"萌宠交易平台",
      path:"/pages/index/index"
    }
  },
  go(e){  //页面的跳转
      var page = e.target.dataset.page;
      wx.navigateTo({
        url: page,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
  }
})