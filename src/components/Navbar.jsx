import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'

const Navbar = () => (
    <Stack 
    direction = "row"
    alignItems="center"
    p={2}
    sx={{position: 'sticky',
     background: 'white',
     top: 0, justifyContent: 'space-between'}}>

    <Link to = "/" style = {{display: 'flex', alignItems: 'center'}}>
      <img src = {logo} alt = "logo" height={45}/>
    </Link>
    <div style={{ 
      color: 'black',
      fontSize: 40,
      fontWeight: 'bold'
    }}>
    <span style={{ color: 'black', letterSpacing: 2 }}>You</span>
      <span style={{ color: 'white', backgroundColor: 'red', borderRadius: 4, letterSpacing: 2, padding: 2 }}>Tube</span>
    </div>
    <SearchBar/>
    </Stack>
  )


export default Navbar