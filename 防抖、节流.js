export function debounce(fun,ms=500){  //防抖
    let them=null;
    return function(){
        window.clearTimeout(them);
        them=setTimeout(()=>{
         fun()
        },ms)
    }
}

export function Throttle(fun,ms=500){ //节流
    let start=+new Date();
    return function(){
        let current=+new Date();
        if(current-start>ms){
            fun()
            start=current;
        }
    }
}

