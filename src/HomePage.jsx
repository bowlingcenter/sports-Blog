import React from 'react'
import { Button,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function HomePage() {
  

  return (
    <>
    
     <main>
      <section id='price'>
        
        <div className='container bg-primary' style={{height: '100rem'}}>
          <div className='row justify-content-center '>
          <div className='col-8 col-md-4 col-lg-3 mt-4 d-flex justify-content-center'>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.NDOdMC_KsCMy-cpI6kRK5wHaEW?rs=1&pid=ImgDetMain" />
          <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          </Card>
          </div>
          <div className='col-9 col-md-4 col-lg-3 mt-4 d-flex justify-content-start'>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.NDOdMC_KsCMy-cpI6kRK5wHaEW?rs=1&pid=ImgDetMain" />
          <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          </Card>
          </div>
          <div className='col-8 col-md-4 col-lg-3 mt-4 d-flex justify-content-end'>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.NDOdMC_KsCMy-cpI6kRK5wHaEW?rs=1&pid=ImgDetMain" />
          <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          </Card>
          </div>
          </div>
          
          
        </div>
      </section>
      <section id='will'>
        <div className="container bg-secondary" style={{height: '10rem'}}>
          <h1 className='display-1 display-md-4 display-lg-1'>MY</h1>
          <p className='display-1 display-md-4 display-lg-3'>what a kid</p>
        </div>
      </section>
     </main>
    </>
  )
}

export default HomePage
