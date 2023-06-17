import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import BookForm from "./form/BookForm";
import { BookContext } from "../context/BookContext";

{
  /* Adicionar livros a lista */
}

const AddBook = () => {
  const navigate = useNavigate();
  const { books, setBooks } = useContext(BookContext);

  const handleOnSubmit = (book) => {
    setBooks([...books, book]);
    navigate("/");
  };

  return (
    <div className="">
      <BookForm handleSubmit={handleOnSubmit} />
    </div>
  );
};

export default AddBook;
