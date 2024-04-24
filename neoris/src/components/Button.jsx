import clsx from 'clsx';

function Button({ children, className, ...rest }) {
  return (
    <button
      {...rest}
      className={clsx(
        'h-10 items-center rounded-lg bg-black px-4 text-sm font-medium text-white transition-colors hover:bg-white hover:text-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500 active:bg-black',
        className,
      )}
    >
      {children}
    </button>
  );
}

export default Button;