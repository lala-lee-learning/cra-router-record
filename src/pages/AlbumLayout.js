import { Outlet } from "react-router-dom";


const AlbumLayout = () => {
  return (
    <div className="row">
      <div className="col-4">
        左側選單列表
      </div>
      <div className="col-8">
        <Outlet />
      </div>
    </div>
  );
};

export default AlbumLayout;