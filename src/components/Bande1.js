import React from 'react';
import { Grid, Container, Image, Responsive } from 'semantic-ui-react';

import StoreButtonList from './StoreButtonList';


const Bande1 = ({ needStoreButtons = false, reversed, principalImage, text1, text2, references, name = "accueil", mt = 100 }) => {
    let styles = {
        title: {
            fontSize: 50,
            fontFamily: "Lato",
            fontWeight: "bold"
        },
        mobileTitle: {
            fontSize: 25,
            fontFamily: "Lato",
            fontWeight: "bold",
            textAlign: "left"
        },
        description: {
            fontSize: 30,
            fontWeight: "normal",
            fontFamily: "lato",
            color: "#757575"
        },
        mobileDescription:{
            fontSize: 20,
            fontWeight: "normal",
            fontFamily: "lato",
            color: "#757575"
        },
        image1: {
            display: "flex",
            justifyContent: reversed ? "flex-start" : "flex-end"
        },
        container: {
            marginTop: mt,
        }

    }




    let otherGridProps = reversed ? { reversed: "computer" } : {}
    return (
        <>
            <Responsive maxWidth={991.9999999}>
                <div style={{ marginTop: needStoreButtons ?120 :50 }}>
                    <Container>
                        <h1 style={styles.mobileTitle} ref={references && references[name]}>{text1}</h1>
                        <p style={styles.mobileDescription}>{text2}</p>

                        <Image
                            src={principalImage}
                            centered
                        />
                     {needStoreButtons && <StoreButtonList />}

                    </Container>
                </div>

            </Responsive>

            <Responsive as="div" minWidth={992}>
                <div style={{ paddingBottom: 60 }}>
                    <Container style={styles.container}>

                        <Grid columns={2}  {...otherGridProps} >
                            <Grid.Row >
                                <Grid.Column computer={9}>
                                    <h1 style={styles.title} ref={references && references[name]}>{text1}</h1>
                                    <p style={styles.description}>{text2}</p>
                                    {needStoreButtons && <StoreButtonList />}
                                </Grid.Column>
                                <Grid.Column computer={7}>
                                    <div style={styles.image1}>
                                        <Image
                                            src={principalImage}
                                        />
                                    </div>

                                </Grid.Column>
                            </Grid.Row>

                        </Grid>
                    </Container>
                </div>
            </Responsive>
        </>
    );
};

export default Bande1;