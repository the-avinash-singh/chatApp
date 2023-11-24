import loader from "../assets/loader.gif"

export default function Loader() {
  
    return (
      <div className='text-center' key={0}>
        <img className='my-3' src={loader} alt="loading..."/>
      </div>
    )
 
}
