function Toggler() {
    this.apply = (trigger, target, animationDuration) => {
        animationDuration = typeof animationDuration != 'undefined' ? animationDuration : 0.3;
        ready($(trigger), $(target), animationDuration);
    }

    const ready = ($trigger, $target, animationDuration) => {
        $trigger.on('click', () => {
           go($target, animationDuration); 
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

    const go = ($target, animationDuration) => {
        $target
            .animate({
                height: $target.attr('toggler-height'),
                opacity: 1
            }, animationDuration*1000);
    }
}