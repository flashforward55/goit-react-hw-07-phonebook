import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from 'redux/contactSlice';
import { Label, FilterInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  const filterChange = e => {
    dispatch(filterContact(e.target.value));
  };
  return (
    <Label>
      Filter contacts by name
      <FilterInput
        type="name"
        value={filter}
        onChange={filterChange}
        placeholder="Search contacts..."
      />
    </Label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  filterChange: PropTypes.func,
};

export default Filter;
