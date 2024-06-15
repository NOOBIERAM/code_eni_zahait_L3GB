<template>
  <!--<header class="sticky-top navigation " v-scroll="handleScroll" :class="{ 'nav-bg': isScrolled }">-->
  <header class="sticky-top navigation " style="z-index: 1021;"  v-scroll="handleScroll" :class="{ 'nav-bg': isScrolled }"> 
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <router-link class="navbar-brand" href="index.html" to="/"><img class="img-fluid"
            alt="CitizenConnect" /></router-link>
        <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navigation">
          <i class="ti-align-right h4 text-dark"></i>
        </button>
        <div class="collapse d-flex justify-content-end navbar-collapse text-center" id="navigation">
          <ul v-if="afficherNav" class="navbar-nav mx-auto align-items-center"> <!---->
            <li class="nav-item">
              <router-link class="nav-link" :class="[$route.path == '/' ? 'text-primary' : '']" to="/">Aceuille</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link " :class="[$route.path == '/PermisPage' ? 'text-primary' : '']" to="/PermisPage">Service de Permis</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="[$route.path == '/service_etat_civile' ? 'text-primary' : '']" to="/service_etat_civile">service etat civile</router-link>
                <!-- <router-link class="nav-link"  to="/service_etat_civile"><h5>service etat civile</h5></router-link> -->
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="[$route.path == '/ImpotPage' ? 'text-primary' : '']" to="/ImpotPage">Service d'impôt</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="[$route.path == '/healthService' ? 'text-primary' : '']"  to="/healthService">service de santé</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="[$route.path == '/forumPage' ? 'text-primary' : '']"  to="/forumPage">FAQ</router-link>
            </li>

          </ul>
          <a v-if="!afficherLogs" class="btn btn-sm btn-outline-primary ml-lg-4">logout</a>
          <a v-if="afficherLogs" href="changelog.html" class="btn btn-sm btn-outline-primary ml-lg-4 me-3 " @click.prevent="open = true">se
            connecter</a>
          <a  v-if="afficherLogs" href="#" class="btn btn-sm btn-primary ml-lg-4" @click="this.$router.push('/inscription')">s'inscrire</a>
        </div>
      </nav>
    </div>
    <Teleport to="body">
      <connexion :show="open" @close="open = false"></connexion>
    </Teleport>
  </header>

</template>
<script>
import { UserStore } from '@/components/store/userStore'
import connexion from '@/components/login_inscription/connexion.vue'
export default {
  components: {
    connexion,
  },
  mounted(){
    if(localStorage.getItem("RefreshToken") !== null){
      this.afficherLogs = false
      this.afficherNav = true
    }
  },
  data() {
    return {
      afficherNav: false,
      isScrolled: false,
      open: false,
        afficherLogs: true,
      UserStore
    }
  },
  watch: {
    UserStore: {
      handler() {
        console.log("change")
        this.afficherLogs = false
        this.afficherNav = true
        },
         deep: true
        }
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 50) {
        this.isScrolled = true
      } else {
        this.isScrolled = false
      }

    },

  },
  directives: {
    scroll: {
      created: (el, binding) => {
        window.addEventListener('scroll', binding.value)
      },
      unmounted: (el, binding) => {
        window.removeEventListener('scroll', binding.value)
      }
    },
  }
}
</script>
<style scoped>
.nav-bg {
  background-color: rgba(255, 255, 255);

}

</style>
