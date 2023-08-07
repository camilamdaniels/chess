const { Box } = require('@mui/material')
const { styled, fontSize } = require('@mui/system')

const CustomBox = styled(Box)(() => ({
    // backgroundColor: '#fff',
    borderRadius: '1rem',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    color: '#e75480',
    fontSize: '6rem'
}))

export default CustomBox