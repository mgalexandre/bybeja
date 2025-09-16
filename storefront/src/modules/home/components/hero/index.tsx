import { Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-[url('/hero-bg-cake-2.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-white font-normal"
          >
            Produtos de qualidade para todos os cake designers, do principiante
            ao profissional temos tudo o que precisas para levar a tua arte mais
            longe.
          </Heading>
        </span>
        <a href="/store">
          <button
            className="bg-white text-black px-4 py-2 rounded-md"
            type="button"
          >
            Ver produtos
          </button>
        </a>
      </div>
    </div>
  )
}

export default Hero
