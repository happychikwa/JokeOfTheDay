import { Link } from "react-router-dom"
import MenuItem from "@mui/material/MenuItem"
import MenuList from "@mui/material/MenuList"
import Paper from "@mui/material/Paper"

export default function ButtonAppBar() {
  return (
    <Paper>
      <MenuList
        id="composition-menu"
        aria-labelledby="composition-button"
      >
        <MenuItem ><Link to="/">Profile</Link></MenuItem>
        <MenuItem ><Link to="/">My account</Link></MenuItem>
        <MenuItem ><Link to="/">Logout</Link></MenuItem>
      </MenuList>
    </Paper>
  );
}