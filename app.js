//app.js
App({
  onLaunch: function () {
         //同步的获取系统的信息
      if(!wx.getStorageSync("win")){
        var info = wx.getSystemInfoSync();
        this.store.winWidth = info.windowWidth;  //获取窗口的宽度
        this.store.winHeight = info.windowHeight;  //获取窗口的高度
        wx.setStorageSync("win", JSON.stringify({
          width:this.store.winWidth,
          height:this.store.winHeight
        }))
      }
      else{
        var win = JSON.parse(wx.getStorageSync("win"));
        this.store.winWidth = win.width;
        this.store.winHeight = win.height
      }
       

        wx.cloud.init();
        var db = wx.cloud.database();
        this.store.db = db;
        this.store.data = db.collection("nz1913")
    //     db.collection("nz1913").add({
    //       data:{
    //         xm:"ddd",
    //         age:12
    //       }
    //     }).then(()=>{
    //        db.collection("nz1913").where({age:{$gt:20}}).get().then((res)=>{
    //       console.log(res);
    //     })
    //     })
    // db.collection("nz1913").where({"xm":"ddd"}).remove().then(() => { //删除
    //   db.collection("nz1913").get().then((res) => {
    //     console.log(res);
    //   })
    // })
    // db.collection("nz1913").add({  //添加
    //   data:{
    //     "xm":"dddd",
    //     "age":15
    //   }
    // })
    // db.collection("nz1913").where({ "xm": "dddd" }).update({  //修改
    //   data:{
    //     "age":"99"
    //   }
    // })
    // }).then(() => {
    //   db.collection("nz1913").get().then((res) => {   //查找
    //     console.log(res);
    //   })
    // })
       
  },
  store: {
    
  }
})