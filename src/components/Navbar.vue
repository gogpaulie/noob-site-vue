<template>
  <nav class="nav" v-bind:class="{ active: this.isScrollActive }">
    <div class="container">
      <div class="nav__logo">
        <a href="#home">
          <img src="../assets/noob-logo.png" alt="logo" />
        </a>
      </div>
      <div
        class="nav__mobile-icon"
        v-if="mobileView"
        @click="$emit('show-nav')"
      >
        <i class="fas fa-bars"></i>
      </div>
      <ul class="nav__linkList" v-if="!mobileView">
        <li class="nav__linkList--link">
          <a href="#home" class="current">Home</a>
        </li>
        <li class="nav__linkList--link"><a href="#work">Sevices</a></li>
        <li class="nav__linkList--link"><a href="#!">About</a></li>
        <li class="nav__linkList--link"><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  components: {},
  data: () => {
    return {
      isScrollActive: false,
      mobileView: false,
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleView);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleView);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 100) {
        this.isScrollActive = true;
      } else {
        this.isScrollActive = false;
      }
    },
    handleView() {
      // if (window.innerWidth <= 990) {
      //   this.mobileView = true;
      // } else {
      //   this.mobileView = false;
      // }
      this.mobileView = window.innerWidth <= 990;
      console.log(this.mobileView);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/_variables.scss';
.nav {
  margin: 0 auto;
  padding: 3rem 0;
  max-width: 1200px;
  align-items: center;
  position: fixed;
  background-color: transparent;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.3s ease-in-out;
  z-index: 10;
  @media (max-width: $ig-small-screen) {
    padding: 1rem 0;
  }
  & .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    transition: all 0.3s ease-in-out;
  }
  &__logo img {
    margin-left: 2rem;
    height: 80px;
    width: 80px;
    &:hover {
      filter: brightness(110%);
    }
    @media (max-width: $ig-small-screen) {
      height: 60px;
      width: 60px;
    }
  }
  &__linkList {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    &--link a {
      color: white;
      text-decoration: none;
      padding: 7px 15px;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: #c0392b;
      }
    }
  }
  &__mobile-icon {
    margin-right: 1rem;
    font-size: 3rem;
    padding: 1rem;
    color: white;
    cursor: pointer;
  }
}
.nav.active {
  background-color: rgba(255, 255, 255, 0.9);
  max-width: 100%;
  max-width: 100%;
  padding: 2rem 0;
  @media (max-width: $ig-small-screen) {
    padding: 0;
  }
}

.nav.active .container {
  max-width: 100%;
}

.nav.active a {
  color: black;
}

.nav.active .nav__mobile-icon {
  color: #333;
}
</style>
