<template>
  <transition name="modal">
    <div class="bloc-modal" v-if="show">
      <div class="overlay" @click="$emit('close')"></div>
      <div class="modale">
        <img @click="$emit('close')" class="close" alt="x" src="../../assets//icons/close.png" style="cursor:pointer" />
        <form>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Email</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >mots de passe</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            />
          </div>

          <button class="btn btn-primary btn-sm clear-left" @click.prevent="login()">
            se connecter
          </button>
          <div class="border container mt-5">

          </div>
          <div class="container connection-google">
            <!-- <img src="" alt="icons google" src="../../assets/images/google.png" /> -->
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>
<script>
import {UserStore} from '@/components/store/userStore'
import axios from 'axios';

export default {
  props: ["show"],
  data(){
    return {
      UserStore
    }
  },
  methods:{
    login(){
      // this.$emit('close')
      // localStorage.setItem('state','connected')
      try {
        axios.get('localhost:2000/auth/google')
      } catch (error) {
        
      }
    }
  }
};
</script>
<style scoped>
.overlay {
  background: rgba(0, 0, 0, 0.5);
}
.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  opacity: 1;
}
.bloc-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.overlay {
  /*background: rgba(0, 0, 0, 0.5);*/
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.modale {
  width: 599px;
  height: 500px;
  position: fixed;
  background-color: white;
  border: 1px solid white;
  border-radius: 10px;
}
.close {
  position: absolute;
  /**/
  top: 12px;
  /**/
  right: 12px;
  /**/
}
form {
  width: 393px;
  height: 224px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

input {
  border-radius: 5px;
  background-color: #edf0f3;
  color: black;
  margin-bottom: 19px;
}
</style>
