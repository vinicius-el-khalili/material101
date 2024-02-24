import { AddShoppingCart } from "@mui/icons-material";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";

const PageButtons = () => {
    return (
        <>
        <Typography variant="h1">Button</Typography>

        <Typography variant="h4">variant</Typography>
        <Stack direction='row' spacing={1}>
            <Button variant="text">Text</Button>
            <Button variant="contained">contained</Button>
            <Button variant="outlined">oulined</Button>
            <Button variant="outlined" href="/lessons/button">link</Button>
        </Stack>

        <Typography variant="h4">color</Typography>
        <Stack direction='row' spacing={1}>
            <Button variant="outlined" color="primary">primary</Button>
            <Button variant="outlined" color="secondary">secondary</Button>
            <Button variant="outlined" color="error">error</Button>
            <Button variant="outlined" color="warning">warning</Button>
            <Button variant="outlined" color="info">info</Button>
            <Button variant="outlined" color="success">success</Button>
        </Stack>

        <Typography variant="h4">size</Typography>
        <Stack direction="row" display="block" spacing={2}>
            <Button variant="outlined" size="small">small</Button>
            <Button variant="outlined" size="medium">medium</Button>
            <Button variant="outlined" size="large">large</Button>
        </Stack>

        <Typography variant="h4">Icons</Typography>
        <Stack direction='row' spacing={1}>
            <Button variant="outlined" startIcon={<AddShoppingCart/>}>startIcon</Button>
            <Button variant="outlined" endIcon={<AddShoppingCart/>}>endIcon</Button>
        </Stack>
        
        <Typography variant="h4">IconButton</Typography>
        <Stack direction='row' spacing={1}>
            <IconButton><AddShoppingCart/></IconButton>
            <IconButton color="primary"><AddShoppingCart/></IconButton>
            <IconButton color="secondary"><AddShoppingCart/></IconButton>
            <IconButton color="error"><AddShoppingCart/></IconButton>
        </Stack>
            
        <Typography variant="h4">disable</Typography>
        <Stack direction='row' spacing={1}>
            <Button variant="contained" disableElevation>elevation</Button>
            <Button variant="contained" disableRipple>ripple</Button>
        </Stack>
            
        </>
    );
}
 
export default PageButtons;