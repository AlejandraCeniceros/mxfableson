import React, { useState, useEffect } from "react";
import MixedChart from "../components/MixedChart.jsx";
import {Container,Row,Col} from "react-bootstrap";
import Tour from '../components/Tour';
import ComboBox from '../components/ComboBox'
import NetForestCoverService from '../services/NetForestCoverService';
//filter map
//nfch=NetForestCoverChange
const DrawNfch = () => {
  

{/**
  function NetForesOne(ChartCharacteristics, data) {
    this.data = data;
    this.type = ChartCharacteristics[0]["type"];
    this.label = ChartCharacteristics[0]["label"];
    this.borderColor = ChartCharacteristics[0]["borderColor"];
    this.backgroundColor = ChartCharacteristics[0]["backgroundColor"];

  }
  function NetForesTarget(ChartCharacteristics, data) {
    this.data = data;
    this.type = ChartCharacteristics[0]["type"];
    this.label = ChartCharacteristics[0]["label"];
    this.fill = ChartCharacteristics[0]["fill"];
    this.radius = ChartCharacteristics[0]["radius"];
    this.borderColor = ChartCharacteristics[0]["borderColor"];
    this.backgroundColor = ChartCharacteristics[0]["backgroundColor"];
    this.pointBorderColor = ChartCharacteristics[0]["pointBorderColor"];
    this.pointBackgroundColor = ChartCharacteristics[0]["pointBackgroundColor"];
    this.pointHoverBackgroundColor = ChartCharacteristics[0]["pointHoverBackgroundColor"];
    this.pointHoverBorderColor = ChartCharacteristics[0]["pointHoverBorderColor"];
    this.yAxisID = ChartCharacteristics[0]["yAxisID"];
   
  }
 */}



  const [state, setState] = useState({
    select: {
      GraficaType: 'group',
      scenathon_id: '6',
      Iteration: '4',
    }
  });

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

    
      const [json, setJson] = useState([{
        labels:[],
        datasets:[]
      }]);
      
    
      useEffect(() => {
        NetForestCoverService(state).then(setJson);
      
      }, [state]);
    
 


  const steps = [
    {
      target: ".graph",
      content: "Net Forest Change (loss and gain) describes the sum of all changes in forest area over a specific period of time.",
      title: "Net Forest Change 1",
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


  return <div style={{height: "100vh",width:"70vw"}}>
<div>
<Tour stepsP={steps}/>
<ComboBox onChange={handleChange}/>

</div>


<div style={{height: "100vh",width:"70vw"}} className="graph">
  
<MixedChart style={{height: "100vh",width:"70vw"}} data={json}
  title="Net Forest Cover Change"
  aspectRatio={false}
  labelposition="bottom"/>
   
  </div>
  </div>;
}

 

export default DrawNfch;



