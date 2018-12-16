const isInvalidCategoryName = (name) => {
  if (name.length < 3 || name.length > 25) {
    return 'incorrect name length';
  }
  const regexp = /^[a-zA-Z ]*$/
  if (!regexp.test(name)) {
      return 'incorrect symbol in name';
  }
  return false;
}

const areObjectFieldsUnavailable = (data) => {
  if (!data.hasOwnProperty('name')) {
    return 'no name field';
  }
  return false;
}

const isInvalidCategory = (data) => {
  return new Promise((response, reject) => {
    let err = areObjectFieldsUnavailable(data);
    if (err) reject(err);

    err = isInvalidCategoryName(data.name);
    if (err) reject(err);

    return response(false);
  })
}

module.exports = {
  isInvalidCategoryName,
  areObjectFieldsUnavailable,
  isInvalidCategory,
}
