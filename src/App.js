import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import SideNavPage from './components/Navbar';
import Home from './components/Home';
import Category from './components/Category';
import Cart from './components/Cart';
import Search from './components/Search';

import Renderer from './components/Renderer';

import Pnf from './components/404';
import {Container,Row,Col}  from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>

        <div className="App">
              <Row>
                    <Col style={{height:"100vh"}} xs={2}><SideNavPage/></Col>
                    <Col xs={9}>
                        <Container>
                              <Switch>
                                    <Route exact path="/" component={Home}/>
                                    
                                    <Route exact path="/category" component={Category}/>
                                    
                                    <Route exact path="/cart" component={Cart}/>

                                    <Route exact path="/category/:id"
                                    render={({match}) => (<Renderer id={match.params.id}/>)}
                                    />

<Route exact path="/search" component={Search}/>
                                    
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
