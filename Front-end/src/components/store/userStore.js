import { reactive } from 'vue'

export const UserStore = reactive({
   userStroeToken: '',

   addchange: function(t){
      this.change = t
   },
})
