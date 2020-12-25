<template>
  <div class="project">
    <div class="project-cover">
      <img :src="project.cover" :alt="project.title" loading="lazy" />
    </div>
    <div class="project-cont">
      <h2 class="project-cont--title">{{ project.title }}</h2>
      <div class="project-cont--desc">
        <p>{{ project.desc }}</p>
        <a v-if="project.link" :href="project.link" class="project-cont--desc">Watch Project</a>
      </div>

      <div class="project-cont--dets">
        <div class="contr">
          <ion-icon name="people"></ion-icon>
          <span>{{ project.contr }}</span>
        </div>
        <div class="forks">
          <span>{{ project.forks }}</span>
          <ion-icon name="git-branch"></ion-icon>
        </div>
      </div>
      <v-btn small width="120" light :href="project.ghLink" target="_blank">
        <h1 class="action-text">Contribute</h1>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: ['project'],
}
</script>

<style lang="scss" scoped>
.project {
  width: 400px;
  height: 250px;
  display: grid;
  grid-template-columns: 3fr 5fr;

  border-radius: 30px;
  box-shadow: 5px 5px 20px #000000bb;
  overflow: hidden;
  margin: 0 auto;
  transform: scale(0.99);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1);
    box-shadow: 5px 5px 20px #000;
  }

  @media (max-width: 450px) {
    width: 300px;
    height: 180px;
    margin: 0 auto;
  }

  &-cover {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &-cont {
    padding: 12px 16px;
    display: grid;
    grid-template-rows: 40px 120px 40px 30px;
    justify-items: center;
    @media (max-width: 450px) {
      grid-template-rows: 35px 1fr 40px 25px;
      padding: 4px;
      height: 170px;
    }

    &--title {
      font-size: 28px;
      @media (max-width: 450px) {
        font-size: 20px;
      }
    }
    &--desc {
      padding: 0 3px 0 0;
      font-size: 12px;
      opacity: 0.7;
      height: 90%;
      overflow: scroll;
      overflow-x: hidden;
      &::-webkit-scrollbar {
        width: 1px;
        background: #222;
      }
      &::-webkit-scrollbar-thumb {
        background: #000;
      }

      p {
        margin-top: 7px;
        margin-bottom: 5px;
      }
      a {
        color: #fff;
      }
      @media (max-width: 450px) {
        font-size: 8px;
        padding: 0 10px;
      }
    }
    &--dets {
      width: 80%;
      display: flex;
      justify-content: space-evenly;
      position: relative;
      margin-bottom: 10px;
      opacity: 0.8;

      &::after {
        content: '';
        display: block;
        height: 20px;
        width: 2px;
        border-radius: 10px;
        background-color: #ffffff22;
        position: absolute;
        top: 20%;
        left: 50%;
      }

      .contr {
        display: flex;
        align-items: center;
      }
      .forks {
        display: flex;
        align-items: center;
      }
      ion-icon {
        font-size: 18px;
      }
      span {
        padding: 1px 5px 0;
        font-size: 18px;
      }
    }
    .action-text {
      color: #000;
    }
  }
}
</style>
