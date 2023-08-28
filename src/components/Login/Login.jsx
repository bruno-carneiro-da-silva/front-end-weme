import {React, useState, useEffect} from "react";
import './Login.css'
import '../../App.css'
import {Link, useNavigate} from 'react-router-dom'
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
import Axios from 'axios'



import video from '../../LoginAssets/video.gif'
import logo from '../../LoginAssets/logo.png'


const Login = () =>{
 
  const [email, setEmail] = useState(' ')
  const [password, setPassword] = useState(' ')
  const navigate = useNavigate()

  const [loginStatus, setLoginStatus] = useState(' ')
  const [statusHolder, setStatusHolder] = useState('message')
  const apiUrl = 'http://localhost:3000/login'
  const token = localStorage.getItem('token')

  

  function handleUserLogin(e){
    e.preventDefault()

    // eslint-disable-next-line react-hooks/rules-of-hooks
   
      Axios.post(apiUrl, {
        headers: {
          'Content-type': 'application/json',
          Authorization:  `Bearer ${token}`
        },
        email,
        password
      }).then((data) =>{
        if(!data.data || loginStatus == '' || statusHolder == ''){
          setLoginStatus('Email ou senha inválidos')
          navigate('/')
        }else{
          localStorage.setItem('token', data.data.token)
          navigate('/dashboard');
        }
      }).catch(err => console.log(err))   
   
    }

    useEffect(()=>{
      if(loginStatus !== ' '){
        setStatusHolder('showMessage')
        setTimeout(()=>{
          setStatusHolder('message')
        }, 4000)
      }
    },[loginStatus])

    const onSubmit = () =>{
      setEmail('')
      setPassword('')

    }

  return(
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <img src={video}/>

          <div className="textDiv">
            <h2 className="title">Weme Private - Gerencia suas senhas</h2>
            <p>Todas as senhas que você tem em um lugar</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Não possui uma conta?</span>
            <Link to={'./register'}>
            <button className="btn">Cadastre-se</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo image" />
            <h3>Bem vindo de volta!</h3>
          </div>


          <form onSubmit={onSubmit} className="form grid">
            <span className={statusHolder}>{loginStatus}</span>
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
              <FaUserShield className="icon"/>
              <input type="text" id="email" autoComplete="off" placeholder="Digite seu email"
               onChange={(event)=>{
                setEmail(event.target.value)
              }}
              />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Senha</label>
              <div className="input flex">
              <BsFillShieldFill className="icon"/>
              <input type="password" id="password" placeholder="Digite sua Senha"
              onChange={(event)=>{
                setPassword(event.target.value)
              }}
              />
              </div>
            </div>

            <button type="submit" className="btn flex" onClick={handleUserLogin}>
              <span>Entrar</span>
              <AiOutlineSwapRight className="icon"/>
            </button>


            <span className="forgotPassword">
              Esqueceu a senha? <a href="">Clique aqui</a>
            </span>
          </form>
        </div>
      </div>
            
    </div>
  )
}

export default Login;