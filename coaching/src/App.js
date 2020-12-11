import React from "react";
const Shell = React.lazy(() => import("shell/App"));

const TestingApplication = () => {
  return <div>asdasdsadsa</div>
}
function App() {
  return (
    <React.Suspense fallback={<LoadingShell />}>
      <Shell />
    </React.Suspense>
  );
}


function LoadingShell() {
  return <div>loading shell </div>
}

export default App;
