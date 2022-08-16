import { useParams } from "react-router-dom";

const withRouterParams = (Component) => (props) => {
    const params = useParams();
    return <Component {...props} {...{params}} />;
};

export default withRouterParams;
