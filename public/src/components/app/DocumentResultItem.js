import Component from '../Component.js';

class DocumentResultItem extends Component {
    renderHTML() {
        let score = +this.props.documentResults.score;
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
        
            <div class="emoji-box">
                <p class="tone-id">${this.props.documentResults['tone_id']} ${newScore}</p>
                <p class="emoji">${emojis[this.props.documentResults['tone_id']]}</p>
            </div>            
           
        `;
    }
}

export default DocumentResultItem;