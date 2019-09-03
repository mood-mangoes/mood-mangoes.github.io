import Component from '../Component.js';
import store from '../../services/store.js';

class Header extends Component {

    onRender(dom) {
        const logoutButton = dom.querySelector('#log-out');

        logoutButton.addEventListener('click', () => {
            store.removeToken();
            window.location = 'auth.html';
        });

    }

    renderHTML() {
        return /*html*/`
            <header>
                <img src="./assets/tonechecklogo.png">
                <nav>
                    <a href="">Tester</a>
                    <a href="">Before/After</a>
                    <a href="">About Us</a>
                </nav>
                <button id="log-out">Log Out</button>
            </header>
        `;
    }
}

export default Header;