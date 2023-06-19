import '@styles/globals.css'

export const metadata = {
    title: "Code Snippet",
    description: "Find useful code snippets"
}
const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>

            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout