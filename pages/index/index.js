//index.js
//获取应用实例
const app = getApp()

Page({
	data: {
		userInfo:{},
		canShow : null
	},	
	onLoad: function () {
		this.setData({
			userInfo:app.globalData.userInfo,
			canShow:app.globalData.canShow
		})
	},
	tiaozhuan:function(e){
    	console.log(e)
	},
})
