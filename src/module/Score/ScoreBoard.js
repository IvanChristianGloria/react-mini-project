import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import { TextField } from '@mui/material/'


const ScoreBoard = () => {
    const scoreSort = (e) => {
        let score_copy = e.sort((a, b) => { return b.score - a.score })
        return score_copy
    }

    const [scoreList, setScoreList] = useState(localStorage.hasOwnProperty('score') ? scoreSort(JSON.parse(localStorage.getItem('score'))) : [])
    const [noResult , setNoResult] = useState('No Score Submitted')

    const handeDelete = (e) => {
        let score_copy = scoreList
        score_copy.splice(e ? e + 1 : 0, 1)
        score_copy = scoreSort(score_copy)
        setScoreList([...score_copy])
        localStorage.setItem('score', JSON.stringify(score_copy))
    }

    const handleSearch = (e) => {
        let score_copy = JSON.parse(localStorage.getItem('score'))
        if(e.trim() == '')
        {
            setScoreList([...scoreSort(score_copy)])
        }
        else if(JSON.parse(localStorage.getItem('score')).length != 0 && localStorage.hasOwnProperty('score'))
        {
            let score_copy = JSON.parse(localStorage.getItem('score'))
            const search_result = score_copy.filter((a) => a.name.toLowerCase().includes(e.toLowerCase()) )
            setScoreList([...scoreSort(search_result)])
            setNoResult('No Result')
        }
    }

    return (
        <React.Fragment>
            <TextField id="name" label="Search Name" variant="outlined" className='mb-3' onChange={(e) => handleSearch(e.target.value)}/>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Score</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {scoreList.length ? scoreList.map(({name, score}, i) => (
                            <TableRow
                                key={name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {name}
                                </TableCell>
                                <TableCell align="right">{score}</TableCell>
                                <TableCell align="right">
                                    <IconButton aria-label="delete" color="primary" id={i} onClick={(e) => handeDelete(e.target.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        )) : <TableRow
                                key={name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="right" rowSpan='3'>{noResult}</TableCell>
                                
                            </TableRow> }
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    )
}

export default ScoreBoard