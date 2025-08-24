import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import SecurityIcon from "@mui/icons-material/Security";
import GroupIcon from "@mui/icons-material/Group";
import '../../assets/css/test.css';
import FormatterDemo from './chart_component';

const DashboardView = () => {
  const modules = [
    {
      id: 1,
      title: "Dashboard",
      count: 15,
      subtitle: "Active reports",
      icon: <DashboardIcon />,
    },
    {
      id: 2,
      title: "Inventory",
      count: 125,
      subtitle: "Total items",
      icon: <InventoryIcon />,
    },
    {
      id: 3,
      title: "Security",
      count: 4,
      subtitle: "Active roles",
      icon: <SecurityIcon />,
    },
    {
      id: 5,
      title: "Users",
      count: 37,
      subtitle: "Registered users",
      icon: <GroupIcon />,
    },
  ];

  const [selectedCard, setSelectedCard] = React.useState(null);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 3,
        }}
      >
        {modules.map((module, index) => (
          <Card
            key={module.id}
            sx={{
              borderRadius: 3,
              boxShadow: 3,
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: 6,
              },
              ...(selectedCard === index && {
                border: "2px solid #1976d2",
              }),
            }}
          >
            <CardActionArea onClick={() => setSelectedCard(index)}>
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar
                    sx={{
                      bgcolor: "#1976d2",
                      width: 46,
                      height: 46,
                    }}
                  >
                    {module.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="h6">{module.title}</Typography>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold", lineHeight: 1 }}
                    >
                      {module.count}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {module.subtitle}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <FormatterDemo/>
    </>
  );
};

export default DashboardView;
