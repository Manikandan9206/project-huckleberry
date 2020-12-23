<template>
  <v-stepper v-model="e1" alt-labels>
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1"> Membership </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">
        About DSC NITR
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3"> Basic Ones </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 4" step="4"> Additionals </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 5" step="5">
        Your Projects
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 6" step="6"> A Question </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="7"> Final One </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-2"
          :height="$vuetify.breakpoint.xs ? '300px' : '500px'"
        >
          <div class="card-div-1"></div>
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-2"
          :height="$vuetify.breakpoint.xs ? '300px' : '500px'"
        >
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-2"
          :height="$vuetify.breakpoint.xs ? '300px' : '500px'"
        ></v-card>
      </v-stepper-content>

      <v-stepper-content step="4">
        <v-card
          class="mb-2"
          :height="$vuetify.breakpoint.xs ? '300px' : '500px'"
        ></v-card>
      </v-stepper-content>

      <v-stepper-content step="5">
        <v-card
          class="mb-2"
          :height="$vuetify.breakpoint.xs ? '300px' : '500px'"
        ></v-card>
      </v-stepper-content>

      <v-stepper-content step="6">
        <v-card
          class="mb-2"
          :height="$vuetify.breakpoint.xs ? '300px' : '500px'"
        ></v-card>
      </v-stepper-content>

      <v-stepper-content step="7">
        <v-card
          class="mb-2"
          :height="$vuetify.breakpoint.xs ? '300px' : '500px'"
        ></v-card>
      </v-stepper-content>
    </v-stepper-items>

    <div class="action text-center mb-4">
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

<style>
</style>