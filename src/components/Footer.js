import './Footer.css';
import logoWhite from '../img/logo-white.png';

function Footer() {
    return ( 
        <footer className="container bg-main">
        <div className="row socials">
            <a className="fa fa-facebook" href="/">Facebook</a>
            <a className="fa fa-twitter" href="/">Twitter</a>
            <a className="fa fa-dribbble" href="/">Dribbble</a>
            <a className="fa fa-tumblr" href="/">Tumblr</a>
            <a className="fa fa-linkedin" href="/">Linkedin</a>
            <a className="fa fa-instagram" href="/">Instagram</a>
            <a className="fa fa-rss" href="/">Rss</a>
        </div>
        <div className="row-short">
            <img className="footer-logo" src={logoWhite} alt="Logo" />
            <div className="text-trio">
                <p>Copyright &copy; 2023 <a href="/">Matrox</a></p>
                <p>All rights reserver</p>
                <p>Designed by <a href="/" target="_blank">TrendyTheme</a></p>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vel facere dolor accusantium vero modi <a href="/">Matrox</a> nihil nisi aperiam. Doloremque nihil nisi ducimus sunt ratione temporibus possimus, minima <a href="/">Matrox</a> laudantium.</p>
        </div>
    </footer>
      );
}

export { Footer };