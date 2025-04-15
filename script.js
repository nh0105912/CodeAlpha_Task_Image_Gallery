  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.background = 'rgba(0, 0, 0, 0.4)';
  overlay.style.backdropFilter = 'blur(10px)';
  overlay.style.display = 'none';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';
  overlay.style.zIndex = '999';

 
  const popupImg = document.createElement('img');
  popupImg.style.maxWidth = '90vw';
  popupImg.style.maxHeight = '90vh';
  popupImg.style.borderRadius = '10px';
  popupImg.style.boxShadow = '0 0 20px rgba(0,0,0,0.6)';
  popupImg.style.transform = 'scale(0)';
  popupImg.style.transition = 'transform 0.4s ease';

  overlay.appendChild(popupImg);
  document.body.appendChild(overlay);


  document.querySelectorAll('.gallery-group img').forEach(img => {
    img.addEventListener('click', () => {
      popupImg.src = img.src;
      overlay.style.display = 'flex';

    
      setTimeout(() => {
        popupImg.style.transform = 'scale(1)';
      }, 10);
    });
  });


  overlay.addEventListener('click', () => {
    popupImg.style.transform = 'scale(0)';
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 300);
  });

