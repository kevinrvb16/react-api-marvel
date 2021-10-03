import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import md5 from "md5"
import MarvelItem from '../../components'
import img from '../../assets/images/marvel.jpeg'
import styles from './styles.module.css'

interface IItems {
    name: string;
}
interface ISeries {
    available: Number
    items: IItems[]
}
interface IResults {
    id: number
    name: String
    series: ISeries
    thumbnail: {path: string, extension: string} 
}

interface IData {
    count: number
    limit: number
    offset: number
    results: IResults[] | undefined
    total: number
}

interface IMarvel {
    data: IData
}
const Home: React.FC = () => {
    const publicKey = 'c1a8678d111fe55be1320f494c97005f';
    const privateKey = '2c08227facdeeb214392744ecf727db3124b14f2';
    const [results, setResults] = useState<IResults[]>()
    const time = Number(new Date())
    const hash = md5(time + privateKey + publicKey)

    const getAllCharacters = async () => {

        const { data } = await api.get<IMarvel>(`/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`)
        setResults(data.data.results)
    }
    useEffect(() => {
        getAllCharacters()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className={styles.content}>
            <h1>Home Marvel</h1>
            <img src={img} alt="logo Marvel" />
            {results  ? results.map(
                (result) => (
                    <Link to={`/characters/${result.id}`} key={result.id}>
                        <MarvelItem name = {result.name} /> 
                    </Link>
                )): (
                    <h1>Carregando...</h1>
            )}
        </div>
    )
}

export default Home;