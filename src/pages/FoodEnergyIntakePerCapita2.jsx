import React, { useState, useEffect } from "react";
import BarChart2 from "../componentes/BarChart2.jsx";
import ChartCharacteristics from '../data/ChartCharacteristics.json';
import ComboBoxFoodEnergy2 from "../componentes/ComboBoxFoodEnergy2.jsx";
const FoodEnergyIntakePerCapita = (props) => {

  function Food(ChartCharacteristics,data) {
    this.data=data;
    this.type=ChartCharacteristics[0]["type"];
    this.label=ChartCharacteristics[0]["label"];
    this.borderColor=ChartCharacteristics[0]["borderColor"];
    this.backgroundColor=ChartCharacteristics[0]["backgroundColor"];
    
  }

  const [state, setState] = useState({
    select: {
      Year: '2000',
      Iteration: '4',
    }
   
  });

  const [json, setJson] = useState([]);

  {/*
    const convertir=(props)=> {
 
 




        var dataUno=[]
        var dataDos=[]
        var labels=[]
          
         props.map((item) => {
          dataUno.push(item.Kcal_feasible);
          dataDos.push(item.Target_MDER);
         labels.push(item.c_country_t);
          
        });
       
        const data={
          labels:labels,
           datasets:[
             {
              label:"Target (MDER)",
              data:dataDos,
              fill:false,
              type:"scatter",
              backgroundColor:"Red",
              borderColor:"Red",
              hoverBackgroundColor:"Red",
              hoverBorderColor:"Red",
              yAxisID:"y-axis-1"
             },
             {
              label:"Kcal feasible",
              data:dataUno,
              fill:false,
              type:"bar",
              backgroundColor:"#81c784",
              borderColor:"#81c784",
              hoverBackgroundColor:"darkgreen",
              hoverBorderColor:"#81c784",
              yAxisID:"y-axis-1"
             }
           ]
        }
      
       return data
      } 
*/}
  var data = null;




  useEffect(() => {
  
    getFoodEnergyIntakePerCapita();
    
  }, [state]);






  const getFoodEnergyIntakePerCapita = async () => {
   

   
    try {
          
      const body =state;
    
      
     const response = await fetch("http://localhost:5000/foodenergy2"+JSON.stringify(body));
     const  jsonAux =  await response.json();
  
    setJson(jsonAux);
   

    } catch (error) {
      console.error(error)
    }



  }


  const handleChange = e => {


setState({
  select: {
    ...state.select,
    [e.target.name]: e.target.value
    }

 
});

  }

  const converter = () => {
  

    var labels=[];
    var Protein_feasible=[];
    var Fat_feasible=[];
    var dataSet=[]


    if (json != null ) {
   
      json.map((item) => {
          labels.push(item.Country);
          Protein_feasible.push(item.Protein_feasible);
          Fat_feasible.push(item.Fat_feasible);
        
      });

      var food = new Food(ChartCharacteristics["Protein_feasible"],Protein_feasible);
      dataSet.push(food);
      food = new Food(ChartCharacteristics["Fat_feasible"],Fat_feasible);
      dataSet.push(food);

      var dataAux = {
        labels:labels,
        datasets:dataSet
    };
    data=dataAux;


    }
  
  }
  //let dataAux;

  //const { GraficaType, Iteration, Scenario, Year } = props.combinacion.select;
  {/*
  
  
  
    switch(GraficaType){
      case 'group':
        switch(Iteration){
          case 'iteration_3':
            dataAux= convertir(Scenario === "Sustainaible" ? data.targetCinco_combinacionDos : data.targetCinco_combinacionCuatro);
            break;
          case 'iteration_4':
            dataAux= convertir(Year === "2030" ? data.targetCinco_combinacionUno : data.targetCinco_combinacionTres);
            break
        }
        break;
      case 'regions':
        switch(Iteration){
          case 'iteration_3':
            dataAux= convertir(Scenario === "Sustainaible" ? data.targetCinco_combinacionSeis : data.targetCinco_combinacionOcho);
            break;
          case 'iteration_4':
            dataAux= convertir(Scenario === "Sustainaible" ? data.targetCinco_combinacionCinco : data.targetCinco_combinacionSiete);
            break
        }
        break;
      case 'countries':
        switch(Iteration){
        case 'iteration_3':
          dataAux= convertir(Scenario === "Sustainaible" ? data.targetCinco_combinacionDies : data.targetCinco_combinacionDoce);
          break;
        case 'iteration_4':
          dataAux= convertir(Scenario === "Sustainaible" ? data.targetCinco_combinacionNueve : data.targetCinco_combinacionOnce);
  
          break
      }
      break;
    }
    */}
  return (

    <div>
      
      <div>
        <ComboBoxFoodEnergy2 onChange={handleChange} />
        {converter()}
      </div>

      
    <div style={{height:'75vh'}}>
      <BarChart2 data={data}
    aspectRatio={false}
    labelposition="top"
    labelwidth={50}
    labelSize={24}
    TitleSize={45}
    title="Food energy intake per capita"/>
    </div>
  
    </div>
  )


}
export default FoodEnergyIntakePerCapita;

