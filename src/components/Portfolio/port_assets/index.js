import sB from '../../../assets/project_screenshots/sportsbuzz.png';
import bH from '../../../assets/project_screenshots/boredinthehousegif.gif';
import rP from '../../../assets/project_screenshots/puppy.png';
import wD from '../../../assets/project_screenshots/weather.png';
import pS from '../../../assets/project_screenshots/proximo-screenshot.jpg';
import eT from '../../../assets/project_screenshots/employee.jpg';
import Ts from '../../../assets/project_screenshots/Tailstrapscreenshot.png';
import Icons from '../../../assets/icons';
const githubUrl = 'https://iitoneloc.github.io/';
const githubRepo = 'https://github.com/iiTONELOC/';
const icon = Icons();


const works = [
    {
        name: 'TailStrap',
        repo: `${githubRepo}tailstrap`,
        url: `${githubUrl}tailstrap/`,
        screenshot: Ts,
        tech: [
            { name: 'NodeJS', variant: '', bg: 'lightGreen', icon: icon.nodeIcon },
            { name: 'TailwindsCSS', variant: 'secondary', icon: icon.twCssIcon },
            { name: 'JavaScript', variant: 'dark', bg: '', icon: icon.jsIcon },
            { name: 'TypeScript', variant: 'light', bg: '', icon: icon.typeScript },
        ]
    },
    {
        name: 'Sports Buzz',
        repo: `https://github.com/mrhumpherys/social-sports`,
        url: `https://sports-buzz.herokuapp.com`,
        screenshot: sB,
        tech: [
            { name: 'NodeJS', variant: '', bg: 'lightGreen', icon: icon.nodeIcon },
            { name: 'MySQL', variant: 'secondary', icon: icon.mysqlIcon },
            { name: 'Inquirer', variant: 'dark', icon: icon.inquirerIcon },
        ],
        description: "Employee Tracker is a simple CLI for managing your MySQL Employee's database. Uses Node.js, MySQL/Sequelize, and the inquirer.js package"
    },
    {
        name: 'Rent a Puppy',
        repo: `https://github.com/cremeansemily/Rent-A-Puppy`,
        url: 'https://pimp-my-puppy.herokuapp.com/',
        screenshot: rP,
        tech: [
            { name: 'Express-Hbs', variant: 'light', bg: '', icon: icon.handleIcon },
            { name: 'TailwindsCSS', variant: 'secondary', icon: icon.twCssIcon },
            { name: 'JavaScript', variant: 'dark', bg: '', icon: icon.jsIcon },
            { name: 'Sequelize', variant: 'light', bg: '', icon: icon.sqlIze },
        ],
        description: "Rent A Puppy, connects those that love pets but are unable to have their own with pet owners that don't want their pets alone while at work or on vacation"
    },
    {
        name: 'Proximo',
        repo: `${githubRepo}proximo/`,
        url: `https://blooming-wildwood-24520.herokuapp.com/`,
        screenshot: pS,
        tech: [
            { name: 'TailwindsCSS', variant: 'secondary', icon: icon.twCssIcon },
            { name: 'JavaScript', variant: 'dark', bg: '', icon: icon.jsIcon },
        ],
        description: "Proximo is a user-friendly chat app that allows for one to open the app, see all of the geographically close users of proximo, chat on a global chat and add friends. Great for use in offices, schools, and just about everywhere else."
    },
    {
        name: 'Sports Buzz',
        repo: `https://github.com/mrhumpherys/social-sports`,
        url: `https://sports-buzz.herokuapp.com`,
        screenshot: sB,
        tech: [
            { name: 'Express-Hbs', variant: 'light', bg: '', icon: icon.handleIcon },
            { name: 'Bootstrap', variant: '', bg: 'purple', icon: icon.bootStrap },
            { name: 'JavaScript', variant: 'dark', bg: '', icon: icon.jsIcon },
            { name: 'Sequelize', variant: 'light', bg: '', icon: icon.sqlIze },
        ],
        description: "Sports Buzz is a full-stack web application using Node.js, Express.js, and Sequelize, that presents live and scheduled NBA games, NBA related news, as well as pages for updated scores and user comments about the game."
    },



    {
        name: 'Bored in the House',
        repo: `${githubRepo}covid-master/`,
        url: `${githubUrl}covid-master/`,
        screenshot: bH,
        tech: [
            { name: 'HTML', variant: 'light', bg: '', icon: icon.htmlIcon },
            { name: 'CSS', variant: '', bg: 'rebeccaPurple', icon: icon.cssIcon },
            { name: 'JavaScript', variant: 'dark', bg: '', icon: icon.jsIcon },
        ],
        description: "Bored in the House is an interactive web application that presents meal recipes, drink recipes, and movies based on user input."
    },

    {
        name: 'Weather Dashboard',
        repo: `${githubRepo}dashboard`,
        url: `https://i-dash.herokuapp.com`,
        screenshot: wD,
        tech: [
            { name: 'Express-Hbs', variant: 'light', bg: '', icon: icon.handleIcon },
            { name: 'Bootstrap', variant: '', bg: 'purple', icon: icon.bootStrap },
            { name: 'JavaScript', variant: 'dark', bg: '', icon: icon.jsIcon },
        ],
        description: "Dashboard is your source for ad-free weather and the day's top news headlines."
    },



]
export default works;
