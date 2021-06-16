import { createSelect, destroy } from 'unit-test-helpers'

describe('useMultiselect', () => {
  describe('multiselect', () => {
    it('should be the ref of container DOM', () => {
      let select = createSelect()

      expect(select.vm.multiselect).toStrictEqual(select.vm.$el)
    })
  })

  describe('tabindex', () => {
    it('should be 0 when not searchable', () => {
      let select = createSelect({
        searchable: false,
      })

      expect(select.vm.tabindex).toBe(0)
    })

    it('should be -1 when not searchable', () => {
      let select = createSelect({
        searchable: true,
      })

      expect(select.vm.tabindex).toBe(-1)
    })
  })

  describe('blur', () => {
    it('should blur input if searchable', () => {
      let select = createSelect({
        value: null,
        options: [1,2,3],
        searchable: true,
      }, {
        attach: true
      })

      select.element.focus()
      expect(select.vm.isOpen).toBe(true)

      select.vm.blur()
      expect(select.vm.isOpen).toBe(false)

      destroy(select)
    })

    it('should blur multiselect if not searchable', () => {
      let select = createSelect({
        value: null,
        options: [1,2,3],
      }, {
        attach: true
      })

      select.element.focus()
      expect(select.vm.isOpen).toBe(true)

      select.vm.blur()
      expect(select.vm.isOpen).toBe(false)

      destroy(select)
    })
  })

  describe('handleFocus', () => {
    it('should focus input if searchable', () => {
      let select = createSelect({
        value: null,
        options: [1,2,3],
        searchable: true,
      }, {
        attach: true
      })

      expect(select.vm.isOpen).toBe(false)

      select.vm.handleFocus()
      expect(select.vm.isOpen).toBe(true)

      destroy(select)
    })

    it('should not focus input if not searchable', () => {
      let select = createSelect({
        value: null,
        options: [1,2,3],
        searchable: false,
      }, {
        attach: true
      })

      expect(select.vm.isOpen).toBe(false)

      select.vm.handleFocus()
      expect(select.vm.isOpen).toBe(false)

      destroy(select)
    })
  })
})