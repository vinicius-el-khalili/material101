"use client"

import { Autocomplete, FormGroup, FormHelperText, FormLabel, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Page = () => {

    const [value,setValue] = useState<number|null>(null)

    return (
    <>
    <Stack spacing={3}>

        <Typography variant="h1">Autocomplete</Typography>

        <FormGroup>
            
            <FormLabel
            sx={{mb:2}}>
                Autocomplete
            </FormLabel>
            
            <Autocomplete
            options={[1,2,3,4]}
            value={value}
            onChange={(e,v)=>{setValue(v)}}
            renderInput={(params)=>
                <TextField
                {...params}
                label="TextField-label"/>
            }/>
            <FormHelperText>{value&&`Selected value: ${value}`}</FormHelperText>

        </FormGroup>
        
    </Stack>
    </>
    );
}
 
export default Page;