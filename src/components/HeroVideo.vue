<template>
  <section class="hero-video">
    <div class="bg-video">
      <video class="bg-video__content" autoPlay muted loop>
        <source src="../assets/video2.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="hero-video__title container">
      <h1>Perpetual Noob Video Productions</h1>
      <p>
        Perpetual Noob Video Productions is a small, locally operated and owned
        company that takes care of all aspects of video production for local
        entrepreneurs and small businesses.
      </p>
    </div>
    <div class="hero-video__cta">
      <button class="cta cta__primary">
        <a href="#contact">request quote</a>
      </button>
      <button class="cta cta__secondary" href="#services">
        <a href="#work">See my work</a>
      </button>
    </div>
    <ShowMoreBtn />
  </section>
</template>

<script>
import ShowMoreBtn from "./ShowMoreBtn";
export default {
  name: "HeroVideo",
  components: {
    ShowMoreBtn
  }
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";
.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 1;
  overflow: hidden;

  &__content {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
.hero-video {
  // background-color: rgba($color: #17077769, $alpha: 0.6);
  background-color: rgba($color: #000000, $alpha: 0.6);
  height: 65vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  line-height: 3rem;

  @media (max-width: $ig-small-screen) {
    height: 80vh;
  }
  @media (max-width: $ig-xsmall-screen) {
    height: 90vh;
  }

  &__title {
    max-width: 900px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 5rem;

    & h1 {
      text-align: center;
      color: white;
      margin: 2rem 0;
      font-size: 4rem;
      @media (max-width: $ig-med-screen) {
        font-size: 3rem;
      }
      @media (max-width: $ig-xsmall-screen) {
        font-size: 2rem;
      }
    }
    & p {
      max-width: 900px;
      font-size: 2rem;
      text-align: center;
      @media (max-width: $ig-med-screen) {
        font-size: 1.75rem;
      }
      @media (max-width: $ig-xsmall-screen) {
        font-size: 1.5rem;
      }
    }
  }
}
.cta {
  width: 250px;
  padding: 1rem 4rem;
  margin: 2rem;
  font-family: inherit;
  color: white;
  background-color: transparent;
  border: 2px solid white;
  font-size: 2rem;
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: $ig-small-screen) {
    display: flex;
  }
  @media (max-width: $ig-xsmall-screen) {
    padding: 0.75rem 2rem;
    font-size: 1.5rem;
    width: 180px;
  }

  & a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    background-color: white;
    color: black;
  }
  &:focus {
    outline: none;
  }
}
</style>
