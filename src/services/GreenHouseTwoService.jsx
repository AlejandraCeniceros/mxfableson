import CountryCharacteristics from '../data/CountryCharacteristics.json';

const responseApi = response => {


    function GreenHouseTwo(nameCountry, data) {


        let characteristic = CountryCharacteristics[nameCountry];

        if (characteristic !== undefined) {
            this.data = data;
            this.type = characteristic[0]["type"];
            this.label = characteristic[0]["label"];
            this.borderColor = characteristic[0]["borderColor"];
            this.backgroundColor = characteristic[0]["backgroundColor"];
        }



    }


   

        var AgriCO2e = [];
        var LandCO2e = [];
        var datasetsChart1 = [];
        var datasetsChart2 = [];
        var labels = [];
        var countChartOne = 0;
        var countChartTwo = 0;

        var nameCounty = ""

        if (response.length !==0) 
        {
        nameCounty = response[0].name;

        response.forEach(item => {
            if (!labels.includes(item.Year)) {
                labels.push(item.Year);
            }

            if (nameCounty !== item.Country) {

                if (countChartOne !== AgriCO2e.length) {
                    var greenHouseOne = new GreenHouseTwo(nameCounty, AgriCO2e);
                    datasetsChart1.push(greenHouseOne);
                }
                if (countChartTwo !== LandCO2e.length) {
                    var greenHouseTwo = new GreenHouseTwo(nameCounty, LandCO2e);
                    datasetsChart2.push(greenHouseTwo);
                }

                countChartOne = 0;
                countChartTwo = 0;
                nameCounty = item.Country;
                LandCO2e = [];
                AgriCO2e = [];

            }

            AgriCO2e.push(item.AgriCO2e);
            LandCO2e.push(item.LandCO2e);
            countChartOne = item.AgriCO2e === "0.00" ? countChartOne + 1 : countChartOne;
            countChartTwo = item.LandCO2e === "0.00" ? countChartTwo + 1 : countChartTwo;
        });



        var dataChartOne = {
            labels: labels,
            datasets: datasetsChart1
        };


        var dataCharTwo = {
            labels: labels,
            datasets: datasetsChart2
        };

        var dataCharts = {
            chartOne: dataChartOne,
            charTwo: dataCharTwo

        };

    }


    return dataCharts
}


export default function getGreenHouseTwo(props) {

    try {


        return fetch(`https://fable2020.herokuapp.com/gas2${JSON.stringify(props)}`)
            .then(res => res.json()).then(responseApi);




    } catch (error) {
        console.error(error)
    }
}
