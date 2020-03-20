var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:true,
    address: '点击选中要勾选哦~',
  },
  transition:{  //存储所有的交易信息
      type:"sell",
      address:"" //存储选择的地址
  },
  chooseLocation(){  //选择地址
      wx.chooseLocation({
        success:this.getAddress
      })
  },
  change(e){  //获取用户提供的交易信息
    this.transition={
      ...this.transition,
      [e.target.dataset.type]:e.detail.value
    }
    console.log(e.target.dataset.type)
  },
  getAddress(res){
    this.transition = {  //提交用的交易信息
      ...this.transition,
      longitude:res.longitude,
      latitude:res.latitude,
      address:res.address
       }
      this.setData({  //渲染
        address:res.address
      })
  },
  submit(){ //提交交易信息
     //表单验证
    if(this.transition.address === "" || this.data.address==="点击选中要勾选哦~"){
        wx.showToast({
          title: '地址要选中',
          icon: 'loading',
          duration:2000
        })
        return;
    }
    if (!this.transition.contact) {
      wx.showToast({
        title: '联系方式要填写',
        icon: 'loading',
        duration: 2000
      })
      return;
    }
    if (!this.transition.desc) {
      wx.showToast({
        title: '描述要填写',
        icon: 'loading',
        duration: 2000
      })
      return;
    }
     
     //把交易信息写入云数据库
     app.store.data.add({data:this.transition}).then((res)=>{
       if (res.errMsg ==="collection.add:ok"){
           this.setData({
             flag:false   //隐藏提交的表单，显示提交成功和返回按钮
           })
       }
     })
  },
  gohome(){  //返回首页
    wx.navigateBack({
      delta: 1,
    })
  }
})