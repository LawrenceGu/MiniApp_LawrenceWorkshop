// pages/Index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.playBackgroundAudio({
      dataUrl: 'https://m10.music.126.net/20181022130856/2669ba491d1a4ae33587655bc99c0272/ymusic/da71/5fdd/eedc/f2849199cf0d52356adb74a8040cf221.mp3',
      
    })

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

  },

  toValveCode: function (){
    wx.navigateTo({
      url: '/pages/ValveCode/index',
    })
  },

  toResume: function(){
    wx.navigateTo({
      url: '/pages/resume/index',
    })
  },

  
})