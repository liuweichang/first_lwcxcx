//app.js
App({
	onLaunch: function () {
     		wx.getUserInfo({
     			success:res => {
     				this.globalData.userInfo = res.userInfo;
            this.globalData.canShow = true;
            console.log(res)
     			},
          fail:res => {
            this.globalData.canShow = false;
          }
     		})
        //用户拒绝授权后方法，未完整
        // if(!this.globalData.canShow){
        //   wx.getSetting({
        //     success:res => {
        //       if(!res.authSetting['scope.userInfo']){
        //         wx.openSetting({
        //           success:res => {
        //             console.log(res,"open")
        //           }
        //         })
        //       }
        //     },
        //     fail:res => {
        //       console.log(res,"geetshibai")
        //     }
        //   })
        // }
	},
	globalData: {
    	userInfo: null,
      canShow: null
  	}
})