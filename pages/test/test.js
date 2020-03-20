// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      y:10
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.ctx =  wx.createCanvasContext("canvas");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   
  },
  draw(){
  
    // this.ctx.moveTo(10, this.data.y);
    // this.ctx.lineTo(110, this.data.y);
    // this.ctx.stroke();
    // this.ctx.draw({reserve:true})
    // this.data.y+=10;
  },
   start(e){
        this.x= e.touches[0].x;  //起始点
        this.y = e.touches[0].y;
   },
   move(e){
     this.x1 = e.touches[0].x;   //获取线的终点
     this.y1 = e.touches[0].y;
     this.ctx.moveTo(this.x, this.y)
     this.ctx.lineTo(this.x1,this.y1)
     this.ctx.stroke();
     this.ctx.draw({reserve:true});
     this.x = this.x1;  //把这次的终点设为下次的起点
     this.y = this.y1;
   },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})