import React from 'react';
import { Grid, Container, Form, Button, Responsive } from 'semantic-ui-react';
import Lottie from 'react-lottie'
import contact_us from "../img/contact_us.json"

const Contact = () => {
    let defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: contact_us,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    const styles={
        rsText: {
            fontSize: 25,
            fontFamily: "Lato",
            color: "#757575",
            marginTop:10
        },
        rsDiv:{
            display: "flex", 
            justifyContent: "space-around", 
            marginTop: 20 
        },
        input:{
            marginTop: 10
        },
        mobileRsText:{
            fontSize: 25,
            fontFamily: "Lato",
            color: "#757575",
            textAlign: "center"
        },
        mobileBtnDiv:{
            textAlign: "center"
        }
        
    }

    return (

        <Container>
            <Grid columns={2}>
                <Grid.Row >
                    <Grid.Column tablet={8} mobile={16} computer={8} largeScreen={8}>
                    <Lottie options={defaultOptions} />
                    </Grid.Column>
                    <Grid.Column  tablet={8} mobile={16} computer={8} largeScreen={8}>
                        <Grid.Row columns={1}>
                        <Grid.Column>
                        <Form>
                            <Form.Group>
                                <Form.Input style={styles.input} placeholder='Prénom et nom' width={8} size="huge" iconPosition="left" icon="user" />
                                <Form.Input style={styles.input} placeholder='Email' width={8} size="huge" iconPosition="left" icon="at" />
                            </Form.Group>
                            <Form.Group >
                                <Form.Input style={styles.input} placeholder='Objet du message' width={16} size="huge" iconPosition="left" icon="envelope open outline" />

                            </Form.Group>
                            <Form.Group>
                                <Form.TextArea style={styles.input} placeholder="Quel est votre message ?" width={16} size="huge" />
                            </Form.Group>
                            <Form.Checkbox style={styles.input} label='Recevoir les infos relatives aux nouveautés de Wergu'  />
                            <Responsive minWidth={992}>
                            <Button  style={{backgroundColor: "#12A85C", color: "white"}} type='submit' size="large">Envoyer</Button>
                            </Responsive>

                            <Responsive maxWidth={991.99999}>
                            <div style={styles.mobileBtnDiv}>
                                <Button  style={{backgroundColor: "#12A85C", color: "white"}} type='submit' size="large">Envoyer</Button>

                            </div>
                            </Responsive>
                        </Form>
                        </Grid.Column>
                        <Grid.Column mobile={16}>
                            <Responsive minWidth={992}>
                            <p style={styles.rsText}>Retrouvez nous aussi sur les réseaux sociaux</p>
                            </Responsive>
                            <Responsive maxWidth={991.99999}>
                            <p style={styles.mobileRsText}>Retrouvez nous aussi sur les réseaux sociaux</p>
                            </Responsive>
                            <div style={styles.rsDiv}>

                                <Button circular icon='facebook' size="big"/>
                                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/wergumobile">
                                <Button circular icon='twitter' size="big" />
                                </a>

                            <Button circular icon='linkedin' size="big" />
                            <Button circular icon='instagram' size="big" />
                            
                            </div>
                        </Grid.Column>
                        </Grid.Row>
                       
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>

    );
};

export default Contact;