<template>
  <a href="#work" class="showmore-btn">
    <i class="fas fa-chevron-down"></i>
  </a>
</template>

<script>
export default {
  name: "ShowMoreBtn"
};
</script>

<style lang="scss" scoped>
.showmore-btn {
  font-size: 4rem;
  cursor: pointer;
  color: white;
  position: absolute;
  bottom: 50px;
  animation: bounce 2s infinite;

  & svg {
    font-size: inherit;
  }
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  10% {
    transform: translateY(-5px);
  }
  15% {
    transform: translateY(-10px);
  }
  25% {
    transform: translateY(5px);
  }
  35% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
