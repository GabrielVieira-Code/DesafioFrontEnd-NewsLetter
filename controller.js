function emailvalidation(field) {
    
        usuario = field.value.substring(0, field.value.indexOf("@"));
        dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
        // <p id="textEmail" class="textEmail">Email address</p>
        let textEmail =  document.getElementById("textEmail");
        let inputError = document.getElementById('username')
        var novaTagFilha = document.createElement('span');
        if ((usuario.length >=1) &&
            (dominio.length >=3) &&
            (usuario.search("@")==-1) &&
            (dominio.search("@")==-1) &&
            (usuario.search(" ")==-1) &&
            (dominio.search(" ")==-1) &&
            (dominio.search(".")!=-1) &&
            (dominio.indexOf(".") >=1)&&
            (dominio.lastIndexOf(".") < dominio.length - 1)) {
                alert("E-mail valido");
        let inputElement=document.getElementById("userName");
        
        }
        else{
 console.log("foi",textEmail);
 let novaTagFilha = document.createElement('span');
   textEmail.appendChild(novaTagFilha);
//    inputError.id='teste'
   novaTagFilha.textContent = 'Email invalido';
   inputError.style.border = '1px solid red'

   setTimeout(() => {
       novaTagFilha.style.display = 'none'
      inputError.style.border = 'rgb(181, 189, 196)'
        console.log(inputError);
    }, 1000);
        }
       


// // 1. Encontre a tag pai usando o ID
// var tagPai = document.getElementById('pai');

// // 2. Crie a nova tag filha
// var novaTagFilha = document.createElement('span');

// // 3. Adicione conteúdo à nova tag filha (opcional)
// novaTagFilha.textContent = 'Esta é a tag filha.';

// // 4. Adicione a nova tag filha à tag pai
// tagPai.appendChild(novaTagFilha);









        
}