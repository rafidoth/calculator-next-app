import './globals.css'



const bodyClass = `container mx-auto bg-slate-950 text-white`
export const metadata = {
  title: 'CALCULATOR',
  description: 'CALCULATOR created by Rafi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bodyClass}`}>
        {children}
      </body>
    </html>
  )
}
