<template>
  <div>
    <h1 class="head_text text-center">Live.</h1>

    <div class="message-box">
      <div class="messages">
        <div class="message">
          <span class="name">User 01 G</span>
          <p class="msg">
            Lorem Ipsum dolor amit setLorem G Ipsum dolor amit setLorem Ipsum
            dolor amit set
          </p>
        </div>
        <div class="message">
          <span class="name">User 02</span>
          <p class="msg">Lorem Ipsum dolor amit set</p>
        </div>
        <div class="message">
          <span class="name">User 03</span>
          <p class="msg">Lorem Ipsum dolor amit set</p>
        </div>
      </div>
      <div class="send-msg">
        <div class="signed" v-if="user">
          <v-text-field
            v-model="message"
            label="Send Message"
            dense
            full-width
            append-icon="mdi-send"
            @click:append="sendMessage"
          ></v-text-field>
        </div>
        <div class="not-signed" v-else>
          <a @click="signIn">Sign In</a> to send messages.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
  },
  methods: {
    signIn() {
      console.log('signing In')
      this.$store.dispatch('signIn')
    },
    sendMessage() {
      console.log(this.message)
    },
  },
}
</script>

<style lang="scss" scoped>
.message-box {
  font-size: 12px;
  width: 300px;
  height: 400px;
  margin: 1rem;
  padding: 2px;
  background-color: #202020;
  border-radius: 10px;
  display: grid;
  grid-template-rows: 1fr 50px;

  .messages {
    padding: 1.5rem;
    font-family: 'Montserrat', sans-serif;
    .message {
      .name {
        margin-left: 8px;
        font-size: 10px;
      }
      .msg {
        color: #ddd;
        max-width: 100%;
        padding: 5px 8px;
        border-radius: 0 8px 8px 8px;
        background-color: #2c2c2c;
      }
    }
  }
  .send-msg {
    background-color: #181818;
    width: 100%;
    height: 100%;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    .signed {
      width: 90%;
      transform: translateY(6px);
    }
    .not-signed {
      font-size: 1.6rem;
      a {
        color: rgb(97, 160, 255);
      }
    }
  }
}
.v-input__append-outer {
  margin-top: 14px !important;
}
</style>
