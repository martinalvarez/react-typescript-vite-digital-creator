import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    console.log(error);
    const {statusText , message } = error;

    return (
        <>
            <h1>Ooops!</h1>

            <p>Sorry, an expected error has been ocurred.</p>

            <p>{statusText || message}</p>
        </>
    );
}

export default ErrorPage;