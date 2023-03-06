import React, { Component } from 'react'
import { Container } from '@mui/material/'
import CssBaseline from '@mui/material/CssBaseline'
import HomeForm from '../Forms/HomeForm'
import Typography from '@mui/material/Typography'

class Home extends Component {

    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <CssBaseline />
                <div style={{ width: '100%', height: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
                    <div style={{ filter: 'brightness(0.7)', position: 'absolute', top: '0px', left: '0px', width:'100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: 'url("https://wallpaperaccess.com/full/2677518.jpg")'}}></div>
                    <h2 className='position-absolute text-white'>Dashboard</h2>
                </div>
                <Container maxWidth='md'>
                    <div className='col-12'>
                        <div className='row'>
                            <div className='col-8 pt-5'>
                                <Typography gutterBottom variant="h4" component="div">Lorem Ipsum</Typography>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis lacus ex. Ut sed bibendum dui. Nullam nec varius velit. Ut egestas dapibus massa a blandit.</p>
                                <p>Pellentesque mollis lectus a gravida ornare. In quis dolor quis mauris lobortis ullamcorper eget non tellus. Fusce sed neque dapibus, placerat nisi ut, interdum augue. Sed in nisl lacus. Nunc commodo nulla quam, non ornare quam molestie sed. Cras tempus lorem at enim pulvinar varius</p>
                                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas eu nisi nec nibh rhoncus tincidunt. Duis ac feugiat metus. Maecenas cursus quam id congue gravida.</p>
                                <iframe className='mb-3' src="https://www.youtube.com/embed/672TY8K2PKk" style={{ width: '100%', aspectRatio: '16/9'}}/>
                                <p>Phasellus ultricies lorem quis enim semper egestas. Pellentesque auctor quis justo eu pellentesque. Nulla odio nulla, efficitur quis posuere quis, dignissim sed sem. In eget purus in enim imperdiet sodales</p>
                                <p>Vestibulum pharetra ultrices lectus sit amet lacinia. Proin fringilla consectetur ligula, vitae laoreet velit maximus maximus</p>
                            </div>
                            <div className='col-4'>
                                <div className='sticky-top pt-5'>
                                    <div className='border rounded p-3'>
                                        <Typography gutterBottom variant="h4" component="div">Score</Typography>
                                        <HomeForm/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </Container>
            </React.Fragment>
        )
    }
}


export default Home