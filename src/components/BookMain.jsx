import { useNavigate } from "react-router-dom";

const BookMain = ({ book, handleRemoveBook }) => {
  const navigate = useNavigate();
  const { id, name, author, description } = book;

    {/* Card livros */}

  return (
    <div className="bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-zinc-900 p-4 w-64">
      <h2 className="underline text-2xl">{name}</h2>
      <div className="mt-2 leading-6">
        <p className="text-lg">Autor: {author}</p>
        <p className="text-lg">descrição: {description}</p>
      </div>
      <div className="mt-4 flex gap-5">
        <button
          onClick={() => navigate(`/edit/${id}`)}
          className="g-transparent hover:bg-gray-950 text-gray-900 font-semibold hover:text-white py-2 px-4 border border-gray-950 hover:border-transparent rounded"
        >
          Editar
        </button>
        <button
          onClick={() => handleRemoveBook(id)}
          className="g-transparent hover:bg-gray-950 text-gray-900 font-semibold hover:text-white py-2 px-4 border border-gray-950 hover:border-transparent rounded"
        >
          Deletar
        </button>
      </div>
    </div>
  );
};

export default BookMain;
