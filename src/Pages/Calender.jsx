
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { Box, Text } from "@chakra-ui/react";
import {Tooltip} from "react-tooltip";

function Calender() {
  return (
    <Box bg={"#1f2937"} color={"#5a6ce6"} pb="60px">
        <Box w="80%" transform="scale(1.05)" m="auto" textAlign="center" p="60px auto">
            <Row style={{ justifyContent: "center", padding: "20px auto", paddingTop: "60px"}}>
            <Text mb="25px" textAlign="center"  fontWeight="400" fontSize={["3xl", "4xl", "5xl"]}>My Github Calender</Text>
            <GitHubCalendar
                username="Sankalp2009"
                blockSize={15}
                blockMargin={5}
                color={"#5e0adb"}
                fontSize={15}
            >
            <Tooltip delayShow={10} html />
            </GitHubCalendar>
            </Row>
        </Box>
    </Box>
  );
}
export default Calender;