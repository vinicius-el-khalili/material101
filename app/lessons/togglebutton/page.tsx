"use client"

import { FormatBold, FormatBoldOutlined, FormatItalic, FormatUnderlined } from "@mui/icons-material";
import { Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { MouseEvent, useState } from "react";

const Page = () => {

    type formatType = "bold"|"italic"|"underlined"
    const [formats,setFormats] = useState<formatType[]>([])
    const handleFormatChange = (event:MouseEvent<HTMLElement>,updatedFormats:formatType[]) => {
        setFormats(updatedFormats)
        console.log(updatedFormats)
    }

    return (
    <>
    <Typography variant="h1">ToggleButton</Typography>
    <Stack direction={"row"}>

        <ToggleButtonGroup
        value={formats}
        onChange={handleFormatChange}
        color="primary">

            <ToggleButton 
            value={"bold"}
            aria-label="bold">
                <FormatBold/>
            </ToggleButton>
            
            <ToggleButton 
            value={"italic"}
            aria-label="italic">
                <FormatItalic/>
            </ToggleButton>
            
            <ToggleButton 
            value={"underlined"}
            aria-label="underlined">
                <FormatUnderlined/>
            </ToggleButton>
            
        </ToggleButtonGroup>

    </Stack>

    <Stack>

        {formats.map((format,index)=>(
        <Typography variant="body1" key={`f${index}`}>{format}</Typography>
        ))}

    </Stack>
    </>
    );
}
 
export default Page;