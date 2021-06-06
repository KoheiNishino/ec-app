import React, { useCallback, useState } from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import { signOut } from "../../reducks/users/operations";
import { TextInput } from "../UIkit";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import HistoryIcon from "@material-ui/icons/History";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles((theme) => ({
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: 256,
        flexShrink: 0,
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: 256,
    },
    searchField: {
      alignItems: "center",
      display: "flex",
      marginLeft: 32,
    },
  })
);

const ClosableDrawer = (props) => {
  const { container } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  const selectMenu = (event, path) => {
    dispatch(push(path));
    props.onClose(event);
  };

  const [searchKeyword, setSearchKeyword] = useState("")

  const menus = [
    {
      func: selectMenu,
      label: "商品登録",
      icon: <AddCircleIcon />,
      id: "register",
      value: "/product/edit",
    },
    {
      func: selectMenu,
      label: "注文履歴",
      icon: <HistoryIcon />,
      id: "history",
      value: "/order/history",
    },
    {
      func: selectMenu,
      label: "プロフィール",
      icon: <PersonIcon />,
      id: "profile",
      value: "/user/mypage",
    },
  ];

  const inputSearchKeyword = useCallback((event) => {
      setSearchKeyword(event.target.value);
    }, [setSearchKeyword]);

  return (
    <nav className={classes.drawer}>
      <Drawer
        container={container}
        variant="temporary"
        anchor={"right"}
        open={props.open}
        onClose={(e) => props.onClose(e)}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <div className={classes.searchField}>
          <TextInput
            fullWidth={false}
            label={"キーワードを入力"}
            multiline={false}
            onChange={inputSearchKeyword}
            required={false}
            rows={1}
            value={searchKeyword}
            type={"text"}
          />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {menus.map((menu) =>
            <ListItem
              button
              key={menu.id}
              onClick={(e) => menu.func(e, menu.value)}
            >
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.label} />
            </ListItem>
          )}
          <ListItem button key="logout" onClick={() => dispatch(signOut())}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="ログアウト" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </nav>
  );
};

export default ClosableDrawer;
