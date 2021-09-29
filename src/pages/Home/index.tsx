import { Link } from 'react-router-dom'
function Home () {
    return (
        <>
            <h1>Home Marvel</h1>
            <Link  to='/person'>
                <button>Person</button>
            </Link>
        </>
    )
}

export default Home;