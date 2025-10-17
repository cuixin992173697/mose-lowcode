import ButtonMaterial from '@/materials/button'
import TextMaterial from '@/materials/text'
import ImageMaterial from '@/materials/image'

const materialRegistry: Record<string, any> = {
  Button: ButtonMaterial,
  Text: TextMaterial,
  Image: ImageMaterial
}

export default materialRegistry
