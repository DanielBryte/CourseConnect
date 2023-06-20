import Feed from '@components/Feed'


const Home = () => {
  return (
      <section className="w-full flex-center flex-col">
         <h1 className="head_text ">Discover and Learn
          <br className="max-md:hidden"/>
          <span className="green_gradient text-center"> Top tech courses</span>
         </h1>
         <p className="desc text-center">
          Course Connect is an open source course aggregator from various edtech platforms, built for techies to discover, learn and build on high quality courses.
         </p>
         {/* {Feed} */}
      </section>
  )
}

export default Home