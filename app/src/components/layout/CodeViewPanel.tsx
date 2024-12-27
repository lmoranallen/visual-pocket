import { Editor } from "@monaco-editor/react";
import { Tab, Tabs } from "@mui/material";
import { useState } from "react";

const CodePanel = ( ) => {

    const [value, setValue] = useState("one")

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)
    }

    return (
        <>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
                aria-label="secondary tabs example"
                >
                <Tab value="one" label="CONTEXT" />
                <Tab value="two" label="CODE" />
                <Tab value="three" label="INFORMATION" />
                <Tab value="four" label="TECHNOLOGIES" />
            </Tabs>

            <Editor height="50vh" defaultLanguage="typescript" theme="vs-dark" defaultValue={`// ${value}`}/>
        </>
    )
}

export default CodePanel;