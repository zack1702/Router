import {useLocation} from 'react-router-dom';

const ErrorMessage = () => {
    const location = useLocation()
 
    return(
        <>
        <h3>Sorry but this {location.pathname} isn't part of this website</h3>
        </>
    )
}
export default ErrorMessage