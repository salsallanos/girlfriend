import React, { useEffect } from 'react'




export const Hearts = () => {
  
  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      let body = document.querySelector('body');
      let heart = document.createElement('span');
      let x = e.offsetX;
      let y = e.offsetY;
      heart.style.left = x + 'px';
      heart.style.top = y + 'px';
      
      body.appendChild(heart);

      setTimeout(() => {
        heart.remove()
      }, 1000);
    });
  }, [])

  return (
    <div>Hearts</div>
  )
}
