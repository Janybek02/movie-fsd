

export interface ButttontProps {
  size?: 'small' | 'medium' | 'large';  
    variant?: 'primary' | 'secondary' | 'tertiary';
    color?: 'default' | 'primary' | 'secondary';
    disabled?: boolean;
    onClick?: () => void;
    children: React.ReactNode;
}