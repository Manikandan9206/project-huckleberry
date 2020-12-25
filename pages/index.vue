<template>
  <v-layout column justify-center align-center text-center>
    <section id="first-page">
      <div class="first-page--image my-2 my-sm-5">
        <img src="/DSC_cover.png" alt="DSC Cover" />
      </div>
      <div class="first-page--actions py-1 py-lg-5">
        <v-dialog v-model="joinDialog" max-width="1000" :fullscreen="$vuetify.breakpoint.xsOnly">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              tile
              light
              :large="$vuetify.breakpoint.mdAndUp"
              :medium="$vuetify.breakpoint.smAndBelow"
              class="my-btn explore-btn"
            >
              Join us
            </v-btn>
          </template>
          <v-card>
            <MembershipStepper @closeStepper="joinDialog = false" @applySuccess="applySuccess" v-if="!showSuccessMsg" />
            <div class="successMsgBox" v-if="showSuccessMsg">
              <div class="icon">
                <ion-icon name="checkmark-circle-outline"></ion-icon>
              </div>
              <div class="msg">
                <h1>Thank You for your Interset towards DSC NIT Rourkela</h1>
                <h3>You'll recieve your follow-up mail shortly!</h3>
              </div>
              <div class="action">
                <v-btn text fab @click="joinDialog = false" x-large>
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </div>
            </div>
          </v-card>
        </v-dialog>
      </div>
    </section>

    <section id="who-are-we">
      <div class="head">
        <h1 class="head_text">Who Are We?</h1>
        <p class="head_desc desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem sint excepturi recusandae possimus dolores
          eos aspernatur nemo delectus illum voluptates corrupti corporis adipisci eveniet eius porro unde, maiores
          placeat laborum.
        </p>
      </div>
      <div class="cont">
        <div class="cont-box cont-box-1">
          <div class="cont-box--icon">
            <ion-icon name="book"></ion-icon>
          </div>
          <div class="cont-box--body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
            </p>
          </div>
          <div class="cont-box--title">
            <span>Study</span>
          </div>
        </div>
        <div class="cont-box cont-box-2">
          <div class="cont-box--icon">
            <ion-icon name="shapes"></ion-icon>
          </div>
          <div class="cont-box--body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
            </p>
          </div>
          <div class="cont-box--title">
            <span>Analyze</span>
          </div>
        </div>
        <div class="cont-box cont-box-3">
          <div class="cont-box--icon">
            <ion-icon name="construct"></ion-icon>
          </div>
          <div class="cont-box--body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
            </p>
          </div>
          <div class="cont-box--title">
            <span>Solve</span>
          </div>
        </div>
      </div>
      <div class="action">
        <v-btn
          tile
          light
          :large="$vuetify.breakpoint.mdAndUp"
          :medium="$vuetify.breakpoint.smAndBelow"
          class="my-btn join-btn"
          nuxt
          to="/about"
        >
          Explore More
        </v-btn>
      </div>
    </section>

    <section id="events">
      <div class="head">
        <h1 class="head_text">Events</h1>
        <p class="head_desc desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
      <div class="cont">
        <div class="event-list">
          <EventCard class="eventcard" v-for="event in events" :event="event" :key="event.id" />
        </div>
      </div>
      <div class="action">
        <v-btn
          tile
          light
          :large="$vuetify.breakpoint.mdAndUp"
          :medium="$vuetify.breakpoint.smAndBelow"
          class="my-btn join-btn"
          target="_blank"
          href="https://dsc.community.dev/national-institute-of-technology-rourkela/"
        >
          Wanna Attend!
        </v-btn>
      </div>
    </section>

    <section id="projects">
      <div class="head">
        <h1 class="head_text">Projects</h1>
        <p class="head_desc desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
      <div class="cont">
        <div class="project-list">
          <ProjectCard class="projectcard" v-for="project in projects" :project="project" :key="project.id" />
        </div>
      </div>
      <div class="action">
        <v-btn
          tile
          light
          :large="$vuetify.breakpoint.mdAndUp"
          :medium="$vuetify.breakpoint.smAndBelow"
          class="my-btn join-btn"
          href="https://github.com/dscnitrourkela"
          target="_blank"
        >
          Way to All Repo
        </v-btn>
      </div>
    </section>

    <section id="footer" class="footer">
      <div class="footer-top">
        <div class="footer-top--left">
          <img src="/icon-crop.png" alt="DSC icon" />
          <h1 class="dsc-title">Developer Students Club</h1>
          <h2 class="dsc-place">NIT Rourkela</h2>
        </div>
        <div class="footer-top--right">
          <div class="location">
            <div class="icon">
              <ion-icon name="location-sharp"></ion-icon>
            </div>
            <div class="cont">
              <h3>National Institute of Technology</h3>
              <h4>Rourkela, Orissa</h4>
            </div>
          </div>
          <div class="mail">
            <div class="icon">
              <ion-icon name="mail-open-sharp"></ion-icon>
            </div>
            <div class="cont">
              <h3><span>Mail to </span> <a href="mailto:dsc.nitr@gmail.com">dsc.nitr@gmail.com</a></h3>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <MyFooter />
      </div>
    </section>
  </v-layout>
