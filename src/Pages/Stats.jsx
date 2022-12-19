import React from 'react'
import { Box, Flex, VStack } from '@chakra-ui/react'
const Stats = () => {
  return (
    <Box>
      <VStack>
      <Box>

      <Flex>
      <Box w={["100%", "97%", "60%"]} m="auto"p={2} marginRight={"-5px"}>
      <img src="https://github-readme-stats.vercel.app/api/top-langs?username=sankalp2009&show_icons=true&locale=en&layout=compact" alt="sankalp2009" />
      </Box>
      <Box w={["100%", "97%", "60%"]} m="auto" marginRight={"-5px"}>
      <img  src="https://github-readme-stats.vercel.app/api?username=sankalp2009&show_icons=true&locale=en" alt="sankalp2009" />
      </Box>
      <Box w={["100%", "97%", "60%"]} m="auto"p={2}>
         <img src="https://github-readme-streak-stats.herokuapp.com/?user=sankalp2009&" alt="sankalp2009" />
      </Box>
      </Flex>

      </Box>
    </VStack>
    </Box>
  )
}
export default Stats