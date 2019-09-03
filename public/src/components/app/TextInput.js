import Component from './Component.js';

class TextInput extends Component {
    onRender(dom) {
        const analyzeButton = document.getElementById('analyze-button');
        analyzeButton.addEventListener('click', () => {
            
        });
    }
    renderHTML() {
        return /*html*/`
        <section id="message-input">
            <textarea></textarea>
            <button id="analyze-button">Analyze</button>
        </section>
        `;
    }
}

export default TextInput;