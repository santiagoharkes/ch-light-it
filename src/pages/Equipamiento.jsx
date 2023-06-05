// Components
import Button from "../components/button/Button";
import Page from "../components/page/Page";

function Equipamiento() {
  return (
    <Page>
      <div className="flex items-center justify-between">
        <h1>Equipamiento</h1>
        <div className="flex gap-5">
          <Button
            onClick={() => console.log("Click en botón Fijar en Equipamiento")}
          >
            Fijar
          </Button>
          <Button
            onClick={() => console.log("Click en botón Borrar en Equipamiento")}
          >
            Borrar
          </Button>
        </div>
      </div>
    </Page>
  );
}

export default Equipamiento;
