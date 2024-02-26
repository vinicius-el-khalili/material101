"use client"

import { MoreHoriz, MoreVert } from "@mui/icons-material";
import { Avatar, Button, ButtonGroup, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormGroup, FormLabel, IconButton, Paper, Stack, Switch, Typography } from "@mui/material";
import { useState } from "react";

const Page = () => {

    const [state,setState] = useState<{
        cardheader:{
            show: boolean,
            avatar: boolean,
            action: boolean,
            title: boolean,
            subheader: boolean
        },
        cardcontent:{
            show:boolean
        },
        cardactions:{
            show:boolean
        }
    }>({
        cardheader:{
            show: true,
            avatar: true,
            action: true,
            title: true,
            subheader: true
        },
        cardcontent: {
            show: true
        },
        cardactions:{
            show:true
        }
    })

    return (
    <Stack spacing={4}>

        <Typography variant="h1">Card</Typography>

        <Paper sx={{p:2}}>
            <FormGroup>
                <Stack direction="row" alignItems="center" justifyContent="space-between" gap={2} padding={1}>
                    <FormLabel>{"<CardHeader/>"}</FormLabel>
                    <FormControlLabel
                    label="" 
                    control={<Switch value={state.cardheader.show} defaultChecked size="small"/>} 
                    onChange={(e,v)=>setState({...state,cardheader:{...state.cardheader,show:v}})}
                    />
                </Stack>
                <Stack direction={"row"} flexWrap={"wrap"} padding={2} justifyContent={"space-between"}>
                    <FormControlLabel
                    disabled={!state.cardheader.show}
                    label="avatar" 
                    control={<Switch value={state.cardheader.avatar} defaultChecked size="small"/>} 
                    onChange={(e,v)=>setState({...state,cardheader:{...state.cardheader,avatar:v}})}
                    />
                    <FormControlLabel
                    disabled={!state.cardheader.show}
                    label="action" 
                    control={<Switch value={state.cardheader.action} defaultChecked size="small"/>} 
                    onChange={(e,v)=>setState({...state,cardheader:{...state.cardheader,action:v}})}
                    />
                    <FormControlLabel
                    disabled={!state.cardheader.show}
                    label="title" 
                    control={<Switch value={state.cardheader.title} defaultChecked size="small"/>} 
                    onChange={(e,v)=>setState({...state,cardheader:{...state.cardheader,title:v}})}
                    />
                    <FormControlLabel
                    disabled={!state.cardheader.show}
                    label="subheader" 
                    control={<Switch value={state.cardheader.subheader} defaultChecked size="small"/>} 
                    onChange={(e,v)=>setState({...state,cardheader:{...state.cardheader,subheader:v}})}
                    />
                </Stack>
            </FormGroup>
        </Paper>

        <Paper sx={{p:2}}>
            <FormGroup>
                <Stack direction="row" alignItems="center" justifyContent="space-between" gap={2} padding={1}>
                    <FormLabel>{"<CardContent/>"}</FormLabel>
                    <FormControlLabel
                    label="" 
                    control={<Switch value={state.cardcontent.show} defaultChecked size="small"/>} 
                    onChange={(e,v)=>setState({...state,cardcontent:{...state.cardcontent,show:v}})}
                    />
                </Stack>
            </FormGroup>
        </Paper>

        <Paper sx={{p:2}}>
            <FormGroup>
                <Stack direction="row" alignItems="center" justifyContent="space-between" gap={2} padding={1}>
                    <FormLabel>{"<CardActions/>"}</FormLabel>
                    <FormControlLabel
                    label="" 
                    control={<Switch value={state.cardactions.show} defaultChecked size="small"/>} 
                    onChange={(e,v)=>setState({...state,cardactions:{...state.cardactions,show:v}})}
                    />
                </Stack>
            </FormGroup>
        </Paper>

        <Card elevation={10} sx={{p:1}} square={false}>
            {state.cardheader.show&&
            <CardHeader
                avatar={
                    state.cardheader.avatar?
                    <Avatar>a</Avatar>
                    :false
                }
                action={
                    state.cardheader.action?
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                    :false
                }
                title={
                    state.cardheader.title?
                    "Title"
                    :false
                }
                subheader={
                    state.cardheader.subheader?
                    "Subheader"
                    :false
                }
            />
            }
            {state.cardcontent.show&&
            <CardContent>
                CardContent: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor qui ducimus quia quaerat esse iusto explicabo ex illo voluptatum.
            </CardContent>
            }
            {state.cardactions.show&&
            <CardActions>
                <Button variant="outlined">Button</Button>
                <Button variant="outlined">Button</Button>
                <Button variant="outlined">Button</Button>
            </CardActions>
            }
        </Card>

        

    </Stack>
    );
}
 
export default Page;