<script setup>
defineProps({
  title: String,
})

</script>

<template>
  <button class="button-primary">{{ title }}</button>
</template>
<style scoped>
@keyframes moveLeftAndBack {
  0% {
    right: 0;
    bottom: 0;
  }

  100% {
    right: -2px;
    bottom: -2px;
  }
}

.button-primary {
  padding: 20px 24px;
  background-color: #03030f;
  border-radius: 100px;
  color: white;
  font-weight: 600;
  transition: all 0.25s ease-in-out;
  position: relative;

  &:hover {
    background: var(--gradient-bg-primary);
    animation: moveLeftAndBack 0.25s ease-in-out forwards;
  }
}
</style>
