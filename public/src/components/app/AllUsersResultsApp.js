import Component from '../Component.js';
import Header from './Header.js';
import ResultsList from './ResultsList.js';
import { getAllTextResults, getDocumentResults, getSentenceResults } from '../../services/tone-check-api.js';
import Footer from './Footer.js';

class AllUsersResultsApp extends Component {
    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const resultsList = new ResultsList({ 
            textResults: [],
            documentResults: [],
            sentenceResults: []
        });
        dom.appendChild(resultsList.renderDOM());

        // Your server probably needs to work harder to
        // have routes that give the data the front end
        // is looking for, versus 3 requests.

        // As-is, these can be done in parallel:
        Promise.all([
            getAllTextResults(),
            getDocumentResults(),
            getSentenceResults()
        ])
            .then(results => {
                resultsList.update({ 
                    textResults: results[0],
                    documentResults: results[1],
                    sentenceResults: results[2]
                });
            });

        const footer = new Footer();
        dom.appendChild(footer.renderDOM());
    } 
    renderHTML() {
        return /*html*/`
            <div></div>
        `;
    }
}

export default AllUsersResultsApp;