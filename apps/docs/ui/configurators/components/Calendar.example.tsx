import { CalendarProps, Calendar } from '@rewind-ui/core';
import { cva } from 'class-variance-authority';
import * as React from 'react';

export const CalendarCode = (props: any) => {
  const {
    bordered,
    borderStyle,
    dayFormat,
    disabledWeekends,
    horizontalBorders,
    radius,
    shadow,
    size,
    verticalBorders,
  } = props;

  const defaultProps = {
    bordered: true,
    borderStyle: 'solid',
    dayFormat: 'EEEEE',
    disabledWeekends: true,
    horizontalBorders: true,
    radius: 'md',
    shadow: 'sm',
    size: 'md',
    verticalBorders: true,
  };

  const attributes = [
    bordered !== defaultProps.bordered ? `bordered={${bordered}}` : null,
    borderStyle !== defaultProps.borderStyle ? `borderStyle="${borderStyle}"` : null,
    dayFormat !== defaultProps.dayFormat ? `dayFormat="${dayFormat}"` : null,
    disabledWeekends !== defaultProps.disabledWeekends
      ? `disabledWeekends={${disabledWeekends}}`
      : null,
    horizontalBorders !== defaultProps.horizontalBorders
      ? `horizontalBorders={${horizontalBorders}}`
      : null,
    radius !== defaultProps.radius ? `radius="${radius}"` : null,
    shadow !== defaultProps.shadow ? `shadow="${shadow}"` : null,
    size !== defaultProps.size ? `size="${size}"` : null,
    verticalBorders !== defaultProps.verticalBorders
      ? `verticalBorders={${verticalBorders}}`
      : null,
  ].filter(Boolean);

  if (attributes.length) {
    attributes.unshift(null);
  }

  return `import { Calendar } from '@rewind-ui/core';

function App() {
  return (
    <Calendar value={new Date()}${attributes.join(' ')} />
  );
}
`.trim();
};

export const CalendarExample = (props: CalendarProps) => {
  const classes = cva(['container'], {
    variants: {
      size: {
        xs: ['w-[16rem]'],
        sm: ['w-[18rem]'],
        md: ['w-[20rem]'],
        lg: ['w-[22rem]'],
        xl: ['w-[26rem]'],
      },
    },
  });

  return (
    <div className={classes({ size: props.size })}>
      <Calendar value={new Date()} {...props} />
    </div>
  );
};
