"use client"

import { MenuItem, Stack, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";

const Page = () => {
    const [item,setItem] = useState<string>("")
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setItem(e.target.value as string)
    }
    return (
        <>
        
        <Typography variant="h1">Select</Typography>

        <TextField 
        label="label" 
        select 
        value={item}
        onChange={handleChange}
        fullWidth>
            <MenuItem value="1">MenuItem 1</MenuItem>
            <MenuItem value="2">MenuItem 2</MenuItem>
            <MenuItem value="3">MenuItem 3</MenuItem>
        </TextField>

        </>
    );
}
 
export default Page;