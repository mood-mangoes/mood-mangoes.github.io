import Component from '../Component.js';

class ResultItem extends Component {
    renderHTML() {
        const textResult = this.props.textResult;
        const documentResult = this.props.documentResult;
        console.log(this.props);
        const sentenceResult = this.props.sentenceResult;
        // console.log(textResult.body);
        
        return /*html*/`
        <li>
            <p>${textResult.body}</p>
            <p>${documentResult.tone_id}${documentResult.score}</p>
            <p>sentence results</p>
        </li>
        `;
    }
}

export default ResultItem;