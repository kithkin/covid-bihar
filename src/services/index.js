import axios from 'axios';

const stateHindi = {
    "Andaman and Nicobar Islands" : "अंडमान व नोकोबार द्वीप समूह",
    "Andhra Pradesh" : "आंध्र प्रदेश",
    "Arunachal Pradesh" : "अरुणाचल प्रदेश",
    "Assam" : "आसाम",
    "Bihar" : "बिहार",
    "Chhattisgarh" : "छत्तीसगढ़",
    "Delhi" : "दिल्ली",
    "Goa" : "गोवा",
    "Gujarat" : "गुजरात",
    "Haryana" : "हरियाणा",
    "Himachal Pradesh" : "हिमाचल प्रदेश",
    "Jharkhand" : "झारखंड",
    "Karnataka" : "कर्नाटक",
    "Kerala" : "केरल",
    "Madhya Pradesh" : "मध्य प्रदेश",
    "Maharashtra" : "महाराष्ट्र",
    "Manipur" : "मणिपुर",
    "Meghalaya" : "मेघालय",
    "Mizoram" : "मिजोरम",
    "Odisha" : "उड़ीसा",
    "Puducherry" : "पुडुचेरी",
    "Punjab" : "पंजाब",
    "Rajasthan" : "राजस्थान",
    "Tamil Nadu" : "तमिल नाडु",
    "Telangana" : "तेलंगाना",
    "Tripura" : "त्रिपुरा",
    "Chandigarh" : "चंडीगढ़",
    "Jammu and Kashmir" : "जम्मू और कश्मीर",
    "Ladakh" : "लद्दाख",
    "Uttar Pradesh" : "उत्तर प्रदेश",
    "Uttarakhand" : "उत्तराखंड",
    "West Bengal" : "पश्चिम बंगाल"
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
                if(key === stateObj.state) {
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
        const zones = resp.data.zones;
        console.log(zones);
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
    getDistrictZones
}