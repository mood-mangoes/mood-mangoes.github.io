import Component from '../Component.js';
import { addMessage } from '../../services/tone-check-api.js';
import LegendItem from '../message-tester/LegendItem.js';
import SentenceResults from '../message-tester/SentenceResults.js';
import Loading from './Loading.js';

class TextInput extends Component {
    onRender(dom) {
        // const onAdd = this.props.onAdd;
        const analyzeButton = dom.querySelector('button');
        const textArea = dom.querySelector('textarea');

        const main = dom.querySelector('#message-input');
        console.log(main);

        analyzeButton.addEventListener('click', (event) => {
            event.preventDefault();

            const loading = new Loading({ loading: true });
            console.log(loading);
            main.appendChild(loading.renderDOM());
            
            const messageInput = {
                message: textArea.value
            };

            addMessage(messageInput)
                .then(result => {

                    this.props.documentResult = result.document;
                    this.props.sentenceResult = result.sentences;
                    console.log(this.props.sentenceResult);
                    this.props.messageInput = messageInput;

                    this.props.documentResult.forEach(tone => {
                        const props = { tone };
                        const legendItem = new LegendItem(props);
                        const legend = dom.querySelector('#legend');
                        legend.appendChild(legendItem.renderDOM());
                    });
                    const sentenceResults = new SentenceResults(this.props);
                    const resultsSection = dom.querySelector('#results-section');
                    resultsSection.appendChild(sentenceResults.renderDOM());
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
            <h2>Results</h2>
            <div id="legend">
            </div>
        </section>
        </main>
        `;
    }
}

export default TextInput;