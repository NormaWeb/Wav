const Button = ({ label, backgroundColor, textColor, borderColor, fullWidth, url }) => {

  return (
    url ?
      <a href={url} className={`flex justify-center items-center gap-1 px-7 py-4 border font-montserrat font-semibold text-lg leading-none rounded-lg
      ${backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-green text-white border-primary"}
          ${fullWidth && 'w-full'}`}
      >
        {label}
      </a> :
      <button className={`flex justify-center items-center gap-1 px-7 py-4 border font-montserrat font-semibold text-lg leading-none rounded-lg
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
