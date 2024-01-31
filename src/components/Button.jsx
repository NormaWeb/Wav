const Button = ({ label, backgroundColor, textColor, borderColor, fullWidth, url }) => {
  return (
    url ?
      <a href={url} className={`inline-block px-10 py-4 border font-semibold text-[16px] leading-none rounded-lg
      ${backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-green text-white border-primary"}
          ${fullWidth && 'w-full'}`}
      >
        {label}
      </a> :
      <button className={`flex justify-center items-center gap-1 px-10 py-4 border font-semibold text-[14px] leading-none rounded-lg
      ${backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-green text-white border-primary"}
          ${fullWidth && 'w-full'}`}
      >
        {label}
      </button>
  )
}


export default Button
