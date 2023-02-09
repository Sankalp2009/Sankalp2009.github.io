import { Box, Image, Text } from "@chakra-ui/react";
import '../App.css'
function Navbar(){
    return (
      <Box className="Nav" >

           <Box>
           <Image className="HomeImage" borderRadius="5px" w="80px" src="https://res.cloudinary.com/dn2q6aoex/image/upload/v1671442856/1c54f7b06d7723c21afc5035bf88a5ef_tnrlo4.png" alt="logo" />
           </Box>

           <Box className="Unicorn" >
            <Box>
            <a href="#home"> 
             Home
           </a>
            </Box>
            <Box>
                <a href="#about">
                 About
                </a>
            </Box>
            <Box>
                <a href="#skill">
              Skills
                </a>
            </Box>
            <Box>
                <a href="#project">
               Project
                </a>
            </Box>
            <Box>
                 <a href="#contact">
              Contact
                </a>
            </Box>
            <Box>
            <Text fontWeight="500" fontSize={['sm', 'sm', 'lg']}><a href="https://drive.google.com/file/d/1nG-WuMZcYLKbbO_htiwMn6lNmC3_A5C6/view?usp=sharing" rel="noreferrer" target="_blank">Resume</a></Text>
            </Box>
           </Box>
      </Box>   
    )
}
export default Navbar;