import { Hero, Logos, Navbar } from './components'

function App() {
  return (
    <div className="h-full bg-slate-100 dark:bg-slate-900">
      <Navbar />
      <Hero />
      <Logos />
    </div>
  );
}

export default App;
