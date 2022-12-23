import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';
// import Home from './pages/home/Home';
// import About from './pages/about/About';
const Home = lazy(()=>import('./pages/home/Home'));
const About = lazy(()=>import('./pages/about/About'));


//route-based code splitting using lazily, and then adding suspense-fallback,errorboundary.
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=>{}}>
          <Suspense fallback={<div>Page Loading...</div>}>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
              </Route>
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
