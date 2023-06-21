function Animator() {
    let animations = [];

    $(window).on('scroll', function(){
        animations.forEach(animationSet => {
            if (animationSet.elemYPos <= (($(this).scrollTop()+$(this).height())-200)) {
                go(animationSet.$elem, animationSet.animationDuration, animationSet.animationDelay);
            }
        });
    });

    this.apply = (selector, animation, animationDuration, animationDelay) => {
        $(selector).each(function() {
            ready($(this), animation);

            animations.push({
                $elem: $(this),
                elemYPos: $(this).offset().top,
                animation: animation,
                animationDuration: typeof animationDuration == 'undefined' ? 0.3 : animationDuration,
                animationDelay: typeof animationDelay == 'undefined' ? 0 : animationDelay
            });
        });

        $(window).scroll();
    }

    const ready = ($elem, animation) => {
        const position = ['static','relative'].includes($elem.css('position')) ? 'relative' : $elem.css('position');
        $elem
            .attr('animated','0')
            .addClass(animation)
            .css({ position: position });
    }

    const go = ($elem, animationDuration, animationDelay) => {
        $elem
            .attr('animated','1')
            .css({
                transitionDuration: animationDuration+'s',
                transitionDelay: animationDelay+'s'
            });
    }

}