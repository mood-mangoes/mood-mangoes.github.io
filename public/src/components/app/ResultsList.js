import Component from '../Component.js';
import ResultItem from './ResultItem.js';

class ResultsList extends Component {
    onRender(dom) {
        const results = this.props.results;

        results.forEach(result => {
            const props = { result }
            const resultItem = new ResultItem(props);
            dom.appendChild(resultItem.renderDOM());
        }
    }
    renderHTML() {
        return /*html*/`
            <ul>
            </ul>
        `;
    }
}

export default ResultsList;