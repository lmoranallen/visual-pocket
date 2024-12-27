import { Box, Button, Typography } from "@mui/material";


type OutputProps = {
    title: string
}

const OutputView = (props: OutputProps) => {

    const { title } = props

    return (
        <Box sx={{display: "flex" , flexDirection: "column"}} >
            <Typography sx={{textAlign: "center"}}>{title}</Typography>
            <Button 
                sx={{borderRadius: 2, margin: 2, maxWidth: "128px", alignSelf: "end"}}
                variant="outlined"
                color="primary"
                
                
            >Run Code</Button>
            <Box height={"40vh"} sx={{backgroundColor: "rgb(0,0,0,0.1)", border: "2px solid rgba(0,0,0,0.75)", borderRadius: 2}} padding={2} borderRadius={4} borderColor={"green"}>
                exec
            </Box>
        </Box>
    )
}

export default OutputView;