import tw, { styled } from "twin.macro";

export const SidebarSubMenuStyled = styled.div(({ hasEndpoint }) => [
  tw`relative z-20 h-full min-w-0 duration-300 ease-in-out bg-gray-100`,
  hasEndpoint && tw`min-w-fit`,
]);

export const SubMenuContent = tw.div`
  overflow-hidden 
  h-full
`;

export const SubMenuSpinnerContainer = tw.div`
  flex flex-col items-center justify-center h-full max-w-[400px] w-[400px]
`;

export const SubMenuStepContainer = tw.div`
  flex flex-col gap-5 p-5
`;

export const StepTitle = tw.h2`
  text-2xl font-bold text-gray-500
`;

export const StepItemsContainer = tw.div`
  max-w-[400px] w-[400px] flex flex-col gap-2 h-full
`;

export const StepOneItem = tw.div`
  flex items-center justify-between p-3 duration-300 ease-in-out bg-white border border-transparent rounded-lg cursor-pointer hover:border-gray-300
`;

export const StepOneItemIcon = tw.div`
  flex items-center justify-center w-5 h-5
`;

export const StepTwoBreadcrumb = tw.p`
  text-sm text-gray-500 cursor-pointer
`;

export const StepTwoItemsContainer = tw.div`
  grid grid-cols-3 gap-5
`;

export const StepTwoItem = tw.div`
  flex flex-col gap-1
`;

export const StepTwoItemImageContainer = tw.div`
  w-full 
  min-h-[100px]
  h-[100px] 
  rounded-lg
  overflow-hidden
`;

export const StepTwoItemImage = tw.img`
  object-cover w-full h-full duration-300 ease-in-out hover:scale-110 bg-gradient-to-r from-purple-500 to-pink-500
`;

export const StepTwoItemTitle = tw.p`
  text-center
`;
