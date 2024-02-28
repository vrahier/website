import './About.css';

const About = ({ data }) => {
  
  return (
    <div className='about'>
      <img
        className='picture'
        src="picture.png"
        alt={"Picture of " + data.firstName + " " + data.name}
      />
      <div className='about-text'>{data.about}</div>
    </div>
  )
}

export default About;