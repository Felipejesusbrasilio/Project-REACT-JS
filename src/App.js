import './App.css';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component,useState,useEffect} from 'react';

// aqui são as imagem importadas
import CloseImagem from './imagem/close.png';
import ImgForm from './imagem/documento.png';
import Mizuno from './imagem/mizuno.jpg';
import Oakley from './imagem/oakley.png';
import Nike from './imagem/nike.png';
import Quiksilver from './imagem/quiksilver.png';

class App extends Component{
  constructor(props){
    super(props);
    
    this.state = {
     
     usuario:{
      id: 1,
      nome:'',
      email:'',
      cpf:'',
      data:'',
      sexo:'',
      telefone:'',
      endereco:'',
      numero:'',
      complemento:'',
      estado:'',
      cidade:'',
      UsuarioNome:'',
      senha:''
    },

     frete:{cep:''},
     produto:[
     
     {id:1,nome: 'Quiksilver',descricao:'sapato esportivo',valor:'100',tamanhos:'',imagem:Quiksilver},
     {id:2,nome: 'Oakley',descricao:'sapato esportivo',valor:'100',tamanhos:'',imagem:Oakley},
     {id:3,nome: 'Nike',descricao:'sapato esportivo',valor:'100',tamanhos:'',imagem:Nike},
     {id:4,nome: 'Mizuno',descricao:'sapato esportivo',valor:'100',tamanhos:'',imagem:Mizuno},

    ]

    }

    this.systemSeo = this.systemSeo.bind(this);
    this.ButtonsComprar = this.ButtonsComprar.bind(this);
    this.Tamanhos = this.Tamanhos.bind(this);
    this.Opendiv = this.Opendiv.bind(this);
    this.Close = this.Close.bind(this);
    this.cadastrar = this.cadastrar.bind(this);
    this.CloseDivSeo = this.CloseDivSeo.bind(this);
    this.Login = this.Login.bind(this);
    
}


  CloseDivSeo(e){
    e.preventDefault();
    let close = document.querySelector('#CloseDivSeo');
    close.style.display = 'none';
  }


  ButtonsComprar(value, id){
     console.log(value);
     console.log(id);
    
    let sessionUser = sessionStorage.getItem("Usuario");
    let session01 = sessionStorage.getItem("NumeroBloco1");
    let session02 = sessionStorage.getItem("NumeroBloco2");
    let session03 = sessionStorage.getItem("NumeroBloco3");
    let session04 = sessionStorage.getItem("NumeroBloco4");



    switch (id){

    case 1:

      console.log('Você clicou no button' +  id);
      // aqui nos fazemos a verificação se tem um usuario e se tem um tamanho se tiver nos retornamos a forma de pagamento//
      
      if(session01){

      if(sessionUser){

        alert('existe o usuario');
        console.log(sessionUser);
        console.log(session01);
        console.log(this.state.usuario);
        //TEST-dc8936f8-a5c6-4a3f-8c57-02c2f0cebe7b
        //
        
        alert('Agora é só trazer um gatewey de pagamento apenas com react js e fazer um uma validação se o pagamento for com sucesso então vamos jogar os dados do comprador e o produto para o banco de dados');

      }else{
        alert('para compra é nessesario efetuar o cadastro');
      }

      }else{
        alert('Para efetuar a compra é nessesario selecionar o tamanho');
      }

      break;

    case 2:

      console.log('Você clicou no button' +  id);
      // aqui nos fazemos a verificação se tem um usuario e se tem um tamanho se tiver nos retornamos a forma de pagamento//

      if(session02){

      if(sessionUser){

        alert('existe o usuario');
        console.log(sessionUser);
        console.log(session02);
        console.log(this.state.usuario);

      }else{
        alert('para compra é nessesario efetuar o cadastro');
      }

      }else{
        alert('Para efetuar a compra é nessesario selecionar o tamanho');
      }

    break;

    case 3:

      console.log('Você clicou no button' +  id);
      // aqui nos fazemos a verificação se tem um usuario e se tem um tamanho se tiver nos retornamos a forma de pagamento//

      if(session03){

      if(sessionUser){

        alert('existe o usuario');
        console.log(sessionUser);
        console.log(session03);
        console.log(this.state.usuario);

      }else{
        alert('para compra é nessesario efetuar o cadastro');
      }

      }else{
        alert('Para efetuar a compra é nessesario selecionar o tamanho');
      }

    break;

    case 4:

      console.log('Você clicou no button' +  id);
      // aqui nos fazemos a verificação se tem um usuario e se tem um tamanho se tiver nos retornamos a forma de pagamento//

      if(session04){

      if(sessionUser){

        alert('existe o usuario');
        console.log(sessionUser);
        console.log(session04);
        console.log(this.state.usuario);

      }else{
        alert('para compra é nessesario efetuar o cadastro');
      }

      }else{
        alert('Para efetuar a compra é nessesario selecionar o tamanho');
      }

    break;
      
    }

 }

