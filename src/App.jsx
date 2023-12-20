import { About, Blogs, Footer, Hero, Logos, Navbar, Pricing } from './components'

function App() {
  return (
    <div className="h-full bg-slate-100 dark:bg-slate-900">
      <Navbar />
      <Hero />
      <Logos />
      <About />
      <Pricing />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
