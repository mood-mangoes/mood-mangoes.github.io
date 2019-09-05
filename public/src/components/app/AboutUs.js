import Component from '../Component.js';

class AboutUs extends Component {
    renderHTML() {
        return /*html*/`
        <main>
            <section>
                <h2>Abbey</h2>
                <img src="./assets/abbey.jpeg" alt="Abbey">
                <p>Abbey is an ex-Content Marketing Manager turned Software Engineer at Alchemy Code Lab. Being empathetic and genuine is important to her, so she enjoys using a tone analyzer to make sure she’s always putting her best foot forward. You can find her drinking a glass of water, hanging out with her dog, Mitch, and taking long walks around Portland.</p>
            </section>
            <section>
                <h2>Alex</h2>
                <img src="./assets/alex.jpeg" alt="Alex">
                <p>Alex is a former Investment Consultant turned Software Developer. He loves spending time with his wife and goldendoodle puppy. He's an avid Timbers and Arsenal FC supporter.</p>
            </section>
            <section>
                <h2>Allison</h2>
                <img src="./assets/allison.jpeg" alt="Allison">
                <p>Allison is a software developer and former technical writer. When not staring at a computer screen, you can find her reading, hiking, cooking, and questioning the level of sarcasm in every message she sends.</p>
            </section>
            <section class="bottom">
                <h2>Evan</h2>
                <img src="./assets/evan.png" alt="Evan">
                <p>Evan is a former mail carrier with a sales/canvassing background turned software developer. Besides coding, he enjoys reading, hiking, and drinking beer.</p>
            </section>
        </main>
        `;
    }
}

export default AboutUs;