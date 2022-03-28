<template>
  <div class="home">
    <ul class="nav">
      <li>
        <van-cell is-link title="选择语言" @click="show = true" />
        <van-action-sheet
          v-model="show"
          :actions="actions"
          @select="onSelect"
          :round="false"
        />
      </li>
      <li>
        <i class="iconfont icon-anquan"></i>
        <span>需要帮助</span>
      </li>
    </ul>
    <div class="main">
      <div class="logoBox">
        <img
          src="https://static.account.xiaomi.com/uiTheme/images/miotstore/logo.svg"
          alt=""
        />
        <p>欢迎登录小米有品</p>
      </div>
      <div class="loginContent">
        <h1>
          小米账号登录<van-notice-bar
            scrollable
            text="程克强小组开发项目，仅供参考"
          />
        </h1>
        <input type="text" placeholder="邮箱/手机号码/小米ID" class="b" v-model="user"/>
        <input type="password" placeholder="请输入密码" class="b" v-model="pw"/>
        <div class="readAgree">
          <van-checkbox v-model="checked"></van-checkbox>
          <p>
            已阅读同意小米账号<a
              href="https://static.account.xiaomi.com/html/agreement/user/zh_CN.html"
              >用户协议</a
            >和<a href="https://privacy.mi.com/miaccount/zh_CN/">隐私政策</a>
          </p>
        </div>
        <button class="submit" @touchstart="onMessage">登录</button>
        <ul class="elseTypeLogin">
          <li>手机号登录</li>
          <li>|</li>
          <li>立即注册</li>
          <li>|</li>
          <li>忘记密码?</li>
        </ul>
        <div class="moreTypeLogin">
          <h6>其他方式登录</h6>
          <ul>
            <li><i class="iconfont icon-weixin"></i></li>
            <li><i class="iconfont icon-shejiaotubiao-42"></i></li>
            <li><i class="iconfont icon-pinpaibiaoshi_pingguo"></i></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Notify } from "vant";
import { Toast } from "vant";
import instance from "./../api/index"
export default {
  name: "HomeView",
  data() {
    return {
      show: false,
      actions: [
        { name: "中文(简体)" },
        { name: "中文(繁體)" },
        { name: "English" },
      ],
      user: "admin",
      pw: "",
      checked: true,
      newdebouncefn:null
    };
  },
  methods: {
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      Toast(item.name);
    },
    onMessage() {
      Notify({ type: "success", message: "登录成功", duration: "800" });
    },
    submit
  },
  components: {
    [Notify.Component.name]: Notify.Component,
  },
  created(){
    this.newdebouncefn=this.debounce(this.login,2000)
  }
};
</script>
<style scoped>
body {
  font-family: "MiSans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.nav {
  display: flex;
  justify-content: space-between;
  font-size: 0.2rem;
  color: #7e7e7e;
  padding: 0.35rem 0.5rem;
  position: fixed;
  top: 0;
  width: 100vw;
  box-sizing: border-box;
  z-index: 999 !important;
  background: white;
}
.nav > li:last-child > i {
  margin-right: 0.4rem;
  font-size: 0.2rem;
}
/* 弹出框宽高设置 */
.van-action-sheet {
  height: 14rem;
  max-height: 100%;
  border-radius: 0;
  padding-left: 0.3rem;
}
/* 弹出框内容设置 */
.van-action-sheet__item {
  font-weight: bold;
  font-size: 0.25rem;
  font-family: "微软雅黑";
  text-align: left;
  margin: 0.3rem 0;
}
.van-cell {
  padding: 0;
}
/* 弹出框按钮箭头由向右旋转为向下展示 */
.van-cell__right-icon {
  transform: rotate(90deg);
}
/* 弹出框按钮背景颜色 */
.van-cell--clickable:active {
  background: white;
}
/* 弹出框按钮文字设置 */
.van-cell__title > span {
  font-size: 0.2rem;
  color: #7e7e7e;
  font-family: "微软雅黑";
}
.logoBox {
  margin-top: 1.2rem;
  background-image: url("../assets/background.png");
  background-size: cover;
  background-position: top center;
  padding-bottom: 0.75rem;
}
.logoBox img {
  width: 0.76rem;
}
.logoBox p {
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.2rem;
  margin-top: 0.15rem;
}
.loginContent {
  padding: 0 0.47rem;
  display: flex;
  flex-direction: column;
}
h1 {
  font-size: 0.33rem;
  text-align: left;
  margin-bottom: 0.3rem;
}
input.b {
  /* border: 2px solid gray; */
  padding-left: 0.22rem;
  outline: none;
  border: none;
  height: 0.8rem;
  border-radius: 17px;
  margin: 0.1rem 0;
  background: #f0f0f0;
  font-size: 0.2rem;
  font-family: "微软雅黑";
  color: black;
  font-weight: bold;
}
input.b::placeholder {
  font-size: 0.25rem;
  color: gray;
  font-weight: normal;
}
.readAgree {
  display: flex;
  align-items: center;
  margin-top: 0.27rem;
  font-size: 0.17rem;
}
.readAgree input {
  margin-right: 0.2rem;
}
.readAgree .van-checkbox {
  margin-right: 0.1rem;
}
.readAgree a {
  color: #0b84ff;
  margin: 0 0.1rem;
}
button.submit {
  width: 100%;
  height: 0.76rem;
  font-size: 0.26rem;
  font-weight: 500;
  font-family: "微软雅黑";
  background: #0b84ff;
  border-radius: 25px;
  border: none;
  outline: none;
  color: white;
  margin: 0.37rem 0;
}
.elseTypeLogin {
  display: flex;
  justify-content: center;
  font-size: 0.2rem;
  margin-bottom: 0.21rem;
}
.elseTypeLogin > li {
  margin: 0 0.05rem;
  color: #9b9b9b;
}
.moreTypeLogin h6 {
  font-size: 0.18rem;
  color: #d8d8d8;
  font-weight: normal;
  margin: 0.23rem 0;
}
.moreTypeLogin > ul {
  display: flex;
  justify-content: center;
}
.moreTypeLogin li {
  margin: 0 0.19rem;
}
.moreTypeLogin li i {
  font-size: 0.52rem;
}
.icon-weixin {
  color: #50b674;
}
.icon-shejiaotubiao-42 {
  color: #ea5d5c;
}
.home {
  padding-bottom: 1rem;
}
.main::-webkit-scrollbar {
  display: none;
}
</style>
