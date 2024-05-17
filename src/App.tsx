import { Route, Routes, useLocation } from "react-router-dom";
import { Information, Register } from "./infra";
import "./index.css";
import pathRoutes from "./share/path";
import Confirm from "./infra/Confirm";
import { useEffect, useState } from "react";
import Loading from "./components/loading";
import InforPerson from "./infra/uploadInforPerson";
import UploadInforStore from "./infra/uploadInforStore";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsLoading(false), 1000);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Routes>
        <Route path={pathRoutes.index.path} element={<Register />} />
        <Route path={pathRoutes.information.path} element={<Information />} />
        <Route path={pathRoutes.confirm.path} element={<Confirm />} />
        <Route path={pathRoutes.upload.path} element={<InforPerson />} />
        <Route
          path={pathRoutes.inforStore.path}
          element={<UploadInforStore />}
        />
      </Routes>
    </>
  );
}

export default App;
