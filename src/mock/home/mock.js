let Mock = require("mockjs")
Mock.mock("/api/home",'post',function(config){
    console.log(config.body);
    let obj =JSON.parse(config.body);
    let user = obj.user;
    let pw = obj.pw;
    if(user=="admin"&&pw=="123456"){
        return{
            message:"登录成功",
        }
    }else{
        return{
            message:"登录失败"
        }
    }
})