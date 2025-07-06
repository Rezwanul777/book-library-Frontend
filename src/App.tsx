import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import BooksListPage from "./pages/BooksListPage";
import AddBookPage from "./pages/AddBookPage";
import EditBookPage from "./pages/EditBookPage";
import BorrowCreatePage from "./pages/BorrowCreatePage";
import BorrowSummaryPage from "./pages/BorrowSummaryPage";
import BookDetailsPage from "./pages/BookDetailPage";
import Hero from "./components/Hero";


export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero/>
      <main className="flex-grow">
        <Routes>
          <Route path="/books" element={<BooksListPage />} />
          <Route path="/create-book" element={<AddBookPage />} />
          <Route path="/edit-book/:id" element={<EditBookPage />} />
          <Route path="/borrow/:id" element={<BorrowCreatePage />} />
          <Route path="/borrow-summary" element={<BorrowSummaryPage />} />
          <Route path="/books/:id" element={<BookDetailsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

