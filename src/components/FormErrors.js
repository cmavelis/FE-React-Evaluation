import React from 'react';
import PropTypes from 'prop-types';

const FormErrors = (props) => {
  const { formErrors } = props;

  return (
    <div>
      {Object.keys(formErrors).map((fieldName) => (
        <div className="form-errors form-error-message-wrapper" key={`form-${fieldName}`}>
          <span className="form-error-message">
            {formErrors[fieldName].length > 0 && formErrors[fieldName]}
          </span>
        </div>
      ))}
    </div>
  );
};

FormErrors.propTypes = {
  formErrors: PropTypes.shape({ name: PropTypes.string, password: PropTypes.string }).isRequired,
};

export default FormErrors;
