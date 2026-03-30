const RemoveButton = ({
  classFont = 'text-xs',
  classSpace,
  classOthers,
  disabled = false,
  text,
  clickFunc,
}) => {
  return (
    <button
      type="button"
      className={`text-red-400 ${!disabled && 'hover:text-red-600 hover:cursor-pointer'} ${classFont} ${classSpace} ${classOthers}`}
      disabled={disabled}
      onClick={clickFunc}
    >
      {text}
    </button>
  );
};

export default RemoveButton;

{
  /* <RemoveButton
  classFont={'text-xs'}
  classSpace={'mt-1'}
  classOthers={''}
  disabled={false}
  text={'移除'}
  clickFunc={() => deleteCartItem(item.id)}
/>; */
}
