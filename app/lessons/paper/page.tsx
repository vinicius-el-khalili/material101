"use client"
import { Box, FormControl, FormControlLabel, FormGroup, FormLabel, Paper, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import { useState } from "react";

const Page = () => {

    const [state,setState] = useState<{
        elevation:number
        variant:"elevation"|"outlined",
        square: boolean
    }>({
        elevation:1,
        variant:"elevation",
        square:false
    })

    return (
    <Stack spacing={4}>
        <Typography variant="h1">Paper</Typography>
        
        <Paper 
        elevation={state.elevation}>
            <Box padding={3}>
            <Typography>Elevation</Typography>
            <RadioGroup
            value={state.elevation}
            onChange={(e,v)=>setState({...state,elevation:Number(v)})}>
                <Stack direction={"row"}>
                    {[0,1,2,5,10,20].map((i,j)=>(
                    <FormControlLabel label={`${i}`} key={`a${i}`} value={i} control={<Radio/>}/>
                    ))}
                </Stack>
            </RadioGroup>
            </Box>
        </Paper>

        <Paper 
        variant={state.variant}
        elevation={3}>
            <Box padding={3}>
            <Typography>Variant</Typography>
            <RadioGroup
            value={state.variant}
            //@ts-ignore
            onChange={(e,v)=>setState({...state,variant:v})}>
                <Stack direction={"row"}>
                    {["elevation","outlined"].map((i,j)=>(
                    <FormControlLabel label={i} key={`b${i}`} value={i} control={<Radio/>}/>
                    ))}
                </Stack>
            </RadioGroup>
            </Box>
        </Paper>

        <Paper
        square={state.square}
        elevation={3}>
            <Box padding={3}>
            <Typography>Square</Typography>
            <RadioGroup
            value={state.square}
            //@ts-ignore
            onChange={(e,v)=>setState({...state,square:v=="true"?true:false})}>
                <Stack direction={"row"}>
                    {[false,true].map((i,j)=>(
                    <FormControlLabel label={`${i}`} key={`c${i}`} value={i} control={<Radio/>}/>
                    ))}
                </Stack>
            </RadioGroup>
            </Box>
        </Paper>

    </Stack>
    );
}
 
export default Page;