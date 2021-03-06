
import ChartCharacteristics from '../data/ChartCharacteristics.json';

const responseApi = response =>{


    
  function FreshWaterUse(ChartCharacteristics, data) {
    this.data = data;
    this.type = ChartCharacteristics[0]["type"];
    this.label = ChartCharacteristics[0]["label"];
    this.borderColor = ChartCharacteristics[0]["borderColor"];
    this.backgroundColor = ChartCharacteristics[0]["backgroundColor"];
  }




    var labels = [];
    var blueWater = [];
    var dataSet = []


    if (response !== null) {
        response.forEach(item => {
        labels.push(item.Year);
        blueWater.push(item.BlueWater);

      });

      var freshWaterUse = new FreshWaterUse(ChartCharacteristics["cubic_metres"], blueWater);
      dataSet.push(freshWaterUse);

      var data = {
        labels: labels,
        datasets: dataSet
      };
     


    }

  return data;


}


export default function getFreshWater(props)  
{

    try {
    
        return    fetch (`https://fable2020.herokuapp.com/freshwater1${JSON.stringify(props)}`)
   
        .then(res=>res.json()).then(responseApi);
  
  
      } catch (error) {
        console.error(error)
      }
}