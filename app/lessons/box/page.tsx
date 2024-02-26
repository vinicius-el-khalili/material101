import { Box, Stack, Typography } from "@mui/material";

const Page = () => {
    return (
    <Stack spacing={3}>

        <Typography variant="h1">Box</Typography>
        
        <Box>Box is like a div, but with access to sx props and to the app's theme.</Box>
        <Box sx={{
            backgroundColor:"primary.dark",
            color:"primary.contrastText",
            padding:"1rem",
            borderRadius:"6px",
            cursor:"pointer",
            "&:hover":{
                backgroundColor: "secondary.dark",
                color: "secondary.contrastText",
            }
        }}>sx props</Box>

        <Box sx={{
            display:"flex",
            justifyContent:"space-around",
            gap:"1rem",
            border:"1px solid",
            borderColor:"primary.main"
        }}>

            <Box sx={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                paddingLeft:"1rem"
            }}>
                app's theme access
            </Box>

            <Box sx={{
                width:"3rem",
                height:"3rem",
                backgroundColor:"primary.main",
                color:"primary.contrastText"
            }}>Text</Box>

            <Box sx={{
                width:"3rem",
                height:"3rem",
                backgroundColor:"secondary.main",
                color:"secondary.contrastText"
            }}>Text</Box>

            <Box sx={{
                width:"3rem",
                height:"3rem",
                backgroundColor:"warning.main",
                color:"warning.contrastText"
            }}>Text</Box>

            <Box sx={{
                width:"3rem",
                height:"3rem",
                backgroundColor:"error.main",
                color:"error.contrastText"
            }}>Text</Box>


        </Box>
        

    </Stack>
    );
}
 
export default Page;