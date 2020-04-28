import Vue from 'vue';
import axios from 'axios';

Vue.use(axios);

const getAllData = () => new Promise ((resolve, reject) => {
    axios.get('https://docs.google.com/spreadsheets/d/1gw1m2JuspwZ7a8SEijkw-M-3g377GGzXdAYKehzCpHQ/export?format=csv&id=1gw1m2JuspwZ7a8SEijkw-M-3g377GGzXdAYKehzCpHQ')
    .then(res => {
        // const toJSON = csv => {
        //     const lines = csv.split('\n')
        //     const result = []
        //     const headers = lines[0].split(',')
        
        //     lines.map(l => {
        //         const obj = {}
        //         const line = l.split(',')
        
        //         headers.map((h, i) => {
        //             obj[h] = line[i]
        //         })
        
        //         result.push(obj)
        //     })
        
        //     return JSON.stringify(result)
        // }
        // const csv = res.data;
        // const jsonData = toJSON(csv)
        resolve(res.data);
    })
    .catch(err => {
        reject(err);
    })
})

export default {
    getAllData
}