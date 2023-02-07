const Select = (props) => {
    return (
        <select ref={ selectorRef } defaultValue={ 'learn' }>
            { ...props }
            <option value="learn">learn</option>
            <option value="work">Work</option>
            <option value="home">Home</option>
        </select>
    )
}
export default Select