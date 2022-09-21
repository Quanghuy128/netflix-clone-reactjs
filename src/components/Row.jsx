import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import Movie from '../components/Movie'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'


const Row = ({ title, fetchURL, rowID }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(fetchURL).then((res) => {
            setMovies(res.data.results)
        })

    }, [fetchURL]);

    const sideLeft = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const sideRight = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return (
        <div>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>

            <div className='relative flex items-center group'>
                <MdChevronLeft onClick={sideLeft}
                    className='bg-white left-0 h-[70%] absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={40}
                />
                <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {movies.map((item, id) => (
                        <Movie key={id} item={item} />
                    ))}
                </div>
                <MdChevronRight onClick={sideRight}
                    className='bg-white right-0 h-[70%] absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={40} />
            </div>

        </div>
    )
}

export default Row