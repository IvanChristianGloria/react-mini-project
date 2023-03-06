import React, { useState } from 'react'
import { Box, TextField, Button } from '@mui/material/'

const ContactForm = () => {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [emailStatus, setEmailStatus] = useState(false)
    const [messageStatus, setMessageStatus] = useState(false)
    const [formValidate, setFormValidate] = useState(false)

    const validateEmail = (e) => {
        let formValid = formValidate
        let emailError = errorEmail
        const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

        if (e.trim() === '')
        {
            emailError = 'This is required'
            formValid = false
        }
        else if (!pattern.test(e))
        {
            emailError = 'Invalid Email Address'
            formValid = false
        }
        else
        {
            emailError = ''
            formValid = true
        }

        setEmailStatus(formValid ? false : true)
        setErrorEmail(emailError)
        setFormValidate(formValid)
        setEmail(e)

        return formValid
    }

    const validateMessage = (e) => {
        let formValid = formValidate
        let messageError = errorMessage

        if (e.trim() === '')
        {
            messageError = 'This is required'
            formValid = false
        }
        else
        {
            messageError = ''
            formValid = true
        }

        setMessageStatus(formValid ? false : true)
        setErrorMessage(messageError)
        setFormValidate(formValid)
        setMessage(e)

        return formValid
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(validateEmail(email) && validateMessage(message))
        {
            alert('Message Sent!')
            setEmail('')
            setMessage('')
            setFormValidate(false)
        }
    }
    return (
        <Box component='form' onSubmit={(e) => handleSubmit(e)} noValidate autoComplete='off' style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <TextField id='email' label='Email' variant='standard' error={emailStatus} value={email} helperText={errorEmail} onChange={(e) => validateEmail(e.target.value)}/>
            <TextField id='message' label='Message' multiline maxRows={4} variant='standard' onChange={(e) => validateMessage(e.target.value)} error={messageStatus} value={message} helperText={errorMessage}/>
            <Button variant='outlined' type='submit'>Send</Button>
        </Box>
    )
}

export default ContactForm 