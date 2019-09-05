import Component from '../Component.js';
import DocumentResultItem from './DocumentResultItem.js';
import SentenceResultItem from './SentenceResultItem.js';

class ResultItem extends Component {

    onRender(dom) {
        const documentResults = this.props.documentResults;
        const sentenceResults = this.props.sentenceResults;
        const sentenceResultDiv = dom.querySelector('.sentence-result-div');

        for(let i = documentResults.length - 1; i >= 0 ; i --) {
            if(documentResults[i].text_id === this.props.textResults.textResult.id) {
                const documentResultItem = new DocumentResultItem({ documentResults: documentResults[i] });
                const toneIdDiv = dom.querySelector('.tone-id-div');
                toneIdDiv.appendChild(documentResultItem.renderDOM());
            }
        }     
        for(let i = sentenceResults.length - 1; i >= 0; i--) {
            if(sentenceResults[i].text_id === this.props.textResults.textResult.id) {
                const sentenceResultItem = new SentenceResultItem({ sentenceResults: sentenceResults[i] });
                sentenceResultDiv.appendChild(sentenceResultItem.renderDOM());
            }
        }

        const sentenceResultButton = dom.querySelector('.sentence-result-button');
        sentenceResultButton.addEventListener('click', event => {
            event.preventDefault();
            sentenceResultDiv.classList.toggle('no-display');
        });
    }


    renderHTML() {
        if(this.props.documentResults) {
            return /*html*/`
                <section>
                    <li class="result-item-flex">
                        <p class="body">${this.props.textResults.textResult.body}</p>
                        <div class="tone-id-div"></div>
                        <div class="sentence-result-div no-display"></div>
                    </li>
                    <div class="button-container">
                        <button class="sentence-result-button">Sentence Results</button>
                    </div>
                </section>
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