import { Box, Button, Container, IconButton, Typography, styled } from '@mui/material';
import React from 'react';
import { GoArrowUpRight } from "react-icons/go";

const MainComponent = styled("Box")(({ theme }) => ({
    fontFamily: "Rota !important",
    "& h4": {
        fontFamily: "'Rota', sans-serif",
        color: "#FFFFFF",
        fontWeight: "600",
        fontSize: "34px",
        marginTop: "50px"
    },
    "& p": {
        fontFamily: "'Rota', sans-serif",
        color: "#FFFFFF",
        fontSize: "16px",
        width:"320px"
    },
    "& .sec_1": {
        backgroundImage: `url('/images/bgImage_1.png.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '360px',
        width: "100%",
        position: "relative",
        backgroundAttachment: "fixed",
        display: 'flex',
        alignItems: 'center', // Center vertically
        justifyContent: 'flex-start', // Align to the left
        // paddingLeft: theme.spacing(3), // Add some left padding if needed
    },
    "& .sec_1_child": {
        height: "360px",
        width: "100%",
        maxWidth: "600px",
        objectFit: "cover",
        backgroundImage: `url('/images/vectorImg_2.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
    },
    "& .contentText": {
        maxWidth: "600px", // Adjust as needed
    },
    "& .performanceText": {
        marginBottom: "24px",
        marginTop:"16px",
        display: "flex",
        alignItems: "center",
        "& .empoweringText": {
            position: "relative",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            "& img": {
                position: "absolute",
                height: "auto",
                // width: "100%",
            },
            "& h2": {
                fontFamily: "'Rota', sans-serif",
                color: "#FFFFFF",
                fontSize: "52px",
                zIndex: 1,
                fontWeight: "600",
            },
        },
        "& h3": {
            fontFamily: "'Rota', sans-serif",
            color: "#FFFFFF",
            fontWeight: "600",
            fontSize: "52px",
            marginLeft: "20px",
            zIndex:"1"
        },
    }
}));

const PowerConnection = () => {
    return (
        <MainComponent>
            <Box>
                <Box className="sec_1">
                    <Box className="sec_1_child" />
                    <Container maxWidth="lg">
                        <Box className="contentText">
                            <Typography variant='h4'>Powering Connections</Typography>
                            <Box className="performanceText">
                                <Box className="empoweringText">
                                    <img src='/images/vector.png' alt='vector' />
                                    <Typography variant='h2'>Empowering</Typography>
                                </Box>
                                <Typography variant='h3'>Performance</Typography>
                            </Box>
                            <Typography variant='body2'>Welcome to Modvak, your trusted partner in top-quality battery terminals.</Typography>
                            <Box mt={3}>
                                <Button style={{ color: "#fff", textTransform: "capitalize" }} endIcon={<IconButton style={{ backgroundColor: "#fff" }}><GoArrowUpRight /></IconButton>}>
                                    Explore More
                                </Button>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </MainComponent>
    );
}

export default PowerConnection;
