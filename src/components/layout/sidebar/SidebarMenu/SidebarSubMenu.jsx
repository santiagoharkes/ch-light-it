import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { capitalLetter } from "../../../../utils/capitalLetter";
import Spinner from "../../../spinner/Spinner";
import {
  SidebarSubMenuStyled,
  StepItemsContainer,
  StepOneItem,
  StepOneItemIcon,
  StepTitle,
  StepTwoBreadcrumb,
  StepTwoItem,
  StepTwoItemImage,
  StepTwoItemImageContainer,
  StepTwoItemTitle,
  StepTwoItemsContainer,
  SubMenuContent,
  SubMenuSpinnerContainer,
  SubMenuStepContainer,
} from "./SidebarSubMenuStyles";

function SidebarSubMenu({ endpoint, setEndpoint, data, step, setStep }) {
  return (
    <SidebarSubMenuStyled hasEndpoint={endpoint}>
      <SubMenuContent>
        {data.isLoading && (
          <SubMenuSpinnerContainer>
            <Spinner />
          </SubMenuSpinnerContainer>
        )}

        {data.isSuccess && (
          <>
            {step.step === 1 && (
              <SubMenuStepContainer>
                <StepTitle>{capitalLetter(endpoint)}</StepTitle>
                <StepItemsContainer>
                  {data.data.map((item, index) => (
                    <StepOneItem
                      key={`${item.name}-${index}`}
                      onClick={() => setStep({ step: 2, data: item })}
                    >
                      <h3>{item.name}</h3>
                      <StepOneItemIcon>
                        <ChevronRightIcon />
                      </StepOneItemIcon>
                    </StepOneItem>
                  ))}
                </StepItemsContainer>
              </SubMenuStepContainer>
            )}

            {step.step === 2 && (
              <SubMenuStepContainer>
                <StepTwoBreadcrumb
                  onClick={() =>
                    setStep({
                      step: 1,
                      data: null,
                    })
                  }
                >{`< ${capitalLetter(endpoint)}`}</StepTwoBreadcrumb>
                <StepTitle>{step.data.name}</StepTitle>
                <StepItemsContainer>
                  <StepTwoItemsContainer>
                    {step.data.items.map((item, index) => (
                      <StepTwoItem key={`${item.name}-${index}`}>
                        <StepTwoItemImageContainer>
                          <StepTwoItemImage src={item.img} alt="" />
                        </StepTwoItemImageContainer>
                        <StepTwoItemTitle>{item.name}</StepTwoItemTitle>
                      </StepTwoItem>
                    ))}
                  </StepTwoItemsContainer>
                </StepItemsContainer>
              </SubMenuStepContainer>
            )}
          </>
        )}
      </SubMenuContent>

      <SidebarMenuArrow active={endpoint} setActive={setEndpoint} />
    </SidebarSubMenuStyled>
  );
}

export default SidebarSubMenu;

function SidebarMenuArrow({ active, setActive }) {
  return (
    <div
      onClick={() => {
        console.log("Click en arrow");
        setActive(false);
      }}
      className={`cursor-pointer ${active ? "block" : "hidden"}`}
    >
      <div
        className={`absolute w-[40px] h-[100px] bg-gray-100 top-[50%] left-[99%] rounded-tr-lg rounded-br-lg`}
        style={{
          transform: "translate(0px, -50%) perspective(70px) rotateY(45deg)",
        }}
      ></div>

      <div className="absolute w-[30px] h-[30px] top-[50%] left-[99%] translate-x-0 translate-y-[-50%] p-1 flex justify-center items-center">
        <img src="/activo.png" alt="" />
      </div>
    </div>
  );
}
