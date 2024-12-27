import { Box } from "@mui/material";
import Split from "react-split"
import CodePanel from "./CodeViewPanel";
import OutputView from "./OutputViewerPanel";
// import { Editor } from "@monaco-editor/react";

const CodebaseBlock = () => {
    const width = document.getElementsByClassName("split")[0]?.clientWidth

    return (
        <Box sx={{flexDirection: "column" , padding: 8}}>
            <Split
                sizes={[50, 50]}
                minSize={0.25*width}
                className="split"
                >
            <Box justifyItems={"center"} overflow={"hidden"}>
                <CodePanel/>
            </Box>
            <Box sx={{flexDirection: "column" ,}}>
                {/* <Box sx={{height: "50vh", backgroundColor: "#36454f" }}></Box> */}
                <OutputView title={"PROJECT NAME"}/>
            </Box>
            </Split>
        </Box>
    )
}

export default CodebaseBlock;