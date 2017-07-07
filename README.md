# SASS Simple Grids

A simple, mobile-first SASS Grids System inspired by [Susy 3](http://oddbird.net/susy/docs/).
This is tailored to the common grid system I use in my projects.

> #### You may want to use **Susy 3** instead, if you want to:
> * prepare yourself for [CSS Grid Layout](https://css-tricks.com/snippets/css/complete-guide-grid/), 'cause that's why Susy 3.
> * require asymmetric grid layout.
> * build a more advanced grid system of your own.  

> #### Why not just use Susy 3 instead?
> Two reasons:  
> 1. Susy 3 dropped off all of mixins from 2, all it offers are functions.
> This requires you to build wrapper mixins and functions to fully tailor it for your needs.
> So rather than creating these wrappers on top of Susy 3, I dug deep into it's source code, learned how it works, and tailor it's logic to match only the stuff I need.  
> 2. I love creating a system of my own, where every aspect is fully relevant to what I need, rather than using an existing library bloated of stuff I don't need.
> This doesn't mean libraries are overkill in general, it's just part of my own learning goal.

If you like to just use a straight-forward, symmetic, mobile-first grid system, then you're welcome!  

## Installation
Simple Grids is available as an npm module.
```sh
npm install sass-simple-grids --save-dev
```

## Usage
```sass
@import 'path-to-node-modules/sass-simple-grids/simple-grids';
```


## What SSG has to offer

### One-stop breakpoint-specific settings
Just include all your grid settings for multiple breakpoints in one go:
```sass
@include register-grids((
  
  /*
   * This will be default setting,
   * if grid functions/mixins are used outside of grid-breakpoint().
   */
  base: (
    columns: 8,
    gutters: 1/4, // or .25
  ),

  /**
   * Succeeding breakpoints require a 'breakpoint' key,
   * which will be used as the min-width media query.
   * It can be a unitless number, which will be suffixed with `px`.
   */
  medium: (
    breakpoint: 768,
    columns: 12,
    gutters: .15,
  ),

  /**
   * Static gutters are accepted,
   * `calc` will be used here for span calculations
   */
  large: (
    breakpoint: 1280,
    columns: 16,
    gutters: 16px,
  ),
  
));
```

### Breakpoint mixin to make use of your breakpoint-specific settings
```sass
@include grid-breakpoint($setting-name) {
  @content
}
```

This is similar to that of Susy 2's `susy-breakpoint` mixin. The difference is that you don't have to pass a raw media query together with a layout map,
just the name of your registered grid setting:
```sass
.column {
  width: span(1); /* This will be calculated from the 'base' setting (8 columns) */
  margin-right: gutter(); // Will compute the 'base' gutter
  
  /* Just pass the setting name to the mixin */
  @include grid-breakpoint('medium') {
    width: span(1); /* This will be calculated from the 'medium' setting (12 columns) */
    margin-right: gutter(); /* Will compute the 'medium' gutter */
  }

  @include grid-breakpoint('large') {
    width: span(1); /* This will be calculated from the 'large' setting (16 columns) */
    margin-right: gutter(); /* Will compute the 'large' gutter */
  }

}
```
In case you haven't notice, you don't need to pass a new grid context to the span.
`grid-breakpoint` will make use of the named setting, making it available inside its block scope.
Just make sure that the setting name matches one of your registered grid settings. Else, an error will be thrown out.


## Demo 
The npm package includes demo files.  

* Go to the `node_modules/sass-simple-grids` folder.
* Run `npm install`.
* Run `npm run demo`. This will compile demo assets and boot up a server at `localhost:3131` for the demo page.

## Available Mixins and Functions
> To follow :)

## To Do:
- [] Push/Pull mixin (?)
- [] Readme file: mixins and functions doc.

