import React, { useState, useEffect } from "react";
import BarChart from "../components/BarChart";
import { Container, Row, Col } from "react-bootstrap";
import ComboBoxTradeReportersImporters from "../components/ComboBoxTradeReporters";

import TradeReportMap from './TradeReportMap'
import SustainableImporterService from '../services/SustainableImporterService';


const SustainableExporter = () => {


  const [state, setState] = useState({
    select: {
      Product: 'abaca',
      iteration: "4",
      column: "Import_quantity",
      scenathon_id: "6"
    }
  });


  const [json, setJson] = useState({
    labels: [],
    datasets: []
  });



  const handleChange = e => {
    var iteration = e.target.name === "iteration" ? e.target.value === "after" ? '4' : '3' : state.select.iteration;


    setState({
      select: {

        ...state.select,

        [e.target.name]: e.target.value,
        iteration: iteration
      }

    })

  }

  useEffect(() => {
   
    SustainableImporterService(state).then(setJson);
  }, [state]);



 
  return (
    <Container fluid >
      <div >
        <ComboBoxTradeReportersImporters metodo={handleChange} />
       
      </div>
      <Row  >
        <Col>

          <div style={{ height: "100vh", width: "35vw" }}>

            <BarChart data={json} title="Sustainable net importers"
              labelString='Import quantity'
              aspectRatio={false}
              labelposition="bottom" />
          </div>

        </Col>
        <Col>
          <br /><br />
          <div style={{textAlign: 'center', height: "70vh", width: "30vw" }}>
            <TradeReportMap countriesData={json} />


          </div>
        </Col>
      </Row>

    </Container>
  );

}
export default SustainableExporter;