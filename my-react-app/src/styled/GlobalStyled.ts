import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
body { 
margin: 0;

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
@font-face {
  font-family: "Jose";
  src: local("Manrope"),
    url("./assets/fonts/manrope/Manrope-Bold.ttf") format("truetype");
}

@font-face {
  font-family: "ManRopeMed";
  src: local("Manrope"),
    url("./assets/fonts/manrope/Manrope-Medium.ttf") format("truetype");
}

font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;
@media (min-width: 1280px){
    margin-left: auto;
    margin-right: auto;
}
}

ul, nav{ 
list-style: none; 
padding: 0; 
margin: 0;} 
h1, h2, h3, h4, h5, h6, p{ 
margin: 0; } 
a { 
text-decoration: none; } 
input{ 
box-sizing: border-box; }
img{
display:block;
box-sizing: border-box; } `;
