import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagina.css';

const Pagina = ({ info, currentPage, handlePageChange }) => {
  return (
    <ReactPaginate
      nextLabel="Siguiente"
      previousLabel="Anterior"
      className="pagination flex justify-center gap-4 my-4"
      pageCount={info.pages}
      nextClassName="btn"
      previousClassName="btn"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      onPageChange={handlePageChange}
      forcePage={currentPage}
    />
  );
};

export default Pagina;
