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
      <List dense sx={{ userSelect: "none" }}>
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
  const foodEntries = [
    {
      subject: "Apple",
      src: "img/food/apple.png",
      healthy: true,
      description: "A sweet and juicy fruit. Has skin rich in vitamins. Contains hard seeds in the core.",
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
      description: "A fruit. The skin cannot be consumed. Rich in potassium.",
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
      description: "A grilled patty between two buns. Can contain veggies, cheese, sauces and other meats.",
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
      description: "Cream and other flavorings chilled to ice. Can be topped with sprinkles. High in sugar.",
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
      description: "Batter in the form of a circle with a pattern. Syrup is poured onto it.",
      stats: {
        calories: 207,
        hunger: 4,
        thirst: 2
      }
    }
  ];

  const drinkEntries = [
    {
      subject: "Water",
      src: "img/drink/water.png",
      healthy: true,
      description: "Pure, fresh water.",
      stats: {
        calories: 0,
        hunger: 0,
        thirst: 8
      }
    },
    {
      subject: "Milk",
      src: "img/drink/milk.png",
      healthy: true,
      description: "Fresh whole milk from the cow. Rich in calcium.",
      stats: {
        calories: 148,
        hunger: 1.5,
        thirst: 7.5
      }
    },
    {
      subject: "Lemonade",
      src: "img/drink/lemonade.png",
      healthy: true,
      description: "Freshly squeezed lemons. Water and sugar is added.",
      stats: {
        calories: 99,
        hunger: 0,
        thirst: 7
      }
    },
    {
      subject: "Fresh Orange juice",
      src: "img/drink/fresh-orange-juice.png",
      healthy: true,
      description: "Freshly squeezed orange juice. High in vitamin C.",
      stats: {
        calories: 111,
        hunger: 0,
        thirst: 6
      }
    },
    {
      subject: "Apple juice",
      src: "img/drink/apple-juice.png",
      healthy: false,
      description: "Fresh bottled apple juice. High in sugar. Preservatives are added.",
      stats: {
        calories: 113,
        hunger: 0,
        thirst: 6
      }
    },
    {
      subject: "Coke",
      src: "img/drink/coke.png",
      healthy: false,
      description: "A can of coke.",
      stats: {
        calories: 161,
        hunger: 0,
        thirst: 5
      }
    },
    {
      subject: "Coffee",
      src: "img/drink/coffee.png",
      healthy: false,
      description: "Various different types. Provides high energy with negative side effects.",
      stats: {
        calories: 0,
        hunger: 0,
        thirst: 4
      }
    }
  ];

  return (
    <Stack>
      <Typography>Food Encyclopedia</Typography>
      <Stack direction="row" spacing={10}>
        {foodEntries.map((entry) => (
          <Entry subject={entry.subject} src={entry.src} healthy={entry.healthy} description={entry.description} stats={entry.stats} />
        ))}
      </Stack>
      <Stack direction="row" spacing={10}>
        {drinkEntries.map((entry) => (
          <Entry subject={entry.subject} src={entry.src} healthy={entry.healthy} description={entry.description} stats={entry.stats} />
        ))}
      </Stack>
    </Stack>
  );
}