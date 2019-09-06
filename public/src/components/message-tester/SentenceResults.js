import Component from '../Component.js';

class SentenceResults extends Component {

    onRender(dom) {
        const sentences = dom.querySelectorAll('p'); 
        const sentenceResultsData = this.props.sentenceResult;
        sentences.forEach(sentence => {
            if(sentence.textContent.charAt(0) === ' ' || sentence.textContent.match(/^\n+/)) {
                sentence.textContent = sentence.textContent.slice(1);
                if(sentence.textContent.charAt(0) === '\n' || sentence.textContent.charAt(0) === ' ') {
                    sentence.textContent = sentence.textContent.slice(1);
                }
            }
            const toneArray = [];
            sentenceResultsData.forEach(line => {
                if(line.sentence.includes(sentence.textContent)) {
                    toneArray.push(line.tone_id);
                    toneArray.push(line.score);
                }
            });
            if(toneArray.length === 2) {
                const hr = document.createElement('hr');
                hr.classList.add('first-hr');
                hr.classList.add(toneArray[0]);
                hr.classList.add('tooltip');
                sentence.appendChild(hr);
                const toolTip = document.createElement('span');
                let score = +toneArray[1];
                score = score.toFixed(2);
                toolTip.classList.add('tooltip-text');
                toolTip.textContent = `${toneArray[0]}: ${score}`;
                hr.appendChild(toolTip);
            }
            if(toneArray.length === 4) {
                const hr = document.createElement('hr');
                hr.classList.add('first-hr');
                hr.classList.add(toneArray[0]);
                hr.classList.add('tooltip');
                sentence.appendChild(hr);
                const toolTip = document.createElement('span');
                let score = +toneArray[1];
                score = score.toFixed(2);
                toolTip.classList.add('tooltip-text');
                toolTip.textContent = `${toneArray[0]}: ${score}`;
                hr.appendChild(toolTip);
                
                const hrTwo = document.createElement('hr');
                hrTwo.classList.add('second-hr');
                hrTwo.classList.add(toneArray[2]);
                hrTwo.classList.add('tooltip');
                sentence.appendChild(hrTwo);
                const toolTipTwo = document.createElement('span');
                let scoreTwo = +toneArray[3];
                scoreTwo = scoreTwo.toFixed(2);
                toolTipTwo.classList.add('tooltip-text');
                toolTipTwo.textContent = `${toneArray[2]}: ${scoreTwo}`;
                hrTwo.appendChild(toolTipTwo);
            }
        });
    }

    renderHTML() {
        let string = this.props.messageInput.message;
        string = string.replace(/(\.|!|\?|,\n)/g, '$1</p><p>');

        return /*html*/`
        <div id="sentence-results">
            <p>${string}</p>
        </div>
        `;
    }
}

export default SentenceResults;