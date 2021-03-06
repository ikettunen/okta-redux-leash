import React from 'react';
import { connect } from 'react-redux';
import { Message, Card, Image } from 'semantic-ui-react';

import { selectUser } from './users';

const SelectedUser = ({ selected, selectUser }) => {
  if (!selected) return null;

  return (
    <Card style={{ marginTop: '2em' }}>
      <Message
        attached
        header={selected.name}
        onDismiss={() => selectUser(null)}
      />
      <Image src={selected.avatar} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{selected.username}</Card.Header>
      </Card.Content>
    </Card>
  );
};

const mapStateToProps = state => ({
  selected: state.users.selected,
});

const mapDispatchToProps = { selectUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectedUser);
