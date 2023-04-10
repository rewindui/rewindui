import { ImageComponent, ImageProps } from '@components/Image/Image.types';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

const defaultProps: Partial<ImageProps> = {
  fit: 'contain',
  height: 'auto',
  loading: 'lazy',
  mode: 'dark',
  radius: 'none',
  width: '100%',
};

const Image: ImageComponent = forwardRef<HTMLDivElement, ImageProps>(
  (props: ImageProps, ref?: Ref<HTMLDivElement>) => {
    const theme = useComponentTheme('Image');
    const {
      alt = '',
      caption,
      children,
      wrapperClassName = '',
      className = '',
      fit,
      radius,
      src,
      width,
      height,
      imageRef,
      loading,
      mode,
      ...additionalProps
    } = {
      ...defaultProps,
      ...props,
    };
    const id = usePropId(props.id);
    const classes = useMemo(() => {
      return twMerge(
        theme.base({
          className,
          fit,
          radius,
        })
      );
    }, [theme, className, fit, radius]);

    return (
      <div
        id={id}
        ref={ref}
        className={twMerge(theme.wrapper({ className: wrapperClassName }))}
        {...additionalProps}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={classes}
          src={src}
          alt={alt}
          height={height}
          width={width}
          loading={loading}
          ref={imageRef}
        />

        {caption && <figcaption className={theme.caption({ mode })}>{caption}</figcaption>}
      </div>
    );
  }
);

Image.displayName = 'Image';

export { Image };
