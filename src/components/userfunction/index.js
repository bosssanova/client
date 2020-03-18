import axios from "axios"

export const register = newUser => {
    return axios
        .post('http://localhost:4000/users/register', {
            userName: newUser.userName,
            userPassword: newUser.userPassword
        })
        .then(res => {
            console.log("Registered!")
        })
}

export const login = user => {
    return axios
        .post('http://localhost:4000/users/login', {
            userName: user.userName,
            userPassword: user.userPassword
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
        .catch(err => {
            console.log("error : " + err)
        })
}