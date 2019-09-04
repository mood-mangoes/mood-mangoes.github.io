import Component from '../Component.js';

class LegendItem extends Component {


    renderHTML() {

        const emojis = {
            anger: '😠',
            fear: '😨',
            joy: '😁',
            sadness: '😔',
            analytical: '🤔',
            confident: '😏',
            tentative: '😬'
        };

        let score = +this.props.tone.score;
        score = score.toFixed(2);


        return /*html*/`
        <div class="legend-item">
            <p class="tone-id">${this.props.tone.tone_id}<br>
                <span class="score">${score}</span></p>
            <p class="emoji">${emojis[this.props.tone.tone_id]}</p>
        </div>
        `;
    }
}

export default LegendItem;