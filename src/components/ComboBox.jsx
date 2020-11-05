import React from 'react';
import { Form } from 'react-bootstrap';

import '../css/ComboBox.css';

function ComboBox (props) {

    
        const{onChange}=props
        return (
            
            <div class="contenedor-selects">
                <br></br>
                <select class="selectBox" name="scenathon_id" onChange={onChange}>
                <option value="" disabled selected hidden>Scenario</option>
                    <option class="selectOption" value="6">Sustainaible</option>
                    <option class="selectOption" value="5">Current trend</option>
                    
                </select>
                <br></br>
                <select class="selectBox"  name="Iteration" onChange={onChange}>
                <option value="" disabled selected hidden>Trade Adjustment</option>
                    <option class="selectOption" value="after">After Iteration</option>
                    <option class="selectOption" value="before">Before Iteration</option>
                </select>
                <br></br>
                <Form>
                  <select class="selectBox" name="GraficaType" onChange={onChange}>
                  <option value="" disabled selected hidden>here</option>
                  <option class="selectOption" value="group">Group</option>
                    <option class="selectOption" value="regions">ALL ROW regions</option>
                    <option class="selectOption" value="countries">ALL FABLE countries</option>
                  </select>
                </Form>

                 {/*<select  name="GraficaType" onChange={onChange}>
                    <option value="group">Group</option>
                    <option value="regions">ALL ROW regions</option>
                    <option value="countries">ALL FABLE countries</option>
                </select>*/}
                <br></br>
            </div>
    


        )
    
}
export default ComboBox;

