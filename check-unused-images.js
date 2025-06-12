import fs from 'node:fs/promises'
import { globby } from 'globby'

const imageFiles = await globby(['src/assets/**/*.{png,jpg,jpeg,svg,gif,webp}'])
// const usedInCodeFiles = await globby(['src/**/*.{js,jsx,ts,tsx,html,css}'], {
//   ignore: ['node_modules', '.next', 'dist'],
// })

// const allCode = await Promise.all(
//   usedInCodeFiles.map(async (file) => {
//     const content = await fs.readFile(file, 'utf-8')
//     return content
//   }),
// )

const usedImageSet = new Set()
for (const code of allCode) {
  for (const imagePath of imageFiles) {
    const shortPath = imagePath.replace(/^src[\\/]/, '')
    if (code.includes(shortPath)) {
      usedImageSet.add(imagePath)
    }
  }
}

const unusedImages = imageFiles.filter((img) => !usedImageSet.has(img))

console.log('Unused Images:\n')
if (unusedImages.length === 0) {
  console.log(' No unused images found.')
} else {
  console.log(unusedImages.join('\n'))

  // AUTO DELETE UNNEEDED IMAGES
  const readline = await import('node:readline/promises')
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
  const confirm = await rl.question('\n❌ Do you want to delete these files? (yes/no): ')
  rl.close()

  if (confirm.trim().toLowerCase() === 'yes') {
    await Promise.all(unusedImages.map((file) => fs.unlink(file)))
    console.log('\n🧹 Unused images deleted successfully!')
  } else {
    console.log('\n Deletion aborted.')
  }
}

// This script checks for unused image files in the src/assets directory
// by scanning through the code files in the src directory.
// node check-unused-images.js