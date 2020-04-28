import Vue from 'vue';
import axios from 'axios';

Vue.use(axios);

const getAllData = (url) => new Promise ((resolve, reject) => {
    axios.get('')
    .then(res => {
        res.data
    })
    .catch(err => {
        console.log(err, "")
    })
})