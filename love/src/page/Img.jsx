import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import LazyLoad from 'react-lazyload';

function Img() {
  const itemData = [];
  for (let i = 1; i <= 25; i++) {
    itemData.push({
      img: `https://raw.githubusercontent.com/Uri2803/love/main/img/img_${i}.JPG`, // Đổi đường dẫn ở đây
      title: `Image ${i}`,
    });
  }

  return (
    <>
      <ImageList sx={{ width: 'auto', height: '100vh' }} variant="woven" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            
              <img
                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=161&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{ transition: 'opacity 0.5s ease-in-out', opacity: 1 }}
              />
      
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}

export default Img;
