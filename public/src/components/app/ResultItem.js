import Component from '../Component.js';

class ResultItem extends Component {
    renderHTML() {
        const result = this.props.result;
        return /*html*/`
        <li>
            <p>text body</p>
            <p>document results</p>
            <p>sentence results</p>
        </li>
        `;
    }
}

export default ResultItem;