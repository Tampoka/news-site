import {createGlobalStyle, ThemeProps} from 'styled-components';

export const theme = {
    fonts: {
        basic: "Meiryo",
        accent: '"UD Digi Kyokasho NP-B", cursive'
    },
    colors: {
        orange: "#f4ae40",
        blue: "#387af5",
        pink: "#eb57a3",
        gray:"#605f5f"
    }
}

export type MainThemeProps = ThemeProps<typeof theme>
export const GlobalStyle = createGlobalStyle<MainThemeProps>`
  body {
    margin: 0;
    font-family: ${({theme}) => theme.fonts.basic};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  :root {
    --footer-height: 50px;
    --header-height: 60px;
  }


  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  a {
    color: ${({theme}) => theme.colors.blue}
  }

  a:hover {
    color: ${({theme}) => theme.colors.pink}
  }

  .main {
    padding: 70px 0 20px;
    min-height: calc(100vh - 50px);
    background-color: #b3e7e0;
  }
`