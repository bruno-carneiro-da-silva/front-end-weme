import {useState} from "react";
import './Register.css'
import '../../App.css'
import {Link, useNavigate} from 'react-router-dom'
import {BsFillShieldFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'

import Axios from 'axios'




import video from '../../LoginAssets/video.gif'
import logo from '../../LoginAssets/logo.png'


const Register = () =>{
  //useState para pegar valores dos inputs
  const [email, setEmail] = useState({email: ''})
  const [name, setUserName] = useState({name: ''})
  const [password, setPassword] = useState({password: ''})

  const navigat = useNavigate()

  function handleCreateUser(e){
    e.preventDefault();

    // eslint-disable-next-line react-hooks/rules-of-hooks
   
      Axios.post('http://localhost:3000/register', {
        name,
        email,
        password
      }).then((res) =>{
        console.log(res)
        navigat('/');
      }).catch(err => console.log(err))   
   
  }

  return(
    <div className="registerPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <img src={video}/>

          <div className="textDiv">
            <h2 className="title">Weme Private - Gerencia suas senhas</h2>
            <p>Todas as senhas que você tem em um lugar</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Se já possui uma conta</span>
            <Link to={'/'}>
            <button className="btn">Entrar</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo image" />
            <h3>Crie seu cadastro!</h3>
          </div>


          <form action="" className="form grid">
          
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
              <MdEmail className="icon"/>
              <input type="email" id="email" placeholder="Digite seu email"
              onChange={(event)=>{
                setEmail(event.target.value)
              }}  
              />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="username">Usuario</label>
              <div className="input flex">
              <BsFillShieldFill className="icon"/>
              <input type="text" id="username" placeholder="Digite seu usuáro" 
              onChange={(event)=>{
                setUserName(event.target.value)
              }}
              />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Senha</label>
              <div className="input flex">
              <BsFillShieldFill className="icon"/>
              <input type="password" id="password" placeholder="Digite seu senha" 
              onChange={(event)=>{
                setPassword(event.target.value)
              }}
              />
              </div>
            </div>

            <button type="submit" className="btn flex" onClick={handleCreateUser}>
              <span>Cadastrar</span>
              <AiOutlineSwapRight className="icon"/>
            </button>
          </form>
        </div>
      </div>
            
    </div>
  )
}

export default Register;