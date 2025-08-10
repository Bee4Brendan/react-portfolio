const Testimonial = ({testimonial}) => {
  return (
        <div className="testimonial__client">
            <div className="testimonial__client-avatar">
                <img src={testimonial.avatar} alt="Testimonial Avatar" />
            </div>
        </div>
  )
}

export default Testimonial