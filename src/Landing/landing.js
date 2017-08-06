/**
 * Created by Arun on 06/08/2017.
 */
import React from 'react';
import Particle from '';
import ParticleConfig from '../particlesjs-config.json';
import './landing.css';
import Navbar from './Navbar/Navbar'

class Landing extends React.Component {
    render() {

        let particleStyle = {
            width: '100vw',
            height: '100vh',
            position: 'fixed'
        };
        return (
            <div className="landing">
                <Particle style={particleStyle} params={ParticleConfig}/>
                <Navbar navbarBrand="Arun Pattni"/>
            </div>
        );
    }
}

export default Landing;