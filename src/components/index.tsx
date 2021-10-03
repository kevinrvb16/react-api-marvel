import styles from './styles.module.css'
import Button from '@mui/material/Button';

interface IProps {
    name: String
}
const MarvelItem: React.FC<IProps> = ({ name }) => {
    return (
        <div className={styles.component}>

            <Button variant="contained" size="small">
                <h3> {name}</h3>
            </Button>
        </div>
    )
}
export default MarvelItem