import { Button, Dialog, Stack } from "@mui/material"
import { FunctionComponent } from "react";

interface data {
    name: string;
}
export const CommonDialogComponent: FunctionComponent<data> = ({
    name
}) => {

    return (
        <Stack>
            {name}
        </Stack>
    )
}