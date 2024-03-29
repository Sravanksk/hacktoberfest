import * as styles from './styles.scss';

import { ImageOnScrollProps, ImageOnScrollState, ImageOnScrollMethods } from './defines';


export default (render: Function, data: ImageOnScrollProps & ImageOnScrollState & ImageOnScrollMethods , createStyle: Function) => {
    return render`
        ${createStyle(styles)}
        <ul id="accordion">
  <li class="name"><div>A</div></li>
  <li class="name"><div>N</div></li>
  <li class="name"><div>D</div></li>
  <li class="name"><div>Y</div></li>
  <li class="name"><div>B</div></li>
  <li class="name"><div>A</div></li>
  <li class="name"><div>R</div></li>
  <li class="name"><div>E</div></li>
  <li class="name"><div>F</div></li>
  <li class="name"><div>O</div></li>
  <li class="name"><div>O</div></li>
  <li class="name"><div>T</div></li>


  <li class="social"><div><a href="https://www.linkedin.com/in/andybarefoot/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 64 64" version="1.1" xml:space="preserve"><path d="M42.73 34.95l0 7.74 -4.48 0 0-7.35c0-0.83 0.19-3.35-2.48-3.35 -2.67 0-2.5 3.33-2.5 3.33l0 7.37 -4.43 0 0-14.28 4.27 0 0 2.02c1.15-1.87 3.31-2.94 6.6-2.02 3.29 0.92 3.02 6.54 3.02 6.54Zm-18.89-8.48c-1.42 0-2.58-1.15-2.58-2.58 0-1.42 1.16-2.58 2.58-2.58 1.42 0 2.58 1.16 2.58 2.58 0 1.42-1.15 2.58-2.58 2.58Zm2.21 16.23l-4.45 0 0-14.28 4.46 0 0 14.28Zm37.95-42.69l-64 0 0 64 64 0 0-64Z"/></svg></a></div></li>

  <li class="social"><div><a href="https://codepen.io/andybarefoot/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 474 474" version="1.1" xml:space="preserve"><path d="M136.33 219.13l0 35.03 26.19-17.51 -26.19-17.51Z"/><path d="M226.72 193.7l0-48.82 -82 54.67 36.63 24.51 45.37-30.35Z"/><path d="M329.66 199.55l-82-54.66 0 48.82 45.38 30.35 36.63-24.5Z"/><path d="M144.71 273.74l82 54.67 0-48.82 -45.37-30.35 -36.63 24.5Z"/><path d="M247.65 279.59l0 48.82 82-54.66 -36.63-24.5 -45.38 30.35Z"/><path d="M237.18 211.88l-37.02 24.76 37.02 24.76 37.02-24.76 -37.02-24.76Z"/><path d="M338.03 254.16l0-35.03 -26.18 17.52 26.18 17.52Z"/><path d="M358.96 273.75c0 0.46-0.03 0.92-0.09 1.37 -0.02 0.15-0.06 0.3-0.08 0.45 -0.05 0.3-0.11 0.59-0.18 0.88 -0.04 0.17-0.11 0.34-0.16 0.51 -0.08 0.26-0.17 0.51-0.27 0.77 -0.07 0.17-0.16 0.34-0.23 0.51 -0.11 0.24-0.23 0.47-0.36 0.7 -0.09 0.16-0.2 0.32-0.3 0.48 -0.14 0.22-0.28 0.43-0.44 0.64 -0.12 0.16-0.23 0.31-0.36 0.46 -0.16 0.19-0.34 0.38-0.52 0.56 -0.14 0.14-0.27 0.28-0.42 0.41 -0.19 0.17-0.39 0.34-0.6 0.5 -0.15 0.12-0.31 0.24-0.47 0.36 -0.06 0.04-0.11 0.09-0.17 0.13l-111.31 74.21c-1.76 1.17-3.78 1.76-5.81 1.76 -2.02 0-4.05-0.59-5.8-1.76l-111.32-74.21c-0.06-0.04-0.11-0.09-0.17-0.13 -0.16-0.11-0.32-0.24-0.47-0.36 -0.2-0.16-0.4-0.33-0.59-0.5 -0.14-0.13-0.28-0.27-0.42-0.41 -0.18-0.18-0.35-0.37-0.52-0.56 -0.12-0.15-0.24-0.29-0.36-0.45 -0.15-0.2-0.3-0.42-0.44-0.63 -0.11-0.16-0.2-0.32-0.3-0.48 -0.13-0.23-0.24-0.46-0.35-0.7 -0.08-0.17-0.16-0.33-0.23-0.5 -0.1-0.26-0.19-0.51-0.27-0.77 -0.06-0.17-0.11-0.33-0.16-0.51 -0.08-0.29-0.13-0.58-0.18-0.88 -0.02-0.15-0.06-0.3-0.08-0.45 -0.06-0.45-0.1-0.91-0.1-1.37l0-74.21c0-0.46 0.04-0.92 0.1-1.36 0.02-0.15 0.06-0.3 0.08-0.45 0.06-0.29 0.11-0.59 0.18-0.88 0.05-0.17 0.11-0.34 0.16-0.51 0.08-0.26 0.17-0.51 0.27-0.76 0.07-0.17 0.15-0.34 0.23-0.51 0.11-0.24 0.23-0.47 0.36-0.69 0.1-0.17 0.2-0.33 0.3-0.49 0.14-0.22 0.28-0.43 0.44-0.63 0.11-0.15 0.24-0.31 0.36-0.45 0.17-0.19 0.34-0.38 0.52-0.56 0.14-0.14 0.28-0.28 0.42-0.41 0.19-0.17 0.39-0.34 0.59-0.5 0.15-0.12 0.31-0.24 0.48-0.36 0.06-0.04 0.11-0.09 0.17-0.13l111.32-74.21c3.52-2.35 8.09-2.35 11.61 0l111.31 74.21c0.06 0.04 0.12 0.09 0.18 0.13 0.16 0.12 0.32 0.24 0.47 0.36 0.21 0.16 0.41 0.33 0.6 0.5 0.14 0.13 0.28 0.27 0.42 0.41 0.18 0.18 0.36 0.37 0.52 0.56 0.13 0.15 0.25 0.3 0.36 0.45 0.16 0.21 0.3 0.42 0.44 0.63 0.1 0.16 0.21 0.32 0.3 0.49 0.13 0.22 0.24 0.46 0.36 0.69 0.08 0.17 0.16 0.34 0.23 0.51 0.1 0.25 0.18 0.51 0.27 0.76 0.06 0.17 0.12 0.33 0.16 0.51 0.08 0.29 0.13 0.58 0.18 0.88 0.03 0.15 0.06 0.3 0.08 0.45 0.06 0.45 0.09 0.9 0.09 1.37l0 74.21Zm-358.96-273.75l0 473.36 473.31 0 0-473.36"/></svg></a></div></li>

  <li class="social"><div><a href="https://medium.com/@andybarefoot/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 64 64" version="1.1" xml:space="preserve"><path d="M22.88 37.49l0.88 0c0 0 0.83-0.06 0.89-0.72l0-9.61c0 0-0.28-0.61-1.1-0.66l-0.66 0 0-2.1 7.07 0 2.43 8.62 2.26-8.62 7.4 0 0 2.43 -1.11 0 -0.44 0.44 0 9.44c0 0 0.22 0.72 0.66 0.72l0.88 0 0 2.15 -6.79 0 0-2.1 1.27 0 0-9.89 -3.64 11.99 -2.43 0 -3.15-11.76 0 9.72 1.27 0 0 2.04 -5.69 0 0-2.1Zm-22.88 26.51l64 0 0-64 -64 0 0 64Z"/></svg></a></div></li>

  <li class="social"><div><a href="https://github.com/andybarefoot" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 64 64" version="1.1" xml:space="preserve"><path d="M36.18 45.85c-0.68-0.2-0.67-0.8-0.67-0.8 0 0 0.05-3.12 0.05-4.21 0-1.09-0.94-2.34-0.94-2.34 5.51-0.44 6.4-4.06 6.4-6.65 0-2.6-1.48-4-1.48-4 0.52-2.21-0.1-3.64-0.1-3.64 -2.52 0.29-3.77 1.53-3.77 1.53 0 0-1.64-0.6-3.72-0.6 -2.08 0-3.43 0.57-3.43 0.57 -1.98-1.71-3.87-1.48-3.87-1.48 -0.62 1.77-0.04 3.69-0.04 3.69 -1.56 1.6-1.52 4.25-1.52 4.25 0.23 6.28 6.36 6.38 6.36 6.38 -0.93 0.82-0.74 1.99-0.74 1.99 -0.1 0.02-0.25 0.12-0.62 0.29 -0.37 0.18-1.15 0.04-1.15 0.04 -1.68 0-2.16-1.21-2.52-1.64 -0.35-0.43-0.68-0.82-1.11-1.07 -0.43-0.25-1.68-0.51-1.56 0.08 0.12 0.59 1.17 0.29 1.83 1.91 0.66 1.62 1.29 2.11 2.16 2.44 0.88 0.33 2.79 0.04 2.79 0.04l0 2.81c-0.17 0.41-0.64 0.41-0.64 0.41l-0.02 0.03c-5.8-1.77-10.03-7.17-10.03-13.55 0-7.82 6.35-14.17 14.17-14.17 7.83 0 14.17 6.34 14.17 14.17 0 6.37-4.2 11.76-9.99 13.54Zm27.82-45.85l-64 0 0 64 64 0 0-64Z"/></svg></a></div></li>

  <li class="social"><div><a href="http://twitter.com/andybarefoot" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 64 64" version="1.1" xml:space="preserve"><path d="M43.56 26.06c0 0 0.79 7.38-5.55 13.47-6.34 6.1-16.77 4.83-20.53 1.64 0 0 5.11 0.57 8.71-2.49 0 0-4.25-0.08-5.48-4.05 0 0 2.13 0.16 2.5-0.24 0 0-4.58-1.1-4.62-5.89 0 0 1.39 0.7 2.66 0.74 0 0-4.42-3.19-1.74-7.96 0 0 4.46 5.91 12.21 6.32 0 0-1.05-3.49 2.17-6.16 3.22-2.67 7.2-0.41 7.96 0.6 0 0 2.27-0.35 3.85-1.42 0 0-0.52 2.04-2.43 3.27 0 0 2.24-0.3 3.27-0.9 0 0-1.09 1.75-2.97 3.08Zm20.44-26.06l-64 0 0 64 64 0 0-64Z"/></svg></a></div></li>

  <li class="social"><div><a href="http://instagram.com/andybarefoot" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 64 64" version="1.1" xml:space="preserve"><path d="M32 37.03c2.8 0 5.07-2.27 5.07-5.07 0-0.84-0.21-1.64-0.57-2.34 -0.1-0.2-0.22-0.39-0.35-0.58 0 0-0.01-0.01-0.01-0.01 -0.09-0.13-0.19-0.26-0.3-0.38 -0.01-0.01-0.01-0.02-0.02-0.02 -0.1-0.12-0.21-0.23-0.32-0.33 -0.01-0.01-0.02-0.02-0.03-0.03 -0.03-0.03-0.07-0.06-0.1-0.09 -0.01-0.01-0.03-0.02-0.04-0.04 -0.06-0.05-0.12-0.11-0.19-0.16 -0.02-0.01-0.04-0.03-0.05-0.04 -0.03-0.03-0.07-0.05-0.1-0.07 -0.02-0.02-0.05-0.03-0.07-0.05 -0.04-0.03-0.08-0.06-0.13-0.09 -0.04-0.03-0.08-0.05-0.12-0.08 -0.03-0.02-0.06-0.04-0.09-0.05 -0.03-0.02-0.06-0.04-0.09-0.05 -0.03-0.02-0.06-0.03-0.09-0.05 -0.06-0.03-0.11-0.06-0.17-0.09 -0.02-0.01-0.05-0.02-0.07-0.03 -0.04-0.02-0.08-0.04-0.13-0.06 -0.03-0.01-0.05-0.02-0.08-0.04 -0.05-0.02-0.1-0.04-0.16-0.06 -0.02-0.01-0.04-0.02-0.06-0.02 -0.06-0.02-0.12-0.04-0.18-0.06 -0.02-0.01-0.05-0.01-0.07-0.02 -0.05-0.02-0.11-0.03-0.16-0.04 -0.02 0-0.04-0.01-0.05-0.01 -0.07-0.02-0.14-0.03-0.21-0.05 -0.02 0-0.04-0.01-0.06-0.01 -0.06-0.01-0.12-0.02-0.17-0.03 -0.02 0-0.04-0.01-0.06-0.01 -0.07-0.01-0.15-0.02-0.22-0.03 -0.01 0-0.03 0-0.04 0 -0.06-0.01-0.13-0.01-0.19-0.01 -0.02 0-0.04 0-0.06 0 -0.08 0-0.16 0-0.23 0 -0.08 0-0.16 0-0.23 0.01 -0.02 0-0.04 0-0.06 0 -0.06 0-0.13 0.01-0.19 0.02 -0.01 0-0.03 0-0.04 0 -0.07 0.01-0.15 0.02-0.22 0.03 -0.02 0-0.04 0.01-0.06 0.01 -0.06 0.01-0.12 0.02-0.17 0.03 -0.02 0-0.04 0.01-0.06 0.01 -0.07 0.02-0.14 0.03-0.21 0.05 -0.02 0.01-0.04 0.01-0.05 0.02 -0.05 0.01-0.11 0.03-0.16 0.05 -0.02 0.01-0.05 0.02-0.07 0.02 -0.06 0.02-0.12 0.04-0.18 0.06 -0.02 0.01-0.04 0.02-0.06 0.02 -0.05 0.02-0.1 0.04-0.16 0.06 -0.03 0.01-0.05 0.02-0.08 0.04 -0.04 0.02-0.08 0.04-0.12 0.06 -0.03 0.01-0.05 0.02-0.07 0.03 -0.06 0.03-0.11 0.06-0.17 0.09 -0.03 0.02-0.06 0.03-0.09 0.05 -0.03 0.02-0.06 0.04-0.09 0.05 -0.03 0.02-0.06 0.04-0.09 0.06 -0.04 0.03-0.08 0.05-0.12 0.08 -0.04 0.03-0.08 0.06-0.13 0.09 -0.02 0.02-0.05 0.03-0.07 0.05 -0.04 0.02-0.07 0.05-0.1 0.08 -0.02 0.01-0.04 0.03-0.05 0.04 -0.06 0.05-0.13 0.1-0.19 0.16 -0.01 0.01-0.03 0.02-0.04 0.04 -0.04 0.03-0.07 0.06-0.11 0.1 -0.01 0.01-0.02 0.02-0.03 0.03 -0.11 0.11-0.22 0.22-0.32 0.34 -0.01 0.01-0.01 0.02-0.02 0.02 -0.1 0.12-0.2 0.25-0.3 0.38 0 0 0 0.01-0.01 0.01 -0.13 0.18-0.25 0.38-0.35 0.58 -0.36 0.7-0.57 1.5-0.57 2.34 0 2.8 2.27 5.07 5.07 5.07Z"/><path d="M39.72 31.96c0 4.26-3.45 7.72-7.72 7.72 -4.26 0-7.72-3.45-7.72-7.72 0-0.81 0.13-1.6 0.36-2.34l-2.17 0 0 10.32c0 0.88 0.71 1.59 1.59 1.59l15.87 0c0.88 0 1.59-0.71 1.59-1.59l0-10.32 -2.17 0c0.23 0.74 0.36 1.52 0.36 2.34Z"/><path d="M44.39 41.73c0 1.47-1.19 2.67-2.66 2.67l-19.45 0c-1.47 0-2.66-1.19-2.66-2.66l0-19.45c0-1.47 1.19-2.66 2.67-2.66l19.45 0c1.47 0 2.67 1.19 2.67 2.66l0 19.45Zm19.61-41.73l-64 0 0 64 64 0 0-64Z"/><path d="M40.32 22.39l-2 0c-0.69 0-1.25 0.56-1.25 1.25l0 2c0 0.69 0.56 1.25 1.25 1.25l2 0c0.69 0 1.25-0.56 1.25-1.25l0-2c0-0.69-0.56-1.25-1.25-1.25Z"/></svg></a></div></li>

  <li class="social"><div><a href="http://www.facebook.com/profile.php?id=729980577" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 64 64" version="1.1" xml:space="preserve"><path d="M39.39 22.51l-2.85 0c0 0-1.2-0.02-1.76 0.62 -0.56 0.65-0.5 1.57-0.5 1.8l0 3.26 4.95 0 -0.64 5.04 -4.34 0 0 12.99 -5.25 0 0-13.02 -4.39 0 0-5.02 4.38 0 0-4.06c0 0-0.18-2.65 1.83-4.66 2.01-2.01 4.72-1.82 8.58-1.49l0 4.53Zm24.61-22.51l-64 0 0 64 64 0 0-64Z"/></svg></a></div></li>

  <li class="social"><div><a href="mailto:andy@andybarefoot.com"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 64 64" version="1.1" xml:space="preserve"><path d="M46.53 40.88l-10.69-7.73 10.69-9.02 0 16.75Zm-28.4 0.65l10.64-8c0 0 1.76 1.9 3.33 1.9 1.57 0 3.19-1.9 3.19-1.9l10.32 8 -27.48 0Zm-0.65-17.72l10.59 9.16 -10.59 7.91 0-17.07Zm1.67-2.34l25.72 0c1.39 0 1.39 0.74 1.39 0.74l-12.72 9.85c-0.37 0.37-0.78 0.46-1.62 0.46 -0.83 0-1.48-0.69-1.48-0.69l-12.49-9.85c0.39-0.39 1.2-0.51 1.2-0.51Zm44.86-21.47l-64 0 0 64 64 0 0-64Z"/></svg></a></div></li>


  <li class="thumb darkgreen"><div><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/perspect-300.jpg' alt=''></div></li>
  <li class="desc darkgreen"><div><a href="https://codepen.io/andybarefoot/pen/GMyREX" target="_blank">A CSS Grid layout using perspective and Y-rotation to give a 3D effect.</a></div></li>
  <li class="thumb white"><div><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/thronesGrid-300.jpg' alt=''></div></li>
  <li class="desc white"><div><a href="http://andybarefoot.com/got/grid.html" target="_blank">Expanding CSS Grid experiment showing characters from Game of Thrones.</a></div></li>
  <li class="thumb lightgreen"><div><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/squash-300.jpg' alt=''></div></li>
  <li class="desc lightgreen"><div><a href="https://codepen.io/andybarefoot/pen/WXpKJV" target="_blank">A morphing grid experiment based on a Flash experiment by Yugo Nakamura</a></div></li>
  <li class="thumb yellow"><div><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/stackedCubes-300.jpg' alt=''></div></li>
  <li class="desc yellow"><div><a href="https://codepen.io/andybarefoot/pen/ypPgod" target="_blank">A CodePen experimenting with displaying many rows of content in an innovative way.</a></div></li>
  <li class="thumb white"><div><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/overrated-300.jpg' alt=''></div></li>
  <li class="desc white"><div><a href="https://codepen.io/andybarefoot/pen/GGVLov" target="_blank">Just a fun project playing around with the matter.js library to make an animated layout.</a></div></li>
  <li class="thumb lightgreen"><div><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/rodchenko-300.jpg' alt=''></div></li>
  <li class="desc lightgreen"><div><a href="https://codepen.io/andybarefoot/full/GMvygq" target="_blank">A layout based on the famous 1924 poster by Alexander Rodchenko for the Gosizdat publishing house.</a></div></li>
  <li class="thumb darkgreen"><div><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/premier-300.jpg' alt=''></div></li>
  <li class="desc darkgreen"><div><a href="http://andybarefoot.com/football/path.html" target="_blank">A data visualisation of the distance travelled by each Premier League footballer to their current club.</a></div></li>
  <li class="thumb yellow"><div><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/isoGrid-300.jpg' alt=''></div></li>
  <li class="desc yellow"><div><a href="https://codepen.io/andybarefoot/pen/MERBPx" target="_blank">An experiment in overlaying CSS Grids to create an isometric layout.</a></div></li>
  <li class="thumb darkgreen"><div><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/masonry-300.jpg' alt=''></div></li>
  <li class="desc darkgreen"><div><a href="https://codepen.io/andybarefoot/pen/QMeZda" target="_blank">A Masonry style layout using CSS Grid and a bit of Javascript.</a></div></li>
  <li class="thumb yellow"><div><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/horizGrid-300.jpg' alt=''></div></li>
  <li class="desc yellow"><div><a href="https://codepen.io/andybarefoot/pen/ypXYVJ" target="_blank">A horizontal CSS Grid using vertical-lr writing mode to maintain a up->down then left->right dense packing.</a></div></li>
  <li class="thumb white"><div><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/dropCaps-300.jpg' alt=''></div></li>
  <li class="desc white"><div><a href="https://codepen.io/andybarefoot/pen/WKPZrV" target="_blank">Dynamically generated large "drop caps" using "shape-outside" to wrap text round a large first letter.</a></div></li>
  <li class="thumb lightgreen"><div><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/cocktails-300.jpg' alt=''></div></li>
  <li class="desc lightgreen"><div><a href="http://andybarefoot.com/cocktails/" target="_blank">An exercise in using D3.js and SVG to create data visualisations of cocktails and their ingredients.</a></div></li>
  <li class="thumb white"><div><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/lizards-300.jpg' alt=''></div></li>
  <li class="desc white"><div><a href="https://codepen.io/andybarefoot/full/MEbORa" target="_blank">An experiment on CodePen combining CSS Grid and SVG animation using D3.js.</a></div></li>
  <li class="thumb lightgreen"><div><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/mask-300.jpg' alt=''></div></li>
  <li class="desc lightgreen"><div><a href="https://codepen.io/andybarefoot/pen/wrXvLj" target="_blank">A CodePen that uses CSS Grid as a mask to recreate a design similar to a poster.</a></div></li>
  <li class="thumb yellow"><div><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/olympics-300.jpg' alt=''></div></li>
  <li class="desc yellow"><div><a href="http://andybarefoot.com/olympics/" target="_blank">A selection of data visualisations from the 2016 Summer Olympics.</a></div></li>
  <li class="thumb darkgreen"><div><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/isoEcom-300.jpg' alt=''></div></li>
  <li class="desc darkgreen"><div><a href="https://codepen.io/andybarefoot/pen/PBPrex" target="_blank">Builds on previous examples with CSS Grids to make an eCommerce product grid with a 3D effect.</a></div></li>
  <li class="thumb yellow"><div><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/diamond-300.jpg' alt=''></div></li>
  <li class="desc yellow"><div><a href="https://codepen.io/andybarefoot/full/QqGBro" target="_blank">A diagonal grid that fills exactly the browser window and orders the items appropriately.</a></div></li>
  <li class="thumb white"><div><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/port-sneakers.jpg' alt=''></div></li>
  <li class="desc white"><div><a href="https://codepen.io/andybarefoot/pen/XxqveV" target="_blank">A CSS Grid eCommerce layout using skew.</a></div></li>
  <li class="thumb lightgreen"><div><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/port-tshirts.jpg' alt=''></div></li>
  <li class="desc lightgreen"><div><a href="https://codepen.io/andybarefoot/pen/LXYyzd" target="_blank">An eCommerce grid layout with tessellating tile design.</a></div></li>
  <li class="thumb darkgreen"><div><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/port-tess.jpg' alt=''></div></li>
  <li class="desc darkgreen"><div>An eCommerce CSS Grid layout mimicking the tessellation of moorish tile design.</div></li>
<!--
  <li class="thumb"><div><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/port-triangles.jpg' alt=''></div></li>
  <li class="desc"><div>triangles</div></li>
  <li class="thumb"><div><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/port-pers.jpg' alt=''></div></li>
  <li class="desc"><div>pers</div></li>
  <li class="thumb"><div><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/port-stripes.jpg' alt=''></div></li>
  <li class="desc"><div>stripes</div></li>
  <li class="thumb"><div><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/port-map.jpg' alt=''></div></li>
  <li class="desc"><div>map</div></li>
  <li class="thumb"><div><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/port-horiz.jpg' alt=''></div></li>
  <li class="desc"><div>horiz</div></li>
  <li class="thumb"><div><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/port-grid.jpg' alt=''></div></li>
  <li class="desc"><div>grid</div></li>
  <li class="thumb"><div><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/port-carnival.jpg' alt=''></div></li>
  <li class="desc"><div>carnival</div></li>
  <li class="thumb"><div><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/port-clouds.jpg' alt=''></div></li>
  <li class="desc"><div>clouds</div></li>
  <li class="thumb"><div><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/port-griddemo.jpg' alt=''></div></li>
  <li class="desc"><div>griddemo</div></li>
  <li class="thumb"><div><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/port-cards.jpg' alt=''></div></li>
  <li class="desc"><div>cards</div></li>
  <li class="thumb"><div><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/port-hover.jpg' alt=''></div></li>
  <li class="desc"><div>hover</div></li>
  <li class="thumb"><div><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/port-burger.jpg' alt=''></div></li>
  <li class="desc"><div>burger</div></li>
  <li class="thumb"><div><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/port-last.jpg' alt=''></div></li>
  <li class="desc"><div>last</div></li>
  <li class="thumb"><div><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/port-bauhaus.jpg' alt=''></div></li>
  <li class="desc"><div>bauhaus</div></li> -->
</ul>
    `;
}
