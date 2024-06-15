<template>
  <div>
    <section class="section landing pb-0">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-7 text-center">
            <h1 class="mb-4">
              Face question
            </h1>
            <p class="mb-5">
              Découvrez un espace d'échange vibrant où vos idées prennent vie et
              où les étudiants se rassemblent pour partager passions,
              connaissances et expériences.
            </p>
            <form class="shadow rounded form-inline" @submit.prevent="sendPost()">
              <div class="input-group">
                <input type="text" class="form-control border-0 small" placeholder="Poser votre question ici ..."
                  aria-label="Search" aria-describedby="basic-addon2" v-model="content" required />
                <div class="input-group-append">
                  <button class="btn btn-primary" :class="{'bg-light border-0 ': !visibleGet}" type="submit" :disabled="!visibleGet">
                    Publier
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="col-lg-4 d-lg-block d-none">
            <img alt="illustration" class="img-fluid rounded" src="../assets/images/faq.jpeg" style="max-width: 90%" />
          </div>
        </div>
      </div>
    </section>
    <section class="pt-5">
      <div id="accordion" class="container section-sm  p-5 commentsHeight">
        
        <div v-if="visibleGet">
          <div v-for="(reply, index) in listForum" :key="index" class="card bg-light rounded mb-3">
          <div class="card-header border-0 p-4 bg-white rounded">
            <div class="d-flex">
              <div class="mx-3">
                <p>
                  {{ reply.content }}
                </p>
                <div class="d-flex">
                  <div class="btn btn-sm btn-outline-dark c-type" @click="setIndex(index)">
                    <i>Commentaires {{ reply.comments.length }}</i>
                  </div>
                </div>
              </div>
              <div>
                <i class="ti-close c-type font-weight-bold"></i>
              </div>
            </div>
          </div>

          <div id="collapseOne" class="collapse rounded"
            :class="{ 'show': (index == indexToShow && currentIndex != index) }" data-parent="#accordion">
            <div class="mx-5 card-body rounded bg-light">
              <div v-if="visible">
                <div v-for="(rep, ind) in reply.comments" :key="ind" class="rounded bg-white mb-3 p-2 d-flex">
                <div class="mx-3">
                  <p class="mb-0">
                    {{ rep.comment }}
                  </p>
                </div>
              </div>
              </div>
              <div v-else class="d-flex justify-content-center align-items-center my-5">
                <div class=" loader"></div>
              </div>
              <form class="form-inline">
                <div class="input-group">
                  <input type="text" class="form-control border-0 small" placeholder="Placer votre commentaire ici ..."
                    aria-label="Search" aria-describedby="basic-addon2" />
                  <div class="input-group-append">
                    <button class="btn btn-sm btn-primary" type="button" @click="replyComments(reply.comments)">
                      <!-- <i class="ti-arrow-right"></i> --> Repondre
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
        <div  v-else class="d-flex justify-content-center align-items-center my-5">
                <div class=" loader"></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { backServer } from '@/config/backServer';
export default {
  name: "SampleComponent",
  data() {
    return {
      indexToShow: -1,
      currentIndex: -1,
      visible: false,
      visibleGet:false,
      content:'',
      name:'', 
      listForum: []

    };
  },
  mounted(){
    this.getFaq()
  },
  methods: {
    setIndex(index = -1) {
      this.currentIndex == index ? this.currentIndex = -1 : this.currentIndex = this.indexToShow
      this.visible = false
      this.indexToShow = index;
      setTimeout(() => {
        this.visible = true
      }, 2000);
    },
    async sendPost(){
      try {
        await backServer.post('/post/faq',{content:this.content})
        this.getFaq()
      } catch (error) {
        console.log(error);
      }
    },
    async getFaq(){
      try {
        this.visibleGet=false
        let arr =[]
        const res = await backServer.get('/get/faq')
        arr = [...res.data]
        for(let x of arr){
          for(let y in x.Faqs){
            this.listForum[y] = x.Faqs[y] 
          }
        }
        setTimeout(() => {
          this.content=''
          this.visibleGet = true
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    },
    replyComments(x){
      console.log(x);
    }
  },
};
</script>

<style scoped>
.loader {
  width: 75px;
  aspect-ratio: 1;
  display: grid;
}

.loader:before,
.loader:after {
  content: "";
  grid-area: 1/1;
  width: 35px;
  aspect-ratio: 1;
  box-shadow: 0 0 0 3px #000 inset;
  filter: drop-shadow(40px 40px 0 #000);
  animation: l8 2s infinite alternate;
}

.loader:after {
  margin: 0 0 0 auto;
  filter: drop-shadow(-40px 40px 0 #000);
  animation-delay: -1s;
}

@keyframes l8 {

  0%,
  10% {
    border-radius: 0
  }

  30%,
  40% {
    border-radius: 50% 0
  }

  60%,
  70% {
    border-radius: 50%
  }

  90%,
  100% {
    border-radius: 0 50%
  }
}
</style>