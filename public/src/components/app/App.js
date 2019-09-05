import Component from '../Component.js';
import Header from '../app/Header.js';
import TextInput from '../app/TextInput.js';
import Footer from './Footer.js';

class NewComponent extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const textInput = new TextInput();
        dom.appendChild(textInput.renderDOM());

        const footer = new Footer();
        dom.appendChild(footer.renderDOM());
    }

    renderHTML() {
        return /*html*/`
            <div>
            </div>
        `;
    }
}

export default NewComponent;
