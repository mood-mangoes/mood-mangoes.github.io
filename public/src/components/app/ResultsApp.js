import Component from '../Component.js';
import Header from './Header.js';
import ResultsList from './ResultsList.js';
import { getTextResults, getDocumentResults, getSentenceResults } from '../../services/tone-check-api.js';

class ResultsApp extends Component {
    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const resultsList = new ResultsList({ results: [] });
        dom.appendChild(resultsList.renderDOM());
        console.log(getTextResults());
        console.log(getDocumentResults());
        console.log(getSentenceResults());

        getResults().then(results => {
            resultsList.update({ results });
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