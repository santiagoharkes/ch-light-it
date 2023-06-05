// Components
import Button from "../components/button/Button";
import Page from "../components/page/Page";

function Terminaciones() {
  return (
    <Page>
      <div className="flex items-center justify-between">
        <h1>Terminaciones</h1>
        <div className="flex gap-5">
          <Button
            onClick={() => console.log("Click en botón Fijar en Terminaciones")}
          >
            Fijar
          </Button>
          <Button
            onClick={() =>
              console.log("Click en botón Borrar en Terminaciones")
            }
          >
            Borrar
          </Button>
        </div>
      </div>
    </Page>
  );
}

export default Terminaciones;
