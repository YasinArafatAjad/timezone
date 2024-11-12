import './App.css'
import Banner from './component/Banner/Banner.jsx';
import Footer from './component/Footer/Footer.jsx';
import NewsFeed from './component/Newsfeed/NewsFeed.jsx';
// import UniqPost from './component/UniqPost/UniqPost.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import React Router components


function App() {
  return (    
    <Router> {/* Wrap the whole app with Router to enable routing */}
    <Banner />
      <Routes>
        
        {/* <Route path='/' element={<Banner />} /> */}
        <Route path="/" element={<NewsFeed />} />
        {/* <Route path="/post/:id" element={<UniqPost />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
