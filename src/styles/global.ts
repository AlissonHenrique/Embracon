
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:none;
  }
  body{
      background:${props =>props.theme.colors.background};
      text-rendering: optimizeLegibility !important;
      -webkit-font-smoothing: antialiased !important;
      color:${props =>props.theme.colors.text};
  }
  body,input,button{
    font-size:16px;
    font-family: 'Inter', sans-serif;
  }
 h1,h2,h3,h4,h5,strong{
   font-weight:500
 }
  button{
    cursor: pointer;
  }
`
