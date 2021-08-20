import React from 'react';
import { Grid, Responsive } from 'semantic-ui-react';
import StoreButtonList from './StoreButtonList';


const DownloadIt = () => {

    let styles = {
        container:{
            width: "100%",
            height:260,
            backgroundColor: "#12A85C"
        },
        mobileContainer:{
            width: "100%",
            backgroundColor: "#12A85C",
            marginTop: 20,
            padding: 20
        }, 
        text:{
            fontFamily: "Lato",
            fontWeight: "bold",
            color: "white",
            fontSize: 50,
            marginTop: 30
        },
        mobileText: {
            fontFamily: "Lato",
            fontWeight: "bold",
            color: "white",
            fontSize: 25,
            textAlign: "center"
        },
        storeBtnList:{
            marginTop: 80

        },
        mobileStoreBtnList:{
            marginTop: 10

        },
    }

    return (
        <>
        <Responsive maxWidth={991.9999}>
        <div style={styles.mobileContainer}>
           
            <Grid.Row  >
                <Grid.Column  >
                    <p style={styles.mobileText}>Qu'attendez vous pour télécharger Wergu ?</p>
                </Grid.Column>
                <Grid.Column >
                    <div style={styles.mobileStoreBtnList}>
                    <StoreButtonList/>
                    </div>
                </Grid.Column>
            </Grid.Row>

        </div>
        </Responsive>

        <Responsive minWidth={992}>
        <div style={styles.container}>
            <Grid columns={2} centered >
            <Grid.Row  >
                <Grid.Column computer={8} >
                    <p style={styles.text}>Qu'attendez vous pour télécharger Wergu ?</p>
                </Grid.Column>
                <Grid.Column computer={6} >
                    <div style={styles.storeBtnList}>
                    <StoreButtonList/>
                    </div>
                </Grid.Column>
            </Grid.Row>
            </Grid>
        </div>
        </Responsive>
        </>
    );
};

export default DownloadIt;