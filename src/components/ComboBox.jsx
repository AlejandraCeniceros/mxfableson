import React from 'react';
import '../css/index.css';


var expanded = false;
function ComboBox(props) {
    const { onChange } = props;
    const groupcheckbox = React.createRef();
    const regionscheckbox = React.createRef();
    const countriescheckbox = React.createRef();
    const check = (nameComboBox) => {
        let checkbox=null;
        switch (nameComboBox){
          case "group":
            checkbox=groupcheckbox;

            if (groupcheckbox.current.checked) {
              regionscheckbox.current.checked = true;
              countriescheckbox.current.checked = true;
            }
            groupcheckbox.current.checked = true;
            checkbox=groupcheckbox;
          break;
          case "regions":
            checkbox=regionscheckbox;
            if (!regionscheckbox.current.checked && countriescheckbox.current.checked && groupcheckbox.current.checked) {
              groupcheckbox.current.checked = false;
              checkbox=countriescheckbox;
            } 
            else if (regionscheckbox.current.checked && countriescheckbox.current.checked) {
              groupcheckbox.current.checked = true;
              checkbox=groupcheckbox;
            } 
            else if (!countriescheckbox.current.checked && !regionscheckbox.current.checked && !groupcheckbox.current.checked) {
              checkbox=regionscheckbox;
              regionscheckbox.current.checked = true
            }
          break;
          case "countries":
            checkbox=countriescheckbox;
            if (!countriescheckbox.current.checked && regionscheckbox.current.checked && groupcheckbox.current.checked) {
              groupcheckbox.current.checked = false;
              checkbox=regionscheckbox;
            } 
            else if (regionscheckbox.current.checked && countriescheckbox.current.checked) {
              checkbox=groupcheckbox;
              groupcheckbox.current.checked = true;
            } 
            else if (!countriescheckbox.current.checked && !regionscheckbox.current.checked && !groupcheckbox.current.checked) {
              checkbox=countriescheckbox;
              countriescheckbox.current.checked = true
            }
          break;
          default:break;
    }

    onChange(checkbox.current);


  }


  const showCheckboxes = (nameComboBox) => {
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
      checkboxes.style.display = "block";
      expanded = true;
     
    } else {
      checkboxes.style.display = "none";
      expanded = false;
 
    }
  }
  return (

    <div class="contenedor-selects">
      <select class="selectBox" name="scenathon_id" onChange={onChange}>
        <option value="" disabled selected hidden>Scenario</option>
        <option value="6">Sustainable</option>
        <option value="5">Current trend</option>

      </select>
      <br></br>
      <select class="selectBox" name="Iteration" onChange={onChange}>
        <option value="" disabled selected hidden>Trade Adjustment</option>
        <option value="after">After Iteration</option>
        <option value="before">Before Iteration</option>
      </select>
      <br></br>

     
  <div id="checkBoxContainer" className="checkBoxContainer">
    <div  onClick={() => { showCheckboxes() }}>
      <select id="comboboxcheckboxes">
      <option value="" disabled selected hidden>Group</option>
      </select>
      <div class="overSelect"></div>
    </div>
    <div id="checkboxes">

    <label class="container">
          <input onClick={() => { check("group") }} ref={groupcheckbox} value="group" type="checkbox" name="GraficaType" />
          <p>Group</p>
          <span class="checkmark"></span>
        </label>

        <label class="container">
          <input onClick={() => { check("regions") }} ref={regionscheckbox} value="regions" type="checkbox" name="GraficaType" />
          <p>ALL ROW regions</p>
          <span class="checkmark"></span>
        </label>

        <label class="container">
          <input onClick={() => { check("countries") }} ref={countriescheckbox} value="countries" type="checkbox" name="GraficaType" />
          <p>ALL FABLE countries</p>
          <span class="checkmark"></span>
        </label>
    </div>
  </div>
    </div>

    )

}

export default ComboBox;