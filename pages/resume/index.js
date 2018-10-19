//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    stringArray: null
    },
 
  //事件处理函数
  // bindViewTap: function() {
  // },
  // onLoad: function () { 
  //   var that=this;
  //   wx.request({
  //     //云端json成堆代码
  //     // url: 'https://xawwa3qh.qcloud.la/json/data.json',
  //     url: 'https://xawwa3qh.qcloud.la/weapp/getData',
  //     data:{},
  //     success:function(res){
  //       //res表示返回的对象
  //       that.setData({
  //         stringArray:res.data.stringArray
  //       });
  //       // console.log(res.data);
  //       //数据绑定之后只有用setData函数才能让前端显示
  //     }
  //   }) 
  // },
  tel: function(e){
    wx.makePhoneCall({
      phoneNumber: app.globalData.phoneNumber
    })
  }
})
