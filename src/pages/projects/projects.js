import classes from './projects.module.css'

function Projects(props){
    return (
        <div className={classes.mainpage}>{props.cards}</div>
    );
}

export default Projects;