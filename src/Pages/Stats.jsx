import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import '../App.css'
const Stats = () => {
  return (
    <Box id="stats">
      <Box className="Ray">
       <Box>
       <Image className="statImage" src="https://github-readme-stats.vercel.app/api/top-langs?username=sankalp2009&show_icons=true&locale=en&layout=compact" alt="sankalp2009" />
       </Box>
       <Box>
       <Image  src="https://github-readme-stats.vercel.app/api?username=sankalp2009&show_icons=true&locale=en" alt="sankalp2009" />
       </Box>
       <Box>
       <Image src="https://github-readme-streak-stats.herokuapp.com/?user=sankalp2009&" alt="sankalp2009" />
       </Box>
    </Box>
    </Box>
    
  )
}
export default Stats