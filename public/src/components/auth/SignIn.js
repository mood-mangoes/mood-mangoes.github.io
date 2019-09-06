import Component from '../Component.js';

class SignIn extends Component {

    onRender(form) {
        const onSignIn = this.props.onSignIn;

        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);

            const credentials = {
                email: formData.get('email'),
                password: formData.get('password')
            };
            onSignIn(credentials);
        });
    }

    renderHTML() {
        return /*html*/`
            <form class="auth-form standard">
                    <h2>Sign in!</h2>
                    <p>
                        <label for="email">Email:</label><br>
                        <input id="signin-email" type="email" name="email" required placeholder=" youremail@gmail.com">
                    </p>
                    <p>
                        <label for="password">Password:</label><br>
                        <input id="signin-password" type="password" name="password" required>
                    </p>
                    
                        <button class="sign-up">Sign in</button>
                        
                    
                </form>
            
        `;
    }
}

export default SignIn;