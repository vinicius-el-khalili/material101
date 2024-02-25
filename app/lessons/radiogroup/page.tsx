"use client"
import { Box, FormControl, FormControlLabel, FormHelperText, FormLabel, Input, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";

const Page = () => {

    const [value,setValue] = useState<string>("")
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <>
        <Typography variant="h1">RadioGroup</Typography>

        <Box>
            <Typography variant="h6">Selected value: {value}</Typography>
            <FormControl>

                <FormLabel
                id="group-label">
                    FormLabel
                </FormLabel>

                <RadioGroup
                name="group"
                aria-labelledby="group-label"
                value={value}
                onChange={handleChange}>
                    <Stack direction="row">
                        <FormControlLabel control={<Radio color="secondary"/>} label='1' value='1'/>
                        <FormControlLabel control={<Radio color="primary"/>} label='2' value='2'/>
                        <FormControlLabel control={<Radio color="warning"/>} label='3' value='3'/>
                    </Stack>
                </RadioGroup>
                
                <FormHelperText>FormHelperText</FormHelperText>
                
            </FormControl>
        </Box>
        </>
    );
}
 
export default Page;