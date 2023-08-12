interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

export const Child: React.FC<ChildProps> = ({ color, onClick, children }) => {
  // fc -> function component
  // React.FC expects to receive children prop
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
