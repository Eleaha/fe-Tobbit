import { Link } from "react-router-dom";

function ErrorPage({errorMessage, errorCode}) {

	return (
		<section className="route error-page">
			<h1>Uh oh! Something's gone wrong.</h1>
            <h2>{errorMessage}</h2>
			<h1>{errorCode}</h1>
            <Link to='/' className='.link'>
                <h2>Home</h2>
            </Link>
		</section>
	)
}

export default ErrorPage;
