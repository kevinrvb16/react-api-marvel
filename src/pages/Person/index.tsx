import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import md5 from "md5"
import styles from './styles.module.css'
import Button from '@mui/material/Button';
interface IItems {
    name: string;
}
interface ISeries {
    available: number
    items: IItems[]
}
interface IResult {
    id: number
    name: string
    series: ISeries 
    thumbnail: { path: string, extension: string }
}

interface IParams {
    id: string | undefined
}

const Person : React.FC = () => {
    const publicKey = 'c1a8678d111fe55be1320f494c97005f';
    const privateKey = '2c08227facdeeb214392744ecf727db3124b14f2';

    const time = Number(new Date())
    const hash = md5(time + privateKey + publicKey)
    const [character, setCharacter] = useState<IResult>()
    const { id: characterId } = useParams<IParams>()

    const getCharacterDetails = async () => {
        console.log(characterId)
        const { data } = await api.get(`/characters/${characterId}?ts=${time}&apikey=${publicKey}&hash=${hash}`)
        console.log(data.data.results)
        setCharacter(data.data.results[0])
    }
    useEffect( () => {
        getCharacterDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <h1>{character?.name}</h1>
            <img className={styles.image} src={character?.thumbnail.path + '.' + character?.thumbnail.extension} alt="imagem" /><br/>
            <Link to="/">
                <Button variant="contained" size="large">
                    Voltar
                </Button>
            </Link>
        </>
    )
}

export default Person;