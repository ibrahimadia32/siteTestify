import * as React from "react";
import {TextField, Box, FormControl,Card, CardActions,IconButton, Button} from '@mui/material';
import {Cv} from '../models/Cv';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


interface textfieldElement {
    title: string;
    value?: any | undefined;
    type: string;
    required?: boolean;
    multiline?: boolean;
    sx?: any;
}
const styles = {
    box: {
        display:'row',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        heigth: '100px',
        padding: '10px',
        margin: '5px'
    },
    texfield: {
        margin: '5px',


    }
}
    


const texfields : textfieldElement[] = [
    {
        title: 'Clés',
        type: 'text',
        required: true,
    },
    {
        title: 'Savoir-être',
        type: 'text',
        required: true
    },
    {
        title: 'Outils tests',
        type: 'text',
        required: true
    },
    {
        title: 'Outils',
        type: 'text',
        required: true
    },
    {
        title: 'SGBD',
        type: 'text',
        required: true
    },
    {
        title: 'Langages',
        type: 'text',
        required: true
    },
    {
        title: 'Méthodes',
        type: 'text',
        required: true
    },
    {
        title: 'Langues',
        type: 'text',
        required: true
    },
    {
        title: 'Domaines',
        type: 'text',
        required: true
    },
]

export default class Form extends React.Component
{
    render(): React.ReactNode {
        return (
            <Card variant="outlined">

            <Box
            sx={styles.box}
            >
                <h1>Compétences</h1>
                {
                    texfields.map((element) => {
                        return (
                            <FormControl sx={
                                !!element.sx ? element.sx : styles.texfield
                            }>
                            <TextField id="outlined-basic"
                            value={!!element.value
                                ? element.value
                                : undefined}
                            label={element.title} variant="outlined" />
                            </FormControl>
                        )
                    })
                }

                
            </Box>
            <CardActions>
                <Button>
                {""}
                </Button>
            </CardActions>
            </Card>

            
        )
    }
}