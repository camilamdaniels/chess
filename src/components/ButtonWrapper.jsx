import React from 'react'
import { Button, Box } from '@mui/material'
import { fontSize } from '@mui/system'

const ButtonWrapper = () => {
  return (
    <>  
        <Button
          style={{
            backgroundColor: '#e75480',
            color: '#fff',
            fontFamily: 'Space Mono',   
            fontSize: '1.5rem',
            width: '200px'
          }}
        >
          START
        </Button>
    </>
  )
}

export default ButtonWrapper