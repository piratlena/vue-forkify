<template>
  <button
    ref="upButton"
    class="btn-scroll invisible text-center bottom-8 right-0 bg-primary text-white rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px] md:right-8 md:bottom-8 transition-all duration-300 z-100"
    @click="scrollToTop"
  >
    <i class="material-icons"> keyboard_arrow_up </i>
  </button>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const upButton = ref();

const handleScroll = () => {
  if (
    window.scrollY + document.documentElement.clientHeight >=
    document.documentElement.scrollHeight / 2
  ) {
    upButton.value.classList.remove('invisible');
    console.log('scrolled');
  } else {
    upButton.value.classList.add('invisible');
    console.log('not scrolled');
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<style scoped>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
}
.btn-scroll {
  position: sticky;
  right: 0;
}
</style>
