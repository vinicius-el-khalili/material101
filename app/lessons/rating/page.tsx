"use client"

import { Android, Apple, Celebration, CelebrationOutlined, FavoriteBorder, FavoriteBorderOutlined, FavoriteOutlined } from "@mui/icons-material";
import { Container, FormGroup, FormHelperText, FormLabel, Rating, Stack, Typography } from "@mui/material";
import { useState } from "react";

const Page = () => {

    const [value,setValue] = useState<number|null>(null)
    const [valuePrecise,setValuePrecise] = useState<number|null>(null)

    return (
        <>
        <Stack spacing={3}>

            <Typography variant="h1">Rating</Typography>

            <FormGroup>
                <FormLabel>default {value}</FormLabel>
                <Rating
                value={value}
                onChange={(e,v)=>{setValue(v)}}/>
            </FormGroup>

            <FormGroup>
                <FormLabel>precision {valuePrecise}</FormLabel>
                <Rating
                precision={.5}
                value={valuePrecise}
                onChange={(e,v)=>{setValuePrecise(v)}}/>
            </FormGroup>

            <FormGroup>
                <FormLabel>icon & emptyIcon</FormLabel>
                <Rating
                value={value}
                onChange={(e,v)=>{setValue(v)}}
                icon={<FavoriteBorder sx={{color:"#ff6d75"}}/>}
                emptyIcon={<FavoriteBorderOutlined/>}/>
                <Rating
                value={value}
                onChange={(e,v)=>{setValue(v)}}
                icon={<Celebration sx={{color:"green"}}/>}
                emptyIcon={<CelebrationOutlined/>}/>
            </FormGroup>

            <FormGroup>
                <FormLabel>highlightSelectedOnly</FormLabel>
                <Rating
                value={value}
                onChange={(e,v)=>{setValue(v)}}
                highlightSelectedOnly/>
            </FormGroup>
            
        </Stack>
        </>
    );
}
 
export default Page;