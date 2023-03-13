import React from 'react'
import { BsLinkedin, BsTwitter} from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';


const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsTwitter />
        </div>
        <div>
            <BsLinkedin />
        </div>
        <div>
            <FaGithub />
        </div>
    </div>
  )
}

export default SocialMedia