import React from 'react';

import './Footer.css';

// MUI
import Tooltip from '@mui/material/Tooltip';

import IconButton from '@mui/material/IconButton';

// ÍCONOS REDES
import InstagramIcon from '@mui/icons-material/Instagram';

import XIcon from '@mui/icons-material/X';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import YouTubeIcon from '@mui/icons-material/YouTube';

import GoogleIcon from '@mui/icons-material/Google';

function Footer() {
  return (
    <div className='Footer'>
      <Tooltip title="Instagram">
        <IconButton>
          <a href="https://instagram.com">
            <InstagramIcon />
          </a>
        </IconButton>
      </Tooltip>

      <Tooltip title="X">
        <IconButton>
          <a href="https://x.com">
            <XIcon />
          </a>
        </IconButton>
      </Tooltip>

      <Tooltip title="WhatsApp">
        <IconButton>
          <a href="https://whatsapp.com">
            <WhatsAppIcon />
          </a>
        </IconButton>
      </Tooltip>

      <Tooltip title="YouTube">
        <IconButton>
          <a href="https://youtube.com">
            <YouTubeIcon />
          </a>
        </IconButton>
      </Tooltip>

      <Tooltip title="Gmail">
        <IconButton>
          <a href="https://gmail.com">
            <GoogleIcon />
          </a>
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default Footer;