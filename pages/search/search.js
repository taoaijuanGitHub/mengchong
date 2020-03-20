var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      kw:"", //搜索关键词
      result:[]
  },
  input(e){  //获取输入的数据
    this.setData({
      kw:e.detail.value
    })
  },
  search(){
    app.store.data.where({
       desc:app.store.db.RegExp({
         regexp:this.data.kw,
         options:"i"
       })
    }).get().then((res)=>{
       this.setData({
         result:res.data
       })
    })
  }
})