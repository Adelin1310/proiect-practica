import classes from './home.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon  from '@mui/icons-material/Facebook';
import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
const Home = () => {

    return (
        <div style={{
            padding: '1rem', textAlign: 'center',
            backgroundColor: 'transparent', "color": '#66fcf1', "fontSize": "x-large",
            borderRadius: "10px", borderColor: "#66fcf1", border: "1px solid #66fcf1"
        }} className={classes.mainpage}>
            Hi, I'm Adelin. Let me tell you about myself.
            <div style={{ "color": 'white', 'fontSize': 'initial' }}>
                <h3>I am a 21 years old web developer.
                </h3><h3>I like bringing my clients the satisfaction of a well conducted project.
                    Perfection does not exist alas I try to take my projects as close to it as possible.</h3>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
            </div>
            <div>
                <Stack direction={'row'} spacing={3}>
                    <Link to="/projects" style={{ textDecoration: 'none' }}>
                        <Button sx={{ color: '#66fcf1' }}>to projects</Button>
                    </Link>
                    <Button href='https://github.com/Adelin1310'  startIcon={<GitHubIcon></GitHubIcon>} sx={{ color: '#66fcf1' }}>github</Button>
                    <Button href='https://www.instagram.com/a.adelin13/' startIcon={<InstagramIcon></InstagramIcon>} sx={{ color: '#66fcf1' }}>instagram</Button>
                    <Button href='https://www.facebook.com/adelin.andrica/' startIcon={<FacebookIcon></FacebookIcon>} sx={{ color: '#66fcf1' }}>facebook</Button>
                </Stack>
            </div>
        </div>
    );
}

export default Home