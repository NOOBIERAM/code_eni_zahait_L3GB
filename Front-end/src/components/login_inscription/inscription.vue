<template>
<div>

    
    <div class="container-fluid d-flex align-items-center justify-content-center" style="z-index:0;">
    <div class="card slideBottom" style="width: 85rem; height: 50rem">
      <div class="card-body">
        <div class="d-flex justify-content-center">
          
          <div style="height: 20rem">
            <div class="d-flex">
                <label class="d-flex">
                <input type="radio" class="option-input radio" name="example" value="Monsieurs" v-model="formData.sexe"/>
                <span>Mrs</span>
            </label>
            <label class="d-flex">
                <input type="radio" class="option-input radio" name="example" value="Madame" v-model="formData.sexe"/>
                <span>Md</span>      
            </label>
            </div>
           
            <h6 class="card-subtitle mt-1 mb-1 text-body-secondary">
              Information personel
            </h6>
            <div class="d-flex">
              <div class="form-group">
                <input
                  style="width: 20rem"
                  type="text"
                  id="nom"
                  placeholder="nom de famille"
                  v-model="formData.name"
                />
              </div>

              <div class="form-group ms-3">
                <input
                  style="width: 20rem"
                  type="text"
                  id="prenom"
                  placeholder="prenom"
                  v-model="formData.last_name"
                />
              </div>
            </div>
            <div class="d-flex mt-3">
              <div class="form-group">
                <input
                  style="width: 20rem"
                  type="date"
                  id="date_de_naissance"
                  placeholder="date de naissance"
                  v-model="formData.birth"
                />
              </div>
              <div class="form-group ms-3">
                <input
                  style="width: 20rem"
                  type="text"
                  id="lieu_de_naissance"
                  placeholder="lieu de naissance"
                  v-model="formData.birth_place"
                />
              </div>
            </div>

            <h6 class="card-subtitle mt-1 text-body-secondary">
              Contact details
            </h6>
            <div class="d-flex mt-1">
              <div class="form-group">
                <input style="width: 20rem" type="number" id="phone" v-model.number="formData.phone_number" />
              </div>
              <div class="form-group ms-3">
                <input
                  style="width: 20rem"
                  type="email"
                  id="email"
                  placeholder="exemple@gmail.com"
                  v-model="formData.email"
                />
              </div>
            </div>
            
              <div class="form-group mt-3">
                <input
                  style="width: 20rem"
                  type="password"
                  id="password"
                  placeholder="password"
                  v-model="formData.password"
                />
              </div>
            
          </div>
        </div>

        <div class="d-flex justify-content-center mb-3">
          <div style="width: 40rem; height: 20rem" class="border">
            
            <img
              class="img"
              src="../../assets/image/Tiny people signing legal principles document.jpg"
              id="image"
              alt="Profile"
            />
            <p class="text-danger mt-1 mb-1" v-if="erreurImage">piece jointe  non valide</p>
            <p class="text-danger mt-1 mb-1" v-if="erreurchamp">veuillez bien remplir les champs</p>
       
            <label for="picture" class="float-start mt-1">
              <span class="p-0">
                <img
                  src="../../assets/icons/addImage.svg"
                  alt="addImg"
                /> </span
              ><br />
              <input
                type="file"
                id="picture"
                class="profile"
                name="picture"
                @change="imageChanged($event)"
              />
            </label>
          </div>
          
          
        </div>
     
        <div class="container mt-5" style="width: 40rem; height: 20rem">
          <button class="btn btn-primary float-end " :class="{'disabled': disableBtn}"  style="z-index: 0" @click="inscrire()">
            s' inscrire
          </button>
        </div>
      </div>
    </div>
  </div>

</div>
 
</template>
<script>
import axios from 'axios'
import { UserStore } from '../store/userStore'
export default {
    data(){
      //name, last_name, birth, place_birth, identity, phone_number, password, sexe
        return {
          UserStore,
            disableBtn: true,
            erreurchamp: false,
            erreurImage: false,
            formData: {
                name:'',
                last_name:'',
                sexe: '',
                identity: '',
                phone_number:'',
                birth:'',
                birth_place: '',
                email: '',
                password: '',
            }

        }
    },
    watch:{  

        formData: {
      handler() {
        if(this.formData.name != "" && this.formData.last_name != "" && this.formData.birth != "" && this.formData.birth_place != "" && this.formData.phone_number != "" && this.formData.email != "" && this.formData.sexe != "" && this.formData.password != "" && this.formData.identity != ''){
           this.disableBtn = false
           console.log(this.formData)
            
        }else {
            this.disableBtn = true    
        }
        },
         deep: true
        }
    },
    methods :{
        async inscrire(){
      
          await axios.post('http://192.168.43.19:2000/register',this.formData).then((res) => {
                localStorage.setItem("Authorization",res.data.Authorization)
                localStorage.setItem("RefreshToken",res.data.RefreshToken) 
                this.UserStore.changeStateUser(res.data.Authorization)
                this.$router.push("/") 
                this.erreurchamp = false
          }).catch((erreur)=>{
            console.log(erreur)
            this.erreurchamp = true

          }
          )
        },
        async imageChanged(event){
     
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
          await axios.post('http://192.168.43.19:2000/ocr/process-image', formImg).then((res) => {
            if(res.data.documentNumber != ''){
                this.formData.identity = res.data.documentNumber 
            }else {
                this.erreurImage = true
            }
            })
        }
      
    }
}
</script>
<style scoped>

input {
  height: 40px;
  padding: 10px;
  color: #5a6167;
}
input:focus {
  outline: none;
  border: 1px solid #cc0036;
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
.btn {
    background-color:#cc0036;
}
</style>
<style scoped src="../../assets/styles/animation/slideBottom.css">
</style>