function Toggler() {
    this.apply = (trigger, target, animationDuration, callback) => {
        animationDuration = typeof animationDuration != 'undefined' ? animationDuration : 0.3;
        callback = typeof callback != 'undefined' ? callback : false;
        ready($(trigger), $(target), animationDuration, callback);
    }

    this.resetter = (trigger, target) => {
        $(trigger).on('click', () => {
            $(target)
                .animate({
                    height: 0,
                    opacity: 0
                }, 300);
        });
    }

    const ready = ($trigger, $target, animationDuration, callback) => {
        $trigger.on('click', () => {
           go($target, animationDuration, callback); 
        });
        $target
            .attr({
                'toggler-height': $target.css('height'),
                'toggler-display': $target.css('display')
            })
            .css({
                height: 0,
                opacity: 0
            });
    }

    const go = ($target, animationDuration, callback) => {
        $target
            .animate({
                height: $target.attr('toggler-height'),
                opacity: 1
                },
                animationDuration*1000,
                () => {
                    $target.attr('toggler-height', $target.css('height'));

                    if (callback && typeof callback == 'function')
                        callback($target);
                });
    }
}