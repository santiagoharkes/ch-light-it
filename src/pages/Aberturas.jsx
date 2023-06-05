// Components
import Button from "../components/button/Button";
import Page from "../components/page/Page";

function Aberturas() {
  return (
    <Page>
      <div className="flex items-center justify-between">
        <h1>Aberturas</h1>
        <div className="flex gap-5">
          <Button
            onClick={() => console.log("Click en botón Fijar en Aberturas")}
          >
            Fijar
          </Button>
          <Button
            onClick={() => console.log("Click en botón Borrar en Aberturas")}
          >
            Borrar
          </Button>
        </div>
      </div>
    </Page>
  );
}

export default Aberturas;
