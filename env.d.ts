/// <reference types="vite/client" />
declare module 'vuex';
import { Store, mapState, mapGetters } from 'vuex';

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    count: number;
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
