import React, { Fragment, useState } from "react";
import "./../index.scss";
import Loader from "./loader";
import Modal from "./modal";
import useModal from './../utils/useModal';


const BookList = () => {
  const [items, setGames] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { isShowing, toggle, data } = useModal();

  React.useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setError(false);
      try {
        const result = await fetch('https://api.publicapis.org/entries?category=books').then(response => response.json())
        //  console.log(result)
        setGames(result.entries);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    // Call the API
    fetchBooks();
  }, []);
  return (
    <Fragment>
      <h1>List of Books!</h1>
      <Loader loading={loading}>
        Loading List, please wait...
      </Loader>
      {error && (
        <div>Some error occurred, while fetching books API</div>
      )}
      {items && items.map(item => (
        <div key={item.API} onClick={() => toggle({ ...item, title: 'Book Information' })} className="card-body">{item.API}
          <span className='click-more'>  Click for more details</span>
        </div>
      ))
      }
      <Modal
        isShowing={isShowing}
        hide={toggle}
      >{data}</Modal>
    </Fragment >)
};
export default BookList;