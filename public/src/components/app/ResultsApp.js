import Component from '../Component.js';
import Header from './Header.js';
import ResultsList from './ResultsList.js';
import { getTextResults, getDocumentResults } from '../../services/tone-check-api.js';

class ResultsApp extends Component {
    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const resultsList = new ResultsList({ 
            textResults: [],
            documentResults: [],
        });
        dom.appendChild(resultsList.renderDOM());

        getTextResults().then(textResults => {
            resultsList.update({ textResults });
        });
        getDocumentResults().then(documentResults => {
            resultsList.update({ documentResults });
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