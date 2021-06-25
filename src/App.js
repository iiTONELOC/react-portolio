import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Nav from './components/Nav';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import roboto from '@fontsource/roboto';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#8ce379"
    },
    secondary: {
      main: "#d079e3"
    }
  },
  fontFamily: roboto,
});
function App() {
  // constants for nav bar
  const [tabs] = useState([
    {
      name: 'About'
    },
    { name: 'Projects' },
    { name: 'Contact' },
    { name: 'Resume' },
  ]);
  return (
    <ThemeProvider
      theme={theme}
    >
      <Container
        className="Container"
        maxWidth={false}
        disableGutters
      >
        {/* INSERT NAV */}
        < Nav tabs={tabs}></Nav >
        {/* INSERT 'HERO' */}
        {/* INSERT ABOUT */}
        {/* INSERT PROJECTS/PORTFOLIO */}
        {/* INSERT  CONTACT*/}
        {/* INSERT DOWNLOAD RESUME */}
        {/* INSERT FOOTER */}
      </Container >
    </ThemeProvider>
    // *main div for page

  );
}

export default App;
