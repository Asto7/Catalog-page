import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import SideNavPage from './components/Navbar';
import Home from './components/Home';
import Pnf from './components/404';
import {Container,Row,Col}  from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>

        <div className="App">
              <Row>
                    <Col style={{height:"100vh"}} xs={3}><SideNavPage/></Col>


                    <Col xs={9}>
                        <Container>
                              <Switch>
                                    <Route exact path="/" component={Home}/>
                                    <Route path="/404" component={Pnf}/>
                                    <Redirect to="/404" />
                              </Switch>
                        </Container>                    
                    </Col>




              </Row>
          </div>
    </BrowserRouter>
  );
}

export default App;
