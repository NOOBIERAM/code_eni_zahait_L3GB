<template>
  <div>
    <section class="section pb-0">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-7 text-center text-lg-left">
            <h1 class="mb-4">Service d'etat civile</h1>
            <p class="mb-4">
              Le Service de l’état civil a pour mission d’enregistrer tous les
              événements qui marquent le parcours de vie d’une personne, de sa
              naissance à la mort, dans le registre officiel fédéral de l’état
              civil
            </p>
          </div>
          <div class="col-lg-4 d-lg-block d-none">
            <img src="../assets/image/Tiny people signing legal principles document.jpg" alt="illustration"
              class="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    <section class="section pb-0">
      <div class="container">
        <h2 class="section-title">Listes Des Service d'etat Civile</h2>
        <div class="row">
          <!-- topic -->
          <div class="col-lg-3 col-md-4 col-sm-6 mb-4 slide-right">
            <div class="card match-height service">
              <div class="card-body">
                <i class="card-icon ti-panel mb-4"></i>
                <h3 class="card-title h4">Acte d'etat civile</h3>
                <p class="card-text">
                  Demarche a suivre pour un demande de copie de naissance
                </p>
              </div>
            </div>
          </div>
          <!-- topic -->
          <div class="col-lg-3 col-md-4 col-sm-6 mb-4 slide-right">
            <div class="card match-height service">
              <div class="card-body">
                <i class="card-icon ti-panel mb-4"></i>
                <h3 class="card-title h4">Acte de naissance</h3>
                <p class="card-text">
                  Demarche a suivre pour un demande de casier judiciaire
                </p>
                <a href="#" class="stretched-link"></a>
              </div>
            </div>
          </div>
          <!-- topic -->
          <div class="col-lg-3 col-md-4 col-sm-6 mb-4 slide-right">
            <div class="card match-height service">
              <div class="card-body">
                <i class="card-icon ti-panel mb-4"></i>
                <h3 class="card-title h4">Acte de mariage</h3>
                <p class="card-text">
                  Demarche a suivre pour un demande de carte d'identiter
                </p>
                <a href="#" class="stretched-link"></a>
              </div>
            </div>
          </div>
          <!-- topic -->
          <div class="col-lg-3 col-md-4 col-sm-6 mb-4 slide-right">
            <div class="card match-height service">
              <div class="card-body">
                <i class="card-icon ti-panel mb-4"></i>
                <h3 class="card-title h4">Casier judiciaire</h3>
                <p class="card-text">
                  Demarche a suivre pour un demande de bulletin de naissance
                </p>
                <a href="#" class="stretched-link"></a>
              </div>
            </div>
          </div>

          <!-- topic -->

          <!-- topic -->
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2 class="section-title">Envoyer une demande</h2>
        <form class="form-group">
          <select class="form-control" v-model="demande">
            <option v-for="option in liste" v-bind:key="option.id" :value="option.id">
              {{ option.description }}
            </option>
          </select>
        </form>
        <button class="btn btn-primary btn-sm mt-3" :class="{ disabled: isdisabled }" @click.prevent="envoyerDemande()">
          envoyer
        </button>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2 class="section-title">Tous mes demandes</h2>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">date de demande</th>
              <th scope="col">status de mon demande</th>
             
            </tr>
          </thead>
          <tbody>
            <tr v-for="demandes in data" v-bind:key="demandes.id">
              <th scope="row">{{ demandes.id }}</th>
              <td>{{ demandes.date_demande }}</td>
              <td>{{ demandes.status_demande }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
<script>
import { backServer } from "@/config/backServer";
export default {
  data() {
    return {
      demande: "",
      liste: [],
      data: [],
      isdisabled: true,
    };
  },
  watch: {
    demande() {
      if (this.demande != "") {
        this.isdisabled = false;
      }
    },
  },
  mounted() {
    this.getDemande();
    this.getEtatCivile();
  },
  methods: {
    async envoyerDemande() {
      try {
        const response = backServer.post(`/demande?serviceId=${this.demande}`, {
          headers: {
            Authorization: `${localStorage.getItem("Authorization")}`,
          },  
        })
        console.log(response)
        this.getDemande()
      }catch(error){
        console.log(error)
      }
    },
    async getDemande() {
      try {
        const response = backServer.get('/mes/demandes', {
          headers: {
            Authorization: `${localStorage.getItem("Authorization")}`,
          },
        })
        this.data = [...response.data.response]
      }catch(error){
        console.log(error)
      }
    },
    async getEtatCivile() {
      try {
        const response = backServer.get("/services", {
          headers: {
            Authorization: `${localStorage.getItem("Authorization")}`,
          },
        });
        console.log(response.data);
        this.liste = [...response.data.service];
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.slide-right:nth-child(1) {
  animation: slide-right 2.75s cubic-bezier(0.5, 0, 0.5, 1);
}

.slide-right:nth-child(2) {
  animation: slide-right 2s cubic-bezier(0.5, 0, 0.5, 1);
}

.slide-right:nth-child(3) {
  animation: slide-right 1.25s cubic-bezier(0.5, 0, 0.5, 1);
}

.slide-right:nth-child(4) {
  animation: slide-right 0.5s cubic-bezier(0.5, 0, 0.5, 1);
}

@keyframes slide-right {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.service {
  height: 300px;
}

.btn {
  background-color: #ff0043;
}
</style>