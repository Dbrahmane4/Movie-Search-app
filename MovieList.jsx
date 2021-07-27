import React from 'react';

const MovieList = (props) => {
    return(
        <>
               <div className="card" key={props.key}>
                        <img className="card--image" src={props.src} alt={props.title + ' poster'}/>
                        <div className="card--content">
                            <h3 className="card--title">{props.title}</h3>
                            <p><small>Year: {props.year}</small></p>
                        </div>
                    </div>
        </>
    )
}

export default MovieList;