"use client"

import { ArrowDownward, ArrowDownwardOutlined, ArrowDownwardRounded, ArrowDownwardSharp, ArrowDropDown, ArrowDropDownCircleSharp, ArrowDropDownCircleTwoTone, KeyboardArrowDownOutlined } from "@mui/icons-material";
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box, Button, FormControl, FormControlLabel, FormGroup, FormLabel, Input, Paper, Radio, RadioGroup, Stack, Switch, Typography } from "@mui/material";
import { useState } from "react";

const Page = () => {

    const [state,setState] = useState<{
        accordionsummary:{
            show: boolean,
            expandIcon: {
                show: boolean,
                value: number
            },
        },
        accordiondetails:{
            show: boolean
        },
        accordionactions: {
            show: boolean
        }
    }>({
        accordionsummary:{
            show: true,
            expandIcon: {
                show: true,
                value: 0
            }
        },
        accordiondetails: {
            show: true
        },
        accordionactions: {
            show: true
        }
    })

    const expandIconList = [
        <ArrowDownward/>,
        <ArrowDropDown/>,
        <ArrowDropDownCircleSharp/>,
        <KeyboardArrowDownOutlined/>,
    ]

    return (
    <>
    <Stack spacing={4}>
        <Typography variant="h1">Accordion</Typography>

        <Paper>
        <FormControl>
        <Stack padding={4} spacing={2}>
            <FormLabel><b>{`<AccordionSummary/>`}</b></FormLabel>
            <FormControlLabel 
            label="expandIcon"
            onChange={(e,v)=>{
                setState({
                ...state,
                accordionsummary: {
                    ...state.accordionsummary,
                    expandIcon:{
                        ...state.accordionsummary.expandIcon,
                        show: v
                    }
                }
                })
            }}
            control={
                <Switch
                value={state.accordionsummary.expandIcon} 
                size="small"/>
            }/>
            <RadioGroup
            value={state.accordionsummary.expandIcon.value}
            onChange={(e,v)=>{
                setState({
                ...state,
                accordionsummary:{
                    ...state.accordionsummary,
                    expandIcon:{
                        ...state.accordionsummary.expandIcon,
                        value: Number(v)
                        
                    }
                }
                })
            }}>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <FormControlLabel label={expandIconList[0]} value={0} control={<Radio/>} disabled={!state.accordionsummary.expandIcon.show}/>
                    <FormControlLabel label={expandIconList[1]} value={1} control={<Radio/>} disabled={!state.accordionsummary.expandIcon.show}/>
                    <FormControlLabel label={expandIconList[2]} value={2} control={<Radio/>} disabled={!state.accordionsummary.expandIcon.show}/>
                    <FormControlLabel label={expandIconList[3]} value={3} control={<Radio/>} disabled={!state.accordionsummary.expandIcon.show}/>
                </Stack>
            </RadioGroup>
        </Stack>
        </FormControl>
        </Paper>

        <Paper>
        <Stack padding={4} spacing={4}>
        <FormGroup>
            <FormControl variant="outlined">
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <FormLabel><b>{`<AccordionDetails/>`}</b></FormLabel>
                <Switch defaultChecked value={state} onChange={(e,v)=>{
                setState({
                    ...state,
                    accordiondetails:{
                        ...state.accordiondetails,
                        show: v
                    }
                })
                }}/>
            </Stack>
            </FormControl>
        </FormGroup>
        </Stack>
        </Paper>

        <Paper>
        <Stack padding={4} spacing={4}>
        <FormGroup>
            <FormControl>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <FormLabel><b>{`<AccordionActions/>`}</b></FormLabel>
                <Switch 
                defaultChecked
                onChange={(e,v)=>{setState({
                    ...state,
                    accordionactions:{
                        ...state.accordionactions,
                        show: v
                    }
                })
                }}/>
            </Stack>
            </FormControl>
        </FormGroup>
        </Stack>
        </Paper>

        <Accordion sx={{p:2}} elevation={10}>
            <AccordionSummary
            expandIcon={
                state.accordionsummary.expandIcon.show?
                expandIconList[state.accordionsummary.expandIcon.value]
                :false
            }>
                AccordionSummary
            </AccordionSummary>
            {state.accordiondetails.show&&
            <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo placeat molestiae, repellat repellendus minima iure possimus reprehenderit, inventore beatae odio cupiditate nulla quis laboriosam consequuntur doloribus, autem voluptas explicabo fugit.
            </AccordionDetails>
            }
            {state.accordionactions.show&&
            <AccordionActions>
                <Button variant="outlined">Button</Button>
                <Button variant="outlined">Button</Button>
            </AccordionActions>
            }
        </Accordion>
    </Stack>
    </>
    );
}
 
export default Page;