import React from 'react'

export function TriggerError() {
  return (
    <button
      onClick={() => {
        throw new Error('dada');
      }}
    >
      Test Error
    </button>
  );
}
export function ChangeLanguage({ changeLanguage }) {
  return (
    <button
      onClick={() => {
        changeLanguage('de');
      }}
    >
      Change Language
    </button>
  );
}

