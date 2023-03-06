import React, { Component } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Container } from '@mui/material/'
import CssBaseline from '@mui/material/CssBaseline'
import ContactForm from '../Forms/ContactForm'

class Contact extends Component {

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <div style={{ width: '100%', height: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
                    <div style={{ filter: 'brightness(0.7)', position: 'absolute', top: '0px', left: '0px', width:'100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: 'url("https://media.istockphoto.com/id/1311934969/photo/contact-us.jpg?s=612x612&w=0&k=20&c=_vmYyAX0aFi-sHH8eYS-tLLNfs1ZWXnNB8M7_KWwhgg=")'}}></div>
                    <h2 className='position-absolute text-white'>Contact Us</h2>
                </div>
                <Container maxWidth='md'>
                    <div className='row pt-5'>
                        <div className='col-6'>
                            <div className='row'>
                                <div className='col-12 mb-4'>
                                    <Card>
                                        <CardContent>
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.003826387455!2d121.02929261406013!3d14.655724189767405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b6e2c5437561%3A0x86bd8c2f9ddec0b4!2sSM%20North%20EDSA%20Sky%20Dome!5e0!3m2!1sen!2sph!4v1677445673968!5m2!1sen!2sph" style={{border:'0', height: '100%', width: '100%'}} ></iframe>
                                            <Typography gutterBottom variant="h5" component="div">
                                                M24J+7HQ, North Ave, Bago Bantay, Quezon City, Metro Manila
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className='col-12 mb-4'>
                                    <Card>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Contact No.
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                912-123-1234
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className='col-12 mb-4'>
                                    <Card>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Email
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                user.contactUs@email.com
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardContent>
                                    <h4 className='m-0'>Message Us</h4>
                                    <ContactForm/>
                                </CardContent>
                            </Card>
                        </div>
                        
                    </div>
                </Container>
            </React.Fragment>
        )
    }
}

export default Contact