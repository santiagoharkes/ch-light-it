import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGetData from "../../../hooks/useGetData";
import SidebarIcon from "./SidebarIcon/SidebarIcon";
import SidebarSubMenu from "./SidebarMenu/SidebarSubMenu";
import { SidebarContainer, SidebarIconsContainer } from "./SidebarStyles";

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
    <SidebarContainer>
      <SidebarIconsContainer>
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
      </SidebarIconsContainer>

      <SidebarSubMenu
        endpoint={endpoint}
        setEndpoint={setEndpoint}
        data={data}
        step={step}
        setStep={setStep}
      />
    </SidebarContainer>
  );
}

export default Sidebar;
