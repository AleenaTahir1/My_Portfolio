import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import PsychologyIcon from '@mui/icons-material/Psychology';
import DataObjectIcon from '@mui/icons-material/DataObject';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import WebIcon from '@mui/icons-material/Web';
import BuildIcon from '@mui/icons-material/Build';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

const StyledSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  padding: theme.spacing(15, 2),
  background: theme.palette.background.default,
  display: 'flex',
  alignItems: 'center',
}));

const SkillCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  background: theme.palette.mode === 'dark' 
    ? 'rgba(30, 30, 30, 0.98)'
    : 'rgba(255, 255, 255, 0.96)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(2),
  boxShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.5)' : 'none',
  border: theme.palette.mode === 'dark' 
    ? '1px solid rgba(255, 255, 255, 0.12)'
    : '1px solid rgba(0, 0, 0, 0.08)',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.palette.mode === 'dark' ? '0 8px 28px rgba(0,0,0,0.6)' : theme.shadows[10],
    '& .skill-icon': {
      transform: 'scale(1.1)',
      color: theme.palette.primary.main,
    },
    '& .skill-background': {
      transform: 'scale(1.2)',
      opacity: 0.1,
    }
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  marginBottom: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  '& .skill-icon': {
    fontSize: '2.5rem',
    color: theme.palette.text.primary,
    transition: 'all 0.3s ease',
  },
  '& .skill-background': {
    position: 'absolute',
    right: '-20px',
    top: '-20px',
    fontSize: '8rem',
    opacity: 0.05,
    transform: 'rotate(-15deg)',
    transition: 'all 0.3s ease',
    pointerEvents: 'none',
  }
}));

// Define types for skill items
type SkillItem = string | { name: string; level: string };

type SkillCategory = {
  category: string;
  icon: React.ReactNode;
  bgIcon: React.ReactNode;
  skills: SkillItem[];
};

const skillsData: SkillCategory[] = [
  {
    category: "AI & Agents",
    icon: <PsychologyIcon />,
    bgIcon: <AutoFixHighIcon />,
    skills: ["n8n", "LangChain", "RAG", "OpenAI", "Ollama", "Gemini"]
  },
  {
    category: "Backend",
    icon: <TerminalIcon />,
    bgIcon: <DataObjectIcon />,
    skills: ["FastAPI", "Supabase", "ChromaDB", "MongoDB", "Rust", "Python", "Go"]
  },
  {
    category: "DevOps",
    icon: <BuildIcon />,
    bgIcon: <CodeIcon />,
    skills: ["AWS", "CI/CD", "GitHub Actions", "Docker", "Vercel"]
  },
  {
    category: "Frontend",
    icon: <WebIcon />,
    bgIcon: <CodeIcon />,
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "JavaScript"]
  },
  {
    category: "Languages",
    icon: <CodeIcon />,
    bgIcon: <DataObjectIcon />,
    skills: ["Python", "Rust", "Go", "JavaScript", "TypeScript"]
  }
];

const SkillsSection = () => {
  return (
    <StyledSection id="skills">
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component={motion.h2}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          sx={{
            mb: 6,
            color: 'primary.main',
            textAlign: 'center',
            fontWeight: 'bold'
          }}
        >
          Technical Expertise
        </Typography>

        <Grid container spacing={4}>
          {skillsData.map((category, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillCard>
                  <IconWrapper>
                    <span className="skill-icon">{category.icon}</span>
                    <Typography variant="h5" fontWeight="bold">
                      {category.category}
                    </Typography>
                    <span className="skill-background">{category.bgIcon}</span>
                  </IconWrapper>
                  <Box sx={{ mt: 3 }}>
                    {category.skills.map((skill, skillIndex) => (
                      <Typography
                        key={skillIndex}
                        variant="body1"
                        sx={{
                          my: 1,
                          display: 'flex',
                          alignItems: 'center',
                          '&:before': {
                            content: '""',
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: 'primary.main',
                            marginRight: 2,
                          }
                        }}
                      >
                        {typeof skill === 'object' && 'name' in skill ? `${skill.name} (${skill.level})` : skill}
                      </Typography>
                    ))}
                  </Box>
                </SkillCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledSection>
  );
};

export default SkillsSection;
