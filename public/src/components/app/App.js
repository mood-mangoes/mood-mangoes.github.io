import Component from '../Component.js';
import Header from '../app/Header.js';
import TextInput from '../app/TextInput.js';
import Footer from './Footer.js';

class NewComponent extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        // Looks like static html, just put into template...
        // const blurbArea = dom.querySelector('#blurb-area-tester');
        // const blurb = document.createElement('h2');
        // blurb.className = 'blurb-h2';
        // blurb.textContent = 'Ready To Check Your Tone?';
        // const blurbText = document.createElement('p');
        // blurbText.className = 'blurb-p';
        // blurbText.textContent = 'To use Tone Check, please input the body of your message in the below text area. Please note that salutations and sign-offs may not be supported, and be sure you use proper punctuation. Feel free to amend your text input to refine results. After you\'ve finished up, head over to Past Submissions and All User Submissions!';
        // blurbArea.appendChild(blurbText);
        // blurbArea.prepend(blurb);

        const textInput = new TextInput();
        dom.appendChild(textInput.renderDOM());

        const footer = new Footer();
        dom.appendChild(footer.renderDOM());
    }

    renderHTML() {
        return /*html*/`
            <div>
                <div id="blurb-area-tester">
                    <h2 class="blurb-h2">Ready To Check Your Tone?</h2>
                    <p class="blurb-p">
                        To use Tone Check, please input the body of your message in the below text area. Please note that salutations and sign-offs may not be supported, and be sure you use proper punctuation. Feel free to amend your text input to refine results. After you've finished up, head over to Past Submissions and All User Submissions!
                    </p>
                </div>
            </div>
        `;
    }
}

export default NewComponent;
