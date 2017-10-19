// pages/login/login.js
var md5 = require('../../utils/md5.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account: '',
    password: '',
    sign:"123",
    server:''
  },

  // 获取输入账号  
  accountInput: function (e) {
    this.setData({
      account: e.detail.value
    })
  },

  // 获取输入密码  
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  serverInput:function(e){
    this.setData({
      password: e.detail.value
    })
  },
  // 登录  
  login: function () {
    var ran = Math.random(9999);
    if (this.data.account.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '用户名和密码不能为空',
        icon: 'loading',
        duration: 1500
      })
    } else {
      // 这里修改成跳转的页面  
      wx.request({
        url: "http://116.62.232.164:9898/api/user/gethx",
        data:{
          UserId:this.data.account,
          Password:this.data.password,
          Ran: ran,
          Sign: md5.hexMD5(this.data.sign + ran)
        },
        success:function(){
          wx.navigateTo({
            url: '../email/email',
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
          })
        }
      });
    //   wx.showToast({
    //     title: '登录成功',
    //     icon: 'success',
    //     duration: 2000,
    //     success:function(){
         
    //     },
    //     fail:function(){

    //     }
    //   })
     }
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
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
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