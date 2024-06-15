import axios from 'axios'
const auth_key = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzE4NDEyMDY4LCJleHAiOjE3MTg0MTU2Njh9.tHoKTd7NQ5uO0dPMEPU9CqeNw3q7k3dvmBNsTjKLBPU`

export const backServer = axios.create({
    baseURL: `http://192.168.43.19:2000/`

})

backServer.interceptors.request.use(config => {
    let token = localStorage.getItem("Authorization")
    let refreshToken = localStorage.getItem("RefreshToken")
    
    config.headers['Authorization'] = `${token}`
    config.headers['RefreshToken'] = `${refreshToken}`
    return config
}, error => {

    return Promise.reject(error)
})
// export const backServerAdmin = axios.create({
//     baseURL: `http://192.168.43.19:2000/`

// })

// backServerAdmin.interceptors.request.use(config => {
//     let token = localStorage.getItem("token")
//     let role = localStorage.getItem("role")
//     if(role === "admin"){
//         if (token){
//             config.headers['Authorization'] = `${token}`
//         }
//     }else{
//         this.$router.push('/')
//     }
//     return config
//     }, error => {
//         this.$router.push('/')
//         return Promise.reject(error) 
// })
// localhost/auth/google