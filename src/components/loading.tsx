import {Spinner} from "react-bootstrap"
import styled from "@emotion/styled"

interface Props {
    
}

const Loading = (props: Props) => {
    return (
        <Div>
            <Spinner animation="border" />
        </Div>
    )
}

const Div = styled.div`
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`;


export default Loading
