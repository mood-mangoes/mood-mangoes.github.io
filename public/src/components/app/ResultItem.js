import Component from '../Component.js';
import DocumentResultItem from './DocumentResultItem.js';
import SentenceResultItem from './SentenceResultItem.js';

class ResultItem extends Component {

    onRender(dom) {
        const documentResults = this.props.documentResults;
        const sentenceResults = this.props.sentenceResults;
        const textId = this.props.textResults.textResult.id;

        const sentenceResultDiv = dom.querySelector('.sentence-result-div');
        const toneIdDiv = dom.querySelector('.tone-id-div');

        // really this component should be receiving far less data,
        // but here is how to use array methods to achieve same work as current code:
        documentResults
            .filter(documentResult => documentResult.text_id === textId)
            // prop key should be singular "documentResult"
            .map(documentResult => new DocumentResultItem({ documentResult }))
            .forEach(documentResultItem => toneIdDiv.appendChild(documentResultItem.renderDOM()))
            
        // same can be done here
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
            return /*html*/`
                <h1>Loading</h1>
            `;
        }
    }
}

export default ResultItem;