import Component from '../Component.js';
import emojis from './emojis.js';

class DocumentResultItem extends Component {
    renderHTML() {
        const documentResults = this.props.documentResults;
        const toneId = documentResults.tone_id;
        const score = (+documentResults.score).toFixed(2);

        return /*html*/`        
            <div class="emoji-box">
                <p class="tone-id">${toneId} ${score}</p>
                <p class="emoji">${emojis[toneId]}</p>
            </div>            
        `;
    }
}

export default DocumentResultItem;