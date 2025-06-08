import { IconButton, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '../contexts/ThemeContext';

const StyledToggleButton = styled(IconButton)(({ theme }) => ({
  position: 'relative',
  width: 48,
  height: 48,
  borderRadius: '50%',
  background: theme.palette.mode === 'light' 
    ? 'linear-gradient(135deg, #FFD54F 0%, #FF8F00 100%)'
    : 'linear-gradient(135deg, #5C6BC0 0%, #3F51B5 100%)',
  color: '#FFFFFF',
  boxShadow: theme.palette.mode === 'light'
    ? '0 4px 12px rgba(255, 193, 7, 0.4)'
    : '0 4px 12px rgba(63, 81, 181, 0.4)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: theme.palette.mode === 'light'
      ? '0 6px 20px rgba(255, 193, 7, 0.6)'
      : '0 6px 20px rgba(63, 81, 181, 0.6)',
  },
  
  '&:active': {
    transform: 'scale(0.95)',
  },
  
  '& .MuiSvgIcon-root': {
    fontSize: '1.4rem',
    transition: 'all 0.3s ease',
  },
}));

const IconWrapper = styled(motion.div)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
});

const ThemeToggle = () => {
  const { mode, toggleTheme } = useTheme();

  const iconVariants = {
    initial: { scale: 0, rotate: -180, opacity: 0 },
    animate: { scale: 1, rotate: 0, opacity: 1 },
    exit: { scale: 0, rotate: 180, opacity: 0 },
  };

  return (
    <Tooltip 
      title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
      arrow
      placement="bottom"
    >
      <StyledToggleButton 
        onClick={toggleTheme}
        aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
      >
        <IconWrapper
          key={mode}
          variants={iconVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            duration: 0.3
          }}
        >
          {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconWrapper>
      </StyledToggleButton>
    </Tooltip>
  );
};

export default ThemeToggle; 