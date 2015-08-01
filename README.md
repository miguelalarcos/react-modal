react-modal
===========

A simple modal for React Meteor.

Example
-------

For this example you have to ```meteor add miguelalarcos:react-model-mixins```.

```coffee
DemoModal = React.createClass
    mixins: [RMMx.changeDatatMx]
    ok: ->
        @props.okCallback(@state.file)
        modal.close()
    cancel: ->
        modal.close()
    getInitialState: ->
        file: @props.file
    render: ->
        <div>
            <input type='text' value=@state.file onChange=@changeDataText('file') />
            <button onClick=@ok>ok</button>
            <button onClick=@cancel>cancel</button>
        </div>


@MainLayout = React.createClass
    okCallback: (file) ->
        console.log file
    modal: ->
        modal.show <DemoModal file='file1.txt' okCallback=@okCallback />
    render: ->
        <div>
            <button onClick=@modal>modal</button>
            <modal.Modal />
        </div>
```