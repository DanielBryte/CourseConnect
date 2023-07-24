import Image from "next/image"


const Footer = () => {
  return (
    <div className='footer'>

      <div className='flex items-center font-bold text-3xl gap-2'>
        <Image
          className='object-obtain'
          src="/assets/images/logo.svg"
          width={35}
          height={35}
          alt='logo'
        />
        <p className='footer-text'>Course Connect</p>
      </div>

      <p className="w-full lg:w-3/6">Course Connect is an open source course & resource aggregator from various industry experts and edtech platforms. Built for techies to aid them discover, learn, grow, and build on high quality courses and resources.</p>


      <span className="text-md -mb-6">An open source product from <a target="_blank" className="text-blue-400" href="https://www.acabeta.com"> Acabeta</a> maintained by <a className="text-blue-400" target="_blank" href="https://www.github.com/danielbryte"> Daniel Bryte.</a></span>
    </div>
  )
}

export default Footer