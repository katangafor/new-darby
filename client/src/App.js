import React from 'react';
import './styles/App.scss';
import AppRouter from './routers/AppRouter';

function App() {
  return (
    <AppRouter />
  );
}

export default App;

/*
  Little TODOS
  - use a color transition instead of a move-down transition on the client portal hover
    - this one looks p cool https://stackoverflow.com/questions/17212094/fill-background-color-left-to-right-css\
    - actually this looks more realistic https://stackoverflow.com/questions/4411306/transition-of-background-color
      - but I need to figure out webkit shit
  - make a fake client portal page
  - put buttons at the bottom of the pricing things to go to contact
*/

/*
  Big TODOS
  - website is firefox inaccessible??
    - https://stackoverflow.com/questions/3846868/why-wont-tabindex-work-with-firefox
  - need a footer and a privacy policy, this might help: https://formswift.com/builder.php?documentType=privacy-policy-v2&ses=78a297823c334e7c5653a597ff3f335a&key=83240292#1
*/