<template>
  <div>


    <!-- <div class="container-fluid d-flex align-items-center justify-content-center" style="z-index:0;">
    <div class="card slideBottom" style="width: 85rem; height: 50rem">
      
    </div>
  </div> -->
    <div class="card-body">
      <div class="d-flex justify-content-center">

        <div>


          <h5 class="card-subtitle my-5 text-body-secondary">
            Informations personnels
          </h5>
          <div class="d-flex justify-content-start align-items-center">
            <p class="m-0 me-5 h6">Genre : </p>
            <div class="d-flex">
              <label class="d-flex">
                <input type="radio" class="option-input radio" name="example" value="Monsieurs"
                  v-model="formData.sexe" />
                <span>Mrs</span>
              </label>
              <label class="d-flex">
                <input type="radio" class="option-input radio" name="example" value="Madame" v-model="formData.sexe" />
                <span>Md</span>
              </label>
            </div>
          </div>
          <div class="d-flex">
            <div class="form-floating">
              <input class="form-control" style="width: 20rem" type="text" id="nom" placeholder="nom de famille"
                v-model="formData.name" />
              <label for="nom">Nom de famille</label>
            </div>

            <div class="form-floating ms-3">
              <input class="form-control" style="width: 20rem" type="text" id="prenom" placeholder="prenom"
                v-model="formData.last_name" />
              <label for="nom">Prenom</label>
            </div>
          </div>
          <div class="d-flex mt-3">
            <div class="form-floating">
              <input class="form-control" style="width: 20rem" type="date" id="date_de_naissance"
                placeholder="date de naissance" v-model="formData.birth" />
              <label for="date_de_naissance">Date de naissance</label>
            </div>
            <div class="form-floating ms-3">
              <input class="form-control" style="width: 20rem" type="text" id="lieu_de_naissance"
                placeholder="lieu de naissance" v-model="formData.birth_place" />
              <label for="lieu_de_naissance">Lieu de naissance</label>
            </div>
          </div>

          <h5 class="card-subtitle my-5 text-body-secondary">
            Contacts
          </h5>
          <div class="d-flex mt-1">
            <div class="form-floating">
              <input class="form-control" style="width: 20rem" type="number" id="phone"
                v-model.number="formData.phone_number" />
              <label for="pone">Téléphone</label>
            </div>
            <div class="form-floating ms-3">
              <input class="form-control" style="width: 20rem" type="email" id="email" placeholder="exemple@gmail.com"
                v-model="formData.email" />
              <label for="email">Adresse e-mail</label>
            </div>
          </div>

          <div class="form-floating mt-3 mb-5">
            <input class="form-control" style="width: 20rem" type="password" id="password" placeholder="password"
              v-model="formData.password" />
            <label for="password">Mots de passe</label>
          </div>

        </div>
      </div>

      <!-- <div class="d-flex justify-content-center mb-3 ">
        <div style="width: 40rem; height: 20rem" class=" shadow-lg rounded card-sary">
          <img class="img" src="../../assets/image/Tiny people signing legal principles document.jpg" id="image"
            alt="Profile" />
          <p class="text-danger mt-1 mb-1" v-if="erreurImage">piece jointe non valide</p>
          <p class="text-danger mt-1 mb-1" v-if="erreurchamp">veuillez bien remplir les champs</p>

          <label for="picture" class="float-start mt-1">
            <span class="p-0">
              <img src="../../assets/icons/addImage.svg" alt="addImg" /> </span><br />
            
          </label>
        </div>


      </div> -->
      <div class="d-flex flex-column justify-content-center align-items-center">
        <div class="avatar-container border  rounded bg-light">
          <label for="picture" class="text-center">
            <img src="../../assets/icons/addImage.svg" for="picture" alt="Avatar" class="avatar-image">

          </label>
          <input type="file" id="picture" class="d-none profile" name="picture" @change="imageChanged($event)" />
        </div>
        <p class="text-danger my-4" v-if="true">piece jointe non valide</p>
        <p class="text-danger my-4" v-if="erreurchamp">veuillez bien remplir les champs</p>
      </div>

      <div class="container mt-5 p-0" style="width: 40rem; height: 20rem">
        <div class="d-flex justify-content-end align-items-center">
          <button class="btn btn-outline-primary me-3" @click="previous()">Revenir au page d'acceuil</button>
          <button class="btn btn-x btn-primary" :class="{ 'disabled': disableBtn }" style="z-index: 0"
          @click="inscrire()">
          s' inscrire
        </button>
        </div>
      </div>

    </div>

  </div>

