import IconsSprite from '../../images/icons.svg';
export const IconSvg = ({ name, color, size }) => {
  return (
    // <svg
    //   style={{ position: 'absolute' }}
    //   width={size}
    //   viewBox="0 0 1000 500"
    //   fill={color}
    // >
    //   <use href={Icons + `#${name}`} />
    // </svg>
    <svg
      //   style={{ position: 'absolute' }}
      width={size}
      height={size}
      fill={color}
    >
      <use xlinkHref={`${IconsSprite}#${name}`} />
    </svg>
  );
};
