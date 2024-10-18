import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <>
      <Navbar style={{ height: '5rem', backgroundColor: '#ffeed4ff' }}>
        <Container className='d-flex justify-content-between'>
          <Navbar.Brand>
            <img
              src="https://cdn.pixabay.com/photo/2017/02/17/17/33/food-2074638_640.png"
              width="50"
              height="50"
              className="d-inline-block align-top border border-dark rounded"
              alt="brand logo"
            />
          </Navbar.Brand>
          <div className='d-flex'>
            <input
              className='form-control w-75'
              type="text"
              placeholder='Search by Cuisine'
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <span>
              <button className='btn btn-info' onClick={handleSearch}>Search</button>
            </span>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
