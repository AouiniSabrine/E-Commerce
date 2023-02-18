import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async';
import { Link , useLocation } from 'react-router-dom';



function LoginPage() {
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';


  return (
    <Container className='small-container'>
       <Helmet>
         <title>Log In</title>
       </Helmet>
       <h1 className='my-3'> Log In</h1>
       <Form>
          <Form.Group className='mb-3' controlId='email'>
             <Form.Label>Email</Form.Label>
             <Form.Control type='email' required />
          </Form.Group>

          <Form.Group className='mb-3' controlId='password'>
             <Form.Label>Password</Form.Label>
             <Form.Control type='password' required />
          </Form.Group>

          <div className='mb-3'>
            <Button type='submit'>LogIn</Button>
          </div>
          <div className='mb-3'>
            New customer ? {' '}
            <Link to={`/signup?redirect=${redirect}`}> Create an account</Link>
          </div>
       </Form>
    </Container>
  )
}

export default LoginPage
