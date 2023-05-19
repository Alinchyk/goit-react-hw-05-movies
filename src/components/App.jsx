import { Routes, Route } from "react-router-dom";
import MoviesLayout from "./MoviesLayout/MoviesLayout";
import Home from "views/Home";
import Movies from "views/Movies";
import MovieDetails from "views/MovieDetails";
import Cast from "views/Cast";
import Reviews from "views/Reviews";
import NotFoundPage from "./NotFoundPage/NotFoundPage";

export default function App() {

    return (   
            <Routes>
             <Route path='/' element={ <MoviesLayout />}>
             <Route index element={<Home />} /> 
             <Route path="movies/*" element={<Movies />} />   

             <Route path="movies/:movieId" element={<MovieDetails />} />  
             <Route path="movies/:movieId/cast" element={<Cast />} />  
             <Route path="movies/:movieId/reviews" element={<Reviews />} />  
                    
             <Route path='*' element={<NotFoundPage/>}/>
            </Route>
           </Routes>  
    )
};
