<template>
  <section class="about">
    <div class="container">
      <h2 class="section-title">ABOUT ME</h2>
      <div class="flex-container">
        <div class="flex-container__left">
          <img src="../assets/about.png" alt="about me" />
        </div>
        <div class="flex-container__right">
          <p>
            I am Perpetual Noob. I've been creating and narrating video-based
            content for nearly a decade, starting in the oversaturated world of
            YouTube Let's Plays. I augmented this with live broadcasting on
            Twitch, incorporating my impersonations and original character
            voices into my broadcasts. Nowadays I make guides for video game
            boss fights, broadcast on Twitch, create video content for others
            like you, and voice act.
          </p>
          <p>
            Since I started creating video-based content, I've been learning
            every day: through acting classes, Internet tutorials, and my own
            trial and error. This is why my skill set is wide and varied and my
            capabilities impressive. I will bring everything I am capable of to
            your project.
          </p>
          <div class="flex-container__right--links">
            <a
              href="https://www.youtube.com/user/PerpetualNoob3"
              target="_blank"
              ><img src="../assets/Youtube.svg" alt="youtube link"
            /></a>
            <a href="https://www.twitch.tv/perpetual_noob" target="_blank"
              ><img src="../assets/Twitch.svg" alt="youtube link"
            /></a>
            <a href="https://twitter.com/perpetualnoob3" target="_blank"
              ><img src="../assets/Twitter.svg" alt="youtube link"
            /></a>
            <a href="https://www.patreon.com/perpetualnoob3" target="_blank"
              ><img src="../assets/Patreon.svg" alt="youtube link"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style lang="scss" scoped>
@import '../styles/_variables.scss';
.about {
  /* background: linear-gradient(
    105.91deg,
    #b3e1ff 0.29%,
    #85a5ba 11.4%,
    #617887 30%,
    #4e616e 53.24%,
    #2a343b 85.39%
  );
  background-blend-mode: multiply; */
  padding: 15rem 0;

  & h2 {
    text-align: center;
    margin-bottom: 9rem;
    font-size: 4rem;
  }
}

.flex-container {
  display: flex;
  @media (max-width: $ig-med-screen) {
    flex-direction: column;
    align-items: center;
  }

  &__left {
    & img {
      width: 500px;
      @media (max-width: $ig-small-screen) {
        width: 400px;
      }
      @media (max-width: $ig-xsmall-screen) {
        width: 300px;
      }
    }
  }
  &__right {
    padding: 5rem;
    @media (max-width: $ig-xsmall-screen) {
      padding: 2rem;
    }
    & p {
      font-size: 2.2rem;
      line-height: 150%;
      margin-bottom: 6rem;
      @media (max-width: $ig-small-screen) {
        font-size: 1.75rem;
      }
      @media (max-width: $ig-xsmall-screen) {
        font-size: 1.5rem;
      }
    }
    &--links {
      & a {
        margin-right: 2rem;
      }
    }
  }
}
</style>