</template>

<script>
import EventCard from '~/components/EventCard'
import ProjectCard from '~/components/ProjectCard'
import MyFooter from '~/components/MyFooter'
import MembershipStepper from '~/components/MembershipStepper'
export default {
  components: {
    EventCard,
    ProjectCard,
    MyFooter,
    MembershipStepper,
  },
  data() {
    return {
      joinDialog: false,
      showSuccessMsg: false,
      events: [
        {
          id: 6,
          cover: '/event-covers/AMA03.png',
          upcoming: false,
          org: [
            {
              name: 'Pritish',
              photo: 'member-photos/128/pritish-samal.jpg',
            },
            {
              name: 'Ritesh',
              photo: 'member-photos/128/ritesh-patil.jpg',
            },
            {
              name: 'Sriram',
              photo: 'member-photos/128/patibanda-sriram.jpg',
            },
            {
              name: 'Deba',
              photo: 'member-photos/128/deba-panigrahi.png',
            },
          ],
          det: {
            title: 'Decoding Coding | Ask Us Anything',
            desc: 'Beginning your journey with Coding is always filled with a lots of doubts.',
            link: 'https://www.youtube.com/playlist?list=PLxK2vL6QW00d0g1GP4sg4ClIAtRfOPaDv',
          },
          date: 'Dec 18, 2020',
        },
        {
          id: 5,
          cover: '/event-covers/AndroidStudyJams.jpeg',
          upcoming: false,
          org: [
            {
              name: 'Chimmay',
              photo: 'member-photos/128/chinmay-kabi.jpg',
            },
          ],
          det: {
            title: 'Android Study Jams ',
            desc:
              'Initiative by Google to enable more people to learn android from ground up, with the help of the numerous #dsc chapters present around the world. ',
            link: 'https://www.youtube.com/playlist?list=PLxK2vL6QW00f56iGbnBVbXuQ1AxOjH9zw',
          },
          date: 'Dec 3 - 16, 2020',
        },
        {
          id: 4,
          cover: '/event-covers/AMA02.png',
          upcoming: false,
          org: [
            {
              name: 'Abel',
              photo: 'member-photos/128/abel-mathew.jpg',
            },
            {
              name: 'Roshan',
              photo: 'member-photos/128/roshan-shaw.jpg',
            },
          ],
          det: {
            title: 'Internships & Placements | AMA',
            desc: 'Beginning your journey with Coding is always filled with a lots of doubts.',
            link: 'https://www.youtube.com/playlist?list=PLxK2vL6QW00d0g1GP4sg4ClIAtRfOPaDv',
          },
          date: 'Nov 27, 2020',
        },
        {
          id: 3,
          cover: '/event-covers/Localhost.png',
          upcoming: false,
          org: [
            {
              name: 'Harish',
              photo: 'member-photos/128/harish-teens.jpg',
            },
          ],
          det: {
            title: 'Localhost: Hack the Technical Interview',
            desc: 'Best practices for Technical Interview, Solve several common Technical Questions',
            link: 'https://www.youtube.com/watch?v=J3w0GJYKwmg',
          },
          date: 'Sep 26, 2020',
        },
        {
          id: 2,
          cover: '/event-covers/MachineLearning.png',
          upcoming: false,
          org: [
            {
              name: 'Sayan Dey',
              photo: 'member-photos/128/sayan-dey.jpg',
            },
          ],
          det: {
            title: 'Abstract ML | Machine Learning',
            desc: 'Basic Introduction to Machine Learning, how to get started, common misconceptions ',
            link: 'https://www.youtube.com/watch?v=NtgBFXt3Rls',
          },
          date: 'Sep 25, 2020',
        },
        {
          id: 1,
          cover: '/event-covers/PythonBot.png',
          upcoming: false,
          org: [
            {
              name: 'Vedant',
              photo: 'member-photos/128/vedant-raghuwanshi.jpg',
            },
          ],
          det: {
            title: 'Make a bot using Python for AI',
            desc: 'Learn the basic Python skills for developing Markov Chain Bot.',
            link: 'https://www.youtube.com/watch?v=m6jm8TfNgF8&ab_channel=DSCNITRourkela',
          },
          date: 'Sep 20, 2020',
        },
      ],
      projects: [
        {
          id: 1,
          cover: '/project-covers/1.png',
          title: 'Avacado',
          desc:
            'The project repository of the mobile app development for Institute Counselling Services, NIT Rourkela.',
          contr: '14',
          forks: '30',
          link: 'https://play.google.com/store/apps/details?id=in.ac.nitrkl.scp.scp',
          ghLink: 'https://github.com/dscnitrourkela/project-avocado',
        },
        {
          id: 2,
          cover: '/project-covers/1.png',
          title: 'Dates',
          desc: 'The backend repository for project NITR Central.',
          contr: '6',
          forks: '4',
          link: '',
          ghLink: 'https://github.com/dscnitrourkela/project-dates',
        },
        {
          id: 3,
          cover: '/project-covers/1.png',
          title: 'Elaichi',
          desc: 'This is the development repository for campus guide at NIT Rourkela.',
          contr: '9',
          forks: '27',
          link: '',
          ghLink: 'https://github.com/dscnitrourkela/project-elaichi',
        },
        {
          id: 4,
          cover: '/project-covers/1.png',
          title: 'Guava',
          desc: 'The project repository for an open system to generate and manage certificates.',
          contr: '5',
          forks: '9',
          link: '',
          ghLink: 'https://github.com/dscnitrourkela/project-guava',
        },
      ],
    }
  },
  methods: {
    applySuccess() {
      console.log('SUBMIT SUCCESS')
      this.showSuccessMsg = true
    },
  },
}
</script>

