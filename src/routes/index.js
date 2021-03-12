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

export default function Routes() {
    return (
      <Switch>
        <Route path="/" exact component={ProfilPostulant} />
        <Route path="/Profil" component={ProfilPostulant} />
        <Route path="/Filtre" component={FiltrePostulant}  />
        <Route path="/Swipe" component={SwipePostulant}  />
        <Route path="/Chat" component={ChatPostulant}  />
        <Route path="/Paramètre" component={ParametrePostulant}  />
        {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
        <Route component={ParametrePostulant} />
      </Switch>
    );
  }