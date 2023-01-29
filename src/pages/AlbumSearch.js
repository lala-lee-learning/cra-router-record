import { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useSearchParams } from "react-router-dom";

const api = "https://api.unsplash.com/search/photos";
const accessId = process.env.REACT_APP_UNSPLASH_ACCESS;

const AlbumSearch = () => {
  const [search, setSearch] = useState('');
  const [list, setList] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  // useEffect(() => {
  //   // console.log(searchParams.get('query'));
  //   setSearchParams({ query: 'building'});
  // }, []);  

  useEffect(() => {
    if(search) {
      (async() => {
        const response = await axios.get(
          `${api}?client_id=${accessId}&query=${search}`
        );
        const {results} = response.data;
        setList(results);
      })();  
    }
  }, [search]);

  useEffect(() => {
    setSearch(searchParams.get('query'));
  }, [searchParams]);  

  return (<>
    這是搜尋頁面 {search}
    <input type="text" 
      className="form-control"
      defaultValue={search}
      onKeyUp={(e) => {
        if(e.code === 'Enter') {
          // setSearch(e.target.value);
          setSearchParams({query: e.target.value});
        }
      }}
    />
    {list.map((item) => {
      return (
        <li key={item.id}>
          <Link to={`/album/${item.id}`}>{item.id}</Link>
        </li>
      );
    })}
  </>
  );
};

export default AlbumSearch;