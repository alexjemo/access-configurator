import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    doors: "",
    turnstiles: "",
    accessLevels: "",
    elevators: ""
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { doors, turnstiles, accessLevels, elevators } = formData;
    const recommendation = {
      controller:
        doors > 4 ? "UNC-100 or Enterprise Controller" : "UNC-100",
      readers:
        turnstiles > 0
          ? "NK86G Readers with Mobile Credential Support"
          : "Standard Proximity or Bluetooth Readers",
      software:
        accessLevels > 3 || elevators > 0
          ? "AxiomXa Advanced with Elevator and Multi-Level Support"
          : "AxiomXa Lite",
      credentials:
        turnstiles > 0 || doors > 3
          ? "Mobile Credentials (blueLINE) + Smart Cards"
          : "Proximity Cards"
    };
    setResult(recommendation);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "1rem" }}>Access Control Configurator</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="number"
          name="doors"
          placeholder="Number of doors"
          onChange={handleChange}
          style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <input
          type="number"
          name="turnstiles"
          placeholder="Number of turnstiles"
          onChange={handleChange}
          style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <input
          type="number"
          name="accessLevels"
          placeholder="Number of access levels"
          onChange={handleChange}
          style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <input
          type="number"
          name="elevators"
          placeholder="Number of elevators"
          onChange={handleChange}
          style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <button
          onClick={handleSubmit}
          style={{
            padding: "0.75rem",
            backgroundColor: "#0A66C2",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Get Recommendations
        </button>
      </div>

      {result && (
        <div style={{ marginTop: "2rem", padding: "1rem", border: "1px solid #ccc", borderRadius: "6px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "0.5rem" }}>Recommended Setup</h3>
          <p><strong>Controller:</strong> {result.controller}</p>
          <p><strong>Readers:</strong> {result.readers}</p>
          <p><strong>Software:</strong> {result.software}</p>
          <p><strong>Credentials:</strong> {result.credentials}</p>
        </div>
      )}
    </div>
  );
}

export default App;
