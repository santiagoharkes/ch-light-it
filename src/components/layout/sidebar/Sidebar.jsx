import { useState } from "react";
import SidebarIcon from "./SidebarIcon";
import { useNavigate } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
import useGetData from "../../../hooks/useGetData";

function Sidebar() {
  const navigate = useNavigate();
  const [endpoint, setEndpoint] = useState(false);
  const [step, setStep] = useState({
    step: 1,
    data: null,
  });
  const { data } = useGetData(endpoint);

  const onMenuItemClick = (menuItemEndpoint) => {
    if (endpoint === menuItemEndpoint) {
      setEndpoint(false);
      return;
    }

    setEndpoint(menuItemEndpoint);
    setStep({
      step: 1,
      data: null,
    });
    navigate(`/${menuItemEndpoint}`);
  };

  return (
    <div className="flex relative bg-white z-40">
      <div className="w-auto flex flex-col justify-center items-center gap-1 bg-white z-40">
        <SidebarIcon
          src="/Aberturas.png"
          title="Aberturas"
          endpoint={endpoint === "aberturas"}
          onClick={() => {
            onMenuItemClick("aberturas");
          }}
        />
        <SidebarIcon
          src="/Equipamiento.png"
          title="Equipamiento"
          endpoint={endpoint === "equipamiento"}
          onClick={() => {
            onMenuItemClick("equipamiento");
          }}
        />
        <SidebarIcon
          src="/Terminaciones.png"
          title="Terminaciones"
          endpoint={endpoint === "terminaciones"}
          onClick={() => {
            onMenuItemClick("terminaciones");
          }}
        />
      </div>

      <SidebarMenu
        endpoint={endpoint}
        setEndpoint={setEndpoint}
        data={data}
        step={step}
        setStep={setStep}
      />
    </div>
  );
}

export default Sidebar;
