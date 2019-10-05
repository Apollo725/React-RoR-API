import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ContactsTable from '../../components/Contacts/ContactsTable';
import NavDrawer from '../../components/Common/Drawer';
import { toggleDrawer, fetchContacts } from '../../actions/contacts';
import LoadingSpinner from '../../components/Common/LoadingSpinner/LoadingSpinner';

class Contacts extends Component {

  componentDidMount() {
    const { fetchContacts } = this.props;
    fetchContacts();
  }

  render() {
    const {
      openDrawer,
      toggleDrawer,
      activeContact,
      loadingContact,
      contacts,
    } = this.props;

    if (loadingContact) return <LoadingSpinner />

    return (
      <div>
        <ContactsTable
          toggleDrawer={toggleDrawer}
          loadingContact={loadingContact}
          contacts={contacts}
        />
        <NavDrawer
          openDrawer={openDrawer}
          toggleDrawer={toggleDrawer}
          activeContact={activeContact}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  openDrawer: state.contacts.openDrawer,
  activeContact: state.contacts.activeContact,
  loadingContact: state.contacts.loading_contacts,
  contacts: state.contacts.contacts,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    toggleDrawer,
    fetchContacts,
  }, dispatch );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);
