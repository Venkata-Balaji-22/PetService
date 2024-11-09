import './Navbar.css';

function Navbar() {
    return (
  
  
      <div className="Navbar">
        <div class="logo">
              <img src="https://logowik.com/content/uploads/images/animal-care-pet91179.logowik.com.webp" alt="Dog Logo" class="dog-logo"/> 
              DOGGO
          </div>
        {/* <div class="search-container">
              <input type="text" id="search" placeholder="Search for products..." />
              <button onclick="searchProduct()">Search</button>
          </div> */}

          <div class="nav">
            <a className='navbtn' href="/home">Home</a>
            <a className='navbtn' href="/pets">Pets</a>
            <a className='navbtn' href="/services">Services</a>
            <a className='navbtn' href="/grooming">grooming</a>
            <a className='navbtn' href="/products">products</a>
            <a className='navbtn' href="/feedback">feedback</a>
            <a className='navbn'href="/">Logout</a>
          </div>
         
      </div>
    );
  }
  
export default Navbar; 
