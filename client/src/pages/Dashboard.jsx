import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Dashboard = (props) => {


 

  return ( <>

    <Navbar/>

    <div>
      {/* <div>{loading ? <div>Loading...</div> : data?.books.map((book, index) =><div key={`book-${index}`}>{book.title}</div>)}</div> */}
    </div>
    <Footer/>
    </>
  );
};

export default Dashboard;
