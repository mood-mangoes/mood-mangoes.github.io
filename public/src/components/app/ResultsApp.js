import Component from '../Component.js';
import Header from './Header.js';
import ResultsList from './ResultsList.js';
import { getResults } from '../../services/tone-check-api.js';

class ResultsApp extends Component {
    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const resultsList = new ResultsList({ result: [] });
        dom.appendChild(resultsList.renderDOM());

        getResults().then(result => {
            resultsList.update({ result });
        });

    } 
    renderHTML() {
        return /*html*/`
            <div>
            </div>
        `;
    }
}

export default ResultsApp;