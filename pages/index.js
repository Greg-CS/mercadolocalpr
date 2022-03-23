import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <nav className='p-6 border-b-2 border-black'>
        <div className='flex justify-evenly'>
          <div className='text-2xl'>Mercado Local PR</div>
          <div className=''>El intercambio callejero!</div>
          <div><button className='bg-green-500 text-white rounded-full p-2'>Login/Sign up</button></div>
        </div>
      </nav>
      
      <div className='p-1 flex justify-around border-b-2 border-black'>
        <div>Listados</div>
        <div>Subastas</div>
        <div>Favoritos</div>
        <div>Island View</div>
      </div>

      <br/>

      <div className='p-6 grid grid-cols-4 gap-4 md:justify-evenly'>

        <div className='border-2 border-green-300 rounded-xl p-6 text-center'>
          <div>Seleciona categoria:</div>
          <br/>
          <div className='grid grid-cols-1 gap-14 content-around'>
            <div><Link href={"/"}>Bienes Raices</Link></div>
            <div><Link href={"/"}>Alquiler y vacaciones</Link></div>
            <div><Link href={"/"}>Carros</Link></div>
            <div><Link href={"/"}>Mascotas</Link></div>
            <div><Link href={"/"}>Articulos</Link></div>
            <div><Link href={"/"}>Empleos</Link></div>
            <div><Link href={"/"}>servicios</Link></div>

          </div>  
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F421%2F784%2Foriginal%2Fshopping-cart-icon-vector-illustration.jpg&f=1&nofb=1" alt="Sunset in the mountains"/>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
        </div>   
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F421%2F784%2Foriginal%2Fshopping-cart-icon-vector-illustration.jpg&f=1&nofb=1" alt="Sunset in the mountains"/>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
        </div>    
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F421%2F784%2Foriginal%2Fshopping-cart-icon-vector-illustration.jpg&f=1&nofb=1" alt="Sunset in the mountains"/>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
        </div>         
      </div>

      <div className='bg-green-300 p-6 grid grid-cols-2'>
      <div>
        <div className='text-2xl'>Impulsa tu negocio con Mercado Local Pr</div>
        <div>Descubre mas Beneficios para aumentar tus ventas</div>        
      </div>
      <div className='flex justify-center'><button className='p-1 rounded full border-2 border-green-500'>Unete al pueblo!</button></div>
      </div>

      <div className='p-6'>
        <div className='p-6 text-2xl'>Esto te puede interesar</div>
        <div className='p-6 flex justify-between'>
          <div className='rounded-full border-2 border-black'><Image src={"/flowerpot.png"} width={100} height={100}></Image></div>
          <div className='rounded-full border-2 border-black'><Image src={"/flowerpot.png"} width={100} height={100}></Image></div>
          <div className='rounded-full border-2 border-black'><Image src={"/flowerpot.png"} width={100} height={100}></Image></div>
          <div className='rounded-full border-2 border-black'><Image src={"/flowerpot.png"} width={100} height={100}></Image></div>                    
        </div>
      </div>

      <footer className='bg-green-400 p-7 border-black border-t-4 flex justify-around'>
        <div>h1</div>
        <div>h2</div>
        <div>h3</div>
        <div>h4</div>
      </footer>

    </div>
  )
}
