import React from 'react';
import { Link } from 'react-router-dom';

import './styles/SalesList.css';

class SellListItem extends React.Component {
  render() {
    return (
      <div className="list-group list-group-horizontal">
        <span className="list-group-item SalesListItem">
          <Link
            className="text-reset text-decoration-none"
            to={`/user/${this.props.sale.clientId}`}
          ><strong>{this.props.sale.nombre}</strong></Link></span>

        <span className="list-group-item SalesListItem">{this.props.sale.phone}</span>
        <span className="list-group-item SalesListItem">{this.props.sale.tdc}</span>
        <span className="list-group-item SalesListItem">{this.props.sale.monto}</span>
        <span className="list-group-item SalesListItem">{this.props.sale.date}</span>
      </div>
    );
  }
}


function SalesList(props) {
  const sales = props.sales;
  let count = 1;
  if (sales.length === 0) {
    return (
      <>
        <h3>No hay Ventas</h3>
      </>
    );
  }
  return (
    <div className="SalesList">

      <ul className="list-unstyled">
        <li key='0'>
          <div className="list-group list-group-horizontal">
            <span className="list-group-item SalesListItem"><strong>Nombre</strong></span>
            <span className="list-group-item SalesListItem"><strong>Telefono</strong></span>
            <span className="list-group-item SalesListItem"><strong>Medio de Pago</strong></span>
            <span className="list-group-item SalesListItem"><strong>Monto</strong></span>
            <span className="list-group-item SalesListItem"><strong>Hora</strong></span>
          </div>
        </li>
        {sales.map(sale => {
          return (
            <li key={count++}>
              <SellListItem sale={sale} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SalesList;