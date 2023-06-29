// https://github.com/boringdesigners/boring-avatars-service/blob/main/README.md

const COLORS = `colors=${[
    'F61217', 'FFEFB5', '65D1D1', 'FFCA00', '260D0D',
  ].join(',')}`

export function prepareAvatar(email: string, size = 64) {
  return _prepareIcon('beam', `${size}/${email}?square&${COLORS}`)
}

export function prepareContainerIcon(name: string, size = 64) {
  return _prepareIcon('bauhaus', `${size}/${name}?square&${COLORS}`)
}

function _prepareIcon(type: 'beam' | 'bauhaus', query: string) {
  return `https://source.boringavatars.com/${type}/${query}`
}
