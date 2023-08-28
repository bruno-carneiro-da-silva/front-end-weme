import React, { useState } from 'react'
import './top.css'

// Imported Icons ===========>
import {BiSearchAlt} from 'react-icons/bi'
import {TbMessageCircle} from 'react-icons/tb'
import {MdOutlineNotificationsNone} from 'react-icons/md'
import {BsQuestionCircle} from 'react-icons/bs'
import Modal from '../Top Section/Modal/Modal'
import CardModal from '../Top Section/Modal/CardModal'



// Imported Image =========>
import img from '../../../Assets/user (3).png'
import wallpaper from '../../../Assets/video-wallpaper.png'

const Top = () => {

  const [modalShown, toggleModal] = useState(false);
  const [modalShow, toggleModalCard] = useState(false);

  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title">
          <h1>Bem vindo ao Private.</h1>
          <p>Olá, Bem vindo de volta!</p>
        </div>

        <div className="searchBar flex">
           <input type="text"  placeholder='Pesquisar'/>
           <BiSearchAlt className="icon"/>
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className="icon"/>
          <MdOutlineNotificationsNone className="icon"/>
          <div className="adminImage">
            <img src={img} alt="Admin Image" />
          </div>
        </div>

      </div>

      <div className="cardSection flex">

        <div className="rightCard flex">
          <h1>Gerencie todos os seus dados num só lugar.</h1>
          <p>Foi pensando em sua necessidade de gerenciar tantas informações que criamos o weme private.</p>

          <div className="buttons flex">
                <button className='btn'
                onClick={() => {
                  toggleModalCard(!modalShow);
                }}
                >+ Dados de Cartões</button>

                <CardModal
                  show={modalShow}
                  close={() => {
                    toggleModalCard(false);
                  }}
                >
                  
                </CardModal>

                <button className='btn transparent' 
                 onClick={() => {
                  toggleModal(!modalShown);
                }}
                >+ Outros Dados</button>
                <Modal
                  shown={modalShown}
                  close={() => {
                    toggleModal(false);
                  }}
                >
                  
                </Modal>
          </div>

          <div className="videoDiv">
          <img src={wallpaper} alt="Admin Image" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Top