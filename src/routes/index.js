import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProfilPostulant from '../pages/Postulant/Profil';
import ChatPostulant from '../pages/Postulant/Chat';
import FiltrePostulant from '../pages/Postulant/Filtres';
import ParametrePostulant from '../pages/Postulant/Parametre';
import SwipePostulant from '../pages/Postulant/Swipe';
import ProfilEntreprise from '../pages/Entreprise/Profil';
import ChatEntreprise from '../pages/Entreprise/Chat';
import FiltreEntreprise from '../pages/Entreprise/Filtres';
import OffreEntreprise from '../pages/Entreprise/Offres';
import ParametreEntreprise from '../pages/Entreprise/Parametre';
import SwipeEntreprise from '../pages/Entreprise/Swipe';
import Connexion from '../pages/Connexion/index';
import Inscription from '../pages/Inscription/index';

export function RoutesPostulant() {
  return (
    <Switch>
      <Route path="/" exact component={ProfilPostulant} />
      <Route path="/postulant/profil" component={ProfilPostulant} />
      <Route path="/postulant/filtre" component={FiltrePostulant} />
      <Route path="/postulant/swipe" component={SwipePostulant} />
      <Route path="/postulant/chat" component={ChatPostulant} />
      <Route path="/postulant/parametre" component={ParametrePostulant} />
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={ParametrePostulant} />
    </Switch>
  );
}

export function RoutesEntreprises() {
  return (
    <Switch>
      <Route path="/" exact component={ProfilEntreprise} />
      <Route path="/entreprise/profil" component={ProfilEntreprise} />
      <Route path="/entreprise/offre" component={OffreEntreprise} />
      <Route path="/offre/Filtre" component={FiltreEntreprise} />
      <Route path="/offre/Swipe" component={SwipeEntreprise} />
      <Route path="/offre/Chat" component={ChatEntreprise} />
      <Route path="/entreprise/Parametre" component={ParametreEntreprise} />
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={ParametreEntreprise} />
    </Switch>
  );
}
export function RoutesConnexion() {
  return (
  <Switch>
    <Route path="/" exact component={Connexion} />
    <Route path="/connexion" exact component={Connexion} />
    <Route path="/inscription" exact component={Inscription} />
    {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
    <Route component={Connexion} />
  </Switch>
  );
}
