import { Routes, Route } from "react-router-dom";
import BookList from "../src/components/BookList.jsx";
import "./App.css";
import AddBook from "../src/components/AddBook.jsx";
import { Header } from "./components/Header.jsx";
import BookProvider from "./context/BookContext.jsx";
import EditBook from "./components/EditBook.jsx";

function App() {
  return (
    <div className="App">
      <BookProvider>
        <Header />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/edit/:id" element={<EditBook />} />
        </Routes>
      </BookProvider>
    </div>
  );
}

export default App;
