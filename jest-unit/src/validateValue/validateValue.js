const validateValue = (value) => {
    if (value < 0 || value > 100) {
        return false;
    }
    return true;
};

export default validateValue;
