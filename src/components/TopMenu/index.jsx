import { Link } from "react-router-dom";

export default function TopMenu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/home"}>Minha Conta</Link>
        </li>
        <li>
          <Link to={"/custumer"}>Cliente</Link>
        </li>
        <li>
          <Link to={"/category"}>Categorias</Link>
        </li>
        <li>
          <Link to={"/product"}>Produtos</Link>
        </li>
        <li>
          <Link to={"/order"}>Pedidos</Link>
        </li>
      </ul>
    </nav>
  );
}
