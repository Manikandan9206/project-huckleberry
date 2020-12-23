<template>
  <div class="my-footer">
    <div class="social">
      <p>Follow Us</p>
      <div class="social-icons">
        <v-btn icon fab href="https://github.com/dscnitrourkela">
          <ion-icon name="logo-github"></ion-icon>
        </v-btn>

        <v-btn icon fab href="https://linkedin.com/company/dscnitrourkela/">
          <ion-icon name="logo-linkedin"></ion-icon>
        </v-btn>

        <v-btn icon fab href="https://facebook.com/dscnitrourkela">
          <ion-icon name="logo-facebook"></ion-icon>
        </v-btn>

        <v-btn icon fab href="https://twitter.com/dscnitrourkela">
          <ion-icon name="logo-twitter"></ion-icon>
        </v-btn>

        <v-btn icon fab href="https://instagram.com/dscnitrourkela/">
          <ion-icon name="logo-instagram"></ion-icon>
        </v-btn>

        <v-btn icon fab href="https://medium.com/dsc-nit-rourkela">
          <ion-icon name="logo-medium"></ion-icon>
        </v-btn>
      </div>
    </div>
    <div class="links">
      <div class="links-left">
        <p>From You</p>
        <a href="mailto:team@dscnitrourkela.org">Feedback</a>
        <a href="">Contributions</a>
        <a href="#">Subscribe</a>
      </div>
      <div class="links-middle">
        <p>Useful Links</p>

        <v-dialog v-model="termsDialog" max-width="800">
          <template v-slot:activator="{ on, attrs }">
            <a
              v-bind="attrs"
              v-on="on"
            >
              Terms of Service
            </a>
          </template>
          <v-card>
            <v-card-title class="headline justify-center" >
              DSC NIT Rourkela | Terms of Service
            </v-card-title>
            <v-card-text>
              <div class="service-terms">
                <div class="terms">
                  <ServiceTerms />
                </div>
              </div>
            </v-card-text>
                     <v-card-actions>
              <v-spacer />
              <v-btn
            text
            fab
            @click="termsDialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-spacer />
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="policyDialog" max-width="800">
          <template v-slot:activator="{ on, attrs }">
            <a
              v-bind="attrs"
              v-on="on"
            >
              Privacy Policy
            </a>
          </template>
          <v-card>
            <v-card-title class="headline justify-center" >
              DSC NIT Rourkela | Privacy Policy
            </v-card-title>
            <v-card-text>
              <div class="privacy-policy">
                <div class="policy">
                  <PrivacyPolicy />
                </div>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
            text
            fab
            @click="policyDialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-spacer />
            </v-card-actions>
          </v-card>
        </v-dialog>
        
        <a href="https://developers.google.com/community/dsc">Developer Student Clubs</a>
        <a href="https://developers.google.com/community/gdg">Google Developer Program</a>
      </div>
      <div class="links-right">
        <p>More From Us</p>
        <a href="mailto:team@dscnitrourkela.org">Contact</a>
        <a href="https://bit.ly/NITRDevs">Community</a>
        <a href="https://youtube.com/channel/UC63nohbg_XnXz4pCAa-96GA">Youtube</a>
      </div>
    </div>
    <div class="copyright">
      <span class="copy"> &copy; 2020, DSC NIT Rourkela, All Rights Reserved </span>
    </div>
  </div>
</template>

<script>
import ServiceTerms from '~/components/ServiceTerms'
import PrivacyPolicy from '~/components/PrivacyPolicy'
export default {
  data() {
    return {
      policyDialog: false,
      termsDialog: false,
    }
  },
  components: {
    PrivacyPolicy,
    ServiceTerms
  }
}
</script>

<style lang="scss" scoped>
.my-footer {
  max-width: 1000px;
  margin: 20px auto;
  display: grid;
  grid-template-rows: 1fr 2fr 40px;

  transform: translateX(-2%);

  @media (max-width: 700px) {
    grid-template-rows: 2fr 3fr 30px;
  }

  .social {
    width: 80%;
    margin: 0 auto;
    p {
      font-size: 2.5rem;
      text-align: center;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 2px;
        width: 24%;
        background-color: #fff;
        opacity: 0.25;
        top: 45%;
        left: 15%;
        border-radius: 5px;
        @media (max-width: 600px) {
          width: 50px;
        }
      }
      &::before {
        content: '';
        position: absolute;
        display: block;
        height: 2px;
        width: 24%;
        background-color: #fff;
        opacity: 0.25;
        top: 45%;
        right: 15%;
        border-radius: 5px;
        @media (max-width: 600px) {
          width: 50px;
        }
      }
    }
    &-icons {
      display: flex;
      justify-content: space-around;

      ion-icon {
        font-size: 4rem;
      }
    }
  }
  .links {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    margin: 5rem;

    @media (max-width: 800px) {
      margin: 4rem 0;
    }
    p {
      font-size: 2rem;
      font-weight: 600;
      @media (max-width: 700px) {
        margin-bottom: 6px;
      }
      @media (max-width: 500px) {
        font-size: 9.6px;
      }
    }
    a {
      display: block;
      font-size: 2rem;
      text-decoration: none;
      opacity: 0.8;
      transition: all 0.1s ease;
      &:hover {
        opacity: 1;
      }
      @media (max-width: 500px) {
        font-size: 10.8px;
      }
      @media (max-width: 400px) {
        font-size: 9.6px;
      }
    }
    &-left {
      text-align: right;
    }
    &-middle {
      text-align: center;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 60%;
        width: 2px;
        background-color: #fff;
        opacity: 0.25;
        top: 20%;
        left: -20%;
        border-radius: 5px;
        @media (max-width: 800px) {
          left: -10%;
        }
      }
      &::before {
        content: '';
        position: absolute;
        display: block;
        height: 60%;
        width: 2px;
        background-color: #fff;
        opacity: 0.25;
        top: 20%;
        right: -20%;
        border-radius: 5px;
        @media (max-width: 800px) {
          right: -10%;
        }
      }
    }
    &-right {
      text-align: left;
    }
  }
  .copyright {
    justify-self: center;
    align-self: center;
    .copy {
      font-size: 1rem;
    }
  }
}
</style>
