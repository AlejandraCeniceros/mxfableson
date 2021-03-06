import React from 'react';
import { Form } from 'react-bootstrap';
import '../css/index.css';

function ComboBox(props) {
	const { onChange } = props;
	return (
		<div className="contenedor-selects">
			<br/>
			<select className="selectBox" name="scenathon_id" onChange={onChange}>
				<option value="" disabled selected hidden>Scenario</option>
				<option value="6">Sustainable</option>
				<option value="5">Current trend</option>
			</select>
			<br/>
			<select className="selectBox" name="Iteration" onChange={onChange}>
				<option value="" disabled selected hidden>Trade Adjustment</option>
				<option value="after">After Iteration</option>
				<option value="before">Before Iteration</option>
			</select>
			<br/>
			<Form>
				<select className="selectBox" name="Year" onChange={onChange} >
					<option value="" disabled selected hidden>Year</option>
					<option value="2000">2000</option>
					<option value="2005">2005</option>
					<option value="2010">2010</option>
					<option value="2015">2015</option>
					<option value="2020">2020</option>
					<option value="2025">2025</option>
					<option value="2030">2030</option>
					<option value="2035">2035</option>
					<option value="2040">2040</option>
					<option value="2045">2045</option>
					<option value="2050">2050</option>
				</select>
			</Form>
			<br/>
		</div>
	)
}
export default ComboBox;