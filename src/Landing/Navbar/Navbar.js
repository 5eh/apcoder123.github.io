/**
 * Created by Arun on 06/08/2017.
 */
import React from 'react';
import './Navbar.css';

class NavbarItem extends React.Component{
    render(){
        return(
            <li className="page-scroll">
            <a data-scroll href={this.props.itemHref}>[this.props.name}</a>
        </li>
        );
    }
}


class Navbar extends React.Component {
    render(){

        return(
            <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">
                <div className="container">
                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                        </button>
                        <a className="navbar-brand">{this.props.navbarBrand}</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="hidden">
                                <a data-scroll href="#page-top"></a>
                            </li>

                            <NavbarItem itemHref="#about" name="About"/>
                            <NavbarItem itemHref="#skillsSection" name="Skills"/>
                            <NavbarItem itemHref="#portfolio" name="Portfolio"/>
                            <NavbarItem itemHref="#contact" name="Contact"/>
                            <NavbarItem itemHref="https://blog.arunpattni.com" name="Blog"/>

                        </ul>
                    </div>

                </div>

            </nav>



        );

    }

}

export default Navbar;