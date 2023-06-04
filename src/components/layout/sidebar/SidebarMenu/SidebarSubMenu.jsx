import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { capitalLetter } from "../../../../utils/capitalLetter";
import Spinner from "../../../spinner/Spinner";
import {
  SidebarArrowContainer,
  SidebarMenuArrowContainer,
  SidebarMenuArrowSquare,
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
  const addFallbackImage = (e) => {
    console.dir(e.target.style);
    e.target.src = "/noImage.jpg";
    e.target.style.objectFit = "contain";
  };

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
                          <StepTwoItemImage
                            src={item.img}
                            alt=""
                            onError={addFallbackImage}
                          />
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
    <SidebarMenuArrowContainer
      active={active}
      onClick={() => {
        console.log("Click en arrow");
        setActive(false);
      }}
    >
      <SidebarMenuArrowSquare />

      <SidebarArrowContainer>
        <img src="/activo.png" alt="" />
      </SidebarArrowContainer>
    </SidebarMenuArrowContainer>
  );
}
