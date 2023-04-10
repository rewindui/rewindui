import { cva } from 'class-variance-authority';

const arrowSideDictionary = cva('', {
  variants: {
    side: {
      'top': 'bottom',
      'top-start': 'bottom',
      'top-end': 'bottom',
      'right': 'left',
      'right-start': 'left',
      'right-end': 'left',
      'bottom': 'top',
      'bottom-start': 'top',
      'bottom-end': 'top',
      'left': 'right',
      'left-start': 'right',
      'left-end': 'right',
    }
  }
});

export { arrowSideDictionary };
