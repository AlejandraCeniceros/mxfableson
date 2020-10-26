import React, { Component } from 'react';
import './css/App.css';
import Navbar from "./componentes/Navbar";
import Header from "./componentes/Header";
import About1 from "./componentes/About1";
import About2 from "./componentes/About2";
import Tour from "./componentes/Tour";
import Touraux from "./componentes/Touraux";
import About from './pages/About';
import { Jumbotron } from './componentes/Jumbotron'
import { Jumbotron_2}  from './componentes/Jumbotron_2'
import { Jumbotron_3 } from './componentes/Jumbotron_3'
import { Jumbotron_fin } from './componentes/Jumbotron_fin'
import { Last } from 'react-bootstrap/esm/PageItem';
import ReactHintFactory from 'react-hint'
import 'react-hint/css/index.css';
import Scenathon from './pages/Scenathon';
import Aside from './componentes/Aside';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Joyride, { ACTIONS, EVENTS, STATUS } from 'react-joyride';
import { Evented } from 'leaflet';


const ReactHint = ReactHintFactory(React)

export class App extends React.Component {
  
  constructor(){
    super();
   // this.handleScroll = this.handleScroll.bind(this);
  this.state={
    hidden: false,
    run: false,
      steps: [
        {
          target:'.About',
          content: 'Esto es el Joyride'
        },
        {
          target:'.Nav',
          content: 'Esto es el Joyride parte 2'
        }
      ],
      stepIndex: 0,
    }
  };


  handleJoyrideCallback = data => {
    const { action, index, status, type } = data;

    if ([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND].includes(type)) {
      // Update state to advance the tour
      this.setState({ stepIndex: index + (action === ACTIONS.PREV ? -1 : 1) });
    }
    else if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      // Need to set our running state to false, so we can restart if we click start again.
      this.setState({ run: false });
    }

    console.groupCollapsed(type);
    console.log(data); //eslint-disable-line no-console
    console.groupEnd();
  };
  
  /*
componentDidMount(){
  const script = Navbar.document.createElement("script");

    script.src = "NavbarAnimation.js";
    script.async = true;

    Navbar.document.body.appendChild(script);
}
 
  componentWillMount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    let lastScrollTop = 0;
    const currentScrollTop = Navbar.scrollTop;
    if (!this.state.hidden && currentScrollTop > lastScrollTop) {
      this.setState({ hidden: true });
    } else if(this.state.hidden) {
      this.setState({ hidden: false });
    }
    lastScrollTop = currentScrollTop;
  }
  */
  
  render(){
    const { run, stepIndex, steps } = this.state;
    return (
        <React.Fragment>
        {/*<div>
          <Tour/>
        </div>*/}

        <div className="Nav">
          <Navbar/>
        </div>

          <div className="imagen">
            <Jumbotron />
          </div>

          <div>
          <About1/>
        </div>
        <div id="Jumbotron_2" data-rh="" data-rh-at="top">
          <Jumbotron_2 />
        </div>

          <div>
          <Header/>
        </div>
        <div style={{display: 'flex'}}>
          <div>
            <Aside />
          </div>
          <div>
          <Scenathon/>
          </div>
        </div>

        

        <div>
          <About2/>
        </div>
<div>
          <Jumbotron_3/>
        </div>
         {/* <Router>
          <Link to="/Scenathon">
          </Link>  
          <Switch>
            <Route exact path="/Scenathon" component={Scenathon}>
            </Route>
          </Switch>
         </Router> */}
         

        {/*<div data-rh="Este es el apartado About" data-rh-at="top" id="About">
          <About/>
        </div>*/}
        
        <div className="app">

			<ReactHint autoPosition events delay={{show: 100, hide: 1000}} />
			<ReactHint persist
				attribute="data-custom"
				className="custom-hint"
				events={{click: true}}
				onRenderContent={this.onRenderContent}
				ref={(ref) => this.instance = ref}/>
		</div>

        <div>
      </div>
        
 {/*
        
        <div data-rh="Este es el apartado About" data-rh-at="top" className="About">
                <About/>
              </div>
       <div id="Jumbotron_3" data-rh="Scenathon" data-rh-at="top" id="Scenathon">
          <Jumbotron_3 data-rh="Mensaje" data-rh-at="top"/>
      </div>*/}
        
        {/*<div id="Jumbotron_fin" data-rh="Derechos de Autor" data-rh-at="top" id="final">
          <Jumbotron_fin/>
        </div>


      
        
        */
        
        }
        
        
       
        
        

        
         
    </React.Fragment>
  )
}};
export default App;

