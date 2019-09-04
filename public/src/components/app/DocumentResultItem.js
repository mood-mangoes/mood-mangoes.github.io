import Component from '../Component.js';

class DocumentResultItem extends Component {
    renderHTML() {
        return /*html*/`
            <p>${this.props.documentResults[0]['tone_id']} ${this.props.documentResults[0].score}</p>
        `;
    }
}

export default DocumentResultItem;