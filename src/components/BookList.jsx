import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookMain from "../components/BookMain";

const BookList = () => {
  const { books, setBooks } = useContext(BookContext);
  const handleRemoveBook = (id) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks(filteredBooks);
  };

  {/* Lista de Livros */}

  return (
    <div className="m-listBook grid grid-cols-listcolumns gap-8 justify-center items-center ">
      {books.length ? (
        books.map((book) => (
          <BookMain
            book={book}
            key={book.id}
            handleRemoveBook={handleRemoveBook}
          />
        ))
      ) : (
        <p className="text-center col-span-16 mt-8 text-gray-900 ml-0">
          Sem Livros adicionados, Por favor adicione um livro!
        </p>
      )}
    </div>
  );
};

export default BookList;
