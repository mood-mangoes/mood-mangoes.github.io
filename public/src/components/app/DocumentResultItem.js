import Component from '../Component.js';

class DocumentResultItem extends Component {
    renderHTML() {
        return /*html*/`
            <p>${this.props.documentResults['tone_id']} ${this.props.documentResults.score}</p>
        `;
    }
}

export default DocumentResultItem;