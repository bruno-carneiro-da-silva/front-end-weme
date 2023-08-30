import { useState, useEffect } from 'react'
import ModalListing from '../Listing Section/ModalListing/ModalListing'
import './listing.css'

// imported icons ===========>
import {AiFillHeart} from 'react-icons/ai'
import {BsArrowRightShort} from 'react-icons/bs'
import Axios from 'axios'

// imported Images ===========>
import img from '../../../Assets/image (1).png'

const Listing = () => {
  const [names, setNames] = useState([]);
  const [modalShown, toggleModal] = useState(false);
  const token = localStorage.getItem('token');
  const apiURL = 'http://localhost:3000/profile/list/${id}';

  useEffect(() => {
    Axios.get(apiURL, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {const data = res.data; setNames(data)})
      .catch((err) => console.log('Error', err));
  }, []);

  return (
    <div className='lisitingSection'>
      <div className="heading flex">
        <h1>Minhas Senhas</h1>
        <button className='btn flex'>
          Ver mais <BsArrowRightShort className="icon"/>
        </button>
      </div>

      <div className="secContainer flex">
        {names.map((item, i) => (
          <div
            key={i}
            className="singleItem"
            onClick={() => {
              toggleModal(true);
            }}
          >
            <AiFillHeart className="icon" />
            <img src={img} alt="Image Name" />
            <h3>{item.name}</h3>
          </div>
        ))}
        <ModalListing
          shown={modalShown}
          close={() => {
            toggleModal(false);
          }}
        >
        </ModalListing>
      </div>
    </div>
  );
};

export default Listing
