import loader from "../assets/loader.gif"

export default function Loader() {
  
    return (
      <div className='text-center'>
        <img className='my-3' src={loader} alt="loading..."/>
      </div>
    )
 
}