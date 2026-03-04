type ButtonProps = {
  name?: string;
  leftIcon?: string;
  rightIcon?: string;
};

export default function Button({ name, leftIcon, rightIcon }: ButtonProps) {
  return (
    <button>
      {leftIcon && <span>{leftIcon}</span>}
      {name && <span>{name}</span>}
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
}
