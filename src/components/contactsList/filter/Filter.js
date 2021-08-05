import React from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import phoneBookActions from '../../../redux/phoneBook/phoneBook-actions';

const Filter = ({ value, changeFilter }) => {
  return (
    <>
      <label className={styles.filter}>
        Find contacts by name
        <input type="text" value={value} onChange={changeFilter}></input>
      </label>
    </>
  );
};

Filter.prototype = {
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: e => dispatch(phoneBookActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
