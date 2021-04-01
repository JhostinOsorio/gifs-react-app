const { shallow } = require("enzyme")
const { default: GifGridItem } = require("../../components/GifGridItem")

describe('Pruebas en GifGridItem', () => {

  const title = 'Es un titulo';
  const url = 'http://localhost:3000/static/logo192.png';
  const wrapper = shallow(<GifGridItem title={title} url={url}/>)

  test('debe mostrar <GifGridItem /> correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('debe tener un parrafo en el title', () => {
    const p = wrapper.find('p').text()
    expect(p.trim()).toBe(title)
  })
  
  test('debe de tener la imagen igual al url y alt de los props', () => {
    const img = wrapper.find('img')
    // console.log(img.props().src)
    expect(img.props().src).toBe(url)
    expect(img.props().alt).toBe(title)
  })

  test('debe tener animate__fadeIn', () => {
    const div = wrapper.find('div')
    expect(div.hasClass('animate__fadeIn')).toBe(true)
  })
  
})