import React from 'react';

const Avatar = ({src, height = 45, text}) => {
  return (
    <span>
        <img src={src} height={height} width={height} alt='Profile picture'/>
        {text}
    </span>
  )
}

export default Avatar