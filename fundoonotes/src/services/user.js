import axios from 'axios'


export default {
    registerUser(data) {
        console.warn("saving start", data)
        console.warn("saving start data")
        const url1 = process.env.VUE_BASEURL
        console.warn("saving url1", url1)
        const url = 'http://localhost:2001' + '/register'
        console.warn("saving url", url)
        console.warn("axios", axios)
        return axios.post(url, data)

    }
}

// class User {
//     userRegistration = (data) => {
//         const url = process.env.VUE_BASEURL + '/register'
//         return axios.post(url, data)

//     }
// }

// module.exports = new User();