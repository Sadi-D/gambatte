import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FaceIcon from '@material-ui/icons/Face';
import GroupIcon from '@material-ui/icons/GroupAdd';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';

import { Link } from 'react-router-dom';

export const FolderListItems = ({ user }) => (
  <div>
    <Link style={{ textDecoration: 'none' }} to="/">
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Fil d'actualité" />
      </ListItem>
    </Link>
    <Link style={{ textDecoration: 'none' }} to={`/profile/${user.userId}`}>
      <ListItem button>
        <ListItemIcon>
          <FaceIcon />
        </ListItemIcon>
        <ListItemText primary="Profil" />
      </ListItem>
    </Link>
    <Link style={{ textDecoration: 'none' }} to="/following">
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Abonnements" />
      </ListItem>
    </Link>
    <Link style={{ textDecoration: 'none' }} to="/discover">
      <ListItem button>
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText primary="Découvrir des utilisateurs" />
      </ListItem>
    </Link>
  </div>
);

export const OtherFolderListItems = (
  <div>
    <Link style={{ textDecoration: 'none' }} to="/settings">
      <ListItem button>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Parametres" />
      </ListItem>
    </Link>
  </div>
);

FolderListItems.propTypes = {
  user: PropTypes.object.isRequired
};
