export interface compentence {
    cle: string;
    savoiretre: string;
    outilstest: string;
    outils: string;
    SGBD: string;
    langages: string;
    methodes: string;
    langues: string;
    domaines: string;
}

export interface formation {
    date: string;
    nom: string;
    formation: string;
}

export interface experience {
    date: string;
    nom: string;
    experience: string;

}

export interface Cv {
    nom : string;
    prenom : string;
    adresse : string;
    competences : compentence;
    formations : formation;
    experiences : experience;
}