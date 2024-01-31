const Button = ({ label, backgroundColor, textColor, borderColor, fullWidth, url }) => {
  return (
    url ?
      <a href={url} className={`flex justify-center items-center gap-1 px-10 py-5 border font-semibold text-sm leading-none rounded-lg
      ${backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-green text-white border-primary"}
          ${fullWidth && 'w-full'}`}
      >
        {label}
      </a> :
      <button className={`flex justify-center items-center gap-1 px-10 py-5 border font-semibold text-sm leading-none rounded-lg
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
