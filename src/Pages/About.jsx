import { Box, Image, Text } from "@chakra-ui/react";

function About(){
    return <Box id="About" bg="#93857a" color="#ffffff" p="30px 0px" mt="-2px" pt="80px">
        <Box w="87%" m="auto" display={["inline", "inline", "flex"]} justifyContent="space-between" alignItems="center">
            <Box w={["90%", "80%", "40%"]} m="auto">
                <Text color="#3ed5cb" textAlign="center"  fontWeight="400" mt="20px" fontSize={["3xl", "4xl", "5xl"]}>About Me</Text>
                <Text fontFamily="calibri" mt="10px" fontSize={["md", "lg", "xl"]}>
                        A full stack web developer having knowledge in Data Structure, Algorithms, and Programming languages.
                        Knowing JavaScript, HTML, CSS, React, Redux, Mern Stack, MongoDB and Chakra UI.
                        I can provide clean code and pixel perfect design.
                        I'm looking forward to enhance my skills in a challenging work environment.
                        I also make the website more & more interactive with web animations.
                </Text>
            </Box>
            <Image w={["40%"]} m="auto" borderRadius="30px" src="https://media4.giphy.com/media/7uDtQm2jKdS0VGLg46/200w.webp?cid=ecf05e47qynev88yj9jpt18vzba16ubnbxtrlthpnzy096mc&rid=200w.webp&ct=g" alt="img" />
        </Box>
    </Box>
}
export default About;