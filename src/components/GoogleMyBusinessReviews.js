import React from 'react'
import "./GoogleMyBusinessReviewStyles.css"
import review3 from "../assets/review3.png"
import review4 from "../assets/review4.png"
import review5 from "../assets/review5.png"
import review6 from "../assets/review6.png"
import review7 from "../assets/riview7.png"
import reviewimage from "../assets/reviewimage.jpg"
import { FaStar } from 'react-icons/fa'

const GoogleMyBusinessReviews = () => {
  return (
    <div className='reviews-content'>
      <div className='reviews-container'>
      <a href="https://www.google.com/maps/place/Autodocuments/@6.6119467,3.3472308,15z/data=!4m7!3m6!1s0x103b93761c4d9c97:0x462af3d7cbdc2428!8m2!3d6.6119255!4d3.3559856!9m1!1b1" >Our Customers Reviews</a>
<div className='review-cards'>
  <div className='inner-card'>
  <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 " alt='essayimg' />
  <div className='cardname' >
  <h2>Essay Palmer</h2>
  <h4>8 reviews</h4>
  </div>
  </div>
<div className='star'>
<FaStar
      size={20}
      style={{ color: "#ffc107", marginRight: "0.3rem"}}
    />
        <FaStar
          size={20}
          style={{ color: "#ffc107", marginRight: ".3rem"}}
        />
        <FaStar
          size={20}
          style={{ color: "#ffc107", marginRight: ".3rem"}}
        />
        <FaStar
          size={20}
          style={{ color: "#ffc107", marginRight: ".3rem"}}
        />
        <FaStar
          size={20}
          style={{ color: "#ffc107", marginRight: ".3rem"}}
        />
  <p> a year ago</p>
  </div>
  <p>AutoDocs assisted me in getting a drivers license in record time. What stood out for me was the constant updates/feedback. I wasn’t kept in the dark. They are always one call away. I also used their services to purchase my Camry muscle a year ago. They are simply a necessary utility. I have proudly referred them to my associates and they all have positive reviews so far.  I wasn’t solicited for this,  this my way of appreciation. Thanks AutoDocs</p>
  

</div>
<div className='review-cards'>
  <div className='inner-card'>
  <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 " alt='essayimg' />
  <div className='cardname' >
  <h2>Rabiu Sodeeq</h2>
  <h4>2 reviews</h4>
  </div>
  </div>
<div className='star'>
<FaStar
      size={20}
      style={{ color: "#ffc107", marginRight: "0.3rem"}}
    />
        <FaStar
          size={20}
          style={{ color: "#ffc107", marginRight: ".3rem"}}
        />
        <FaStar
          size={20}
          style={{ color: "#ffc107", marginRight: ".3rem"}}
        />
        <FaStar
          size={20}
          style={{ color: "#ffc107", marginRight: ".3rem"}}
        />
        <FaStar
          size={20}
          style={{ color: "#ffc107", marginRight: ".3rem"}}
        />
  <p> a month ago</p>
  </div>
  <p>Amazing job they do, Always on time… the best out there</p>
  

</div>
<div className='review-cards'>
  <div className='inner-card'>
  <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 " alt='essayimg' />
  <div className='cardname' >
  <h2>Dayo Okesola</h2>
  <h4>1 review</h4>
  </div>
  </div>
<div className='star'>
<FaStar
      size={20}
      style={{ color: "#ffc107", marginRight: "0.3rem"}}
    />
        <FaStar
          size={20}
          style={{ color: "#ffc107", marginRight: ".3rem"}}
        />
        <FaStar
          size={20}
          style={{ color: "#ffc107", marginRight: ".3rem"}}
        />
        <FaStar
          size={20}
          style={{ color: "#ffc107", marginRight: ".3rem"}}
        />
        <FaStar
          size={20}
          style={{ color: "#ffc107", marginRight: ".3rem"}}
        />
  <p> a year ago</p>
  </div>
  <p>AThe service was timely and the communications kept me up to speed on what was going on!
{"\n"}Thumbs up! I will definitely recommend.</p>
  

</div>
  </div>
  
  <div className='end'>
  <img src={reviewimage} alt="review"/>
    </div>
    </div>
  )
}

export default GoogleMyBusinessReviews