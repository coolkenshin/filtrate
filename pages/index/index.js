// 引入数据
const tabTxtArr = require('../../utils/filtrate.js');
Page({
    /**
     * 页面的初始数据
     */
    data: {
        tabTxt: [],
        searchParam: [],
    },

    lifetimes: {
        ready() {
            this.init();
        },
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that = this;
        that.setData({
            tabTxt: tabTxtArr.tabTxt,
        })
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
})