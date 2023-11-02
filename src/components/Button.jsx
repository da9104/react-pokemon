import className from 'classnames'
import { twMerge } from 'tailwind-merge';
import propTypes from 'prop-types'

export default function Button({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
 }) {
    console.log(rest)
   
  const classes = className(rest.className, 'px-4 py-1.5 border my-3 flex items-center content-center ', {
    'border-indigo-500 bg-indigo-500 text-white': primary,
    'border-pink-500 bg-pink-500 text-white': secondary,
    'border-purple-500 bg-purple-500 text-white px-5': success,
    'border-red-500 bg-red-500 text-white': warning,
    'border-red-500 text-red-500': danger,
    'rounded-full': rounded,
    'bg-white': outline,
    'text-indigo-500': outline && primary,
    'text-pink-500': outline && secondary,
    'text-purple-500': outline && success,
    'text-red-500': outline && warning,
  })
  
    return (
    <button {...rest} className={classes}>
        {children}
    </button>
        )
}

