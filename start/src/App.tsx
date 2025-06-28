import React, { useState } from "react";

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    srcName: "",
    srcId: "",
    srcSkill: "",
    targetName: "",
    targetId: "",
    targetSkill: "",
  });

  const [url, setUrl] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const queryParams = new URLSearchParams(formData).toString();
    const finalUrl = `http://localhost:5173/?${queryParams}`;
    setUrl(finalUrl);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Embed URL Generator</h2>
      <form onSubmit={handleSubmit} style={{ padding: "1rem" }}>
        <input
          type="text"
          name="srcName"
          placeholder="Source Name"
          value={formData.srcName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="srcId"
          placeholder="Source ID"
          value={formData.srcId}
          onChange={handleChange}
        />
        <input
          type="text"
          name="srcSkill"
          placeholder="Source Skill"
          value={formData.srcSkill}
          onChange={handleChange}
        />
        <input
          type="text"
          name="targetName"
          placeholder="Target Name"
          value={formData.targetName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="targetId"
          placeholder="Target ID"
          value={formData.targetId}
          onChange={handleChange}
        />
        <input
          type="text"
          name="targetSkill"
          placeholder="Target Skill"
          value={formData.targetSkill}
          onChange={handleChange}
        />
        <button type="submit">Generate & Load URL</button>
      </form>

      {url && (
        <iframe
          src={url}
          style={{ width: "100%", height: "100vh", border: "none" }}
          title="Embedded Page"
        />
      )}
    </div>
  );
};

export default App;
