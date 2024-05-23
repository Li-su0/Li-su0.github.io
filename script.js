$(document).ready(function() {
    // 假设你有一个按钮或其他元素用于打开.collapsible-body
    $('#openButton').click(function() {
        // 强制打开.collapsible-body
        $('.collapsible-body').slideDown(500, function() {
            // 动画完成后，你可以在这里添加一些代码，但通常不需要
            // 因为.slideDown()已经让.collapsible-body保持打开状态了
            // 例如，给.collapsible-header添加一个类来指示它是打开的
            $('.collapsible-header').addClass('active');
        });
    });

    // 假设你还有一个按钮或其他元素用于关闭.collapsible-body
    $('#closeButton').click(function() {
        // 强制关闭.collapsible-body
        $('.collapsible-body').slideUp(500, function() {
            // 移除表示它是打开的类
            $('.collapsible-header').removeClass('active');
        });
    });

    // 对于原始的可折叠标题，你仍然可以使用slideToggle()
    $('.collapsible-header').click(function() {
        $(this).next('.collapsible-body').slideToggle(500);
        $(this).toggleClass('active');
    });
});