import Component from '../Component.js';

class ColorKey extends Component {
    renderHTML() {
        return /*html*/`
        <div>
            <h3>Know Your Tones</h3>
            <div class="tone-keys">
                <p><span class="color-rectangles anger"></span> Anger</p>
                <p><span class="color-rectangles sadness"></span> Sadness</p>
                <p><span class="color-rectangles analytical"></span> Analytical</p>
                <p><span class="color-rectangles tentative"></span> Tentative</p>
                <p><span class="color-rectangles fear"></span> Fear</p>
                <p><span class="color-rectangles joy"></span> Joy</p>
                <p><span class="color-rectangles confident"></span> Confident</p>
            </div>
        </div>
        `;
    }
}

export default ColorKey;