import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onGetPlayers } from '../action'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

const GetPlayers = () => {
    const players = useSelector((state) => state.players)
    console.log(players)

    const players_list = players.map(({ id, firstName, lastName, imageUrl }) =>
        <div key={id} className='col-4 mb-4'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={imageUrl}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {firstName} {lastName}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(onGetPlayers())
    }, [])

    return <React.Fragment>{players_list}</React.Fragment>
}

export default GetPlayers