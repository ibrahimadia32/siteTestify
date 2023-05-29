import React from 'react';
import { Card, Box, CardHeader, CardContent, FormControl, TextField, Button } from '@mui/material';

interface CompetencesState {
  competences: { titre: string; description: string }[];
}

const defaultValues = [
  'Clés',
  'Savoir-être',
  'Outils tests',
  'Outils',
  'BDD',
  'Langages',
  'Méthodes',
  'Langues',
  'Domaines'
];

export default class Competences extends React.Component<{}, CompetencesState> {
  constructor(props: any) {
    super(props);
    this.state = {
      competences: defaultValues.map((value) => ({ titre: value, description: '' }))
    };
  }

  handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { competences } = this.state;
    const index = Number(event.target.getAttribute('data-index'));
    competences[index].description = event.target.value;
    this.setState({ competences });
  };

  render() {
    const { competences } = this.state;

    return (
      <Card sx={{ maxWidth: '60%', margin: 'auto', marginTop: '5%', boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.5)' }} variant="outlined">
        <CardHeader title="Compétences" />
        <CardContent>
          {competences.map((competence, index) => (
            <Box key={index} mb={2}>
              <Box display="flex" justifyContent="flex-end" alignItems="center">
                <TextField
                  label="Titre"
                  value={competence.titre}
                  disabled
                  sx={{ width: '100%' }}
                />
                <TextField
                  required
                  label="Description"
                  value={competence.description}
                  onChange={this.handleDescriptionChange}
                  data-index={index}
                  sx={{ width: '100%', ml: 2 }}
                />
              </Box>
            </Box>
          ))}
        </CardContent>
        <Box display="flex" justifyContent="flex-end" p={2}>
          <Button variant="contained" sx={{ ml: 2 }}>
            Suivant
          </Button>
        </Box>
      </Card>
    );
  }
}
