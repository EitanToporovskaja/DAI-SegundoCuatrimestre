import NavBar from "./components/Navbar";

export default function RootLayout({ children }) {
  return (

    <html>
      <body style={{margin:"0",padding:"10px"}}>
        <header style={{margin:"0"}}>
          <NavBar/>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  
  );
}