import { CookieOutlined, LunchDiningOutlined, WaterDropOutlined } from "@mui/icons-material";
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader, Stack, Typography } from "@mui/material";

function Entry({ subject, src, healthy, description, stats }) {
  return (
    <Stack spacing={1} width={350}>
      <Typography fontSize={24} sx={{ userSelect: "none" }}>{subject}</Typography>
      <img
        src={src}
        alt={subject}
        width={240}
        height={240}
        style={{ userSelect: "none" }}
      />
      <Typography color={healthy ? "success" : "error"} fontWeight="bold"><u>{healthy ? "HEALTHY" : "UNHEALTHY"}</u></Typography>
      <Typography sx={{ userSelect: "none" }}>{description}</Typography>
      <List dense>
        <ListSubheader>Stats</ListSubheader>
        <ListItem>
          <ListItemIcon><CookieOutlined /></ListItemIcon>
          <ListItemText primary="Calories" secondary={stats.calories} />
        </ListItem>
        <ListItem>
          <ListItemIcon><LunchDiningOutlined /></ListItemIcon>
          <ListItemText primary="Hunger" secondary={stats.hunger} />
        </ListItem>
        <ListItem>
          <ListItemIcon><WaterDropOutlined /></ListItemIcon>
          <ListItemText primary="Thirst" secondary={stats.thirst} />
        </ListItem>
      </List>
    </Stack>
  );
}

export default function Encyclopedia() {
  const entries = [
    {
      subject: "Apple",
      src: "img/food/apple.png",
      healthy: true,
      description: "A fruit, comes in red and green. Has skin rich in vitamins and minerals. Sweet and juicy inside. Contains hard seeds in the core.",
      stats: {
        calories: 52,
        hunger: 2,
        thirst: 1
      }
    },
    {
      subject: "Banana",
      src: "img/food/banana.png",
      healthy: true,
      description: "A yellow fruit. The skin cannot be consumed. Rich in potassium.",
      stats: {
        calories: 89,
        hunger: 2,
        thirst: 0
      }
    },
    {
      subject: "Burger",
      src: "img/food/burger.png",
      healthy: false,
      description: "A grilled meat patty between two buns. Can contain vegetables, cheese, sauces and other meats such as bacon.",
      stats: {
        calories: 295,
        hunger: 6,
        thirst: -2
      }
    },
    {
      subject: "Chips",
      src: "img/food/chips.png",
      healthy: false,
      description: "Thinly sliced potatoes deep-fried in oil. Salt and other flavorings are added.",
      stats: {
        calories: 240,
        hunger: 4,
        thirst: -4
      }
    },
    {
      subject: "Fries",
      src: "img/food/fries.png",
      healthy: false,
      description: "Rectangular-cut potatoes deep-fried in oil. Salt is added.",
      stats: {
        calories: "UNKNOWN",
        hunger: 4,
        thirst: -4
      }
    },
    {
      subject: "Hotdog",
      src: "img/food/hotdog.png",
      healthy: false,
      description: "A grilled sausage placed between two buns. Sauce and other toppings are added.",
      stats: {
        calories: 290,
        hunger: 6,
        thirst: -2
      }
    },
    {
      subject: "Ice cream",
      src: "img/food/ice-cream.png",
      healthy: false,
      description: "Cream and other flavorings chilled to ice. Can be topped with sprinkles.",
      stats: {
        calories: 207,
        hunger: 4,
        thirst: 2
      }
    },
    {
      subject: "Waffle",
      src: "img/food/waffle.png",
      healthy: false,
      description: "Cooked batter in the form of a circle with cube markings in it. Topped with syrup and various other toppings.",
      stats: {
        calories: 207,
        hunger: 4,
        thirst: 2
      }
    }
  ];

  return (
    <Stack>
      <Typography>Food Encyclopedia</Typography>
      <Stack direction="row" spacing={10}>
        {entries.map((entry) => (
          <Entry subject={entry.subject} src={entry.src} healthy={entry.healthy} description={entry.description} stats={entry.stats} />
        ))}
      </Stack>
    </Stack>
  );
}