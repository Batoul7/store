import './Title.css'

interface TitleProps {
  name:string;
  desc:string
}
export default function Title({name, desc}:TitleProps) {

  return (
    <div className='title py-10'>   
      <div className="text-center">
          <h2 className='relative pb-2 text-2xl lg:text-3xl font-medium uppercase text-blue-400'>{name}</h2>
          <p className='text-sm lg:text-base opacity-90'>{desc}</p>
      </div>
  </div>

  )
}
