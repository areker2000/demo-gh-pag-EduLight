const FormInput = ({
  register,
  errors,
  classSpace,
  type,
  id,
  name,
  placeholder,
  rules,
  maxLength,
  disabled,
  changeFunc,
}) => {
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        className={`${classSpace} border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition
          ${
            errors[id]
              ? 'border-red-500 ring-1 ring-red-500'
              : 'border-gray-200 focus:ring-2 focus:ring-emerald-500'
          }
          ${!disabled ? 'bg-white' : 'bg-gray-300'}`}
        placeholder={placeholder}
        {...register(id, rules)}
        maxLength={maxLength}
        disabled={disabled}
        onChange={changeFunc}
      />
      {errors[id] && (
        <p className="text-red-500 text-xs pt-1">{errors[id].message}</p>
      )}
    </>
  );
};

export default FormInput;

{
  /* <FormInput
  register={register}
  errors={errors}
  classSpace={'px-4 py-3'}
  type={'text'}
  id={'cardName'}
  placeholder={'請輸入姓名'}
  rules={{ required: '姓名為必須項目' }}
  maxLength={}
  disabled={disabled}
  changeFunc={}
/>; */
}
