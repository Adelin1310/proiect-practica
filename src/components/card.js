import classes from './card.module.css'

function Card(props)
{
    return (
        <div className={classes.cardmain}>
            {props.data.title}
            <div style={{backgroundColor: 'black'}}>
                {props.data.content}
            </div>
        </div>
    );
}

export default Card;