interface Props {
  image?: string;
  alt: string;
  placeholderText?: string;
}

export default function WorkImage({ image, alt, placeholderText }: Props) {
  return (
    <div className="work-image">
      {image ? (
        <img
          src={image}
          alt={alt}
          width={960}
          height={540}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="work-image-placeholder" role="img" aria-label={alt}>
          <span className="work-placeholder-text">
            {placeholderText || `${alt} — Preview coming soon`}
          </span>
        </div>
      )}
    </div>
  );
}
