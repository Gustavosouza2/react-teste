import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookForm from "./form/BookForm";
import { BookContext } from "../context/BookContext";


  {/* Editar Livros */}

const EditBook = () => {
  const { id } = useParams;
  const navigate = useNavigate();
  const { books, setBooks } = useContext(BookContext);
  const bookToEdit = books.filter(book => book.id === id);

  console.log(bookToEdit);

  const handleOnSubmit = (book) => {
    const filteredBook = books.filter(book => book.id !== id)
    setBooks([book, ...filteredBook]);
    navigate("/");
  };

  return (
    <div>
      <BookForm book={bookToEdit[0]} handleSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditBook;
