/**
 * Created by samuel on 16-6-30.
 */
$(function () {





   /* $.fn.liteDialog = function (loaded) {
        var obj = this;
        body_width = parseInt($(window).width());
        body_height = parseInt($(window).height());
        block_width = parseInt(obj.width());
        block_height = parseInt(obj.height());

        left_position = parseInt((body_width / 2) - (block_width / 2) + $(window).scrollLeft());
        if (body_width < block_width) {
            left_position = 0 + $(window).scrollLeft();
        }

        top_position = parseInt((body_height / 2) - (block_height / 2) + $(window).scrollTop());
        if (body_height < block_height) {
            top_position = 0 + $(window).scrollTop();
        }

        $('.lite-dialog .mask').css('width',$(window).width() + $(window).scrollLeft());
        $('.lite-dialog .mask').css('height',$(window).height() + $(window).scrollTop());

        if (!loaded) {

            obj.css({
                'position': 'absolute'
            });
            obj.css({
                'top': top_position,
                'left': left_position
            });
            $(window).bind('resize', function() {
                obj.liteDialog(!loaded);
            });
            $(window).bind('scroll', function() {
                obj.liteDialog(!loaded);
            });

        } else {
            obj.stop();
            obj.css({
                'position': 'absolute'
            });
            obj.animate({
                'top': top_position,
                'left':left_position
            }, 200, 'linear');
        }
    };

    $('.lite-dialog .content-box').liteDialog();*/

});