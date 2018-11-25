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
  // onLoad: function (options) {
  //   wx.playBackgroundAudio({
  //     dataUrl: 'https://raw.githubusercontent.com/LawrenceGu/music/master/TB_NO.22_sadness.mp3',
      
  //   })

  // },
  onLoad: function () {
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    player()
    function player() {
      backgroundAudioManager.title = 'TB_NO.22_sadness'
      backgroundAudioManager.src = 'https://raw.githubusercontent.com/LawrenceGu/music/master/TB_NO.22_sadness.mp3'
      backgroundAudioManager.onEnded(() => {
        player()//循环
      })
    }
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