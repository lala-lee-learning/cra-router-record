import { useOutletContext } from "react-router-dom";

const AlbumIndex = () => {
  const list = useOutletContext();
  return (
    <div>
      這是相簿的首頁
      {list.map((item) => {
      return (
        <li key={item.id}>{item.id}</li>
      );
      })}
    </div>
  );
};

export default AlbumIndex;