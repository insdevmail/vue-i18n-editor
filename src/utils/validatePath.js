import _ from 'lodash';

const validatePath = (path, file, acceptObject = true) => {
  const content = _.get(file, path);
  if (typeof content === 'string' || (typeof content === 'object' && !acceptObject)) {
    return false;
  }
  if (path || typeof content === 'undefined') {
    const newPath = path.slice(0, path.lastIndexOf('.'));
    if (newPath.length === 0) return true;
    return validatePath(newPath, file);
  }

  return true;
};

export default validatePath;