 Login(){
  let sessionUser = sessionStorage.getItem("Usuario");
  let sessionSenha = sessionStorage.getItem("Senha");
  
  if(sessionUser){
    console.log('existe essa session');
    console.log(sessionUser);
    alert('Aqui como o pagamento do usuario foi com sucesso e os dados dele estão no banco de dados por que o pagamento dele foi com sucesso por que se não os dados dele não ia entra no banco de dados então vamos mostrar para o usuario o que ele comprou ao efetuar o login: até da pra efetuar o login mas não vai mostrar nada se o pagamento dele não for com sucesso')
  }else{
    console.log('não existe essa session');
  }
 }

 cadastrar(e){
   
   let state = document.querySelectorAll('#values');

   
   const cadastrados = {
   
    nome: state[0],
    email: state[1],
    cpf: state[2],
    data: state[3],
    sexo: state[4],
    telefone: state[5],
    endereco: state[6],
    numero: state[7],
    complemento: state[8],
    estado: state[9],
    cidade: state[10],
    UsuarioNome: state[11],
    senha: state[12]

   }

   if(cadastrados.nome.value == ''){
    alert('Existe campos em branco');
    return false;
   }

   if(cadastrados.email.value == ''){
    alert('Existe campos em branco');
    return false;
   }

   if(cadastrados.cpf.value == ''){
    alert('Existe campos em branco');
    return false;
   }

   if(cadastrados.data.value == ''){
    alert('Existe campos em branco');
    return false;
   }

   if(cadastrados.sexo.value == ''){
    alert('Existe campos em branco');
    return false;
   }

   if(cadastrados.telefone.value == ''){
    alert('Existe campos em branco');
    return false;
   }

   if(cadastrados.endereco.value == ''){
    alert('Existe campos em branco');
    return false;
   }

   if(cadastrados.numero.value == ''){
    alert('Existe campos em branco');
    return false;
   }

   if(cadastrados.complemento.value == ''){
    alert('Existe campos em branco');
    return false;
   }

   if(cadastrados.estado.value == ''){
    alert('Existe campos em branco');
    return false;
   }

   if(cadastrados.cidade.value == ''){
    alert('Existe campos em branco');
    return false;
   }

   if(cadastrados.UsuarioNome.value == ''){
    alert('Existe campos em branco');
    return false;
   }

   if(cadastrados.senha.value == ''){
    alert('Existe campos em branco');
    return false;
   }
   
  this.setState({
    usuario:{
      nome:cadastrados.nome.value,
      email:cadastrados.email.value,
      cpf:cadastrados.cpf.value,
      data:cadastrados.data.value,
      sexo:cadastrados.sexo.value,
      telefone:cadastrados.telefone.value,
      endereco:cadastrados.endereco.value,
      numero:cadastrados.numero.value,
      complemento:cadastrados.complemento.value,
      estado:cadastrados.estado.value,
      cidade:cadastrados.cidade.value,
      UsuarioNome:cadastrados.UsuarioNome.value,
      senha:cadastrados.senha.value
    }
  },()=> console.log(this.state.usuario))
  
  alert('Cadastro realizado com sucesso');
  
  sessionStorage.setItem("Nome", cadastrados.nome.value);
  sessionStorage.setItem("Email", cadastrados.email.value);
  sessionStorage.setItem("Cpf", cadastrados.cpf.value);
  sessionStorage.setItem("Data", cadastrados.data.value);
  sessionStorage.setItem("Sexo", cadastrados.sexo.value);
  sessionStorage.setItem("Telefone", cadastrados.telefone.value);
  sessionStorage.setItem("Endereco", cadastrados.endereco.value);
  sessionStorage.setItem("Numero", cadastrados.numero.value);
  sessionStorage.setItem("Complemento", cadastrados.complemento.value);
  sessionStorage.setItem("Estado", cadastrados.estado.value);
  sessionStorage.setItem("Cidade", cadastrados.cidade.value);
  
  sessionStorage.setItem("Usuario", cadastrados.UsuarioNome.value);
  sessionStorage.setItem("Senha", cadastrados.senha.value);

  let Pegadiv = document.querySelector('.form-cadastro');
  Pegadiv.style.display = 'none';
  Pegadiv.style.height = '0%';

 }

