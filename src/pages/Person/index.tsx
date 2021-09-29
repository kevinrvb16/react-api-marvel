import { Link } from 'react-router-dom'
function Person () {
    return (
        <>
            <h1>Page Person Marvel</h1>
            <Link  to='/'>
                <button>Voltar</button>
            </Link>
        </>
    )
}

export default Person;