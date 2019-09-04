import Component from '../Component.js';

class ResultItem extends Component {
    renderHTML() {
        const textResult = this.props.textResult;
        const documentResult = this.props.documentResult;
        const sentenceResult = this.props.sentenceResult;

        //console.log('props', this.props.documentResults[0]['tone_id']);
        if(this.props.documentResults[0]) {

            return /*html*/`
            <li>
            <p>${this.props.textResults.textResult.body}</p>
            <p>${this.props.documentResults[0]['tone_id']} ${this.props.documentResults[0].score}</p>
            <p>sentence results</p>
            </li>
            `;
        }
        else {
            return `
            <h1>Loading</>
            `;
        }
    }
}

export default ResultItem;