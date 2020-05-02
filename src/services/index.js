import axios from 'axios';

const stateHindi = {
    "AN" : "अंडमान व नोकोबार द्वीप समूह",
    "AP" : "आंध्र प्रदेश",
    "AR" : "अरुणाचल प्रदेश",
    "AS" : "आसाम",
    "BR" : "बिहार",
    "CT" : "छत्तीसगढ़",
    "DL" : "दिल्ली",
    "GA" : "गोवा",
    "GJ" : "गुजरात",
    "HR" : "हरियाणा",
    "HP" : "हिमाचल प्रदेश",
    "JH" : "झारखंड",
    "KA" : "कर्नाटक",
    "KL" : "केरल",
    "MP" : "मध्य प्रदेश",
    "MH" : "महाराष्ट्र",
    "MN" : "मणिपुर",
    "ML" : "मेघालय",
    "MZ" : "मिजोरम",
    "NL" : "नगालैंड",
    "OR" : "उड़ीसा",
    "PY" : "पुडुचेरी",
    "PB" : "पंजाब",
    "RJ" : "राजस्थान",
    "SK" : "सिक्किम",
    "TN" : "तमिलनाडु",
    "TG" : "तेलंगाना",
    "TR" : "त्रिपुरा",
    "CH" : "चंडीगढ़",
    "DN" : "दादरा और नगर हवेली",
    "DD" : "दमन और दीव",
    "JK" : "जम्मू और कश्मीर",
    "LA" : "लद्दाख",
    "LD" : "लक्षद्वीप",
    "UP" : "उत्तर प्रदेश",
    "UT" : "उत्तराखंड",
    "WB" : "पश्चिम बंगाल"
}

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
          
                // for(var j=0;j<headers.length;j++){
                //     obj[headers[j]] = currentline[j];
                // }

                obj[headers[0]] = currentline[0];   //district
                obj[headers[1]] = currentline[1];   //districtHi
                obj[headers[headers.length-3]] = currentline[headers.length-3]; //totalR
                obj[headers[headers.length-2]] = currentline[headers.length-2]; //newR
          
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
          
                // for(var j=0;j<headers.length;j++){
                //     obj[headers[j]] = currentline[j];
                // }

                obj[headers[0]] = currentline[0];   //district
                obj[headers[1]] = currentline[1];   //districtHi
                obj[headers[headers.length-4]] = currentline[headers.length-4]; //totalT
                obj[headers[headers.length-3]] = currentline[headers.length-3]; //newC
                obj[headers[headers.length-2]] = currentline[headers.length-2]; //active
          
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
          
                // for(var j=0;j<headers.length;j++){
                //     obj[headers[j]] = currentline[j];
                // }

                obj[headers[0]] = currentline[0];   //district
                obj[headers[1]] = currentline[1];   //districtHi
                obj[headers[headers.length-3]] = currentline[headers.length-3]; //totalD
                obj[headers[headers.length-2]] = currentline[headers.length-2]; //newD
          
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

const getWorldData = async() => {
    try {
        const resp = await axios.get('https://docs.google.com/spreadsheets/d/1gw1m2JuspwZ7a8SEijkw-M-3g377GGzXdAYKehzCpHQ/export?format=csv&id=1gw1m2JuspwZ7a8SEijkw-M-3g377GGzXdAYKehzCpHQ&gid=1061676964')
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


const getBiharData = async() => {

    try {
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
        tableData.pop();
        const covidDataObj = { 
            loading: false,
            tableData: tableData
        }

        return covidDataObj;
    }
    catch(error){
        console.error(error);
    }
    
}

const getIndiaData = async() => {
    try {
        const resp = await axios.get('https://api.covid19india.org/data.json');
        let statewiseData = resp.data.statewise;
        statewiseData.shift();
        let stateHi = '';
        statewiseData.forEach( (stateObj) => {
            for(var key in stateHindi) {
                if(key === stateObj.statecode) {
                    stateHi = stateHindi[key];
                }
            }
            stateObj.stateHi = stateHi;
        });
        return statewiseData;
    }
    catch(error) {
        console.error(error)
    }
}

const getDistrictZones = async() => {
    try {
        const resp = await axios.get('https://api.covid19india.org/zones.json');
        var result = [];
        resp.data.zones.forEach(res => {
            if(res.state == "Bihar") {
                result.push(res);
            }
        })
        return result
    }
    catch (error) {
        console.error(error);    
    }
}

const getBiharDaily = async() => {
    try {
        const resp = await axios.get('https://api.covid19india.org/states_daily.json');
        console.log("Here: ", resp.data)
    }
    catch (error) {
        console.error(error);    
    }
}

export default {
    getAllData,
    getTotal,
    getRecovered,
    getDeath,
    getDistrictData,
    getBiharData,
    getIndiaData,
    getWorldData,
    getDistrictZones,
    getBiharDaily
}
