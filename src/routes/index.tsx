import { Routes, Route } from 'react-router-dom';
 
import { Home } from '../pages/Home';

interface Props {
    toggleTheme(): void;
  }

export function Router({ toggleTheme }:Props){
  return (
  <Routes>
    <Route path="/"   element={<Home toggleTheme={toggleTheme} />} />
    
  </Routes>
  )
}

export default Routes;
