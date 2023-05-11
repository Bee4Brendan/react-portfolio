import faqs from './data'
import FAQ from './FAQ'
import './faqs.css'

const FAQs = () => {
  return (
    <section id="faqs">
      <h2>Frequently Asked Questions</h2>
      <p>
      More like Future Anticipated Questions. Click to toggle the answer, and if you still have some more questions, send me a message from the contact section! I might add it to the FAQS here.
      </p>
      <div className="container faqs__container">
        {
          faqs.map(faq => (
            <FAQ key={faq.id} faq={faq}/>
          ))
        }
      </div>
    </section>
  )
}

export default FAQs