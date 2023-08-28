import React from 'react'
import './sidebar.css'

// Imported Images ==========>
// import logo from '../../Assets/logo.png'

// imported Icons ===========>
import {MdLocalMovies} from 'react-icons/md'
import {SlSocialInstagram} from 'react-icons/sl'
import {MdOutlinePermContactCalendar} from 'react-icons/md'
import {BsCreditCard2Front, BsNewspaper} from 'react-icons/bs'
import {BsQuestionCircle} from 'react-icons/bs'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'

const Sidebar = () => {
  return (
    <div className='sideBar grid'>

      <div className="logoDiv flex">
        {/* <img src={logo} alt="Image Name" />` */}
        <h2>Weme Private</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          CATEGORIAS
        </h3>
        <ul className="menuLists grid">

          <li className="listItem">
            <a href="#" className='menuLink flex'>
                <SlSocialInstagram className="icon"/>
                <span className="smallText">
                  Rede Sociais
                </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
                <MdLocalMovies className="icon"/>
                <span className="smallText">
                  Filmes & Apps
                </span>
            </a>
          </li>
          
          <li className="listItem">
            <a href="#" className='menuLink flex'>
            <BsCreditCard2Front className="icon"/>
                <span className="smallText">
                  Identidade
                </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
                <BsNewspaper className="icon"/>
                <span className="smallText">
                  Notícias
                </span>
            </a>
          </li>

        </ul>
      </div>


      <div className="settingsDiv">
        <h3 className="divTitle">
          CONFIGURAÇÕES
        </h3>
        <ul className="menuLists grid">
          
          <li className="listItem">
            <a href="#" className='menuLink flex'>
                <MdOutlinePermContactCalendar className="icon"/>
                <span className="smallText">
                  Contact
                </span>
            </a>
          </li>

          <li className="listItem logOutBtn">
            <a href="/" className='menuLink flex'>
                <BsFillArrowLeftCircleFill className="icon"/>
                <span className="smallText">
                  Sair
                </span>
            </a>
          </li>

        </ul>
      </div>

      <div className="sideBarCard">
        <BsQuestionCircle className="icon"/>
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>Quer saber mais?</h3>
          <p> Combinamos design e tecnologia para criar produtos digitais.</p>

          <a href="https://www.weme.com.br/" target='_blank' rel="noreferrer"><button className='btn'>Ver site</button></a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar