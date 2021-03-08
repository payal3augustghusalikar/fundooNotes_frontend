import axios from 'axios'


export default {
    userRegistration(data) {
        const url = process.env.VUE_BASEURL + '/register'
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