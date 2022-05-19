const o: Task.AST = {
  title: '',
}

export { o }

// task
declare namespace Task {
  interface AST {
    title: string
    subTitle?: string
  }
}

// task
declare namespace Task {
  interface StartOfWeek {
    $M: number
    $W: number
    $D: number
    $y: number
  }
}
