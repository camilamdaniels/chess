import Board from "./components/Board";
import Header from "./components/Header";
import CustomBox from "./components/CustomBox";
import { Box, Button } from '@mui/material'
import ButtonWrapper from "./components/ButtonWrapper";

const gridTemplateLargeScreens = `
  ". . . b b b"
  "c c . b b b"
  ". . . b b b"
  "a a . b b b"
  "a a . b b b"
  "a a . b b b"
  ". . . b b b"
`

function App() {
  return (
    <Box
      width='100%'
      height='100%'
      display='grid'
      gap='1rem'
      sx={
          {
            gridTemplateColumns: 'repeat(6, minmax(55px, 1fr))',
            gridTemplateRows: 'repeat(3, minmax(50px, 1fr))',
            gridTemplateAreas: gridTemplateLargeScreens
          } 
      }
    >
      <CustomBox gridArea='a'>
        <Header gridArea='a'/>
      </CustomBox>
      <CustomBox gridArea='b'>
        <Board />
      </CustomBox>
      <CustomBox gridArea='c'>
        <ButtonWrapper />
      </CustomBox>
    </Box>
  );
}

export default App;
