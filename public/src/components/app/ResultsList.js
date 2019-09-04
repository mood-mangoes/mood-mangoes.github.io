import Component from '../Component.js';
import ResultItem from './ResultItem.js';

class ResultsList extends Component {
    onRender(dom) {
        const textResults = this.props.textResults;
        const documentResults = this.props.documentResults;
        // const sentenceResults = this.props.sentenceResults;
        // console.log(textResults);

        textResults.forEach(textResult => {
            const textProps = { textResult };
            const resultItem = new ResultItem({ 
                textResults: textProps,
                textId: textResults.id,
                documentResults: documentResults
                // sentenceResults: sentenceResults
    
            });

            dom.appendChild(resultItem.renderDOM());
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