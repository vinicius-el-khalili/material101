"use client"
import { Box, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Stack, Switch, Typography } from "@mui/material";
import { useState } from "react";

const Page = () => {

    const [single,setSingle] = useState<boolean>(false)   
    const [multiple,setMultiple] = useState({
        state1:false,
        state2:false,
        state3:false
    })

    return (
    <>
    <Typography variant="h1">Switch</Typography>

    <Stack spacing={3}>

        <FormGroup>
            <FormLabel>Single Switch</FormLabel>
            <Switch
            onChange={()=>{setSingle(!single)}}/>
            <FormHelperText>{`${single}`}</FormHelperText>
        </FormGroup>

        <FormGroup>

            <FormLabel>Multiple Switches</FormLabel>

            <FormControlLabel
            label="Switch 1"
            control={
                <Switch
                checked={multiple.state1}
                onChange={()=>{setMultiple({...multiple,state1:!multiple.state1})}}/>
            }/>

            <FormControlLabel
            label="Switch 2"
            control={
                <Switch
                checked={multiple.state2}
                onChange={()=>{setMultiple({...multiple,state2:!multiple.state2})}}/>
            }/>

            <FormControlLabel
            label="Switch 3"
            control={
                <Switch
                checked={multiple.state3}
                onChange={()=>{setMultiple({...multiple,state3:!multiple.state3})}}/>
            }/>
            
            <FormHelperText>
                1:{`${multiple.state1}`},
                2:{`${multiple.state2}`},
                3:{`${multiple.state3}`}
            </FormHelperText>
            
        </FormGroup>

        <FormGroup>
            <FormLabel>color</FormLabel>
            <Stack direction={"row"}>
                <Switch defaultChecked color="primary"/>
                <Switch defaultChecked color="secondary"/>
                <Switch defaultChecked color="warning"/>
                <Switch defaultChecked color="error"/>
            </Stack>
        </FormGroup>

        <FormGroup>
            <FormLabel>required & disabled</FormLabel>
            <Stack direction={"row"}>
                <FormControlLabel control={<Switch/>} label="default" />
                <FormControlLabel control={<Switch/>} label="required" required />
                <FormControlLabel control={<Switch/>} label="disabled" disabled />
            </Stack>
        </FormGroup>

        <FormGroup>
            <FormLabel>size</FormLabel>
            <Stack direction={"row"}>
                <FormControlLabel control={<Switch/>} label="default" />
                <FormControlLabel control={<Switch size="small"/>} label="small" />
            </Stack>
        </FormGroup>

    </Stack>

    </>
    );
}
 
export default Page;