 Opendiv(){

  let Pegadiv = document.querySelector('.form-cadastro');
  Pegadiv.style.display = 'block';
  Pegadiv.style.height = '100%';

 }

 Close(){
  
  let Pegadiv = document.querySelector('.form-cadastro');
  Pegadiv.style.display = 'none';
  Pegadiv.style.height = '0%';
 }

 calcular(){

 let correrios = document.getElementById('correrios').value;
 console.log(correrios);
 
 if(correrios == ''){
    alert('Campo em branco');
 }else{
    alert('Valor:' + 38.90);
 }
  
 }


 Tamanhos(value, id){

 console.log(id);

 switch (id){

    case 1:

    // aqui nos fazemos a verificação para ver em qual bloco o usuario aberto//
    
    console.log('O usuario clicou no button'+' '+value+' '+'do'+' '+'bloco'+' '+id);

    this.setState(prevState => ({
    produto: prevState.produto.map(
    obj => (obj.id === 1 ? Object.assign(obj, { tamanhos: value }) : obj)
    )
    }))
    
    sessionStorage.setItem("NumeroBloco1",value);
  
    console.log(this.state.produto);

    return(
    
    alert('O tamanho foi selecionado com sucesso')

    );    
       
    break;

    case 2:

    // aqui nos fazemos a verificação para ver em qual bloco o usuario aberto//

    console.log('O usuario clicou no button'+' '+value+' '+'do'+' '+'bloco'+' '+id);

    this.setState(prevState => ({
    produto: prevState.produto.map(
    obj => (obj.id === 2 ? Object.assign(obj, { tamanhos: value }) : obj)
    )
    }))
    
    sessionStorage.setItem("NumeroBloco2",value);

    console.log(this.state.produto);

    return(
    
    alert('O tamanho foi selecionado com sucesso')

    );

    break;

    case 3:

      
    // aqui nos fazemos a verificação para ver em qual bloco o usuario aberto//

    console.log('O usuario clicou no button'+' '+value+' '+'do'+' '+'bloco'+' '+id);

    this.setState(prevState => ({
    produto: prevState.produto.map(
    obj => (obj.id === 3 ? Object.assign(obj, { tamanhos: value }) : obj)
    )
    }))
    
    sessionStorage.setItem("NumeroBloco3",value);

    console.log(this.state.produto);

    return(
    
    alert('O tamanho foi selecionado com sucesso')

    );   

    break;

    case 4:

      
    // aqui nos fazemos a verificação para ver em qual bloco o usuario aberto//

    console.log('O usuario clicou no button'+' '+value+' '+'do'+' '+'bloco'+' '+id);

    this.setState(prevState => ({
    produto: prevState.produto.map(
    obj => (obj.id === 4 ? Object.assign(obj, { tamanhos: value }) : obj)
    )
    }))
    
    sessionStorage.setItem("NumeroBloco4",value);

    console.log(this.state.produto);

    return(
    
    alert('O tamanho foi selecionado com sucesso')

    );  


    break;
      
    }

 }
  
