import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/slice';
import { Label, FilterInput } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <Label>
      Filter contacts by name
      <FilterInput
        type="text"
        name="filter"
        title="The ability to filter the contact book"
        required
        value={filter}
        onChange={event => dispatch(setFilter(event.target.value))}
      />
    </Label>
  );
};

export default Filter;
