import Hero from "../Components/Hero";
import LandingFooter from "../Components/Landing-footer";
import LNavbar from "../Components/LNavbar";
import { Box, Modal, Button, Typography } from '@mui/material';
import { style } from '../Styles/Modal.js';
import { useState } from "react";

export default function LandingPage() {

    const [open2, setOpen2] = useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    return (

        <div className="landing-page">


            <LNavbar />

            <Hero callBack={handleOpen2} />

            <LandingFooter />




            <Modal
                open={open2}
                onClose={handleClose2}
                aria-labelledby="modal-modal-title2"
                aria-describedby="modal-modal-description2">

                <Box sx={style}>
                    <Typography id="modal-modal-title2" variant="h5" component="h1">
                        <b>About</b>
                    </Typography>
                    <br></br>
                    <Typography id="modal-modal-description2" variant="p" sx={{ mt: 2 }}>
                        Connected Education Space is a learning management system, powered and licensed by Modibbo Adama University Yola (MAU).
                    </Typography>
                    <br></br><br></br>
                    <p>
                        Since the emergence of the Corona virus pandemic which lead to the total lock down of schools,
                        learning management system has been of tremendous importance as it allows lecturers and students to
                        interact virtually, without having to go to the classroom. Connected Education Space is here to serve the
                        same purpose.
                        Connected Education Space allows lectures to share e-resources, create courses and lectures, hold
                        virtual classes and also to assess their students.
                    </p>
                </Box>
            </Modal>

        </div>

    );

}