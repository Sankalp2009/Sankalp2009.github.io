import { Box, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";


function Navbar(){

    const [isscroll, setisscroll] = useState(false);

    function isScrolling() {
        if (window.scrollY > 80) {
        setisscroll(true);
        } else {
        setisscroll(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", isScrolling);
        return () => {
        window.removeEventListener("scroll");
        }
    }, [])


    return <Box zIndex={1} bg={isscroll? "yellow" : "#93857a"} w="100%" p="10px 0px" boxShadow="md" color= "#ffffff" position="fixed">
        <Box w="95%" m="auto" display={["inline", "flex", "flex"]} justifyContent="space-between" textAlign={["center", "", ""]}>
            <Box rounded="50%" ml={["45%", "0%", "0%"]} mt="5px" mb="5px">
                <Image borderRadius="5px"  w={["80px"]} src="https://res.cloudinary.com/dn2q6aoex/image/upload/v1671442856/1c54f7b06d7723c21afc5035bf88a5ef_tnrlo4.png" alt="logo" />
            </Box>
            <Box color={isscroll? "black" : "white"} display="flex" gap={["auto", "15px", "20px"]} justifyContent={["space-around", "space-between", "space-between"]} ml="10px" alignItems="center">
                <Link display="flex" to="/">
                    <AnchorLink href='#Home'><Text fontWeight="500" fontSize={['sm', 'sm', 'lg']}>Home</Text></AnchorLink>
                </Link>
                <Link display="flex" to="/about">
                    <AnchorLink href='#About'><Text fontWeight="500" fontSize={['sm', 'sm', 'lg']}>About</Text></AnchorLink>
                </Link>
                <Link display="flex" to="/skills">
                    <AnchorLink href='#Skills'><Text fontWeight="500" fontSize={['sm', 'sm', 'lg']}>Skills</Text></AnchorLink>
                </Link>
                <Link display="flex">
                    <AnchorLink href='#Project'><Text fontWeight="500" _active={{textDecoration:"underlined"}} fontSize={['sm', 'sm', 'lg']}>Project</Text></AnchorLink>
                </Link>
                <Link display="flex">
                    <AnchorLink href='#Contact'><Text fontWeight="500" fontSize={['sm', 'sm', 'lg']}>Contact</Text></AnchorLink>
                </Link>
                <Text fontWeight="500" fontSize={['sm', 'sm', 'lg']}><a href="https://drive.google.com/file/d/1nG-WuMZcYLKbbO_htiwMn6lNmC3_A5C6/view?usp=sharing" rel="noreferrer" target="_blank">Resume</a></Text>
            </Box>
        </Box>
    </Box>
}

export default Navbar;