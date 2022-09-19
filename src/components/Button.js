import React from 'react'

const funcs = btn => {
  const className = {
    '=': 'equals',
    '+': 'operand',
    '-': 'operand',
    'X': 'operand',
    '/': 'operand',
  }
  return className[btn]
}

const Button = ({ value }) => {
  return (
    <button className={`${funcs(value)} button`}>{value}</button>
  )
}

export default Button