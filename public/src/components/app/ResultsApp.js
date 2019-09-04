import Component from '../Component.js';
import Header from './Header.js';
import ResultsList from './ResultsList.js';
import { getTextResults, getDocumentResults, getSentenceResults } from '../../services/tone-check-api.js';

class ResultsApp extends Component {
    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const resultsList = new ResultsList({ 
            textResults: [],
            documentResults: [],
            sentenceResults: []

        });
        dom.appendChild(resultsList.renderDOM());
        console.log(getTextResults());
        console.log(getDocumentResults());
        console.log(getSentenceResults());

        getTextResults().then(textResults => {
            resultsList.update({ textResults });
        });
        getDocumentResults().then(documentResults => {
            resultsList.props.documentResults = { documentResults };
        });
        getSentenceResults().then(sentenceResults => {
            resultsList.update({ sentenceResults });
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