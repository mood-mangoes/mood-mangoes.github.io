import Component from '../Component.js';
import DocumentResultItem from './DocumentResultItem.js';

class ResultItem extends Component {

    onRender(dom) {
        const documentResults = this.props.documentResults;

        for(let i = 0; i < documentResults.length; i ++) {
            if(documentResults[i].text_id === this.props.textResults.textResult.id) {
                const documentResultItem = new DocumentResultItem({ documentResults: documentResults[i] });
                const toneIdDiv = dom.querySelector('.tone-id-div');
                toneIdDiv.appendChild(documentResultItem.renderDOM());
            }
        }     
    }


    renderHTML() {
        if(this.props.documentResults) {
            return /*html*/`
                <li class="result-item-flex">
                    <p class="body">${this.props.textResults.textResult.body}</p>
                    <div class="tone-id-div"></div>
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