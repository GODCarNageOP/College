import {Link} from "react-router-dom"

const Hero = () => {
  return (
    <div className="hero h-[654px] w-full bg-[#0c0c0c] text-white flex justify-center">
      <div className="heroContainer flex items-center flex-col">
      <div className="top h-60"></div>
      <div className="center text-center flex items-center justify-center flex-col">
      <div className="bg-gradient-to-r from-cyan-300 to-blue-600 inline-block text-transparent bg-clip-text text-6xl mx-60 font-semibold">
        <h1>"Unlock Your Potential, Embrace Your Future: Your Journey Starts Here!"</h1>
      </div>
      </div>
      <div className="bottom mt-12 flex items-center gap-10">
        <button className="w-32 h-10 border rounded-lg">Get Started</button>
        <Link to ="/about">
        <button className="w-32 h-10 border rounded-lg">Learn More</button>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default Hero;