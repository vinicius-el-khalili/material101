"use client"

import { Box, FormControlLabel, FormGroup, FormLabel, Grid, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Page = () => {

    const [attributes,setAttributes] = useState<{
        direction: "row"|"column"|"row-reverse"|"column-reverse"
        alignItems: "flex-start"|"center"|"flex-end"|"stretch"|"baseline"
        justifyContent: ""|"flex-start"|"center"|"flex-end"|"space-between"|"space-around"|"space-evenly"
        spacing: number
    }>({
        direction:"row",
        alignItems: "flex-start",
        justifyContent: "",
        spacing: 0
    })

    return (
    <Stack spacing={4} mt={4}>
        
        <Typography variant="h1">Grid</Typography>

        <FormGroup>

        <FormLabel>direction</FormLabel>
        <RadioGroup
        value={attributes.direction}
        //@ts-ignore
        onChange={(e,v)=>setAttributes({...attributes,direction:v})}>
            <Stack direction="row">
                <FormControlLabel control={<Radio/>} label="row" value="row"/>
                <FormControlLabel control={<Radio/>} label="row-reverse" value="row-reverse"/>
                <FormControlLabel control={<Radio/>} label="column" value="column"/>
                <FormControlLabel control={<Radio/>} label="column-reverse" value="column-reverse"/>
            </Stack>
        </RadioGroup>

        <FormLabel>alignItems</FormLabel>
        <RadioGroup
        value={attributes.alignItems}
        //@ts-ignore
        onChange={(e,v)=>{setAttributes({...attributes,alignItems:v})}}>
            <Stack direction="row">
                <FormControlLabel control={<Radio/>} label="flex-start" value="flex-start"/>
                <FormControlLabel control={<Radio/>} label="center" value="center"/>
                <FormControlLabel control={<Radio/>} label="flex-end" value="flex-end"/>
                <FormControlLabel control={<Radio/>} label="stretch" value="stretch"/>
                <FormControlLabel control={<Radio/>} label="baseline" value="baseline"/>
            </Stack>
        </RadioGroup>

        <FormLabel>justifyContent</FormLabel>
        <RadioGroup
        value={attributes.justifyContent}
        //@ts-ignore
        onChange={(e,v)=>{setAttributes({...attributes,justifyContent:v})}}>
            <Stack direction="row">
                <FormControlLabel control={<Radio/>} label="flex-start" value="flex-start"/>
                <FormControlLabel control={<Radio/>} label="center" value="center"/>
                <FormControlLabel control={<Radio/>} label="flex-end" value="flex-end"/>
                <FormControlLabel control={<Radio/>} label="space-between" value="space-between"/>
                <FormControlLabel control={<Radio/>} label="space-around" value="space-around"/>
                <FormControlLabel control={<Radio/>} label="space-evenly" value="space-evenly"/>
            </Stack>
        </RadioGroup>

        <FormLabel>spacing</FormLabel>
        <RadioGroup
        value={attributes.spacing}
        onChange={(e,v)=>{setAttributes({...attributes,spacing:Number(v)})}}>
            <Stack direction="row">
                <FormControlLabel control={<Radio/>} label="0" value={0}/>
                <FormControlLabel control={<Radio/>} label="1" value={1}/>
                <FormControlLabel control={<Radio/>} label="2" value={2}/>
                <FormControlLabel control={<Radio/>} label="4" value={4}/>
                <FormControlLabel control={<Radio/>} label="8" value={8}/>
            </Stack>
        </RadioGroup>

        </FormGroup>

        <Grid container>
            {(new Array(12).fill(null)).map((_,i)=>(
            <Grid 
            item
            key={`gi${i}`}
            xs={1}>
                <Box sx={{height:30,width:"100%",border:"1px solid gray",display:"grid",placeItems:"center"}}>
                    {i+1}
                </Box>
            </Grid>
            ))}
        </Grid>
        
        <FormGroup>
        <FormLabel>xs</FormLabel>
        <Grid
        container
        direction={attributes.direction}
        justifyContent={attributes.justifyContent}
        alignItems={attributes.alignItems}
        spacing={attributes.spacing}>
            {(new Array(6).fill(null)).map((_,i)=>(
            <Grid item xs={2*(i+1)} key={`_gi${i}`}>
                <Box bgcolor={"secondary.light"} color={"secondary.contrastText"} sx={{height:40,width:"100%",border:"1px solid white",display:"grid",placeItems:"center"}}>
                    {`${2*(i+1)}`}
                </Box>
            </Grid>
            ))}
        </Grid>
        </FormGroup>

    </Stack>
    );
}
 
export default Page;