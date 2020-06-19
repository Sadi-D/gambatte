import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';

import UserAvatar from './UserAvatar';

const styles = theme => ({
  button: {
    marginBottom: theme.spacing.unit,
    marginLeft: theme.spacing.unit
  },
  cardHeader: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  cardHeaderTitle: {
    display: 'flex'
  },
  commentField: {
    width: '90%',
    marginLeft: theme.spacing.unit,
    marginTop: theme.spacing.unit
  }
});

class CommentField extends Component {
  state = {
    avatarColor: 18,
    firstname: '',
    lastname: '',
    text: ''
  };

  componentDidMount = () => {
    const { commenterId, getUser } = this.props;
    getUser(commenterId).then((res) => {
      this.setState({
        avatarColor: res.payload.user.avatarColor,
        firstname: res.payload.user.firstname,
        lastname: res.payload.user.lastname
      });
    });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState(() => ({ text: value }));
  };

  postComment = (e) => {
    e.preventDefault();
    const { addComment, commenterId, postId } = this.props;
    const { text } = this.state;
    const timestamp = new Date().getTime();

    if (text.trim() === '') return;

    addComment('addComment', commenterId, postId, text, timestamp);
    this.setState({
      text: ''
    });
  };

  render() {
    const { classes, commenterId, getUser } = this.props;
    const { avatarColor, firstname, lastname, text } = this.state;

    return (
      <CardHeader
        className={classes.cardHeader}
        title={
          <div className={classes.cardHeaderTitle}>
            <UserAvatar
              author={firstname + lastname}
              authorId={commenterId}
              avatarColor={avatarColor}
              getUser={getUser}
            />
            <TextField
              multiline
              placeholder="Commenter"
              className={classes.commentField}
              onChange={this.handleChange}
              value={text}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={this.postComment}
            >
              <SendIcon />
            </Button>
          </div>
        }
      />
    );
  }
}

CommentField.propTypes = {
  addComment: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  commenterId: PropTypes.string.isRequired,
  getUser: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired
};

export default withStyles(styles)(CommentField);
