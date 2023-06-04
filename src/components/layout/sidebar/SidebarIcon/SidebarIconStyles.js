import tw, { styled } from "twin.macro";

export const SidebarIconContainer = styled.div(({ hasEndpoint }) => [
  tw`relative z-50 flex flex-col items-center justify-center w-full gap-1 px-5 py-2 cursor-pointer`,
  hasEndpoint && tw`z-20 bg-gray-100`,
]);

export const SidebarIconTopCurve = tw.div`absolute right-0 z-20 w-10 h-10 bg-gray-100 before:z-20 -top-10 before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:absolute before:rounded-br-full`;
export const SidebarIconBottomCurve = tw.div`absolute right-0 z-20 w-10 h-10 bg-gray-100 after:z-20 -bottom-10 after:top-0 after:left-0 after:w-full after:h-full after:bg-white after:absolute after:rounded-tr-full`;

export const SidebarIconImage = tw.img`w-10 h-auto`;
export const SidebarIconTitle = tw.p`z-50 text-xs`;
