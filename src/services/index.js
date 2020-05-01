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


const dynamicData = async() => {

    const total = await getTotal();
    const recovered = await getRecovered();
    const death = await getDeath();
    
    const mergeByName = (a1, a2, a3) =>
    a1.map(totalCase => ({
        ...a2.find((rDistrictwise) => (rDistrictwise.district == totalCase.district)),
        ...a3.find((dDistrictwise) => (dDistrictwise.district == totalCase.district)),
        ...totalCase
    }));

    const tableData = mergeByName(total, recovered, death);

    const covidDataObj = { 
        loading: false,
        tableData: tableData
    }

    return covidDataObj;
}

export default {
    getAllData,
    getTotal,
    getRecovered,
    getDeath,
    getDistrictData,
    dynamicData
}