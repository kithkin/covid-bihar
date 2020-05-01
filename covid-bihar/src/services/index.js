import axios from 'axios';

const getAllData = async() => {
    try {
        const resp = await axios.get('https://docs.google.com/spreadsheets/d/1gw1m2JuspwZ7a8SEijkw-M-3g377GGzXdAYKehzCpHQ/export?format=csv&id=1gw1m2JuspwZ7a8SEijkw-M-3g377GGzXdAYKehzCpHQ')
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
        const csv = resp.data;
        const jsonData = toJSON(csv);
        return jsonData
    }
    catch (error) {
        console.error(error);
    }
}

const getDistrictData = async() => {
    try {
        const resp = await axios.get('https://api.covid19india.org/v2/state_district_wise.json');
        var result;
        resp.data.forEach(element => {
            if(element.statecode == "BR") {
                result = element.districtData
            }
        });
        return result;
    }
    catch (error) {
        console.error(error);
    }
    
}

const getRecovered = async() => {
    try {
        const resp = await axios.get('https://docs.google.com/spreadsheets/d/1gw1m2JuspwZ7a8SEijkw-M-3g377GGzXdAYKehzCpHQ/export?format=csv&id=1gw1m2JuspwZ7a8SEijkw-M-3g377GGzXdAYKehzCpHQ&gid=432629340')
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
        const csv = resp.data;
        const jsonData = toJSON(csv);
        return jsonData
    }
    catch (error) {
        console.error(error);
    }
}

const getTotal = async() => {
    try {
        const resp = await axios.get('https://docs.google.com/spreadsheets/d/1gw1m2JuspwZ7a8SEijkw-M-3g377GGzXdAYKehzCpHQ/export?format=csv&id=1gw1m2JuspwZ7a8SEijkw-M-3g377GGzXdAYKehzCpHQ&gid=600675561')
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
        const csv = resp.data;
        const jsonData = toJSON(csv);
        return jsonData
    }
    catch (error) {
        console.error(error);
    }
}

const getDeath = async() => {
    try {
        const resp = await axios.get('https://docs.google.com/spreadsheets/d/1gw1m2JuspwZ7a8SEijkw-M-3g377GGzXdAYKehzCpHQ/export?format=csv&id=1gw1m2JuspwZ7a8SEijkw-M-3g377GGzXdAYKehzCpHQ&gid=1324261680')
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
        const csv = resp.data;
        const jsonData = toJSON(csv);
        return jsonData
    }
    catch (error) {
        console.error(error);
    }
}


// const dynamicData = async() => {

//     const total = getTotal();
//     const recovered = getRecovered();
//     const death = getDeath();


//     total.forEach(tel => {
//         recovered.forEach(rel => {
//           death.forEach(del => {
//             for (var i = 0; i < total.length; i++) {
//               if(total[i].district == rel.district && total[i].district == del.district) {
//                 var totalNewCases = tel[Object.keys(tel)[Object.keys(tel).length - 2]]
//                 var totalNewRecovered = rel[Object.keys(rel)[Object.keys(rel).length - 2]]
//                 var totalNewDeath = del[Object.keys(del)[Object.keys(del).length - 2]]
//                 // for (var j =0; j < a.length; j++) {
//                   // if(total[i].district === a[j].district){
//                     arr.push({
//                       district: tel.district,
//                       districtHi: tel.districtHi,
//                       totalCases: tel.total,
//                       totalNewCases: totalNewCases,
//                       totalRecovered: rel.total,
//                       totalNewRecovered: totalNewRecovered,
//                       totalDeath: del.total,
//                       totalNewDeath: totalNewDeath
//                     })
//                   // }
//                 // }
                
//               }
//             }
            
      
      
//           })
//         })
//       })
// }

export default {
    getAllData,
    getTotal,
    getRecovered,
    getDeath,
    getDistrictData
}