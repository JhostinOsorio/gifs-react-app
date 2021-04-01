import { shallow } from "enzyme"
import AddCategory from "../../components/AddCategory"

describe('Pruebas en AddCategory', () => {
  
  const setCategories = () => {}
  const wrapper = shallow(<AddCategory setCategories={setCategories} />)

  test('debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot()
  })

  

})
