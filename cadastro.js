window.onload=function(){

    

    let btn = document.querySelector('#verSenha')
    let btnConfirm = document.querySelector('#verConfirmSenha')
    
    
    let nome = document.querySelector('#nome')
    let labelNome = document.querySelector('#labelNome')
    let validNome = false

    let email = document.querySelector('#email')
    let labelEmail = document.querySelector('#labelEmail')
    let validEmail = false
    
    let phone = document.querySelector('#phone')
    let labelPhone = document.querySelector('#labelPhone')
    let validPhone = false
    
    let senha = document.querySelector('#senha')
    let labelSenha = document.querySelector('#labelSenha')
    let validSenha = false
    
    let confirmSenha = document.querySelector('#confirmSenha')
    let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
    let validConfirmSenha = false
    
    let msgError = document.querySelector('#msgError')
    let msgSuccess = document.querySelector('#msgSuccess')

    function validatorEmail(email) {
      let emailPattern =
        /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
      return emailPattern.test(email);
    }

    
    

    email.addEventListener('keyup', () => {
      if (validatorEmail(email.value) !== true){
        labelEmail.setAttribute('style', 'color: red')
        labelEmail.innerHTML = 'Email *Põe um email de verdade né :)'
        email.setAttribute('style', 'border-color: red')
        validEmail = false
      } else {
        labelEmail.setAttribute('style', 'color: green')
        labelEmail.innerHTML = 'Email'
        email.setAttribute('style', 'border-color: green')
        validEmail = true
      }
    })
   
    
    
    nome.addEventListener('keyup', () => {
      if(nome.value.length <= 2){
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
      } else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: green')
        validNome = true
      }
    })
    
    phone.addEventListener('keyup', () => {
      if(phone.value.length <= 10){
        labelPhone.setAttribute('style', 'color: red')
        labelPhone.innerHTML = 'Celular *Insira um telefone válido (DDD) + número'
        phone.setAttribute('style', 'border-color: red')
        validPhone = false
      } else {
        labelPhone.setAttribute('style', 'color: green')
        labelPhone.innerHTML = 'Celular'
        phone.setAttribute('style', 'border-color: green')
        validPhone = true
      }
    })
    
    senha.addEventListener('keyup', () => {
      if(senha.value.length <= 5){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
        senha.setAttribute('style', 'border-color: red')
        validSenha = false
      } else {
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: green')
        validSenha = true
      }
    })
    
    confirmSenha.addEventListener('keyup', () => {
      if(senha.value != confirmSenha.value){
        labelConfirmSenha.setAttribute('style', 'color: red')
        labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
        confirmSenha.setAttribute('style', 'border-color: red')
        validConfirmSenha = false
      } else {
        labelConfirmSenha.setAttribute('style', 'color: green')
        labelConfirmSenha.innerHTML = 'Confirmar Senha'
        confirmSenha.setAttribute('style', 'border-color: green')
        validConfirmSenha = true
      }
    })
   
    bt.onclick = function cadastrar(){
      if(validNome && validEmail && validSenha && validConfirmSenha){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
        
        listaUser.push(
        {
          nomeCad: nome.value,
          userCad: email.value,
          senhaCad: senha.value
        }
        )
        
        localStorage.setItem('listaUser', JSON.stringify(listaUser))
        
       
        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''
        
        setTimeout(()=>{
            window.location.href = 'login.html'
        }, 3000)
      
        
      } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none')
      }
    }
    
    btn.addEventListener('click', ()=>{
      let inputSenha = document.querySelector('#senha')
      
      if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
      } else {
        inputSenha.setAttribute('type', 'password')
      }
    })
    
    btnConfirm.addEventListener('click', ()=>{
      let inputConfirmSenha = document.querySelector('#confirmSenha')
      
      if(inputConfirmSenha.getAttribute('type') == 'password'){
        inputConfirmSenha.setAttribute('type', 'text')
      } else {
        inputConfirmSenha.setAttribute('type', 'password')
      }
    })
    
    
  }    
      
      
    