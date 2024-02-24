import { InputAdornment, Stack, TextField, Typography } from "@mui/material";

const Page = () => {
    return (
    <>
    <Typography variant="h1">TextField</Typography>
    <Stack spacing={4}>

        <TextField label="label"/>
        
        <Typography variant="h4">variant</Typography>
        <Stack spacing={4} direction={"row"}>
            <TextField label="outlined" variant="outlined"/>
            <TextField label="filled" variant="filled"/>
            <TextField label="standard" variant="standard"/>
        </Stack>

        <Typography variant="h4">color</Typography>
        <Stack spacing={4} direction={"row"}>
            <TextField variant="filled" color="primary" label="primary"/>
            <TextField variant="filled" color="secondary" label="secondary"/>
            <TextField variant="filled" color="warning" label="warning"/>
        </Stack>
        
        <Typography variant="h4">size</Typography>
        <Stack spacing={4} direction={"row"}>
            <TextField label="medium" size="medium"/>
            <TextField label="small" size="small"/>
        </Stack>

        <Typography variant="h4">required & error</Typography>
        <Stack spacing={4} direction={"row"}>
            <TextField label="default"/>
            <TextField label="required" required/>
            <TextField label="error" error/>
        </Stack>

        <Typography variant="h4">helperText</Typography>
        <Stack spacing={4} direction={"row"}>
            <TextField label="default"/>
            <TextField label="helperText" helperText="Helper text."/>
        </Stack>

        <Typography variant="h4">type</Typography>
        <Stack spacing={4} direction={"row"}>
            <TextField label="default"/>
            <TextField label="password" type="password"/>
            <TextField label="number" type="number"/>
        </Stack>

        <Typography variant="h4">disabled</Typography>
        <Stack spacing={4} direction={"row"}>
            <TextField label="default"/>
            <TextField label="disabled" disabled/>
        </Stack>

        <Typography variant="h4">InputProps</Typography>
        <Stack spacing={4} direction={"row"}>
            <TextField label="default"/>
            <TextField label="startAdornment" InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
            }}/>
            <TextField label="endAdornment" InputProps={{
                endAdornment: <InputAdornment position="end">kg</InputAdornment>
            }}/>
        </Stack>

    </Stack>
    </>
    );
}
 
export default Page;