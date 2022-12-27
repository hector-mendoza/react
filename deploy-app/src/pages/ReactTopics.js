import { Link, Route, Routes, useParams } from "react-router-dom";

const Topic = () => {
    // get "topic" from useParams HOOK
    let { topic } = useParams();

    return (
        <div>
            <h4>{topic.toUpperCase()}</h4>
            <p>Laborum officia id eiusmod ex enim Lorem sit ex dolor pariatur. Ipsum aliquip consectetur fugiat mollit aliquip dolor consectetur sit voluptate sit et id. Labore elit fugiat laboris duis ex elit Lorem ex eu voluptate magna enim fugiat.</p>
        </div>
    );
};

const ReactTopics = () => {
    return (
        <div>
            <h3>React Topics</h3>
            <ul>
                <li>
                    {/* to => topic */}
                    <Link to="jsx">JSX</Link>
                </li>
                <li>
                    <Link to="props">Props</Link>
                </li>
                <li>
                    <Link to="state">State</Link>
                </li>
                <li>
                    <Link to="components">Components</Link>
                </li>
            </ul>
            <Routes>
                <Route path=":topic" element={<Topic />} />
            </Routes>
        </div>
    );
}

export default ReactTopics;