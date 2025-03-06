import { useRouteError } from 'react-refresh';


const Error = () =>{
    const err = useRouteError();
    console.log(err);

    return(
        <div className="error">
            OOPS! Page not found
            <hr></hr> 😱 :(
            <h2>{err.status}: {err.statusText}</h2>
        </div>
    );
};

export default Error;