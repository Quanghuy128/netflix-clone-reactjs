import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import Movie from '../components/Movie'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'


const Row = ({ title, fetchURL }) => {
    const [movies, setMovies] = useState([]);
    

    useEffect(() => {
        axios.get(fetchURL).then((res) => {
            setMovies(res.data.results)
        })

    }, [fetchURL]);
    console.log(movies)
    return (
        <div>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <MdChevronLeft/>
            <div className='relative flex items-center'>
                <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {movies.map((item, id) => (
                        <Movie key={id} item={item}/>
                    ))}
                </div>
            </div>
            <MdChevronRight/>
        </div>
    )
}

export default Row