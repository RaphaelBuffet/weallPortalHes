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
            diplome: 'Informatique de gestion'
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
            debut:'2015-09-23',
            fin:'2021-02-01',
            entreprise: 'Constellium Valais Sa',
            secteurs: 1,
            poste: 'Stagiaire',
            localite: 1,
            description:"je suis la description des taches de Bernard La « description de fonction » explique ce qui est attendu d’un travailleur à tel poste à tel moment. En matière de bien-être au travail, elle permet de prévenir (ou d’objectiver) les conflits de rôles ou de responsabilités, les surcharges (ou les sous-charges) de travail. Le descriptif de fonction est un document de référence qui est encore loin d’être généralisé dans les organisations du secteur non marchand. Pour être facilement utilisable, il doit présenter deux qualités : concision et précision.Deux écueils sont à éviter lors de l’établissement de ce document :",
            actuelle:true,
            pays:0
        },
        {
            debut:'2010-08-01',
            fin:'2014-07-30',
            entreprise: 'Constellium Valais Sa',
            secteurs: 1,
            poste: 'Collaborateurs',
            localite: 1,
            description:"je suis la description des taches de Bernard",
            actuelle:false,
            pays:1
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
        },
        {
            nom:0,
            niveau:2
        }
    ],
    softskill : [1,2,3],
    langue : [
        {
            nom:1,
            niveau:1,
            certificat:'DALF',
            date:'2018-01-01',
            sejours: [
                {
                    pays:'France',
                    type:1,
                    debut:'2015-01-01',
                    fin:'2016-01-01'
                },
                {
                    pays:'Suisse',
                    type:1,
                    debut:'2016-01-01',
                    fin:'2018-01-01'
                }
            ]
        },
        {
            nom:2,
            niveau:1,
            certificat:'',
            date:'2016-01-01',
            sejours: []
        }
    ]
}