import { Box, Icon, Text, Heading } from "@chakra-ui/react";
import { AiOutlineMail, AiOutlineGithub, AiOutlineLinkedin, AiFillPhone,AiOutlineWhatsApp } from "react-icons/ai";
import '../App.css'
function Contact()
{
    return (
      <Box id="contact">
         <Box className="bud">
     <Heading as='h2' size='xl'>CONTACT ME</Heading>
     <Box className="Tyson" >
        <Box>
        <Icon as={AiFillPhone} w={["40px", "30px", "40px"]} h="50px" color='white' /> : <Icon as={AiOutlineWhatsApp} w={["40px", "30px", "40px"]} h="50px" color='white' />
        <Text textDecoration="none" fontSize={["sm", "md", "xl"]}>+918827668573</Text>
        </Box>
        <Box>
        <Icon as={AiOutlineMail} w={["40px", "30px", "40px"]} h="50px" color='white' />
       <Text fontSize={["sm", "md", "xl"]}>sankalppatel38@gmail.com</Text> 
        </Box>
        <Box>
        <Icon as={AiOutlineGithub} w={["40px", "30px", "40px"]} h="50px" color='white' />
        <Text textDecoration="none" fontSize={["sm", "md", "xl"]}><a href="https://github.com/Sankalp2009" rel="noreferrer" target="_blank">GitHub</a></Text>
        </Box>
        <Box>
        <Icon as={AiOutlineLinkedin} w={["40px", "30px", "40px"]} h="50px" color='white' />
        <Text textDecoration="none" fontSize={["sm", "md", "lg"]}><a href="https://www.linkedin.com/in/sankalp-patel-08b76017b/" rel="noreferrer" target="_blank">Linkedin</a></Text>
        </Box>
     </Box>
       </Box>
      </Box>
        
    ) 
}
export default Contact;