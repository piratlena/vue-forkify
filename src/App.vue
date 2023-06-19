<template>
  <main>
    <UIContainer>
      <RouterView />
    </UIContainer>
  </main>
</template>

<script setup lang="ts">
import UIContainer from './components/ui/UIContainer.vue';
import TheHeader from '@/components/TheHeader.vue';
import { RouterView } from 'vue-router';
import SearchResults from './components/search-results/SearchResults.vue';
</script>

<style lang="scss" scoped></style>
