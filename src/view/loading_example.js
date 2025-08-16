import React, { useEffect, useState } from "react";
import { CircularProgress, Box, Typography, Button, AppBar, Toolbar } from "@mui/material";

const LoadingExample = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  // Simulate API call
  const fetchData = async () => {
    setLoading(true);
    setData(null);

    try {
      // Example API fetch
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const result = await response.json();

      // delay just to visualize loading
      setTimeout(() => {
        setData(result);
        console.log(result);
        setLoading(false);
      }, 1500);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      {loading ? (
        <Box textAlign="center">
          <CircularProgress />
          <Typography variant="body1" mt={2}>
            Loading data...
          </Typography>
        </Box>
      ) : data ? (
        <Box textAlign="center">
          <Button variant="contained" sx={{ mt: 2 }} onClick={fetchData}>
            Reload Data
          </Button>
        </Box>
      ) : (
        <Typography variant="body1">No data found</Typography>
      )}
    </Box>
  );
};

export default LoadingExample;
