### Overview

**Chuck Norris Jokes** it's a website where you will be able to find multiple jokes of chuck norris just by clicking on a button and it will refresh to a new joke each time.

<br>

### Wireframes


https://whimsical.com/PuHBBYw5GFtnwLgfnzfYYV

- Desktop Landing

https://whimsical.com/LgG8QyseAJhUH4fcL7fGNT

- Mobile

<br>

### MVP

- _A header bar_
- _Main Container where the jokes will be showing_
- _A biography of Chuck Norris in another page_
- _A footer_


<br>

#### Libraries

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | _Route my React components._ |

<br>

#### Data


|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| Chuck Norris API |      yes      | _http://www.icndb.com/api/_ | _http://api.icndb.com/jokes/random_ |

<br>

#### Component Hierarchy
```
src
|__ components/
      |__ App.jsx
      |__ Header.jsx
      |__ Home.jsx
      |__ Biography.jsx
      |__ Footer.jsx




```

<br>

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    App.js    | class |   n   |   n   | _This will be the parent component and hold the informations_               |
|  Header.js  | functional |   n   |   n   | _The header will contain the app name._       |
|   Home.js    |   class    |   y   |   y   | _The home will have the jokes_      |
| Biography.js | class |   y   |   y   | _It will be showing brief biography of Chuck Norris._                 |
|    Footer.js    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

<br>

#### Component Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add a Header    |    M     |     3 hrs      |       |      |
| work in the home.js |    H     |     3 hrs      |       |       |
| Add a biography     |    M     |     3 hrs      |        |     |
| work on the footer |    L     |     3 hrs      |         |       |
| API    |    H     |     3 hrs      |       |       |
| design the home page |    M     |     3 hrs      |          |       |
| work on the buttons    |    L     |     3 hrs      |         |      |
| style the footer |    L     |     3 hrs      |         |       |
| style the biography page    |    M    |     3 hrs      |          |        |
| storybook |    H     |     3 hrs      |         |          |
| TOTAL               |          |          |          |         |

<br>


### Post-MVP

- _Add user account and auth capabilities._
- _Utilize the Giphy API to welcome new users with funny gifs._

<br>

***

## Project Delivery

### Code Showcase

### Code Issues & Resolutions


