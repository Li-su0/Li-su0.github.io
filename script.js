$(document).ready(function() {
    $('.collapsible-header').click(function() {
        $(this).next('.collapsible-body').slideToggle(10000);
        $(this).toggleClass('active');
    });
});

// 注意：如果你使用jQuery，确保在HTML文件中也引入了jQuery库