import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import LangtonAntBackground from './LangtonAntBackground';
import { useTheme } from '../contexts/ThemeContext';

const StyledSection = styled('section')<{ $isDark: boolean }>`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: ${({ $isDark }) => 
    $isDark 
      ? 'linear-gradient(135deg, #1a1a1a 0%, #2d3748 100%)' 
      : 'linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)'
  };
  padding: 80px 0;
  transition: background 0.3s ease;
  
  /* Mobile responsive adjustments */
  @media (max-width: 768px) {
    padding: 60px 0;
  }
  
  @media (max-width: 480px) {
    padding: 40px 0;
  }
`;

const ContentWrapper = styled('div')`
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  color: #fff;
  position: relative;
  z-index: 2; /* Ensure content is above the background */
  width: 100%;
  
  /* Mobile responsive adjustments */
  @media (max-width: 768px) {
    padding: 0 15px;
  }
  
  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

const ProfileImage = styled('img')`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  margin: 0 auto 2rem auto;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  border: 4px solid white;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 3; /* Higher z-index to ensure it's above everything else */
  display: block;
  
  &:hover {
    transform: scale(1.02);
  }
  
  /* Responsive adjustments for tablets */
  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
    margin-bottom: 1.5rem;
  }
  
  /* Responsive adjustments for mobile phones */
  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
    margin-bottom: 1rem;
    border-width: 3px;
  }
`;

const HeroText = styled('div')`
  text-align: center;
  
  h1 {
    font-family: 'Poppins', 'Inter', sans-serif;
    font-size: clamp(1.75rem, 2.5vw + 1rem, 3rem);
    font-weight: 700;
    margin-bottom: 1rem;
    color: #ffffff;
  }
  
  h2 {
    font-family: 'Inter', sans-serif;
    font-size: clamp(1rem, 1vw + 0.9rem, 1.5rem);
    font-weight: 500;
    color: #e0e0e0;
    margin-bottom: 2rem;
    line-height: 1.5;
  }
  
  p {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    color: #bdbdbd;
    max-width: 700px;
    margin: 0 auto 1.5rem auto;
    
    @media (max-width: 768px) {
      font-size: 0.95rem;
      line-height: 1.5;
      max-width: 100%;
      padding: 0 10px;
    }
    
    @media (max-width: 480px) {
      font-size: 0.9rem;
      line-height: 1.5;
      margin-bottom: 1rem;
    }
  }
`;

const DownloadButton = styled('a')`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  background-color: #4ca1af;
  color: #ffffff;
  padding: 12px 24px;
  font-size: 0.95rem;
  border-radius: 30px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-decoration: none;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, transparent, rgba(255,255,255,0.2), transparent);
    transform: translateX(-100%);
    transition: all 0.6s ease;
    z-index: -1;
  }
  
  &:hover {
    background-color: #2c3e50;
    transform: translateY(-3px);
    box-shadow: 0 12px 25px rgba(0,0,0,0.2);
  }
  
  &:hover:before {
    transform: translateX(100%);
  }
  
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  /* Responsive adjustments for tablets */
  @media (max-width: 768px) {
    margin-top: 1.5rem;
    padding: 10px 25px;
    font-size: 1rem;
  }
  
  /* Responsive adjustments for mobile phones */
  @media (max-width: 480px) {
    margin-top: 1rem;
    padding: 8px 20px;
    font-size: 0.9rem;
  }
`;

const HeroSection = () => {
  const { mode } = useTheme();

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2, duration: 0.5 } }),
  };

  return (
    <StyledSection id="home" $isDark={mode === 'dark'}>
      <LangtonAntBackground />
      <ContentWrapper>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ProfileImage
            src={`${import.meta.env.BASE_URL}profile.webp`}
            alt="Saqlain Abbas"
          />
        </motion.div>

        <HeroText>
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Saqlain Abbas
          </motion.h1>
          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            AI & Machine Learning Student
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <DownloadButton
              href={`${import.meta.env.BASE_URL}SaqlainAbbas_CV.pdf`}
              download="SaqlainAbbas_CV.pdf"
            >
              <FileDownloadIcon style={{ marginRight: '10px', fontSize: '1.3rem' }} />
              Download CV
            </DownloadButton>
          </motion.div>
        </HeroText>
      </ContentWrapper>
    </StyledSection>
  );
};

export default HeroSection;
