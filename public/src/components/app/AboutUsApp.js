import Component from '../Component.js';
import Header from './Header.js';
import Footer from './Footer.js';
import AboutUs from './AboutUs.js';

class AboutUsApp extends Component {
    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const main = dom.querySelector('main');
        const aboutUs = new AboutUs();
        main.appendChild(aboutUs.renderDOM());

        const footer = new Footer();
        dom.appendChild(footer.renderDOM());
    }
    renderHTML() {
        return /*html*/`
            <div>
                <main class="about-us">
                </main>
            </div>
        `;
    }
}

export default AboutUsApp;