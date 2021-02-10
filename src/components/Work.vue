<template>
  <section class="work container">
    <h2>My Services</h2>
    <div class="work__card">
      <div class="work__card--video">
        <video src="../assets/video2.mp4" controls></video>
      </div>
      <div class="work__card--info">
        <h3>Editing</h3>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            cumque?
          </li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            perferendis doloribus est?
          </li>
        </ul>
      </div>
    </div>
    <div class="work__card">
      <div class="work__card--info">
        <h3>Voice Acting</h3>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            cumque?
          </li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            perferendis doloribus est?
          </li>
        </ul>
      </div>
      <div class="work__card--video">
        <video src="../assets/video2.mp4" controls></video>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Work"
};
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";
.work {
  color: black;

  & h2 {
    text-align: center;
    font-size: 4rem;
    margin: 15rem 0;
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
      }

      & ul li {
        font-size: 1.5rem;
        line-height: 3rem;
      }
    }
  }
}
</style>
