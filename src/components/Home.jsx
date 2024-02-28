import {scrollToDiv} from '../utils/scroll';
import { ScrollDown } from './Content/Style';
import './Home.css';

const Home = ({ data }) => {
    
  const handleClick = () => {
      scrollToDiv("about");
  };
  
  return (
    <div className='home'>
      <h1>{data.firstName} {data.name}</h1>
        <h2>{data.jobTitle}</h2>
        <div>{data.shortPresentation}</div>
        <div id="scrollContainer">
          <ScrollDown onClick={handleClick} viewBox="0 0 17 17">
            <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" 	transform="matrix(0 1 -1 0 17 0)">
              <circle cx="8.5" cy="8.5" r="8"/>
              <path d="m11.621 6.379v4.242h-4.242" transform="matrix(.70710678 .70710678 .70710678 -.70710678 	-3.227683 7.792317)"/>
              <path d="m8.5 4.5v8" transform="matrix(0 1 -1 0 17 0)"/>
            </g>
          </ScrollDown>
        </div>
    </div>
  )
}

export default Home;