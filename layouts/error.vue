<template>
  <section dark class="error-container">
    <div class="error-box">
      <div class="message-box">
        <h1>404</h1>
        <h2>page not found</h2>
      </div>
      <div class="home-link">
        <NuxtLink to="/">Back To Home</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style lang="scss" scoped>
.error-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.error-box {
  width: min(500px, 80%);
  height: min(400px, 50%);
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  border: 5px solid #fff;
  background-color: #2c2c2c;
  box-shadow: 10px 10px 0 #fff;
  margin: auto;
  // margin-top: 20rem;

  display: grid;
  grid-template-rows: 1fr 80px;
  justify-content: center;
  align-items: center;
  text-align: center;
  .message-box {
    h1 {
      font-size: 128px;
      @media (max-width: 500px) {
        font-size: 100px;
      }
      color: #2c2c2c;
      -webkit-text-stroke-width: 3px;
      -webkit-text-stroke-color: #fff;
    }
    h2 {
      font-size: 36px;
      @media (max-width: 500px) {
        font-size: 26px;
      }
      text-transform: uppercase;
    }
  }
  .home-link {
    width: 90%;
    height: 40px;
    margin: 0 auto;
    background-color: #fff;
    font-size: 28px;
    @media (max-width: 500px) {
      font-size: 20px;
    }
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      text-decoration: none;
      color: #000;
    }
  }
}
</style>
