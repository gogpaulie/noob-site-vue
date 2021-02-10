<template>
  <div id="nav-mobile" class="drawer">
    <ul class="drawer__list">
      <li class="drawer__list--link">
        <a href="#home" class="current">Home</a>
      </li>
      <li class="drawer__list--link"><a href="#about">About</a></li>
      <li class="drawer__list--link"><a href="#work">Sevices</a></li>
      <li class="drawer__list--link"><a href="#contact">Contact</a></li>
    </ul>
    <div class="drawer__social-media">
      <a href="#!"><i class="fab fa-twitter"></i></a>
      <a href="#!"><i class="fab fa-twitch"></i></a>
      <a href="#!"><i class="fab fa-youtube"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarMobileDrawer"
};
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";
.drawer {
  position: fixed;
  background-color: $color-primary;
  height: 100%;
  width: 200px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(-200%);
  transition: transform 0.3s ease-in-out;

  &__list {
    list-style: none;
    margin-top: 3rem;
    width: 100%;
    text-align: center;

    &--link {
      margin: 2rem 0;
      padding: 1rem 0;
      transition: all 0.2s;
      & a {
        text-decoration: none;
        color: white;
        font-size: 2.5rem;
        padding: 1rem 0;
      }
      &:hover {
        background-color: white;

        & a {
          color: #333;
        }
      }
    }
  }
  &__social-media {
    font-size: 3rem;

    & i {
      margin: 0 1rem;
      color: white;
    }
  }
}
.drawer.open {
  transform: translateX(0);
}
</style>