</template>
<script>
import { backServer } from '@/config/backServer';
import { UserStore } from '../store/userStore'
export default {
  data() {
    //name, last_name, birth, place_birth, identity, phone_number, password, sexe
    return {
      UserStore,
      disableBtn: true,
      erreurchamp: false,
      erreurImage: false,
      formData: {
        name: '',
        last_name: '',
        sexe: '',
        identity: '',
        phone_number: '',
        birth: '',
        birth_place: '',
        email: '',
        password: '',
      }

    }
  },
  watch: {

    formData: {
      handler() {
        if (this.formData.name != "" && this.formData.last_name != "" && this.formData.birth != "" && this.formData.birth_place != "" && this.formData.phone_number != "" && this.formData.email != "" && this.formData.sexe != "" && this.formData.password != "" && this.formData.identity != '') {
          this.disableBtn = false
          console.log(this.formData)

        } else {
          this.disableBtn = true
        }
      },
      deep: true
    }
  },
  methods: {
    async inscrire() {

      await backServer.post('/register', this.formData).then((res) => {
        localStorage.setItem("Authorization", res.data.Authorization)
        localStorage.setItem("RefreshToken", res.data.RefreshToken)
        this.UserStore.changeStateUser(res.data.Authorization)
        this.$router.push("/")
        this.erreurchamp = false
      }).catch((erreur) => {
        console.log(erreur)
        this.erreurchamp = true

      }
      )
    },
    async imageChanged(event) {

      const image = document.getElementById('image')
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = function (e) {
        image.src = e.target.result
      }
      reader.readAsDataURL(file)
      let img = document.getElementById('picture').files[0]
      let formImg = new FormData()
      formImg.append('image', img)
      await backServer.post('/ocr/process-image', formImg).then((res) => {
        if (res.data.documentNumber != '') {
          this.formData.identity = res.data.documentNumber
        } else {
          this.erreurImage = true
        }
      })
    },
    previous(){
      this.$router.push("/")
    }

  }
}
</script>
<style scoped>
/* input {
  height: 40px;
  padding: 10px;
  color: #5a6167;
} */
input:focus {
  outline: none;
  border: 1px solid #00d362;
}

.img {
  width: 638px;
  height: 318px;
}

input[type="file"] {
  visibility: hidden;
}

/* On créé un bouton en ciblant un élément dans la balise label */
label span {
  padding: 8px 12px;
  color: #030303;
}

label span:hover {
  cursor: pointer;
}

.btn-x {
  border: 0;
  background-color: var(--baseColor);
}

.form-control {
  min-height: 50px !important;
  max-height: 50px !important;
}

.card-sary {
  overflow: hidden;
}

.avatar-container {
  overflow: hidden;
  /* border-radius: 50%; */
  position: relative;
  /* top: 50%;
  left: 60%; */
  width: 40rem;
  height: 20rem;
  /* transform: translate(-50%, -50%); */

}

.avatar-image {
  object-fit: fill;
  opacity: 1;
  display: block;
  width: 638px;
  height: 318px;
  transition: .5s ease;
  backface-visibility: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.avatar-middle {

  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%)
}

.avatar-container:hover .avatar-image {
  opacity: 0.3;
}

.avatar-container:hover .avatar-middle {
  opacity: 1;
}

.avatar-text {
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}
</style>
<style scoped src="../../assets/styles/animation/slideBottom.css"></style>