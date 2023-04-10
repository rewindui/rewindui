import { DropdownDividerProps } from '@components/Dropdown/DropdownDivider/DropdownDivider.types';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';

export const DropdownDivider = (props: DropdownDividerProps) => {
  const theme = useComponentTheme('Dropdown');
  const { color = 'gray', className = '' } = props;
  const id = usePropId(props.id);

  return <hr id={id} className={theme.divider({ color, className })} />;
};
