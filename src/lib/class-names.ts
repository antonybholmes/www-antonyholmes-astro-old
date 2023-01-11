function _clean(cn: string) {
  // replace multi spaces globally and ignore new lines
  return cn.replace(/(\s+|\r\n|\n|\r)/gm, " ").trim()
}

type CSSClass =
  | string
  | CSSClass[]
  | [boolean, CSSClass]
  | [boolean, CSSClass, CSSClass]
  | undefined

function _cn(arg: CSSClass, classes: string[]) {
  if (!arg) {
    return
  }

  if (Array.isArray(arg)) {
    if (arg.length > 0) {
      if (typeof arg[0] === "boolean") {
        switch (arg.length) {
          case 1:
            // nonsense so ignore
            break
          case 2:
            // only render if true
            if (arg[0]) {
              _cn(arg[1], classes)
            }
            break
          default:
            // conditionally render
            arg[0] ? _cn(arg[1], classes) : _cn(arg[2], classes)
            break
        }
      } else {
        arg.forEach(arg => _cn(<CSSClass>arg, classes))
      }
    }
  } else {
    const argType = typeof arg

    if (argType === "string" || argType === "number") {
      classes.push(arg)
    }
  }
}

/**
 * Concatenates strings of class names together to form a class name string.
 * Useful for breaking up long tailwind class strings.
 * Also adds conditional rendering. [condition, 'classes'] will only add the
 * classes if condition is true. [condition, 'classes1', 'classes2'] adds
 * classes1 or classes2 conditionally. Also supports recursive conditionals.
 * [condition1, [condition2, 'classes1', 'classes2'], 'classes3'].
 *
 * @param args string or array of strings of classnames. Also supports condition c
 * @returns a space separated string of class names.
 */
export function cn(...args: CSSClass[]): string {
  const classes: string[] = []

  _cn(args, classes)

  // join all the pieces into one then split on space
  // and remove duplicates
  return _clean(classes.join(" "))
}

/**
 * Concatenates strings of class names together to form a class name string.
 * Useful for breaking up long tailwind class strings. This variant keeps
 * only unique names in the order they appear.
 * Also adds conditional rendering. [condition, 'classes'] will only add the
 * classes if condition is true. [condition, 'classes1', 'classes2'] adds
 * classes1 or classes2 conditionally. Also supports recursive conditionals.
 * [condition1, [condition2, 'classes1', 'classes2'], 'classes3'].
 *
 * @param args string or array of strings of classnames. Also supports condition c
 * @returns a space separated string of class names.
 */
export function cnu(...args: CSSClass[]): string {
  const used = new Set<string>()

  const classes: string[] = []

  _cn(args, classes)

  // join all the pieces into one then split on space
  // and remove duplicates
  return _clean(
    classes
      .filter(c => {
        // keep track of tokens already seen
        const ret = !used.has(c) && c !== "" && c !== " "
        used.add(c)
        return ret
      })
      .join(" ")
  )
}

export default cn
