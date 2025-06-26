import React from "react";

const App: React.FC = () => {
  return (
    <iframe
      src="http://localhost:5173/skills" // adjust this to TeamMaker app URL eg. url/skills
      style={{ width: "100%", height: "100vh", border: "none" }}
    />
  );
};

export default App;
