import { Button } from './styles';

interface IButtonProps {
  children: React.ReactNode;
  isActive?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  backgroundColor?: string;
}

const ButtonIcon: React.FC<IButtonProps> = ({
  children,
  isActive,
  backgroundColor,

  ...props
}) => {
  return (
    <Button type="button" isActive={isActive} {...props}>
      {children}
    </Button>
  );
};

export default ButtonIcon;
