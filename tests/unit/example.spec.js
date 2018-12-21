import { shallowMount } from '@vue/test-utils'
import HistoryList from '@/components/HistoryList.vue'

describe('HistoryList.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HistoryList, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
