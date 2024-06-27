import { Box, Button, Container, Grid, Typography, styled } from '@mui/material';
import React from 'react';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const MainComponent = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    "& .card": {
        // border: "1px solid #074173",
        // borderRadius: "8px",
        // overflow: "hidden",
        // backgroundColor: "#f9f9f9",
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        // textAlign: 'center',
        // padding: theme.spacing(2),
        // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        // transition: "transform 0.3s, box-shadow 0.3s",
        // "&:hover": {
        //     transform: "translateY(-4px)",
        //     boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        // },
    },
    "& .card img": {
        height: '230px',
        objectFit: 'cover',
        width:"100%"
        // marginBottom: theme.spacing(2),
    },
    "& .card-title": {
        color: "#0064A8",
        fontWeight: 800,
    },
    "& .buttonBox":{
        display:"flex",
        justifyContent:"center",
        marginTop:"24px",
        "& button":{
            borderRadius:"20px",
            border:'1px solid',
            padding:"0px 16px 0px 17px",
            height:"40px",
            background:"#C7E8FA4D"
        }
    }
}));

const data = [
    {
        image: "/images/cardImg1.png",
        title: "Connector"
    },
    {
        image: "/images/cardImg3.png",
        title: "Metel Connector"
    },
    {
        image: "/images/cardImg1.png",
        title: "Material Engineering"
    },
    {
        image: "/images/cardImg3.png",
        title: "Material Engineering"
    },
    {
        image: "/images/cardImg4.png",
        title: "Material Engineering"
    },
    {
        image: "/images/cardImg2.png",
        title: "Material Engineering"
    }
];

const Products = () => {
    return (
        <MainComponent>
            <Container maxWidth="lg">
            <Box style={{ height: "100%", marginTop:"24px" }}>
                <Box>
                    <Typography variant="body2" style={{ color: "#074173", textTransform: "uppercase" }}>A quick look at</Typography>
                    <Typography variant="h3" style={{ color: "#0064A8", fontWeight:"600" }}>Our Products</Typography>
                </Box>

                <Grid container spacing={3} mt={2}>
                    {data.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box className="card">
                                <Box >
                                <img src={item.image} alt={item.title} style={{borderBottom:"3px solid #074173"}} />

                                </Box>
                            </Box>
                            <Typography variant='body2' className="card-title">{item.title}</Typography>

                        </Grid>
                    ))}
                </Grid>
                <Box className="buttonBox">
                    <Button endIcon={<HiOutlineArrowNarrowRight />}>Explore More Products</Button>
                </Box>
            </Box>
            </Container>
           
        </MainComponent>
    );
}

export default Products;
