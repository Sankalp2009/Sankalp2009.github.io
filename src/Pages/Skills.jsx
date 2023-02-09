import { Box, Icon, Text,Heading } from "@chakra-ui/react";
import { DiNodejs} from "react-icons/di";
import { TbBrandJavascript,} from 'react-icons/tb';
import { ImHtmlFive2,} from "react-icons/im";
import { RiCss3Fill, RiReactjsFill } from "react-icons/ri";
import { SiChakraui,SiJsonwebtokens, SiExpress, SiMongodb, SiRedux, SiCypress } from "react-icons/si";
import { FaGitAlt} from "react-icons/fa";
import "./Page.css";
import '../App.css'
function Skills()
{
return (
    <Box id="skill">
        <Box  className="OuterSkill">
             <Box >
            <Heading as="h2" size="lg" mb={4}>
            Tech Skills
          </Heading>
         <Box className="skillgrid" >
            <Box className="skill_inside" mb={4}>
            <Icon as={ImHtmlFive2} size="2xl" />
            <Text>HTML</Text>
          </Box>
          <Box className="skill_inside" mb={4}>
            <Icon as={RiCss3Fill} size="2xl" />
            <Text>CSS</Text>
          </Box>
          <Box className="skill_inside" mb={4}>
            <Icon as={TbBrandJavascript} size="2xl" />
            <Text>JavaScript</Text>
          </Box>
          <Box className="skill_inside" mb={4}>
            <Icon as={DiNodejs} size="2xl" />
            <Text>Node.js</Text>
          </Box> 
          <Box className="skill_inside" mb={4}>
            <Icon as={RiReactjsFill} size="2xl" />
            <Text>React</Text>
          </Box>
          <Box className="skill_inside" mb={4}>
            <Icon as={SiChakraui} size="2xl" />
            <Text>Chakra UI</Text>
          </Box> 
          <Box  className="skill_inside" mb={4}>
            <Icon as={SiRedux} size="2xl" />
            <Text>Redux</Text>
          </Box>
          <Box className="skill_inside" mb={4}>
            <Icon as={SiExpress} size="2xl" />
            <Text>Express</Text>
          </Box>
          <Box className="skill_inside" mb={4}>
            <Icon as={SiMongodb} size="2xl" />
            <Text>MongoDB</Text>
          </Box>
          <Box className="skill_inside" mb={4}>
            <Icon as={SiCypress} size="2xl" />
            <Text>Cypress</Text>
          </Box>
          <Box className="skill_inside" mb={4}>
            <Icon as={FaGitAlt} size="2xl" />
            <Text>Git</Text>
          </Box>
          <Box className="skill_inside" mb={4}>
            <Icon as={SiJsonwebtokens} size="2xl" />
            <Text>JWT</Text>
          </Box>
         </Box> 
        </Box>
        <Box>
        <Heading as="h2" size="lg" mb={4}>
            Soft Skills
          </Heading>
         <Box className="skillgrid" >
            <Box className="skill_inside" mb={4}>
            <Text>Work Ethical</Text>
          </Box>
          <Box className="skill_inside" mb={4}>
            <Text>Enthusiastic</Text>
          </Box>
          <Box className="skill_inside" mb={4}>
            <Text>Team Work</Text>
          </Box>
          <Box className="skill_inside" mb={4}>
            <Text>Patience</Text>
          </Box> 
          <Box className="skill_inside" mb={4}>
            <Text>Self-disciplined</Text>
          </Box>
          <Box className="skill_inside" mb={4}>
            <Text>Motivated</Text>
          </Box> 
          <Box  className="skill_inside" mb={4}>
            <Text>Confident</Text>
          </Box>
          <Box className="skill_inside" mb={4}>
            <Text>Good Listener</Text>
          </Box>
         </Box> 
        </Box>
        </Box>
       
    </Box>
) 
}
export default Skills;