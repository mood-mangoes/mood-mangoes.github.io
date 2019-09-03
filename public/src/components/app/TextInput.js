import Component from '../Component.js';
import { addMessage } from '../../services/tone-check-api.js';

class TextInput extends Component {
    onRender(dom) {
        // const onAdd = this.props.onAdd;
        const analyzeButton = dom.querySelector('button');
        const textArea = dom.querySelector('textarea');
        analyzeButton.addEventListener('click', (event) => {
            // console.log('this is firing');
            event.preventDefault();
            
            const messageInput = {
                message: textArea.value
            };

            addMessage(messageInput)
                .then(() => {
                    console.log(messageInput);
                })
                .catch(err => {
                    console.log('no message input', err);
                });
        });
    }
    renderHTML() {
        return /*html*/`
        <section id="message-input">
            <form>
            <textarea id="message" name="message"></textarea>
            <button id="analyze-button">Analyze</button>
            </form>
        </section>
        `;
    }
}

export default TextInput;