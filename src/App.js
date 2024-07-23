import "./App.css";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Pricing } from "./Pages/Pricing";
import { ContactUs } from "./Pages/ContactUs";


function App() {
  return (
  

    <Router>
    <div className="App" style={{overflowX:"hidden"}}>
    
     
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        {/* <Route path="/AllTransactions" element={<AllTransactionpage />} />
        <Route path="/AllTransactionsHistory" element={<AllTransactionHistoryPage />} />
        <Route path="/CompletedTransactions" element={<CompletedTransactionsPage />} />
        <Route path="/CompletedTransactinHistory" element={<CompletedTransactionHistoryPage />} />
        <Route path="/PendingTransactions" element={<PendingTransactionPage />} />
        <Route path="/PendingTransatinHistory" element={<PendingTransactionHistoryPage />} />
        <Route path="/WebProfile" element={<WebProfilePage />} />
        <Route path="/WorkStationPage" element={<WorkStationPage />} /> */}




     
      </Routes>
     
      </div>
    </Router>
  );
}

export default App;
