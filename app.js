//app.js
App({
	onLaunch: function () {
		var _this = this;
   		wx.getUserInfo({
   			success:res => {
   				this.globalData.userInfo = res.userInfo;
   				console.log(this.globalData.userInfo)
   			}
   		})
	},
	globalData: {
    	userInfo: null
  	}
})