# Instapage Extensions

Extend Instapage with these features not native to the platform.

## Animator

### Dependencies

* jQuery 3.7+ (not tested with older versions, but they may work)
* animator.min.css
* animator.min.js

### Usage

```
const animator = new Animator();

// animator.apply(selector, animation, animationDuration, animationDelay)
animator.apply('h1','fadeIn',1,1);
```

### Animation types

* fadeIn
* slideUp
* slideDown
* slideLeft
* slideRight
* zoomIn
* zoomOut
* batman

### Animation duration and delay

* animationDuration
    * default: 0.3
    * in seconds eg. 0.3
* animationDelay
    * default: 0
    * in seconds eg. 0.3
    * the delay before the animation is executed