<style lang="scss" scoped>
.successMsgBox {
  height: 400px;
  @media (max-width: 600px) {
    height: 100vh;
    padding: 7rem 2rem 1rem;
  }
  max-width: 500px;
  margin: 0 auto;
  padding: 3rem 2rem 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .icon {
    font-size: 10rem;
    @media (max-width: 600px) {
      font-size: 15rem;
    }
  }
  .msg {
    text-align: center;
    flex-grow: 2;
    h1 {
      font-size: 3rem;
    }
    h3 {
      font-size: 2rem;
    }
  }
  .action {
  }
}

#first-page {
  margin-bottom: max(50px, 6vw);
  .first-page--image {
    img {
      width: max(80%, 60vw);
      @media (min-width: 1900px) {
        width: 60vw;
      }
    }
  }
}

#who-are-we {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: max(50px, 6vw);
  .head {
    max-width: 900px;
    margin: 0 25px;
  }
  .cont {
    display: flex;
    flex-direction: row;
    margin: 5rem 0;
    @media (max-width: 900px) {
      flex-direction: column;
    }

    &-box {
      height: 300px;
      width: 250px;
      margin: 2rem 2vw;
      border: 3px solid #fff;
      border-radius: 25px 25px 10px 10px;
      display: grid;
      grid-template-rows: 250px 45px;
      position: relative;
      opacity: 0.8;
      transition: all 0.1s ease;

      &:hover {
        opacity: 1;
      }

      &--icon {
        position: absolute;
        top: -5%;
        right: -5%;
        padding: 5px;
        background-color: #2c2c2c;
        ion-icon {
          font-size: 7rem;
        }
      }

      &--body {
        padding: 50px 25px;
        font-size: 16px;
        text-align: left;
        line-height: 1.2;
        font-weight: 400;
      }
      &--title {
        background-color: #fff;
        color: #444;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          font-weight: 500;
          font-size: 3rem;
        }
      }
    }
  }
  .action {
    a {
      color: #000;
    }
  }
}

