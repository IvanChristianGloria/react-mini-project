import React, { Component } from 'react'
import { Container } from '@mui/material/'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <div style={{ width: '100%', height: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                    <div style={{ filter: 'brightness(0.7)', position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: 'url("https://i0.wp.com/gdcindia.co.in/wp-content/uploads/2019/03/contact-us-background.jpg?ssl=1")' }}></div>
                    <h2 className='position-absolute text-white'>About Us</h2>
                </div>
                <Container maxWidth='md'>
                    <div className='col-12'>
                        <div className='row' style={{ gap: '20px' }}>
                            <div className='col-lg-12 mb-3 mt-5'>
                                <Typography gutterBottom variant='h4' component='div' className='text-center'>
                                    Lorem Ipsum
                                </Typography>
                                <Typography gutterBottom variant='p' component='div' className='text-center'>
                                    Pellentesque mollis lectus a gravida ornare. In quis dolor quis mauris lobortis ullamcorper eget non tellus. Fusce sed neque dapibus, placerat nisi ut, interdum augue. Sed in nisl lacus.Nunc commodo nulla quam, non ornare quam molestie sed. Cras tempus lorem at enim pulvinar varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas eu nisi nec nibh rhoncus tincidunt. Duis ac feugiat metus. Maecenas cursus quam id congue gravida.
                                </Typography>
                            </div>
                            <div className='col-lg-12 pt-5 mb-5'>
                                <div className='row'>
                                    <div className='col-lg-7 mr-5'>
                                        <Typography gutterBottom variant='h5' component='div'>
                                            Phasellus ultricies lorem quis enim semper egestas.
                                        </Typography>
                                        <Typography gutterBottom variant='p' component='div'>
                                            Pellentesque auctor quis justo eu pellentesque. Nulla odio nulla, efficitur quis posuere quis, dignissim sed sem. In eget purus in enim imperdiet sodales. Vestibulum pharetra ultrices lectus sit amet lacinia. Proin fringilla consectetur ligula, vitae laoreet velit maximus maximus. Integer tempus enim ut commodo auctor.
                                        </Typography>
                                        <Typography gutterBottom variant='p' component='div'>
                                            Nam ornare ex vel tortor rhoncus, ac pharetra magna facilisis. Nam laoreet sodales lorem, sit amet sollicitudin risus. Pellentesque faucibus tincidunt lectus, a aliquet eros cursus ut. Ut et dignissim mauris. Aliquam leo turpis, semper non diam a, tincidunt feugiat odio.
                                        </Typography>
                                    </div>
                                    <div className='col-lg-5'>
                                        <div className='w-100 h-100' style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: 'url("https://i.pinimg.com/originals/86/8b/48/868b48f0ec5b3d88216f4a484b880f59.jpg")' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12 mb-3'>
                                <Typography gutterBottom variant='h4' component='div' className='text-center'>
                                    Sed egestas imperdiet nunc eget fermentum
                                </Typography>
                                <Typography gutterBottom variant='p' component='div' className='text-center'>
                                    Suspendisse dignissim, neque non egestas iaculis, odio ligula consectetur sem, lobortis convallis ante turpis in dui. Etiam ut leo rutrum, aliquam nibh pretium, lacinia diam. Nunc scelerisque vehicula blandit.
                                </Typography>
                            </div>
                            <div id="carouselExample" className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div style={{ aspectRatio: '16/9', backgroundSize: 'cover', bacgkroundPosition: 'center', backgroundImage: 'url("https://png.pngtree.com/thumb_back/fh260/background/20201015/pngtree-white-polygonal-mosaic-triangular-background-abstract-light-gray-background-low-poly-image_418752.jpg")'}} className="d-block w-100" alt="..."></div>
                                    </div>
                                    <div className="carousel-item">
                                        <div style={{ aspectRatio: '16/9', backgroundSize: 'cover', bacgkroundPosition: 'center', backgroundImage: 'url("https://i.ytimg.com/vi/vv724Q6ncOM/maxresdefault.jpg")'}} className="d-block w-100" alt="..."></div>
                                    </div>
                                    <div className="carousel-item">
                                        <div style={{ aspectRatio: '16/9', backgroundSize: 'cover', bacgkroundPosition: 'center', backgroundImage: 'url("https://img.freepik.com/premium-vector/colorful-random-shapes-abstract-background-geometrical-circle-background-with-copy-space-yellow_655111-46.jpg?w=2000")'}} className="d-block w-100" alt="..."></div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className='col-lg-12 pt-5 mb-5'>
                                <div className='row'>
                                    <div className='col-lg-5'>
                                        <div className='w-100 h-100' style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: 'url("https://hub.packtpub.com/wp-content/uploads/2018/03/sky-clouds-blue.jpg")' }}></div>
                                    </div>
                                    <div className='col-lg-7 mr-5'>
                                        <Typography gutterBottom variant='h5' component='div'>
                                            Fusce gravida sem vel malesuada molestie.
                                        </Typography>
                                        <Typography gutterBottom variant='p' component='div'>
                                            Aliquam nunc augue, scelerisque nec elit maximus, scelerisque posuere sem. Sed et ornare elit. In laoreet ex nec neque feugiat pretium ac vitae mauris. Aliquam dapibus suscipit placerat. Nullam porttitor porttitor ante, porta auctor diam condimentum ac.
                                        </Typography>
                                        <Typography gutterBottom variant='p' component='div'>
                                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse non erat at est dictum commodo vel nec augue. Sed dictum arcu sit amet est accumsan, eget scelerisque ante molestie.
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12 mb-3'>
                                <Typography gutterBottom variant='h4' component='div' className='text-center'>
                                    Sed egestas imperdiet nunc eget fermentum
                                </Typography>
                                <iframe className='mb-3' src="https://www.youtube.com/embed/672TY8K2PKk" style={{ width: '100%', aspectRatio: '16/9'}}/>
                            </div>
                        </div>
                    </div>

                </Container>
            </React.Fragment>
        )
    }
}

export default About