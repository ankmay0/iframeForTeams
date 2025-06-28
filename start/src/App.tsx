import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
} from "@mui/material";

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
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Embed URL Generator
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            label="Source Name"
            name="srcName"
            value={formData.srcName}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Source ID"
            name="srcId"
            value={formData.srcId}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Source Skill"
            name="srcSkill"
            value={formData.srcSkill}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Target Name"
            name="targetName"
            value={formData.targetName}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Target ID"
            name="targetId"
            value={formData.targetId}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Target Skill"
            name="targetSkill"
            value={formData.targetSkill}
            onChange={handleChange}
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2 }}
          >
            Generate & Load URL
          </Button>
        </Box>
      </Paper>

      {url && (
        <Box sx={{ mt: 4 }}>
          <iframe
            src={url}
            title="Embedded Page"
            style={{
              width: "100%",
              height: "80vh",
              border: "none",
              borderRadius: "8px",
            }}
          />
        </Box>
      )}
    </Container>
  );
};

export default App;
