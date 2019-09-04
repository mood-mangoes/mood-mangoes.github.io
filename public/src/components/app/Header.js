import Component from '../Component.js';
import store from '../../services/store.js';

class Header extends Component {

    onRender(dom) {
        const logoutButton = dom.querySelector('#log-out');
        if(location.pathname === '/auth.html') {
            logoutButton.classList.add('no-display');
        }
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
                    <a href="/index.html">Tester</a>
                    <a href="/results.html">Past Submissions</a>
                    <a href="">About Us</a>
                </nav>
                <button id="log-out">Log Out</button>
            </header>
        `;
    }
}

export default Header;