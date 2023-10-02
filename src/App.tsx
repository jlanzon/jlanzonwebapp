import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Test from './pages/Test';
import Home from './pages/Home';
import Footer from './components/Footer';

const navigation = [
  // { id: 1, name: 'Home', component: Home, href: '/' },
  { id: 1, name: 'Test Page', component: Test, href: '/test' }
];


function App() {
  return (
    <Router>
      <div className="drawer sticky top-0">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col min-h-screen">
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
            <button className="btn btn-ghost"><a href='/'>JLanzon Web Application</a></button>
          </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {navigation.map((x, index) => (
                  <li><a key={index} href={x.href}>{x.name}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <Routes>
          {navigation.map((x, index) => (
                <Route key={index} path={x.href} element={<x.component />} />
            ))}
            <Route path="/" element={<Home />} />

          </Routes>
          <Footer/>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {navigation.map((x, index) => (
              <li><a key={index} href={x.href}>{x.name}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </Router>
  );
}

export default App;
