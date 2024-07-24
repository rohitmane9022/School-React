


const   Carousel = ({Carousels}) => {
  return (
    <section className="w-[80%] mx-auto  py-10">
      <h1 className="text-3xl font-Inter text-center font-semibold">Carousel</h1>
      <div className="py-10 flex flex-wrap justify-between">
        {Carousels.map(item=>(
          <div key={item.length} className="carousel-item w-96 h-96 border-white object-cover rounded-md overflow-hidden bg-white shadow-xl">
          <img className=" h-[300px]" src={item.img} alt="Annual Sports Day" />
          <p className="mt-5 pl-4">{item.para}</p>
        </div>
        ))}
      
      
      </div>
    </section>
  );
}

export default Carousel;
