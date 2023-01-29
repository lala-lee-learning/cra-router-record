import { useOutletContext } from "react-router-dom";
import List from "../components/List";

const AlbumIndex = () => {
  const list = useOutletContext();
  return (
    <div>
      這是相簿的首頁
      <List list={list}></List>
    </div>
  );
};

export default AlbumIndex;