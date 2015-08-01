modal = {}
modal.show_ = new ReactiveVar(false)
modal.template = new ReactiveVar(null)

modal.show = (template) ->
    modal.show_.set true
    modal.template.set template
modal.close = ->
    modal.show_.set false

modal.Modal = React.createClass
    mixins : [ReactMeteorData]
    getMeteorData: ->
        template: modal.template.get()
        show_: modal.show_.get()
    render: ->
        if @data.show_
            <div className='modal'>
                <div className='center'>
                    {@data.template}
                </div>
            </div>
        else
            <div></div>

