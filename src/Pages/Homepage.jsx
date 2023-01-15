import { DownloadIcon } from "@chakra-ui/icons";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import About from "./About";
import Contacts from "./Contact";
import Project from "./Project";
import Skills from "./Skillls";
import Stats from "./Stats"
import Calender from "./Calender"
import {  AiOutlineGithub, AiOutlineLinkedin} from "react-icons/ai";


function Homepage()
{
    return <Box bg="#93857a">
            <Box id="Home" w="100.1156%" ml="-1.069px" pt={["100px", "50px", "50px"]} color="#0a192f" bg= "#2d3748">
                <Box h="574px" w="85%" color= "#ffffff" m="auto" display={["inline", "inline", "flex"]} alignItems="center" justifyContent="space-around">
                    <Box mt={["50px", "50px", "0px"]} w={["100%", "100%", "60%"]}>
                        <Box textAlign="left" pl={["20px", "60px", "20px"]} color="whitesmoke">
                            <Text fontWeight="500" fontFamily="sans-serif" display="flex" alignItems="center" fontSize={["2xl", "3xl", "4xl"]}>Hi <Image boxSize={["30px", "40px", "50px"]}  src="https://emojipedia-us.s3.amazonaws.com/source/noto-emoji-animations/344/waving-hand_1f44b.gif" alt="img" />,</Text>
                            <Text color ='chocolate' fontFamily="cursive" fontSize={["4xl", "5xl", "6xl"]}>Sankalp Patel</Text>
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
                            <Button _hover={{bg:"#4E406F", color:"#ffffff"}} mt="10px" p={["15px 15px", "20px 20px", "25px 25px"]} fontSize={["lg"]} variant='outline' colorScheme='blue' leftIcon={<DownloadIcon />}>
                            <a href="https://drive.google.com/file/d/1nG-WuMZcYLKbbO_htiwMn6lNmC3_A5C6/view?usp=sharing" rel="noreferrer" target="_blank">Resume</a></Button>
                            <Box mt="15px" gap="15px" display="flex" color="0f4a8a">
                                <a href="https://github.com/Sankalp2009" rel="noreferrer" target="_blank"><Button _hover={{bg:"#4E406F", color:"#ffffff"}} pr="0px"pl="5px" fontSize={["2xl", "3xl", "4xl"]} bg="#81e6d9" color="#1a202c" border="none" variant='outline' leftIcon={<AiOutlineGithub />}></Button></a>
                                <a href="https://www.linkedin.com/in/sankalp-patel-08b76017b/" rel="noreferrer" target="_blank"><Button _hover={{bg:"#4E406F", color:"#ffffff"}} pr="0px" pl="5px" fontSize={["2xl", "3xl", "4xl"]} bg="#81e6d9" color="#1a202c" border="none" variant='outline' leftIcon={<AiOutlineLinkedin />}></Button></a>
                            </Box>
                        </Box>
                    {/* <Image position="absolute" top={["-10", "-10", "-20"]} left={["", "", "-8"]} src="https://www.wallpaperuse.com/wallp/56-561836_m.png" alt="img" /> */}
                </Box>
                <Box  bg="#2d3748" p="5px" w={["45%", "35%", "25%"]} m="20px auto 40px auto" rounded={["50%", "50%", "50%"]}>
                    <Image boxShadow="xl" w="100%" rounded={["50%", "50%", "50%"]} src="https://res.cloudinary.com/dn2q6aoex/image/upload/v1673796974/Untitled-2_oklshb.jpg" alt="img" />
                </Box>
            </Box>
        </Box>  
        <About />
        <Skills />
        <Project />
        <Calender />
        <Stats />
        <Contacts />
    </Box>
}
export default Homepage;