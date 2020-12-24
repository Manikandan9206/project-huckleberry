<template>
  <v-stepper v-model="e1" alt-labels class="membership-stepper">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1"> Membership </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2"> About DSC NITR </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3" :rules="[() => (e1 > 3 ? basicDetailFormValid : true)]">
        Basic Ones
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 4" step="4"> Additionals </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 5" step="5"> Your Projects </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 6" step="6"> A Question </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="7"> Final One </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items class="membership-stepper-items">
      <v-stepper-content step="1">
        <v-card>
          <div class="card-div card-div-1">
            <img src="/DSC_cover.png" alt="DSC Cover" />
            <div class="cont">
              <h1 class="cont-title">Interested in Joining Us?</h1>
              <h2 class="cont-subtitle">Answer a few short questions and we'll get in touch with you!</h2>
              <p class="cont-desc">Our membership is always open.</p>
              <div class="cont-action">
                <v-btn
                  tile
                  light
                  :large="$vuetify.breakpoint.mdAndUp"
                  :medium="$vuetify.breakpoint.smAndBelow"
                  class="my-btn explore-btn"
                  @click="e1 = 2"
                >
                  Tell me more!
                </v-btn>
              </div>
            </div>
          </div>
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card>
          <div class="card-div card-div-2">
            <div class="cont">
              <h2>
                DSC NIT Rourkela is filled with all kinds of people. Some of our teams are technical, creative, event
                management and outreach. If you feel like you could fit in any of teams above, kindly move forward.
              </h2>
              <p>Learn More <a target="_blank" href="https://bit.ly/AboutDSCNITRourkela"> Here.</a></p>
              <v-btn
                tile
                light
                :large="$vuetify.breakpoint.mdAndUp"
                :medium="$vuetify.breakpoint.smAndBelow"
                class="my-btn explore-btn"
                @click="e1 = 3"
              >
                Continue
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card>
          <div class="card-div card-div-3">
            <div class="cont">
              <v-form ref="basicDetailForm" v-model="basicDetailFormValid">
                <div class="first-name">
                  <h1>First up, What should we call you?</h1>
                  <v-text-field
                    v-model="member.firstName"
                    :dense="$vuetify.breakpoint.xsOnly"
                    label="First Name"
                    outlined
                    clearable
                    :rules="[rules.required]"
                  ></v-text-field>
                </div>
                <div class="last-name">
                  <h1>Cool {{ member.firstName || 'buddy' }}, and your Last Name?</h1>
                  <v-text-field
                    v-model="member.lastName"
                    :dense="$vuetify.breakpoint.xsOnly"
                    label="Last Name"
                    outlined
                    clearable
                  ></v-text-field>
                </div>
                <div class="email">
                  <h1>Great, Now what's your email?</h1>
                  <v-text-field
                    v-model="member.email"
                    :dense="$vuetify.breakpoint.xsOnly"
                    label="E Mail"
                    outlined
                    clearable
                    :rules="[rules.required, rules.email]"
                  ></v-text-field>
                </div>
                <div class="submit">
                  <v-btn tile light block class="my-btn" @click="submitBasicDetailForm"> Sign Up </v-btn>
                </div>
              </v-form>
            </div>
          </div>
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="4">
        <v-card>
          <div class="card-div card-div-4"></div>
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="5">
        <v-card>
          <div class="card-div card-div-5"></div>
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="6">
        <v-card>
          <div class="card-div card-div-6"></div>
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="7">
        <v-card>
          <div class="card-div card-div-7"></div>
        </v-card>
      </v-stepper-content>
    </v-stepper-items>

    <div class="v-stepper--actions text-center mb-4">
      <v-btn text fab @click="e1 -= 1" v-if="e1 > 1">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn text fab @click="$emit('closeStepper')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-btn text fab @click="e1 += 1" v-if="e1 < 7 && e1 > 1">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
  </v-stepper>
</template>

<script>
export default {
  data() {
    return {
      e1: 1,
      DSCCover: require('~/static/DSC_cover.png'),

      member: {
        firstName: '',
        lastName: '',
      },
      basicDetailFormValid: true,
      rules: {
        required: (value) => !!value || 'Required.',
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      },
    }
  },
  computed: {},
  methods: {
    submitBasicDetailForm() {
      this.$refs.basicDetailForm.validate()
      if (this.basicDetailFormValid) {
        console.log(this.member)
      }
    },
  },
}
</script>

<style lang='scss' scoped>
.card-div-1 {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  @media (max-width: 800px) {
    flex-direction: column;
    text-align: center;
  }

  img {
    width: min(50%, 50vw);
    @media (max-width: 800px) {
      width: 70vw;
      margin-bottom: 3rem;
    }
  }
  .cont {
    @media (max-width: 800px) {
      padding: 0 4rem;
    }
    &-title {
      font-size: 3rem;
    }
    &-subtitle {
      font-size: 2.5rem;
    }
    &-desc {
      font-size: 2rem;
    }
    &-action {
    }
  }
}
.card-div-2 {
  padding: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .cont {
    max-width: 600px;
  }

  h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
    @media (max-width: 500px) {
      font-size: 2.5rem;
    }
  }
  p {
    font-size: 2rem;
  }
}

.card-div-3 {
  display: flex;
  justify-content: center;
  align-items: center;
  .cont {
    width: 75%;
    max-width: 700px;
  }
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    @media (max-width: 500px) {
      font-size: 2rem;
    }
  }
}
</style>