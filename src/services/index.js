import axios from 'axios';

const stateHindi = {
    "TT" : "भारत",
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

const districtHindi = {
    "Araria": "अररिया",
    "Arwal": "अरवल",
    "Aurangabad": "औरंगाबाद",
    "Banka": "बांका",
    "Begusarai": "बेगूसराय",
    "Bhagalpur": "भागलपुर",
    "Bhojpur": "भोजपुर (आरा)",
    "Buxar": "बक्सर",
    "Saran": "सारण (छपरा)",
    "Darbhanga": "दरभंगा",
    "East Champaran": "पूर्वी चंपारण",
    "Gaya": "गया",
    "Gopalganj": "गोपालगंज",
    "Jamui": "जमुई",
    "Jehanabad": "जहानाबाद",
    "Kaimur Bhabua": "कैमूर भभुआ",
    "Katihar": "कटिहार",
    "Khagaria": "खगड़िया",
    "Kishanganj": "किशनगंज",
    "Lakhisarai": "लखीसराय",
    "Madhepura": "मधेपुरा",
    "Madhubani": "मधुबनी",
    "Munger": "मुंगेर",
    "Muzaffarpur": "मुजफ्फरपुर",
    "Nalanda": "नालंदा",
    "Nawada": "नवादा",
    "Patna": "पटना",
    "Purnia": "पूर्णिया",
    "Rohtas": "रोहतास",
    "Saharsa": "सहरसा",
    "Samastipur": "समस्तीपुर",
    "Sheikhpura": "शेखपुरा",
    "Sheohar": "शिवहर",
    "Sitamarhi": "सीतामढ़ी",
    "Siwan": "सिवान",
    "Supaul": "सुपौल",
    "Vaishali": "वैशाली",
    "West Champaran": "पश्चिम चम्पारण"
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


/**
 * 
 * @name getDistrictData
 * @description Get all Bihar's covid19 details district wise
 * @returns {
 *      {
 *          loading: boolean //Vuetify Loader
 *          tableData: [
 *              active: number,
 *              confirmed: number,
 *              deceased: number,
 *              recovered: number,
 *              delta: {Object},
 *              deltaconfirmed: number,
 *              deltadeceased: number,
 *              deltarecovered: number,
 *              district: 'String',
 *              districtHi: 'String',
 *              notes: 'String'
 *          ],
 *          __proto__: {Object} 
 *      }    
 *  }
 *  
 */
const getDistrictData = async() => {
    try {
        const resp = await axios.get('https://api.covid19india.org/v2/state_district_wise.json');
        var result;
        resp.data.forEach(element => {
            if(element.statecode == "BR") {
                result = element.districtData
            }
        });
        if(result) {
            let distHi = ''
            result.forEach((distObj) => {
                for(var key in districtHindi) {
                    if(key === distObj.district) {
                        distHi = districtHindi[key];
                    }
                }
                distObj.deltadeceased = distObj.delta.deceased
                distObj.deltarecovered = distObj.delta.recovered
                distObj.deltaconfirmed = distObj.delta.confirmed
                distObj.districtHi = distHi;
            })
            const tableData = result;
            const covidDataObj = { 
                loading: false,
                tableData: tableData
            }
            return covidDataObj;
        }
        else {
            console.log("Covid19 India API is not working")
        }
    }
    catch (error) {
        console.error(error);
    }
    
}


/**
 * 
 * @name getStateData
 * @description Get all India's covid19 details state wise
 * @returns {
 *      {
 *          loading: boolean //Vuetify Loader
 *          tableData: [
 *              active: 'String',
 *              confirmed: 'String',
 *              deceased: 'String',
 *              recovered: 'String',
 *              lastupdatedtime: 'String'
 *              delta: {Object},
 *              deltaconfirmed: 'String',
 *              deltadeceased: 'String',
 *              deltarecovered: 'String',
 *              state: 'String',
 *              stateHi: 'String',
 *              stateCode: 'String'
 *              stateNotes: HTML
 *          ],
 *          __proto__: {Object}
 *      }     
 *   }
 *  
 */
const getStateData = async() => {
    try {
        const resp = await axios.get('https://api.covid19india.org/data.json');
        let statewiseData = resp.data.statewise;
        if(statewiseData){
            let stateHi = '';
            statewiseData.forEach( (stateObj) => {
                for(var key in stateHindi) {
                    if(key === stateObj.statecode) {
                        stateHi = stateHindi[key];
                    }
                }
                stateObj.stateHi = stateHi;
            });
            const tableData = statewiseData;
            const covidDataObj = { 
                loading: false,
                tableData: tableData
            }
            return covidDataObj;
        }
        else {
            console.log("Covid19 India API is not working")
        }
    }
    catch(error) {
        console.error(error)
    }
}


/**
 * 
 * @name getCountryData
 * @description Get Top 10 COVID19 infected Country Data
 * @returns {
 *      [
 *          active: 'String',
 *          confirmed: 'String',
 *          deceased: 'String',
 *          recovered: 'String',
 *          deltaconfirmed: 'String',
 *          deltadeceased: 'String',
 *          deltarecovered: 'String',
 *          rank: 'String',
 *          state: 'String',
 *          stateHi: 'String'
 *      ]
 * }
 * 
 */
const getCountryData = async() => {
    try {
        const resp = await axios.get('https://docs.google.com/spreadsheets/d/1gw1m2JuspwZ7a8SEijkw-M-3g377GGzXdAYKehzCpHQ/export?format=csv&id=1gw1m2JuspwZ7a8SEijkw-M-3g377GGzXdAYKehzCpHQ&gid=1061676964');
        if(resp) {
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
        else {
            console.log("Google spreadsheet is not working");
        }
        
    }
    catch (error){
        console.error(error);        
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


const getQA = async() => {
    try {
        const resp = await axios.get('https://docs.google.com/spreadsheets/d/1gw1m2JuspwZ7a8SEijkw-M-3g377GGzXdAYKehzCpHQ/export?format=csv&id=1gw1m2JuspwZ7a8SEijkw-M-3g377GGzXdAYKehzCpHQ&gid=939913876');
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

export default {
    getAllData,
    getCountryData,
    getDistrictData,
    getStateData,
    getDistrictZones,
    getBiharDaily,
    getQA
}
