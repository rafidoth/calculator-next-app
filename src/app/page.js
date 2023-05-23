import Calculator from "@/components/UI/Calculator"



const centerize = "flex items-center justify-center min-h-screen"

export default function Home() {
  return (
    <>
      <div className={centerize}>
          <Calculator/>
      </div>
    </>
  )
}
