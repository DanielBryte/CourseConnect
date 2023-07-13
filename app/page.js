import Feed from '@components/Feed'


const Home = () => {
  return (
      <section className="w-full flex-center flex-col">
         <h1 className="head_text text-center">Discover and Learn
          <br className="max-md:hidden"/>
          <span className="text-[#131972] text-center"> Top tech courses</span>
         </h1>
         <p className="desc text-center">
          Course Connect is an open source course aggregator from various industry experts and edtech platforms built for techies to aid them discover, learn, grow, and build on high quality courses and resources.
         </p>
         {/* {Feed} */}
      </section>
  )
}

export default Home