import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function Img() {
    const itemData = [];
    for (let i = 1; i <= 25; i++) {
      itemData.push({
        img: `https://raw.githubusercontent.com/Uri2803/love/main/img/img${i}.JPG`, // Đổi đường dẫn ở đây
        title: `Image ${i}`,
      });
    }
    
  return (
    <div>
      <h1>ComponentName</h1>
      {/* <Grid container spacing={1}>
            <Grid xs={9} sm={4}>
              <img src={bgImage} alt="Background" style={{ width: '100%', height: 'auto' }} />
            </Grid>
            <Grid item xs={12} sm={6}>
   
            </Grid>
          </Grid> */}
    </div>
  );
}

export default Img;
