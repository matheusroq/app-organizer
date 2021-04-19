import validator from 'validator';

export default class Login {
    constructor(formID) {
        this.form = document.querySelector(formID);
    }

    init() {
        this.events();
    }

    events() {
        if(!this.form) return;

        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const emailInput = el.querySelector('input[name ="email"]');
        const senhaInput = el.querySelector('input[name ="senha"]');

        let error = false;
        let div = document.querySelector('#response');
        
         if(!validator.isEmail(emailInput.value)) {
            
            let p = document.createElement('p');
            p.className = 'invalid';
            p.innerHTML = 'E-mail inválido';
            div.appendChild(p);

            error = true;
        } 
        console.log(senhaInput.length)
      
        if(senhaInput.length < 3 && senhaInput.length > 50) {
            /* let p = document.createElement('p');
            p.className = 'invalid';
            p.innerHTML = 'Senha deve ter entre 3 e 50 caracteres.';
            div.appendChild(p);  */
            alert('nam')
            error = true;
        }

        if(!error) el.submit();
    }
}