import { useContext } from "react";
import { Container } from "semantic-ui-react";
import { DataContext } from "./DataContext";

function DebatePage() {
    let dataContext = useContext(DataContext);
    if (!dataContext) return;
    let [data, _] = dataContext;

    return (<>
        <Container>
            { data[0] }
        </Container>
    </>);
}
export default DebatePage;