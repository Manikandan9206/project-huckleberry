<template>
  <v-stepper v-model="e1" alt-labels class="membership-stepper">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1"> Membership </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2"> About DSC NITR </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3"> Basic Ones </v-stepper-step>

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
          <div class="card-div card-div-2"></div>
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card>
          <div class="card-div card-div-3"></div>
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
      <v-btn text fab @click="e1 += 1" v-if="e1 < 7">
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
    }
  },
}
</script>

<style lang='scss' scoped>
.card-div-1 {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-content: center;

  img {
    width: 100%;
  }
  .cont {
  }
}
</style>