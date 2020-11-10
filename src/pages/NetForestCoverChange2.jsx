import React, { useState, useEffect } from "react";
import BarChart from "../components/BarChart";

import "../../node_modules/react-grid-layout/css/styles.css";
import "../../node_modules/react-resizable/css/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import ComboBox3 from '../components/ComboBox3';

import CountryCharacteristics from '../data/CountryCharacteristics.json';
import { css } from "styled-components";

import TradeReportMap from './TradeReportMap'
import NetForesTwoService from '../services/NetForesTwoService';



//nfch=NetForestCoverChange
const DrawNfch2 = () => {




  const [state, setState] = useState({
    select: {
      GraficaType: 'regions',
      scenathon_id: '6',
      Iteration: '4',
    }

  });

  const [json, setJson] = useState({
    labels:[],
    datasets:[]
  });


  useEffect(() => {
   
    NetForesTwoService(state).then(setJson);
     
     
      }, [state]);
    



      const handleChange = e => {

        var graficaType = state.select.GraficaType;
        var scenathon = state.select.scenathon_id;
        var iteration = state.select.Iteration;
        
    if(e.name === "GraficaType")
    {
      graficaType=e.value 
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
            GraficaType: graficaType,
            scenathon_id: scenathon,
            Iteration: iteration,
    
          }
    
    
        });
    
        console.log(state)
      }



  return (


    <Container fluid >
      <div >
        <ComboBox3 onChange={handleChange} />
      
      </div>
      <Row>

        <Col >


          <div style={{ textAlign: 'center', height: "100vh", width: "35vw" }}>
            <BarChart data={json}
              title="Net Forest Cover Change 2"
              labelposition="bottom"
              display={true}
              labelString='ha per year'
              fontSize='25'
              aspectRatio={false} />

          </div>


        </Col>
        <Col>
          <br /><br />
          <div style={{ borderStyle: 'solid', textAlign: 'center', height: "70vh", width: "30vw" }}>
            <TradeReportMap countriesData={json} />

          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default DrawNfch2;
