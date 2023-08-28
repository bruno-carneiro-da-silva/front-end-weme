import './ModalListing.css'
import {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom'
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldFill} from 'react-icons/bs'
import {AiOutlineSwapRight, AiFillSecurityScan, AiFillDelete} from 'react-icons/ai'
import {MdMarkEmailRead} from 'react-icons/md'
import {CgWebsite} from 'react-icons/cg'
import Axios from 'axios'


function ModalListing({ children, shown, close }) {
  const [name, setName] = useState('')
  const [user, setUsername] = useState(' ')
  const [email, setEmail] = useState(' ')
  const [password, setPassword] = useState(' ')
  const [website, setWebsite] = useState(' ')
  const [security_code, setSecurityCode] = useState(' ')
  const navigat = useNavigate()

  const token = localStorage.getItem('token')
  const apiUrl = 'http://localhost:3000/profile/create'


  function handleDataSubmit(e){
    e.preventDefault();

      Axios.put(apiUrl, {
        headers: {
          'Content-type': 'application/json',
          Authorization: token,
        },
        name,
        user,
        email,
        password,
        website,
        security_code
      }).then(() =>{
        navigat('/dashboard')
      }).catch(err => console.log('cair no catch', err))   
   
    }

    useEffect(()=> {
    Axios.get('http://localhost:3000/profile/list', {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      name,
      user,
      email,
      password,
      website,
      security_code
    }).then((res) =>{
      console.log(res)
    }).catch(err => console.log('cair no catch', err))

  })


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
            {/* <span className={statusHolder}>{loginStatus}</span> */}
            <div className="inputDiv">
              <label className="label" htmlFor="user-form">Nome ou Titulo</label>
              <div className="input flex label">
              <FaUserShield className="icon icon-form"/>
              <input type="text" id="user-form" className="user-form" value={user} 
               onChange={(event)=>{
                setUsername(event.target.value)
              }}
              />
              </div>
            </div>

            <div className="inputDiv">
              <label  className="label" htmlFor="email-form">Email</label>
              <div className="input flex label">
              <MdMarkEmailRead className="icon icon-form"/>
              <input type="text" id="email-form" className="email-form" value={email} 
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
              <input type="password" className="password-form" value={password} id="password-form" 
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
              <input type="text" id="website-form" value={website} className="website-form" 
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
              <input type="text" id="code-form" value={security_code} className="code-form" 
               onChange={(event)=>{
                setSecurityCode(event.target.value)
              }}
              />
              </div>
            </div>

            <div className="secContainer flex">

            <button type="submit" className="btn flex btn-form" onClick={handleDataSubmit}>
              <span>Salvar</span>
              <AiOutlineSwapRight className="icon"/>
            </button>

            <button type="submit" className="btn flex btn-form-exclude" onClick={handleDataSubmit}>
              <span>Excluir</span>
              <AiFillDelete className="icon"/>
            </button>
            </div>
        </form>

      </div>
    </div>
  ) : null;
}

export default ModalListing;