import React from 'react'

const Features = () => {
  return (
    <div className="feautres">
        <div className='feature-grid'>
        <i class="fa-regular fa-calendar-days feature-icons"></i>
            <h3>
                flexible Bookings
            </h3>
            <p>
            "Drive on your terms with our flexible booking options, designed to fit your schedule perfectly."
            </p>
            <button>Read More <i class="fa-solid fa-circle-right"></i></button>
        </div>
        <div className='feature-grid'>
        <i class="fa-solid fa-indian-rupee-sign feature-icons"></i>
            <h3>
                No Higgen charges
            </h3>
            <p>
            "Rest easy knowing there are no surprises – just straightforward pricing with no hidden fees."
            </p>
            <button>Read More <i class="fa-solid fa-circle-right"></i></button>
        </div>
        <div className='feature-grid'>
        <i class="fa-solid fa-headset feature-icons"></i>
            <h3>
                24 X 7 Customer Support
            </h3>
            <p>
            "Our dedicated team is here round-the-clock, ready to assist you whenever you need us. Your satisfaction is our priority."
            </p>
            <button>Read More <i class="fa-solid fa-circle-right"></i></button>
        </div>
    </div>
  )
}

export default Features