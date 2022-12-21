const Error = ({ children }) => {
  return (
    <div className="bg-red-600 text-center p-3 text-white font-bold uppercase rounded-md"> 
       {children}
    </div> 
  )
}

export { Error }
