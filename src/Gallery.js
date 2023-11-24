import React, { useState } from 'react';
import './Gallery.css';
import img1 from './content/gallery/sb1.png';
import img2 from './content/gallery/sb2.png';
import img3 from './content/gallery/sb3.png';
import img4 from './content/gallery/sb4.png';
import img5 from './content/gallery/sb5.png';
import img6 from './content/gallery/sb6.png';
import img7 from './content/gallery/sb7.png';
import img8 from './content/gallery/sb8.png';
import img9 from './content/gallery/sb9.png';
import img10 from './content/gallery/sb9.png';
// ... (import other images)

const Gallery = () => {
  const data = [
    { id: 1, imgsrc: img1 },
    { id: 2, imgsrc: img2 },
    { id: 3, imgsrc: img3 },
    { id: 4, imgsrc: img4 },
    { id: 5, imgsrc: img5 },
    { id: 6, imgsrc: img6 },
    { id: 7, imgsrc: img7 },
    { id: 8, imgsrc: img8 },
    { id: 9, imgsrc: img9 },
    { id: 10,imgsrc: img10}
    // ... (add other images)
  ];

  const [enlargedImg, setEnlargedImg] = useState(null);

  const handleImageClick = (imgSrc) => {
    setEnlargedImg(imgSrc);
  };

  return (
    <>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div className="pics" key={index} onClick={() => handleImageClick(item.imgsrc)}>
              <img src={item.imgsrc} alt={`Image ${index + 1}`} />
            </div>
          );
        })}
      </div>

      {enlargedImg && (
        <div className="enlarged-container" onClick={() => setEnlargedImg(null)}>
          <img src={enlargedImg} alt="Enlarged" className="enlarged-img" />
        </div>
      )}
    </>
  );
};

export default Gallery;
