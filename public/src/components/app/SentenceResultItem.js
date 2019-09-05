import Component from '../Component.js';

class SentenceResultItem extends Component {
    renderHTML() {
        let score = +this.props.sentenceResults.score;
        const newScore = score.toFixed(2);

        const emojis = {
            anger: '😠',
            fear: '😨',
            joy: '😁',
            sadness: '😔',
            analytical: '🤔',
            confident: '😏',
            tentative: '😬'
        };

        return /*html*/`
        
            <div class="sentence-result">
                <p>${this.props.sentenceResults.sentence}</p>
                <div class="score-container">
                    <p class="tone-id">${this.props.sentenceResults['tone_id']} ${newScore}</p>
                    <p class="emoji">${emojis[this.props.sentenceResults['tone_id']]}</p>
                </div>
            </div>            
           
        `;
    }
}

export default SentenceResultItem;