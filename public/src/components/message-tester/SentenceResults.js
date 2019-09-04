import Component from '../Component.js';

class SentenceResults extends Component {

    onRender(dom) {
        const sentences = dom.querySelectorAll('p');    
        const sentenceResultsData = this.props.sentenceResult;
        sentences.forEach(sentence => {
            sentenceResultsData.forEach(line => {
                if(sentence.textContent === line.sentence) {
                    const span = document.createElement('span');
                    span.classList.add(line.tone_id);
                    span.classList.add('dot');
                    sentence.prepend(span);
                }

            });
        });


    }

    renderHTML() {
        let string = this.props.messageInput.message;
        string = string.replace(/.(?=[A-Z])/g, '</p><p>');

        return /*html*/`
        <div id="sentence-results">
            <p>${string}</p>
        </div>
        `;
    }
}

export default SentenceResults;