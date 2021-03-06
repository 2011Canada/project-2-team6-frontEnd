import React, { useState } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import banner from '../pictures/banner.png';
import Footer from '../components/footer/Footer';
import { BrowserRouter as Router, Route, Switch, useParams, Link } from "react-router-dom"; //do not delete unused imports!!! will cause the whole program to break!!!(Link will NOT work for some reason if unused imports are deleted but I'm too tired to figure out why.)
import SubjectButtonComponent from '../components/SubjectButtonComponent';
import { createStyles, makeStyles, Paper } from '@material-ui/core';
import PopularBooks from '../components/Carousel/PopularBooks';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
            // flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '5%',
            '& > *': {
                // margin: theme.spacing(10),
                width: theme.spacing(50),
                height: theme.spacing(40),
            },
        },
    }),
);

export const HomePage: React.FunctionComponent<any> = (props) => {
    const classes = useStyles();

    const loggedInUsername = localStorage.getItem('username')

    return (
        <div style={{backgroundColor:'#f5e0d1', height:'100vh'}}>

            <div style={{ width: "100%", position: 'relative' }}>
                <Navbar style={{ height: "100%" }} collapseOnSelect expand="lg" bg="dark" variant="dark">


                    <Navbar.Brand href="./home">Super Duper Awesome Books</Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">

                        <div style={{ position: "absolute", right: "0", }}>
                            <Link to={`/myprofile`} style={{ paddingRight: '5px' }}>
                                <Button variant="outline-secondary" size="lg">{`${loggedInUsername}'s Profile`}</Button>
                            </Link>
                            <Link to={`/club-registration`} style={{ paddingRight: '5px' }}>
                                <Button variant="outline-secondary" size="lg">Make a Club!</Button>
                            </Link>
                            <Link to={`/search-clubs`} style={{ paddingRight: '5px' }}>
                                <Button variant="outline-secondary" size="lg">Search Clubs!</Button>
                            </Link>
                            <Link to={`/search-page`} style={{ paddingRight: '5px' }}>
                                <Button variant="outline-secondary" size="lg">Search Books!</Button>
                            </Link>
                            <Link to={`/`} style={{ paddingRight: '620px' }}>
                                <Button variant="outline-secondary" size="lg" >
                                    Sign Out!
                                </Button>
                            </Link>
                            
                        </div>
                    </Navbar.Collapse>
                </Navbar>
                <img style={{ width: "100%" }} src={banner} alt="Logo" />
            </div>


            <div className={classes.root}>
                <div>
                    <PopularBooks />
                </div>
                <Paper elevation={15} style={{ backgroundColor: "#ffd699" }}>
                    <div style={{ marginLeft: '1em', marginTop: '1em' }}>
                        <h6 style={{ fontSize: '158%' }}>
                            Check Out The Newest Books!!!!
                        </h6>
                    </div>
                    <div style={{ marginLeft: '1em', marginTop: '2em' }}>
                        <div>
                            <Link to={`/subject-search/manga`} style={{ textDecoration: 'none' }}>
                                <SubjectButtonComponent text="Manga" />
                            </Link>

                            <Link to={`/subject-search/science-fiction`} style={{ textDecoration: 'none' }}>
                                <SubjectButtonComponent text="Science Fiction" />
                            </Link>
                        </div>

                        <div>
                            <Link to={`/subject-search/nonfiction`} style={{ textDecoration: 'none' }}>
                                <SubjectButtonComponent text="Nonfiction" />
                            </Link>
                            <Link to={`/subject-search/humor`} style={{ textDecoration: 'none' }}>
                                <SubjectButtonComponent text="Humor" />
                            </Link>
                        </div>

                        <div>
                            <Link to={`/subject-search/technology`} style={{ textDecoration: 'none' }}>
                                <SubjectButtonComponent text="technology" />
                            </Link>
                            <Link to={`/subject-search/programming-languages`} style={{ textDecoration: 'none' }}>
                                <SubjectButtonComponent text="Programming Languages" />
                            </Link>
                        </div>

                        <div>
                            <Link to={`/subject-search/mystery`} style={{ textDecoration: 'none' }}>
                                <SubjectButtonComponent text="Mystery" />
                            </Link>
                            <Link to={`/subject-search/thriller`} style={{ textDecoration: 'none' }}>
                                <SubjectButtonComponent text="Thriller" />
                            </Link>
                        </div>

                        <div>
                            <Link to={`/subject-search/fantasy`} style={{ textDecoration: 'none' }}>
                                <SubjectButtonComponent text="Fantasy" />
                            </Link>
                            <Link to={`/subject-search/adventure`} style={{ textDecoration: 'none' }}>
                                <SubjectButtonComponent text="Adventure" />
                            </Link>
                        </div>
                    </div>

                </Paper>


            </div>

            <Footer />
        </div>

    )
}

export default HomePage;