  systemSeo(event){
    
    event.preventDefault();

    let seo = document.getElementById('pesquisar').value;

    let Container = document.getElementById('ResultSeo');
    let MysProdutos = this.state.produto;
    let close = document.querySelector('#CloseDivSeo');

    MysProdutos.map((data)=>{
    
    let Maiscula = data.nome.toUpperCase();
    let Minuscula = data.nome.toLowerCase();

    if(seo == Maiscula || seo == Minuscula){
        
    if (data.tamanhos){
    
    close.style.display = 'block';
    let usuario = 'USUARIO'+' '+sessionStorage.getItem("Usuario").toUpperCase();
    let msg = "PRODUTO"; 
    let MsgTrue = "Existe e o tamanho selecionado é"+' '+data.tamanhos+' '+data.descricao+' '+'Valor:'+' '+data.valor; 
    console.log(MysProdutos)
    Container.innerHTML = `${usuario} ${msg} ${Maiscula} ${MsgTrue.toUpperCase()}`;

    }else{
     
    close.style.display = 'block'; 
    let msg = "PRODUTO";
    let MsgFalse = "Existe mas você não selecionou o tamanho";

    Container.innerHTML = `${msg} ${Maiscula} ${MsgFalse.toUpperCase()}`;  
    
    }

    }else{

        console.log('não existe esse produto');
    }  
    
    });
    
  }
  
