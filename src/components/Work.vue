<template>
  <section class="work">
    <div class="container">
      <h2 class="section-title">MY SERVICES</h2>
      <div class="flex">
        <div class="divider-title"></div>
        <h3 class="service-title">Video Production</h3>
        <div class="divider-title"></div>
      </div>

      <div class="service-features">
        <div class="feature">
          <img src="../assets/cut.svg" alt="video splicing icon" />
          <h4>VOD Splicing</h4>
          <p>Get your streams cut down to the content you want.</p>
        </div>
        <div class="feature">
          <img src="../assets/film.svg" alt="video splicing icon" />
          <h4>Channel Trailers</h4>
          <p>Introduce new users to your channel.</p>
        </div>
        <div class="feature">
          <img src="../assets/newspaper.svg" alt="video splicing icon" />
          <h4>Commercials</h4>
          <p>Satisfy your sponsors and keep the offers coming.</p>
        </div>
      </div>
      <div class="work__card">
        <div class="work__card--video">
          <youtube
            :video-id="videoId"
            ref="youtube"
            @playing="playing"
            :fit-parent="true"
            :resize="true"
          ></youtube>
        </div>
      </div>
      <div class="flex">
        <div class="divider-title"></div>
        <h3 class="service-title">Voice Acting</h3>
        <div class="divider-title"></div>
      </div>
      <div class="service-features">
        <div class="feature">
          <img src="../assets/gamepad.svg" alt="video splicing icon" />
          <h4>Animation/Video Games</h4>
          <p>Get your streams cut down to the content you want.</p>
        </div>
        <div class="feature">
          <img src="../assets/bell.svg" alt="video splicing icon" />
          <h4>Stream Alerts</h4>
          <p>Introduce new users to your channel.</p>
        </div>
        <div class="feature">
          <img src="../assets/book-reader.svg" alt="video splicing icon" />
          <h4>Narration</h4>
          <p>Satisfy your sponsors and keep the offers coming.</p>
        </div>
      </div>
      <div class="work__card">
        <div class="work__card--video">
          <youtube
            :video-id="videoId"
            ref="youtube"
            @playing="playing"
            :fit-parent="true"
            :resize="true"
          ></youtube>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Work',
  data() {
    return {
      videoId: '5tQ5KRpWKHQ',
    };
  },
  methods: {
    playVideo() {
      this.player.playVideo();
    },
    playing() {
      console.log('we are watching!!!');
    },
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/_variables.scss';
.service-features {
  padding: 6rem 0;
  display: flex;
  justify-content: space-around;

  @media (max-width: $ig-small-screen) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

.feature {
  text-align: center;
  max-width: 225px;
  background-color: rgba($color: #000000, $alpha: 0.3);
  border-radius: 10px;
  padding: 1rem 2rem;
  box-shadow: 0 10px 10px 2px rgba($color: #000000, $alpha: 0.2);
  transition: all 0.2s;
  @media (max-width: $ig-med-screen) {
    margin-bottom: 2rem;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 10px 4px rgba($color: #000000, $alpha: 0.2);
    & img {
      filter: invert(42%) sepia(93%) saturate(1352%) hue-rotate(87deg)
        brightness(119%) contrast(119%);
    }
  }

  & img {
    height: 75px;
    margin-bottom: 3rem;
    filter: invert(100%) sepia(28%) saturate(2%) hue-rotate(266deg)
      brightness(108%) contrast(101%);
  }

  & h4 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 3rem;
    line-height: 120%;
  }

  & p {
    font-size: 1.75rem;
    line-height: 140%;
  }
}
.work {
  padding: 15rem 0;
  /* background: linear-gradient(
    105.91deg,
    #b3e1ff 0.29%,
    #85a5ba 11.4%,
    #617887 30%,
    #4e616e 53.24%,
    #2a343b 85.39%
  );
  background-blend-mode: multiply; */
  color: white;

  &__card {
    display: flex;
    margin: 6rem 0;

    @media (max-width: $ig-med-screen) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &--video {
      width: 100%;
      @media (max-width: $ig-med-screen) {
        width: 600px;
      }
      @media (max-width: $ig-small-screen) {
        width: 400px;
      }
      @media (max-width: $ig-xsmall-screen) {
        width: 300px;
      }

      & video {
        width: 100%;
        height: 100%;
        /* @media (max-width: $ig-xsmall-screen) {
          width: 300px;
        } */
      }
    }

    &--info {
      flex: 1;
      padding: 4rem;

      & h3 {
        text-align: center;
        font-size: 3rem;
        margin-bottom: 2rem;
        line-height: 120%;
      }
      & ul {
        list-style: circle;
        padding: 0 4rem;
      }

      & ul li {
        font-size: 1.5rem;
        line-height: 3rem;
      }
    }
  }
}

.service-title {
  font-weight: 300;
  line-height: 110%;
  font-size: 3rem;
  text-align: center;
}
</style>
