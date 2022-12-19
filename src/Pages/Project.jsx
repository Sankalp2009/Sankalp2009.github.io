import { Box, Button, Image, Text } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";


function Project()
{
    let projectdata= [
        {
            name: "kindMeal Clone",
            img: "https://user-images.githubusercontent.com/105920094/201532839-36a7bb13-512a-40cf-a463-276991abb001.png",
            type: "Group",
            desc: "KindMeal.my is Malaysia's leading meat-free lifestyle platform. KindMeal.my is operated by PetFinder.my, Malaysia's largest animal welfare portal with a mission is to creatively harness technology to improve lives and build a compassionate community.",
            techstack: "HTML, CSS, JavaScript",
            livelink: "http://harmonious-crostata-782582.netlify.app/",
            gitlink: "https://github.com/aniket427/Kindmeal.my_Clone"
        },
        {
            name: "Ayoa - Mind Mapping ",
            img: "https://www.ayoa.com/wp-content/uploads/2022/07/canvas-laptop.png",
            type: "Individual",
            desc: "Ayoa seamlessly syncs all of your work across the devices that you're using.",
            techstack: "React, Chakra-ui, state-management library",
            livelink: "https://abandoned-blow-5122.vercel.app/",
            gitlink: "https://github.com/Sankalp2009/abandoned-blow-5122"
        },
        {
            name: "NordStorm Clone",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-nkhs0Oiep96bPcMe2G9Lzd4JUbDIDYEfhg&usqp=CAU",
            type: "Group",
            desc: "An E-Commerce website having the unique feature which allows the users to sell their products as well. User can Login, Signup etc.",
            techstack: "React, Chakra-ui, Redux, JSON",
            livelink: "https://makeshift-thread-5916-sankalp2009.vercel.app/",
            gitlink: "https://github.com/yadavsankt24/makeshift-thread-5916"
        },

    ]
    return <Box id="Project" w="full" bg="#93857a" color="#ffffff" p="30px 0px" textAlign="center" pt="100px">
        <Box w="85%" m="auto">
            <Text mb="25px" textAlign="center" fontWeight="400" fontSize={["3xl", "4xl", "5xl"]}>Projects</Text>
            <Box display="grid" gap="50px" gridTemplateColumns= "repeat(1, 1fr)">
                {projectdata && projectdata.map((project)=> {
                    return <Box className="projectouter">
                                <Box display={["inline", "inline", "flex"]} justifyContent="space-between">
                                    <Image w={["100%", "97%", "60%"]} m="auto" src={project.img} alt="project-thumbnail" />
                                    <Box w={["100%", "97%", "39%"]} m="auto">
                                        <Text fontSize={["2xl", "3xl", "4xl"]}>{project.name}</Text>
                                        <Text fontSize={["xl", "2xl", "3xl"]}>( {project.type} )</Text>
                                        <Text w={["100%", "90%", "70%"]} m="auto" fontSize={["sm", "md", "md"]}>{project.desc}</Text>
                                        <Text w="85%" m="auto" fontSize={["md", "mlgd", "xl"]} fontWeight="bold">Techstacks :-{project.techstack}</Text>
                                        <Box display="flex" w={["100%", "80%", "100%"]} m="auto" justifyContent="space-around">
                                            {/* <Button  _hover={{bg:"#4E406F", color:"#ffffff"}} mt="10px" p={["5px 5px", "10px 10px", "10px 10px"]} fontSize={["md", "lg", ";g"]} bg="#C1B6DB" color="#13022c" border="none" variant='solid' leftIcon={<BiLinkExternal />}><a href={project.livelink} rel="noreferrer" target="_blank">Live</a></Button>
                                            <Button _hover={{bg:"#4E406F", color:"#ffffff"}} mt="10px" p={["5px 5px", "10px 10px", "10px 10px"]} fontSize={["md", "lg", "lg"]} bg="#C1B6DB" color="#13022c" border="none" variant='solid' leftIcon={<BsGithub />}><a href={project.gitlink} rel="noreferrer" target="_blank">Github</a></Button> */}
                                            <Button as='a' target='_blank' href={project.livelink} _hover={{bg:"#4E406F", color:"#ffffff"}} mt="10px" p={["5px 5px", "10px 10px", "10px 10px"]} fontSize={["md", "lg", "lg"]} bg="#C1B6DB" color="#13022c" border="none" variant='solid' leftIcon={<BiLinkExternal />}>Live</Button>
                                            <Button as='a' target='_blank' href={project.gitlink} _hover={{bg:"#4E406F", color:"#ffffff"}} mt="10px" p={["5px 5px", "10px 10px", "10px 10px"]} fontSize={["md", "lg", "lg"]} bg="#C1B6DB" color="#13022c" border="none" variant='solid' leftIcon={<BsGithub />}>Github</Button>
                                        </Box>
                                    </Box>
                            </Box>
                    </Box>
                })}
            </Box>
        </Box>
    </Box>
}
export default Project;