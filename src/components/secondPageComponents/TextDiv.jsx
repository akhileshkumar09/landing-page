

function TextDiv({title, content}) {
  return (
    <div>
        <div className="">
      <h3 className=" font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600 tracking-tight">
       {content}
      </p>
    </div>
    </div>
  )
}

export default TextDiv