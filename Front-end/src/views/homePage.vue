<template>
  <div>


    <section class="section pb-0">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-7 text-center text-lg-left">
            <h1 class="mb-4">Valoriser votre droit et suivre votre demande administratif est notre rôle
            </h1>
            <p class="mb-4">
              Nous somme la pour simplifier les demarche Administartif envers le gouvernement Malagasy
            </p>
          </div>
          <div class="col-lg-4 d-lg-block d-none">
            <img alt="illustration" src="../assets/image/20943807.jpg" class="img-fluid" />

          </div>
        </div>
      </div>
    </section>
    <!-- /banner -->

    <!-- topics -->
    <section class="section pb-0">
      <div class="container">
        <h2 class="section-title">Nos Services</h2>
        <div class="row">
          <!-- topic -->
          <div class="col-lg-3 col-md-4 col-sm-6 mb-4 slide-right">
            <div class="card match-height service">
              <div class="card-body">
                <i class="card-icon ti-panel mb-4"><img src="../assets/icons/administration.svg" width="25px"
                    height="25px" /></i>
                <h3 class="card-title h4">Administration fiscale</h3>
                <p class="card-text">
                  Nous proposons un suivie de votre demande Administratif
                </p>


              </div>
            </div>
          </div>
          <!-- topic -->
          <div class="col-lg-3 col-md-4 col-sm-6 mb-4 slide-right">
            <div class="card match-height  service">
              <div class="card-body">
                <i class="card-icon  mb-4"><img src="../assets/icons/etat-civile.svg" width="1000"
                    height="1000" /></i>
                <h3 class="card-title h4">Service d'etat civile</h3>
                <p class="card-text">
                  Nous traitons dans le meilleurs delais possible votre demande de piéce d'identité, acte d'etat civile,
                  casier judiciere...
                </p>
                <a href="#" class="stretched-link"></a>
              </div>
            </div>
          </div>
          <!-- topic -->
          <div class="col-lg-3 col-md-4 col-sm-6 mb-4 slide-right">
            <div class="card match-height  service">
              <div class="card-body">
                <i class="card-icon ti-panel mb-4"><img src="../assets/icons/permis.svg" width="25px"
                    height="25px" /></i>
                <h3 class="card-title h4">Demande de permis</h3>
                <p class="card-text">
                  Nous traitons le suivis de demande de votre permis de conduire
                </p>
                <a href="#" class="stretched-link"></a>
              </div>
            </div>
          </div>
          <!-- topic -->
          <div class="col-lg-3 col-md-4 col-sm-6 mb-4 slide-right">
            <div class="card match-height  service">
              <div class="card-body">
                <i class="card-icon ti-panel mb-4"><img src="../assets/icons/sante.svg" width="1000px"
                    height="1000px" /></i>
                <h3 class="card-title h4">Service de santé</h3>
                <p class="card-text">
                  Nous proposons des aides pour le suivie de vos bien être afin d' être le plus productive et dynamique
                  dans votre tache quotidienne
                </p>
                <a href="#" class="stretched-link"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /topics -->

    <!-- faq -->
    <section class="section pb-0">
      <div class="container">
        <h2 class="section-title" v-scroll="handleScroll" :class="{ slideUp: isScrolled }">
          Quelque Notion a savoire
        </h2>
        <div class="row masonry-wrapper">
          <!-- faq item -->
          <div class="col-md-6 mb-4" v-scroll="handleScroll" :class="{ slideUp: isScrolled }">
            <div class="card card-lg">
              <div class="card-body">
                <h3 class="card-title h5">Qu'est que l'administration fiscale?</h3>
                <p class="card-text content">
                  L’administration fiscale est un pilier essentiel pour le développement économique
                  et la stabilité financière d’un pays. À Madagascar, la Direction Générale des
                  Impôts (DGI) joue un rôle crucial dans la collecte des impôts et la gestion
                  des finances publiques. Voici quelques informations importantes
                  concernant l’administration fiscale à Madagascar
                </p>
              </div>
            </div>
          </div>
          <!-- faq item -->
          <div class="col-md-6 mb-4" v-scroll="handleScroll" :class="{ slideUp: isScrolled }">
            <div class="card card-lg">
              <div class="card-body">
                <h3 class="card-title h5">
                  les impôts
                </h3>
                <p class="card-text content">
                  À Madagascar, les impôts sont des contributions financières
                  obligatoires
                  que les citoyens et les entreprises doivent payer au
                  gouvernement. Ces impôts sont essentiels pour
                  financer les services publics tels que l’éducation,
                  la santé, les infrastructures et d’autres programmes gouvernementaux.
                </p>
              </div>
            </div>
          </div>
          <!-- faq item -->
          <div class="col-md-6 mb-4" v-scroll="handleScroll" :class="{ slideUp: isScrolled }">
            <div class="card card-lg">
              <div class="card-body">
                <h3 class="card-title h5">
                  permis de conduire?
                </h3>
                <p class="card-text content">
                  Le permis de conduire est une autorisation administrative permettant de conduire certains véhicules
                  motorisés,
                  tels que les voitures, les motos, les cyclomoteurs, les camions et les bus. Autrefois, les auto-écoles
                  prenaient en
                  charge l’ensemble du processus et délivraient le permis de conduire aux demandeurs. Cependant, de nos
                  jours, cela a
                  changé. Les candidats doivent désormais se rendre eux-mêmes au Centre Immatriculateur d’Ambohidahy
                  (CIM) pour effectuer
                  leurs démarches. En outre, pour éviter les longues files d’attente, la demande et la récupération du
                  permis de conduire se font
                  désormais sur rendez-vous. Voici les informations à connaître concernant l’obtention du permis de
                  conduire
                </p>
              </div>
            </div>
          </div>
          <!-- faq item -->
          <div class="col-md-6 mb-4" v-scroll="handleScroll" :class="{ slideUp: isScrolled }">
            <div class="card card-lg">
              <div class="card-body">
                <h3 class="card-title h5">
                  Casier judiciare
                </h3>
                <p class="card-text content">
                  Le tribunal reçoit les demandes de casiers judiciaires du lundi au vendredi de 07h30 à 10h30. La
                  récupération se fait généralement 3 jours après la soumission de la demande au minimum
                </p>
              </div>
            </div>
          </div>
          <!-- faq item -->
          <div class="col-md-6 mb-4" v-scroll="handleScroll" :class="{ slideUp: isScrolled }">
            <div class="card card-lg">
              <div class="card-body">
                <h3 class="card-title h5">Passeport</h3>
                <p class="card-text content">
                  Le passeport malgache est un document de voyage international délivré aux citoyens et citoyennes
                  malgaches. Il sert de preuve de la citoyenneté malgache et permet à son titulaire de voyager à
                  l’extérieur de Madagascar
                </p>
              </div>
            </div>
          </div>
          <!-- faq item -->
          <div class="col-md-6 mb-4" v-scroll="handleScroll" :class="{ slideUp: isScrolled }">
            <div class="card card-lg">
              <div class="card-body">
                <h3 class="card-title h5">Acte de naissance</h3>
                <p class="card-text content">
                  Un "acte de naissance" est un document officiel qui atteste de la naissance d'une personne. Il
                  contient des informations telles que la date et le lieu de naissance, ainsi que les noms des parents.
                  C'est un document essentiel pour prouver l'identité et l'état civil d'une personne
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /faq -->

    <!-- call to action -->
    <section class="section">
      <div class="container">
        <div class="row align-items-center" v-scroll="handleScrollTitle" :class="{ slideUp: scrollTitle }">
          <div class="col-lg-4 text-center d-lg-block d-none">
            <img class="img-fluid" alt="" />
          </div>
          <div class="col-lg-8 text-lg-left text-center">
            <h2 class="mb-3">Vous n' avez toujours pas trouvé votre réponse ?</h2>
            <p>
              ne vous inquietez pas
              <br />
              nous vous offrons la page de foire au question mais tout d'abord vous devrez connecter
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isScrolled: false,
      scrollTitle: false,
    };
  },
  methods: {
    handleScrollTitle() {
      if (window.scrollY > 1000) {
        this.scrollTitle = true;
      } else {
        this.scrollTitle = false;
      }
    },
    handleScroll() {
      if (window.scrollY > 30) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
  },
};
</script>
<style scoped src="../assets/styles/animation/slideRight.css"></style>
<style scoped src="../assets/styles/animation/slideUp.css"></style>
<style scoped>
.submit {
  z-index: 0;
}

.service {
  height: 300px;
}
</style>