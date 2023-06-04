import tw, { styled } from "twin.macro";

export const HeaderContainer = tw.div`bg-gray-900`;

export const NavContainer = tw.nav`
    flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8
`;

export const LogoContainer = tw.div`
    flex cursor-pointer
`;

export const MenuItem = styled.div(({ active }) => [
  tw`block px-4 py-2 text-sm text-gray-700 cursor-pointer`,
  active && tw`text-gray-900 bg-gray-100`,
]);
