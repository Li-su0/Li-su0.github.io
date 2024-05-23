$(document).ready(function() {
    // 当文档准备就绪（即DOM元素加载完成后）执行此函数

    $('.collapsible-header').click(function() {
        // 选择所有具有类名'collapsible-header'的元素，并为它们绑定一个点击事件处理器

        $(this).next('.collapsible-body').slideToggle(500);
        // 当点击事件发生时，执行以下操作：
        // 1. $(this) 指的是被点击的'.collapsible-header'元素
        // 2. .next('.collapsible-body') 选择'.collapsible-header'之后的第一个兄弟元素，且该元素具有类名'collapsible-body'
        // 3. .slideToggle(500) 对选定的'.collapsible-body'元素执行滑动切换效果（显示或隐藏），并在500毫秒（0.5秒）内完成这个动画

        // 这里只切换'.collapsible-header'上的'active'类
        $(this).toggleClass('active');
        // 对被点击的'.collapsible-header'元素切换'active'类。
        // 如果'.collapsible-header'已经包含'active'类，则移除它；如果不包含，则添加它。
        // 这通常用于改变'.collapsible-header'的样式，以指示其下的'.collapsible-body'是打开的还是关闭的。
    });
    // 结束点击事件处理器的定义
});
// 结束文档准备就绪事件处理器的定义