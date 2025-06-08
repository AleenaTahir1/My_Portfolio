import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Global, css } from '@emotion/react';
import { getTheme } from './theme';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

const AppContent = () => {
  const { mode } = useTheme();
  const theme = getTheme(mode);

  const globalStyles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
      font-size: 16px;
      -webkit-text-size-adjust: 100%;
    }

    body {
      width: 100%;
      min-height: 100vh;
      overflow-x: hidden;
      background-color: ${theme.palette.background.default};
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
      line-height: 1.6;
      transition: background-color 0.3s ease;
    }

    #root {
      width: 100%;
      min-height: 100vh;
    }

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background: ${theme.palette.background.default};
    }

    ::-webkit-scrollbar-thumb {
      background: ${theme.palette.primary.main};
      border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${theme.palette.primary.dark};
    }
  `;

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Global styles={globalStyles} />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </MuiThemeProvider>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
