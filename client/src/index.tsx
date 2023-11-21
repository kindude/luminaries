import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about/About';
import Layout from './components/layout';
import { createRoot } from 'react-dom/client';
import Event from './pages/events/Event';
import reportWebVitals from './reportWebVitals';
import Events from './pages/events/Events';
import Members from './pages/members/Members';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import MyBook from './pages/books/book';

const domNode = document.getElementById('root');

if (domNode) {
  const app = (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/members" element={<Layout><Members /></Layout>} />
          <Route path="/events" element={<Layout><Events /></Layout>} />
          <Route path="/events/:eventId" element={<Layout><Event /></Layout>} />
          <Route path="/register" element={<Layout><Register/></Layout>}/>
          <Route path="/login" element={<Layout><Login/></Layout>}/>
          <Route path="/:slug" element={<Layout><div className='flex justify-center items-center h-screen text-gray-500 text-7xl'>Under construction</div></Layout>}/>
          <Route path="/books/:bookId" element={<Layout><MyBook/></Layout>} />
        </Routes>
      </Router>
    </React.StrictMode>
  );

  const root = createRoot(domNode);
  root.render(app);

  reportWebVitals();
}
