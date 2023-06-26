<template>
  <header class="flex flex-col justify-between items-center lg:flex-row">
    <div class="shrink">
      <img src="../assets/logo.png" alt="" class="ml-[4rem] h-[4.6rem] block" />
    </div>
    <form
      @submit.prevent
      class="bg-white rounded-full flex flex-row items-center pl-12 hover:shadow-xl transition-all duration-300"
    >
      <input
        v-bind:value="searchQuery"
        @input="inputQuery"
        class="w-[10rem] text-2xl bg-none border border-none rounded-3xl focus:outline-none placeholder:text-grey-light-3 sm:w-[20rem] lg:w-[30rem]"
        placeholder="Search  over 1000 recipes"
      />
      <UIButton size="large" @click="recipeStore.getRecepies()" />
    </form>

    <nav class="flex">
      <ul class="flex list-none h-full">
        <li class="relative py-6">
          <button
            class="h-full flex flex-row text-[1.4rem] cursor-pointer px-6 bg-none border-none transition-all duration-300 hover:bg-grey-light-2"
          >
            <IconAdd class="fill-[#f48982] h-[2.4rem] mr-[0.7rem] translate-y-[-1px]" />
            <span class="font-semibold">Add recipe</span>
          </button>
        </li>
        <li class="relative py-6">
          <button
            class="h-full text-[1.4rem] flex flex-row cursor-pointer bg-none border-none px-6 transition-all duration-300 hover:bg-grey-light-2"
          >
            <IconMark class="fill-[#f48982] h-[2.4rem] mr-[0.7rem] translate-y-[-1px]" />
            <span class="font-semibold">Bookmarks</span>
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { useRecipeStore } from '@/store/store';
import { storeToRefs } from 'pinia';
import IconAdd from '@/components/icons/IconAdd.vue';
import IconMark from '@/components/icons/IconMark.vue';
import UIButton from '@/components//ui/ui-button/UIButton.vue';

export default {
  components: {
    IconAdd,
    IconMark,
    UIButton,
  },

  setup() {
    const recipeStore = useRecipeStore();

    const { isLoading, searchQuery } = storeToRefs(recipeStore);
    recipeStore.getRecepies();

    return { isLoading, searchQuery, recipeStore };
  },

  data() {
    return {
      // searchQuery: '',
    };
  },
  methods: {
    inputQuery(event: Event) {
      const el = event.target as HTMLInputElement;
      this.searchQuery = el.value;
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped></style>
