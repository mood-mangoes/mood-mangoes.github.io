import Component from '../Component.js';
import Header from './Header.js';
import ResultsList from './ResultsList.js';
import { getAllTextResults, getDocumentResults } from '../../services/tone-check-api.js';
import Footer from './Footer.js';

class AllUsersResultsApp extends Component {
    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const resultsList = new ResultsList({ 
            textResults: [],
            documentResults: [],
        });
        dom.appendChild(resultsList.renderDOM());

        getAllTextResults().then(textResults => {
            resultsList.update({ textResults });
        });
        getDocumentResults().then(documentResults => {
            resultsList.update({ documentResults });
        });

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

export default AllUsersResultsApp;