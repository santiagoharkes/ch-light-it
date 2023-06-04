import tw from "twin.macro";

export const PageContainer = tw.div`
    bg-gray-200
    p-5
    flex-1
    h-full
    relative
`;

export const ActionsContainer = tw.div`
    absolute
    bottom-[10px]
    right-[10px]
    w-full
    p-3
    flex
    justify-end
    items-center
    gap-3
`;

export const IconsContainer = tw.div`
    flex
    flex-col
    justify-between
    items-center
    rounded-md
    bg-white
    h-[70px]
`;

export const IconStyled = tw.img`
    p-1
    w-8
    object-contain
    cursor-pointer
`;

export const ArrowsContainer = tw.div`
    flex
    flex-col
    justify-center
    rounded-md
    bg-white
    w-[70px]
    h-[70px]
`;

export const Arrow = tw.img`
    w-[20px]
    h-[20px]
    object-contain
    cursor-pointer
    flex-1
`;
