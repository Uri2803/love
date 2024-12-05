import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Img() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  connst [currentIndex, setCurrentIndex] = useState(0);

  const itemData = Array.from({ length: 25 }, (_, i) => ({
    img: `https://raw.githubusercontent.com/Uri2803/love/main/img/img_${i + 1}.JPG`,
    title: `Image ${i + 1}`,
  }));

  const handleClickOpen = (index) => {
    setCurrentIndex(index);
    setSelectedImage(itemData[index].img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % itemData.length;
    setCurrentIndex(newIndex);
    setSelectedImage(itemData[newIndex].img);
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + itemData.length) % itemData.length;
    setCurrentIndex(newIndex);
    setSelectedImage(itemData[newIndex].img);
  };

  return (
    <>
      <ImageList sx={{ width: 'auto', height: '100vh' }} variant="woven" cols={3} gap={8}>
        {itemData.map((item, index) => (
          <ImageListItem key={item.img} onClick={() => handleClickOpen(index)} style={{ cursor: 'pointer' }}>
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

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <IconButton
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            color: 'white',
          }}
        >
          <CloseIcon />
        </IconButton>

        {selectedImage && (
          <>
            <IconButton
              onClick={handlePrev}
              style={{
                position: 'absolute',
                left: 10,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'white',
                
              }}
            >
              <ArrowBackIosIcon />
            </IconButton>

            <img
              src={selectedImage}
              alt="Selected"
              style={{ width: '100%', height: 'auto' }}
            />

            <IconButton
              onClick={handleNext}
              style={{
                position: 'absolute',
                right: 10,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'white',
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </>
        )}
      </Dialog>
    </>
  );
}

export default Img;
