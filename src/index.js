import VueAdvancedScrollProgressBar from './VueAdvancedScrollProgressBar.vue';
export default VueAdvancedScrollProgressBar;
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('vue-advanced-progressbar', VueAdvancedScrollProgressBar);
}