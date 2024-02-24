import { Button, Stack, Typography } from "@mui/material";

const Page = () => {
    return (
        <>
        <Typography variant="h1">Stack</Typography>
        <Typography variant="h5">Default</Typography>
        <Stack>
            <Button variant="outlined">1</Button>
            <Button variant="outlined">2</Button>
            <Button variant="outlined">3</Button>
            <Button variant="outlined">4</Button>
        </Stack>
        <Typography variant="h5">spacing: 1</Typography>
        <Stack spacing={1}>
            <Button variant="outlined">1</Button>
            <Button variant="outlined">2</Button>
            <Button variant="outlined">3</Button>
            <Button variant="outlined">4</Button>
        </Stack>
        <Typography variant="h5">direction: row</Typography>
        <Stack direction='row'>
            <Button variant="outlined">1</Button>
            <Button variant="outlined">2</Button>
            <Button variant="outlined">3</Button>
            <Button variant="outlined">4</Button>
        </Stack>
        </>
    );
}
 
export default Page;