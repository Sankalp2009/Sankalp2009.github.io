import GitHubCalendar from "react-github-calendar";
import { Box, Text } from "@chakra-ui/react";
import {Tooltip} from "react-tooltip";
import '../App.css'
function Calender() {
  return (
    <Box id="calender">
        <Box className="optimus">
            <Text p={5}>Github Calender</Text>
            <Box className="Bee">
              <GitHubCalendar  username="Sankalp2009" color={"#5e0adb"}>
            <Tooltip delayShow={10} html />
            </GitHubCalendar>
            </Box>
        </Box>
    </Box>
  );
}
export default Calender;