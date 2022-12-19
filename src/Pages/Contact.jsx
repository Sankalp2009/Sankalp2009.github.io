import { Box, Icon, Text } from "@chakra-ui/react";
import { AiOutlineMail, AiOutlineGithub, AiOutlineLinkedin, AiFillPhone,AiOutlineWhatsApp } from "react-icons/ai";
import "./Page.css";

function Contacts()
{
    return <Box id="Contact" bg="#a6a6a6" color="#0a1929" p="60px 0px" pt="75px">
        <Box w={["85%", "85%", "85%"]} m="auto" textAlign="center" p="60px auto" display={["inline", "inline", "flex"]} justifyContent="space-between">
            <Box>
                <Box p={["15px", "38px", "15px"]}>
                    <Text fontWeight="400" fontSize={["3xl", "4xl", "5xl"]} textAlign={["center", "left", "left"]}>Contact Me</Text>
                    <Box display={["inline", "flex", "flex"]} gap={["", "10px", "15px"]} alignItems="center">
                        <Icon as={AiFillPhone} w={["40px", "30px", "40px"]} h="50px" color='white' /> : <Icon as={AiOutlineWhatsApp} w={["40px", "30px", "40px"]} h="50px" color='white' />
                        <Text textDecoration="none" fontSize={["sm", "md", "xl"]}>+918827668573</Text>
                    </Box>
                    <Box display={["inline", "flex", "flex"]} gap={["", "10px", "15px"]} alignItems="center">
                        <Icon as={AiOutlineMail} w={["40px", "30px", "40px"]} h="50px" color='white' />
                        <Text fontSize={["sm", "md", "xl"]}>sankalppatel38@gmail.com</Text>
                    </Box>
                    <Box display={["inline", "flex", "flex"]} gap={["", "10px", "15px"]} alignItems="center">
                        <Icon as={AiOutlineGithub} w={["40px", "30px", "40px"]} h="50px" color='white' />
                        <Text textDecoration="none" fontSize={["sm", "md", "xl"]}><a href="https://github.com/Sankalp2009" rel="noreferrer" target="_blank">GitHub</a></Text>
                    </Box>
                    <Box display={["inline", "flex", "flex"]} gap={["", "7px", "15px"]} alignItems="center">
                        <Icon as={AiOutlineLinkedin} w={["40px", "30px", "40px"]} h="50px" color='white' />
                        <Text textDecoration="none" fontSize={["sm", "md", "lg"]}><a href="https://www.linkedin.com/in/sankalp-patel-08b76017b/" rel="noreferrer" target="_blank">Linkedin</a></Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
}
export default Contacts;