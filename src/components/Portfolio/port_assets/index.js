import sB from '../../../assets/project_screenshots/sportsbuzz.png';
import bH from '../../../assets/project_screenshots/boredinthehousegif.gif';
import rP from '../../../assets/project_screenshots/puppy.png';
import wD from '../../../assets/project_screenshots/weather.png';
import rG from '../../../assets/project_screenshots/screenshot.gif';
import eT from '../../../assets/project_screenshots/employee.jpg';
const githubUrl = 'https://iitoneloc.github.io/';
const githubRepo = 'https://github.com/iiTONELOC/'
const works = [
    {
        name: 'Sports Buzz',
        repo: `https://github.com/mrhumpherys/social-sports`,
        url: `https://sports-buzz.herokuapp.com`,
        screenshot: sB,
        tech: [
            { name: 'Express-Handlebars', variant: '', bg: 'orange' },
            { name: 'Bootstrap', variant: '', bg: 'purple' },
            { name: 'JavaScript', variant: '', bg: 'yellow' },
            { name: 'Sequelize', variant: '', bg: 'lightBlue' },
        ]
    },
    {
        name: 'Employee Tracker',
        repo: `${githubRepo}employee-tracker/`,
        url: `${githubRepo}employee-tracker/`,
        screenshot: eT,
        tech: [
            { name: 'NodeJS', variant: '', bg: 'lightGreen' },
            { name: 'MySQL', variant: 'primary', },
            { name: 'Inquirer', variant: 'dark', },
        ]
    },
    {
        name: 'Rent a Puppy',
        repo: `https://github.com/cremeansemily/Rent-A-Puppy`,
        url: 'https://pimp-my-puppy.herokuapp.com/',
        screenshot: rP,
        tech: [
            { name: 'Express-Handlebars', variant: '', bg: 'orange' },
            { name: 'TailwindsCSS', variant: 'info' },
            { name: 'JavaScript', variant: '', bg: 'yellow' },
            { name: 'Sequelize', variant: '', bg: 'lightBlue' },
        ]
    },
    {
        name: 'Weather Dashboard',
        repo: `${githubRepo}dashboard`,
        url: `https://i-dash.herokuapp.com`,
        screenshot: wD,
        tech: [
            { name: 'Express-Handlebars', variant: '', bg: 'orange' },
            { name: 'Bootstrap', variant: '', bg: 'purple' },
            { name: 'JavaScript', variant: '', bg: 'yellow' },
            { name: 'Sequelize', variant: '', bg: 'lightBlue' },
        ]
    },
    {
        name: 'README Generator',
        repo: `${githubRepo}readme-generator/`,
        url: `${githubRepo}readme-generator/`,
        screenshot: rG,
        tech: [
            { name: 'NodeJS', variant: '', bg: 'lightGreen' },
            { name: 'Inquirer', variant: 'dark', },
        ]
    },
    {
        name: 'Bored in the House',
        repo: `${githubRepo}covid-master/`,
        url: `${githubUrl}covid-master/`,
        screenshot: bH,
        tech: [
            { name: 'HTML', variant: '', bg: 'orange' },
            { name: 'CSS', variant: '', bg: 'rebeccaPurple' },
            { name: 'JavaScript', variant: '', bg: 'yellow' },
        ]
    },
]
export default works;
