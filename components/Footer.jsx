import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineYoutube, AiOutlineGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Ion Tech by Era Writer. All rights reserverd.</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiOutlineFacebook />
        <AiOutlineLinkedin />
        <AiOutlineYoutube />
        <AiOutlineGithub />
      </p>
    </div>
  )
}

export default Footer