// Styles
import {
  SidebarIconBottomCurve,
  SidebarIconContainer,
  SidebarIconImage,
  SidebarIconTitle,
  SidebarIconTopCurve,
} from "./SidebarIconStyles";

function SidebarIcon({ src, title, endpoint, onClick }) {
  return (
    <SidebarIconContainer hasEndpoint={endpoint} onClick={onClick}>
      {endpoint && <SidebarIconTopCurve />}

      <SidebarIconImage src={src} alt="" />
      <SidebarIconTitle>{title}</SidebarIconTitle>

      {endpoint && <SidebarIconBottomCurve />}
    </SidebarIconContainer>
  );
}

export default SidebarIcon;
