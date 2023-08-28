import { useState, useEffect } from 'react'
import ModalListing from '../Listing Section/ModalListing/ModalListing'
import './listing.css'

// imported icons ===========>
import {AiFillHeart} from 'react-icons/ai'
import {BsArrowRightShort} from 'react-icons/bs'
import Axios from 'axios'

// imported Images ===========>
import img from '../../../Assets/image (1).png'

const Listing = ({ children, shown, close }) => {
  const [name, setName] = useState('')
  const [modalShown, toggleModal] = useState(false);
  const apiUrl = 'http://localhost:3000/profile'


  useEffect(()=>{
    Axios.get(apiUrl, {
      headers: {
        'Content-type': 'application/json',
        Authorization:  localStorage.getItem('token')
      },
      body: JSON.stringify({
        name,
      })
    }).then((res) =>{
      console.log(res)
    }).catch(err => console.log(err)) 
  },[name])


  return (
    <div className='lisitingSection'>
      <div className="heading flex">
        <h1>Minhas Senhas</h1>
        <button className='btn flex'>
          Ver mais <BsArrowRightShort className="icon"/>
        </button>
      </div>

      <div className="secContainer flex">
            <div className="singleItem"
            onClick={() => {
              toggleModal(!modalShown);
            }}
            >
              <AiFillHeart className="icon" />
              <img src={img} alt="Image Name" />
              <h3>{name}</h3>
            </div>
            <ModalListing
                  shown={modalShown}
                  close={() => {
                    toggleModal(false);
                  }}
                >
            </ModalListing>
      </div>
    </div>
  )
}

export default Listing