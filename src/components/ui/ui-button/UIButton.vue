<template>
  <a
    v-if="link"
    :href="to"
    class="flex items-center justify-center rounded-full transition-colors duration-200 ease-in-out cursor-pointer 'bg-gradient-to-r from-primary to-secondary text-white hover:scale-105'"
    :class="[
      size === 'small' ? 'h-8 px-4 text-xs' : '',
      size === 'large' ? 'h-[76px] px-10 text-base' : ''
    ]"
    >{{ text }}</a
  >
  <button
    v-else
    class="flex items-center justify-center rounded-full text-2xl transition-all duration-300 ease-in-out cursor-pointer bg-gradient-to-r from-primary to-secondary text-white hover:scale-105"
    :class="[
      size === 'small' ? 'h-8 px-4 text-xs' : '',
      size === 'large' ? 'h-[76px] px-10 text-base' : ''
    ]"
  >
    <SearchIcon />
    Search
  </button>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import SearchIcon from '@/components/ui/ui-button/SearchIcon.vue'

defineProps({
  size: {
    type: String as PropType<'small' | 'large'>,
    default: 'small'
  },
  text: {
    type: String,
    required: true
  },
  link: {
    type: Boolean,
    default: false
  },
  to: {
    type: String,
    default: ''
  }
})
</script>
