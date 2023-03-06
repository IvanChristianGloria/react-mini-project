import React, { Component } from 'react'
import { Container } from '@mui/material/'
import CssBaseline from '@mui/material/CssBaseline'
import GetPlayers from './getPlayers'

class Popular extends Component {
    render(){
        return (
        <React.Fragment>
            <CssBaseline />
            <div style={{ width: '100%', height: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
                <div style={{ filter: 'brightness(0.7)', position: 'absolute', top: '0px', left: '0px', width:'100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: 'url("https://png.pngtree.com/thumb_back/fh260/back_our/20190619/ourmid/pngtree-colorful-people-silhouette-running-flying-corporate-culture-poster-background-image_131463.jpg")'}}></div>
                <h2 className='position-absolute text-white'>Popular Players</h2>
            </div>
            <Container maxWidth='md'>
                <div className='col-12'>
                    <div className='row mt-5'>
                        <GetPlayers/>
                    </div>
                </div>
            </Container>
        </React.Fragment>
        )
    }
  }

export default Popular