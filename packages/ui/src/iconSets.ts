export interface IconSet {
  name: string
  auth: {}
}

import { ref } from 'vue'
const iconSet = ref()

export const defineIconSet = (iconSet: IconSet) => {
  return iconSet
}

export const useIconSet = () => {
  return iconSet
}

export const loadIconSet = async (name: string, app?: any) => {
  try {
    const data = (await import(`./icon-sets/${name}.ts`)).default

    if (data) {
      iconSet.value = data
    }
  } catch (e) {
    throw new Error(`Failed to load ${name} icon set.`)
  }
}
