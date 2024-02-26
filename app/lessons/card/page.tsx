import { MoreHoriz, MoreVert } from "@mui/icons-material";
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, IconButton, Stack, Typography } from "@mui/material";

const Page = () => {
    return (
    <Stack spacing={4}>

        <Typography variant="h1">Card</Typography>

        <Card>
            <CardHeader
                avatar={
                    <Avatar>a</Avatar>
                }
                action={
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                }
                title={"Title"}
                subheader={"Subheader"}
            />
            <CardContent>
                CardContent: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor qui ducimus quia quaerat esse iusto explicabo ex illo voluptatum.
            </CardContent>
            <CardActions>
                <Button>CardActions</Button>
            </CardActions>
        </Card>

    </Stack>
    );
}
 
export default Page;