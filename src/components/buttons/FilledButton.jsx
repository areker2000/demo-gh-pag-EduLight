const FilledButton = ({
  classFont,
  classSpace,
  classColor,
  classShadow,
  classOthers,
  disabled = false,
  clickFunc,
  text,
}) => {
  return (
    <button
      type="button"
      className={`${classColor} ${classSpace} ${classFont} ${classOthers} ${classShadow} rounded-xl transition duration-300 active:scale-95 ${disabled ? '' : 'hover:cursor-pointer'}`}
      disabled={disabled}
      onClick={clickFunc}
    >
      {text}
    </button>
  );
};

export default FilledButton;

/*
<FilledButton
  classFont={''}
  classSpace={''}
  classColor={''}
  classShadow={''}
  classOthers={''}
  disabled={}
  text={''}
  clickFunc={}
/>
*/
