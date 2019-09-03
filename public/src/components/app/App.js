import Component from '../Component.js';
import Header from '../app/Header.js';
import TextInput from '../app/TextInput.js';

class NewComponent extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const textInput = new TextInput();
        dom.appendChild(textInput.renderDOM());
    }


    renderHTML() {
        return /*html*/`
            <div>
            </div>
        `;
    }
}

export default NewComponent;
