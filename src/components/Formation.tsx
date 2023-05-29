import * as React from 'react';
import {  Card, Box, CardHeader, CardContent, CardActions, FormControl, TextField, Button, IconButton, Typography } from '@mui/material';
import {formation} from '../models/Cv';
import { format } from 'path';
import { RemoveCircleOutline } from '@mui/icons-material';


interface state {
    formations: formation[];
}

interface textFieldInFo {
    label?: string;
    type?: string;
    variant?: "standard" | "filled" | "outlined" | undefined;
    sx?: any;
    value: any;
}




export default class Formation extends React.Component<{}, state>
{
    constructor(props: any) {
        super(props);
        this.state = {
                formations: [
                {
                    date: "",
                    nom: "",
                    formation: ""
                }
            ]
        }
    }
    


    render(): React.ReactNode {

         return (
                <Card 
                sx={{ maxWidth: "60%",
                margin: "auto",
                marginTop: "5%",
                shadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.5)",
                
            }}
                
                variant="outlined">
                    <CardHeader title="Formations"/>
                    <CardContent>
                        {
                            this.state.formations.map((formation, index) => (
                                <Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                }}
                            >
                                <Typography  variant="h6">Formation {index + 1}</Typography>
                                <IconButton
                                onClick={() => {
                                    this.setState({
                                        formations: this.state.formations.filter((item, i) => i !== index)
                                    })
                                }}
                                >
                                    <RemoveCircleOutline />
                                </IconButton>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-around",
                                    alignItems: "center",
                                    height: "100%",
                                    width: "100%",
                                    gap: "10px",
                                    
                                }}
                            >
                                {
                                    
                                [
                                    {
                                            type: "date",
                                            // variant: "outlined",
                                            sx: {width: "100%"},
                                            value: formation.date,
                                            onchange: (e: any) => {
                                                this.setState({
                                                    formations: this.state.formations.map((item, i) => {
                                                        if (i === index) {
                                                            return {
                                                                ...item,
                                                                date: e.target.value
                                                            }
                                                        }
                                                        return item;
                                                    }
                                                    )
                                                })
                                            }

                                        },
                                        {
                                            label: "Boite",
                                            type: "text",
                                            // variant: "outlined",
                                            sx: {width: "100%"},
                                            value: formation.nom,
                                            onChange: (e: any) => {
                                                this.setState({
                                                    formations: this.state.formations.map((item, i) => {
                                                        if (i === index) {
                                                            return {
                                                                ...item,
                                                                nom: e.target.value
                                                            }
                                                        }
                                                        return item;
                                                    }
                                                    )
                                                })
                                            }

                                        },
                                        {
                                            label: "Formation",
                                            type: "text",
                                            // variant: "outlined",
                                            sx: {width: "100%"},
                                            value: formation.formation,
                                            onChange: (e: any) => {
                                                this.setState({
                                                    formations: this.state.formations.map((item, i) => {
                                                        if (i === index) {
                                                            return {
                                                                ...item,
                                                                formation: e.target.value
                                                            }
                                                        }
                                                        return item;
                                                    }
                                                    )
                                                })
                                            }


                                        },
                                    ].map((item, index) => {
                                        return (
                                            <>
                                            
                                            <FormControl 
                                            sx={item.sx}
                                            key={index}>
                                                <TextField
                                                    required
                                                    label={item.label}
                                                    type={item.type}
                                                    variant={"outlined"}
                                                    value={item.value}
                                                    onChange={item.onChange}
                                                />
                                            </FormControl>
                                            </>
                                        )
                                    })
                                }
                            </Box>
                        </Box>
                            ))
                        }
                    </CardContent>
                    <CardActions
                        sx={
                            {
                                display: "flex",
                                justifyContent: "flex-end",
                            }
                        }
                    >   
                            <Button variant="contained"
                            size="small"
                            onClick={() => {
                                this.setState({
                                    formations: [...this.state.formations, {
                                        date: "",
                                        nom: "",
                                        formation: ""
                                    }]
                                })
                            }}

                            
                            >Ajouter</Button>
                            <Button 
                            size="small"
                            sx={{marginRight: "10px"}}
                            variant="contained">Suivant</Button>
                    </CardActions>
                </Card>
        )
    }
}