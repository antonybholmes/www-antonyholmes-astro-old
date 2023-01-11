import fs from "fs"
import path, { join } from "path"

export const getAllFiles = (dir = "", ret: string[] = []) => {
  const files = fs.readdirSync(dir)

  files.forEach(file => {
    const p = path.join(dir, "/", file) //`${dirPath}/${file}`
    if (fs.statSync(p).isDirectory()) {
      getAllFiles(p, ret)
    } else {
      ret.push(p) //path.join(dirPath, "/", file))
    }
  })

  return ret
}

export const getAllMDFiles = (dir = "") =>
  getAllFiles(dir).filter(file => file.endsWith(".md"))
