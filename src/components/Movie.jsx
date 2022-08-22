import React, {useState} from 'react';

const Movie = (props) => {
   const  [jj, setJJ]=useState("")
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props
    const img = new Image();
    img.src = poster
    img.onload = function() {
        setJJ(this.width + 'x' + this.height)
    }



    return (
        <div id={id} className="card movie">
            <div className="card-image waves-effect waves-block waves-light">
                {
                    poster === "N/A" ?
                        <img className="activator"
                             src={`https://via.placeholder.com/300x450?text=${title}`}/>
                                  :
                        <img className="activator" src={poster}/>
                }
            </div>
            <div className="card-content">
                <span>{jj}</span>
                <span className="card-title activator grey-text
                text-darken-4">{title}</span>
                <p>{year} <span className="right"> {type} </span></p>
            </div>
        </div>
    )
}

export default Movie;
