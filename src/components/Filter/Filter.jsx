import PropTypes from 'prop-types';
import { TextField } from "@mui/material";
import { useDispatch} from 'react-redux';
import { setFilter } from 'redux/filter';


const Filter = () => {
    const dispatch = useDispatch();

    const handleFilter = e => {
        const {value} = e.target;
        dispatch(setFilter(value.trim()));
    };


    return (
            <TextField
                id="standard-basic"
                label="Search"
                variant="standard"
                type="text"
                onChange={handleFilter} />
    )
}

export default Filter;

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
}
