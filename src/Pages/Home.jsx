import { DownloadIcon } from "@chakra-ui/icons";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import {  AiOutlineGithub, AiOutlineLinkedin} from "react-icons/ai";
import About from './About'
import '../App.css'
import Skills from './Skills'
import Projects from './Project'
import Calender from './Calender';
import Stats from './Stats';
import Contact from './Contact';
function Home()
{
//! Small,med,large(Inline)
    return (
        <Box>
           <Box id="home" bg={"#0b1120"} mb={5}>
            <Box w="100.1156%" ml="-1.069px" pt={["100px", "50px", "50px"]} color="#0a192f"  bg={"#0b1120"}>
                <Box h="574px" w="85%" color= "#ffffff" m="auto"  display={["flex", "flex", "flex"]} alignItems="center" justifyContent="space-around">
                    <Box mt={["50px", "50px", "0px"]} w={["100%", "100%", "60%"]}>
                        <Box textAlign="left" pl={["20px", "60px", "20px"]}>
                            <Text fontSize={"6xl"}>👋</Text>
                            <Text color ='#e0e6ee' fontFamily="cursive" fontSize={["4xl", "5xl", "5xl"]}>Sankalp Patel</Text>
                            <Box color="#3ed5cb" fontFamily="sans-serif" fontSize={["2xl", "3xl", "4xl"]}>
                                <Typewriter
                                    options={{
                                        strings: [
                                        "I'm a MERN Stack  Developer.",
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 150,
                                    }}
                                />
                            </Box>
                            <Button  _hover={{bg:"#4E406F", color:"#ffffff"}} mt="10px" p={["15px 15px", "20px 20px", "25px 25px"]} fontSize={["lg"]} border="2px solid white" variant='outline' colorScheme='#66b2ff' leftIcon={<DownloadIcon />}>
                            <a href="https://drive.google.com/file/d/1nG-WuMZcYLKbbO_htiwMn6lNmC3_A5C6/view?usp=sharing" rel="noreferrer" target="_blank">Resume</a></Button>
                            <Box mt="15px" gap="15px" display="flex" color="0f4a8a">
                                <a href="https://github.com/Sankalp2009" rel="noreferrer" target="_blank"><Button _hover={{bg:"#0b1120", color:"#e0e6ee"}} pr="0px"pl="5px" fontSize={["2xl", "3xl", "4xl"]} bg={"#e0e6ee"} color="#0b1120" border="1px solid white" variant='outline' leftIcon={<AiOutlineGithub />}></Button></a>
                                <a href="https://www.linkedin.com/in/sankalp-patel-08b76017b/" rel="noreferrer" target="_blank"><Button _hover={{bg:"#0b1120", color:"#e0e6ee"}} pr="0px" pl="5px" fontSize={["2xl", "3xl", "4xl"]} bg={"#e0e6ee"} color="#0b1120" border="1px solid white" variant='outline' leftIcon={<AiOutlineLinkedin />}></Button></a>
                            </Box>
                        </Box>
                </Box>
                <Box p="5px" w={["45%", "35%", "25%"]} m="20px auto 40px auto">
                    <Image  rounded={["50%", "50%", "50%"]} src="https://res.cloudinary.com/dn2q6aoex/image/upload/v1674667289/ResumePic_t9gyvl.jpg" alt="img" />
                </Box>
            </Box>
        </Box>  
    </Box>
       <About />
       <Skills />
       <Projects />
       <Calender />
       <Stats />
       <Contact />
        </Box>
    )
}
export default Home;