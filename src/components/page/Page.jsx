import {
  ActionsContainer,
  PageContainer,
  IconStyled,
  IconsContainer,
  ArrowsContainer,
  Arrow,
} from "./PageStyles";

function Page({ children }) {
  return (
    <PageContainer>
      {children}
      <ActionsContainer>
        <IconsContainer>
          <IconStyled
            src="/+.png"
            alt=""
            onClick={() => console.log("Signo de suma clickeado")}
          />
          <IconStyled
            src="/-.png"
            alt=""
            onClick={() => console.log("Signo de resta clickeado")}
          />
        </IconsContainer>

        <ArrowsContainer>
          <div className="flex items-center justify-center">
            <Arrow
              src="/Flecha.png"
              alt=""
              onClick={() => console.log("Flecha para arriba clickeada")}
            />
          </div>

          <div className="flex items-center justify-evenly">
            <Arrow
              src="/Flecha.png"
              alt=""
              className="-rotate-90"
              onClick={() => console.log("Flecha para la izquierda clickeada")}
            />
            <Arrow
              src="/Flecha.png"
              alt=""
              className="rotate-90"
              onClick={() => console.log("Flecha para derecha clickeada")}
            />
          </div>

          <div className="flex items-center justify-center">
            <Arrow
              src="/Flecha.png"
              alt=""
              className="-rotate-180"
              onClick={() => console.log("Flecha para abajo clickeada")}
            />
          </div>
        </ArrowsContainer>
      </ActionsContainer>
    </PageContainer>
  );
}

export default Page;
