"use client"

import { CheckBox } from "@mui/icons-material";
import { Box, Button, Checkbox, FormControlLabel, FormGroup, FormHelperText, FormLabel, Stack, Typography } from "@mui/material";
import { ChangeEvent, SyntheticEvent, useState } from "react";

const Page = () => {

    const [check,setCheck] = useState<boolean>(false)
    const handleChange = (e:ChangeEvent<HTMLInputElement>,checked:boolean) => {
        setCheck(checked)
    }
    const [multipleCheck,setMultipleCheck] = useState({
        state1:false,
        state2:false,
        state3:false
    })
    const handleMultipleChange = (e:ChangeEvent<HTMLInputElement>,checked:boolean) => {
        setMultipleCheck({
            ...multipleCheck,
            [e.target.name]: checked
        })
    }

    return (
    <>
    <Typography variant="h1">CheckBox</Typography>
    <Stack sx={{m:2}} spacing={3}>

        <FormGroup>

            <FormLabel>FormLabel</FormLabel>

            <FormControlLabel 
            label="FormControlLabel"
            control={
                <Checkbox 
                checked={check} 
                onChange={handleChange}
                />
            }/>

            <FormHelperText>{check?"true":"false"}</FormHelperText>

        </FormGroup>
        
        <FormGroup>

            <FormLabel>FormLabel</FormLabel>

            <FormControlLabel 
            label="FormControlLabel 1"
            control={
                <Checkbox 
                checked={multipleCheck.state1}
                onChange={()=>setMultipleCheck({...multipleCheck,state1:!multipleCheck.state1})}
                />
            }/>

            <FormControlLabel 
            label="FormControlLabel 2"
            control={
                <Checkbox 
                checked={multipleCheck.state2}
                onChange={()=>setMultipleCheck({...multipleCheck,state2:!multipleCheck.state2})}
                />
            }/>

            <FormControlLabel 
            label="FormControlLabel 3"
            control={
                <Checkbox 
                checked={multipleCheck.state3}
                onChange={()=>setMultipleCheck({...multipleCheck,state3:!multipleCheck.state3})}
                />
            }/>
            
            <FormHelperText>
                1:{`${multipleCheck.state1}`},
                2:{`${multipleCheck.state2}`},
                3:{`${multipleCheck.state3}`}
            </FormHelperText>

        </FormGroup>

    </Stack>
    </>
    );
}
 
export default Page;