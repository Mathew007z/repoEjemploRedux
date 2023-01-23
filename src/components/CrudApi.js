import {useSelector, useDispatch} from 'react-redux';
import {useEffect}  from 'react';
import { readAllAction } from '../actions/crudActions';


const CrudApi = () => {

    const state = useSelector(state => state)
    const { db } = state.crud 

    const dispatch = useDispatch()
    
    const servicio = 'https://reqres.in/api/users?page=2'

    useEffect(()=> {
        fetch(servicio)
        .then((res)=> res.json())
        .then((data) => {
            dispatch(readAllAction(data.data))
        })
    },[dispatch])


    return(
        <div>
            {
                db.map((db) => (
                    <div key={db.id}>
                        <h1>{db.email}</h1>
                    </div>
                ))
            }
        </div>
    )
}

export default CrudApi;