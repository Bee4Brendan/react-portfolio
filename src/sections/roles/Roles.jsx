import Card from '../../components/Card'
import data from './data'
import './roles.css'

const Services = () => {
  return (
    <section id="services">
      <h2>Previous Roles</h2>
      <p>I have experience in all of these areas, but I'm still expanding and eager to learn!</p>
      <div className="container services__container">
        {
          data.map(item => (
            <Card key={item.id} className="service light">
              <div className="service__icon">{item.icon}</div>
              <div className="service__details">
                <h4>{item.title}</h4>
                  <p>{item.desc}</p>
              </div>
            </Card>
          ))
        }
      </div>
    </section>
  )
}

export default Services