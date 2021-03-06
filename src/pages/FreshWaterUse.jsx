import React, { useState, useEffect } from "react";
import BarChart from "../components/BarChart";
import ComboBox from '../components/ComboBox';
import Tour from "../components/Tour";
import FreshWaterService from '../services/FreshWaterService';

const DrawFreshWaterUse = () => {


  const [state, setState] = useState({
    select: {
      GraficaType: 'group',
      scenathon_id: '6',
      Iteration: '4',
    }

  });

  const [json, setJson] = useState([{
    labels:[],
    datasets:[]
  }]);

  useEffect(() => {
    FreshWaterService(state).then(setJson);
  }, [state]);


  const handleChange = e => {

    var group = state.select.GraficaType;
    var scenathon = state.select.scenathon_id;
    var iteration = state.select.Iteration;
  if(e.name === "GraficaType")
  {
  group=e.value 
  }else if (e.target.name === "scenathon_id") {
      switch (e.target.value) {
        case '6':
          iteration = state.select.Iteration === "1" ? "3" : "4";
          scenathon = "6";
          break;
        case '5':
          scenathon = "5";
          iteration = state.select.Iteration === "3" ? "1" : "2";
          break;
        default: iteration = state.select.Iteration === "1" ? "3" : "4";
      }
    } else {
  
    
      iteration =scenathon === "6" ? e.target.value === "after" ? "4" : "3" : e.target.value === "after" ? "2" : "1" ;
    }
  
    setState({
      select: {
        GraficaType: group,
        scenathon_id: scenathon,
        Iteration: iteration,
  
      }
  
  
    });
  
   
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
        <ComboBox onChange={handleChange} />
     
      </div>

      <div className="chart-full">

        <BarChart data={json}
          aspectRatio={false}
          labelposition="bottom"
          labelwidth={50}
          labelSize={24}
          labelString='Blue water in million cubic metres'
          fontSize='24'
          title="Fresh Water use" />

      </div>
    </div>
  );
}
export default DrawFreshWaterUse;
