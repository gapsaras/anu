import React from 'src/React'
describe('createElement', function() {
    it('type', () => {
        var el = React.createElement('p', null, 'aaa')
        expect(el.type).toBe('p')
        expect(el.props.children).toA('array')
        expect(el.props.children.length).toBe(1)
    })
    it('children', () => {
        var el = React.createElement('p', null, 'aaa', 'bbb', 'ccc')
        expect(el.props.children.length).toBe(1)

        var el = React.createElement('p', null, null)
        expect(el.props.children.length).toBe(0)

        var el = React.createElement('p', null)
        expect(el.props.children.length).toBe(0)
    })

    it('flatChildren', () => {
        var el = React.createElement('p', null, 'aaa', false, 'ccc')
        expect(el.props.children[0]).toEqual({ type: '#text', text: 'aaaccc', deep: 0 })

        var el = React.createElement('p', null, 'aaa', true, 'ccc')
        expect(el.props.children[0]).toEqual({ type: '#text', text: 'aaaccc', deep: 0 })

        var el = React.createElement('p', null, 'aaa', 111, 'ccc')
        expect(el.props.children[0]).toEqual({ type: '#text', text: 'aaa111ccc', deep: 0 })


        var el = React.createElement('p', null, 'aaa', '', 'ccc')
        expect(el.props.children[0]).toEqual({ type: '#text', text: 'aaaccc', deep: 0 })

        var el = React.createElement('p', null, 111, 222, 333)
        expect(el.props.children[0]).toEqual({ type: '#text', text: '111222333', deep: 0 })

        var el = React.createElement('p', null, 111, { type: '#text', text: 'ddd' }, 333)
        expect(el.props.children[0]).toEqual({ type: '#text', text: '111ddd333', deep: 0 })

    })
})