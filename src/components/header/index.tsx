import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import './index.css'



const menuItems = [
  {
    label: "HOME",
    value: '/home',
    className: 'home-menu-item'
  },

  {
    label: 'FASHION STYLE',
    value: '/',
    className: 'fashion-style-menu-item'
  },
  {
    label: 'APPLE WATCH',
    value: '/apple-watch',
    className: 'apple-watch-menu-item'
  },
  {
    label: 'IPHONE',
    value: '/',
    className: 'iphone-menu-item'
  },
]
export default function Header() {
  return (
    <Grid className='header' container >
      <Grid className='header-upper' xs={12} container justifyContent={'space-between'}>
        <Grid item >
          <Typography color='white' variant='body2'>
            Afterpay, Laybuy & Genoapay | Free Delivery New Zealand + Australia*
          </Typography>
        </Grid>
        <Grid item>
          <Typography color='white' variant='body2'>
            Sign In
          </Typography>
        </Grid>
      </Grid>

      <Grid className='header-lower' xs={12} container justifyContent={'space-between'}>
        <Grid item>
          <img alt='Header Logo' src="/images/components/header/logoHeader.svg" />
        </Grid>
        <Grid item></Grid>
        <Grid item></Grid>
      </Grid>
    </Grid>
  )
}

