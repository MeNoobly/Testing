const mapArrayToString = (array) => {
    return array.filter((item) => Number.isInteger(item)).map(String);
};

export default mapArrayToString;
