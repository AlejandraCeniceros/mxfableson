import React, { useState, useEffect } from "react";
import BarChart from "../components/BarChart";
import Tour from "../components/Tour";
import ComboBox from '../components/ComboBox';
import ChartCharacteristics from '../data/ChartCharacteristics.json';


const DrawFreshWaterUse= () => {




  function FreshWaterUse(ChartCharacteristics,data) {
    this.data=data;
    this.type=ChartCharacteristics[0]["type"];
    this.label=ChartCharacteristics[0]["label"];
    this.borderColor=ChartCharacteristics[0]["borderColor"];
    this.backgroundColor=ChartCharacteristics[0]["backgroundColor"];
    
  }
  const [json, setJson] = useState([]);
  var data = null;
  
  const [state, setState] = useState({
    select: {
      GraficaType:'group',
      scenathon_id:'6',
      Iteration:'4',
    }
   
  });

  useEffect(() => {
   getFreshWater();
  }, [state]);


  const getFreshWater = async () => 
   {
    
     try {   
       const body =state;
      const response = await fetch("https://server-fableson.wl.r.appspot.com/freshwater1"+JSON.stringify(body));
      const  jsonAux =  await response.json();
     setJson(jsonAux);
     } catch (error) {
       console.error(error)
     }
   }

   
   const handleChange = e => {
  
    var group = state.select.GraficaType;
    var scenathon = state.select.scenathon_id;
    var iteration = state.select.Iteration;
    
    if(e.target.name==="scenathon_id"){
      switch (e.target.value) {
        case '6':
          iteration=state.select.Iteration==="1"? "3":"4";
          scenathon="6";
            break;
        case '5':
         scenathon="5";
         iteration=state.select.Iteration==="3"? "1":"2";
            break;     
    }
    }else{
     
      group= e.target.name==="GraficaType"? e.target.value: state.select.GraficaType;
      iteration=e.target.name==="Iteration"?scenathon==="6" ? e.target.value==="after"? "4":"3" : e.target.value==="after"? "2":"1":state.select.Iteration;
    }
    
    setState({
      select: {
        GraficaType: group,
        scenathon_id:scenathon,
        Iteration:iteration,
    
        }
    
     
    });
    
      }


      const converter = () => {
  

        var labels=[];
        var sum=[];
    
       
        var dataSet=[]
    
    
        if (json != null ) {
       
          json.map((item) => {
              labels.push(item.Year);
              sum.push(item.sum);
            
          });
    
          var freshWaterUse = new FreshWaterUse(ChartCharacteristics["million_cubic_metres"],sum);
          dataSet.push(freshWaterUse);
         
          var dataAux = {
            labels:labels,
            datasets:dataSet
        };
        data=dataAux;
    
    
        }
      
      }
    

  const steps = [
    {
      target: ".graph",
      content: "Fresh water use for irrigation and livestock. The high demand of water continues to be expected the following decades, not showing much variation through the years.",
      title: "Fresh Water Use 1",
        styles: {
          //this styles override the styles in the props  
          options: {
            textColor: "black"
          }
        },
        locale: { 
          next: <span>End</span>,
        },
        placement: "top"
    }
  ]
    


  return (

<div>
  <Tour stepsP={steps}/>
  <div>
    <ComboBox onChange={handleChange}/>
    {converter()}
  </div>
   
  <div className="graph" style={{height: "100vh",width:"70vw"}}>
    <BarChart data={data}
    aspectRatio={false}
    labelposition="top"
    title="Fresh Water use"/>
  </div>
</div>
  );
}
export default DrawFreshWaterUse;
