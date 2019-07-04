import React from 'react';

import splash from './../assets/images/splash.jpg';



const splashImage = {
  splashImage: `url(${splash})`
};

export default function Splash() {

  return (
    <div style={splashImage}>
      is anyone there
    </div>

  );
}
