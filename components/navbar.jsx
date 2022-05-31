import Link from "next/link";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand bg-light sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand">
          <i>Inventario</i>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link href="/productos">
              <a class="nav-link">Productos</a>
            </Link>
            <Link href="/categorias">
              <a class="nav-link">Categorías</a>
            </Link>
            <Link href="/entradas">
              <a class="nav-link">Entradas</a>
            </Link>
            <Link href="/salidas">
              <a class="nav-link">Salidas</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
