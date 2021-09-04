import {Route} from 'react-router-dom'

const PrivateRoute = ({isAuth,component:Component}) => { 
    return(
        <>
            <Route render={() => {
                if ( isAuth) {
                    return <Component/>
                } else {
                    return <div>You are not allowed to be here</div>
                }
            }}></Route>
        </>
    )
}

export default PrivateRoute