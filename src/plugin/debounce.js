let plugins = function(Vue){
    Vue.prototype.debounce=function(fn,wait){
        let timer = null;
        return function(){
            clearTimeout(timer);
            timer=setTimeout(function(){
                fn()
            },wait)
        }
    }
    Vue.prototype.throttle=function(){
        console.log("节流");
    }
}
export default plugins;