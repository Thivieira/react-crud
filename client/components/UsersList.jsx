import React from 'react';
import { Table, Form, Button, Col, Row } from 'reactstrap';
import TablePagination from './TablePagination';
import FilterTable from './FilterTable';
import Modal from './Modal';
import PageLoader from './PageLoader';

const User = ({ id, nome, telefone, email, username, user }) => (
  <tr>
    <th>{id}</th>
    <td>{nome}</td>
    <td>{telefone}</td>
    <td>{email}</td>
    <td>{username}</td>
    <td>
       {/* <Modal buttonLabel="Editar" item={user} updateState={this.props.updateState}/> */}
      <Button color="secondary">Editar</Button>
    </td>
    <td>
       {/* <Modal buttonLabel="Excluir" item={user} updateState={this.props.updateState}/> */}
      <Button color="danger">Excluir</Button>
    </td>
  </tr>
);

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUsers: [],
      currentPage: null,
      totalPages: null,
      filteredUsers: [],
      filtering: false
    };
    this.onPageChanged = this.onPageChanged.bind(this);
    this.filterTable = this.filterTable.bind(this);
  }


  // addItemToState = (item) => {
  //   this.setState(prevState => ({
  //     items: [...prevState.items, item]
  //   }))
  // }

  // updateState = (item) => {
  //   const itemIndex = this.state.items.findIndex(data => data.id === item.id)
  //   const newArray = [
  //   // destructure all items from beginning to the indexed item
  //     ...this.state.items.slice(0, itemIndex),
  //   // add the updated item to the array
  //     item,
  //   // add the rest of the items to the array from the index after the replaced item
  //     ...this.state.items.slice(itemIndex + 1)
  //   ]
  //   this.setState({ items: newArray })
  // }

  // deleteItemFromState = (id) => {
  //   const updatedItems = this.state.items.filter(item => item.id !== id)
  //   this.setState({ items: updatedItems })
  // }

  filterTable(filter) {
    if (filter === '') {
      this.setState({ filtering: false });
    } else {
      this.setState({ filtering: true });
    }
    let filteredUsers = this.props.users;
    filteredUsers = filteredUsers.filter(user => {
      let name = user.nome.toLowerCase();
      return name.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({
      filteredUsers
    });
  }

  onPageChanged(data) {
    const { users } = this.props;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentUsers = users.slice(offset, offset + pageLimit);
    console.log(currentUsers);

    this.setState({ currentPage, currentUsers, totalPages });
  }

  componentWillMount() {
    let self = this;
    this.props.fetchUsers();
  }

  render() {
    const { currentUsers, filteredUsers, filtering } = this.state;
    const { onUserClick, users, isFetching } = this.props;
    const totalUsers = users.length;
    console.log('props users', totalUsers);
    if (isFetching) {
      return <PageLoader />;
    } else {
      return (
        <div>
          <Row className="mb-3">
            <Col sm={{ size: 'auto' }}>
              <Button color="secondary">Adicionar</Button>
            </Col>
            <Col >
              <FilterTable onChange={this.filterTable} />
            </Col>
          </Row>
          <div className="table-responsive">
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Telefone</th>
                  <th>Email</th>
                  <th>Usuário</th>
                  <th>Editar</th>
                  <th>Excluir</th>
                </tr>
              </thead>
              <tbody>
                {!filtering
                  ? currentUsers.map(user => (
                      <User key={user.id} user={user} {...user} onClick={() => onUserClick(user.id)} />
                    ))
                  : filteredUsers.map(user => (
                      <User key={user.id} user={user} {...user} onClick={() => onUserClick(user.id)} />
                    ))}
              </tbody>
            </Table>
          </div>
          {!filtering && (
            <TablePagination
              totalRecords={totalUsers}
              pageLimit={2}
              pageNeighbours={1}
              onPageChanged={this.onPageChanged}
            />
          )}
        </div>
      );
    }
  }
}

export default UsersList;
