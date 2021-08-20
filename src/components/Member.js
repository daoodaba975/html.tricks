import React from 'react';
import { Grid, Image } from 'semantic-ui-react';


const Member = ({image, name, status}) => {
    let styles ={
        name:{
            textAlign: "center",
            fontSize: 40,
            fontWeight: "bold",
            marginTop: 20,
        },
        status: {
            fontSize: 30,
            //textAlign: "center"
            color: "#757575"
        },
        img:{
            textAlign: "center", 
            marginTop: 50
        }
    }
    return (
        <Grid.Column>
            <div style={styles.img}>
            <Image
                src={image}
                centered
            />
            </div>
            <p style={styles.name}>{name}
            
            <span style={styles.status}> <br/> {status}</span>

            </p>
            
        </Grid.Column>
    );
};

export default Member;