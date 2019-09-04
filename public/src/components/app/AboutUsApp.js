import Component from '../Component.js';
import Header from './Header.js';
import Footer from './Footer.js';

class AboutUsApp extends Component {
    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const footer = new Footer();
        dom.appendChild(footer.renderDOM());
    }
    renderHTML() {
        return /*html*/`
            <div></div>
        `;
    }
}

export default AboutUsApp;