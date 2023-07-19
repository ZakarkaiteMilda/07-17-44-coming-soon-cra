import logo from '../img/logo.png';
import './Hero.css';

import { Clock } from './Clock';

function Hero() {
    return (
        <section className="container bg-main">
        <div className="row-short">
            <img className="logo" src={logo} alt="Logo"/>
            <h1 className="main-title">Coming soon</h1>
            <p className="main-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos asperiores necessitatibus vitae harum accusantium voluptatibus odio! Sit praesentium consequuntur ipsam.</p>
            <Clock />
        </div>
    </section>
  );       
}

export { Hero };