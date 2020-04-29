import axios from 'axios';

const getAllData = () => new Promise ((resolve, reject) => {
    axios.get('https://docs.google.com/spreadsheets/d/1gw1m2JuspwZ7a8SEijkw-M-3g377GGzXdAYKehzCpHQ/export?format=csv&id=1gw1m2JuspwZ7a8SEijkw-M-3g377GGzXdAYKehzCpHQ')
    .then(res => {
        const toJSON = csv => {
            const lines = csv.split('\n')
            const result = []
            const headers = lines[0].split(',')
            for(var i=1;i<lines.length;i++){
                var obj = {};
                var currentline=lines[i].split(",");
          
                for(var j=0;j<headers.length;j++){
                    obj[headers[j]] = currentline[j];
                }
          
                result.push(obj);
            }
            return result;
        }
        const csv = res.data;
        const jsonData = toJSON(csv);
        resolve(jsonData);
    })
    .catch(err => {
        reject(err);
    })
})

export default {
    getAllData
}