#events {
  margin-bottom: max(60px, 6vw);
  .head {
    margin: 0 20px;
  }
  .cont {
    margin: 50px auto;
    @media (max-width: 700px) {
      margin: 30px auto;
    }
    .event-list {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: scroll;

      width: min(95vw, 1200px);
      margin: 4rem auto;

      scrollbar-color: #000 #333;
      scrollbar-width: 5px;
      scrollbar-width: thin;

      // -webkit-overflow-scrolling: touch;

      &::-webkit-scrollbar-track {
        // -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #333;
      }

      &::-webkit-scrollbar {
        height: 5px;
        border-radius: 5px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #000;
        border-radius: 5px;
      }

      .eventcard {
        flex: 0 0 auto;

        @media (max-width: 1200px) {
          transform: scale(0.85);
        }
        @media (min-width: 1200px) {
          margin: 3rem 4rem;
        }
      }
    }
  }
  .action {
    a {
      color: #000;
    }
  }
}

#projects {
  margin-bottom: max(50px, 6vw);

  @media (max-width: 400px) {
    width: 340px;
    margin: 0 auto 50px;
  }

  .head {
    margin: 0 20px;
  }

  .cont {
    margin: 50px auto;
    @media (min-width: 400px) {
      margin: 70px auto;
    }

    .project-list {
      display: grid;
      grid-column-gap: max(5rem, 5vw);
      grid-row-gap: max(5rem, 3vw);
      justify-content: center;
      // grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
      grid-template-columns: repeat(2, minmax(400px, 1fr));
      @media (max-width: 840px) {
        grid-template-columns: repeat(1, minmax(400px, 1fr));
      }
    }
  }
  .action {
    a {
      color: #000;
    }
  }
}

.footer {
  font-size: 8px;
  width: min(1400px, 90vw);
  margin-top: 5rem;
  &-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5rem;

    @media (max-width: 600px) {
      flex-direction: column;
      justify-content: center;
    }

    &--left {
      text-align: left;
      @media (max-width: 600px) {
        text-align: center;
        margin: 2rem;
      }
      img {
        width: min(250px, 20vw);
        margin-bottom: 2rem;
      }
      h1.dsc-title {
        font-size: 4rem;
        @media (max-width: 1000px) {
          font-size: 3rem;
        }
        @media (min-width: 701px) and (max-width: 800px) {
          font-size: 2.5rem;
        }
      }
      h2.dsc-place {
        font-size: 3rem;
        font-weight: 500;
        @media (max-width: 1000px) {
          font-size: 2rem;
        }
        @media (min-width: 701px) and (max-width: 800px) {
          font-size: 1.5rem;
        }
      }
    }
    &--right {
      @media (max-width: 600px) {
        text-align: center;
        margin: 2rem;
      }
      ion-icon {
        font-size: 4rem;
        margin-right: 2rem;
      }
      h3 {
        margin: 0;
        font-size: 2rem;
        font-weight: 600;
        @media (min-width: 701px) and (max-width: 800px) {
          font-size: 1.5rem;
        }
        span {
          font-weight: 500;
        }
      }
      .location {
        display: flex;
        align-items: center;
        margin: 2rem;

        .cont {
          text-align: left;

          h4 {
            font-size: 1.75rem;
            @media (min-width: 701px) and (max-width: 800px) {
              font-size: 1.25rem;
            }
          }
        }
      }
      .mail {
        display: flex;
        align-items: center;
        margin: 2rem;
      }
    }
  }
}
</style>
