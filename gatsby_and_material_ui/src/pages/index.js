import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "gatsby-theme-material-ui";

import {
  BottomNavigationAction,
  Button,
  CardActionArea,
  Fab,
  IconButton,
} from "gatsby-theme-material-ui";

const Page = () => (
  <div>
    <Typography>
      Check out my <Link to="/blog">blog</Link>!
    </Typography>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  </div>
);

export default Page;