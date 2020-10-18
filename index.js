const glide = new Glide(".glide"); // 把css选择器传递给Glide
const captionsEl = document.querySelectorAll(".slide-caption"); // 获取标题的实例
// 轮播和加载的时候显示标题，需要监听加载后，轮播后事件
glide.on(["mount.after", "run.after"], () => {
    const caption = captionsEl[glide.index]; // 根据glide下标获取轮播的图片，获取图片对应的标题
    anime({
        targets: caption.children, // 对谁执行动画，对caption下的每一个元素
        opacity: [0, 1], // 透明的从0-1
        duration: 400, // 动画执时间毫秒
        easing: "linear", // 动画执行函数
        delay: anime.stagger(400, {start: 300}), // 等300毫秒出现第一个元素，每一个元素children等400毫秒出现
        translateY: [anime.stagger([40, 10]), 0] // 从下方移动到上方，第一个元素到最后一个元素依次移动范围从40-10
    });
});
// 每次轮播之前都把透明度设置成0再轮播动画(还原)
glide.on("run.before", () => {
    document.querySelectorAll(".slide-caption > *").forEach(el => { // 把标题的每一个元素选出来，循环设置不透明度为0
        el.style.opacity = 0;
    });
});

glide.mount(); // 把轮播组件加载