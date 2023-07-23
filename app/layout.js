import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
import Footer from '@components/Footer'
import { Suspense } from 'react'
import Loading from './loading'


export const metadata = {
    title: "Course Connect",
    description: "Find useful code snippets",
}
const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <Provider>
                    <div className='main'>
                        <div className='gradient' />
                    </div>

                    <main className='app'>
                        <Nav/>
                        <Suspense fallback={<Loading />}>
                            {children}
                        </Suspense>
                    </main>
                </Provider>
                <Footer />
            </body>
        </html>
    )
}

export default RootLayout