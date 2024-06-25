import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import newRequest from '../../utils/newRequest';

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={active || pathname!=='/' ? "navbar active" : "navbar"}>
        <div className="container">
            <div className="logo">
                <Link to='/' className='link'>
                <span className='text1'>Freelance</span>
                <span className='text2'>Center</span>
                </Link>
            </div>
            <div className="links">
                <span>Business</span>
                <span>Explore</span>
                <span>Hebrew</span>
                {!currentUser?.isSeller && <span>Become a seller</span>}
                {!currentUser && <button>Join</button>  }   
                {currentUser && (
                    <div className="user" onClick={()=>setOpen(!open)}>
                        <img src={currentUser.img || "/img/noavatar.jpg"} 
                        alt="" 
                        />
                        <span>{currentUser?.username}</span>
                        {open && <div className="options">
                            {currentUser?.isSeller && (
                                    <>
                                    <Link className='link' to='/mygigs'>Gigs</Link>
                                    <Link className='link' to='/add'>Add new Gig</Link>
                                    </>
                                )
                            }
                                <Link className='link' to='/orders'>Orders</Link>
                                <Link className='link' to='/messages'>Messages</Link>
                                <Link className='link' onClick={handleLogout}>Logout</Link>
                            
                        </div>}
                    </div>
                )

                }     
                
            </div>
        </div>
        
        {(active || pathname!=='/') && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Programming
            </Link>
            <Link className="link menuLink" to="/">
              Cyber
            </Link>
            <Link className="link menuLink" to="/">
              Hardware
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Embedded
            </Link>
            <Link className="link menuLink" to="/">
              Courses
            </Link>
            <Link className="link menuLink" to="/">
              Data Science
            </Link>
            <Link className="link menuLink" to="/">
              Web Design
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  )
}

export default Navbar