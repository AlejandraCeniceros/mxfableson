import CountryCharacteristics from '../data/CountryCharacteristics.json';


const responseApi = response =>{



    function Pais(nameCountry, data) {

        let characteristic = CountryCharacteristics[nameCountry];

        if (characteristic !== undefined) {
            this.data = data;
            this.type = characteristic[0]["type"];
            this.label = characteristic[0]["label"];
            this.borderColor = characteristic[0]["borderColor"];
            this.backgroundColor = characteristic[0]["backgroundColor"];
        }

      }  



      


    var dataImport_quantity = [];
    var count = 0;
    var paises = [];
    var labels = [];
    var nameCounty = "";

    if (response.length !== 0) {
      nameCounty = response[0].name;
      response.forEach(item => {
        if (!labels.includes(item.Year)) {
          labels.push(item.Year);
        }

        if (nameCounty !== item.name) {
          if (count !== dataImport_quantity.length) {
            var pais = new Pais(nameCounty, dataImport_quantity);
            paises.push(pais);

          }
          count = 0;
          nameCounty = item.name;
          dataImport_quantity = [];

        }
        dataImport_quantity.push(item.Import_quantity);
        count = item.Import_quantity === "0.00" ? count + 1 : count;
      });


    }
    var data = {
      labels: labels,
      datasets: paises
    };
   
  
return data;
}


export default function getSustainableImporter(props)  {
 
    try {
       
  return fetch (`https://fable2020.herokuapp.com/net${JSON.stringify(props)}`)
              .then(res=>res.json()).then(responseApi);

      } catch (error) {
        console.error(error)
      }
}