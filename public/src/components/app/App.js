import Component from '../Component.js';
import Header from '../app/Header.js';

class NewComponent extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());
    }


    renderHTML() {
        return /*html*/`
            <div>
            </div>
        `;
    }
}

export default NewComponent;
