<template>
  <div class="m-auto w-[70%] h-[120px] skeleton"></div>
</template>

<script setup></script>

<style scoped>
.skeleton {
  margin-bottom: 10px;
  border-radius: 2px;
  background: rgba(130, 130, 130, 0.2);
  background: linear-gradient(
    linear,
    left top,
    right top,
    color-stop(8%, rgba(130, 130, 130, 0.2)),
    color-stop(18%, rgba(130, 130, 130, 0.3)),
    color-stop(33%, rgba(130, 130, 130, 0.2))
  );
  background: linear-gradient(
    to right,
    rgba(130, 130, 130, 0.2) 8%,
    rgba(130, 130, 130, 0.3) 18%,
    rgba(130, 130, 130, 0.2) 33%
  );
  /* background-size: 800px 100px; */
  animation: wave-lines 2s infinite ease-out;
}

@keyframes wave-lines {
  0% {
    background-position: -800px 0;
  }
  100% {
    background-position: 800px 0;
  }
}
@keyframes wave-squares {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
</style>
