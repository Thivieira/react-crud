import React from 'react';

export default ({ formErrors }) => (
  <div className="formErrors">
    {Object.keys(formErrors).map(fieldName => {
      if (formErrors[fieldName].length > 0) {
        return <p key={fieldName}>{`Campo ${fieldName} ${formErrors[fieldName]}`}</p>;
      }
      return '';
    })}
  </div>
);
