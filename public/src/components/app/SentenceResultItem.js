import Component from '../Component.js';
import emojis from './emojis.js';

class SentenceResultItem extends Component {
    renderHTML() {
        let score = +this.props.sentenceResults.score;
        const newScore = score.toFixed(2);

        return /*html*/`
        
            <div class="sentence-result">
                <div class="max-width">
                <p class="results-sentence">${this.props.sentenceResults.sentence}</p>
                </div>
                <div class="score-container">
                    <p class="tone-id-sentence">${this.props.sentenceResults['tone_id']} ${newScore}</p>
                    <p class="emoji">${emojis[this.props.sentenceResults['tone_id']]}</p>
                </div>
            </div>            
           
        `;
    }
}

export default SentenceResultItem;