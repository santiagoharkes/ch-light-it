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
  object-cover w-full h-full duration-300 ease-in-out hover:scale-110 bg-white
`;

export const StepTwoItemTitle = tw.p`
  text-center
`;

export const SidebarMenuArrowContainer = styled.div(({ active }) => [
  tw`hidden cursor-pointer`,
  active && tw`block`,
]);

export const SidebarMenuArrowSquare = styled.div`
  transform: translate(0px, -50%) perspective(70px) rotateY(45deg);
  ${tw`absolute w-[40px] h-[100px] bg-gray-100 top-[50%] left-[99%] rounded-tr-lg rounded-br-lg`}
`;

export const SidebarArrowContainer = tw.div`
absolute w-[30px] h-[30px] top-[50%] left-[99%] translate-x-0 translate-y-[-50%] p-1 flex justify-center items-center
`;
