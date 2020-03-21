import React from 'react';
import {Link} from 'react-router-dom'
import SideNav, {  NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import Footer from './footer'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


class SideNavPage extends React.Component {
    render() {
        return (
<SideNav style={{backgroundColor:"#191919",position:"fixed"}}
    onSelect={(selected) => {
    }}>
    
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        
        
                <NavItem eventKey="home">
                    <NavIcon>
                    <Link style={{textDecoration:"none"}} to="/">
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </Link>    
                    </NavIcon>
                    <NavText>
                       <Link style={{textDecoration:"none"}} to="/"> Home</Link>
                    </NavText>
                </NavItem>
        
        <NavItem eventKey="category">
            <NavIcon>
                <Link style={{textDecoration:"none"}} to="/category"><i className="fa fa-sitemap" aria-hidden="true" style={{ fontSize: '1.75em' }}></i></Link>
            </NavIcon>
    
            <NavText>
                <Link style={{textDecoration:"none"}} to="/category"> Category</Link>
            </NavText>


            <NavItem  eventKey="category/stationary">
                <NavText style={{}}><Link style={{textDecoration:"none"}} to="/category/stationary">Stationary</Link></NavText>
            </NavItem>
 
 
            <NavItem eventKey="category/electronics">
                <NavText><Link style={{textDecoration:"none"}} to="/category/electronics">Electronics</Link></NavText>
            </NavItem>

            <NavItem eventKey="category/home">
                <NavText>
                     <Link style={{textDecoration:"none"}} to="/category/home">Home & Furniture</Link> 
                </NavText>
            </NavItem>


            <NavItem eventKey="category/sports">
                <NavText>
                     <Link style={{textDecoration:"none"}} to="/category/sports">Sports</Link> 
                </NavText>
            </NavItem>
        
        </NavItem>



        <NavItem eventKey="cart">
                    <NavIcon>
                    <Link style={{textDecoration:"none"}} to="/cart">
                        <i className="fa fa-cart-plus" style={{ fontSize: '1.75em' }} aria-hidden="true"></i>
                    </Link>    
                    </NavIcon>
                    <NavText>
                       <Link style={{textDecoration:"none"}} to="/cart">Cart</Link>
                    </NavText>
        </NavItem>



        <NavItem eventKey="history">
                    <NavIcon>
                    <Link style={{textDecoration:"none"}} to="/history">
                        <i className="fa fa-history" style={{ fontSize: '1.75em' }} aria-hidden="true"></i>
                    </Link>    
                    </NavIcon>
                    <NavText>
                       <Link style={{textDecoration:"none"}} to="/history">Order History</Link>
                    </NavText>
        </NavItem>



        <NavItem style={{position:"absolute",top:"28em"}} eventKey="footer">
            
            <NavIcon>
                {/* <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
            </NavIcon>
            <NavText >
                <Footer/>
            </NavText>

        </NavItem>




    </SideNav.Nav>
</SideNav>

            );
    }
}

export default SideNavPage


