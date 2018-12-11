const isInvalidShoesName = (name) => {
  if (name.length < 3 || name.length > 25) {
    return 'incorrect name length';
  }
  const regexp = new RegExp('^[a-zA-Z ]*$');
  if (name.search(regexp) == -1) {
      return 'incorrect symbol in name';
  }
  return false;
}

const isInvalidShoesDescription = (description) => {
  if (description.length < 3 || description.length > 20) {
    return 'incorrect description length';
  }
  return false;
}

const isInvalidShoesPrice = (price) => {
  if (isNaN(Number(price))) {
    return 'incorrect price format';
  }
  return false;
}


const areShoesObjectFieldsUnavailable = (data) => {
  if (!data.hasOwnProperty('name')) {
    return 'no name field';
  }
  if (!data.hasOwnProperty('description')) {
    return 'no description field';
  }
  if (!data.hasOwnProperty('price')) {
    return 'no price field';
  }
  if (!data.hasOwnProperty('type')) {
    return 'no type field';
  }
  return false;
}

const isInvalidShoes = (data) => {
  return new Promise((response, reject) => {
    let err = areShoesObjectFieldsUnavailable(data);
    if (err) reject(err);

    err = isInvalidShoesName(data.name);
    if (err) reject(err);

    err = isInvalidShoesDescription(data.description);
    if (err) reject(err);
    
    err = isInvalidShoesPrice(data.price);
    if (err) reject(err);

    return response(false);
  })
}

module.exports = {
  isInvalidShoesName,
  isInvalidShoesDescription,
  isInvalidShoesPrice,
  areShoesObjectFieldsUnavailable,
  isInvalidShoes,
}
