import { useEffect, useState } from "react"

type NoteProps = {
  word: string
}

const someHeavyTask = (handler: () => void) => {
  setTimeout(() => {
    handler()
  }, 2000)
}

export default function Note(props: NoteProps) {

  const [counter, setCounter] = useState<number>(1);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    someHeavyTask(() => {
      setIsLoaded(true)
    })
  })

  const onClickHandler = () => {
    setCounter(counter + 1)
  }

  const constructWord = (counter: number, word: string) => {
    let words = "";
    [...Array(counter)].map((_: number, i: number) => words += word + "!".repeat(i+1) + " ")
    return words.trimEnd()
  }

  const loading = <p>Loading</p>
  const component = 
    <>
      <button onClick={onClickHandler}>
        Click me!!
      </button>
      <p>{constructWord(counter, props.word)}</p>
    </>

    return isLoaded ? component :  loading

}
