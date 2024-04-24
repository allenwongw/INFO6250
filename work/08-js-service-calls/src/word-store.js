import { fetchSession, fetchLogin, fetchPostWord, fetchWord, fetchLogout } from "./services";
import { render } from "./web-page";

const webPage = document.querySelector('#app');
const errorEl = document.querySelector('.error');


fetchSession()
.catch( err => {
    if (err.error == 'network-error') {
        errorEl.innerHTML = `<p>network error</p>`;
    }
} )
.then( response => {
    if (!response.error) {
        const { username } = response;
        fetchWord(username)
        .catch( err => {
            if (err.error == 'network-error') {
                errorEl.innerHTML = `<p>network error</p>`;
            }
        } )
        .then( response => {
            const { username, storedWord } = response;
            render(username, storedWord);
        })
    } 
    render('', '');
});

webPage.addEventListener('click', (e) =>{
    if (e.target.classList.contains('cat-login')) {
        const input = document.querySelector('.input');
        const username = input.value;
        fetchLogin(username)
        .catch( err => {
            if (err.error == 'network-error') {
                errorEl.innerHTML = `<p>network error</p>`; 
            } else if (err.error == 'required-username') {
                errorEl.innerHTML = `<p>Kindly use numbers and letters</p>`; 
            } else if (err.error == 'auth-insufficient') {
                errorEl.innerHTML = `<p>dog is disaster, use cat</p>`; 
            }
        } )
        .then(response => {
            fetchWord()
            .catch( err => {
                     if (err.error == 'network-error') {
                    errorEl.innerHTML = `<p>network error</p>`; 
                }
            } )
            .then( response => {
                const { username, storedWord } = response;
                render(username, storedWord);
            })
        });
        return;
    }
    
    if (e.target.classList.contains('new-word')) {
        const input = document.querySelector('.input');
        const newWord = input.value;

        fetchPostWord(newWord)
        .catch( err => {
            if (err.error == 'network-error') {
                errorEl.innerHTML = `<p>network error</p>`;
            } else if (err.error == 'invalid-word') {
                errorEl.innerHTML = `<p>Kindly use letters</p>`
    } })
        .then( response => {
            if (response) {
                const { username, storedWord } = response;
                render(username, storedWord);                
            }
        });
     
    }
    if (e.target.classList.contains('log-out')) {
        fetchLogout()
        .catch( err => {
            if (err.error == 'network-error') {
                errorEl.innerHTML = `<p>network error</p>`;
            }
        } )
        .then( response => {
            errorEl.innerHTML = response.error ? errorEl.innerHTML : '';
            render('', '');
            return;
        });
    }
})
