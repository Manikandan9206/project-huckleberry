<template>
  <div>
    <h1 class="head_text text-center">Live.</h1>

    <div class="message-box">
      <div class="messages">
        <div class="message" v-for="(message, i) in liveMessages" :key="i">
          <span class="name">{{ message.userName }}</span>
          <p class="msg">
            {{ message.userMessage }}
          </p>
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
            @click:append="sendLiveMessage"
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
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      message: '',
    }
  },
  computed: {
    ...mapState(['user', 'liveMessages']),
  },
  methods: {
    signIn() {
      console.log('signing In')
      this.$store.dispatch('signIn')
    },
    sendLiveMessage() {
      console.log(this.message)
      if (this.message) {
        this.$store.dispatch('sendLiveMessage', this.message)
        this.message = ''
      }
    },
  },
  mounted() {
    console.log('live.vue - MOUNTED')
    this.$store.dispatch('fetchLiveMessages')
  },
  destroyed() {
    this.$store.dispatch('stopFetchLiveMessages')
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
    overflow-y: scroll;
    padding: 1.5rem;
    font-family: 'Montserrat', sans-serif;

    &::-webkit-scrollbar-track {
      // -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #252525;
      border-radius: 4px;
    }

    &::-webkit-scrollbar {
      width: 4px;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #000;
      border-radius: 4px;
    }
    .message {
      .name {
        opacity: 0.75;
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
