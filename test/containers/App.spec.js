/**
 * Created by lucas lee on 2017/7/23.
 */
import expect from 'expect'
import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import App from '../../src/containers/App'
import configureStore from '../../src/store/configureStore'

function setup(initialState) {
    const store = configureStore(initialState)
    const app = mount(
        <Provider store={store}>
            <App />
        </Provider>
    )
    return {
        app,
        buttons: app.find('button'),
        p: app.find('p')
    }
}

describe('containers', () => {
    describe('App', () => {
        it('should display initial count', () => {
            const { p } = setup()
            expect(p.text()).toMatch(/^Clicked: 0 timers/)
        })
        it('should display updated count after increment button click', () => {
            const { buttons, p } = setup()
            buttons.at(0).simulate('click')
            expect(p.text()).toMatch(/^Clicked: 1 timers/)
        })
        it('should display updated count after decrement button click', () => {
            const { buttons, p } = setup()
            buttons.at(1).simulate('click')
            expect(p.text()).toMatch(/^Clicked: -1 timers/)
        })
        it('should not change if even and if odd button click', () => {
            const { buttons, p } = setup()
            buttons.at(2).simulate('click')
            expect(p.text()).toMatch(/^Clicked: 0 timers/)
        })
        it('should change if odd and if odd button clicked', () => {
            const { buttons, p } = setup({ counter: 1 })
            buttons.at(2).simulate('click')
            expect(p.text()).toMatch(/^Clicked: 2 timers/)
        })
    })
})
