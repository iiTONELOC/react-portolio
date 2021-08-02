import sB from '../../../assets/project_screenshots/sportsbuzz.png';
import bH from '../../../assets/project_screenshots/boredinthehousegif.gif';
import rP from '../../../assets/project_screenshots/puppy.png';
import wD from '../../../assets/project_screenshots/weather.png';
import pS from '../../../assets/project_screenshots/proximo-screenshot.jpg';
import eT from '../../../assets/project_screenshots/employee.jpg';
import Icons from '../../../assets/icons';
const githubUrl = 'https://iitoneloc.github.io/';
const githubRepo = 'https://github.com/iiTONELOC/';
const icon = Icons();


const works = [
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
        ]
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
        ]
    },
    {
        name: 'Proximo',
        repo: `${githubRepo}proximo/`,
        url: `https://blooming-wildwood-24520.herokuapp.com/`,
        screenshot: pS,
        tech: [
            { name: 'TailwindsCSS', variant: 'secondary', icon: icon.twCssIcon },
            { name: 'JavaScript', variant: 'dark', bg: '', icon: icon.jsIcon },
        ]
    },

    {
        name: 'Employee Tracker',
        repo: `${githubRepo}employee-tracker/`,
        url: `${githubRepo}employee-tracker/`,
        screenshot: eT,
        tech: [
            { name: 'NodeJS', variant: '', bg: 'lightGreen', icon: icon.nodeIcon },
            { name: 'MySQL', variant: 'secondary', icon: icon.mysqlIcon },
            { name: 'Inquirer', variant: 'dark', icon: icon.inquirerIcon },
        ]
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
        ]
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
        ]
    },



]
export default works;
