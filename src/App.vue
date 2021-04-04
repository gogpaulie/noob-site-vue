<template>
  <div id="app">
    <NavbarMobileDrawer :class="{ open: showNavBar }" />
    <Navbar v-on:show-nav="showNav" />
    <HeroVideo id="home" />
    <div class="background-container">
      <Work id="work" />
      <div class="divider"></div>
      <About id="about" />
    </div>
    <Contact id="contact" />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import NavbarMobileDrawer from './components/NavbarMobileDrawer';
import HeroVideo from './components/HeroVideo';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
export default {
  name: 'App',
  data: () => {
    return {
      showNavBar: false,
    };
  },
  components: {
    Navbar,
    NavbarMobileDrawer,
    HeroVideo,
    Work,
    About,
    Contact,
    Footer,
  },
  methods: {
    showNav() {
      this.showNavBar = !this.showNavBar;
    },
  },
};
</script>

<style lang="scss">
@import './styles/_variables.scss';
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  // Defines what 1rem is...
  font-size: 62.5%; //1rem = 10px; 10px/16px = 62.5%
  scroll-behavior: smooth;
  overflow-x: hidden;
  //   @include respond(tab-land) {
  //     font-size: 56.25%; // 1rem = 9px; 9px/16px = 56.25%
  //   }

  //   @include respond(tab-port) {
  //     font-size: 50%; // 1rem = 8px; 8px/16px = 50%
  //   }
  //   @include respond(big-desktop) {
  //     font-size: 75%; //1rem = 12px; 12px/16px = 75%
  //   }
}

body {
  box-sizing: border-box;
  font-family: $font-primary;
  overflow-x: hidden;
  // @include respond(tab-port) {
  //   padding: 0;
  // }
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  /* background-color: rgb(18, 18, 18); */
  color: rgba(255, 255, 255, 0.87);
  font-size: 1rem;

  line-height: 1.5rem;
  font-weight: 400;
  text-rendering: optimizelegibility;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  // padding: 5rem;
  @media (max-width: $ig-small-screen) {
    padding: 2rem;
  }
}

.background-container {
  background: linear-gradient(
    105.91deg,
    #b3e1ff 0.29%,
    #85a5ba 11.4%,
    #617887 30%,
    #4e616e 53.24%,
    #2a343b 85.39%
  );
  background-blend-mode: multiply;
}

.divider {
  height: 1px;
  background-color: white;
  width: 500px;
  margin: 0 auto;
}

.footer {
  text-align: center;
  padding: 2rem 0;
  font-size: 1.5rem;
  background-color: #ccc;
}
</style>
