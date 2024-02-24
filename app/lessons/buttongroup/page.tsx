import { Button, ButtonGroup, Stack, Typography } from "@mui/material";

const Page = () => {
    return (
        <>
        <Typography variant="h2">ButtonGroup</Typography>

        <Typography variant="h4">variant</Typography>

        <Typography variant="h6">contained</Typography>
        <ButtonGroup variant="contained">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
        </ButtonGroup>

        <Typography variant="h6">outlined</Typography>
        <ButtonGroup variant="outlined">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
        </ButtonGroup>

        <Typography variant="h4">orientarion</Typography>

        <Typography variant="h6">vertical</Typography>
        <ButtonGroup orientation="vertical">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
        </ButtonGroup>

        <Typography variant="h6">horizontal</Typography>
        <ButtonGroup orientation="horizontal">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
        </ButtonGroup>

        <Typography variant="h4">color</Typography>

        <Typography variant="h6">primary</Typography>
        <ButtonGroup color="primary">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
        </ButtonGroup>

        <Typography variant="h6">secondary</Typography>
        <ButtonGroup color="secondary">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
        </ButtonGroup>

        <Typography variant="h4">size</Typography>

        <Typography variant="h6">small</Typography>
        <ButtonGroup size="small">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
        </ButtonGroup>

        <Typography variant="h6">medium</Typography>
        <ButtonGroup size="medium">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
        </ButtonGroup>

        <Typography variant="h6">large</Typography>
        <ButtonGroup size="large">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
        </ButtonGroup>
        </>
    );
}
 
export default Page;