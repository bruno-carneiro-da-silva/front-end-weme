import {useState} from "react";
import "./Modal.css";
import {useNavigate} from 'react-router-dom'
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldFill} from 'react-icons/bs'
import {AiOutlineSwapRight, AiFillSecurityScan} from 'react-icons/ai'
import {MdMarkEmailRead} from 'react-icons/md'
import {CgWebsite} from 'react-icons/cg'
import Axios from 'axios'


function Modal({ children, shown, close }) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [website, setWebsite] = useState('')
  const [security_code, setSecurityCode] = useState('')
  const navigat = useNavigate()

  const token = localStorage.getItem('token')
  const apiURl = 'http://localhost:3000/profile/create';

  function handlePasswordSubmit(e){
    e.preventDefault();

      Axios.post(apiURl, {
        headers: {
          'Content-type': 'application/json',
          Authorization: token
        },
        name,
        email,
        password,
        website,
        security_code,
      }).then((res) =>{
        console.log(res)
        navigat('/dashboard')
      }).catch(err => console.log('cair no catch', err))   
   
    }
  return shown ? (
    <div
      className="modal-backdrop"
      onClick={() => {
        // close modal when outside of modal is clicked
        close();
      }}
    >
      <div
        className="modal-content"
        onClick={e => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        {children}

        <form className="form grid">
            <div className="inputDiv">
              <label className="label" htmlFor="user-form">Nome ou Titulo</label>
              <div className="input flex label">
              <FaUserShield className="icon icon-form"/>
              <input type="text" id="user-form" className="user-form" placeholder="Digite um nome ou titulo"
               onChange={(event)=>{
                setName(event.target.value)
              }}
              />
              </div>
            </div>

            <div className="inputDiv">
              <label  className="label" htmlFor="email-form">Email</label>
              <div className="input flex label">
              <MdMarkEmailRead className="icon icon-form"/>
              <input type="text" id="email-form" className="email-form" placeholder="Digite seu email"
               onChange={(event)=>{
                setEmail(event.target.value)
              }}
              />
              </div>
            </div>

            <div className="inputDiv">
              <label className="label" htmlFor="password-form">Senha</label>
              <div className="input flex label">
              <BsFillShieldFill className="icon icon-form"/>
              <input type="password" className="password-form" id="password-form" placeholder="Digite sua Senha"
              onChange={(event)=>{
                setPassword(event.target.value)
              }}
              />
              </div>
            </div>

            <div className="inputDiv">
              <label className="label" htmlFor="website-form">Website</label>
              <div className="input flex label">
              <CgWebsite className="icon icon-form" />
              <input type="text" id="website-form" className="website-form" placeholder="Digite o site"
               onChange={(event)=>{
                setWebsite(event.target.value)
              }}
              />
              </div>
            </div>
            <div className="inputDiv">
              <label className="label" htmlFor="code-form">Código</label>
              <div className="input flex label">
              <AiFillSecurityScan className="icon icon-form"/>
              <input type="text" id="code-form" className="code-form" placeholder="Digite o código de segurança"
               onChange={(event)=>{
                setSecurityCode(event.target.value)
              }}
              />
              </div>
            </div>

            <button type="submit" className="btn flex btn-form" onClick={handlePasswordSubmit}>
              <span>Enviar</span>
              <AiOutlineSwapRight className="icon"/>
            </button>
        </form>

      </div>
    </div>
  ) : null;
}
export default Modal;