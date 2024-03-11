import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
//import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);
  //const { pathname } = useLocation();
  //const navigate = useNavigate()

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id:1,
    username: "John Doe",
    isSeller: true
  }
  return (
    <div className={active ? "navbar active" : "navbar"}>
        <div className="container">
            <div className="logo">
                {/* <Link to='/'> */}
                <span className='text1'>Freelance</span>
                <span className='text2'>Center</span>
                {/* </Link> */}
            </div>
            <div className="links">
                <span>Business</span>
                <span>Explore</span>
                <span>Hebrew</span>
                {!currentUser?.isSeller && <span>Become a seller</span>}
                {!currentUser && <button>Join</button>  }   
                {currentUser && (
                    <div className="user" onClick={()=>setOpen(!open)}>
                        <img src="" alt="" />
                        <span>{currentUser?.username}</span>
                        {open && <div className="options">
                            {currentUser?.isSeller && (
                                    <>
                                    <span>Gigs</span>
                                    <span>Add new Gig</span>
                                    </>
                                )
                            }
                                <span>Orders</span>
                                <span>Messages</span>
                                <span>Logout</span>
                            
                        </div>}
                    </div>
                )

                }     
                
            </div>
        </div>
        <hr/>
        {(active) && (
        <>
          <hr />
          <div className="menu">
            {/* <Link className="link menuLink" to="/"> */}
              Programming
            {/* </Link> */}
            {/* <Link className="link menuLink" to="/"> */}
              Cyber
            {/* </Link> */}
            {/* <Link className="link menuLink" to="/"> */}
              Hardware
            {/* </Link> */}
            {/* <Link className="link menuLink" to="/"> */}
              AI Services
            {/* </Link> */}
            {/* <Link className="link menuLink" to="/"> */}
              Digital Marketing
            {/* </Link> */}
            {/* <Link className="link menuLink" to="/"> */}
              Embedded
            {/* </Link> */}
            {/* <Link className="link menuLink" to="/"> */}
              Courses
            {/* </Link> */}
            {/* <Link className="link menuLink" to="/"> */}
              Data Science
            {/* </Link> */}
            {/* <Link className="link menuLink" to="/"> */}
              Web Design
            {/* </Link> */}
          </div>
          <hr />
        </>
      )}
    </div>
  )
}

export default Navbar