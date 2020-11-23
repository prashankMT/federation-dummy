import React from "react";
const Shell = React.lazy(() => import("shell/App"));

function App() {
  return (
    <React.Suspense fallback={<LoadingShell />}>
      <Shell />
    </React.Suspense>
  );
}


function LoadingShell() {
  return <div> loading shell </div>
}

export default App;
