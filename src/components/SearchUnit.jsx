const SearchUnit = ({
  placeholder,
  disabled,
  textValue,
  textChangeFunc,
  btnClickFunc,
}) => {
  return (
    <>
      <input
        type="text"
        className="bg-white border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500/30 outline-none mr-2"
        placeholder={placeholder}
        value={textValue}
        onChange={textChangeFunc}
        disabled={disabled}
      />

      <button
        type="button"
        className="bg-white border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
        onClick={btnClickFunc}
        disabled={disabled}
      >
        搜尋
      </button>
    </>
  );
};

export default SearchUnit;

/*
<SearchUnit
  placeholder="搜尋科目名稱或教師"
  disabled={isLoading}
  textValue={tmpQueryInput}
  textChangeFunc={(e) => setTmpQueryInput(e.target.value)}
  btnClickFunc={() => handleSearch()}
/>;
*/
