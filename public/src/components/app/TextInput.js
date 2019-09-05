import Component from '../Component.js';
import { addMessage } from '../../services/tone-check-api.js';
import LegendItem from '../message-tester/LegendItem.js';
import SentenceResults from '../message-tester/SentenceResults.js';
import Loading from './Loading.js';

class TextInput extends Component {
    onRender(dom) {
        const analyzeButton = dom.querySelector('button');
        const textArea = dom.querySelector('textarea');
        const resultsHeader = dom.querySelector('h2');
        const resultsSection = dom.querySelector('#results-section');
        const legendBox = dom.querySelector('#legend');
        const sentenceResultsBox = dom.querySelector('#sentence-results-box');

        const main = dom.querySelector('#message-input');
        console.log(main);

        analyzeButton.addEventListener('click', (event) => {
            event.preventDefault();

            const loading = new Loading({ loading: true });
            console.log(loading);
            main.appendChild(loading.renderDOM());

            legendBox.innerHTML = '';
            sentenceResultsBox.innerHTML = '';
            
            const messageInput = {
                message: textArea.value
            };

            addMessage(messageInput)
                .then(result => {

                    this.props.documentResult = result.document;
                    this.props.sentenceResult = result.sentences;
                    this.props.messageInput = messageInput;
                    resultsHeader.classList.remove('no-display');
                    this.props.documentResult.forEach(tone => {
                        const props = { tone };
                        const legendItem = new LegendItem(props);
                        const legend = dom.querySelector('#legend');
                        legend.appendChild(legendItem.renderDOM());
                    });
                    const sentenceResults = new SentenceResults(this.props);
                    sentenceResultsBox.appendChild(sentenceResults.renderDOM());
                })
                .catch(err => {
                    // eslint-disable-next-line no-console
                    console.log('no message input', err);
                })
                .finally(() => {
                    setTimeout(() => {
                        loading.update({ loading: false });
                    }, 200);
                });
        });
    }
    renderHTML() {
        return /*html*/`
        <main>
        <section id="message-input">
            <form>
            <textarea id="message" name="message"></textarea>
            <button id="analyze-button">Analyze</button>
            </form>
        </section>
        <section id="results-section">
            <h2 class="no-display">Results</h2>
            <div id="legend">
            </div>
        </section>
        <section id="sentence-results-box">
        </section>
        </main>
        `;
    }
}

export default TextInput;