  render(){
    return ( 
    <div className='container'>
    
    <div>
      <div className='cho-container' />
    </div>

    <div className='menu'>
    
    <div className='Quadros-menu'>
     
    <a href='#' id='cadastrar' onClick={this.Opendiv}>Cadastrar</a>
    <a href='#' onClick={this.Login}>Login</a> 
    
    </div>
    <div className='Quadros-menu'>
    
    <p>Calcular frete</p>
    <input type='text' placeholder='Por favor digite o cep' id='correrios'/>
    <button onClick={this.calcular}>Calcular</button>
   
    </div>

    </div>
    <div className='form-cadastro'>

    <div className='close-form'>
    
    <img src={CloseImagem} width='25' id='close' onClick={this.Close}/> 
    
    </div>
    <div className='cadastrando'>

    <h1>DADOS PESSOAIS</h1>
    <p>Nome completo: </p>
    <input type='text' className='form-control' onChange={(e)=>this.setState({usuario:{nome:e.target.value}})} />
    <p>E-mail: </p>
    <input type='email' className='form-control' onChange={(e)=>this.setState({usuario:{email:e.target.value}})}/>
    <p>Cpf: </p>
    <input type='text' className='form-control' onChange={(e)=>this.setState({usuario:{cpf:e.target.value}})}/>
    <p>Data de nacimento:</p>
    <input type='text' className='form-control' onChange={(e)=>this.setState({usuario:{data:e.target.value}})}/>
    <p>Sexo:</p>
    <input type='text' className='form-control' onChange={(e)=>this.setState({usuario:{sexo:e.target.value}})}/>
    <p>Telefone:</p>
    <input type='text' className='form-control' onChange={(e)=>this.setState({usuario:{telefone:e.target.value}})}/>
    <h1>ENDEREÇO</h1>
    <p>Endereço:</p>
    <input type='text' className='form-control' onChange={(e)=>this.setState({usuario:{endereco:e.target.value}})}/>
    <p>Numero:</p>
    <input type='text' className='form-control' onChange={(e)=>this.setState({usuario:{numero:e.target.value}})}/>
    <p>Complemento:</p>
    <input type='text' className='form-control' onChange={(e)=>this.setState({usuario:{complemento:e.target.value}})}/>
    <p>Estado:</p>
    <input type='text' className='form-control' onChange={(e)=>this.setState({usuario:{estado:e.target.value}})}/>
    <p>Cidade:</p>
    <input type='text' className='form-control' onChange={(e)=>this.setState({usuario:{cidade:e.target.value}})}/>
    <h1>CADASTRO PARA LOGIN E SENHA </h1>
    <p>Nome de usuario:</p>
    <input type='text' className='form-control' onChange={(e)=>this.setState({usuario:{UsuarioNome:e.target.value}})}/>
    <p>Senha:</p>
    <input type='password' className='form-control' onChange={(e)=>this.setState({usuario:{senha:e.target.value}})}/>

    </div>
    <div className='form-dados-central'>
    
    <div className='Quadros-form-dados' id='Centralizando-logo'>
     
    <img src={ImgForm} className='img-fluid' />  

    </div>
    <div className='Quadros-form-dados'>
    
    
    <h1>DADOS PESSOAIS</h1>
    <p>Nome completo: </p>
    <input type='text' value={this.state.usuario.nome} id='values'/>
    <p>E-mail: </p>
    <input type='text' value={this.state.usuario.email} id='values'/>
    <p>Cpf: </p>
    <input type='text' value={this.state.usuario.cpf}  id='values'/>
    <p>Data de nacimento:</p>
    <input type='text' value={this.state.usuario.data}  id='values'/>
    <p>Sexo:</p>
    <input type='text' value={this.state.usuario.sexo}  id='values'/>
    <p>Telefone:</p>
    <input type='text' value={this.state.usuario.telefone}  id='values'/>
    <h1>ENDEREÇO</h1>
    <p>Endereço:</p>
    <input type='text' value={this.state.usuario.endereco}  id='values'/>
    <p>Numero:</p>
    <input type='text' value={this.state.usuario.numero}  id='values'/>
    <p>Complemento:</p>
    <input type='text' value={this.state.usuario.complemento}  id='values'/>
    <p>Estado:</p>
    <input type='text' value={this.state.usuario.estado}  id='values'/>
    <p>Cidade:</p>
    <input type='text' value={this.state.usuario.cidade}  id='values'/>
    <h1>CADASTRO PARA LOGIN E SENHA </h1>
    <p>Nome de usuario:</p>
    <input type='text' value={this.state.usuario.UsuarioNome}  id='values'/>
    <p>Senha:</p>
    <p>Por motivos de segurança preferimos não mostrar a senha</p>
    <input type='password' value={this.state.usuario.senha}  id='values'/>

    <button type='button' onClick={this.cadastrar}>Cadastrar</button>
    
    </div>  

    </div>
    </div>
    <div id='CloseDivSeo'>
    <div className='CloseDivSeo'>
      <button type='button' onClick={this.CloseDivSeo}><img src={CloseImagem} width='25' className='img-fluid'/></button>
    </div>
    <div className='result-system-seo' id='ResultSeo'>
    

    </div>
    </div>
    <div className='wallaper-header'>
      <header>
        <div className='cards'>
           <h1>SUPERSHOES</h1>
        </div>
        <div className='cards'>
            <form> 
             
            <input placeholder='O que você procura' id='pesquisar'></input>
            
            <input type='submit' value='Pesquisar' onClick={this.systemSeo} id='color'></input>

            </form>
        </div>
      </header>
    </div>
    <div className='Central-produtos'>
    
    {this.state.produto.map((data)=>{
     return(

     <div className='Quadros-produtos'>
     
     <div className='title'>
        <h1>{data.nome}</h1>
     </div>
     <div className='body'>
     
     <p>{data.descricao}</p>

     </div>
     <div className='body-imagem'>
     
     <img src={data.imagem} className='img-fluid' />  

     </div>
     <div className='body-valor'>
     
     <p>Valor:{data.valor}</p>  

     </div>
     <div className='title-tamanhos'>
       <p>Selecione o tamanho:</p>
     </div>
     <div className='body-tamanhos'>
     
     <input type='button' onClick={e=>this.Tamanhos(e.target.value, data.id)} id='Tamanho' value='35' />
     <input type='button' onClick={e=>this.Tamanhos(e.target.value, data.id)} id='Tamanho' value='36' />
     <input type='button' onClick={e=>this.Tamanhos(e.target.value, data.id)} id='Tamanho' value='37' />
     <input type='button' onClick={e=>this.Tamanhos(e.target.value, data.id)} id='Tamanho' value='38' />
     <input type='button' onClick={e=>this.Tamanhos(e.target.value, data.id)} id='Tamanho' value='39' />
     <input type='button' onClick={e=>this.Tamanhos(e.target.value, data.id)} id='Tamanho' value='40' />
     <input type='button' onClick={e=>this.Tamanhos(e.target.value, data.id)} id='Tamanho' value='41' />
     <input type='button' onClick={e=>this.Tamanhos(e.target.value, data.id)} id='Tamanho' value='42' />
     <input type='button' onClick={e=>this.Tamanhos(e.target.value, data.id)} id='Tamanho' value='43' />
     <input type='button' onClick={e=>this.Tamanhos(e.target.value, data.id)} id='Tamanho' value='44' />

     </div>

     <div className='buttons'>
     
     <button onClick={e=>this.ButtonsComprar(e.target.value, data.id)}>Comprar</button>
     <input type='hidden' value={data.id}/>
     
     </div>

     </div>

    );
    })}
    
    
    </div>
    </div>
  );

  }
}

export default App;
