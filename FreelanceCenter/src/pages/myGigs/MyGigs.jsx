import React from 'react'
import "./MyGigs.scss"
import { Link } from 'react-scroll'

const MyGigs = () => {
  return (
    <div className='myGigs'>
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add">
            <button>Add New Gig</button>
          </Link>
        </div>
      <table>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Sales</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>
            <img className='image' src="https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </td>
          <td>Learn ReactJS for Beginners (step by step)</td>
          <td>₪320</td>
          <td>162</td>
          <td>
            <img className="delete" src="/img/delete.png" alt="" />
          </td>
        </tr>
        <tr>
          <td>
            <img className='image' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          </td>
          <td>I help you deploy your app</td>
          <td>₪320</td>
          <td>73</td>
          <td>
            <img className="delete" src="/img/delete.png" alt="" />
          </td>
        </tr>
        <tr>
          <td>
            <img className='image' src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          </td>
          <td>[Tutorial] Web Design with Figma</td>
          <td>₪728</td>
          <td>66</td>
          <td>
            <img className="delete" src="/img/delete.png" alt="" />
          </td>
        </tr>
        <tr>
          <td>
            <img className='image' src="https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          </td>
          <td>Learn the basics of C Sharp with David</td>
          <td>₪449</td>
          <td>232</td>
          <td>
            <img className="delete" src="/img/delete.png" alt="" />
          </td>
        </tr>
        <tr>
          <td>
            <img className='image' src="https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </td>
          <td>I verify the code of your application</td>
          <td>₪1040</td>
          <td>13</td>
          <td>
            <img className="delete" src="/img/delete.png" alt="" />
          </td>
        </tr>
        

      </table>
        
      </div>
    </div>
  )
}

export default MyGigs