import classnames from 'classnames';

export const BUTTON_VARIANTS = {
  primary: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
};

export const Button = ({ variant = "primary", children, ...props }) => (
	<button {...props} className={classnames(BUTTON_VARIANTS[variant])}>
		{children}
	</button>
);
