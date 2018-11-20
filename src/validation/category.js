const isInvalidCategoryName = (name) => {
  if (name.length < 3 || name.length > 25) {
    return 'incorrect name length';
  }
  const regexp = new RegExp('^[a-zA-Z ]*$');
  if (name.search(regexp) == -1) {
      return 'incorrect symbol in name';
  }
  return false;
}

const areObjectFieldsAvailable = (data) => {
  if (!data.hasOwnProperty('name')) {
    return 'no name field';
  }
  return false;
}

const isInvalidCategory = (data) => {
  return new Promise((response, reject) => {
    let err = areObjectFieldsAvailable(data);
    if (err) reject(err);

    err = isInvalidCategoryName(data.name);
    if (err) reject(err);

    return response(false);
  })
}

module.exports = {
  isInvalidCategoryName,
  areObjectFieldsAvailable,
  isInvalidCategory,
}
