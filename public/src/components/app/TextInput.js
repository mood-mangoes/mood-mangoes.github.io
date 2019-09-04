import Component from '../Component.js';
import { addMessage } from '../../services/tone-check-api.js';
import LegendItem from '../message-tester/LegendItem.js';

class TextInput extends Component {
    onRender(dom) {
        // const onAdd = this.props.onAdd;
        const analyzeButton = dom.querySelector('button');
        const textArea = dom.querySelector('textarea');

        analyzeButton.addEventListener('click', (event) => {
            event.preventDefault();
            
            const messageInput = {
                message: textArea.value
            };

            addMessage(messageInput)
                .then(result => {

                    this.props.documentResult = result.document;
                    this.props.sentenceResult = result.sentence;

                    this.props.documentResult.forEach(tone => {
                        const props = { tone };
                        console.log(props);
                        const legendItem = new LegendItem(props);
                        const legend = dom.querySelector('#legend');
                        legend.appendChild(legendItem.renderDOM());
                    });
                })
                .catch(err => {
                    // eslint-disable-next-line no-console
                    console.log('no message input', err);
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

            <div id="sentence-results">
                    Hi Team,<br>

                    The times are difficult! <br>
                    Our sales have been disappointing for the past three quarters for our data analytics product suite. <br>
                    We have a competitive data analytics product suite in the industry. <br>
                    However, we are not doing a good job at selling it, and this is really frustrating.
                    
                    We are missing critical sales opportunities. We cannot blame the economy for our lack of execution. Our clients need analytical tools to change their current business outcomes. In fact, it is in times such as this, our clients want to get the insights they need to turn their businesses around. It is disheartening to see that we are failing at closing deals, in such a hungry market. Let's buckle up and execute.
                    
                    Jennifer Baker
                    Sales Leader, North-East region
                    
            </div>
        </section>
        </main>
        `;
    }
}

export default TextInput;