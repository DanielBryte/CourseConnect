import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
import Footer from '@components/Footer'


export const metadata = {
    title: "Course Connect",
    description: "Find useful code snippets",
}
const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <Provider>
            <div className='main'>
                <div className='gradient'/>
            </div>

            <main className='app'>
                <Nav />
                {children}
            </main>
            </Provider>

            <Footer/>
        </body>
    </html>
  )
}

export default RootLayout