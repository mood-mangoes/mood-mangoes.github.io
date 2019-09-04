import Component from '../Component.js';
import ResultItem from './ResultItem.js';

class ResultsList extends Component {
    onRender(dom) {
        const textResults = this.props.textResults;
        const documentResults = this.props.documentResults;
        const sentenceResults = this.props.sentenceResults;

        textResults.forEach(textResult => {
            const textProps = { textResult };
            const resultItem = new ResultItem(textProps);

            dom.appendChild(resultItem.renderDOM());
            
            documentResults.forEach(documentResult => {
                resultItem.update(documentResult);
            });
            sentenceResults.forEach(sentenceResult => {
                resultItem.update(sentenceResult);
            });
        });
        
    }
    renderHTML() {
        return /*html*/`
            <ul>
            </ul>
        `;
    }
}

export default ResultsList;