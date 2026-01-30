//1.这是一个变量名叫：button
//document.querySelector是一个方法，意思是获取页面中的某个元素(即：去文档中把button这个标签找出来)
//const意思是：这是一个固定的名字以后button就代表这个按钮
const button = document.querySelector("button");

//2.让我们在控制台中确认一下，看他有没有找对
//（写完这行，去浏览器Console看能不能打印出来这个按钮的HTML）
console.log(button);
//。。。上面是不是打印出来了一个<button>...</button>的东西？（使用来看抓取的按钮是不是找对了）

//3.给按钮装一个耳朵。监听‘click’（点击）事件
//addEventlistener意思是：给这个按钮装一个耳朵，让它能听到某些事件（添加事件监听器）
button.addEventListener("click", function() {
    //动作一：修改案里面的文字
    //innerText意思是：标签里面的文字内容
    button.innerText = "已订阅";
    //动作二：修改按钮的背景颜色
    //style意思是：标签的样式，
    //backgroundColour就是CSS中的background-color（背景颜色）
    button.style.backgroundColor = "#4ade80";
    //动作三：修改按钮的文字颜色(怕绿色背景看不清黑色文字)
    button.style.color = "#000000";
});
