import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

{
  /* Formulário para cadastrar livros */
}

const BookForm = ({ book, handleSubmit }) => {
  const [bookState, setBookState] = useState({
    name: book ? book.name : "",
    author: book ? book.author : "",
    description: book ? book.description : "",
  });

  const handleChange = (e) => {
    setBookState({
      ...bookState,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({
      id: uuidv4(),
      date: new Date(),
      ...bookState,
    });
    setBookState({ name: "", author: "", description: "" });
  };

  const renderInputField = (label, placeholder, name) => (
    <div>
      <label className="rounded-s">{label}</label>
      <input
        className="flex flex-col gap-52 mb-8 w-64 p-2 rounded-lg border border-gray-950"
        value={bookState[name]}
        onChange={handleChange}
        name={name}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );

  const disabledSubmit =
    !bookState.name || !bookState.author || !bookState.description;

  return (
    <div className="flex justify-center">
      <form
        onSubmit={onSubmit}
        className="p-10 m-8 w-[550px] h-[400px] items-center flex-col flex bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-80 border border-gray-600"
      >
        {renderInputField("Nome do Livro", "Digite o nome do livro...", "name")}
        {renderInputField(
          "Autor do Livro",
          "Digite o nome do autor...",
          "author"
        )}
        {renderInputField("Descrição", "Descrição do livro...", "description")}
        <button
          type="submit"
          disabled={disabledSubmit}
          className="g-transparent hover:bg-gray-950 text-gray-900 font-semibold hover:text-white py-2 px-4 border border-gray-950 hover:border-transparent rounded"
        >
          {book ? "Update" : "Enviar"}
        </button>
      </form>
    </div>
  );
};

export default BookForm;
