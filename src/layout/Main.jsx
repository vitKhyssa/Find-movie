import React, {useEffect, useState} from 'react';
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";
import {logDOM} from "@testing-library/react";


function Main() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [pages, setPages] = useState([])

  const  searchMovies = (str, type = 'all') => {
        setLoading(true)
        fetch(`http://www.omdbapi.com/?apikey=530a5aa2&s=${str}&page=1${
            type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => {
                const sortedData = data.Search
                const allResults = Math.ceil(data.totalResults/10)
                const newResults = []
                for (let i = 1; i < allResults; i++) {
                    newResults.push(i)
                }
                setPages(newResults)
                setLoading(false)
                setMovies(sortedData)

            })
            .catch((err) =>{
                console.log(err)
                setLoading(false)
            })
  }
                // sortedData.sort( (a,b) => {
                //     if (a.Type === "movie" && b.Type === "series"){
                //         return 0
                //     }else {
                //         return 1
                //     }
                // })
                    // .sort((a,b) =>a.Title.split(" ").length - b.Title.split(" ").length)
                    // .sort((a,b) => parseFloat(a.Year) - parseFloat(b.Year))
                    // .filter((item) => item.Type === "movie" && parseFloat(item.Year) > 2000 || item.Type === "series")
                    // .filter((item) => item.Title.split(" ").length <= 2  && parseFloat(item.Year) > 2000
               // const aRR =  sortedData.reduce((prev, accum) =>[...prev ,accum.Title], [])
               //  const str = sortedData.reduce((prev, accum) => `${prev} ${accum.Title}` ,  "")
                // sortedData.forEach((item) => {
                //         if (item.Title.split(" ").length <= 2 ){
                //             console.log(item.imdbID)
                //         }
                //     })
                // const nameAtype = sortedData.reduce((prev, accum) => [
                //     {
                //         ...prev,
                //     movie:accum.Type,
                //     title:accum.Title
                //     }
                // ], [{}])
                // console.log(nameAtype)
                // const typeAname = sortedData.map((item) =>({
                //     name:item.Title,
                //     type: item.Type
                // }))
                // console.log(typeAname)
                // const page = data.resultTotal.map((item)=>{
                //
                // })

    useEffect(() =>{
        fetch(`http://www.omdbapi.com/?apikey=530a5aa2&s=movies`)
            .then(response => response.json())
            .then(data => {
                setLoading(false)
                setMovies(data.Search)
            })
            .catch((err) =>{
                console.log(err)
                setLoading(false)
            })
    },[])

        return (
            <main className='container content'>
                <Search searchMovies={searchMovies}/>
                {loading ? (
                        <Preloader/>
                    ) : (
                        <Movies movies={movies}/>
                    )}
                <ul className='pagination'>
                    {pages.map(page => <li>
                        <a key={page}>
                            {page}
                        </a>
                    </li>)}
                    </ul>
            </main>
        )
}

export default Main;
