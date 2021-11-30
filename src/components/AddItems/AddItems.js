import * as React from 'react';
import { Box, SpeedDial, SpeedDialIcon, SpeedDialAction, Modal, Container, TextField, RadioGroup, FormLabel, FormControlLabel, MenuItem } from '@mui/material';
import { FileCopy, Print, Save, Share, Radio } from '@mui/icons-material';
import { useState } from 'react';

import { createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const defaultTheme = createTheme();

const useStyles = makeStyles(
    (theme) => {
        return {
            box: {
                position: "fixed",
                right: 16,
                bottom: 16,
            },
            container: {
                positiion: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                margin: "auto",
                backgroundColor: "#fff",
                [theme.breakpoints.up('sm')]: {
                    width: "500px !important",
                    height: 500,
                },
                [theme.breakpoints.down('sm')]: {
                    height: "100vh",
                },
            },
            input: {
                width: "100%",
            }
        };
    },
    { defaultTheme },
);

const actions = [
    { icon: <FileCopy id="modal1" ariaLabel="modal1" />, name: 'File' },
    { icon: <Save id="modal2" ariaLabel="modal2" />, name: 'Save' },
    { icon: <Print />, name: 'Print' },
    { icon: <Share />, name: 'Share' },
];

const AddItems = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [modal, setModal] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
        <Box className={classes.box} sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
                ariaLabel="SpeedDial uncontrolled open example"
                icon={<SpeedDialIcon />}
                onClick={handleClose}
                onClick={handleOpen}
                // open={open}
            >
                {
                    actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={() => setModal(true)}
                            // onClick={}
                        />
                    ))
                }
            </SpeedDial>
        </Box>
        <Modal id="mdal1" ariaControls="modal1" open={modal}>
            <Container className={classes.container}>
                <form action="" autoComplete="off">
                    <div className={classes.formItem}>
                        <TextField id="standard basic" size="small" label="Title" className={classes.input}/>
                    </div>
                    <div className={classes.formItem}>
                        <TextField id="outline multiline static" multiline rows={4} size="small" label="Description" className={classes.input}/>
                    </div>
                    <div className={classes.formItem}>
                        <TextField select label="Visibility" value="Public" className={classes.input}>
                            <MenuItem value="Public">Public</MenuItem>
                            <MenuItem value="Private">Private</MenuItem>
                            <MenuItem value="Draft">Draft</MenuItem>
                        </TextField>
                    </div>
                    <div className={classes.formItem}>
                        <FormLabel component="legand">Privacy</FormLabel>
                        <RadioGroup>
                            <FormControlLabel value="basic" control={<Radio />} label="Basic"/>
                            <FormControlLabel value="standard" control={<Radio />} label="Standard"/>
                            <FormControlLabel value="disable" disabled control={<Radio />} label="Custom (Premium)"/>
                        </RadioGroup>
                    </div>
                </form>
            </Container>
        </Modal>
        </>
    );
};

export default AddItems;