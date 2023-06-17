import { NavLink } from "react-router-dom";

export const Header = () => {
  const navigation = [
    { path: "/", name: "Lista de Livros" },
    { path: "/add", name: "Adicionar Livro" },
  ];

  {/* Header da página */}

  return (
    <header className="text-center mt-20">
      <h1 className="text-4xl text-gray-900 font-bold">Lista de livros</h1>
      <nav className="mt-8 flex justify-center gap-10">
        {navigation.map((nav) => (
          <NavLink
            key={nav.name}
            to={nav.path}
            className="p-[0.5rem 2rem] text-gray-900"
          >
            {nav.name}
          </NavLink>
          
        ))}
      </nav>
    
    </header>
  );
};
