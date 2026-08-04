'use client'

interface AlphabetFilterProps {
  alphaParam: string
  onSelectAlpha: (letter: string) => void
  onReset: () => void
}

const ALPHABETS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export default function AlphabetFilter({
  alphaParam,
  onSelectAlpha,
  onReset,
}: AlphabetFilterProps) {
  return (
    <section className="bg-white border-gray-100 py-6 neightwonewwmain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 alphabetnewwwww">
        <div className="mb-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
            <div>
              <h2 className="text-base font-bold text-gray-900 neighbourtwosecondheading">
                Search by Alphabet
              </h2>
              <p className="text-xs text-gray-500 mt-0.5 neighbourtwoparagraph">
                Find your neighbourhood by selecting the first letter
              </p>
            </div>

            <button
              onClick={onReset}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors border cursor-pointer neighbourbuttonaa ${
                !alphaParam
                  ? 'bg-[#a44294] !text-white border-[#a44294]'
                  : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-300'
              }`}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {ALPHABETS.map((letter) => (
            <button
              key={letter}
              onClick={() => onSelectAlpha(letter)}
              className={`w-9 h-9 text-xs font-semibold rounded transition-colors border neighbourbuttonaa cursor-pointer ${
                alphaParam === letter
                  ? 'bg-[#a44294] !text-white border-[#a44294]'
                  : 'bg-gray-50 text-gray-700 border-gray-100 hover:bg-purple-50 hover:border-purple-300 hover:text-purple-700'
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
