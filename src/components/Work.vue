<template>
  <section class="work">
    <div class="container">
      <h2>My Services</h2>
      <div class="work__card">
        <div class="work__card--video">
          <youtube
            :video-id="videoId"
            ref="youtube"
            @playing="playing"
            fitParent="true"
          ></youtube>
        </div>
        <div class="work__card--info">
          <h3>Video Production</h3>
          <ul>
            <li>
              VOD splicing
            </li>
            <li>Channel trailers</li>
            <li>Commercials</li>
            <li>
              Clip compilations
            </li>
            <li>
              Product review videos
            </li>
            <li>
              Contact me to discuss exactly what you need (no charge)
            </li>
          </ul>
        </div>
      </div>
      <div class="work__card">
        <div class="work__card--info">
          <h3>Voice Acting (coming soon)</h3>
          <ul>
            <li>
              Cartoons/Animation
            </li>
            <li>Video Games</li>
            <li>Stream alerts</li>
            <li>
              Narration (watch my guides on YouTube for examples)
            </li>
            <li>
              Contact me to discuss exactly what you need (no charge)
            </li>
          </ul>
        </div>
        <div class="work__card--video">
          <video src="../assets/video2.mp4" controls></video>
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
.work {
  padding: 15rem 0;
  background: linear-gradient(
    105.91deg,
    #b3e1ff 0.29%,
    #85a5ba 11.4%,
    #617887 30%,
    #4e616e 53.24%,
    #2a343b 85.39%
  );
  background-blend-mode: multiply;
  color: white;

  & h2 {
    text-align: center;
    font-size: 4rem;
  }

  &__card {
    display: flex;
    margin: 10rem 0;

    @media (max-width: $ig-med-screen) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &--video {
      width: 500px;

      @media (max-width: $ig-xsmall-screen) {
        width: 300px;
      }

      & video {
        width: 100%;
        height: 100%;
      }
    }

    &--info {
      flex: 1;
      padding: 4rem;

      & h3 {
        font-size: 3rem;
        margin-bottom: 2rem;
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
</style>
