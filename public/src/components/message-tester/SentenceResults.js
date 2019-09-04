import Component from '../Component.js';

class SentenceResults extends Component {

    onRender(dom) {
        const toneColors = {
            anger: 'red',
            fear: 'deepred',
            joy: 'yellow',
            sadness: 'blue',
            analytical: 'purple',
            confident: 'green',
            tentative: 'orange'
        };
        const sentences = dom.querySelectorAll('p'); 
        const test = document.getElementById('results-section');
        console.log(test);   
        const sentenceResultsData = this.props.sentenceResult;
        sentences.forEach(sentence => {
            const toneArray = [];
            sentenceResultsData.forEach(line => {
                if(sentence.textContent === line.sentence) {
                    toneArray.push(line.tone_id);
                    // const span = document.createElement('span');
                    // span.classList.add(line.tone_id);
                    // span.classList.add('dot');
                    // sentence.prepend(span);
                
                    
                }
                
            });
            if(toneArray.length === 1) {
                const hr = document.createElement('hr');
                hr.classList.add('first-hr');
                hr.classList.add(toneArray[0]);
                sentence.appendChild(hr);

            }
            if(toneArray.length === 2) {
                const hr = document.createElement('hr');
                hr.classList.add('first-hr');
                hr.classList.add(toneArray[0]);
                sentence.appendChild(hr);

                const hrTwo = document.createElement('hr');
                hrTwo.classList.add('second-hr');
                hrTwo.classList.add(toneArray[1]);
                sentence.appendChild(hrTwo);
            }
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