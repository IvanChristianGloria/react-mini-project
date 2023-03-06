import axios from 'axios'
import * as actions from './actionType'
import { getPlayers } from '../utils/services'

export const onGetPlayers = () => {
    return (dispatch) => {
        axios.get(getPlayers).then((res) => {
            dispatch(
                ((data) => {
                    return {
                        type: actions.GET_PLAYERS,
                        payload: data
                    }
                })(res.data)
            )
        })
        .catch((err) => {
            console.log(err)
        })
    }
}