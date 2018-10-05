import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

const ReasonTags = ({ removeReason, reasons }) => (
  <div className="reasons">
    {reasons.length && reasons.map(reason => (
        <div
          className="reasonElement"
          key={reason.id}
        >
          <div
            className="reasonText">
            {reason.text}
          </div>
          <div 
            className="deleteButton"
            role="button"
            onClick={() => removeReason(reason.id)}
          >
            X
          </div>
        </div>
      ))
    }
  </div>
)

ReasonTags.propTypes = {
  removeReason: PropTypes.func.isRequired,
  reasons: PropTypes.array.isRequired,
};

export default ReasonTags;