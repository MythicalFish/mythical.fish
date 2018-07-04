import Typography from "typography";
import theme from "typography-theme-fairy-gates";

theme.baseFontSize = '18px'
theme.overrideThemeStyles = () => ({
  'a': {
    textShadow: 'none'
  }
})

const typography = new Typography(theme);

export default typography;
