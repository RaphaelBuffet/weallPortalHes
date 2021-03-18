import Competence from "./Competence";

export const data = {
    nom:"Raphy",
    prenom:'Buffet',
    naissance: '1997-09-23',
    sexe: '0',
    adresse: 'Rue de moi-meme 61',
    adresseSuplement: '',
    descritpion: 'coucou je sui un test',
    npa: '1967',
    localité: '0',
    telephone: '078 935 47 75',
    formation :[
        {
            debut:'2017-09-23',
            fin:'2021-03-01',
            cursus: 1,
            institut: 1,
            degre: 1,
            diplome: 'informatique de gestion'
        },
        {
            debut:'2012-08-01',
            fin:'2016-07-30',
            cursus: 1,
            institut: 1,
            degre: 1,
            diplome: 'Maturité commerciale'
        }
    ],
    experience :[
        {
            debut:'2017-09-23',
            fin:'2021-03-01',
            entreprise: 'Constellium Valais Sa',
            secteurs: 1,
            poste: 'Stagiaire',
            localite: 1,
            description:"je suis la description des taches de Bernard"
        },
        {
            debut:'2012-08-01',
            fin:'2016-07-30',
            entreprise: 'Constellium Valais Sa',
            secteurs: 1,
            poste: 'Employée de bureua',
            localite: 1,
            description:"je suis la description des taches de Bernard"
        }
    ],
    competence : [
        {
            nom:1,
            niveau:1
        },
        {
            nom:2,
            niveau:1
        }
    ],
    softskill : [1,2,3],
    Langue : [
        {
            nom:1,
            niveau:1,
            certificat:'DALF',
            date:'2018-01-01',
            sejours: [
                {
                    pays:'France',
                    type:'1',
                    debut:'2015-01-01',
                    fin:'2016-01-01'
                },
                {
                    pays:'Suisse',
                    type:'1',
                    debut:'2016-01-01',
                    fin:'2018-01-01'
                }
            ]
        },
        {
            nom:1,
            niveau:1,
            certificat:'',
            date:'2016-01-01',
            sejours: []
        }
    ]
}