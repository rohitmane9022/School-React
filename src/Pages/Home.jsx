import Carousel from "../Components/Carousel";
import jeswin from "../assest/jeswin.jpg";
import Loading from "../Components/Loading";
import { useEffect, useState } from "react";
import { CarouselDataPromise } from "../AllData";

const Home = () => {
  const [Carousels,setCarousels]= useState(null)
  
  useEffect(()=>{
   CarouselDataPromise().then(res=>setCarousels(res.CarouselData))
    
  },[])

  return (
    <div>
      {Carousels===null?(<Loading/>):(<div><section className="relative h-screen overflow-hidden">
        <div className="relative w-full h-full">
          <img src={jeswin} alt="Jeswin" className="h-[720px] w-[400px] sm:w-auto lg:h-auto" />
          <div className="absolute z-20 top-52 left-5 sm:top-56 md:top-1/2 md:left-28 ">
            <h2 className="lg:text-5xl text-2xl flex font-Inter font-medium text-white mb-1">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 md:size-12 ">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
              </span>
              Welcome to </h2>
              <h2 className="text-primary-color text-2xl lg:text-5xl flex font-Inter font-medium">Springdale Public School</h2>
            <p className="font-normal text-base text-white mt-1 lg:text-md">Where we nurture young minds for a brighter future.</p>
          </div>
        </div>
      </section>
      <Carousel Carousels={Carousels}/></div>)}
      
    </div>
  );
};

export default Home;
