import React, { Component } from 'react';
import {
  convertFromRaw,
  EditorState,
} from 'draft-js';
import Editor, { composeDecorators } from 'draft-js-plugins-editor';
import createImagePlugin from 'draft-js-image-plugin';
import createFocusPlugin from 'draft-js-focus-plugin';
import createBlockDndUploadPlugin from 'draft-js-drag-n-drop-upload-plugin';
import editorStyles from './editorStyles.css';

const focusPlugin = createFocusPlugin();
const blockDndPlugin = createBlockDndUploadPlugin({
  handleUpload: (data, callback) => {

  }
});

console.log('eyo', blockDndPlugin)

const decorator = composeDecorators(
  focusPlugin.decorator,
);
const imagePlugin = createImagePlugin({ decorator });

const plugins = [
  blockDndPlugin,
  focusPlugin,
  imagePlugin
];

/* eslint-disable */
const initialState = {
    "entityMap": {},
    "blocks": [{
        "key": "9gm3s",
        "text": "You can have images in your text field which are draggable. Hover over the image press down your mouse button and drag it to another position inside the editor.",
        "type": "unstyled",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": [],
        "data": {}
    }]
};
/* eslint-enable */

export default class CustomImageEditor extends Component {

  state = {
    editorState: EditorState.createWithContent(convertFromRaw(initialState)),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  focus = () => {
    this.editor.focus();
  };

  render() {
    return (
      <div>
        <div className={editorStyles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref={(element) => { this.editor = element; }}
          />
        </div>
      </div>
    );
  }
}
