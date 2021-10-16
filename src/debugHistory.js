import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { history as historyShape } from "react-router-prop-types";

const DebugHistory = ({ history }) => {
  useEffect(() => {
    console.log(history.location.pathname);
  }, [history.location.key]);

  return <div className={`pageName ${history.location.pathname}`}></div>;
};

DebugHistory.propTypes = { history: historyShape };

export default withRouter(DebugHistory);
