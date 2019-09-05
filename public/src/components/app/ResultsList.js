import Component from '../Component.js';
import ResultItem from './ResultItem.js';

class ResultsList extends Component {
    onRender(dom) {
        const textResults = this.props.textResults;
        const documentResults = this.props.documentResults;

        textResults.forEach(textResult => {
            const textProps = { textResult };
            const resultItem = new ResultItem({ 
                textResults: textProps,
                textId: textResults.id,
                documentResults: documentResults
            });
            dom.appendChild(resultItem.renderDOM());
        });
        
    }
    renderHTML() {
        return /*html*/`
            <main>
                <ul class="result-list-flex">
                </ul>
            </main>
                
        `;
    }
}

export default ResultsList;