import { useState } from "react";

type ImageWithFallbackProps = React.ImgHTMLAttributes<HTMLImageElement>;

export function ImageWithFallback({
  src,
  alt,
  className,
  ...props
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-200 text-gray-500 ${className ?? ""}`}
      >
        <span className="text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      {...props}
    />
  );
}