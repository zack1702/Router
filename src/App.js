import { Route,Switch, Link } from "react-router-dom"
import {useState} from 'react';
import Home from './Components/Home'
import Movies from './Components/Movies'
import Movie from './Components/Movie'
import ErrorMessage from './Components/ErrorMessage'
import PrivateRoute from "./Components/PrivateRoute"
import Secret from './Components/Secret'
const App = () => {
    
    const [isAuth,setIsAuth] = useState(false)
    const movies = [
        {
            id: 1,
            title: 'Dark Knight',
            description: 'After Gordon, Dent and Batman begin an assault on Gothams organised crime, the mobs hire the Joker, a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees.',
            img: 'https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg'
        }
        ,
        {
            id: 2,
            title: 'The Dark Knight Rises',
            description: 'Bane, an imposing terrorist, attacks Gotham City and disrupts its eight-year-long period of peace. This forces Bruce Wayne to come out of hiding and don the cape and cowl of Batman again.',
            img: 'https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UY1200_CR90,0,630,1200_AL_.jpg'
        },
    ]

    const routes = [
        {
            path:'/',
            main: () => <Home/>
        },
        {
            path:'/secret',
            main: () => <PrivateRoute isAuth={isAuth} component={Secret} />
        },
        {
            path:'/movies',
            main: () => <Movies data={movies}/>
        },
        {
            path:'/movies/:movieId',
            main: () => <Movie data={movies}/>
        },
        {
            path:'*',
            main: () => <ErrorMessage/>
        },
    ]

    return (
        <>
        
        <Link to='/'>Home</Link>
        <Link to='/movies'>Movies</Link>
        <Link to='/secret'>Secret</Link>

        <button onClick={()=>setIsAuth(true)}>Login</button>
        <button onClick={()=>setIsAuth(false)}>Logout</button>
        
    
        <Switch>
            {routes.map((route,index) => (
                <Route 
                    key={index}
                    path={route.path}
                    children={route.main}
                    exact
                  />
            ))}
        </Switch>

        </>
    )
}

export default App