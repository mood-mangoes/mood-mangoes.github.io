import Component from '../Component.js';
import DocumentResultItem from './DocumentResultItem.js';

class ResultItem extends Component {

    onRender(dom) {
        // const textResult = this.props.textResult;
        const documentResults = this.props.documentResults;
        // const sentenceResult = this.props.sentenceResult;
        console.log(documentResults.text_id);
        console.log(this.props.textResults.textResult.id);

        for(let i = 0; i < documentResults.length; i ++) {
            if(documentResults[i].text_id === this.props.textResults.textResult.id) {
                const documentResultItem = new DocumentResultItem({ documentResults });
                dom.appendChild(documentResultItem.renderDOM());
            }
        }

        // while(documentResults.text_id === this.props.textResults.textResult.id) {
        //     const documentResultItem = new DocumentResultItem({ documentResults });
        //     dom.appendChild(documentResultItem.renderDOM());
        // }
        
    }

    renderHTML() {

        //console.log('props', this.props.documentResults[0]['tone_id']);
        if(this.props.documentResults) {

            return /*html*/`
                <li>
                    <p>${this.props.textResults.textResult.body}</p>
                    <p>sentence results</p>
                </li>
            `;
        }
        else {
            return `
            <h1>Loading</>
            `;
        }
    }
}

export default ResultItem;