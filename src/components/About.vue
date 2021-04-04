<template>
  <section class="about">
    <div class="container">
      <h2>About Me</h2>
      <div class="flex-container">
        <div class="flex-container__left">
          <img src="../assets/about.png" alt="about me" />
        </div>
        <div class="flex-container__right">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut
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
    & p {
      font-size: 2.2rem;
      line-height: 150%;
      margin-bottom: 9rem;
    }
    &--links {
      & a {
        margin-right: 2rem;
      }
    }
  }
}
</style>
