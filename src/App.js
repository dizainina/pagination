import { useState } from "react";
import "./index.css";
import data from "./comments.json";

export default function App() {

  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(4);

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
  
    <div className="App">
      <div className="commentsPopup-item">
      <ul>
          {currentItems.map((item) => (
            <li key={item.id} >
            <div className="item">
            <p className="text-under-comment">{item.name} <span className="gray">{item.date}</span></p>
              <p className="">{item.message}</p> 
            </div>

            </li>
            ))}
      </ul>
      </div>



      <div className="commentsPopup-navigation">
      <a href="#" className="commentPagesPrev" onClick={() => paginate(currentPage-1)}>Предыдущая страница</a>
        {data.length > itemPerPage && (
          <ul className="pages">
            {Array.from(
              { length: Math.ceil(data.length / itemPerPage) },
              (_, index) => (
                <li
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={currentPage === index + 1 ? "active" : ""} 
                >
                  <div className="page" >{index + 1}</div>
                </li>
              )
            )}
          </ul>
          
        )}
        <a href="#" className="commentPagesNext" onClick={() => paginate(currentPage+1)}>Следующая страница</a>

      </div>
    </div>

  );
}