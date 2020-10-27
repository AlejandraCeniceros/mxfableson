import React from 'react';
import styled from 'styled-components';

const Styles= styled.div`

.about-container{
overflow:hidden;
background-color:transparent;
padding: 10px 10%;
align-items:center;
margin:0;

justify-content:space-between;
margin-bottom:30px;
width:100%;
margin-top:20px;

.about-title{
    text-align:left;
    color:#306973;
    font-size:35px;
    font-weight: bold;
    margin-bottom:30px;
}

.about-content{
    color:#4E4E4E;
    text-align:justify;
    font-size:20px;
}
}

`;

const About2=()=>{
return(
<Styles>
<div className="about-container">
<div className="about-title">Scenathons: Ineractive Scenerario and <br/>Development Pathway Planning</div>
<div className="about-content">Scenathons were conceived at IIASA as participatory decision-making exercises that integrate models, stakeholders, and technology to collectively solve complex, large-scale multi-objective problems.<br/>
<br/>
The Food, Agriculture, Biodiversity, Land, and Energy (FABLE) Consortium has applied the Scenathon concept to answer questions concerned with sustainability transformations of food and land use systems. Within this setting, the Scenathon process allows country teams to progressively align national pathways with the global FABLE targets and to balance trade flows.
</div>

</div>


</Styles>


)
};
export default About2;