import Component from '../Component.js';

// make this data driven and loop to create each section

class AboutUs extends Component {
    renderHTML() {
        return /*html*/`
        <main>
            <section>
                <h2 class="about-us-h2">Abbey Masters</h2>
                <div class="about-us-div">
                    <img class="about-us-img" src="./assets/abbey.jpeg" alt="Abbey">
                    <p class="about-us-p">Abbey is an ex-Content Marketing Manager turned Software Engineer at Alchemy Code Lab. Being empathetic and genuine is important to her, so she enjoys using a tone analyzer to make sure she’s always putting her best foot forward. You can find her drinking a glass of water, hanging out with her dog, Mitch, and taking long walks around Portland.</p>
                </div>
            </section>
            <section>
                <h2 class="about-us-h2">Alex Spencer</h2>
                <div class="about-us-div">
                    <img class="about-us-img" src="./assets/alex.jpeg" alt="Alex">
                    <p class="about-us-p">Alex is a former Investment Consultant turned Software Developer. He loves spending time with his wife and goldendoodle puppy. He's an avid Timbers and Arsenal FC supporter.</p>
                </div>
            </section>
            <section>
                <h2 class="about-us-h2">Allison Busse</h2>
                <div class="about-us-div">
                    <img class="about-us-img" src="./assets/allison.jpeg" alt="Allison">
                    <p class="about-us-p">Allison is a software developer and former technical writer. When not staring at a computer screen, you can find her reading, hiking, cooking, and questioning the level of sarcasm in every message she sends.</p>
                </div>
            </section>
            <section class="bottom">
                <h2 class="about-us-h2">Evan Andrewson</h2>
                <div class="about-us-div">
                    <img class="about-us-img" src="./assets/evan.png" alt="Evan">
                    <p class="about-us-p">Evan is a former mail carrier with a sales/canvassing background turned software developer. Besides coding, he enjoys reading, hiking, and drinking beer.</p>
                </div>
            </section>
        </main>
        `;
    }
}

export default AboutUs;