# vue-advanced-progressbar
Advanced page scroll progress bar

## Installation

``` bash
npm i vue-advanced-progressbar --save
```

``` bash
yarn add vue-advanced-progressbar
```

## Usage

### main.js

``` javascript
// YourComponent.vue or main.js for global usage
import Vue from 'vue'
import VueAdvancedProgressbar from 'vue-advanced-progressbar'

Vue.use(VueAdvancedProgressbar)
```

### Use in component

``` html
<!-- .vue template -->
<template>
  <VueAdvancedProgressbar></VueAdvancedProgressbar>
</template>
```

### Options
|    Property    |    Description   |   type   | values |	default	|
| -----------------  | ---------------- | :--------: | | :--------: | :----------: |
| position         | position of progressabr start from there | left | right-left-center | String |
| height  | progressbar height | Number | |
