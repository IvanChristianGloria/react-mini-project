import React, { useEffect, useState } from 'react'
import { Box, TextField, Container, Stack, Button } from '@mui/material/'

const HomeForm = () => {
    const [name, setName] = useState('')
    const [score, setScore] = useState('')
    const [errorName, setErrorName] = useState('')
    const [errorScore, setErrorScore] = useState('')
    const [nameStatus, setNameStatus] = useState(false)
    const [scoreStatus, setScoreStatus] = useState(false)
    const [formValidate, setFormValidate] = useState(false)
    const [scores, setScores] = useState(localStorage.hasOwnProperty('score') ? JSON.parse(localStorage.getItem('score')) : [])

    const validateName = (e) => {
        let formValid = formValidate
        let nameError = errorName
        const pattern = /^[a-zA-Z]+$/

        if (e.trim() === '') {
            nameError = 'Name is required'
            formValid = false
        }
        else if(!pattern.test(e))
        {
            nameError = 'Name must contain letters only'
            formValid = false
        }
        else if (e.trim().length < 2) {
            nameError = 'Name must contain atleast 2 characters'
            formValid = false
        }
        else {
            nameError = ''
            formValid = true
        }

        setNameStatus(formValid? false : true )
        setErrorName(nameError)
        setFormValidate(formValid)
        setName(e)

        return formValid
    }

    const validateScore = (e) => {
        let formValid = formValidate
        let scoreError = errorScore
        const pattern = /^[0-9]*$/

        if(!pattern.test(e)){
            scoreError = 'Score must contain numbers only'
            formValid = false
        }
        else if(e === ''){
            scoreError = 'Score is required'
            formValid = false
        }
        else if (e < 0) {
            scoreError = 'Score cannot be below 0'
            formValid = false
        }
        else {
            scoreError = ''
            formValid = true
        }

        setScoreStatus(formValid? false : true )
        setErrorScore(scoreError)
        setFormValidate(formValid)
        setScore(e)

        return formValid
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (
            validateName(name) &&
            validateScore(score)
        )
        {
            const scores_copy = [...scores, { name, score}]
            setScores(scores_copy)

            alert('Score added successfully')
            setName('')
            setScore('')
            setFormValidate(false)
        }
    }

    useEffect(() => {
        localStorage.setItem('score', JSON.stringify(scores))
    }, [scores])

    return (
        <Box component='form' onSubmit={(e) => handleSubmit(e)} noValidate autoComplete='off' style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <TextField id='name' label='Name' variant='standard' error={nameStatus} value={name} helperText={errorName} onChange={(e) => validateName(e.target.value)}/>
            <TextField id="score" label="Score" error={scoreStatus} variant="standard" value={score} helperText={errorScore} onChange={(e) => validateScore(e.target.value)}/>
            <Button variant='outlined' type='submit'>Submit</Button>
        </Box>
    )
}

export default HomeForm 