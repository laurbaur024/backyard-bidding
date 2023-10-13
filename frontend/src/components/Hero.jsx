import { Container, Card, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className=' py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
          <h1 className='text-center mb-4'>Backyard Bidding</h1>
          <p className='text-center mb-4'>
          Welcome to Backyard Bidding, where the thrill of discovery meets the excitement of online auctions! Our unique platform lets you bid on captivating photos of hidden garages, unlocking the potential to score incredible finds within. Join our community and embark on a treasure hunt like no other, as you win the exciting contents hidden behind those garage doors.
          </p>
          <div className='d-flex'>
            <Button variant='primary' href='/login' className='me-3'>
              Sign In
            </Button>
            <Button variant='secondary' href='/register'>
              Sign Up
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
