import React, { Component } from 'react'
import ScoreBoard from './ScoreBoard'
import { Container } from '@mui/material/'
import CssBaseline from '@mui/material/CssBaseline'

class Score extends Component{
    render(){
        return(
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth='md' className='pt-5'>
                    <ScoreBoard/>
                </Container>
            </React.Fragment>
        )
    }
}

export default Score