import classes from './menubar.module.css'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
function MenuBar(){
    return (
        <div className={classes.navmain}>
            <Link className={classes.logolink} to="/"><div className={classes.logo}></div></Link>
            <p className={classes.aa}>andrica adelin</p>
            <ul className={classes.navlist}>
                <li className={classes.navlistitem}><Link className={classes.links} to="/"><Button sx={{color:'#66fcf1'}}>home</Button></Link></li>
                <li className={classes.navlistitem}><Link className={classes.links} to="/projects"><Button sx={{color:'#66fcf1'}}>projects</Button></Link></li>
                <li className={classes.navlistitem}><Link className={classes.links} to='/contact'><Button sx={{color:'#66fcf1'}}>contact</Button></Link></li>
                <li className={classes.navlistitem}><Link className={classes.links} to='/about'><Button sx={{color:'#66fcf1'}}>about</Button></Link></li>
            </ul>
        </div>
    );
}

export default MenuBar