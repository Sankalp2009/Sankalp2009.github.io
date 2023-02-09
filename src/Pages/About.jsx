import { Box, Image, Text,Heading } from "@chakra-ui/react";
import '../App.css'
function About()
{
    return (
        <Box id="about">
    <Box className="About">
        <Box>
            <Heading as='h2' size='xl'>ABOUT ME</Heading>
            <Text className="abs" >
            A full stack web developer having knowledge in Data Structure, Algorithms, and Programming languages.                        Knowing JavaScript, HTML, CSS, React, Redux, Mern Stack, MongoDB and Chakra UI.
            I can provide clean code and pixel perfect design.
            I'm looking forward to enhance my skills in a challenging work environment.
            I also make the website more & more interactive with web animations. 
            </Text>
        </Box>
        <Box>
        <Image className="buddy" src="https://media1.giphy.com/media/qgQUggAC3Pfv687qPC/200.webp?cid=ecf05e470vk15iz1je6uqzc22t4o5rvwkgbgx32hl750d7g8&rid=200.webp&ct=g" alt="img" />
        </Box>
    </Box>
    </Box>
    ) 
}
export default About;