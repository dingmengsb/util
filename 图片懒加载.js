import {debounce} from "./debounce"
export default function Loading(el){
    this.el = el|| window;
    this.init();   
}
Loading.prototype={
    init(){
        let loadding=debounce(()=>{
            this.load();
        })
       this.el.addEventListener('scroll', loadding)
       this.load();  
    },
    load(){
       let imgs=document.querySelectorAll('img[data-img]');
           imgs.forEach(item=>{
            if(item.src!=item.dataset.img){
             if(this.isImgView(item)){
                item.src=item.dataset.img;
             }
           }
        })
    },
    isImgView(el){
        let rect = el.getBoundingClientRect();
        if (rect.top > 0 && rect.top < window.innerHeight){
            return true;
        }
        return false;
    }
}