import {useState} from "react";
import "./Modal.css";
import "./Card-modal.css";
import {useNavigate} from 'react-router-dom';
import {FaUserShield} from 'react-icons/fa';
import {BsFillShieldFill} from 'react-icons/bs';
import {AiOutlineSwapRight, AiFillSecurityScan, AiFillCreditCard} from 'react-icons/ai';
import Axios from 'axios';


function CardModal({ children, show, close }) {

  const [user, setUsername] = useState(' ')
  const [email, setEmail] = useState(' ')
  const [password, setPassword] = useState(' ')
  const [security_code, setSecurityCode] = useState(' ')
  const navigat = useNavigate()

  function handlePasswordSubmit(e){
    e.preventDefault();

      Axios.post('http://localhost:3000/profile/create', {
        user,
        email,
        password,
        security_code
      }).then(() =>{
        navigat('/dashboard')
      }).catch(err => console.log(err))   
   
    }

  
  return show ?(
    <div
    className="modal-backdrop"
    onClick={() => {
      // close modal when outside of modal is clicked
      close();
    }}
  >
    <div
      className="card-modal"
      onClick={e => {
        // do not close modal if anything inside modal content is clicked
        e.stopPropagation();
      }}
    >
      {children}

          <form className="form grid">
            {/* <span className={statusHolder}>{loginStatus}</span> */}
            <div className="inputDiv">
              <label className="label" htmlFor="user-form">Nome impresso</label>
              <div className="input flex label">
              <FaUserShield className="icon icon-form"/>
              <input type="text" id="user-form" className="user-form" placeholder="Digite o nome impresso"
               onChange={(event)=>{
                setUsername(event.target.value)
              }}
              />
              </div>
            </div>

            <div className="inputDiv">
              <label  className="label" htmlFor="email-form">Número do cartão</label>
              <div className="input flex label">
              <AiFillCreditCard className="icon icon-form"/>
              <input type="text" id="email-form" className="email-form" placeholder="Digite o numero do cartão"
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
  ): null;
}

export default CardModal;