import * as React from 'react';
import {  Card, Box, CardHeader, CardContent, CardActions, FormControl, TextField, Button, IconButton, Typography } from '@mui/material';
import {experience, formation} from '../models/Cv';
import { format } from 'path';
import { RemoveCircleOutline } from '@mui/icons-material';


interface state {
    experiences: experience[];
}

interface textFieldInFo {
    label?: string;
    type?: string;
    variant?: "standard" | "filled" | "outlined" | undefined;
    sx?: any;
    value: any;
}


let dateStr = new Date().toISOString().slice(0, 10);

export default class Experience extends React.Component<{}, state>
{
    constructor(props: any) {
        super(props);
        this.state = {
            experiences: [
                {
                    date: "2021-10-10",
                    nom: "",
                    experience: ""
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
                    <CardHeader title="Expérience"/>
                    <CardContent>
                        {
                            this.state.experiences.map((experience, index) => (
                                <Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                }}
                            >
                                <Typography  variant="h6">Experience {index + 1}</Typography>
                                <IconButton
                                onClick={() => {
                                    this.setState({
                                        experiences: this.state.experiences.filter((item, i) => i !== index)
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
                                            value: experience.date,
                                            onchange: (e: any) => {
                                                this.setState({
                                                    experiences: this.state.experiences.map((item, i) => {
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
                                            label: "Entreprise",
                                            type: "text",
                                            sx: { width: "100%" },
                                            value: experience.nom,
                                            onChange: (e: any) => {
                                                this.setState({
                                                    experiences: this.state.experiences.map((item, i) => {
                                                        if (i === index) {
                                                            return {
                                                                ...item,
                                                                nom: e.target.value
                                                            };
                                                        }
                                                        return item;
                                                    })
                                                });
                                            }
                                        },
                                        {
                                            label: "Experience",
                                            type: "text",
                                            sx: { width: "100%" },
                                            value: experience.experience,
                                            onChange: (e: any) => {
                                                this.setState({
                                                    experiences: this.state.experiences.map((item, i) => {
                                                        if (i === index) {
                                                            return {
                                                                ...item,
                                                                experience: e.target.value
                                                            };
                                                        }
                                                        return item;
                                                    })
                                                });
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
                                    experiences: [...this.state.experiences, {
                                        date: "",
                                        nom: "",
                                        experience: ""
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